/* ===== مدرستي اليمن — المشاهد التعليمية المتحركة (مشاهد ويب SVG حية، ليست فيديو جاهزاً) =====
   المرجع البصري: صفحات كتاب الطالب التي فُحصت ونسخت بصرياً من الملف الذي زوّدنا به صاحب المشروع.
   حالة نسخ PB3/PB4 هي «منسوخ بصريًا — بانتظار مراجعة بشرية ثانية»، وليست Verified:
   • PB ص3 (تمرين 1.6): حوار Tom وBill عند مكتبين خشبيين في الصف — نصّ الحوار منسوخ بصريًا هنا.
   • PB ص4 (تمرين 1.12): صفحتا Tim (خلف مكتب البريد Post Office وشاطئ) وSaleh (بجانب Supermarket وملعب كرة) وعبارات A–H.
   • موضوع PB ص2 معروف من Contents وTB ملخص الخطوة 5 فقط؛ لم تُوجد الصفحة بين ص1 وص3 في المسح المزوّد،
     لذلك سيناريو مشهد الوقت إطار من إعداد المعلم حول جمل الدليل، وليس نصًا من PB2.
   الرسوم إعادة رسم تعليمية مبسّطة للسياق نفسه بشخصيات SVG متحركة — لا نعيد نشر صور الكتاب الممسوحة.
   التزامن: مع نطق الجهاز (TTS) سطرًا بسطر — توقيتنا موثوق لأن النص والصوت من عندنا؛
   ولا ندّعي أي مزامنة مع تسجيلات Drive. حيث يوجد «تسجيل مرشح» فهو للمقارنة/مراجعة
   المعلم من فهرس الصوتيات، وحالته Mapping Unconfirmed حتى يُستمع إليه ويُعتمد. */
const SCENES = [
  { id: "bill-talk", title: "محادثة: Tom يقابل Bill", stepRef: "u1g3", skill: "listening",
    mediaKind: "animated-web-scene", syncStatus: "device-tts-line-by-line", driveCandidateId: "gd-03",
    sourceStatus: "transcribed-pending-second-review", sourceRef: "PB ص3 — تمرين 1.6 (Read and write · WB ص6) — نُسخ نصّ الحوار بصريًا من الكتاب وهو بانتظار مراجعة بشرية ثانية (ليس Verified)؛ ودليل المعلم يقول إن CS3 هو محادثة PB3. ملف Drive 03.mp3 مرشح غير مؤكد للمقارنة، لا صوت معتمد للمشهد",
    settingAr: "كما في رسم الكتاب: ولدان عند مكتبين خشبيين في الصف؛ Bill الأشقر بسترة زرقاء جالساً عند علبة أقلامه، وTom البني الشعر يميل نحوه ويسأله.",
    chars: [{ id: "Tom", hair: "#6b4226", shirt: "#2f6fb2", x: 180 }, { id: "Bill", hair: "#e8c766", shirt: "#274b8f", x: 430 }],
    stage: "classroom",
    lines: [
      ["Tom", "What's your name?"], ["Bill", "Bill. B-i-l-l."],
      ["Tom", "How old are you?"], ["Bill", "Thirteen."],
      ["Tom", "Where are you from?"], ["Bill", "I'm from England."],
      ["Tom", "How many brothers have you got?"], ["Bill", "One."],
      ["Tom", "How many sisters have you got?"], ["Bill", "Two."],
      ["Tom", "What do you do after school?"], ["Bill", "I watch TV and I go swimming every Tuesday."],
      ["Tom", "Do you play football?"], ["Bill", "No, I don't."]
    ].map(([who, text]) => ({ who, text })),
    questions: [
      { q: "كم عمر Bill؟ (استمع لتجد الرقم)", options: ["Twelve.", "Thirteen.", "Fourteen."], a: 1, why: "قال Bill في الحوار: Thirteen." },
      { q: "من أين Bill؟", options: ["From Yemen.", "From England.", "From Kuwait."], a: 1, why: "قال: I'm from England." },
      { q: "كم أختاً عند Bill؟", options: ["One.", "Two.", "Three."], a: 1, why: "أجاب عن How many sisters بـ Two — وعدد إخوته الذكور One، فانتبه للفرق بين السؤالين!" },
      { q: "🧠 ماذا يفعل Bill بعد المدرسة — ولماذا إجابته غنية بالمعلومات؟", options: ["يشاهد التلفاز ويسبح كل ثلاثاء — إجابة كاملة بنشاطين ووقت محدد.", "يلعب كرة القدم كل يوم.", "ينام فقط."], a: 0, why: "إجابته: I watch TV and I go swimming every Tuesday — نشاطان وتكرار زمني. وكرة القدم نفاها صراحة في آخر سطر." }
    ] },
  { id: "bill-time", title: "مشهد: ما الوقت يا Bill؟", stepRef: "u1g2", skill: "listening", mediaKind: "animated-web-scene", syncStatus: "device-tts-line-by-line",
    sourceStatus: "teacher", sourceRef: "السيناريو إطار معلم حول جملتي TB ملخص الخطوة 5 (ص25) وموضوع PB2 «Reading puzzle – daily routine» كما يرد في Contents؛ صفحة PB2 نفسها لم تُوجد بين ص1 وص3 في المسح المزوّد، فلا يُنسب هذا السيناريو إلى نصها",
    settingAr: "غرفة نوم صباحية: نافذة تشرق منها الشمس وساعة حائط كبيرة وسرير — يستيقظ Bill عندما تصل الساعة إلى السادسة كما في لغة الدرس.",
    chars: [{ id: "Teacher", hair: "#37474f", shirt: "#546e7a", x: 150 }, { id: "Bill", hair: "#e8c766", shirt: "#274b8f", x: 440 }],
    stage: "bedroom",
    lines: [
      { who: "Teacher", text: "Look at Bill. What's the time?" },
      { who: "Bill", text: "It's six o'clock.", fx: "sunup" },
      { who: "Teacher", text: "What does Bill do at six o'clock?" },
      { who: "Bill", text: "He gets up!", fx: "getup" },
      { who: "Teacher", text: "Good morning, Bill!" },
      { who: "Bill", text: "Good morning!" }
    ],
    questions: [
      { q: "What time does Bill get up?", options: ["At seven o'clock.", "At six o'clock.", "At nine o'clock."], a: 1, why: "جملة الدليل بنصّها: What does Bill do at six o'clock? — He gets up." },
      { q: "🧠 كيف ساعدتك صورة الساعة والشمس على الفهم قبل قراءة الجملة؟", options: ["لم تساعدني بشيء.", "الساعة تشير للسادسة والشمس تشرق، فالمشهد صباحي ووقت الاستيقاظ منطقي.", "لأنهما ملونتان."], a: 1, why: "السياق البصري خطوة رسمية في تقنية الاستماع بالدليل: الصورة تتنبأ بالمعنى وتؤكده." }
    ] },
  { id: "tim-saleh", title: "مشهد: من المتحدث؟ Tim أم Saleh؟", stepRef: "u1g6", skill: "reading", mediaKind: "animated-web-scene", syncStatus: "device-tts-line-by-line",
    sourceStatus: "transcribed-pending-second-review", sourceRef: "PB ص4 — تمرين 1.12 (Look, read and do · WB ص13) — العبارات A–H ووصف اللوحتين منسوخة بصريًا من الكتاب وهي بانتظار مراجعة بشرية ثانية (ليست Verified)",
    settingAr: "لوحتان كما في الكتاب: Tim (شعر بني مجعد وكنزة خضراء) خلفه مكتب بريد وشاطئ كرة طائرة وصورة عائلية؛ وSaleh (شعر أسود وقميص أحمر) خلفه سوبرماركت وملعب كرة قدم ومراجيح.",
    chars: [{ id: "Tim", hair: "#7a4a21", shirt: "#2e8b57", x: 165 }, { id: "Saleh", hair: "#1c1c1c", shirt: "#c0392b", x: 455 }],
    stage: "split",
    lines: [
      { who: "Voice", text: "A. I live in a house behind the Post Office.", clue: "postoffice" },
      { who: "Voice", text: "B. My house is next to the supermarket.", clue: "supermarket" },
      { who: "Voice", text: "C. I've got two brothers and one sister.", clue: "family" },
      { who: "Voice", text: "D. I've got one brother and two sisters.", clue: "family" },
      { who: "Voice", text: "E. I like listening to cassettes.", clue: "cassettes" },
      { who: "Voice", text: "F. My favourite pastime is playing football.", clue: "football" },
      { who: "Voice", text: "G. My family goes to the park every Thursday.", clue: "park" },
      { who: "Voice", text: "H. We go to the beach every Thursday.", clue: "beach" }
    ],
    questions: [
      { q: "من قال العبارة A (بيتي خلف مكتب البريد)؟ دلّت عليه اللوحة خلفه.", options: ["Tim", "Saleh"], a: 0, why: "لوحة Tim في الكتاب فيها مبنى «Post Office» وبيت خلفه." },
      { q: "من قال العبارة B (بيتي بجانب السوبرماركت)؟", options: ["Tim", "Saleh"], a: 1, why: "لوحة Saleh فيها مبنى Supermarket كبير." },
      { q: "من قال العبارة H (نذهب إلى الشاطئ كل خميس)؟", options: ["Tim", "Saleh"], a: 0, why: "في خلفية Tim شاطئ وكرة طائرة شاطئية." },
      { q: "من قال العبارة F (هوايتي كرة القدم)؟", options: ["Tim", "Saleh"], a: 1, why: "خلف Saleh ملعب كرة قدم بمرمى ولاعبين." },
      { q: "🧠 لماذا لا نصحّح العبارات C وD وE وG آلياً هنا؟", options: ["لأنها بلا إجابة أبداً.", "لأن أدلّتها في الصور العائلية/التفاصيل الصغيرة تحتاج مطابقة دقيقة مع صفحة الكتاب الأصلية/تسجيل موثّق — نناقشها مع المعلم بدل التخمين.", "لأنها بالإنجليزية."], a: 1, why: "هذا هو موقف المنصة المنهجي: ما لا دليل واضحاً عليه يُناقش ويُراجع، لا يُخمّن." }
    ] }
];
/* ===== Animated SVG scenes generated from every transcribed PB dialogue =====
   The three hand-made scenes above are preserved. These generated scenes reuse
   BOOK_DIALOGUES lines verbatim (with labelled practice completions only where
   the data itself carries completedText) and device TTS. They do not use Drive. */
function sceneCharKey(name) {
  return String(name || "speaker").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "speaker";
}
function sceneDialogueDisplayText(line) { return line ? (line.completedText || line.text || "") : ""; }
function sceneDialogueSpeechText(line) {
  if (!line) return "";
  if (typeof dlgTrainingSpeechText === "function") return dlgTrainingSpeechText(line);
  return line.completedText || line.speechText || String(line.text || "").replace(/_+/g, "").trim();
}
function buildDialogueScenes() {
  if (typeof BOOK_DIALOGUES === "undefined" || !Array.isArray(BOOK_DIALOGUES)) return [];
  const hairPalette = ["#263238", "#6b4226", "#8d5a2b", "#37474f", "#5d4037", "#7a4a21", "#455a64", "#3e2723"];
  const shirtPalette = ["#2f6fb2", "#c0392b", "#2e8b57", "#7c4dbc", "#e67e22", "#00838f", "#ad1457", "#546e7a", "#6d4c41", "#1565c0"];
  return BOOK_DIALOGUES.map(d => {
    const speakers = [...new Set(d.lines.map(l => l.speaker).filter(Boolean))];
    const n = Math.max(1, speakers.length);
    const scale = n <= 2 ? 1 : n <= 4 ? 0.8 : n <= 6 ? 0.64 : 0.52;
    const chars = speakers.map((speaker, i) => ({
      id: speaker,
      key: sceneCharKey(speaker),
      hair: /Narrator|Sign/i.test(speaker) ? "#455a64" : hairPalette[i % hairPalette.length],
      shirt: /Narrator|Sign/i.test(speaker) ? "#78909c" : shirtPalette[i % shirtPalette.length],
      x: n === 1 ? 320 : Math.round(78 + i * (484 / (n - 1))),
      y: Math.max(88, Math.round(342 - 262 * scale)),
      scale
    }));
    return {
      id: `scene-${d.id}`,
      dialogueId: d.id,
      generatedFromDialogue: true,
      title: `مشهد حوار: ${d.title}`,
      unit: d.unit,
      stepRef: d.stepRef,
      skill: "listening",
      mediaKind: "animated-web-scene",
      syncStatus: "device-tts-line-by-line",
      sourceStatus: d.status,
      sourceRef: `${d.printedPages} — Exercise ${d.exercise}; ${d.pdfPages}. نص الحوار منسوخ بصرياً وبانتظار مراجعة بشرية ثانية (ليس Verified). الرسم والصوت مولّدان للتدريب، ولا يوجد رابط Drive لهذا المشهد.`,
      settingAr: d.pictureContextAr || d.settingAr,
      icon: d.icon || "💬",
      chars,
      stage: "dialogue",
      rates: [0.6, 0.8, 1],
      lines: d.lines.map(line => ({
        who: line.speaker,
        text: sceneDialogueDisplayText(line),
        sourceText: line.text,
        speechText: sceneDialogueSpeechText(line),
        kind: line.kind || "dialogue",
        completion: !!line.completedText
      })),
      questions: d.questions || []
    };
  });
}
const DIALOGUE_SCENES = buildDialogueScenes();
SCENES.push(...DIALOGUE_SCENES);
function sceneForDialogue(dialogueId) { return SCENES.find(s => s.dialogueId === dialogueId) || null; }
let SCFILTER = { kind: "all", unit: "all", q: "" };
function sceneVisibleScenes() {
  const q = String(SCFILTER.q || "").trim().toLowerCase();
  return SCENES.filter(s => {
    if (SCFILTER.kind === "book" && !s.generatedFromDialogue) return false;
    if (SCFILTER.kind === "handmade" && s.generatedFromDialogue) return false;
    if (SCFILTER.unit !== "all") {
      const d = s.dialogueId && typeof dlgById === "function" ? dlgById(s.dialogueId) : null;
      if (!d || d.unit !== Number(SCFILTER.unit)) return false;
    }
    if (q && !(`${s.title} ${s.sourceRef} ${s.settingAr} ${s.stepRef}`).toLowerCase().includes(q)) return false;
    return true;
  });
}
function sceneSetKind(kind) { SCFILTER.kind = ["all", "book", "handmade"].includes(kind) ? kind : "all"; navigate("scenes"); }
function sceneSetUnit(unit) { SCFILTER.unit = String(unit); navigate("scenes"); }
function sceneSetQuery(value) { SCFILTER.q = String(value || ""); navigate("scenes"); }

function svgChar(c) {
  return `<g class="sc-char" id="char-${esc(c.key || sceneCharKey(c.id))}" data-char="${esc(c.key || sceneCharKey(c.id))}" transform="translate(${c.x},${c.y || 118}) scale(${c.scale || 1})">
    <path d="M-40 168 Q0 108 40 168 L46 240 L-46 240 Z" fill="${c.shirt}"/>
    <circle cx="0" cy="62" r="46" fill="#f2c094"/>
    <path d="M-47 58 Q-50 6 0 12 Q50 6 47 58 Q36 26 0 30 Q-36 26 -47 58Z" fill="${c.hair}"/>
    <ellipse class="eye" cx="-16" cy="66" rx="5" ry="6" fill="#263238"/><ellipse class="eye" cx="16" cy="66" rx="5" ry="6" fill="#263238"/>
    <ellipse class="mouth" cx="0" cy="90" rx="10" ry="4" fill="#8d4b2f"/>
    <path class="arm" d="M38 140 Q66 160 60 196" stroke="#f2c094" stroke-width="13" fill="none" stroke-linecap="round"/>
    <text class="sc-name" x="0" y="262" text-anchor="middle">${esc(c.id)}</text></g>`;
}
function stageSVG(scene) {
  const chars = scene.chars.map(svgChar).join("");
  let bg = "";
  if (scene.stage === "classroom") bg = `
    <rect width="640" height="360" fill="#fdf6ec"/><rect x="120" y="18" width="400" height="86" rx="10" fill="#2e6b4f"/>
    <text x="320" y="56" text-anchor="middle" fill="#fff" font-size="21" font-family="Cairo">1.6 Read and write</text>
    <text x="320" y="84" text-anchor="middle" fill="#cfe8db" font-size="15">What's your name? · How old are you?</text>
    <g id="prop-desk"><rect x="96" y="288" width="190" height="44" rx="8" fill="#b08954"/><rect x="350" y="288" width="190" height="44" rx="8" fill="#b08954"/><rect x="396" y="270" width="86" height="20" rx="6" fill="#455a64"/><rect x="404" y="260" width="9" height="16" fill="#e67e22"/><rect x="420" y="260" width="9" height="16" fill="#0b63c7"/><rect x="436" y="260" width="9" height="16" fill="#0e9f6e"/></g>`;
  else if (scene.stage === "bedroom") bg = `
    <rect width="640" height="360" fill="#eef5ff"/><rect x="430" y="26" width="170" height="150" rx="12" fill="#d9ecff"/>
    <g class="sc-sun"><circle cx="515" cy="140" r="30" fill="#ffc63f"/></g>
    <g class="sc-clock"><circle cx="320" cy="92" r="54" fill="#fff" stroke="#274b8f" stroke-width="6"/>
    <line class="hand-h" x1="320" y1="92" x2="320" y2="60" stroke="#274b8f" stroke-width="6" stroke-linecap="round"/>
    <line class="hand-m" x1="320" y1="92" x2="354" y2="92" stroke="#e67e22" stroke-width="4" stroke-linecap="round"/><circle cx="320" cy="92" r="6" fill="#274b8f"/></g>
    <g id="prop-bed"><rect x="380" y="300" width="220" height="34" rx="10" fill="#8d6e63"/><rect x="388" y="282" width="140" height="26" rx="10" fill="#90caf9"/><rect x="388" y="274" width="52" height="20" rx="8" fill="#fff"/></g>`;
  else if (scene.stage === "dialogue") {
    const d = scene.dialogueId && typeof dlgById === "function" ? dlgById(scene.dialogueId) : null;
    const boardTitle = d ? `Unit ${d.unit} · ${d.title}` : scene.title;
    const boardSub = d ? `${d.printedPages} · Exercise ${d.exercise}` : "Book dialogue";
    bg = `
    <rect width="640" height="360" fill="#eef6ff"/><rect y="286" width="640" height="74" fill="#dcefdc"/>
    <circle cx="74" cy="76" r="48" fill="#fff3c4" opacity=".85"/><circle cx="570" cy="84" r="58" fill="#f3e8ff" opacity=".8"/>
    <rect x="105" y="16" width="430" height="82" rx="14" fill="#173f6e"/>
    <text x="320" y="51" text-anchor="middle" fill="#fff" font-size="19" font-weight="700" font-family="Cairo">${esc(boardTitle)}</text>
    <text x="320" y="78" text-anchor="middle" fill="#cfe8ff" font-size="14">${esc(boardSub)}</text>
    <text x="320" y="126" text-anchor="middle" font-size="31">${esc(scene.icon || "💬")}</text>
    <path d="M38 286 Q180 258 320 286 T602 286" fill="none" stroke="#90b7d4" stroke-width="5" stroke-linecap="round"/>`;
  }
  else bg = `
    <rect width="320" height="360" fill="#e9f7ff"/><rect x="320" width="320" height="360" fill="#fff3e8"/>
    <g id="clue-postoffice"><rect x="36" y="30" width="150" height="64" rx="8" fill="#dfe9f5" stroke="#7d9dbd"/><text x="111" y="68" text-anchor="middle" font-size="17" fill="#274b8f" font-weight="700">Post Office</text></g>
    <g id="clue-beach"><circle cx="252" cy="66" r="17" fill="#ff7043"/><path d="M210 108 Q250 92 300 108 L300 124 L210 124Z" fill="#4db6e2"/></g>
    <g id="clue-supermarket"><rect x="356" y="28" width="170" height="66" rx="8" fill="#fdebd8" stroke="#d8a05a"/><text x="441" y="68" text-anchor="middle" font-size="16" fill="#9a5b13" font-weight="700">Supermarket</text></g>
    <g id="clue-football"><rect x="540" y="34" width="74" height="58" fill="#8bc98e"/><rect x="566" y="44" width="24" height="34" fill="none" stroke="#fff" stroke-width="3"/><circle cx="578" cy="100" r="10" fill="#fff" stroke="#37474f"/></g>
    <g id="clue-family"><rect x="270" y="120" width="100" height="20" rx="8" fill="#fff" stroke="#b0bec5"/><text x="320" y="135" text-anchor="middle" font-size="12" fill="#546e7a">family photos</text></g>`;
  return `<svg id="sceneSvg" class="scene-svg" viewBox="0 0 640 360" role="img" aria-label="${esc(scene.title)}">${bg}${chars}</svg>`;
}
let SC = { scene: null, idx: 0, playing: false, timer: null, captions: true, rate: 1, roleMode: false, myChar: null, counted: false };
function vScenes() {
  const visible = sceneVisibleScenes();
  const bookCount = SCENES.filter(s => s.generatedFromDialogue).length;
  const handmadeCount = SCENES.length - bookCount;
  return `<div class="page-head"><h2>🎬 المشاهد التعليمية المتحركة</h2>
  <p>مشاهد ويب مرسومة (SVG حية) لكل حوارات كتاب الطالب السبع والثلاثين في Units 1–7، إضافة إلى المشاهد اليدوية الثلاثة المحفوظة — تتحرك الشخصيات وتتبدل أفواهها وتتحدث بصوت جهازك سطراً بسطر عند الضغط، وبسرعات <b dir="ltr">0.6 / 0.8 / 1.0</b>، مع فقاعات حوار وأوضاع: مشاهدة كاملة، مع النص، صوت فقط، استمع ثم أجب، وتدرّب على دورك. <b>حالة الوسيط:</b> مشاهد ويب متحركة لا فيديوهات جاهزة ولا صور كتاب منسوخة؛ وتسجيلات Drive لا تُزامن بها وغير مرتبطة بحواراتها. نصوص الحوار منسوخة بصرياً وبانتظار مراجعة بشرية ثانية.</p></div>
  <div class="panel" style="margin-bottom:16px"><h3>🔎 ابحث عن مشهد حوار</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:end">
      <div class="filters" style="margin:0">${[["all", `الكل (${SCENES.length})`], ["book", `حوارات الكتاب (${bookCount})`], ["handmade", `مشاهد يدوية (${handmadeCount})`]].map(([k, label]) => `<button class="chip-filter ${SCFILTER.kind === k ? "active" : ""}" onclick="sceneSetKind('${k}')">${label}</button>`).join("")}</div>
      <label>الوحدة <select class="f-input" style="width:auto" onchange="sceneSetUnit(this.value)"><option value="all" ${SCFILTER.unit === "all" ? "selected" : ""}>Units 1–7</option>${[1, 2, 3, 4, 5, 6, 7].map(u => `<option value="${u}" ${String(SCFILTER.unit) === String(u) ? "selected" : ""}>Unit ${u}</option>`).join("")}</select></label>
      <label style="flex:1;min-width:220px">ابحث بعنوان/صفحة <input class="f-input" value="${esc(SCFILTER.q)}" onchange="sceneSetQuery(this.value)" placeholder="مثال: falcon أو PB p.60"></label>
    </div><small>المعروض الآن ${visible.length} مشهداً. تصفية الوحدة تعرض مشاهد حواراتها المنسوخة؛ المشاهد اليدوية تظهر في «الكل» أو نوعها.</small></div>
  ${visible.length ? `<div class="lessons-grid">${visible.map(s => `
    <article class="lesson-card" onclick="openScene('${s.id}')">
      <div class="lesson-thumb" style="background:linear-gradient(120deg,#7c4dbc,#5b35a8)"><span class="t-grade">مشهد ويب متحرك</span><span class="t-icon">${esc(s.icon || "🎬")}</span></div>
      <div class="lesson-body"><h4>${esc(s.title)}</h4><p>${esc(s.settingAr)}</p>
      <div style="margin-top:5px">${srcBadge(s.sourceStatus)}</div>
      <div class="lesson-meta"><span dir="ltr">${esc(s.sourceRef.split("—")[0].trim())}</span><span>${arNum(s.lines.length)} سطر حوار</span><span>${s.generatedFromDialogue ? "🎙️ من حوار كتابي · 0.6/0.8/1.0" : "مشهد يدوي محفوظ"}</span>${s.driveCandidateId ? '<span class="badge b-mid">تسجيل Drive مرشح غير مؤكد</span>' : ""}</div></div></article>`).join("")}</div>` : `<div class="empty-state"><div class="e-ic">🎬</div><strong>لا مشاهد مطابقة للتصفية</strong><p>غيّر نوع المشهد أو الوحدة أو نص البحث.</p></div>`}
  <div class="panel" style="margin-top:16px"><h3>🧭 كيف تُستخدم المشاهد صفياً (وفق الدليل)؟</h3>
  <p style="color:var(--muted);font-size:14.5px">ابدأ بالمشاهدة الكاملة لفهم الموقف من الصورة (تقنية استماع TB ص13)، ثم أعد مع فقاعات النص، ثم «استمع ثم أجب»، وأخيراً التدرب الثنائي على الأدوار (عمل ثنائي TB ص10) — ولكل مشهد مرجعه في الكتاب معلَناً.</p></div>`;
}
function openScene(id) {
  const s = SCENES.find(x => x.id === id); if (!s) return;
  sceneStop();
  SC = { scene: s, idx: 0, playing: false, timer: null, captions: true, rate: 1, roleMode: false, myChar: sceneDefaultRole(s), counted: false };
  state.view = "scenes"; markActiveNav();
  document.getElementById("appContent").innerHTML = `
  <button class="back-btn" onclick="sceneStop();navigate('scenes')">→ كل المشاهد</button>
  <div class="page-head"><h2>🎬 ${esc(s.title)}</h2><p>${esc(s.settingAr)}</p></div>
  <div class="why-box"><b>🔎 مرجع المشهد:</b> ${esc(s.sourceRef)} ${srcBadge(s.sourceStatus)}<br><small>مشهد ويب متحرك معاد رسمه بصرياً لسياق الكتاب — النص المنطوق هنا بنطق جهازك (TTS) سطراً بسطر؛ حركة الفم تقريبية للمشهد نفسه وليست مزامنة مع أي تسجيل Drive. فهرس Drive متاح منفصلاً، ولا يُقدَّم أي ملف منه بوصفه صوت الكتاب لهذا المشهد قبل اعتماد المعلم للمطابقة.</small>
  ${s.dialogueId ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="sceneStop();openDialogueLab('${s.dialogueId}','listen')">🎙️ مختبر الحوار الأصلي</button><button class="btn btn-ghost btn-sm" onclick="sceneStop();openBookDialogueCompanion('${s.dialogueId}')">🎭 تبادل الأدوار في رفيق اللغة</button><button class="btn btn-ghost btn-sm" onclick="sceneStop();if(typeof startQuiz==='function')startQuiz('dlgquiz-${s.dialogueId}')">✍️ اختبار الحوار</button><button class="btn btn-ghost btn-sm" onclick="if(typeof dlgDownloadHomework==='function')dlgDownloadHomework('${s.dialogueId}')">📚 واجب المهارات الأربع</button></div>` : ""}
  ${s.driveCandidateId ? `<div style="margin-top:9px"><button class="btn btn-ghost btn-sm" onclick="sceneStop();auLoad('${s.driveCandidateId}')">🎧 افتح التسجيل المرشح من Drive في المشغّل (Mapping Unconfirmed)</button> <small>للمقارنة بقيادة المعلم فقط — سيغادر المشهدَ إلى فهرس الصوتيات.</small></div>` : ""}</div>
  <div class="panel scene-panel">
    <div class="scene-stage" id="sceneStage">${stageSVG(s)}
      <div class="scene-bubble" id="sceneBubble" dir="ltr">▶ اضغط تشغيل لبدء المشهد…</div>
    </div>
    <div class="scene-progress" id="sceneDots">${s.lines.map((_, i) => `<span class="dotp ${i === 0 ? "on" : ""}"></span>`).join("")}</div>
    <div class="au-controls">
      <button class="btn btn-primary" id="scPlayBtn" onclick="sceneToggle()">▶ مشاهدة واستماع كامل</button>
      <button class="btn btn-ghost btn-sm" onclick="sceneRestart()">⏮ إعادة المشهد</button>
      <button class="btn btn-ghost btn-sm" onclick="scenePrev()">السطر السابق</button>
      <button class="btn btn-ghost btn-sm" onclick="sceneNext(true)">السطر التالي</button>
      <label class="check-row" style="margin:0;padding:7px 11px"><input type="checkbox" checked onchange="SC.captions=this.checked;scenePaint()"> فقاعات الحوار</label>
      <label class="check-row" style="margin:0;padding:7px 11px"><input type="checkbox" onchange="sceneAudioOnly(this.checked)"> صوت فقط (إخفاء الرسم)</label>
      <span style="font-size:13px">سرعة الصوت المولّد: ${[0.6, 0.8, 1].map(r => `<button type="button" class="chip-filter ${r === 1 ? "active" : ""}" data-scene-rate="${r}" onclick="sceneSetRate(${r})">${r.toFixed(1)}×</button>`).join("")}</span>
    </div>
    <div class="au-controls" style="background:#f7f2ff;border-radius:12px;padding:10px">
      <b>🎤 وضع التدرب على الأدوار:</b>
      <select class="f-input" style="width:auto" id="scRoleSel">${sceneRoleOptions(s).map(role => `<option value="${esc(role)}" ${SC.myChar === role ? "selected" : ""}>${esc(role)}</option>`).join("")}</select>
      <button class="btn btn-ghost btn-sm" onclick="sceneRoleMode()">ابدأ — أسطر شخصيتي ستسكت لأقولها أنا</button>
      <span class="print-note">للتبادل النصي والصوتي الكامل مع تغذية راجعة استخدم «حوارات كتاب الطالب» في رفيق اللغة.</span>
    </div>
    ${s.dialogueId ? `<details class="mini-stat" style="margin-top:12px"><summary><b>💬 نص الحوار داخل المشهد — اضغط أي سطر للوصول إليه</b></summary><div style="margin-top:9px">${s.lines.map((l, i) => `<button type="button" class="opt-btn" style="width:100%;text-align:left;margin:4px 0" dir="ltr" onclick="sceneGoTo(${i},true)"><b>${i + 1}. ${esc(l.who)}:</b> ${esc(l.text)}${l.completion ? " ✏️ labelled practice completion" : ""}</button>`).join("")}</div></details>` : ""}
    <div id="sceneEnd"></div>
  </div>`;
  window.scrollTo(0, 0); scenePaint();
}
function sceneRoleOptions(scene) {
  const roles = [...new Set(scene.lines.filter(l => !["narration", "sign", "prompt"].includes(l.kind) && !/^(Narrator|Sign)$/i.test(l.who)).map(l => l.who))];
  return roles.length ? roles : scene.chars.map(c => c.id);
}
function sceneDefaultRole(scene) {
  const roles = [...new Set(scene.lines.filter(l => !["narration", "sign", "prompt"].includes(l.kind) && !/^(Narrator|Sign)$/i.test(l.who)).map(l => l.who))];
  return roles[1] || roles[0] || (scene.chars[0] && scene.chars[0].id) || "";
}
function sceneSetRate(value) {
  SC.rate = [0.6, 0.8, 1].includes(Number(value)) ? Number(value) : 1;
  document.querySelectorAll("[data-scene-rate]").forEach(btn => btn.classList.toggle("active", Number(btn.getAttribute("data-scene-rate")) === SC.rate));
  if (SC.playing) sceneSpeakCurrent();
  else if (typeof toast === "function") toast(`🔊 سرعة المشهد الآن ${SC.rate.toFixed(1)}×`);
  else scenePaint();
}
function sceneGoTo(index, play = false) {
  if (!SC.scene) return;
  SC.idx = Math.max(0, Math.min(SC.scene.lines.length - 1, Number(index) || 0));
  const end = document.getElementById("sceneEnd"); if (end) end.innerHTML = "";
  SC.playing = !!play;
  const btn = document.getElementById("scPlayBtn"); if (btn) btn.textContent = play ? "⏸ إيقاف مؤقت" : "▶ استئناف المشهد";
  if (play) sceneSpeakCurrent(); else { clearTimeout(SC.timer); try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {} scenePaint(); }
}
function sceneAudioOnly(off) { const st = document.getElementById("sceneStage"); if (st) st.classList.toggle("audio-only", off); }
function scenePaint() {
  const s = SC.scene; if (!s) return;
  const line = s.lines[Math.min(SC.idx, s.lines.length - 1)];
  document.querySelectorAll(".sc-char").forEach(g => { g.classList.toggle("speaking", g.id === "char-" + sceneCharKey(line.who)); });
  const stage = document.getElementById("sceneStage");
  if (stage) { stage.classList.toggle("fx-sunup", s.lines.slice(0, SC.idx + 1).some(l => l.fx === "sunup" || l.fx === "getup")); stage.classList.toggle("fx-getup", s.lines.slice(0, SC.idx + 1).some(l => l.fx === "getup")); }
  document.querySelectorAll("[id^=clue-]").forEach(el => el.classList.toggle("clue-on", !!line.clue && el.id === "clue-" + line.clue));
  const b = document.getElementById("sceneBubble");
  if (b) {
    if (!SC.captions) b.textContent = "…";
    else if (SC.roleMode && line.who === SC.myChar) b.innerHTML = `🎤 <span dir="rtl">دورك يا ${esc(SC.myChar)} — قل جملتك بصوتك ثم اضغط «السطر التالي»</span>`;
    else b.innerHTML = `<b>${esc(line.who)}:</b> ${esc(line.text)}${line.completion ? `<br><small dir="rtl">✏️ إكمال تدريبي موسوم لفراغ/سطر مفتوح في الكتاب.</small>` : ""}`;
  }
  document.querySelectorAll("#sceneDots .dotp").forEach((d, i) => d.classList.toggle("on", i <= SC.idx));
}
function sceneSpeakCurrent() {
  const s = SC.scene, line = s.lines[SC.idx]; if (!line) { sceneFinish(); return; }
  scenePaint();
  const mine = SC.roleMode && line.who === SC.myChar;
  const speechText = line.speechText || line.text;
  const words = String(speechText || "").split(/\s+/).filter(Boolean).length;
  const fallbackMs = Math.max(1500, (900 + words * 430) / SC.rate);
  clearTimeout(SC.timer);
  if (mine) { /* ينتظر ضغط الطالب */ return; }
  let advanced = false;
  const adv = () => { if (advanced || !SC.playing) return; advanced = true; sceneNext(); };
  SC.timer = setTimeout(adv, fallbackMs + 1200);
  if (!speechText) return; // Blank-only printed line: keep the bubble and advance by fallback timing; do not invent spoken wording.
  try {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      const d = s.dialogueId && typeof dlgById === "function" ? dlgById(s.dialogueId) : null;
      const voice = d && typeof dlgVoiceFor === "function" ? dlgVoiceFor(d, line.who) : null;
      const pitch = d && typeof dlgPitchFor === "function" ? dlgPitchFor(d, line.who) : 1;
      const u = new SpeechSynthesisUtterance(speechText);
      if (voice) u.voice = voice;
      u.lang = (voice && voice.lang) || "en-GB";
      u.rate = SC.rate;
      u.pitch = pitch;
      u.volume = 1;
      u.onend = () => setTimeout(adv, 320 / SC.rate); u.onerror = () => {};
      speechSynthesis.speak(u);
    }
  } catch (e) {}
}
function sceneToggle() {
  if (SC.playing) { SC.playing = false; clearTimeout(SC.timer); try { speechSynthesis.cancel(); } catch (e) {} const b = document.getElementById("scPlayBtn"); if (b) b.textContent = "▶ استئناف المشهد"; return; }
  SC.playing = true; const b = document.getElementById("scPlayBtn"); if (b) b.textContent = "⏸ إيقاف مؤقت";
  if (SC.idx >= SC.scene.lines.length) SC.idx = 0;
  sceneSpeakCurrent();
}
function sceneNext(manual) {
  if (!SC.scene) return;
  if (SC.idx + 1 >= SC.scene.lines.length) { SC.idx = SC.scene.lines.length - 1; sceneFinish(); return; }
  SC.idx++;
  if (SC.playing || manual) { if (!SC.playing) scenePaint(); else sceneSpeakCurrent(); }
}
function scenePrev() { if (SC.idx > 0) SC.idx--; clearTimeout(SC.timer); try { speechSynthesis.cancel(); } catch (e) {} SC.playing = false; scenePaint(); }
function sceneRestart() { SC.idx = 0; SC.counted = false; const e = document.getElementById("sceneEnd"); if (e) e.innerHTML = ""; SC.playing = true; sceneSpeakCurrent(); }
function sceneRoleMode() { const sel = document.getElementById("scRoleSel"); if (sel) SC.myChar = sel.value; SC.roleMode = true; SC.idx = 0; SC.playing = true; sceneSpeakCurrent(); toast("🎤 وضع الأدوار: أسطر " + SC.myChar + " ستسكت لتقولها بصوتك"); }
function sceneStop() { SC.playing = false; clearTimeout(SC.timer); try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {} }
function sceneFinish() {
  SC.playing = false; clearTimeout(SC.timer);
  const b = document.getElementById("scPlayBtn"); if (b) b.textContent = "↺ مشاهدة من جديد";
  const s = SC.scene;
  if (!SC.counted && typeof recordAttempt === "function") { recordAttempt({ id: "scene-" + s.id, title: "مشهد: " + s.title, skill: s.skill }, 1, 1); SC.counted = true; }
  const el = document.getElementById("sceneEnd"); if (!el) return;
  el.innerHTML = `<div class="why-box" style="margin-top:14px"><b>🏁 انتهى المشهد.</b> أعد مشاهدته، أو جرّب «التدرب على الأدوار»، ثم أجب:
  ${s.dialogueId ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="sceneStop();openBookDialogueCompanion('${s.dialogueId}')">🎭 أكمل الحوار في رفيق اللغة</button><button class="btn btn-ghost btn-sm" onclick="sceneStop();if(typeof startQuiz==='function')startQuiz('dlgquiz-${s.dialogueId}')">✍️ اختبار الحوار</button><button class="btn btn-ghost btn-sm" onclick="if(typeof dlgDownloadHomework==='function')dlgDownloadHomework('${s.dialogueId}')">📚 واجب المهارات الأربع</button></div>` : ""}
  <div style="margin-top:10px">${(s.questions || []).map((q, qi) => `<div class="act-q" style="margin-bottom:10px"><p class="q-text" style="font-size:15.5px">${esc(q.q)}</p>${q.options.map((o, oi) => `<button class="opt-btn" dir="${/[\u0600-\u06FF]/.test(o) ? "rtl" : "ltr"}" onclick="sceneAnswer(${qi},${oi},this)">${esc(o)}</button>`).join("")}<div id="scWhy${qi}"></div></div>`).join("")}</div></div>`;
}
function sceneAnswer(qi, oi, btn) {
  const q = SC.scene.questions[qi], ok = oi === q.a;
  btn.closest(".act-q").querySelectorAll(".opt-btn").forEach((b, bi) => { b.disabled = true; if (bi === q.a) b.classList.add("correct"); else if (b === btn) b.classList.add("wrong"); });
  document.getElementById("scWhy" + qi).innerHTML = `<div class="why-box">${ok ? "✅" : "💡"} ${esc(q.why)}</div>`;
  if (ok && typeof recordAttempt === "function") recordAttempt({ id: "sceneq-" + SC.scene.id + "-" + qi, title: "أسئلة مشهد: " + SC.scene.title, skill: "listening" }, 1, 1);
}
function stepSceneHTML(step) {
  const mine = SCENES.filter(s => s.stepRef === step.ref);
  if (!mine.length) return "";
  return `<div class="panel" style="margin-bottom:16px"><h3>🎬 مشهد تعليمي متحرك لهذه الخطوة</h3>
  ${mine.map(s => `<div class="continue-card" onclick="openScene('${s.id}')"><span class="c-ic" style="background:#efe7fd">🎬</span><div style="flex:1"><strong>${esc(s.title)}</strong><small>${esc(s.sourceRef)}</small></div><span class="btn btn-primary btn-sm">شاهد واستمع ←</span></div>`).join("")}
  <p class="print-note">المشهد رسم ويب حي يمثل سياق حوار الكتاب المنسوخ بصرياً؛ يصاحبه صوت مولّد من جهاز الطالب سطرًا بسطر بسرعات 0.6/0.8/1.0 مع فقاعات قابلة للإخفاء وأوضاع مشاهدة/صوت فقط/تدرب على الأدوار. لا يحتوي المشهد تسجيل Drive ولا يدّعي مزامنة معه؛ يبقى فهرس Drive مستقلاً وغير مؤكد التعيين.</p></div>`;
}
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { scenes: vScenes });
