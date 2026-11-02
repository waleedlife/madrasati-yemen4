/* اختبارات آلية خفيفة لمنصة مدرستي اليمن — تعمل بـ Node فقط دون أي تبعيات.
   التشغيل: npm test   (فحص بنية البيانات، سلامة المحتوى الموثق، منطق التصحيح، وغياب الأسرار) */
import { readFileSync } from "node:fs";
import vm from "node:vm";

let pass = 0, fail = 0;
const ok = (name, cond) => { console.log(`${cond ? "PASS" : "FAIL"} | ${name}`); cond ? pass++ : fail++; };
const read = p => readFileSync(new URL("../" + p, import.meta.url), "utf8");
function loadModule(path, expr) {
  const ctx = { window: {}, console };
  ctx.window.EXTRA_VIEWS = {};
  vm.createContext(ctx);
  return vm.runInContext(read(path) + "\n;" + expr, ctx);
}

function loadAudioDeferredHarness() {
  const elements = new Map();
  const makeGeneric = id => ({
    id, textContent: "", innerHTML: "", value: "", href: "", open: false,
    scrollHeight: 0, scrollTop: 0, style: {},
    classList: { add() {}, remove() {} },
    getBoundingClientRect: () => ({ width: 100, height: 40 }),
    getAttribute(name) { return this[name] || ""; },
    setAttribute(name, value) { this[name] = value; },
    removeAttribute(name) { delete this[name]; },
    scrollIntoView() {}, focus() {}
  });
  const getEl = id => { if (!elements.has(id)) elements.set(id, makeGeneric(id)); return elements.get(id); };
  const assignedSources = [];
  let srcAttr = "";
  const audioEl = {
    id: "auEl", readyState: 0, networkState: 0, duration: NaN, currentTime: 0,
    paused: true, ended: false, error: null, buffered: { length: 0 },
    preload: "none", crossOrigin: null, currentSrc: "", loadCalls: 0, playCalls: 0,
    getAttribute(name) { return name === "src" ? srcAttr : ""; },
    removeAttribute(name) { if (name === "src") { srcAttr = ""; this.currentSrc = ""; } },
    load() { this.loadCalls++; this.duration = NaN; this.currentTime = 0; },
    pause() { this.paused = true; },
    play() { this.playCalls++; this.paused = false; return Promise.resolve(); },
    addEventListener() {},
    canPlayType() { return "probably"; }
  };
  Object.defineProperty(audioEl, "src", {
    get() { return srcAttr; },
    set(value) { srcAttr = String(value || ""); this.currentSrc = srcAttr; if (srcAttr) assignedSources.push(srcAttr); }
  });
  elements.set("auEl", audioEl);
  const ctx = {
    window: { EXTRA_VIEWS: {} }, console, setTimeout, clearTimeout, performance,
    navigator: { onLine: true, userAgent: "Node VM deferred-audio test" },
    location: { origin: "https://preview.invalid" },
    document: { getElementById: getEl },
    state: { view: "audio", role: "student", user: { name: "طالب تجريبي" } },
    store: { audioLinks: {} },
    navigate() {}, toast() {}, save() {}, recordAttempt() {},
    arNum: n => String(n),
    esc: value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]))
  };
  vm.createContext(ctx);
  const api = vm.runInContext(read("assets/js/english8.js") + "\n" + read("assets/js/audio-library.js") + "\n;({ AU, auLoad, auToggle, activityMediaHTML, getAudioTrack })", ctx);
  return { api, audioEl, assignedSources, getEl };
}

/* 1) البيانات الأساسية */
const DB = loadModule("assets/js/data.js", "DB");
ok("DB: 18 درساً أساسياً", DB.lessons.length === 18);
ok("DB: 3 اختبارات × 5 أسئلة بسقوف صحيحة", DB.quizzes.length === 3 && DB.quizzes.every(q => q.questions.length === 5 && q.questions.every(x => x.a >= 0 && x.a < x.options.length && x.why)));
ok("DB: درس الإنجليزية العام موسوم unverified", DB.lessons.find(l => l.id === 7).unverified === true);
ok("DB: لا محتوى غير مناسب لمدرسة ابتدائية/أساسية في الدروس", !/(^|\s)القات(\s|$)|أكياس قات/.test(read("assets/js/data.js")));

/* 2) قسم إنجليزية ثامن — قواعد التوثيق */
const ENG8 = loadModule("assets/js/english8.js", "ENG8");
ok("ENG8: 7 وحدات بالضبط (Crescent 2)", ENG8.units.length === 7);
ok("ENG8: إجمالي خطوات المنهج 107 كما في الدليل", ENG8.totalSteps === 107);
const u1 = ENG8.units[0];
ok("ENG8: خطوات Unit 1 كاملة (12 خطوة عبر 7 مجموعات)", u1.stepsComplete === true && u1.steps.length === 7);
const u2 = ENG8.units[1];
ok("ENG8: خطوات Unit 2 كاملة (17 خطوة عبر 11 مجموعة كما في ملخص TB ص48–49)", u2.stepsComplete === true && u2.steps.length === 11 && u2.steps[10].steps === "17" && u2.tbSummary === "48–49");
ok("ENG8: كل مجموعة في Unit 2 لها أهداف ومفردات موثقة من ملاحظات TB ص50–75", u2.steps.every(st => (st.objectives || []).length >= 1 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 4 && /TB/.test(st.vocabRef || "")));
ok("ENG8: مفردات Unit 2 الصريحة من قوائم الدليل محفوظة (هدايا/عبور/ماضٍ بسيط)", ["jigsaw puzzle", "bracelet", "so"].every(w => u2.steps.find(st => st.ref === "u2g5").vocabAttested.includes(w)) && ["accident", "dangerous", "across"].every(w => u2.steps.find(st => st.ref === "u2g2").vocabAttested.includes(w)) && ["watched", "hopped", "prayed"].every(w => u2.steps.find(st => st.ref === "u2g0").vocabAttested.includes(w)));
const u3 = ENG8.units[2];
ok("ENG8: خطوات Unit 3 كاملة (15 خطوة عبر 12 مجموعة كما في ملخص TB ص76–77)", u3.stepsComplete === true && u3.steps.length === 12 && u3.steps[11].steps === "15" && u3.tbSummary === "76–77");
ok("ENG8: كل مجموعة في Unit 3 لها أهداف ومفردات موثقة من ملاحظات TB ص78–100", u3.steps.every(st => (st.objectives || []).length >= 2 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 4 && /TB/.test(st.vocabRef || "")));
ok("ENG8: مفردات Unit 3 الصريحة من قوائم الدليل محفوظة (كمية/مشاعر/عبوات/مراجعة)", ["flour", "fridge"].every(w => u3.steps.find(st => st.ref === "u3g0").vocabAttested.includes(w)) && ["frightened", "began"].every(w => u3.steps.find(st => st.ref === "u3g5").vocabAttested.includes(w)) && ["carton of milk", "packet of butter"].every(w => u3.steps.find(st => st.ref === "u3g7").vocabAttested.includes(w)) && ["socks", "presents"].every(w => u3.steps.find(st => st.ref === "u3g11").vocabAttested.includes(w)));
const u4 = ENG8.units[3];
ok("ENG8: خطوات Unit 4 كاملة (16 خطوة عبر 12 مجموعة كما في ملخص TB ص101–102)", u4.stepsComplete === true && u4.steps.length === 12 && u4.steps[11].steps === "16" && u4.tbSummary === "101–102");
ok("ENG8: كل مجموعة في Unit 4 لها أهداف ومفردات موثقة من ملاحظات TB ص103–130", u4.steps.every(st => (st.objectives || []).length >= 1 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 4 && /TB/.test(st.vocabRef || "")));
ok("ENG8: مفردات Unit 4 الصريحة من قوائم الدليل محفوظة (عروض/اتجاهات/وصف/مراجعة)", ["pull", "push", "carried"].every(w => u4.steps.find(st => st.ref === "u4g0").vocabAttested.includes(w)) && ["cross over", "straight on"].every(w => u4.steps.find(st => st.ref === "u4g4").vocabAttested.includes(w)) && ["look like", "ambulance"].every(w => u4.steps.find(st => st.ref === "u4g7").vocabAttested.includes(w)) && ["crossing", "walking", "hit"].every(w => u4.steps.find(st => st.ref === "u4g11").vocabAttested.includes(w)));
const u5 = ENG8.units[4];
ok("ENG8: قائمة خطوات Unit 5 مكتملة الهيكل من TB (18 خطوة عبر 9 مجموعات، لا تعني وحدة Verified)", u5.stepsComplete === true && u5.steps.length === 9 && u5.steps[8].steps === "18" && u5.tbSummary === "131–132");
ok("ENG8: Unit 5: حقول أهداف/مفردات ومراجع TB موجودة لكل مجموعة (اختبار تغطية بنيوي لا مطابقة PDF)", u5.steps.every(st => (st.objectives || []).length >= 2 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 5 && /TB/.test(st.vocabRef || "")));
ok("ENG8: عينة مفردات Unit 5 المثبتة في الاختبار محفوظة (تخييم/ملكية/صقر/قافية)", ["go camping", "take photographs"].every(w => u5.steps.find(st => st.ref === "u5g0").vocabAttested.includes(w)) && ["whose", "mine", "hers"].every(w => u5.steps.find(st => st.ref === "u5g4").vocabAttested.includes(w)) && ["wake up", "fed", "find out"].every(w => u5.steps.find(st => st.ref === "u5g7").vocabAttested.includes(w)) && ["soon", "camp", "lamp"].every(w => u5.steps.find(st => st.ref === "u5g8").vocabAttested.includes(w)));
const u6 = ENG8.units[5];
ok("ENG8: قائمة خطوات Unit 6 مكتملة الهيكل من TB (14 خطوة عبر 10 مجموعات، لا تعني وحدة Verified)", u6.stepsComplete === true && u6.steps.length === 10 && u6.steps[9].steps === "14" && u6.tbSummary === "161–162");
ok("ENG8: Unit 6: حقول أهداف/مفردات ومراجع TB موجودة لكل مجموعة (اختبار تغطية بنيوي لا مطابقة PDF)", u6.steps.every(st => (st.objectives || []).length >= 1 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 5 && /TB/.test(st.vocabRef || "")));
ok("ENG8: عينة مفردات Unit 6 المثبتة في الاختبار محفوظة (حيوانات/تفضيل أعلى/جملة/صقر)", ["long-eared owl", "Fennec fox", "zebra"].every(w => u6.steps.find(st => st.ref === "u6g0").vocabAttested.includes(w)) && ["biggest", "cheetah", "best"].every(w => u6.steps.find(st => st.ref === "u6g2").vocabAttested.includes(w)) && ["subject", "verb", "object"].every(w => u6.steps.find(st => st.ref === "u6g5").vocabAttested.includes(w)) && ["take care of", "fly away"].every(w => u6.steps.find(st => st.ref === "u6g8").vocabAttested.includes(w)));
const u7 = ENG8.units[6];
ok("ENG8: قائمة خطوات Unit 7 مكتملة الهيكل من TB (15 خطوة عبر 9 مجموعات، لا تعني وحدة Verified)", u7.stepsComplete === true && u7.steps.length === 9 && u7.steps[8].steps === "13/15" && u7.tbSummary === "186–187");
ok("ENG8: Unit 7: حقول أهداف/مفردات ومراجع TB موجودة لكل مجموعة (اختبار تغطية بنيوي لا مطابقة PDF)", u7.steps.every(st => (st.objectives || []).length >= 1 && /TB/.test(st.objectivesRef || "") && (st.vocabAttested || []).length >= 5 && /TB/.test(st.vocabRef || "")));
ok("ENG8: عينة مفردات Unit 7 المثبتة في الاختبار محفوظة (مهن/كمية/مسابقة/مراجعة)", ["builder", "fisherman", "other"].every(w => u7.steps.find(st => st.ref === "u7g0").vocabAttested.includes(w)) && ["kilo", "butter", "pencils"].every(w => u7.steps.find(st => st.ref === "u7g3").vocabAttested.includes(w)) && ["workshop", "baker", "secretary"].every(w => u7.steps.find(st => st.ref === "u7g6").vocabAttested.includes(w)) && ["passenger", "wooden", "housewife"].every(w => u7.steps.find(st => st.ref === "u7g8").vocabAttested.includes(w)));
ok("ENG8: أهداف الخطوتين 1.1 و1.2 موثقة بمرجع صفحة", /TB/.test(u1.steps[0].objectivesRef || "") && u1.steps[0].objectives.length === 7);
ok("ENG8: مفردات موثقة موجودة للخطوتين 1.1 و1.2 مع مرجعها", (u1.steps[0].vocabAttested || []).includes("chair") && (u1.steps[0].vocabAttested || []).includes("next to") && /TB/.test(u1.steps[0].vocabRef));
ok("ENG8: كل مجموعة في Unit 1 لها أهداف ومفردات موثقة من ملاحظات TB", u1.steps.every(s => (s.objectives || []).length >= 3 && /TB/.test(s.objectivesRef || "") && (s.vocabAttested || []).length >= 3 && /TB|WB/.test(s.vocabRef || "")));
ok("ENG8: قائمة WB1.10A المنسوخة بصريًا محفوظة في u1g5", ["bookshop", "living room", "carpet", "police station", "curtains", "cushion"].every(w => (u1.steps.find(s => s.ref === "u1g5").vocabAttested || []).includes(w)));
const u1Transcriptions = (ENG8.bookTranscriptions || []).filter(t => t.unit === 1);
ok("TRANSCRIPTIONS: سجل Unit 1 يحوي 37 سجلًا منسوخًا بصريًا وفجوة مصدر واحدة، وكلها دون Verified", u1Transcriptions.length === 38 && u1Transcriptions.filter(t => t.status === "transcribed-pending-second-review").length === 37 && u1Transcriptions.filter(t => t.status === "not-located-in-supplied-scan").length === 1 && u1Transcriptions.every(t => t.unit === 1 && t.status !== "verified"));
ok("TRANSCRIPTIONS: كل سجل له خطوة وكتاب وصفحة وتمرين وناسخ وتاريخ وطريقة، والفجوة وحدها بلا سطور", new Set(u1Transcriptions.map(t => t.id)).size === u1Transcriptions.length && u1Transcriptions.every(t => u1.steps.some(s => s.ref === t.stepRef) && ["PB", "WB"].includes(t.book) && t.printedPage !== undefined && t.exercise && t.transcriber && t.transcriptionDate === "2026-10-28" && /Visual reading/.test(t.method || "") && (t.status === "not-located-in-supplied-scan" ? (t.lines || []).length === 0 : (t.lines || []).length >= 1)));
ok("TRANSCRIPTIONS: تغطية الصفحات المطبوعة هي PB 1 و3 و4 وWB 1–13، وPB2 فجوة منفصلة لا نص منسوبًا إليها", [...new Set(u1Transcriptions.filter(t => t.book === "PB" && t.status === "transcribed-pending-second-review").map(t => t.printedPage))].sort().join(",") === "1,3,4" && [1,2,3,4,5,6,7,8,9,10,11,12,13].every(p => u1Transcriptions.some(t => t.book === "WB" && String(t.printedPage).split("–").map(Number).some((start, i, arr) => i === 0 && p >= start && p <= (arr[1] || start)))) && u1Transcriptions.find(t => t.id === "u1-pb02-not-located").printedPage === 2);
ok("TRANSCRIPTIONS: عينات مثبتة في الاختبار من الأغاني والحوار والعبارات وساعات WB وقائمة WB1.10A", u1Transcriptions.find(t => t.id === "u1-pb01-song-apples").lines.includes("Do you like bananas?") && u1Transcriptions.find(t => t.id === "u1-pb03-1-6-bill").lines.includes("Bill: I watch TV and I go swimming every Tuesday.") && u1Transcriptions.find(t => t.id === "u1-pb04-1-12-tim-saleh").lines.includes("H. We go to the beach every Thursday.") && u1Transcriptions.find(t => t.id === "u1-wb05-1-5a").lines.some(l => l.includes("Fatma: 5 o'clock")) && u1Transcriptions.find(t => t.id === "u1-wb11-1-10a").lines[0].includes("police station"));
ok("TRANSCRIPTIONS: كل مجموعة خطوات Unit 1 مرتبطة بسجل PB/WB منسوخ واحد على الأقل", u1.steps.every(s => u1Transcriptions.some(t => t.stepRef === s.ref && t.status === "transcribed-pending-second-review")));
const u2Transcriptions = (ENG8.bookTranscriptions || []).filter(t => t.unit === 2);
const u2RefsFor = t => Array.isArray(t.stepRefs) && t.stepRefs.length ? t.stepRefs : [t.stepRef];
ok("TRANSCRIPTIONS: سجل Unit 2 يحوي 43 سجلًا (12 PB + 31 WB) وكلها منسوخة بصريًا بانتظار مراجعة ثانية لا Verified", u2Transcriptions.length === 43 && u2Transcriptions.filter(t => t.book === "PB").length === 12 && u2Transcriptions.filter(t => t.book === "WB").length === 31 && u2Transcriptions.every(t => t.status === "transcribed-pending-second-review" && t.status !== "verified" && (t.lines || []).length >= 1));
ok("TRANSCRIPTIONS: بيانات Unit 2 الوصفية وروابط الخطوات والصفحات متسقة (PB PDF=printed+2 وWB PDF=printed+2)", new Set(u2Transcriptions.map(t => t.id)).size === u2Transcriptions.length && u2Transcriptions.every(t => u2RefsFor(t).every(ref => u2.steps.some(s => s.ref === ref)) && ["PB", "WB"].includes(t.book) && t.exercise && t.kind && t.transcriber && t.transcriptionDate === "2026-10-28" && /Visual reading/.test(t.method || "") && t.pdfPage === t.printedPage + 2 && (t.book === "PB" ? t.printedPage >= 5 && t.printedPage <= 16 : t.printedPage >= 14 && t.printedPage <= 28)));
ok("TRANSCRIPTIONS: تغطية Unit 2 تشمل PB المطبوعة 5–16 وWB المطبوعة 14–28 وكل مجموعة خطوات، مع ربط أغنية PB9 بالمجموعتين", [5,6,7,8,9,10,11,12,13,14,15,16].every(p => u2Transcriptions.some(t => t.book === "PB" && t.printedPage === p)) && [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].every(p => u2Transcriptions.some(t => t.book === "WB" && t.printedPage === p)) && u2.steps.every(s => u2Transcriptions.some(t => u2RefsFor(t).includes(s.ref))) && JSON.stringify(u2Transcriptions.find(t => t.id === "u2-pb09-2-4-2-6-song").stepRefs) === JSON.stringify(["u2g2", "u2g3"]));
ok("TRANSCRIPTIONS: عينات Unit 2 المثبتة في الاختبار محفوظة (حوار/أغنية/ساعات/سلاسل حروف/قراءة خريطة)", u2Transcriptions.find(t => t.id === "u2-pb06-2-2-yesterday").lines.includes("F. Jack didn't come to school. He went fishing.") && u2Transcriptions.find(t => t.id === "u2-pb09-2-4-2-6-song").lines.includes("Then he heard his friend cry:") && u2Transcriptions.find(t => t.id === "u2-pb11-2-7").lines.includes("\u0041meena: I'd love to, Fatma. When?") && u2Transcriptions.find(t => t.id === "u2-wb19-2-8a").lines.some(l => l.includes("six o'clock")) && u2Transcriptions.find(t => t.id === "u2-wb20-2-10a").lines.some(l => l.includes("ljigsawipuzzlet")) && u2Transcriptions.find(t => t.id === "u2-wb22-2-12").lines.includes("Then they walked home."));
ok("ENG8: كل خطوة في كل الوحدات لها مواد (PB/WB/CS) ولغة مستهدفة", ENG8.units.every(u => u.steps.every(s => s.materials && s.language && s.language.length)));
ok("ENG8: قوائم خطوات الوحدات السبع مكتملة الهيكل من TB دون ادعاء Verified", ENG8.units.every(u => u.stepsComplete === true));
ok("ENG8: مصادر المنهج الثلاثة معلنة بحالاتها", ENG8.docs.length === 3 && ENG8.docs.find(d => d.code === "TB").status === "verified" && ENG8.docs.find(d => d.code === "PB").status === "pending");
ok("DOCS: حدود الاكتمال/التحقق وحدود الاختبارات موثقة صراحة ولا تُدعى مطابقة PB/WB", /اكتمال الهيكل وقائمة الخطوات/.test(read("docs/CONTENT-SOURCING.md")) && /لا توصف أي وحدة حاليًا بأنها «مكتملة بالكامل» أو «Verified»/.test(read("docs/CONTENT-SOURCING.md")) && /لا تقرأ ملفات PDF أثناء التشغيل/.test(read("docs/CONTENT-SOURCING.md")) && /لا تثبت وحدها صحة كل محتوى/.test(read("README.md")) && /استخراج TB لا يعني نسخ PB\/WB بصريًا أو اعتماد أي وحدة Verified/.test(read("assets/js/english8.js")));

/* 3) محرك الأنشطة */
const actCtx = loadModule("assets/js/activities.js", "({ SEEDED_ACTIVITIES, ACT_TYPES, gradeSelections, gradeSequence })");
ok("ACT: 7 أنواع أنشطة مسجلة في المشغّل", Object.keys(actCtx.ACT_TYPES).length === 7);
ok("ACT: كل نشاط ممهّد نوعه مدعوم وله حالة مصدر معلنة", actCtx.SEEDED_ACTIVITIES.every(a => actCtx.ACT_TYPES[a.type] && ["verified", "teacher"].includes(a.sourceStatus)) && actCtx.SEEDED_ACTIVITIES.find(a => a.id === "e8-u1-match").sceneId === "bill-talk");
ok("ACT: الأنشطة القصصية/الحوارية غير المنسوخة من الكتاب موسومة teacher", actCtx.SEEDED_ACTIVITIES.filter(a => a.sourceStatus === "teacher").every(a => /إعداد المعلم|ليس نص/.test(a.sourceNote)));
const mcq = actCtx.SEEDED_ACTIVITIES.find(a => a.type === "mcq");
const g1 = actCtx.gradeSelections(mcq.items, mcq.items.map(i => i.a));
ok("ACT: تصحيح الاختيار من متعدد — إجابات صحيحة كاملة", g1.score === g1.total);
ok("ACT: كل سؤال اختيار له تفسير", actCtx.SEEDED_ACTIVITIES.filter(a => a.type === "mcq" || a.type === "fill").every(a => a.items.every(i => i.why)));
const ord = actCtx.SEEDED_ACTIVITIES.find(a => a.type === "order");
ok("ACT: تصحيح الترتيب — تطابق كامل وعكسي خاطئ", actCtx.gradeSequence(ord.answer, ord.answer).perfect && !actCtx.gradeSequence(ord.answer, ord.pieces).perfect);
const match = actCtx.SEEDED_ACTIVITIES.find(a => a.type === "match");
ok("ACT: التوصيل يملك ترتيب مبعثر واضح", match.rightOrder.some((x, i) => x !== i));
ok("ACT: كل مجموعة خطوات في Unit 1 لها نشاط ممهّد واحد على الأقل", u1.steps.every(s => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === s.ref)));
ok("ACT: كل مجموعة خطوات في Unit 2 لها نشاط ممهّد واحد على الأقل", u2.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u2acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u2g/.test(a.stepRef));
ok("ACT: أنشطة Unit 2 الأحد عشر موسومة teacher بمراجع TB ومصححة بالكامل", u2acts.length === 11 && u2acts.every(a => a.sourceStatus === "teacher" && /TB/.test(a.sourceNote)) && u2acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u2acts.filter(a => a.type === "order").every(a => actCtx.gradeSequence(a.answer, a.answer).perfect && JSON.stringify(a.pieces) !== JSON.stringify(a.answer)) && u2acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)));
ok("ACT: كل مجموعة خطوات في Unit 3 لها نشاط ممهّد واحد على الأقل", u3.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u3acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u3g/.test(a.stepRef));
ok("ACT: أنشطة Unit 3 الاثنا عشر موسومة teacher بمراجع TB ومصححة بالكامل", u3acts.length === 12 && u3acts.every(a => a.sourceStatus === "teacher" && /TB/.test(a.sourceNote)) && u3acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u3acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)) && u3acts.filter(a => a.type === "match").every(a => a.rightOrder.some((x, i) => x !== i)));
ok("ACT: كل مجموعة خطوات في Unit 4 لها نشاط ممهّد واحد على الأقل", u4.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u4acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u4g/.test(a.stepRef));
ok("ACT: أنشطة Unit 4 الاثنا عشر موسومة teacher بمراجع TB ومصححة بالكامل", u4acts.length === 12 && u4acts.every(a => a.sourceStatus === "teacher" && /TB/.test(a.sourceNote)) && u4acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u4acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)) && u4acts.filter(a => a.type === "order").every(a => actCtx.gradeSequence(a.answer, a.answer).perfect && JSON.stringify(a.pieces) !== JSON.stringify(a.answer)));
ok("ACT: كل مجموعة خطوات في Unit 5 لها نشاط منصة واحد على الأقل", u5.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u5acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u5g/.test(a.stepRef));
ok("ACT: أنشطة Unit 5 العشرة موسومة teacher بمراجع TB ويصحح المشغل إجاباتها المعدة", u5acts.length === 10 && u5acts.every(a => a.sourceStatus === "teacher" && /TB/.test(a.sourceNote)) && u5acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u5acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)) && u5acts.filter(a => a.type === "order").every(a => actCtx.gradeSequence(a.answer, a.answer).perfect && JSON.stringify(a.pieces) !== JSON.stringify(a.answer)) && u5acts.filter(a => a.type === "match").every(a => a.rightOrder.some((x, i) => x !== i)));
ok("ACT: كل مجموعة خطوات في Unit 6 لها نشاط منصة واحد على الأقل", u6.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u6acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u6g/.test(a.stepRef));
ok("ACT: أنشطة Unit 6 العشرة موسومة teacher بمراجع TB ويصحح المشغل إجاباتها المعدة", u6acts.length === 10 && u6acts.every(a => a.sourceStatus === "teacher" && /من إعداد المعلم/.test(a.sourceNote) && /TB/.test(a.sourceNote)) && u6acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u6acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)) && u6acts.filter(a => a.type === "order").every(a => actCtx.gradeSequence(a.answer, a.answer).perfect && JSON.stringify(a.pieces) !== JSON.stringify(a.answer)) && u6acts.filter(a => a.type === "match").every(a => a.rightOrder.some((x, i) => x !== i)));
ok("ACT: كل مجموعة خطوات في Unit 7 لها نشاط منصة واحد على الأقل", u7.steps.every(st => actCtx.SEEDED_ACTIVITIES.some(a => a.stepRef === st.ref)));
const u7acts = actCtx.SEEDED_ACTIVITIES.filter(a => /^u7g/.test(a.stepRef));
ok("ACT: أنشطة Unit 7 التسعة موسومة teacher بمراجع TB ويصحح المشغل إجاباتها المعدة", u7acts.length === 9 && u7acts.every(a => a.sourceStatus === "teacher" && /من إعداد المعلم/.test(a.sourceNote) && /TB/.test(a.sourceNote)) && u7acts.filter(a => a.type === "mcq" || a.type === "fill").every(a => actCtx.gradeSelections(a.items, a.items.map(i => i.a)).score === a.items.length) && u7acts.filter(a => a.type === "dialogue").every(a => a.items.every(n => n.choices.filter(c => c.ok).length === 1)) && u7acts.filter(a => a.type === "order").every(a => actCtx.gradeSequence(a.answer, a.answer).perfect && JSON.stringify(a.pieces) !== JSON.stringify(a.answer)) && u7acts.filter(a => a.type === "match").every(a => a.rightOrder.some((x, i) => x !== i)));
const u1g4Act = actCtx.SEEDED_ACTIVITIES.find(a => a.id === "e8-u1-ing-places");
const u1g5Act = actCtx.SEEDED_ACTIVITIES.find(a => a.id === "e8-u1-house-categories");
ok("ACT: نشاطا u1g4/u1g5 الجديدان موسومان teacher ومصححان بالكامل", u1g4Act && u1g5Act && u1g4Act.sourceStatus === "teacher" && u1g5Act.sourceStatus === "teacher" && /WB ص8–10/.test(u1g4Act.sourceNote) && /WB ص11/.test(u1g5Act.sourceNote) && actCtx.gradeSelections(u1g4Act.items, u1g4Act.items.map(i => i.a)).score === u1g4Act.items.length && actCtx.gradeSelections(u1g5Act.items, u1g5Act.items.map(i => i.a)).score === u1g5Act.items.length);

/* 4) رفيق اللغة */
const bot = loadModule("assets/js/chatbot.js", "({ BOT_SCENARIOS, BOT_PHRASES, PEER_DECKS })");
ok("BOT: 4 سيناريوهات تبادل أدوار على الأقل (أولها دور Bill من PB3)", bot.BOT_SCENARIOS.length >= 4 && bot.BOT_SCENARIOS[0].id === "rp-pb3-bill" && bot.BOT_SCENARIOS.every(s => s.nodes.length >= 3 && s.nodes.every(n => n.accept.length && n.model && s.src)));
ok("BOT: عبارات نطق لها مرجعية خطوات", bot.BOT_PHRASES.every(p => /U[12]/.test(p.src)));
ok("BOT: حزم حوار طالبين بمصادرها وتلميحاتها", bot.PEER_DECKS.length === 3 && bot.PEER_DECKS.every(d => d.qs.every(q => q.length === 2)));

/* 5) استوديو المعلم */
const studio = loadModule("assets/js/studio-ai.js", "({ RESOURCE_TYPES })");
ok("STUDIO: 14 نوع مورد على الأقل، قابلة للتوسع بسجلّ موحّد", studio.RESOURCE_TYPES.length >= 14 && studio.RESOURCE_TYPES.every(t => t.id && t.actType));

/* 6) سلامة عامة */
const frontFiles = ["index.html", "assets/js/app.js", "assets/js/data.js", "assets/js/english8.js", "assets/js/activities.js", "assets/js/dialogues-data.js", "assets/js/dialogues.js", "assets/js/chatbot.js", "assets/js/studio-ai.js", "assets/js/audio-library.js", "assets/js/scenes.js"];
const joined = frontFiles.map(read).join("\n");
ok("SAFETY: لا مفاتيح API أو أسرار في الواجهة", !/\bsk-[A-Za-z0-9]{8,}|AKIA[0-9A-Z]{8,}|api[_-]?key\s*[:=]\s*["'][^"']+["']|(client_)?secret\s*[:=]\s*["'][^"']+["']/i.test(joined));
ok("INTEGRATION: index.html يربط كل وحدات v2 ومختبر الحوارات قبل app.js", ["english8.js", "activities.js", "dialogues-data.js", "dialogues.js", "chatbot.js", "studio-ai.js", "modules.css"].every(f => read("index.html").includes(f)) && read("index.html").indexOf("dialogues.js") < read("index.html").lastIndexOf("app.js") && read("index.html").indexOf("studio-ai.js") < read("index.html").lastIndexOf("app.js") && read("index.html").includes("activities.js?v=20261028-unit2-book-transcriptions"));
ok("INTEGRATION: أزرار النطق الآلي تمرر النص مشفرًا بأمان ولا تكسر سمة onclick", ["assets/js/english8.js", "assets/js/activities.js", "assets/js/chatbot.js"].every(f => !read(f).includes('onclick="speakEN(${JSON.stringify') && read(f).includes("speakEncodedText")) && !read("assets/js/english8.js").includes("speakEN('${w}')") && read("assets/js/english8.js").includes("function speakEncoded(encoded)") && read("index.html").includes("english8.js?v=20261028-dialogue-lab") && read("index.html").includes("chatbot.js?v=20261028-dialogues-companion-scenes") && read("assets/js/chatbot.js").includes("botSpeakEncoded('${speakEncodedText"));
ok("INTEGRATION: app.js يسجّل واجهات الوحدات ويعرّف recordAttempt", /EXTRA_VIEWS/.test(read("assets/js/app.js")) && /function recordAttempt/.test(read("assets/js/app.js")));
ok("PRIVACY: النطق يؤكد في الكود أن التسجيل لا يُحفظ/يُرفع", /لا يُحفظ ولا يُرفع|لا يُرفع/.test(read("assets/js/chatbot.js")));


/* 7) مكتبة صوتيّات Google Drive المعتمدة — إعادة تنظيم v3 */
const au = loadModule("assets/js/audio-library.js", "({ AUDIO_SOURCE, AUDIO_TRACKS, AUDIO_REVIEW_CANDIDATES, OWNER_AUDIO_FEATURES, AUDIO_PLAYBACK_DEFERRED, AUDIO_DEFERRED_NOTICE })");
ok("AUDIO: فهرس Drive يضم 65 ملفاً مرقماً وملفاً تجميعياً واحداً", au.AUDIO_TRACKS.length === 66 && au.AUDIO_TRACKS.filter(t => t.kind === "numbered").length === 65 && au.AUDIO_TRACKS.filter(t => t.kind === "compilation").length === 1);
ok("AUDIO: معرّفات Drive فريدة وروابط العرض/البثّ مبنية من المعرّف نفسه", new Set(au.AUDIO_TRACKS.map(t => t.driveId)).size === 66 && au.AUDIO_TRACKS.every(t => /^[A-Za-z0-9_-]{20,}$/.test(t.driveId) && t.viewUrl.includes(t.driveId) && t.streamUrl.includes("drive.usercontent.google.com/download?id=" + t.driveId) && t.streamUrl.includes("confirm=t") && t.inlineStreamUrl.includes("drive.usercontent.google.com/download?id=" + t.driveId) && t.inlineStreamUrl.includes("export=view&authuser=0") && t.legacyStreamUrl.includes("drive.google.com/uc?export=download&id=" + t.driveId) && t.previewUrl.includes("/file/d/" + t.driveId + "/preview")));
ok("AUDIO: لا تشغيل تلقائي — auLoad يختار/يحمّل فقط والمشغّل يعرض --:-- حتى وصول المدة", !/auLoad\([^)]*,\s*true\)/.test(["assets/js/audio-library.js", "assets/js/chatbot.js", "assets/js/scenes.js"].map(read).join("\n")) && /el\.preload = "metadata"/.test(read("assets/js/audio-library.js")) && read("assets/js/audio-library.js").includes("--:-- / --:--") && /MEDIA_ERR_SRC_NOT_SUPPORTED/.test(read("assets/js/audio-library.js")) && /auShowDrivePreview/.test(read("assets/js/audio-library.js")));
ok("AUDIO: تسلسل Drive يبقي CORS anonymous ثابتاً ويجرّب export=view قبل uc القديم", read("assets/js/audio-library.js").includes('<audio id="auEl" preload="none" crossorigin="anonymous"') && /el\.crossOrigin = "anonymous";[\s\S]{0,160}el\.src = t\.streamUrl/.test(read("assets/js/audio-library.js")) && /function auRetryStreamAttempt[\s\S]{0,520}el\.crossOrigin = "anonymous";[\s\S]{0,160}el\.src = url/.test(read("assets/js/audio-library.js")) && /AU\.streamStage === 0 && t\.inlineStreamUrl/.test(read("assets/js/audio-library.js")) && /retry-inline-view-source/.test(read("assets/js/audio-library.js")) && /AU\.streamStage === 1 && t\.legacyStreamUrl/.test(read("assets/js/audio-library.js")) && /retry-legacy-source/.test(read("assets/js/audio-library.js")) && /<audio controls preload="none" crossorigin="anonymous"/.test(read("assets/js/audio-library.js")));
ok("AUDIO: سجل تشخيص فعلي ومدة صفرية غير مضللة ورابط معاينة بنافذة عادية", /function auRunDriveDiagnostic/.test(read("assets/js/audio-library.js")) && /function auDiag\(/.test(read("assets/js/audio-library.js")) && /loadedmetadata/.test(read("assets/js/audio-library.js")) && /el\.duration > 0 \? auFmtTime\(el\.duration\) : "--:--"/.test(read("assets/js/audio-library.js")) && /id="auOpenPreview"/.test(read("assets/js/audio-library.js")) && read("index.html").includes("audio-library.js?v=20261027-audio-deferred"));
ok("AUDIO: مجلد المصدر والمعلومات المقيدة صريحة (لا تقسيم SB/WB مخترع)", au.AUDIO_SOURCE.folderId === "1xeFT2asqEU2NRx4mbaarZy_6D-Xqe_rr" && au.AUDIO_TRACKS.every(t => /غير مصرّح/.test(t.book) && t.duration === ""));
ok("AUDIO: لا بقايا لمصدر Archive السابق في مكتبة الصوتيات", !/archive\.org|Passport to the World|pttwg8/.test(read("assets/js/audio-library.js")));
ok("AUDIO: الافتراضي Mapping Unconfirmed — لا اعتماد بلا قرار معلم وإلزام Verified بخطوة", /return l && AUDIO_STATUS\[l.status\] \? l.status : "unconfirmed"/.test(read("assets/js/audio-library.js")) && /status === "verified" && !stepRef/.test(read("assets/js/audio-library.js")));
ok("AUDIO: مرشح Unit1 اليدوي الوحيد gd-03 مرتبط كمراجعة بخطوة u1g3 الحقيقية", au.AUDIO_REVIEW_CANDIDATES.length === 1 && au.AUDIO_REVIEW_CANDIDATES[0].trackId === "gd-03" && ENG8.units.some(u => u.steps.some(s => s.ref === au.AUDIO_REVIEW_CANDIDATES[0].stepRef)));
ok("AUDIO: روابط صاحب المشروع مميزة دون تحويلها Verified (gd-01/gd-03 وملفات 04–06 بلا ربط مخترع)", au.OWNER_AUDIO_FEATURES.length === 5 && au.OWNER_AUDIO_FEATURES.map(f => f.trackId).join(",") === "gd-01,gd-03,gd-04,gd-05,gd-06" && !au.OWNER_AUDIO_FEATURES[0].stepRef && au.AUDIO_TRACKS.find(t => t.id === "gd-01").driveId === "1AOkQSESkfZmEQSZAXEZBEV2nuSkG8StR" && au.OWNER_AUDIO_FEATURES[1].trackId === "gd-03" && au.OWNER_AUDIO_FEATURES[1].stepRef === "u1g3" && /Bill/.test(au.OWNER_AUDIO_FEATURES[1].title) && au.AUDIO_TRACKS.find(t => t.id === "gd-03").driveId === "1t04A_L-npDusmb8wSWwGHzPumB29eU1m" && au.AUDIO_TRACKS.find(t => t.id === "gd-04").driveId === "1DPqfQbPT_--Jmr4wX0yhjmA3Kag1ThNU" && au.AUDIO_TRACKS.find(t => t.id === "gd-05").driveId === "1AhkU0STwr57UHXInuwetnTSxE90HyL5S" && au.AUDIO_TRACKS.find(t => t.id === "gd-06").driveId === "1pBuUGv7kuK6kPfuLJ4iODqRNdtQICw3D" && au.OWNER_AUDIO_FEATURES.slice(2).every(f => !f.stepRef) && au.OWNER_AUDIO_FEATURES.slice(2).map(f => f.viewerDuration).join(",") === "4:00,2:45,4:45" && /ownerAudioFeaturesHTML/.test(read("assets/js/audio-library.js")) && /auRunDriveDiagnostic\(trackId\)/.test(read("assets/js/audio-library.js")));
const auDiagCtx = loadModule("assets/js/audio-library.js", "({ AU, auDiagSummaryText, auDiagReportText, auClassifyProbeBytes })");
auDiagCtx.AU.diag = [
  "2026-10-27T00:00:00.000Z | event=source-set | track=gd-03/03.mp3 | stage=0 | fetchMode=cors-anonymous | readyState=0 | networkState=2 | duration=NaN | currentTime=0 | mediaError=0:NO_MEDIA_ERROR_YET",
  "2026-10-27T00:00:01.000Z | event=error | track=gd-03/03.mp3 | stage=1 | fetchMode=cors-anonymous | readyState=0 | networkState=3 | duration=NaN | currentTime=0 | mediaError=4:MEDIA_ERR_SRC_NOT_SUPPORTED",
  "2026-10-27T00:00:02.000Z | event=network-probe-response | track=gd-03/03.mp3 | stage=2 | fetchMode=cors-anonymous | readyState=0 | networkState=3 | duration=NaN | currentTime=0 | mediaError=4:MEDIA_ERR_SRC_NOT_SUPPORTED | probe=inline-view | httpStatus=206 | contentType=audio/mpeg | bodyClass=mp3-id3 | finalUrl=https://drive.usercontent.google.com/download?id=gd03&export=view"
];
ok("AUDIO: ملخص تشخيص gd-03 يلتقط MediaError وreadyState/networkState وغياب loadedmetadata/canplay دون ادعاء سبب", /latestReadyState=0/.test(auDiagCtx.auDiagSummaryText()) && /latestNetworkState=3/.test(auDiagCtx.auDiagSummaryText()) && /loadedmetadata=NO/.test(auDiagCtx.auDiagSummaryText()) && /canplay=NO/.test(auDiagCtx.auDiagSummaryText()) && /MEDIA_ERR_SRC_NOT_SUPPORTED/.test(auDiagCtx.auDiagSummaryText()) && /networkProbeInlineView=HTTP 206; contentType=audio\/mpeg; body=mp3-id3/.test(auDiagCtx.auDiagSummaryText()) && /Raw browser media events/.test(auDiagCtx.auDiagReportText()) && /id="gd03DiagGuide"/.test(read("assets/js/audio-library.js")) && /function auDiagDownload/.test(read("assets/js/audio-library.js")));
ok("AUDIO: فحص HTTP محدود يطلب 16 بايت فقط ويصنف MP3 مقابل HTML ويسجل Resource Timing", /Range: "bytes=0-15"/.test(read("assets/js/audio-library.js")) && /network-probe-response/.test(read("assets/js/audio-library.js")) && /auDiagResourceTiming\("media-final-failure"\)/.test(read("assets/js/audio-library.js")) && /auMaybeRunNetworkProbe\(\)/.test(read("assets/js/audio-library.js")) && auDiagCtx.auClassifyProbeBytes(new Uint8Array([0x49, 0x44, 0x33, 0x03])) === "mp3-id3" && auDiagCtx.auClassifyProbeBytes(new Uint8Array([...new TextEncoder().encode("<!doctype html>")])) === "html-like");
const auDeferredHarness = loadAudioDeferredHarness();
auDeferredHarness.api.auLoad("gd-03");
const deferredSelectionClean = auDeferredHarness.api.AU.current && auDeferredHarness.api.AU.current.id === "gd-03"
  && auDeferredHarness.assignedSources.length === 0
  && auDeferredHarness.audioEl.getAttribute("src") === ""
  && auDeferredHarness.api.AU.streamEnabledForLoad === false
  && auDeferredHarness.getEl("auMsg").innerHTML.includes(au.AUDIO_DEFERRED_NOTICE);
auDeferredHarness.api.auToggle();
const deferredToggleClean = auDeferredHarness.assignedSources.length === 0 && auDeferredHarness.audioEl.playCalls === 0;
auDeferredHarness.api.auLoad("gd-03", { diagnostic: true });
const diagnosticStillExplicit = auDeferredHarness.assignedSources.length === 1
  && auDeferredHarness.assignedSources[0] === auDeferredHarness.api.getAudioTrack("gd-03").streamUrl
  && auDeferredHarness.api.AU.streamEnabledForLoad === true;
ok("AUDIO: التأجيل المؤقت يعرض الفهرس دون طلب وسائط، والتشخيص الصريح وحده يفعّل مسار البثّ", au.AUDIO_PLAYBACK_DEFERRED === true && au.AUDIO_DEFERRED_NOTICE === "تشغيل التسجيلات الصوتية قيد الإصلاح، وسيُعاد تفعيله لاحقًا" && deferredSelectionClean && deferredToggleClean && diagnosticStillExplicit && /playback-deferred-selection/.test(read("assets/js/audio-library.js")) && /auLoad\(t\.id, \{ diagnostic: true \}\)/.test(read("assets/js/audio-library.js")));
const deferredActivityMedia = auDeferredHarness.api.activityMediaHTML({ audioTrackId: "gd-03" });
ok("AUDIO: النطق الآلي اختياري بالضغط وليس بديلاً مقنّعاً عن MP3، والنشاط يكتمل دون مشغّل Drive", deferredActivityMedia.includes(au.AUDIO_DEFERRED_NOTICE) && !deferredActivityMedia.includes("<audio") && /id="auTtsText"/.test(read("assets/js/audio-library.js")) && /onclick="auSpeakAutomatedText\(\)"/.test(read("assets/js/audio-library.js")) && /ليس التسجيل الصوتي الأصلي/.test(read("assets/js/audio-library.js")) && /النطق الآلي.*عند الضغط فقط/.test(read("assets/js/english8.js")) && read("index.html").includes("english8.js?v=20261028-dialogue-lab"));
const audioCsvLines = read("docs/english8-audio-index.csv").trim().split("\n");
ok("AUDIO: جدول CSV المساند يضم رأساً و66 تسجيلاً", audioCsvLines.length === 67 && /mapping_status/.test(audioCsvLines[0]) && audioCsvLines.slice(1).every(l => l.includes("Mapping Unconfirmed")));

/* 8) المشاهد المتحركة والتكاملات */
const scenes = loadModule("assets/js/scenes.js", "SCENES");
ok("SCENES: 3 مشاهد SVG على الأقل", scenes.length >= 3);
const billScene = scenes.find(x => x.id === "bill-talk");
ok("SCENES: حوار PB3 منسوخ حرفياً (B-i-l-l + من England)", billScene && billScene.lines.some(l => l.text.includes("B-i-l-l")) && billScene.lines.some(l => l.text.includes("from England")));
ok("SCENES: عبارات PB4 الثماني موجودة بمراجعها", scenes.find(x => x.id === "tim-saleh").lines.length === 8);
ok("SCENES: كل مشهد له خطوة منهج صحيحة ومرجع", scenes.every(x => ENG8.units.some(u => u.steps.some(s => s.ref === x.stepRef)) && x.sourceRef && x.lines.length));
ok("SCENES: وسيطها مشهد ويب متحرك بنطق جهاز — لا فيديو ولا مزامنة Drive مدّعاة", scenes.every(x => x.mediaKind === "animated-web-scene" && x.syncStatus === "device-tts-line-by-line"));
ok("SCENES: نصا PB3/PB4 منسوخان بصريًا وقيد مراجعة ثانية لا Verified، ومشهد الوقت إطار معلم لغياب PB2", ["bill-talk", "tim-saleh"].every(id => scenes.find(x => x.id === id).sourceStatus === "transcribed-pending-second-review") && scenes.find(x => x.id === "bill-time").sourceStatus === "teacher" && /لم تُوجد بين ص1 وص3/.test(scenes.find(x => x.id === "bill-time").sourceRef));
ok("SCENES: تسجيل Bill المرشح موجود في فهرس Drive وغير معروض كمتزامن", au.AUDIO_TRACKS.some(t => t.id === billScene.driveCandidateId));
ok("SCENES: أسئلة بعد المشهد بإجابات ضمن النطاق", scenes.every(x => (x.questions || []).every(q => q.a >= 0 && q.a < q.options.length && q.why)));

/* 9) مختبر حوارات Pupil's Book — نسخ بصري/صوت مولّد/مهارات أربع */
const dlgCtx = { window: { EXTRA_VIEWS: {} }, console, setTimeout, clearTimeout };
vm.createContext(dlgCtx);
const dlgApi = vm.runInContext(read("assets/js/dialogues-data.js") + "\n" + read("assets/js/dialogues.js") + "\n;({ BOOK_DIALOGUES, DIALOGUE_SOURCE, dialoguesForStep, dlgOrderItems, dlgNormalizeAnswer, dlgSpeechText, DLG, dialogueQuizCatalog, dialogueHomeworkCatalog, dlgQuizForDialogue, dlgHomeworkTasks, dlgGrammarCloze, dlgSequenceQuestion })", dlgCtx);
const dlgAll = dlgApi.BOOK_DIALOGUES;
const dlgUnitCounts = [1, 2, 3, 4, 5, 6, 7].map(u => dlgAll.filter(d => d.unit === u).length);
ok("DIALOGUES: 37 مدخلاً و401 سطراً في Units 1–7 بتوزيع 1/6/6/9/9/4/2 ومصدري الجزأين موثقين", dlgAll.length === 37 && dlgAll.reduce((a, d) => a + d.lines.length, 0) === 401 && dlgUnitCounts.join(",") === "1,6,6,9,9,4,2" && /printed p\.2 is absent/.test(dlgApi.DIALOGUE_SOURCE.newFilePrintedCoverage) && dlgApi.DIALOGUE_SOURCE.part2File === "english_pubils_8th-2.pdf" && dlgApi.DIALOGUE_SOURCE.part2FilePages === 33 && /PDF page \+ 44/.test(dlgApi.DIALOGUE_SOURCE.part2PrintedCoverage));
ok("DIALOGUES: كل مدخل مرتبط بخطوة ENG8 حقيقية وبمرجع PB/CS ومتحدثين معرفين وبانتظار مراجعة ثانية", dlgAll.every(d => ENG8.units.some(u => u.n === d.unit && u.steps.some(s => s.ref === d.stepRef)) && d.printedPages && d.pdfPages && (/^CS/.test(d.csRefs) || /^No CS listed/.test(d.csRefs)) && d.status === "transcribed-pending-second-review" && d.lines.length && d.lines.every(l => l.text && d.speakers[l.speaker]) && (!d.transcriptionId || ENG8.bookTranscriptions.some(t => t.id === d.transcriptionId))));
ok("DIALOGUES: 144 سؤال منصة صالح النطاق وكل مدخل يحمل المهارات الأربع ومهام كتابة/تحدث ومفتاح إملاء", dlgAll.reduce((a, d) => a + d.questions.length, 0) === 144 && dlgAll.every(d => d.questions.length >= 3 && d.questions.every(q => q.a >= 0 && q.a < q.options.length && q.why) && ["reading", "listening", "writing", "speaking"].every(s => d.skills.includes(s)) && d.writePromptAr && d.writeStarter && d.speakPromptAr && d.lines[d.keyLine] && dlgApi.dlgOrderItems(d).length >= 2));
ok("DIALOGUES: الصوت مولّد من الجهاز بسرعات 0.6/0.8/1.0 وDrive غير مرتبط لأي مدخل", dlgAll.every(d => d.audio.type === "generated-device-tts" && JSON.stringify(d.audio.rates) === "[0.6,0.8,1]" && d.audio.driveTrackId === null && d.audio.driveStatus === "not-linked-unlistened") && /No Drive recording is attached/.test(dlgApi.DIALOGUE_SOURCE.driveNote));
ok("DIALOGUES: عينات مثبتة في البيانات من الحوارات المقروءة بصرياً (اختبار حضور لا إعادة قراءة PDF)", dlgAll.find(d => d.id === "dlg-u3-egg-sandwich").lines.some(l => l.text === "And there aren't any eggs.") && dlgAll.find(d => d.id === "dlg-u4-jim-police").lines.at(-1).text.includes("515674") && dlgAll.find(d => d.id === "dlg-u4-Hassan-helps").lines.at(-1).text === "No! I forgot!" && dlgAll.find(d => d.id === "dlg-u4-white-falcon").lines.some(l => l.text.includes("beautiful falcon")) && dlgAll.find(d => d.id === "dlg-u5-uncle-ali-farm").lines.some(l => l.text === "We'll take it to the police station.") && dlgAll.find(d => d.id === "dlg-u6-white-falcon").lines.at(-1).text.includes("Now it's yours") && dlgAll.find(d => d.id === "dlg-u7-bob-shop").lines.some(l => l.text === "Half a kilo, please.") && dlgAll.find(d => d.id === "dlg-u7-taxi-day").lines.some(l => l.text === "OK. I'll help. Follow me."));
ok("DIALOGUES: فراغات PB محفوظة وحلولها موسومة منفصلة لا ملصقة كنص مطبوع", dlgAll.find(d => d.id === "dlg-u4-dave-john").lines.filter(l => l.text === "____").length === 7 && dlgAll.find(d => d.id === "dlg-u3-feelings").lines.filter(l => l.gapAnswer).length === 4 && dlgAll.find(d => d.id === "dlg-u2-ask-Hassan").lines.some(l => l.text === "I'd like to ..." && l.completedText === "I'd like to play football."));
ok("DIALOGUES: منطق ترتيب وإملاء الحوار يعمل دون متصفح، والتشغيل لا يبدأ من openDialogueLab", dlgApi.dlgNormalizeAnswer("  I’M  Lost! ") === "i'm lost" && dlgApi.dlgOrderItems(dlgAll[0]).length === 4 && !/dlgPlayAll\s*\(/.test(read("assets/js/dialogues.js").slice(read("assets/js/dialogues.js").indexOf("function openDialogueLab"), read("assets/js/dialogues.js").indexOf("function dlgSetUnitFilter"))));
ok("DIALOGUES: التكامل في التنقل وصفحة الخطوة والسرعات والمشاهد القديمة محفوظ", read("assets/js/app.js").includes('"dialogues"') && read("assets/js/english8.js").includes("stepDialogueHTML(u.n, s.ref)") && read("assets/js/dialogues.js").includes("[0.6, 0.8, 1]") && read("assets/js/scenes.js").includes("data-scene-rate") && read("assets/js/scenes.js").includes("sceneSetRate") && !read("assets/js/scenes.js").includes("<option>1.2</option>") && read("index.html").includes("dialogues.js?v=20261028-dialogues-companion-scenes"));
ok("INTEGRATION v3: index يربط audio-library و scenes قبل app", read("index.html").indexOf("audio-library.js") > -1 && read("index.html").indexOf("scenes.js") < read("index.html").lastIndexOf("app.js"));
ok("INTEGRATION v3: app فيه audioLinks وروابط تنقل صوت/مشاهد", /audioLinks/.test(read("assets/js/app.js")) && /"audio"/.test(read("assets/js/app.js")) && /"scenes"/.test(read("assets/js/app.js")));
ok("INTEGRATION v3: الاستوديو يمنع نشر تسجيل غير Verified ويحفظ مرفقات الوسائط", /trackStatus\(d.audioTrackId\) !== "verified"/.test(read("assets/js/studio-ai.js")) && /audioTrackId: STUI.audioTrackId/.test(read("assets/js/studio-ai.js")) && /sceneId: STUI.sceneId/.test(read("assets/js/studio-ai.js")));
ok("INTEGRATION v3: npm run check يفحص ملفي الصوتيات والمشاهد أيضاً", read("package.json").includes("audio-library.js") && read("package.json").includes("scenes.js"));

/* Directive 8: every book dialogue is also usable in the companion, scenes, quizzes and homework.
   These checks prove generated structure and source-text reuse; they do not audit a real browser voice or reread PB pages. */
const dlgQuizzes = dlgApi.dialogueQuizCatalog();
ok("DIALOGUE TRAINING: اختبار مشتق لكل حوار (37 اختباراً و218 سؤالاً)", dlgQuizzes.length === 37 && dlgQuizzes.reduce((a, q) => a + q.questions.length, 0) === 218 && dlgQuizzes.every(qz => { const d = dlgAll.find(x => x.id === qz.dialogueId); return d && qz.id === `dlgquiz-${d.id}` && qz.unit === d.unit && qz.stepRef === d.stepRef && qz.questions.length === d.questions.length + 2 && /اختبار منصة مولّد/.test(qz.sourceNote) && /بانتظار مراجعة بشرية ثانية/.test(qz.sourceNote) && /TTS من الجهاز فقط/.test(qz.sourceNote); }));
ok("DIALOGUE TRAINING: أسئلة الاختبارات صالحة وتشمل قواعد وسطرَ متابعة ونطقاً عند الضغط", dlgQuizzes.every(qz => { const d = dlgAll.find(x => x.id === qz.dialogueId); return d && qz.questions.some(q => q.skill === "listening" && q.audioMode === "full") && qz.questions.filter(q => q.skill === "grammar").length === 1 && qz.questions.filter(q => q.skill === "writing").length === 1 && qz.questions.every(q => q.q && q.why && q.dialogueId === d.id && Number.isInteger(q.audioLineIndex) && q.audioLineIndex >= 0 && q.audioLineIndex < d.lines.length && ["full", "line"].includes(q.audioMode) && new Set(q.options).size === q.options.length && q.options.length >= 3 && q.a >= 0 && q.a < q.options.length); }));
const dlgHomeworkPacks = dlgApi.dialogueHomeworkCatalog();
ok("DIALOGUE TRAINING: تسلسل Dave/John وحده يستخدم إكمالات تدريبية موسومة لا نصاً مطبوعاً", dlgQuizzes.flatMap(qz => qz.questions).filter(q => q.practiceCompletionSequence).length === 1 && dlgQuizzes.flatMap(qz => qz.questions).filter(q => q.practiceCompletionSequence).every(q => q.dialogueId === "dlg-u4-dave-john" && /practice-completed version/.test(q.q) && /لا كنص مطبوع داخل فراغات الكتاب/.test(q.why)));
ok("DIALOGUE TRAINING: واجب أربع مهارات لكل حوار دون درجة نطق آلية", dlgHomeworkPacks.length === 37 && dlgHomeworkPacks.reduce((a, p) => a + p.tasks.length, 0) === 148 && dlgHomeworkPacks.every(p => ["listening", "speaking", "writing", "grammar"].every(s => p.tasks.some(t => t.skill === s && t.title && t.text)) && p.tasks.every(t => !("points" in t))) && read("assets/js/dialogues.js").includes("madrasati_dialogue_homework_v1"));
const dialogueIntegrationCtx = {
  window: { EXTRA_VIEWS: {} }, console, setTimeout, clearTimeout,
  document: { querySelectorAll: () => [], getElementById: () => null },
  localStorage: { getItem: () => null, setItem: () => {} },
  esc: value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]))
};
dialogueIntegrationCtx.window.EXTRA_VIEWS = {};
vm.createContext(dialogueIntegrationCtx);
const companionSceneApi = vm.runInContext(read("assets/js/dialogues-data.js") + "\n" + read("assets/js/dialogues.js") + "\n" + read("assets/js/chatbot.js") + "\n" + read("assets/js/scenes.js") + "\n;({ BOOK_DIALOGUES, BOTUI, botBookRoles, botBookSpeechText, botSetRate, SCENES, DIALOGUE_SCENES, sceneDefaultRole, sceneRoleOptions, sceneCharKey, sceneSetRate, SC, stageSVG })", dialogueIntegrationCtx);
ok("COMPANION BOOK DIALOGUES: دور قابل للاختيار لكل متحدث في الحوارات السبع والثلاثين", companionSceneApi.BOOK_DIALOGUES.length === 37 && companionSceneApi.BOTUI.book && companionSceneApi.BOOK_DIALOGUES.every(d => companionSceneApi.botBookRoles(d).length >= 2 && companionSceneApi.botBookRoles(d).every(r => d.lines.some(l => l.speaker === r))));
ok("COMPANION BOOK DIALOGUES: الإكمالات التدريبية وحدها تُسمع لفراغات John/Hassan ولا تُقدم كنص مطبوع", companionSceneApi.botBookSpeechText(companionSceneApi.BOOK_DIALOGUES.find(d => d.id === "dlg-u4-dave-john").lines.find(l => l.text === "____")) === "Hi, Dave!" && companionSceneApi.botBookSpeechText(companionSceneApi.BOOK_DIALOGUES.find(d => d.id === "dlg-u2-ask-Hassan").lines.find(l => l.text === "I'd like to ...")) === "I'd like to play football." && read("assets/js/chatbot.js").includes("إكمال تدريبي موسوم") && read("assets/js/chatbot.js").includes("لا نص مطبوع داخل الفراغ"));
const generatedScenes = companionSceneApi.DIALOGUE_SCENES;
ok("DIALOGUE SCENES: 37 مشهداً مولداً من الحوارات و40 مشهداً إجمالاً مع الحفاظ على اليدوية الثلاثة", generatedScenes.length === 37 && companionSceneApi.SCENES.length === 40 && companionSceneApi.SCENES.slice(0, 3).map(s => s.id).join(",") === "bill-talk,bill-time,tim-saleh" && new Set(companionSceneApi.SCENES.map(s => s.id)).size === 40);
ok("DIALOGUE SCENES: نصوص وأدوار وسرعات كل مشهد مطابقة لبيانات حواره", generatedScenes.every(s => { const d = companionSceneApi.BOOK_DIALOGUES.find(x => x.id === s.dialogueId); return d && s.id === `scene-${d.id}` && s.lines.length === d.lines.length && s.lines.every((l, i) => l.sourceText === d.lines[i].text && l.who === d.lines[i].speaker && (!d.lines[i].completedText || l.text === d.lines[i].completedText)) && JSON.stringify(s.rates) === "[0.6,0.8,1]" && s.questions.length === d.questions.length && s.syncStatus === "device-tts-line-by-line" && !s.driveCandidateId; }));
ok("DIALOGUE SCENES: شخصيات SVG ومفاتيحها آمنة وفريدة والدور الافتراضي متاح", generatedScenes.every(s => new Set(s.chars.map(c => c.key)).size === s.chars.length && s.chars.every(c => /^[a-z0-9-]+$/.test(c.key) && s.lines.some(l => companionSceneApi.sceneCharKey(l.who) === c.key)) && companionSceneApi.sceneRoleOptions(s).includes(companionSceneApi.sceneDefaultRole(s))) && /char-people-in-the-market/.test(companionSceneApi.stageSVG(generatedScenes.find(s => s.dialogueId === "dlg-u6-white-falcon"))));
companionSceneApi.botSetRate(0.6); companionSceneApi.sceneSetRate(0.8);
ok("DIALOGUE SPEECH: سرعات الرفيق والمشاهد تقبل 0.6/0.8/1.0 ولا تسرّب 1.2", companionSceneApi.BOTUI.rate === 0.6 && companionSceneApi.SC.rate === 0.8 && /\[0\.6, 0\.8, 1\]/.test(read("assets/js/chatbot.js")) && /\[0\.6, 0\.8, 1\]/.test(read("assets/js/scenes.js")) && !read("assets/js/scenes.js").includes("1.2"));
ok("DIALOGUE INTEGRATION: الاختبارات والواجبات مدمجة في app وروابط الحوار/الرفيق/المشهد متبادلة", /dialogueQuizSectionHTML\(\)/.test(read("assets/js/app.js")) && /dialogueHomeworkSectionHTML\(\)/.test(read("assets/js/app.js")) && /dlgQuizSpeak/.test(read("assets/js/app.js")) && /openBookDialogueCompanion/.test(read("assets/js/dialogues.js")) && read("assets/js/chatbot.js").includes("openScene('scene-") && /openBookDialogueCompanion/.test(read("assets/js/scenes.js")));

console.log(`\nالنتيجة: ${pass} ناجح / ${fail} فاشل`);
process.exit(fail ? 1 : 0);
