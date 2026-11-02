/* ===== مدرستي اليمن — رفيق اللغة (شات بوت تعليمي تجريبي) =====
   حوارات مبنية فقط على لغة موثّقة من ملخصات دليل Crescent 2 (TB).
   التصحيح قاعدي محلي (مطابقة أنماط) — لا يوجد محرك ذكاء اصطناعي مربوط.
   الصوت: نطق المتصفح للنموذج، وتسجيل الطالب يبقى في ذاكرة الصفحة فقط ولا يُرفع ولا يُحفظ. */
const BOT_SCENARIOS = [
  { id: "rp-pb3-bill", title: "أدِّ دور Bill — حوار PB3 الأصلي", src: "PB ص3 تمرين 1.6 — نص منسوخ بصرياً؛ TB: CS3 هو محادثة PB3. ملف Drive 03.mp3 مرشح غير مؤكد ولم يُستخدم كمصدر تصحيح", nodes: [
    { bot: "What's your name?", accept: ["b-i-l-l", "Bill"], model: "Bill. B-i-l-l.", hint: "أنت Bill؛ اذكر الاسم ثم تهجئته كما في الكتاب.", chips: ["Bill. B-i-l-l."] },
    { bot: "How old are you?", accept: ["thirteen", "13"], model: "Thirteen.", hint: "إجابة Bill في الحوار رقم واحد.", chips: ["Thirteen."] },
    { bot: "Where are you from?", accept: ["England"], model: "I'm from England.", hint: "I'm from + England", chips: ["I'm from England."] },
    { bot: "How many brothers have you got?", accept: ["one", "1"], model: "One.", hint: "عدد الإخوة الذكور عند Bill: one.", chips: ["One."] },
    { bot: "How many sisters have you got?", accept: ["two", "2"], model: "Two.", hint: "عدد الأخوات عند Bill: two.", chips: ["Two."] },
    { bot: "What do you do after school?", accept: ["watch tv", "swimming", "Tuesday"], model: "I watch TV and I go swimming every Tuesday.", hint: "نشاطان: watch TV + go swimming every Tuesday.", chips: ["I watch TV and I go swimming every Tuesday."] },
    { bot: "Do you play football?", accept: ["no, i don't", "no i don't", "no, i dont"], model: "No, I don't.", hint: "No, I don't.", chips: ["No, I don't."] }
  ] },
  { id: "rp-personal", title: "التعرّف على طالب جديد", src: "Unit 1 خطوات 6/7 و12 — TB ص25–26", nodes: [
    { bot: "Hello! What's your name?", accept: ["my name is"], model: "My name is (اسمك).", hint: "ابدأ بـ: My name is …", chips: ["My name is Ahmed.", "My name is Fatma."] },
    { bot: "How old are you?", accept: ["i'm", "i am", "13", "12", "14", "thirteen"], model: "I'm thirteen.", hint: "قل عمرك: I'm …", chips: ["I'm thirteen.", "I'm twelve."] },
    { bot: "Where are you from?", accept: ["from"], model: "I'm from Yemen.", hint: "استخدم: I'm from …", chips: ["I'm from Yemen.", "I'm from Taiz."] },
    { bot: "Where do you live?", accept: ["live"], model: "I live in Sana'a.", hint: "I live in + مكان", chips: ["I live in Sana'a.", "I live in Aden."] },
    { bot: "What do you do after school? Do you watch TV?", accept: ["yes, i do", "no, i don't", "watch", "read"], model: "Yes, I do. I watch TV after school.", hint: "أجب بـ Yes, I do أو No, I don't ثم أضف نشاطاً.", chips: ["Yes, I do.", "No, I don't. I read."] }
  ] },
  { id: "rp-food", title: "طلب الطعام والمشروب مع صديق", src: "Unit 1 خطوة 3/4 + Unit 2 خطوة 6 — TB ص25، 48", nodes: [
    { bot: "Look! What are these?", accept: ["apple", "orange"], model: "Apples.", hint: "سمِّ ثمرة وردت في الدرس: apples / oranges", chips: ["Apples.", "Oranges."] },
    { bot: "Do you like oranges?", accept: ["yes, i do", "no, i don't"], model: "Yes, I do.", hint: "Yes, I do. / No, I don't.", chips: ["Yes, I do.", "No, I don't."] },
    { bot: "What would you like to drink?", accept: ["i'd like"], model: "I'd like a Pepsi, please.", hint: "I'd like a …, please.", chips: ["I'd like a Pepsi, please.", "I'd like water, please."] }
  ] },
  { id: "rp-routine", title: "الوقت والروتين والمدرسة", src: "Unit 1 خطوة 5 + Unit 2 خطوة 2 — TB ص25، 48", nodes: [
    { bot: "What's the time?", accept: ["o'clock"], model: "It's six o'clock.", hint: "It's … o'clock", chips: ["It's six o'clock.", "It's seven o'clock."] },
    { bot: "What do you do at six o'clock?", accept: ["get up"], model: "I get up.", hint: "تذكّر Bill في الدرس: He gets up — وقل عن نفسك: I get up.", chips: ["I get up.", "I get up at six o'clock."] },
    { bot: "How do you come to school?", accept: ["by bus", "by car", "walk"], model: "I come by bus.", hint: "I come by bus / by car — أو I walk.", chips: ["I come by bus.", "I come by car.", "I walk."] }
  ] }
];
const BOT_PHRASES = [
  { text: "Hello. My name is Ali.", src: "U1 خطوة 1/2" },
  { text: "What's this? — A chair.", src: "U1 خطوة 1/2" },
  { text: "Do you like oranges? — Yes, I do.", src: "U1 خطوة 3/4" },
  { text: "What's the time? — It's six o'clock.", src: "U1 خطوة 5" },
  { text: "Where are you from?", src: "U1 خطوة 6/7" },
  { text: "There is a sofa in the room.", src: "U1 خطوة 10/11" },
  { text: "What did you do yesterday?", src: "U2 خطوة 1" },
  { text: "Stop. Look left. Look right.", src: "U2 خطوات 3–5" }
];
const BOTUI = { mode: "role", rate: 1, seq: 0, timer: null, rp: { scen: 0, node: 0, hist: [], score: 0, finished: false },
  book: { unit: "all", dialogueId: (typeof BOOK_DIALOGUES !== "undefined" && BOOK_DIALOGUES[0]) ? BOOK_DIALOGUES[0].id : "", role: "", idx: 0, started: false, finished: false, awaiting: false, playing: false, currentSpoken: -1, hist: [], typedScore: 0, typedTotal: 0, oralTurns: 0, showLine: true, recorded: false },
  peer: { a: "طالب أ", b: "طالب ب", deck: 0, qi: 0, turn: 0, log: [], started: false },
  pron: { idx: 0, url: null, recording: false, checks: {} }, storyQ: {} };
const PEER_DECKS = [
  { title: "البيانات الشخصية", src: "U1 خطوات 6/7 و12", qs: [["What's your name?", "My name is …"], ["How old are you?", "I'm …"], ["Where do you live?", "I live in …"], ["How many brothers and sisters have you got?", "I've got …"]] },
  { title: "الإعجاب والأطعمة", src: "U1 خطوة 3/4", qs: [["Do you like oranges?", "Yes, I do. / No, I don't."], ["What are these?", "Apples. / Oranges."], ["Do you like apples?", "Yes, I do. / No, I don't."]] },
  { title: "الوقت والروتين", src: "U1 خطوة 5 + U2 خطوة 2", qs: [["What's the time?", "It's … o'clock."], ["What do you do at six o'clock?", "I get up."], ["How do you come to school?", "I come by bus."]] }
];
function speakEncodedText(text) { return encodeURIComponent(String(text ?? "")).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"); }
function botStopSpeech() {
  BOTUI.seq++;
  if (BOTUI.timer) clearTimeout(BOTUI.timer);
  BOTUI.timer = null;
  if (BOTUI.book) BOTUI.book.playing = false;
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
}
function botSpeak(text, opts = {}) {
  const clean = String(text || "").replace(/[—]/g, ". ").trim();
  if (!clean) { if (opts.onend) BOTUI.timer = setTimeout(opts.onend, 250 / BOTUI.rate); return false; }
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    if (typeof toast === "function") toast("⚠️ النطق المولّد غير مدعوم على هذا الجهاز — يبقى النص والكتابة متاحين");
    if (opts.onend) BOTUI.timer = setTimeout(opts.onend, Math.max(700, clean.split(/\s+/).length * 320) / BOTUI.rate);
    return false;
  }
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(clean);
    if (opts.voice) u.voice = opts.voice;
    u.lang = (opts.voice && opts.voice.lang) || "en-GB";
    u.rate = BOTUI.rate;
    u.pitch = Number.isFinite(opts.pitch) ? opts.pitch : 1;
    u.volume = 1;
    let done = false;
    const finish = () => { if (!done && opts.onend) { done = true; opts.onend(); } };
    u.onend = finish;
    u.onerror = finish;
    speechSynthesis.speak(u);
    return true;
  } catch (e) {
    if (opts.onend) BOTUI.timer = setTimeout(opts.onend, 500 / BOTUI.rate);
    return false;
  }
}
function botSpeakEncoded(encoded) {
  try { botStopSpeech(); botSpeak(decodeURIComponent(encoded)); }
  catch (e) { if (typeof toast === "function") toast("⚠️ تعذّر فك نص النطق الآلي"); }
}
function botSpeedHTML() {
  return `<div class="why-box" style="margin-bottom:14px"><b>🔊 سرعة الصوت المولّد في رفيق اللغة:</b>
    <span style="display:inline-flex;gap:7px;flex-wrap:wrap;margin-inline-start:8px">${[0.6, 0.8, 1].map(r => `<button type="button" class="chip-filter ${BOTUI.rate === r ? "active" : ""}" data-bot-rate="${r}" onclick="botSetRate(${r})">${r.toFixed(1)}×</button>`).join("")}</span>
    <small style="display:block;margin-top:6px">تُطبق على تبادل الأدوار وحوارات الكتاب وحوار الطالبين وتدريب النطق. الصوت من جهاز الطالب عند الضغط، وليس تسجيل الكتاب أو Drive.</small></div>`;
}
function botSetRate(rate) {
  const next = [0.6, 0.8, 1].includes(Number(rate)) ? Number(rate) : 1;
  const b = BOTUI.book;
  const replayBookLine = BOTUI.mode === "book" && b && b.started && b.playing && !b.awaiting;
  BOTUI.rate = next;
  document.querySelectorAll("[data-bot-rate]").forEach(btn => btn.classList.toggle("active", Number(btn.getAttribute("data-bot-rate")) === BOTUI.rate));
  if (replayBookLine) {
    botStopSpeech();
    BOTUI.timer = setTimeout(() => botBookAdvance(), 60);
  } else if (typeof toast === "function") toast(`🔊 سرعة رفيق اللغة الآن ${BOTUI.rate.toFixed(1)}×`);
}
function botDialogues() { return typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES; }
function botBookDialogue(id) { const all = botDialogues(); return all.find(d => d.id === id) || all[0] || null; }
function botBookRoles(d) {
  if (!d) return [];
  const roles = [...new Set(d.lines.filter(l => !["narration", "sign", "prompt"].includes(l.kind) && !/^(Narrator|Sign)$/i.test(l.speaker)).map(l => l.speaker))];
  return roles.length ? roles : [...new Set(d.lines.map(l => l.speaker))];
}
function botBookDisplayText(line) { return line ? (line.completedText || line.text || "") : ""; }
function botBookSpeechText(line) {
  if (!line) return "";
  if (typeof dlgTrainingSpeechText === "function") return dlgTrainingSpeechText(line);
  return line.completedText || line.speechText || String(line.text || "").replace(/_+/g, "").trim();
}
function botSpeakDialogueLine(d, line, onend) {
  const seq = BOTUI.seq;
  const voice = (typeof dlgVoiceFor === "function") ? dlgVoiceFor(d, line.speaker) : null;
  const pitch = (typeof dlgPitchFor === "function") ? dlgPitchFor(d, line.speaker) : 1;
  return botSpeak(botBookSpeechText(line), { voice, pitch, onend: () => { if (seq === BOTUI.seq && onend) onend(); } });
}
function botTabs() {
  const tabs = [["role", "🎭", "تبادل الأدوار"], ["book", "📕", "حوارات كتاب الطالب"], ["peer", "👥", "حوار طالبين"], ["story", "📖", "القصة التفاعلية"], ["pron", "🎙️", "تدريب النطق"]];
  return `<div class="bot-modes">${tabs.map(([m, ic, t]) => `<button class="bot-mode ${BOTUI.mode === m ? "active" : ""}" onclick="botStopSpeech();BOTUI.mode='${m}';navigate('chatbot')"><span>${ic}</span>${t}</button>`).join("")}</div>`;
}
function vChatbot() {
  return `<div class="page-head"><h2>🤖 رفيق اللغة — مساعدك للتدرب على إنجليزية الصف الثامن</h2>
  <p>نموذج تدريبي تجريبي: يضم مواقف من لغة TB، و37 حواراً منسوخاً بصرياً من جزأي Pupil's Book لتبادل الأدوار بالنص نفسه. التصحيح فوري لكنه قاعدي محلي عند الكتابة (لا يوجد محرك ذكاء اصطناعي أو درجة نطق آلية). صوتك لا يغادر جهازك ولا يُحفظ.</p></div>
  <div class="why-box"><b>مسار الدرس المقترح (نموذج Unit 1):</b> شاهد مشهد حوار PB3 بنطق الجهاز، ثم افتح فهرس Drive إن أراد المعلم مقارنة التسجيل المرشح 03.mp3 (حالته <b dir="ltr">Mapping Unconfirmed</b> حتى السماع والاعتماد)، ثم اختر دور Bill من «تبادل الأدوار» أو تدرّب الثنائي على جهاز واحد. لا توجد محادثة صوتية حقيقية مع طالب بعيد، ولا تقييم نطق آلي.
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:9px"><button class="btn btn-primary btn-sm" onclick="openScene('bill-talk')">🎬 مشهد PB3 المتحرك</button><button class="btn btn-ghost btn-sm" onclick="auLoad('gd-03')">🎧 التسجيل المرشح في Drive</button><button class="btn btn-ghost btn-sm" onclick="BOTUI.mode='role';botResetRp(0)">🎭 ابدأ دور Bill</button><button class="btn btn-ghost btn-sm" onclick="openBookDialogueCompanion('dlg-u1-bill')">📕 كل حوارات الكتاب (37)</button></div></div>
  ${botTabs()}
  ${botSpeedHTML()}
  <div class="panel">${BOTUI.mode === "role" ? botRoleHTML() : BOTUI.mode === "book" ? `<div id="botBookMount">${botBookHTML()}</div>` : BOTUI.mode === "peer" ? botPeerHTML() : BOTUI.mode === "story" ? botStoryHTML() : botPronHTML()}</div>`;
}
/* --- 1) تبادل الأدوار --- */
function botResetRp(i) { BOTUI.rp = { scen: i, node: 0, hist: [], score: 0, finished: false }; navigate("chatbot"); }
function botRoleHTML() {
  const sc = BOT_SCENARIOS[BOTUI.rp.scen], rp = BOTUI.rp, node = sc.nodes[rp.node];
  return `<h3>🎭 تبادل الأدوار مع الرفيق</h3>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">${BOT_SCENARIOS.map((s, i) => `<button class="chip-filter ${i === rp.scen ? "active" : ""}" onclick="botResetRp(${i})">${esc(s.title)}</button>`).join("")}</div>
  <p class="print-note">🔎 مصدر مواقف الحوار ولغتها: ${esc(sc.src)}. اكتب إجابتك بالإنجليزية أو اختر من الاقتراحات، واستخدم 💡 للتلميح.</p>
  <div class="chat-body" style="max-height:340px">
    ${rp.hist.map(h => `<div class="bubble them" dir="ltr" style="text-align:left">${esc(h.bot)}</div><div class="bubble me" dir="ltr" style="text-align:left">${esc(h.me)}</div><div class="why-box" style="font-size:13.5px;margin:2px 0">${h.ok ? "✅ أحسنت!" : "💡 قريب! الصياغة الأصح:"} ${h.ok ? "" : `<b dir="ltr">${esc(h.model)}</b>`}</div>`).join("")}
    ${node ? `<div class="bubble them" dir="ltr" style="text-align:left">🤖 ${esc(node.bot)} <button class="icon-btn" style="width:30px;height:30px;font-size:12px" onclick="botSpeakEncoded('${speakEncodedText(node.bot)}')">🔊</button></div>` : `<div class="why-box">🏁 انتهى الموقف! أجبت بصياغة صحيحة في ${arNum(rp.score)} من ${arNum(sc.nodes.length)} أدوار. ${rp.score === sc.nodes.length ? "رائع — جرّب موقفاً آخر أو أدِّ الحوار صوتياً مع زميل." : "أعد الموقف وركّز على النماذج المصححة بالأعلى."}</div>`}
  </div>
  ${node ? `<div class="bot-chips" dir="ltr">${node.chips.map(c => `<button class="chip-filter" onclick="document.getElementById('rpInput').value=${JSON.stringify(c)}">${esc(c)}</button>`).join("")}
    <button class="chip-filter" onclick="document.getElementById('rpHint').classList.toggle('hidden')">💡 تلميح</button></div>
    <div class="why-box hidden" id="rpHint">${esc(node.hint)}</div>
    <form class="chat-input" dir="ltr" onsubmit="botRpSubmit(event)"><input id="rpInput" placeholder="Type your answer in English…" autocomplete="off" dir="ltr" style="text-align:left"><button class="btn btn-primary" type="submit">Send ➤</button></form>`
  : `<div style="display:flex;gap:9px;flex-wrap:wrap"><button class="btn btn-primary" onclick="botResetRp(${rp.scen})">↺ إعادة الموقف</button><button class="btn btn-ghost" onclick="BOTUI.mode='peer';navigate('chatbot')">👥 جرّبه مع زميل على نفس الجهاز</button></div>`}`;
}
function botRpSubmit(e) {
  e.preventDefault();
  const v = document.getElementById("rpInput").value.trim(); if (!v) return;
  const sc = BOT_SCENARIOS[BOTUI.rp.scen], node = sc.nodes[BOTUI.rp.node];
  const low = v.toLowerCase().replace(/\s+/g, " ");
  const ok = node.accept.some(a => low.includes(a));
  BOTUI.rp.hist.push({ bot: node.bot, me: v, ok, model: node.model });
  if (ok) BOTUI.rp.score++;
  BOTUI.rp.node++;
  if (BOTUI.rp.node >= sc.nodes.length) {
    BOTUI.rp.finished = true;
    if (typeof recordAttempt === "function") recordAttempt({ id: "chat-" + sc.id, title: "رفيق اللغة: " + sc.title, skill: "speaking" }, BOTUI.rp.score, sc.nodes.length);
  }
  navigate("chatbot");
}
/* --- 1ب) تبادل أدوار على حوارات كتاب الطالب المنسوخة بصرياً --- */
function botBookEnsureSelection() {
  const b = BOTUI.book, all = botDialogues();
  if (!all.length) return null;
  const list = b.unit === "all" ? all : all.filter(d => d.unit === Number(b.unit));
  let d = list.find(x => x.id === b.dialogueId) || list[0] || all[0];
  b.dialogueId = d.id;
  const roles = botBookRoles(d);
  if (!roles.includes(b.role)) b.role = roles[0] || "";
  return d;
}
function botBookReset() {
  botStopSpeech();
  Object.assign(BOTUI.book, { idx: 0, started: false, finished: false, awaiting: false, playing: false, currentSpoken: -1, hist: [], typedScore: 0, typedTotal: 0, oralTurns: 0, recorded: false });
}
function botBookSetUnit(unit) {
  BOTUI.book.unit = String(unit);
  const list = unit === "all" ? botDialogues() : botDialogues().filter(d => d.unit === Number(unit));
  if (list[0]) BOTUI.book.dialogueId = list[0].id;
  BOTUI.book.role = "";
  botBookEnsureSelection(); botBookReset(); navigate("chatbot");
}
function botBookSetDialogue(id) { BOTUI.book.dialogueId = id; BOTUI.book.role = ""; botBookEnsureSelection(); botBookReset(); navigate("chatbot"); }
function botBookSetRole(role) { BOTUI.book.role = role; botBookReset(); navigate("chatbot"); }
function openBookDialogueCompanion(id) {
  const d = botBookDialogue(id); if (!d) return;
  BOTUI.mode = "book";
  BOTUI.book.unit = String(d.unit);
  BOTUI.book.dialogueId = d.id;
  if (!botBookRoles(d).includes(BOTUI.book.role)) BOTUI.book.role = botBookRoles(d)[0] || "";
  botBookReset();
  if (typeof navigate === "function") navigate("chatbot");
}
function botBookRender() {
  const mount = document.getElementById("botBookMount");
  if (!mount) { if (typeof navigate === "function") navigate("chatbot"); return; }
  mount.innerHTML = botBookHTML();
  const input = document.getElementById("botBookInput");
  if (input) setTimeout(() => { try { input.focus(); } catch (e) {} }, 30);
  const body = document.getElementById("botBookChat");
  if (body) body.scrollTop = body.scrollHeight;
}
function botBookHTML() {
  const all = botDialogues(), b = BOTUI.book, d = botBookEnsureSelection();
  if (!d) return `<div class="empty-state"><div class="e-ic">📕</div><strong>بيانات حوارات الكتاب غير محمّلة</strong><p>لم تُحمّل بيانات مختبر الحوارات في هذه الجلسة؛ بقية أوضاع رفيق اللغة تعمل بصورة مستقلة.</p></div>`;
  const list = b.unit === "all" ? all : all.filter(x => x.unit === Number(b.unit));
  const roles = botBookRoles(d);
  const line = d.lines[Math.min(b.idx, d.lines.length - 1)] || d.lines[0];
  const hasCompletions = d.lines.some(l => l.completedText);
  const roleTotal = d.lines.filter(l => l.speaker === b.role && !["narration", "sign", "prompt"].includes(l.kind)).length;
  return `<h3>📕 تبادل الأدوار على حوارات Pupil's Book</h3>
  <p class="print-note">37 حواراً من جزأي كتاب الطالب. اختر الوحدة والحوار ودورك؛ ينطق الرفيق بقية الأدوار والراوي من الجهاز، ويتوقف عند أسطرك لتقولها صوتياً أو تكتبها لمطابقة نصية فورية. حالة نصوص الحوار: <b>منسوخة بصرياً وبانتظار مراجعة بشرية ثانية — ليست Verified</b>.</p>
  <div class="form-grid" style="margin-bottom:12px">
    <label class="f-label">الوحدة<select class="f-input" onchange="botBookSetUnit(this.value)"><option value="all" ${b.unit === "all" ? "selected" : ""}>كل الوحدات 1–7</option>${[1, 2, 3, 4, 5, 6, 7].map(u => `<option value="${u}" ${String(b.unit) === String(u) ? "selected" : ""}>Unit ${u} (${all.filter(x => x.unit === u).length} حوارات)</option>`).join("")}</select></label>
    <label class="f-label">الحوار من الكتاب<select class="f-input" dir="ltr" style="text-align:left" onchange="botBookSetDialogue(this.value)">${list.map(x => `<option value="${esc(x.id)}" ${x.id === d.id ? "selected" : ""}>U${x.unit} · ${esc(x.exercise)} · ${esc(x.title)} (${x.lines.length} lines)</option>`).join("")}</select></label>
    <label class="f-label">دوري<select class="f-input" dir="ltr" style="text-align:left" onchange="botBookSetRole(this.value)">${roles.map(r => `<option value="${esc(r)}" ${r === b.role ? "selected" : ""}>${esc(r)}</option>`).join("")}</select></label>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
    <button class="btn btn-primary" onclick="botBookStart()">${b.started ? "↺ إعادة تبادل الأدوار من البداية" : "▶ ابدأ تبادل الأدوار"}</button>
    <button class="btn btn-ghost" onclick="botStopSpeech();botBookRender()">⏹ إيقاف الصوت</button>
    <button class="btn btn-ghost" onclick="botStopSpeech();openDialogueLab('${d.id}','listen')">🎙️ مختبر الحوار</button>
    <button class="btn btn-ghost" onclick="botStopSpeech();if(typeof openScene==='function')openScene('scene-${d.id}')">🎬 المشهد المتحرك</button>
    <button class="btn btn-ghost" onclick="botStopSpeech();if(typeof startQuiz==='function')startQuiz('dlgquiz-${d.id}')">✍️ اختبار الحوار</button>
    <button class="btn btn-ghost" onclick="if(typeof dlgDownloadHomework==='function')dlgDownloadHomework('${d.id}')">📚 واجب المهارات</button>
  </div>
  <div class="why-box" style="font-size:13.5px"><b dir="ltr">${esc(d.title)}</b> · <span dir="ltr">Unit ${d.unit} · ${esc(d.printedPages)} · Exercise ${esc(d.exercise)} · ${esc(d.pdfPages)}</span><br>${esc(d.settingAr)}<br><small>${esc(d.sourceNote)} الصوت مولّد من الجهاز بسرعة ${BOTUI.rate.toFixed(1)}× حالياً، وليس تسجيل PB أو Drive. ${hasCompletions ? "توجد فراغات كتابية تُعرض إكمالاتها التدريبية موسومة صراحة عند ظهورها، لا كنص مطبوع داخل الفراغ." : ""}</small></div>
  <div class="scene-progress" aria-label="progress">${d.lines.map((_, i) => `<span class="dotp ${i < b.idx || b.finished ? "on" : ""}"></span>`).join("")}</div>
  <p class="print-note">التقدم: السطر ${arNum(Math.min(b.idx + (b.started && !b.finished ? 1 : 0), d.lines.length))} من ${arNum(d.lines.length)} · دورك: <b dir="ltr">${esc(b.role)}</b> (${arNum(roleTotal)} أسطر متحدث) · مطابقة كتابية: ${arNum(b.typedScore)}/${arNum(b.typedTotal)} · أدوار صوتية ذاتية: ${arNum(b.oralTurns)}</p>
  <div class="chat-body" id="botBookChat" style="max-height:390px">
    ${b.hist.length ? b.hist.map(h => h.mine
      ? `<div class="bubble me" dir="ltr" style="text-align:left"><b>${esc(h.speaker)} (أنت):</b> ${esc(h.text)}</div>${h.feedback ? `<div class="why-box" style="font-size:13.5px;margin:2px 0">${h.feedback}</div>` : ""}`
      : `<div class="bubble them" dir="ltr" style="text-align:left"><b>${esc(h.speaker)}:</b> ${esc(h.text)}${h.completion ? `<br><small dir="rtl">✏️ إكمال تدريبي موسوم لفراغ/سطر مفتوح، لا نص مطبوع داخل الفراغ.</small>` : ""}</div>`).join("") : `<div class="empty-hint">اختر دورك ثم «ابدأ» — لن يبدأ الصوت تلقائياً.</div>`}
  </div>
  ${!b.started ? `<div class="why-box">عند البدء سينطق الرفيق أسطر الشخصيات الأخرى وأسطر الراوي/اللافتة، ثم يتوقف عند كل سطر لدور <b dir="ltr">${esc(b.role)}</b>.</div>`
    : b.finished ? `<div class="why-box">🏁 أكملت تبادل أدوار الحوار كاملاً. المطابقة الكتابية: ${arNum(b.typedScore)} من ${arNum(b.typedTotal)} محاولة مكتوبة، والأدوار الصوتية الذاتية: ${arNum(b.oralTurns)}. لا توجد درجة نطق آلية؛ جرّب دوراً آخر أو سرعة مختلفة.</div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" onclick="botBookStart()">↺ أعد بالدور نفسه</button><button class="btn btn-ghost" onclick="botStopSpeech();if(typeof openScene==='function')openScene('scene-${d.id}')">🎬 شاهد المشهد المتحرك</button></div>`
    : b.awaiting ? `<div class="why-box" style="margin-bottom:10px"><b>🎤 دورك يا <span dir="ltr">${esc(b.role)}</span> — السطر ${arNum(b.idx + 1)}</b><br>
      ${b.showLine ? `<span dir="ltr" style="text-align:left;display:block;font-size:16.5px;margin-top:7px"><b>${esc(line.speaker)}:</b> ${esc(botBookDisplayText(line))}</span>${line.completedText ? `<small>✏️ هذا إكمال تدريبي موسوم للفراغ/السطر المفتوح؛ النص المطبوع الأصلي في مختبر الحوارات.</small>` : ""}` : `<span>النص مخفي — استمع للنموذج أو تذكّر السطر ثم قله/اكتبه.</span>`}</div>
      <form class="chat-input" dir="ltr" onsubmit="botBookSubmit(event)"><input id="botBookInput" placeholder="Say or type your exact book line…" autocomplete="off" style="text-align:left"><button class="btn btn-primary" type="submit">تحقق وأكمل ➤</button></form>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:9px">
        <button class="btn btn-ghost btn-sm" type="button" onclick="botBookHearOwnLine()">🔊 اسمع نموذج سطري (${BOTUI.rate.toFixed(1)}×)</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="BOTUI.book.showLine=!BOTUI.book.showLine;botBookRender()">${b.showLine ? "🙈 إخفاء سطر دوري" : "👁️ إظهار سطر دوري"}</button>
        <button class="btn btn-primary btn-sm" type="button" onclick="botBookOralSaid()">✅ قلتُها بصوتي — التالي</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="botBookOralSaid(true)">تخطي السطر</button>
      </div><small>الكتابة تُقارن نصياً بسطر الحوار (متسامحة مع الترقيم وحالة الأحرف). «قلتُها بصوتي» تحقق ذاتي ولا يُسجل كدرجة نطق.</small>`
    : `<div class="why-box">${b.playing ? `🔊 الرفيق ينطق الآن سطر <b dir="ltr">${esc(line.speaker)}</b> بسرعة ${BOTUI.rate.toFixed(1)}×…` : `⏸️ توقف عند سطر <b dir="ltr">${esc(line.speaker)}</b>.`} <button class="btn btn-ghost btn-sm" onclick="botBookAdvance()">${b.playing ? "إعادة السطر" : "▶ تشغيل هذا السطر"}</button></div>`}`;
}
function botBookStart() {
  const d = botBookEnsureSelection(); if (!d) return;
  const unit = BOTUI.book.unit, id = BOTUI.book.dialogueId, role = BOTUI.book.role, showLine = BOTUI.book.showLine;
  botBookReset();
  Object.assign(BOTUI.book, { unit, dialogueId: id, role, showLine, started: true });
  botBookAdvance();
}
function botBookAdvance() {
  const b = BOTUI.book, d = botBookEnsureSelection(); if (!d) return;
  b.started = true; b.finished = false; b.awaiting = false; b.playing = false;
  if (b.idx >= d.lines.length) { botBookFinish(d); botBookRender(); return; }
  const line = d.lines[b.idx];
  const isLearnerTurn = line.speaker === b.role && !["narration", "sign", "prompt"].includes(line.kind);
  if (isLearnerTurn) { b.awaiting = true; botBookRender(); return; }
  if (b.currentSpoken !== b.idx) {
    b.hist.push({ mine: false, speaker: line.speaker, text: botBookDisplayText(line), completion: !!line.completedText, index: b.idx });
    b.currentSpoken = b.idx;
  }
  b.playing = true;
  botBookRender();
  botSpeakDialogueLine(d, line, () => {
    b.playing = false;
    b.idx++;
    b.currentSpoken = -1;
    BOTUI.timer = setTimeout(() => botBookAdvance(), 220 / BOTUI.rate);
  });
}
function botNormalizeLine(text) {
  if (typeof dlgNormalizeAnswer === "function") return dlgNormalizeAnswer(text);
  return String(text || "").toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'\s]/g, " ").replace(/\s+/g, " ").trim();
}
function botBookCurrentLine() { const d = botBookEnsureSelection(); return d ? d.lines[BOTUI.book.idx] : null; }
function botBookSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("botBookInput"), v = input ? input.value.trim() : "";
  const b = BOTUI.book, line = botBookCurrentLine();
  if (!v || !line) return;
  const expected = botBookDisplayText(line);
  const ok = botNormalizeLine(v) === botNormalizeLine(expected);
  b.typedTotal++; if (ok) b.typedScore++;
  b.hist.push({ mine: true, speaker: b.role, text: v, expected, ok, oral: false, feedback: ok ? "✅ مطابقة لسطر الحوار. أكمل بالنبرة المناسبة للمعنى." : `💡 ليست مطابقة بعد. سطر الحوار: <b dir="ltr">${esc(expected)}</b>` });
  b.idx++; b.currentSpoken = -1; b.awaiting = false;
  botBookAdvance();
}
function botBookOralSaid(skipped = false) {
  const b = BOTUI.book, line = botBookCurrentLine(); if (!line) return;
  const expected = botBookDisplayText(line);
  if (!skipped) b.oralTurns++;
  b.hist.push({ mine: true, speaker: b.role, text: expected, expected, ok: null, oral: !skipped, feedback: skipped ? `⏭️ تخطيت السطر. نموذجه: <b dir="ltr">${esc(expected)}</b>` : "✅ سُجل كتحقق ذاتي صوتي — لم تُحسب درجة نطق آلية." });
  b.idx++; b.currentSpoken = -1; b.awaiting = false;
  botBookAdvance();
}
function botBookHearOwnLine() {
  const d = botBookEnsureSelection(), line = botBookCurrentLine(); if (!d || !line) return;
  botStopSpeech();
  setTimeout(() => botSpeakDialogueLine(d, line), 40);
}
function botBookFinish(d) {
  const b = BOTUI.book;
  b.finished = true; b.awaiting = false; b.playing = false;
  const roleTotal = d.lines.filter(l => l.speaker === b.role && !["narration", "sign", "prompt"].includes(l.kind)).length;
  const completed = b.hist.filter(h => h.mine).length;
  if (!b.recorded && roleTotal && typeof recordAttempt === "function") {
    recordAttempt({ id: `botbook-${d.id}-${b.role}`, title: `رفيق اللغة — تبادل أدوار حوار الكتاب: ${d.title} (${b.role})`, skill: "speaking" }, completed, roleTotal);
    b.recorded = true;
  }
}

/* --- 2) حوار طالبين (نفس الجهاز — نموذج تجريبي) --- */
function botPeerHTML() {
  const p = BOTUI.peer, deck = PEER_DECKS[p.deck], q = deck.qs[p.qi];
  if (!p.started) return `<h3>👥 غرفة حوار طالبين — على نفس الجهاز</h3>
    <div class="why-box"><b>تنبيه الصدق التقني:</b> هذا نموذج تجريبي للعمل الثنائي (TB ص10: Pair work) إذ يجلس طالبان أمام جهاز واحد ويتبادلان الأدوار. لا يوجد اتصال لحظي بطالب آخر عبر الإنترنت في هذه النسخة.</div>
    <div class="form-grid">
      <label class="f-label">اسم الطالب الأول<input class="f-input" id="peerA" value="سالم"></label>
      <label class="f-label">اسم الطالب الثاني<input class="f-input" id="peerB" value="وليد"></label>
      <label class="f-label full2">موضوع الحوار (من درس موثّق)<select class="f-input" id="peerDeck">${PEER_DECKS.map((d, i) => `<option value="${i}">${esc(d.title)} — ${esc(d.src)}</option>`).join("")}</select></label>
    </div>
    <button class="btn btn-primary" style="margin-top:12px" onclick="botPeerStart()">ابدأ الحوار الثنائي ←</button>`;
  const asker = p.turn % 2 === 0 ? p.a : p.b, answerer = p.turn % 2 === 0 ? p.b : p.a;
  return `<h3>👥 ${esc(deck.title)} <small class="tag">سؤال ${arNum(p.qi + 1)} من ${arNum(deck.qs.length)}</small></h3>
  <p class="print-note">المصدر: ${esc(deck.src)} — يقرأ السائل السؤال بصوت مرتفع، ويجيب زميله كتابة وصوتاً، ثم يتبادلان.</p>
  <div class="chat-body" style="max-height:280px">${p.log.map(l => `<div class="bubble ${l.who === p.a ? "me" : "them"}" dir="ltr" style="text-align:left"><b>${esc(l.who)}:</b> ${esc(l.text)}</div>`).join("") || '<div class="empty-hint">لم يبدأ التبادل بعد…</div>'}</div>
  ${q ? `<div class="why-box" dir="ltr" style="text-align:left"><b>${esc(asker)} asks:</b> ${esc(q[0])} <button class="icon-btn" style="width:30px;height:30px;font-size:12px" onclick="botSpeakEncoded('${speakEncodedText(q[0])}')">🔊</button><br><small dir="rtl">💡 بداية جاهزة للمجيب (${esc(answerer)}): <b dir="ltr">${esc(q[1])}</b></small></div>
  <form class="chat-input" dir="ltr" onsubmit="botPeerAnswer(event)"><input id="peerInput" placeholder="${esc(answerer)}: type your answer…" autocomplete="off" style="text-align:left"><button class="btn btn-primary" type="submit">أرسل وبدّل الدور 🔁</button></form>`
  : `<div class="quiz-result"><div class="result-emoji">🤝</div><p style="font-weight:800;color:var(--navy)">أنهيتما ${arNum(deck.qs.length)} أسئلة (${arNum(p.log.length)} رسالة)!</p><p style="color:var(--muted)">ملخص التعلم: راجعتُـما أسئلة «${esc(deck.title)}»، وتبادلتما دور السائل والمجيب. أعيدا الجولة بأدوار معكوسة دون النظر إلى التلميحات كتحدٍّ أصعب.</p><button class="btn btn-primary" onclick="BOTUI.peer.started=false;navigate('chatbot')">جولة جديدة</button></div>`}`;
}
function botPeerStart() {
  BOTUI.peer = { a: document.getElementById("peerA").value.trim() || "طالب أ", b: document.getElementById("peerB").value.trim() || "طالب ب", deck: +document.getElementById("peerDeck").value, qi: 0, turn: 0, log: [], started: true };
  navigate("chatbot");
}
function botPeerAnswer(e) {
  e.preventDefault(); const v = document.getElementById("peerInput").value.trim(); if (!v) return;
  const p = BOTUI.peer, deck = PEER_DECKS[p.deck], q = deck.qs[p.qi];
  const asker = p.turn % 2 === 0 ? p.a : p.b, answerer = p.turn % 2 === 0 ? p.b : p.a;
  p.log.push({ who: asker, text: q[0] }, { who: answerer, text: v });
  p.qi++; p.turn++; navigate("chatbot");
}
/* --- 3) القصة التفاعلية --- */
function botStoryHTML() {
  return `<h3>📖 القصة التفاعلية — يوم Bill (خطوة 5)</h3>
  <div class="why-box"><b>تمييز إلزامي:</b> حوارات وقصص PB الحوارية المنسوخة بصرياً (بانتظار مراجعة ثانية) متاحة الآن في وضع «حوارات كتاب الطالب» ومختبر الحوارات. أما النشاط القصير التالي فهو <b>نشاط من إعداد المعلم</b> يبني على جملة TB الموثّقة <span dir="ltr">"What does Bill do at six o'clock? — He gets up."</span> (TB ص25)، وليس نص قصة كاملاً من PB.</div>
  <div class="continue-card" onclick="playActivity('e8-u1-sequence')"><span class="c-ic" style="background:#fdebd8">🔢</span><div style="flex:1"><strong>أولاً: رتّب أحداث اليوم القصيرة</strong><small>نشاط ترتيب من إعداد المعلم — مع وسم مصدره داخل النشاط</small></div><span class="btn btn-primary btn-sm">ابدأ ←</span></div>
  <h4 style="margin:16px 0 8px">ثانياً: أسئلة فهم وتفكير أعلى (نقاش قبل الإجابة)</h4>
  ${[["ما أول شيء يفعله Bill في يومه؟", "He gets up (at six o'clock).", "He watches TV.", "He comes to school.", 0, "تبدأ القصة بـ gets up عند الساعة السادسة — نص الجملة من الدليل."],
     ["لماذا كلمة After school مهمة لفهم الترتيب؟", "لأنها تسمّي مكاناً.", "لأنها ظرف زمان يخبرنا أن الحدث وقع بعد المدرسة.", "لأنها اسم طالب.", 1, "كلمات التسلسل والزمان هي مفاتيح ترتيب الأحداث — وسيدرسها الطالب رسمياً كروابط في مواضع لاحقة بالمنهج."],
     ["إذا أردت أن تسأل Bill نفسه عن وقته، أي سؤال يناسب؟", "What does Bill do?", "What's the time?", "What are these?", 1, "What's the time? سؤال الوقت الموثّق في الخطوة 5."]]
    .map(([q, o1, o2, o3, a, why], i) => `<div class="act-q"><p class="q-text" style="font-size:15.5px">${esc(q)}</p>${[o1, o2, o3].map((o, oi) => `<button class="opt-btn" dir="${/[\u0600-\u06FF]/.test(o) ? "rtl" : "ltr"}" onclick="botStoryPick(${i},${oi},${a},this,${JSON.stringify(why)})">${esc(o)}</button>`).join("")}<div id="storyWhy${i}"></div></div>`).join("")}
  <p class="print-note">للقصص الحوارية من PB استخدم «حوارات كتاب الطالب» أعلاه أو المشاهد المتحركة؛ وتبقى أنشطة هذه البطاقة مشتقة وموسومة منفصلة.</p>`;
}
function botStoryPick(qi, oi, a, btn, why) {
  const ok = oi === a;
  btn.closest(".act-q").querySelectorAll(".opt-btn").forEach((b, bi) => { b.disabled = true; if (bi === a) b.classList.add("correct"); else if (b === btn) b.classList.add("wrong"); });
  document.getElementById("storyWhy" + qi).innerHTML = `<div class="why-box">${ok ? "✅" : "💡"} ${esc(why)}</div>`;
}
/* --- 4) تدريب النطق --- */
function botPronHTML() {
  const p = BOTUI.pron, ph = BOT_PHRASES[p.idx];
  return `<h3>🎙️ تدريب النطق — استمع وقلّد وقارن</h3>
  <div class="why-box"><b>بصراحة تقنية:</b> لا توجد خدمة تحليل نطق آلي مربوطة، لذا <b>لن ترى درجة نطق مخترعة</b>. المنهجية هنا كما في الدليل (Cassette كمساعد نطق — TB ص5): استمع إلى النموذج (بصوت جهازك؛ تسجيلات Drive مفهرسة لكنها غير مرتبطة بهذه العبارات حتى يتحقق المعلم من المطابقة بعد السماع)، سجّل صوتك محلياً، قارن بالاستماع، وقيّم نفسك بقائمة تحقق صادقة. <b>التسجيل لا يُحفظ ولا يُرفع ويختفي بإغلاق الصفحة.</b></div>
  <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px">${BOT_PHRASES.map((x, i) => `<button class="chip-filter ${i === p.idx ? "active" : ""}" dir="ltr" onclick="BOTUI.pron.idx=${i};BOTUI.pron.checks={};botPronDiscard(true);navigate('chatbot')">${esc(x.text.split("—")[0].trim())}</button>`).join("")}</div>
  <div class="pron-phrase" dir="ltr">${esc(ph.text)}</div>
  <p class="print-note">المصدر: ${esc(ph.src)} — دليل TB ص25/48</p>
  <div style="display:flex;gap:9px;flex-wrap:wrap;margin:12px 0">
    <button class="btn btn-primary" onclick="botSpeakEncoded('${speakEncodedText(ph.text)}')">🔊 استمع إلى النموذج</button>
    <button class="btn ${p.recording ? "btn-white" : "btn-ghost"}" id="recBtn" onclick="botPronRecord()">${p.recording ? "⏹ إيقاف التسجيل…" : "⏺ سجّل صوتك (محلياً فقط)"}</button>
    ${p.url ? `<audio controls src="${p.url}" style="height:42px"></audio><button class="btn btn-danger-ghost btn-sm" onclick="botPronDiscard();navigate('chatbot')">🗑️ حذف التسجيل الآن</button>` : ""}
  </div>
  <div id="pronErr"></div>
  <h4 style="margin:10px 0 8px">☑️ قائمة تحقق ذاتي بعد المقارنة</h4>
  ${["قلتُ كل الكلمات بوضوح دون حذف كلمة", "نطقتُ نهاية الكلمات/الجملة بوضوح", "استخدمت نبرة السؤال الصاعدة عند علامة الاستفهام (إن وجدت)", "توقفتُ قليلاً بين الجملتين عند علامة (—)"]
    .map((c, i) => `<label class="check-row"><input type="checkbox" ${p.checks[i] ? "checked" : ""} onchange="BOTUI.pron.checks[${i}]=this.checked;botPronFeedback()"> ${c}</label>`).join("")}
  <div id="pronFb">${botPronFeedbackHTML()}</div>`;
}
function botPronFeedback() { const el = document.getElementById("pronFb"); if (el) el.innerHTML = botPronFeedbackHTML(); }
function botPronFeedbackHTML() {
  const n = Object.values(BOTUI.pron.checks).filter(Boolean).length;
  if (!n) return "";
  const msgs = ["", "بداية جيدة — استمع للنموذج مرة أخرى وقلّد إيقاعه ببطء.", "أنت في منتصف الطريق — ركّز على البندين المتبقيين وسجّل من جديد.", "قريب جداً! بند واحد يفصلك عن إتقان العبارة.", "🌟 ممتاز — أكملت قائمة التحقق كلها. انتقل للعبارة التالية وتدرّب على سرعتك الطبيعية."];
  return `<div class="why-box">${msgs[n]} (تحقق ذاتي ${arNum(n)} من ٤ — بلا درجة آلية، صدقك مع نفسك هو الأداة هنا).</div>`;
}
let __rec = null, __chunks = [];
function botPronRecord() {
  const p = BOTUI.pron, err = () => document.getElementById("pronErr");
  if (p.recording && __rec) { __rec.stop(); return; }
  if (!navigator.mediaDevices || !window.MediaRecorder) { err().innerHTML = `<div class="why-box">⚠️ التسجيل الصوتي غير مدعوم في هذا المتصفح/الجهاز. يمكنك التدرب بالاستماع والترديد الشفهي مع قائمة التحقق.</div>`; return; }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    botPronDiscard(true); __chunks = []; __rec = new MediaRecorder(stream);
    __rec.ondataavailable = e => __chunks.push(e.data);
    __rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); p.recording = false; botPronDiscard(true); p.url = URL.createObjectURL(new Blob(__chunks, { type: __rec.mimeType || "audio/webm" })); navigate("chatbot"); };
    __rec.start(); p.recording = true; navigate("chatbot");
    toast("🎙️ التسجيل بدأ — تحدث الآن (يُحفظ فقط في ذاكرة الصفحة)");
  }).catch(() => { err().innerHTML = `<div class="why-box">⚠️ لم يُمنح إذن الميكروفون أو لا يوجد ميكروفون. لن نجبرك — تابع بالاستماع والترديد الشفهي، فلن يتأثر تقدمك.</div>`; });
}
function botPronDiscard(silent) {
  if (BOTUI.pron.url) { try { URL.revokeObjectURL(BOTUI.pron.url); } catch (e) {} BOTUI.pron.url = null; }
  BOTUI.pron.recording = false;
  if (!silent) toast("🗑️ حُذف التسجيل نهائياً من ذاكرة الصفحة");
}
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { chatbot: vChatbot });
