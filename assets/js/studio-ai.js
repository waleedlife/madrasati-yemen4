/* ===== مدرستي اليمن — استوديو المعلم الذكي (نموذج أولي) =====
   لا يوجد محرك ذكاء اصطناعي مربوط ولا مفاتيح API في الواجهة.
   «المساعد» هنا منظّم قوالب محلي: يبني مورداً مهيكلاً من لغة درس موثّقة
   (دليل Crescent 2) أو من بنود يكتبها المعلم، وتبقى مراجعة المعلم شرطاً للنشر.
   الملفات والفيديو تُعايَن في جلسة المتصفح فقط ولا تُرفع لأي خادم. */
const RESOURCE_TYPES = [
  { id: "game", label: "لعبة تعليمية تفاعلية (تحدّي اختيارات)", icon: "🎲", actType: "mcq" },
  { id: "dragdrop", label: "سحب وإفلات / توصيل بين العناصر", icon: "🧲", actType: "match" },
  { id: "flashcards", label: "بطاقات مفردات", icon: "🃏", actType: "flashcards" },
  { id: "ordering", label: "ترتيب الكلمات أو الأحداث", icon: "🔢", actType: "order" },
  { id: "fill", label: "إكمال الفراغات", icon: "✏️", actType: "fill" },
  { id: "quiz", label: "اختبار قصير مع تفسير الإجابات", icon: "☑️", actType: "mcq" },
  { id: "worksheet", label: "ورقة عمل قابلة للطباعة", icon: "🖨️", actType: "doc" },
  { id: "roleplay", label: "حوار لتبادل الأدوار", icon: "🎭", actType: "dialogue" },
  { id: "story", label: "سيناريو قصة تفاعلية (تسلسل أحداث)", icon: "📖", actType: "order" },
  { id: "listening", label: "نشاط استماع / تدريب نطق", icon: "🎧", actType: "doc" },
  { id: "presentation", label: "عرض تعليمي / قصة مصورة (مخطط شرائح)", icon: "🖥️", actType: "doc" },
  { id: "videoq", label: "أسئلة مدمجة في فيديو تعليمي", icon: "🎬", actType: "video" },
  { id: "lessonplan", label: "خطة درس / نشاط جماعي", icon: "📋", actType: "doc" },
  { id: "tiers", label: "نشاط يراعي مستويات الطلاب (متدرج)", icon: "🎚️", actType: "mcq" }
];
const STUI = { grade: 8, subject: "english", unit: 1, stepIdx: 0, type: "flashcards", level: "أساسي", skill: "vocabulary", target: "الصف الثامن — شعبة (أ)", prompt: "", custom: "", chat: [], draftId: null, attachName: "", audioTrackId: "", sceneId: "" };
window.__sessionVideoMap = window.__sessionVideoMap || {};
window.__sessionVideoFor = id => window.__sessionVideoMap[id] || null;
function stStep() { const u = (typeof engUnit === "function") && engUnit(STUI.unit); return u ? u.steps[Math.min(STUI.stepIdx, u.steps.length - 1)] : null; }
function stSync(id, key, isNum) { const el = document.getElementById(id); if (el) STUI[key] = isNum ? +el.value : el.value; }
function stAudioOptionsHTML() {
  if (typeof AUDIO_TRACKS === "undefined") return '<option value="">— فهرس الصوتيات غير محمّل —</option>';
  return '<option value="">— بلا تسجيل مرفق —</option>' + AUDIO_TRACKS.map(t => {
    const st = typeof trackStatus === "function" ? trackStatus(t) : "unconfirmed";
    const code = typeof audioStatusMeta === "function" ? audioStatusMeta(st).code : st;
    return `<option value="${t.id}" ${STUI.audioTrackId === t.id ? "selected" : ""}>${esc(t.file)} — ${esc(code)}</option>`;
  }).join("");
}
function stSceneOptionsHTML(stepRef) {
  if (typeof SCENES === "undefined") return '<option value="">— المشاهد غير محمّلة —</option>';
  const list = SCENES.filter(sc => !stepRef || sc.stepRef === stepRef);
  if (!list.length) return '<option value="">— لا مشهد منفّذ لهذه الخطوة بعد —</option>';
  return '<option value="">— بلا مشهد مرفق —</option>' + list.map(sc => `<option value="${sc.id}" ${STUI.sceneId === sc.id ? "selected" : ""}>${esc(sc.title)} — مشهد ويب متحرك</option>`).join("");
}
function stSyncMedia() {
  const a = document.getElementById("stAudio"), sc = document.getElementById("stScene");
  if (a) STUI.audioTrackId = a.value;
  if (sc) STUI.sceneId = sc.value;
}
function vAiStudio() {
  const u = engUnit(STUI.unit), draft = (store.studioDrafts || []).find(d => d.id === STUI.draftId);
  return `<div class="page-head"><h2>✨ استوديو المعلم الذكي</h2><p>أنشئ موارد تعليمية تفاعلية من درس موثّق، عايِنها كما يراها الطالب، حرّرها، احفظها مسودة، راجِعها، ثم انشرها لشعبتك.</p></div>
  <div class="why-box"><b>شفافية النموذج:</b> هذا نموذج أولي كامل سير العمل لكنه <b>بدون محرك ذكاء اصطناعي خارجي</b> — التوليد قالبي محلي من لغة الدرس في دليل المنهج أو من بنود تكتبها أنت، ولا تُحفظ أي مفاتيح في المنصة. ربط محرك حقيقي لاحقاً لن يغيّر هذه الواجهات. الملفات/الفيديو تُعاين في متصفحك فقط ولا تُرفع.</div>
  <div class="dash-cols">
    <div class="panel">
      <h3>1️⃣ حدّد الدرس ونوع المورد</h3>
      <div class="form-grid">
        <label class="f-label">الصف<select class="f-input" id="stGrade" onchange="stSync('stGrade','grade',1)">${DB.grades.map(g => `<option value="${g.n}" ${STUI.grade === g.n ? "selected" : ""}>الصف ${esc(g.label)}</option>`).join("")}</select></label>
        <label class="f-label">المادة<select class="f-input" id="stSubject" onchange="stSync('stSubject','subject');navigate('aistudio')">${DB.subjects.map(s => `<option value="${s.id}" ${STUI.subject === s.id ? "selected" : ""}>${esc(s.name)}</option>`).join("")}</select></label>
        ${STUI.subject === "english" ? `
        <label class="f-label">الوحدة (Crescent 2)<select class="f-input" id="stUnit" onchange="stSync('stUnit','unit',1);STUI.stepIdx=0;navigate('aistudio')">${ENG8.units.map(x => `<option value="${x.n}" ${STUI.unit === x.n ? "selected" : ""}>Unit ${x.n} — ${esc(x.themeAr.slice(0, 42))}…</option>`).join("")}</select></label>
        <label class="f-label">الخطوة<select class="f-input" id="stStep" onchange="stSync('stStep','stepIdx',1);STUI.sceneId='';navigate('aistudio')">${u.steps.map((s, i) => `<option value="${i}" ${STUI.stepIdx === i ? "selected" : ""}>Step ${esc(s.steps)} — ${esc(s.topic.slice(0, 46))}</option>`).join("")}</select></label>
        <label class="f-label">تسجيل Drive مرفق (اختياري)<select class="f-input" id="stAudio" onchange="STUI.audioTrackId=this.value">${stAudioOptionsHTML()}</select><small style="font-weight:500;color:var(--muted)">لن يُنشر نشاط يضم تسجيلاً إلا إذا كانت حالة التسجيل Verified بعد سماعك في فهرس الصوتيات.</small></label>
        <label class="f-label">مشهد متحرك لهذه الخطوة (إن وُجد)<select class="f-input" id="stScene" onchange="STUI.sceneId=this.value">${stSceneOptionsHTML(stStep() ? stStep().ref : "")}</select><small style="font-weight:500;color:var(--muted)">مشهد ويب SVG بنطق الجهاز، لا فيديو ولا مزامنة مع Drive.</small></label>` :
        `<label class="f-label full2">ملحوظة<select class="f-input" disabled><option>لهذه المادة اكتب بنود المورد بنفسك في خانة البنود المخصصة بالأسفل</option></select></label>`}
        <label class="f-label full2">نوع المورد<select class="f-input" id="stType" onchange="stSync('stType','type')">${RESOURCE_TYPES.map(t => `<option value="${t.id}" ${STUI.type === t.id ? "selected" : ""}>${t.icon} ${esc(t.label)}</option>`).join("")}</select></label>
        <label class="f-label">مستوى الصعوبة<select class="f-input" id="stLevel" onchange="stSync('stLevel','level')">${["أساسي", "متوسط", "متقدم", "متدرج (فروق فردية)"].map(l => `<option ${STUI.level === l ? "selected" : ""}>${l}</option>`).join("")}</select></label>
        <label class="f-label">المهارة<select class="f-input" id="stSkill" onchange="stSync('stSkill','skill')">${[["vocabulary", "المفردات"], ["grammar", "القواعد"], ["reading", "القراءة"], ["listening", "الاستماع"], ["speaking", "التحدث"], ["writing", "الكتابة"]].map(([v, l]) => `<option value="${v}" ${STUI.skill === v ? "selected" : ""}>${l}</option>`).join("")}</select></label>
        <label class="f-label full2">الشعبة المستهدفة عند النشر<select class="f-input" id="stTarget" onchange="stSync('stTarget','target')">${["الصف الثامن — شعبة (أ)", "الصف الثامن — شعبة (ب)", "الصف الثامن — شعبة (ج)", "كل شعب الصف"].map(t => `<option ${STUI.target === t ? "selected" : ""}>${t}</option>`).join("")}</select></label>
        <label class="f-label full2">بنود مخصصة (اختياري — كل بند في سطر بـ «|» بين أجزائه)<textarea class="f-input" id="stCustom" dir="ltr" style="text-align:left" placeholder="بطاقات: كلمة | معنى&#10;توصيل/اختبار: سؤال | الإجابة الصحيحة | خيار خاطئ | خيار خاطئ&#10;فيديو: ثانية | سؤال | صحيحة | خاطئة | خاطئة" oninput="STUI.custom=this.value">${esc(STUI.custom)}</textarea></label>
        <label class="f-label full2">إرفاق ملف/فيديو للمعاينة المحلية<input type="file" class="f-input" id="stFile" accept="video/*,audio/*,image/*,.pdf,.txt" onchange="stAttach(this)"><small style="font-weight:500;color:var(--muted)">${STUI.attachName ? "الملف المختار: " + esc(STUI.attachName) + " — للمعاينة في هذه الجلسة فقط، لم يُرفع لأي خادم." : "اختياري — لن يُرفع الملف لأي خادم في هذا النموذج."}</small></label>
      </div>
    </div>
    <div class="panel">
      <h3>2️⃣ تحدّث مع المساعد المنظّم</h3>
      <div class="chat-body" id="stChat" style="max-height:230px">
        ${STUI.chat.length ? STUI.chat.map(m => `<div class="bubble ${m.from}">${esc(m.text)}</div>`).join("") : `<div class="bubble them">أهلاً أستاذ 👋 صف لي ما تريد إنشاءه (مثال: «بطاقات مفردات من كلمات هذه الخطوة لمستوى أساسي» أو «اختبار قصير بتفكير أعلى يقارن بين Do وDoes»). سألخّص فهمي، ثم نبني المورد ونعاينه معاً.</div>`}
      </div>
      <form class="chat-input" onsubmit="stChatSubmit(event)"><input id="stPrompt" placeholder="اكتب طلبك للمورد التعليمي…" autocomplete="off"><button class="btn btn-ghost" type="submit">أرسل</button></form>
      <div id="stSummary">${STUI.summary ? `<div class="why-box"><b>الذي فهمتُه من طلبك:</b><br>${esc(STUI.summary)}</div>` : ""}</div>
      <button class="btn btn-primary btn-lg full" style="width:100%;margin-top:10px" onclick="stGenerate()">✨ إنشاء المورد الآن (توليد قالبي موثّق)</button>
      <p class="print-note" style="margin-top:8px">سيُبنى المورد من لغة الخطوة المختارة في الدليل أو من بنودك المخصصة، وسيحمل وسم مصدره. أي نصّ تكتبه أنت يبقى «من إعداد المعلم» — لن يُنسب للمنهج.</p>
    </div>
  </div>
  ${draft ? stDraftHTML(draft) : ""}
  ${stLibraryHTML()}`;
}
function stAttach(input) {
  const f = input.files && input.files[0]; if (!f) return;
  STUI.attachName = f.name;
  if (/^(video|audio)\//.test(f.type)) window.__sessionVideoMap["pending"] = URL.createObjectURL(f);
  toast("📎 أُرفق محلياً للمعاينة فقط — لن يُرفع أو يبقى بعد إغلاق المتصفح");
  navigate("aistudio");
}
function stChatSubmit(e) {
  e.preventDefault(); const v = document.getElementById("stPrompt").value.trim(); if (!v) return;
  ["stGrade", "stSubject", "stType", "stLevel", "stSkill", "stTarget"].forEach(id => stSync(id, id.replace("st", "").toLowerCase()));
  STUI.chat.push({ from: "me", text: v });
  const t = RESOURCE_TYPES.find(x => x.id === STUI.type), s = STUI.subject === "english" ? stStep() : null;
  STUI.summary = `مورد «${t.label}» لمهارة ${skillAr(STUI.skill)} بمستوى ${STUI.level}، الهدف: ${STUI.target}${s ? `، من لغة Unit ${STUI.unit} خطوة ${s.steps} (${s.topic}) بمرجع مواد ${s.materials}` : "، من بنودك المخصصة"}. عدّل أي اختيار بالأعلى إن أردت، أو اضغط «إنشاء المورد».`;
  STUI.chat.push({ from: "them", text: "تمام ✅ " + STUI.summary });
  STUI.prompt = v; navigate("aistudio");
  const c = document.getElementById("stChat"); if (c) c.scrollTop = c.scrollHeight;
}
function parseCustomLines() { return (STUI.custom || "").split("\n").map(l => l.split("|").map(x => x.trim())).filter(a => a.some(Boolean)); }
function stGenerate() {
  stSyncMedia();
  ["stGrade", "stSubject", "stType", "stLevel", "stSkill", "stTarget"].forEach(id => stSync(id, id.replace("st", "").toLowerCase()));
  if (document.getElementById("stStep")) STUI.stepIdx = +document.getElementById("stStep").value;
  if (document.getElementById("stUnit")) STUI.unit = +document.getElementById("stUnit").value;
  const rt = RESOURCE_TYPES.find(x => x.id === STUI.type), step = STUI.subject === "english" ? stStep() : null;
  const lines = parseCustomLines();
  const lang = step ? step.language : [];
  const draft = { id: "res-" + Date.now(), type: rt.actType, resType: rt.id, title: rt.label.split(" (")[0] + (step ? ` — Unit ${STUI.unit} خطوة ${step.steps}` : ""), skill: STUI.skill, level: STUI.level,
    stepRef: step ? step.ref : "", audioTrackId: STUI.audioTrackId || "", sceneId: STUI.sceneId || "", grade: STUI.grade, subject: STUI.subject, target: STUI.target, prompt: STUI.prompt || "",
    sourceStatus: step && !lines.length ? "verified" : "teacher", status: "draft", created: new Date().toISOString().slice(0, 10),
    sourceNote: step ? `مُولّد في الاستوديو من لغة موثّقة في ملخص Unit ${STUI.unit} بدليل TB (مواد ${step.materials})${lines.length ? " ومدمج ببنود من إعداد المعلم" : ""} — راجعه المعلم قبل النشر.` : "مورد من بنود إعداد المعلم في الاستوديو — لا يُنسب لمحتوى منهج رسمي.",
    instructions: "", review: { src: false, lang: false, instr: false }, items: [], markers: [], pieces: [], answer: [], docText: "" };
  if (draft.audioTrackId && typeof trackStatus === "function") draft.sourceNote += ` تسجيل Drive مرفق (${draft.audioTrackId}) — حالته عند إنشاء المسودة ${trackStatus(draft.audioTrackId)}؛ يُمنع النشر بصوت معتمد حتى يصبح Verified.`;
  if (draft.sceneId) draft.sourceNote += " وأُرفق مشهد ويب متحرك منفّذ لهذه الخطوة (SVG/TTS، غير متزامن مع Drive).";
  try { buildDraftContent(draft, rt, step, lang, lines); }
  catch (err) { toast("⚠️ " + err.message); return; }
  (store.studioDrafts = store.studioDrafts || []).unshift(draft); STUI.draftId = draft.id;
  if (window.__sessionVideoMap["pending"]) { window.__sessionVideoMap[draft.id] = window.__sessionVideoMap["pending"]; }
  save(); toast("✨ أُنشئ المورد كمسودة — عاينه وحرّره قبل النشر");
  STUI.chat.push({ from: "them", text: "أُنشئت مسودة «" + draft.title + "». جرّبها الآن كما سيراها الطالب من قسم المعاينة بالأسفل، وعدّل بنودها إن احتجت، ثم أكمل قائمة المراجعة وانشرها." });
  navigate("aistudio");
}
function buildDraftContent(d, rt, step, lang, lines) {
  const L = lang.length ? lang : [];
  if (rt.actType === "flashcards") {
    if (lines.length) d.items = lines.map(([front, back]) => ({ front: front || "", back: back || "" }));
    else if (step && step.vocabAttested) d.items = step.vocabAttested.map(w => ({ front: w, back: "✎ أضف المعنى/مثالاً من التحرير" }));
    else throw new Error("لا توجد مفردات موثقة مُدخلة لهذه الخطوة بعد — أضف بنود (كلمة | معنى) في خانة البنود المخصصة.");
    d.instructions = "قلّب البطاقات وعلّم ما تعرفه وما زلت تتعلمه.";
  } else if (rt.actType === "mcq") {
    if (lines.length) d.items = lines.map(([q, ok, w1, w2, why]) => ({ q, options: [ok, w1 || "—", w2 || "—"].filter(Boolean), a: 0, why: why || "راجع لغة الدرس وقارن بين الخيارات." }));
    else if (L.length >= 2) d.items = L.slice(0, 4).map((s, i) => ({ q: "أيّ مما يلي ورد/يتناسب مع لغة هذا الدرس؟", options: [s, "The capital of France is Paris.", "I can play the piano very well."], a: 0, why: "الجملة الأولى من لغة الخطوة الموثّقة في الدليل؛ الأخريان ليستا من لغة الدرس." }));
    else throw new Error("تحتاج هذه الخطوة بنوداً مخصصة (سؤال | صحيحة | خاطئة | خاطئة).");
    if (d.resType === "tiers") d.items = d.items.map((it, i) => ({ ...it, q: ["🟢 أساسي: ", "🟡 متوسط: ", "🔴 متقدم — فسّر اختيارك: "][Math.min(i, 2)] + it.q }));
    d.instructions = "اختر الإجابة الصحيحة واقرأ التفسير."; 
  } else if (rt.actType === "fill") {
    if (lines.length) d.items = lines.map(([sent, ok, w1, w2]) => { const [b, a] = String(sent).split("___"); return { before: b || sent, after: a || "", options: [ok, w1 || "is", w2 || "do"], a: 0, why: "الإجابة الصحيحة: " + ok }; });
    else if (L.length) d.items = L.slice(0, 4).map(s => { const words = s.replace(/[؟?].*$/, "").split(/\s+/).filter(Boolean); const cut = Math.min(1, words.length - 1); const ans = words[cut]; return { before: words.slice(0, cut).join(" "), after: words.slice(cut + 1).join(" ") + (/[?.]$/.test(s.trim()) ? s.trim().slice(-1) : ""), options: [ans, "is", "the"], a: 0, why: "الجملة كاملة من الدرس: " + s }; });
    else throw new Error("أضف جمل فراغات مخصصة بصيغة: جملة فيها ___ | الإجابة | بديل | بديل");
    d.instructions = "أكمل كل جملة بالكلمة الناقصة.";
  } else if (rt.actType === "order") {
    const src = lines.length ? lines.map(a => a.join(" ")) : L;
    if (!src.length) throw new Error("أضف سطراً واحداً (جملة كاملة أو أحداثاً تفصلها |).");
    const joined = lines.length && lines[0].length > 1 ? lines[0] : null;
    d.answer = joined || src.slice().sort((a, b) => b.length - a.length)[0].split(/\s+/);
    if (joined) d.pieces = joined.slice().reverse(); else { const snt = src.slice().sort((a, b) => b.length - a.length)[0]; d.pieces = snt.split(/\s+/).slice().reverse(); }
    d.instructions = joined ? "رتّب الأحداث بالتسلسل الصحيح." : "رتّب الكلمات لتكوين جملة الدرس الصحيحة.";
  } else if (rt.actType === "match") {
    if (lines.length) d.items = lines.map(([left, right]) => ({ left, right }));
    else { const qa = L.filter(x => x.includes("—")); if (qa.length >= 3) d.items = qa.map(x => { const [left, right] = x.split("—"); return { left: left.trim(), right: right.trim() }; }); else throw new Error("أضف أزواجاً مخصصة (عنصر | مقابله) — 3 أزواج على الأقل."); }
    d.rightOrder = d.items.map((_, i) => (i + 1) % d.items.length);
    d.instructions = "وصّل كل عنصر بمقابله الصحيح.";
  } else if (rt.actType === "dialogue") {
    if (lines.length) d.items = lines.map(([bot, ok, w, fb]) => ({ bot, choices: [{ text: ok, ok: 1, reply: fb || "أحسنت!" }, { text: w || "Yes.", ok: 0, reply: "راجع سؤال المحاور واختر الرد المناسب له." }] }));
    else if (L.length) d.items = L.filter(x => x.includes("?")).slice(0, 3).map(q => ({ bot: q.replace(/\s*—.*$/, ""), choices: [{ text: (q.split("—")[1] || "Yes, I do.").trim(), ok: 1, reply: "ردّ مناسب من لغة الدرس." }, { text: "It's on the table.", ok: 0, reply: "هذه الإجابة لا تناسب السؤال." }] }));
    if (!d.items.length) throw new Error("أضف بنود حوار (قول البوت | الرد الصحيح | رد خاطئ | تعليق).");
    d.instructions = "اختر الرد المناسب في كل دور لإكمال الحوار.";
  } else if (rt.actType === "video") {
    d.markers = lines.map(([sec, q, ok, w1, w2]) => ({ sec: +sec || 0, q, options: [ok, w1 || "—", w2 || "—"], a: 0 }));
    if (!d.markers.length) throw new Error("أضف علامات أسئلة (ثانية | سؤال | إجابة صحيحة | خاطئة | خاطئة) ثم أرفق الفيديو للمعاينة.");
    d.instructions = "شاهد الفيديو؛ سيتوقف عند كل علامة لسؤال سريع. (نموذج أولي: الفيديو محلي في جهاز المعلم ولا يُحفظ.)";
  } else { /* doc */
    const langList = L.length ? L.map(s => "• " + s).join("\n") : "(أضف بنود المحتوى من التحرير)";
    if (rt.id === "worksheet") d.docText = `ورقة عمل — ${d.title}\nالهدف/الشعبة: ${d.target}\n${"=".repeat(40)}\nلغة الدرس المستهدفة:\n${langList}\n\nالتمارين:\n1) اقرأ الجمل أعلاه وترجم كلمتين جديدتين بمساعدة معلمك.\n2) كوّن سؤالاً واحداً من كل نمط ورد في القائمة واسأل زميلك (عمل ثنائي).\n3) اكتب جملتين عن نفسك مستخدماً تراكيب الدرس.\n\n— مفتاح/إرشاد المعلم: راجع الأهداف من صفحة الدرس بالمنصة ومرجعها في الدليل قبل الطباعة.`;
    else if (rt.id === "lessonplan") d.docText = `خطة درس — ${d.title}\n${"=".repeat(40)}\n1) تهيئة (5د): تحية وتاريخ اليوم كتوصية الخطوة 1.1 بالدليل.\n2) عرض اللغة المستهدفة:\n${langList}\n3) ممارسة موجّهة: عمل ثنائي لتبادل الأسئلة والإجابات (TB ص10).\n4) إنتاج: نشاط المنصة التفاعلي المرتبط + كتابة قصيرة.\n5) تقييم ختامي وتغذية راجعة (TB ص12): سؤالان شفهياان وملاحظة الفروق الفردية (TB ص11).\nملحوظة: قالب إعداد معلم — عدّله بحسب ملاحظات تدريس الخطوة في الدليل.`;
    else if (rt.id === "listening") d.docText = `نشاط استماع ونطق — ${d.title}\n${"=".repeat(40)}\nعبارات النموذج (من لغة الدرس الموثّقة):\n${langList}\n\nالتنفيذ في هذا النموذج: من «رفيق اللغة ← تدريب النطق» إذ تُنطق العبارات بصوت الجهاز ويسجّل الطالب محلياً للمقارنة ، وتسجيلات Google Drive المفهرسة لا تُستخدم بوصفها صوت هذا الدرس قبل أن يتحقق المعلم في فهرس الصوتيات من المطابقة بعد السماع، ولا تُعرض درجة آلية.`;
    else d.docText = `مخطط عرض/قصة مصورة — ${d.title}\n${"=".repeat(40)}\nشريحة 1: عنوان الدرس وهدفه.\nشريحة 2: لغة الدرس:\n${langList}\nشريحة 3: مثال محلول مع سؤال للصف.\nشريحة 4: مهمة ثنائية للإنتاج.\nشريحة 5: خلاصة وواجب.\n(أضف صورك الخاصة المرخّصة؛ لا تستخدم صور الكتاب الممسوحة دون إذن.)`;
    d.instructions = "وثيقة للطباعة/التنزيل من إعداد المعلم.";
  }
  if (d.resType !== "doc" && rt.actType === "doc") d.type = "doc";
}
function serializeDraftItems(d) {
  if (d.type === "flashcards") return d.items.map(i => i.front + " | " + i.back).join("\n");
  if (d.type === "mcq") return d.items.map(i => [i.q, i.options[i.a], ...i.options.filter((_, x) => x !== i.a), i.why || ""].join(" | ")).join("\n");
  if (d.type === "fill") return d.items.map(i => [i.before + " ___ " + i.after, i.options[i.a], ...i.options.filter((_, x) => x !== i.a)].join(" | ")).join("\n");
  if (d.type === "match") return d.items.map(i => i.left + " | " + i.right).join("\n");
  if (d.type === "dialogue") return d.items.map(n => { const ok = n.choices.find(c => c.ok) || n.choices[0]; const w = n.choices.find(c => !c.ok) || { text: "" }; return [n.bot, ok.text, w.text, ok.reply].join(" | "); }).join("\n");
  if (d.type === "order") return d.answer.join(d.answer.some(x => x.includes(" ")) ? "\n" : " ");
  if (d.type === "video") return (d.markers || []).map(m => [m.sec, m.q, ...m.options].join(" | ")).join("\n");
  return d.docText || "";
}
function stDraftHTML(d) {
  const isDoc = d.type === "doc";
  return `<div class="panel" style="margin-bottom:16px" id="stDraftPanel">
  <h3>3️⃣ المورد الحالي: ${esc(d.title)} <span class="badge ${d.status === "published" ? "b-excellent" : "b-mid"}">${d.status === "published" ? "منشور لـ" + esc(d.target || "") : "مسودة"}</span> ${srcBadge(d.sourceStatus === "verified" ? "verified" : "teacher")}</h3>
  <div class="dash-cols">
    <div>
      <h4>👀 المعاينة كما يراها الطالب</h4>
      ${typeof activityMediaHTML === "function" ? activityMediaHTML(d) : ""}
      ${isDoc ? `<pre class="doc-preview" dir="auto">${esc(d.docText)}</pre>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="stDownloadDoc()">📥 تنزيل الوثيقة للطباعة</button></div>`
      : `<p style="color:var(--muted);font-size:14px">التجربة تفتح المشغّل نفسه الذي يستخدمه الطالب، في وضع «معاينة معلم» بلا تسجيل نتيجة.</p>
        <button class="btn btn-primary" onclick="playActivity('${d.id}',true)">▶ تجربة النشاط الآن</button>
        ${d.type === "video" ? `<label class="f-label" style="margin-top:12px">ربط فيديو لهذه المسودة (جلسة فقط)<input type="file" class="f-input" accept="video/*" onchange="if(this.files[0]){window.__sessionVideoMap['${d.id}']=URL.createObjectURL(this.files[0]);toast('🎬 رُبط الفيديو بمعاينة الجلسة محلياً فقط')}"></label>` : ""}`}
      <h4 style="margin-top:16px">✅ قائمة مراجعة ما قبل النشر (إلزامية)</h4>
      ${[["src", "راجعتُ مرجع المصدر: كل ما يُنسب للمنهج موثّق بصفحته، وإضافاتي موسومة (من إعداد معلم)"], ["lang", "تحققت من صحة اللغة ومستوى صعوبتها لطلابي"], ["instr", "التعليمات واضحة والنشاط يعمل كاملاً في المعاينة"]].map(([k, l]) =>
        `<label class="check-row"><input type="checkbox" ${d.review[k] ? "checked" : ""} onchange="stReview('${k}',this.checked)"> ${l}</label>`).join("")}
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
        ${d.status !== "published" ? `<button class="btn btn-primary" onclick="stPublish()">🚀 اعتماد ونشر لـ${esc(d.target || STUI.target)}</button>` : `<button class="btn btn-ghost" onclick="stUnpublish()">إرجاع إلى المسودات</button>`}
        <button class="btn btn-ghost" onclick="stDuplicate()">⧉ نسخ المورد</button>
        <button class="btn btn-danger-ghost" onclick="stDeleteDraft()">🗑️ حذف</button>
      </div>
    </div>
    <div>
      <h4>✏️ تحرير المحتوى (قابل للتحرير دائماً — ليس صورة)</h4>
      <label class="f-label">العنوان<input class="f-input" id="draftTitle" value="${esc(d.title)}"></label>
      <label class="f-label">التعليمات للطالب<textarea class="f-input" id="draftInstr" style="min-height:56px">${esc(d.instructions || "")}</textarea></label>
      <label class="f-label">البنود (سطر لكل بند بـ «|» كما في المعاينة)<textarea class="f-input" id="draftItems" dir="ltr" style="text-align:left;min-height:150px">${esc(serializeDraftItems(d))}</textarea></label>
      <button class="btn btn-primary" onclick="stSaveDraftEdits()">💾 حفظ التعديلات</button>
      <p class="print-note">الحفظ داخل هذا الجهاز (نموذج تجريبي دون خادم). النشر يجعل النشاط ظاهراً للطلاب في «الأنشطة» وفي صفحة خطوته.</p>
    </div>
  </div></div>`;
}
function stReview(k, v) { const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (d) { d.review[k] = v; save(); } }
function stSaveDraftEdits() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  d.title = document.getElementById("draftTitle").value.trim() || d.title;
  d.instructions = document.getElementById("draftInstr").value.trim();
  const raw = document.getElementById("draftItems").value;
  const lines = raw.split("\n").map(l => l.split("|").map(x => x.trim())).filter(a => a.some(Boolean));
  if (d.type === "doc") d.docText = raw;
  else if (d.type === "flashcards") d.items = lines.map(([front, back]) => ({ front, back: back || "" }));
  else if (d.type === "mcq") d.items = lines.map(([q, ok, w1, w2, why]) => ({ q, options: [ok, w1, w2].filter(Boolean), a: 0, why: why || "" }));
  else if (d.type === "fill") d.items = lines.map(([sent, ok, w1, w2]) => { const [b, a] = String(sent).split("___"); return { before: (b || "").trim(), after: (a || "").trim(), options: [ok, w1, w2].filter(Boolean), a: 0, why: "الإجابة: " + ok }; });
  else if (d.type === "match") { d.items = lines.map(([left, right]) => ({ left, right })); d.rightOrder = d.items.map((_, i) => (i + 1) % Math.max(1, d.items.length)); }
  else if (d.type === "dialogue") d.items = lines.map(([bot, ok, w, fb]) => ({ bot, choices: [{ text: ok, ok: 1, reply: fb || "أحسنت!" }, { text: w || "…", ok: 0, reply: "راجع السؤال واختر الرد المناسب." }] }));
  else if (d.type === "order") { const multi = lines.length > 1 && lines[0].length === 1; d.answer = multi ? lines.map(a => a[0]) : (lines[0] || []).length > 1 ? lines[0] : (lines[0] || [""])[0].split(/\s+/); d.pieces = d.answer.slice().reverse(); }
  else if (d.type === "video") d.markers = lines.map(([sec, q, ok, w1, w2]) => ({ sec: +sec || 0, q, options: [ok, w1, w2].filter(Boolean), a: 0 }));
  if (d.status === "published") syncPublished(d);
  save(); toast("💾 حُفظت تعديلات المورد"); navigate("aistudio");
}
function syncPublished(d) {
  const pub = { ...d, status: "published" };
  const i = (store.customActivities || []).findIndex(a => a.id === d.id);
  if (i >= 0) store.customActivities[i] = pub; else (store.customActivities = store.customActivities || []).push(pub);
}
function stPublish() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  if (!(d.review.src && d.review.lang && d.review.instr)) { toast("⚠️ أكمل بنود المراجعة الثلاثة قبل النشر — لا نشر دون مراجعة المعلم"); return; }
  if (d.audioTrackId && typeof trackStatus === "function" && trackStatus(d.audioTrackId) !== "verified") { toast("⚠️ التسجيل المرفق ليس Verified بعد — استمع إليه واعتمد مطابقته من فهرس الصوتيات قبل نشر نشاط يعتمد عليه"); return; }
  d.status = "published"; syncPublished(d); save();
  toast("🚀 نُشر المورد لـ" + (d.target || STUI.target) + " — سيظهر الآن في أنشطة الطلاب");
  navigate("aistudio");
}
function stUnpublish() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  d.status = "draft"; store.customActivities = (store.customActivities || []).filter(a => a.id !== d.id); save(); toast("أُرجع المورد إلى المسودات"); navigate("aistudio");
}
function stDuplicate() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  const copy = JSON.parse(JSON.stringify(d)); copy.id = "res-" + Date.now(); copy.title += " (نسخة)"; copy.status = "draft";
  store.studioDrafts.unshift(copy); STUI.draftId = copy.id; save(); toast("⧉ نُسخ المورد مسودةً جديدة"); navigate("aistudio");
}
function stDeleteDraft() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  store.studioDrafts = store.studioDrafts.filter(x => x.id !== d.id);
  store.customActivities = (store.customActivities || []).filter(a => a.id !== d.id);
  STUI.draftId = null; save(); toast("🗑️ حُذف المورد"); navigate("aistudio");
}
function stDownloadDoc() {
  const d = (store.studioDrafts || []).find(x => x.id === STUI.draftId); if (!d) return;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\ufeff" + d.docText], { type: "text/plain;charset=utf-8" }));
  a.download = d.title.slice(0, 30) + ".txt"; a.click(); URL.revokeObjectURL(a.href);
}
function stLibraryHTML() {
  const all = store.studioDrafts || [];
  return `<div class="panel"><h3>🗂️ مكتبة مواردي (مسودات ومنشورات — محفوظة على هذا الجهاز)</h3>
  ${all.length ? all.map(d => `<div class="today-item"><span class="today-time">${(RESOURCE_TYPES.find(t => t.id === d.resType) || {}).icon || "🧩"}</span>
    <div style="flex:1"><strong>${esc(d.title)}</strong><small style="display:block">${d.status === "published" ? "منشور — " + esc(d.target || "") : "مسودة"} · ${esc(skillAr(d.skill))} · أُنشئ ${esc(d.created || "")}</small></div>
    <button class="btn btn-ghost btn-sm" onclick="STUI.draftId='${d.id}';navigate('aistudio');setTimeout(()=>{var e=document.getElementById('stDraftPanel');if(e)e.scrollIntoView({behavior:'smooth'})},60)">فتح/تحرير</button></div>`).join("")
  : `<div class="empty-state" style="padding:22px"><div class="e-ic">🗂️</div><p>لا موارد بعد — أنشئ أول مورد من الأعلى.</p></div>`}</div>`;
}
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { aistudio: vAiStudio });
