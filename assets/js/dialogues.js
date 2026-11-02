/* ===== Madrasati Yemen — Dialogue Lab =====
   Generated speech is browser/device Text-to-Speech started only by a click.
   It is never presented as an original Pupil's Book recording or a Drive match. */

const DLG = {
  selectedId: (typeof BOOK_DIALOGUES !== "undefined" && BOOK_DIALOGUES[0]) ? BOOK_DIALOGUES[0].id : "",
  unitFilter: "all",
  mode: "listen",
  idx: 0,
  rate: 1,
  playing: false,
  paused: false,
  continuous: false,
  playMode: "single",
  token: 0,
  timer: null,
  showText: true,
  showCompleted: false,
  answers: { reading: {}, listening: {} },
  checked: {},
  recorded: {},
  orderChosen: [],
  orderChecked: false,
  role: "",
  roleIdx: 0,
  roleActive: false,
  speakLine: 0
};
let DLG_REC = { recorder: null, stream: null, chunks: [], url: "" };
let DLG_VOICES = [];

function dlgById(id) { return (typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES).find(d => d.id === id) || BOOK_DIALOGUES[0]; }
function dlgCurrent() { return dlgById(DLG.selectedId); }
function dialoguesForStep(stepRef) { return (typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES).filter(d => d.stepRef === stepRef); }
function dialogueStepSummary(stepRef) {
  const n = dialoguesForStep(stepRef).length;
  return n ? ` · 🎙️ ${typeof arNum === "function" ? arNum(n) : n} ${n === 1 ? "حوار كتابي" : "حوارات كتابية"} في مختبر الحوارات` : "";
}
function dlgLineDisplayText(line) { return DLG.showCompleted && line.completedText ? line.completedText : line.text; }
function dlgSpeechText(line) {
  if (!line) return "";
  if (DLG.showCompleted && line.completedText) return line.completedText;
  if (line.speechText) return line.speechText;
  if (/^_+$/.test(String(line.text).trim())) return "";
  return String(line.text).replace(/_+/g, "").replace(/\s+\./g, ".").trim();
}
function dlgIsGapOnly(line) { return /^_+$/.test(String(line.text || "").trim()); }
function dlgSpeakers(d) { return Object.keys(d.speakers || {}); }
function dlgPlayableLines(d) { return d.lines.map((line, index) => ({ line, index })).filter(x => x.line && String(x.line.text || "").trim()); }

function dlgLoadVoices() {
  try {
    if (!("speechSynthesis" in window)) return [];
    DLG_VOICES = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang || ""));
    return DLG_VOICES;
  } catch (e) { return []; }
}
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  try { speechSynthesis.onvoiceschanged = () => dlgLoadVoices(); } catch (e) {}
}
function dlgVoiceFor(d, speaker) {
  const voices = DLG_VOICES.length ? DLG_VOICES : dlgLoadVoices();
  if (!voices.length) return null;
  const kind = ((d.speakers || {})[speaker] || {}).voice || "narrator";
  const female = /female|woman|zira|samantha|serena|kate|hazel|susan|aria|jenny|emma|libby|sonia|maisie|joanna|salli|kimberly/i;
  const male = /male|man|david|daniel|george|arthur|brian|ryan|christopher|eric|guy|matthew|justin|joey/i;
  let pool = voices;
  if (/woman|girl|childgirl/.test(kind)) pool = voices.filter(v => female.test(v.name));
  if (/man|boy|elder/.test(kind)) pool = voices.filter(v => male.test(v.name));
  if (!pool.length) pool = voices;
  const seed = Math.abs([...String(speaker)].reduce((a, c) => a + c.charCodeAt(0), 0));
  return pool[seed % pool.length] || null;
}
function dlgPitchFor(d, speaker) {
  const kind = ((d.speakers || {})[speaker] || {}).voice || "narrator";
  return ({ narrator: 0.95, man: 0.78, man2: 0.86, elderman: 0.68, boy: 1.12, boy2: 1.2, boy3: 1.28, boy4: 1.05,
    woman: 1.0, woman2: 1.07, woman3: 0.94, girl: 1.18, girl2: 1.26, girl3: 1.34, girl4: 1.11,
    childgirl: 1.42, children: 1.25 })[kind] || 1;
}

function dlgStatus(msg) {
  const el = document.getElementById("dlgPlayStatus");
  if (el) el.textContent = msg;
}
function dlgHighlight() {
  document.querySelectorAll(".dialogue-line").forEach(el => el.classList.remove("dlg-current"));
  const el = document.getElementById(`dlg-line-${DLG.idx}`);
  if (el) {
    el.classList.add("dlg-current");
    try { el.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
  }
}
function dlgStopSpeech(updateStatus = true) {
  DLG.token++;
  DLG.playing = false; DLG.paused = false; DLG.continuous = false; DLG.roleActive = false;
  if (DLG.timer) clearTimeout(DLG.timer);
  DLG.timer = null;
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
  if (updateStatus) dlgStatus("توقف الصوت المولّد. اختر سطراً أو شغّل الحوار من جديد.");
  dlgUpdateTransport();
}
function dlgUpdateTransport() {
  const pauseBtn = document.getElementById("dlgPauseBtn");
  if (pauseBtn) pauseBtn.textContent = DLG.paused ? "▶️ استئناف" : "⏸️ إيقاف مؤقت";
  document.querySelectorAll("[data-dlg-rate]").forEach(btn => btn.classList.toggle("active", Number(btn.getAttribute("data-dlg-rate")) === DLG.rate));
}
function dlgSetRate(rate) {
  DLG.rate = [0.6, 0.8, 1].includes(Number(rate)) ? Number(rate) : 1;
  dlgUpdateTransport();
  if (DLG.playing && !DLG.paused) {
    const wasContinuous = DLG.continuous, wasRole = DLG.playMode === "role";
    dlgSpeakLine(DLG.idx, { continuous: wasContinuous, roleMode: wasRole, restart: true });
  } else {
    dlgStatus(`السرعة الآن ${DLG.rate.toFixed(1)}× — ستُستخدم من السطر التالي أو عند إعادة التشغيل.`);
  }
}
function dlgAdvance(token, roleMode = false) {
  if (token !== DLG.token) return;
  const d = dlgCurrent();
  if (DLG.idx >= d.lines.length - 1) {
    DLG.playing = false; DLG.continuous = false; DLG.roleActive = false;
    dlgStatus(roleMode ? "انتهى تمثيل الأدوار. أحسنت — جرّب دوراً آخر أو سرعة مختلفة." : "انتهى الحوار كاملاً دون أسئلة إجبارية أثناء الاستماع.");
    if (roleMode) dlgFinishRolePlay();
    dlgUpdateTransport();
    return;
  }
  DLG.timer = setTimeout(() => {
    if (token === DLG.token) dlgSpeakLine(DLG.idx + 1, { continuous: true, roleMode });
  }, 280);
}
function dlgSpeakLine(index, opts = {}) {
  const d = dlgCurrent();
  if (!d || index < 0 || index >= d.lines.length) return;
  const token = ++DLG.token;
  DLG.idx = index;
  DLG.continuous = !!opts.continuous;
  DLG.playMode = opts.roleMode ? "role" : (opts.continuous ? "full" : "single");
  DLG.roleActive = !!opts.roleMode;
  DLG.paused = false;
  if (DLG.timer) clearTimeout(DLG.timer);
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
  dlgHighlight();
  const line = d.lines[index];
  dlgStatus(`السطر ${index + 1} من ${d.lines.length} — ${line.speaker} · السرعة ${DLG.rate.toFixed(1)}×`);

  if (opts.roleMode && line.speaker === DLG.role) {
    DLG.playing = false;
    dlgStatus(`🎤 دورك الآن: ${line.speaker}. قل السطر بصوت واضح، ثم اضغط «قلتُها — التالي».`);
    dlgRenderRoleStage();
    dlgUpdateTransport();
    return;
  }
  const text = dlgSpeechText(line);
  if (!text) {
    DLG.playing = true;
    dlgStatus("هذا فراغ في الكتاب. يتوقف الصوت لحظة لتقوله أو تكتبه؛ فعّل «إظهار الإكمالات التدريبية» إن أردت سماع حل مقترح.");
    if (DLG.continuous) DLG.timer = setTimeout(() => dlgAdvance(token, !!opts.roleMode), 1200 / DLG.rate);
    else DLG.playing = false;
    dlgUpdateTransport();
    return;
  }
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    DLG.playing = false;
    dlgStatus("⚠️ هذا المتصفح/الجهاز لا يدعم توليد النطق. يبقى النص والأنشطة متاحة كاملة.");
    if (typeof toast === "function") toast("⚠️ النطق المولّد غير مدعوم على هذا الجهاز");
    dlgUpdateTransport();
    return;
  }
  try {
    const u = new SpeechSynthesisUtterance(text);
    const voice = dlgVoiceFor(d, line.speaker);
    if (voice) u.voice = voice;
    u.lang = (voice && voice.lang) || "en-GB";
    u.rate = DLG.rate;
    u.pitch = dlgPitchFor(d, line.speaker);
    u.volume = 1;
    DLG.playing = true;
    u.onend = () => {
      if (token !== DLG.token) return;
      if (DLG.continuous) dlgAdvance(token, !!opts.roleMode);
      else { DLG.playing = false; dlgStatus("انتهى السطر. يمكنك إعادته أو الانتقال للسابق/التالي."); dlgUpdateTransport(); }
    };
    u.onerror = () => {
      if (token !== DLG.token) return;
      DLG.playing = false;
      dlgStatus("⚠️ تعذّر نطق هذا السطر على الجهاز. جرّب سطراً آخر أو اكمل قراءة وكتابة.");
      dlgUpdateTransport();
    };
    speechSynthesis.speak(u);
  } catch (e) {
    DLG.playing = false;
    dlgStatus("⚠️ حدثت مشكلة في محرك نطق الجهاز؛ لم تتأثر بقية أنشطة الحوار.");
  }
  dlgUpdateTransport();
}
function dlgPlayAll() { DLG.mode = DLG.mode || "listen"; dlgSpeakLine(0, { continuous: true }); }
function dlgPlayFrom(index) { dlgSpeakLine(index, { continuous: true }); }
function dlgPrevLine() { dlgSpeakLine(Math.max(0, DLG.idx - 1), { continuous: false }); }
function dlgNextLine() { dlgSpeakLine(Math.min(dlgCurrent().lines.length - 1, DLG.idx + 1), { continuous: false }); }
function dlgRepeatLine() { dlgSpeakLine(DLG.idx, { continuous: false }); }
function dlgPauseResume() {
  if (!("speechSynthesis" in window)) { dlgStatus("النطق المولّد غير مدعوم على هذا الجهاز."); return; }
  try {
    if (DLG.paused) { speechSynthesis.resume(); DLG.paused = false; DLG.playing = true; dlgStatus("استؤنف الصوت المولّد."); }
    else if (DLG.playing) { speechSynthesis.pause(); DLG.paused = true; dlgStatus("إيقاف مؤقت — يمكنك الاستئناف من الموضع نفسه إن دعم جهازك ذلك."); }
    else dlgSpeakLine(DLG.idx, { continuous: DLG.continuous });
  } catch (e) { dlgStatus("تعذّر الإيقاف المؤقت/الاستئناف على هذا الجهاز."); }
  dlgUpdateTransport();
}

function dlgResetActivities() {
  DLG.answers = { reading: {}, listening: {} };
  DLG.checked = {}; DLG.recorded = {}; DLG.orderChosen = []; DLG.orderChecked = false;
  DLG.idx = 0; DLG.roleIdx = 0; DLG.roleActive = false;
  const d = dlgCurrent();
  DLG.role = d ? (dlgSpeakers(d).find(s => !/Narrator|Sign/.test(s)) || dlgSpeakers(d)[0] || "") : "";
  DLG.speakLine = d && Number.isInteger(d.keyLine) ? d.keyLine : 0;
}
function openDialogueLab(id, mode = "listen") {
  dlgStopSpeech(false);
  DLG.selectedId = id;
  DLG.unitFilter = String(dlgById(id).unit);
  DLG.mode = ["listen", "read", "write", "speak"].includes(mode) ? mode : "listen";
  dlgResetActivities();
  if (typeof navigate === "function") navigate("dialogues");
  setTimeout(() => {
    const el = document.getElementById("dlgDetail");
    if (el) try { el.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
    dlgSetMode(DLG.mode, false);
    dlgUpdateTransport();
  }, 60);
}
function dlgSetUnitFilter(v) { dlgStopSpeech(false); DLG.unitFilter = String(v); if (typeof navigate === "function") navigate("dialogues"); }
function dlgSetMode(mode, stop = true) {
  if (stop && mode !== DLG.mode) dlgStopSpeech(false);
  DLG.mode = ["listen", "read", "write", "speak"].includes(mode) ? mode : "listen";
  document.querySelectorAll("[data-dlg-tab]").forEach(b => b.classList.toggle("active", b.getAttribute("data-dlg-tab") === DLG.mode));
  document.querySelectorAll("[data-dlg-mode]").forEach(p => { p.style.display = p.getAttribute("data-dlg-mode") === DLG.mode ? "" : "none"; });
}
function dlgToggleText() {
  DLG.showText = !DLG.showText;
  const box = document.getElementById("dlgTranscript");
  const btn = document.getElementById("dlgToggleTextBtn");
  if (box) box.style.display = DLG.showText ? "" : "none";
  if (btn) btn.textContent = DLG.showText ? "🙈 إخفاء النص" : "👁️ إظهار النص";
}
function dlgToggleCompleted() {
  DLG.showCompleted = !DLG.showCompleted;
  const box = document.getElementById("dlgTranscript");
  if (box) box.innerHTML = dlgTranscriptHTML(dlgCurrent());
  const btn = document.getElementById("dlgCompletedBtn");
  if (btn) btn.textContent = DLG.showCompleted ? "↩️ العودة لعرض الفراغات كما في الصفحة" : "✏️ إظهار إكمالات الفراغات التدريبية";
  dlgHighlight();
}
function dlgTranscriptHTML(d) {
  let lastSection = "";
  return d.lines.map((line, i) => {
    const section = line.section && line.section !== lastSection ? `<div class="dlg-section" dir="ltr">${esc(line.section)}</div>` : "";
    lastSection = line.section || lastSection;
    const isNarration = ["narration", "sign"].includes(line.kind);
    const gapTag = line.completedText ? `<span class="badge" style="background:#fff4d6;color:#7a4b00">${DLG.showCompleted ? "إكمال تدريبي مقترح" : "فراغ في الكتاب"}</span>` : "";
    return `${section}<div class="dialogue-line ${isNarration ? "narration" : ""}" id="dlg-line-${i}">
      <div class="dlg-line-top"><strong dir="ltr">${esc(line.speaker)}</strong>${gapTag}
        <span class="dlg-line-actions"><button class="icon-btn" title="نطق هذا السطر فقط" onclick="dlgSpeakLine(${i},{continuous:false})">🔊</button>
        <button class="btn btn-ghost btn-sm" title="تشغيل من هذا السطر" onclick="dlgPlayFrom(${i})">▶ من هنا</button></span></div>
      <div dir="ltr" class="dlg-line-text">${esc(dlgLineDisplayText(line))}</div>
      ${line.gapNote ? `<small class="dlg-gap-note">${esc(line.gapNote)}</small>` : ""}
    </div>`;
  }).join("");
}
function dlgQuestionHTML(d, mode) {
  const title = mode === "reading" ? "أسئلة فهم بعد القراءة" : "أسئلة فهم بعد الاستماع";
  return `<h4>${mode === "reading" ? "📖" : "🎧"} ${title}</h4>
    <p class="dlg-muted">${mode === "reading" ? "ارجع إلى النص وحدّد الدليل قبل الاختيار." : "استمع أولاً دون إظهار النص إن استطعت، ثم أجب من الذاكرة السمعية. يمكنك إعادة أي سطر."}</p>
    ${d.questions.map((q, qi) => `<div class="dlg-question" style="margin-bottom:13px">
      <div dir="ltr" style="text-align:left;font-weight:700;margin-bottom:7px">${qi + 1}. ${esc(q.q)}</div>
      <div style="display:flex;flex-direction:column;gap:6px">${q.options.map((op, oi) => `<button type="button" class="dlg-answer" data-dlg-answer="${mode}-${qi}" data-value="${oi}" dir="ltr" style="text-align:left" onclick="dlgAnswer('${mode}',${qi},${oi})">${esc(op)}</button>`).join("")}</div>
      <div id="dlg-${mode}-why-${qi}" class="why-box" style="display:none;margin-top:7px"></div>
    </div>`).join("")}
    <button class="btn btn-primary" onclick="dlgCheckQuestions('${mode}')">تحقق من ${mode === "reading" ? "القراءة" : "الاستماع"}</button>
    <div id="dlg-${mode}-result" style="margin-top:10px"></div>`;
}
function dlgAnswer(mode, qi, oi) {
  DLG.answers[mode][qi] = oi;
  document.querySelectorAll(`[data-dlg-answer="${mode}-${qi}"]`).forEach(b => b.classList.toggle("selected", Number(b.getAttribute("data-value")) === oi));
}
function dlgCheckQuestions(mode) {
  const d = dlgCurrent();
  let score = 0;
  d.questions.forEach((q, qi) => {
    const sel = DLG.answers[mode][qi];
    const ok = Number(sel) === q.a;
    if (ok) score++;
    document.querySelectorAll(`[data-dlg-answer="${mode}-${qi}"]`).forEach(b => {
      b.classList.toggle("correct", Number(b.getAttribute("data-value")) === q.a);
      b.classList.toggle("wrong", Number(sel) === Number(b.getAttribute("data-value")) && !ok);
    });
    const why = document.getElementById(`dlg-${mode}-why-${qi}`);
    if (why) { why.style.display = ""; why.innerHTML = `${ok ? "✅" : "💡"} ${esc(q.why)}`; }
  });
  const result = document.getElementById(`dlg-${mode}-result`);
  const ar = typeof arNum === "function" ? arNum : String;
  if (result) result.innerHTML = `<div class="why-box">نتيجتك: <b>${ar(score)} / ${ar(d.questions.length)}</b>. الأسئلة أنشطة منصة مبنية على نص الحوار، وليست أسئلة مطبوعة إضافية من PB.</div>`;
  const key = `${d.id}:${mode}`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function") {
    recordAttempt({ id: `${d.id}-${mode}`, title: `حوار ${d.title} — ${mode === "reading" ? "قراءة" : "استماع"}`, skill: mode }, score, d.questions.length);
    DLG.recorded[key] = true;
  }
  return { score, total: d.questions.length };
}

function dlgOrderItems(d = dlgCurrent()) {
  const seen = new Set();
  return d.lines.map((line, index) => ({ line, index }))
    .filter(x => !["narration", "sign"].includes(x.line.kind) && !dlgIsGapOnly(x.line))
    .filter(x => { const key = x.line.speaker + "\n" + x.line.text; if (seen.has(key)) return false; seen.add(key); return true; })
    .slice(0, Math.min(4, d.lines.length));
}
function dlgOrderShuffled(d = dlgCurrent()) {
  const items = dlgOrderItems(d).slice();
  if (items.length > 2) return items.reverse();
  if (items.length === 2) return [items[1], items[0]];
  return items;
}
function dlgRenderOrder() {
  const host = document.getElementById("dlgOrderPieces");
  const out = document.getElementById("dlgOrderChosen");
  if (!host || !out) return;
  const shuffled = dlgOrderShuffled();
  host.innerHTML = shuffled.filter(x => !DLG.orderChosen.includes(x.index)).map(x => `<button type="button" class="chip-filter" dir="ltr" style="text-align:left" onclick="dlgOrderPick(${x.index})"><b>${esc(x.line.speaker)}:</b> ${esc(dlgLineDisplayText(x.line))}</button>`).join("");
  out.innerHTML = DLG.orderChosen.length ? DLG.orderChosen.map((idx, pos) => { const line = dlgCurrent().lines[idx]; return `<div dir="ltr" style="text-align:left" class="en-lines"><div>${pos + 1}. <b>${esc(line.speaker)}:</b> ${esc(dlgLineDisplayText(line))}</div></div>`; }).join("") : `<p class="dlg-muted">المس الأسطر بالترتيب الذي تسمعه/تقرؤه في الحوار.</p>`;
}
function dlgOrderPick(idx) { if (!DLG.orderChosen.includes(idx)) { DLG.orderChosen.push(idx); dlgRenderOrder(); } }
function dlgOrderReset() { DLG.orderChosen = []; DLG.orderChecked = false; dlgRenderOrder(); const r = document.getElementById("dlgOrderResult"); if (r) r.innerHTML = ""; }
function dlgCheckOrder() {
  const expected = dlgOrderItems().map(x => x.index);
  let score = 0; expected.forEach((v, i) => { if (DLG.orderChosen[i] === v) score++; });
  const total = expected.length;
  const el = document.getElementById("dlgOrderResult");
  const ar = typeof arNum === "function" ? arNum : String;
  if (el) el.innerHTML = `<div class="why-box">ترتيبك: <b>${ar(score)} / ${ar(total)}</b> في المواضع الصحيحة.${score === total ? " تسلسل ممتاز!" : " أعد الاستماع عند 0.6× ثم حاول مجدداً."}</div>`;
  const key = `${dlgCurrent().id}:order`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function" && total) { recordAttempt({ id: key, title: `حوار ${dlgCurrent().title} — ترتيب وكتابة`, skill: "writing" }, score, total); DLG.recorded[key] = true; }
  return { score, total };
}
function dlgNormalizeAnswer(s) {
  return String(s || "").toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
}
function dlgDictationPlay() { const d = dlgCurrent(); dlgSpeakLine(Number.isInteger(d.keyLine) ? d.keyLine : 0, { continuous: false }); }
function dlgCheckDictation() {
  const d = dlgCurrent(), line = d.lines[Number.isInteger(d.keyLine) ? d.keyLine : 0];
  const input = document.getElementById("dlgDictationInput");
  const out = document.getElementById("dlgDictationResult");
  const expected = dlgLineDisplayText(line);
  const ok = dlgNormalizeAnswer(input ? input.value : "") === dlgNormalizeAnswer(expected);
  if (out) out.innerHTML = `<div class="why-box">${ok ? "✅ إملاء صحيح." : "💡 ليست مطابقة بعد. استمع مجدداً عند 0.6×، وانتبه للكلمات الصغيرة والاختصارات."}<div dir="ltr" style="text-align:left;margin-top:6px"><b>${esc(line.speaker)}:</b> ${esc(expected)}</div></div>`;
  const key = `${d.id}:dictation`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function") { recordAttempt({ id: key, title: `حوار ${d.title} — إملاء سمعي وكتابة`, skill: "writing" }, ok ? 1 : 0, 1); DLG.recorded[key] = true; }
  return ok;
}
function dlgGapLines(d = dlgCurrent()) { return d.lines.map((line, index) => ({ line, index })).filter(x => x.line.gapAnswer); }
function dlgCheckGaps() {
  const gaps = dlgGapLines(); let score = 0;
  gaps.forEach((x, gi) => {
    const sel = document.getElementById(`dlgGap-${gi}`);
    const ok = sel && sel.value === x.line.gapAnswer;
    if (ok) score++;
    const out = document.getElementById(`dlgGapWhy-${gi}`);
    if (out) { out.style.display = ""; out.innerHTML = ok ? `✅ صحيح: <span dir="ltr">${esc(x.line.gapAnswer)}</span>` : `💡 الإكمال التدريبي المقترح: <span dir="ltr">${esc(x.line.gapAnswer)}</span>`; }
  });
  const el = document.getElementById("dlgGapResult");
  const ar = typeof arNum === "function" ? arNum : String;
  if (el) el.innerHTML = `<div class="why-box">فراغات صحيحة: <b>${ar(score)} / ${ar(gaps.length)}</b>. هذه حلول سياقية تدريبية؛ الصفحة نفسها تترك الفراغات فارغة.</div>`;
  const key = `${dlgCurrent().id}:gaps`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function" && gaps.length) { recordAttempt({ id: key, title: `حوار ${dlgCurrent().title} — إكمال فراغات`, skill: "writing" }, score, gaps.length); DLG.recorded[key] = true; }
  return { score, total: gaps.length };
}
function dlgWritingKey(id) { return `madrasati-dialogue-writing-v1:${id}`; }
function dlgLoadWriting(id) { try { return localStorage.getItem(dlgWritingKey(id)) || ""; } catch (e) { return ""; } }
function dlgSaveWriting() {
  const d = dlgCurrent(); const ta = document.getElementById("dlgFreeWriting");
  if (!ta) return;
  try { localStorage.setItem(dlgWritingKey(d.id), ta.value); } catch (e) {}
  dlgUpdateWordCount();
}
function dlgUpdateWordCount() {
  const ta = document.getElementById("dlgFreeWriting"); const el = document.getElementById("dlgWordCount");
  if (ta && el) el.textContent = `${(ta.value.trim().match(/\S+/g) || []).length} كلمة — محفوظ محلياً على هذا الجهاز أثناء الكتابة`;
}
function dlgCompleteWriting() {
  dlgSaveWriting();
  const checks = [...document.querySelectorAll("[data-dlg-write-check]")];
  const score = checks.filter(x => x.checked).length;
  const ta = document.getElementById("dlgFreeWriting");
  const words = ta ? (ta.value.trim().match(/\S+/g) || []).length : 0;
  const out = document.getElementById("dlgWritingResult");
  if (out) out.innerHTML = `<div class="why-box">حُفظ النص محلياً (${words} كلمة). تحققك الذاتي: <b>${score}/${checks.length}</b>. لا توجد درجة كتابة آلية — اعرض النص على معلم/زميل للمراجعة البشرية.</div>`;
  const key = `${dlgCurrent().id}:freewriting`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function" && checks.length) { recordAttempt({ id: key, title: `حوار ${dlgCurrent().title} — كتابة حرّة (تقييم ذاتي)`, skill: "writing" }, score, checks.length); DLG.recorded[key] = true; }
}

function dlgSetSpeakLine(v) { DLG.speakLine = Number(v); dlgRenderSpeakLine(); }
function dlgRenderSpeakLine() {
  const d = dlgCurrent(), line = d.lines[DLG.speakLine] || d.lines[0];
  const el = document.getElementById("dlgSpeakLineText");
  if (el && line) el.innerHTML = `<b>${esc(line.speaker)}:</b> ${esc(dlgLineDisplayText(line))}`;
}
function dlgModelLine() { dlgSpeakLine(DLG.speakLine, { continuous: false }); }
async function dlgRecordToggle() {
  const status = document.getElementById("dlgRecordStatus");
  const btn = document.getElementById("dlgRecordBtn");
  if (DLG_REC.recorder && DLG_REC.recorder.state === "recording") {
    try { DLG_REC.recorder.stop(); } catch (e) {}
    return;
  }
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    if (status) status.innerHTML = "⚠️ التسجيل الصوتي غير مدعوم في هذا المتصفح/الجهاز. تدرّب بالترديد الشفهي وقائمة التحقق.";
    return;
  }
  try {
    dlgDiscardRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    DLG_REC.stream = stream; DLG_REC.chunks = [];
    const rec = new MediaRecorder(stream); DLG_REC.recorder = rec;
    rec.ondataavailable = e => { if (e.data && e.data.size) DLG_REC.chunks.push(e.data); };
    rec.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(DLG_REC.chunks, { type: rec.mimeType || "audio/webm" });
      if (DLG_REC.url) URL.revokeObjectURL(DLG_REC.url);
      DLG_REC.url = URL.createObjectURL(blob);
      const audio = document.getElementById("dlgRecordAudio");
      if (audio) { audio.src = DLG_REC.url; audio.style.display = ""; }
      if (status) status.textContent = "جاهز: استمع لتسجيلك المحلي وقارنه بالنموذج المولّد. لا يُرفع التسجيل ولا توجد درجة نطق آلية.";
      if (btn) btn.textContent = "🎙️ تسجيل محاولة جديدة";
    };
    rec.start();
    if (status) status.textContent = "● يسجل الآن… قل السطر كاملاً ثم اضغط زر الإيقاف.";
    if (btn) btn.textContent = "⏹️ إيقاف التسجيل";
  } catch (e) {
    if (status) status.textContent = "⚠️ لم يُسمح باستخدام الميكروفون أو تعذّر بدء التسجيل. ما يزال الترديد الشفهي متاحاً.";
  }
}
function dlgDiscardRecording(silent = false) {
  try { if (DLG_REC.stream) DLG_REC.stream.getTracks().forEach(t => t.stop()); } catch (e) {}
  if (DLG_REC.url) { try { URL.revokeObjectURL(DLG_REC.url); } catch (e) {} }
  DLG_REC = { recorder: null, stream: null, chunks: [], url: "" };
  const audio = document.getElementById("dlgRecordAudio");
  if (audio) { audio.removeAttribute("src"); audio.style.display = "none"; }
  const btn = document.getElementById("dlgRecordBtn"); if (btn) btn.textContent = "🎙️ بدء تسجيل صوتي محلي";
  const status = document.getElementById("dlgRecordStatus"); if (status && !silent) status.textContent = "حُذف التسجيل المحلي من هذه الجلسة.";
}
function dlgCompleteSpeaking() {
  const checks = [...document.querySelectorAll("[data-dlg-speak-check]")];
  const score = checks.filter(x => x.checked).length;
  const out = document.getElementById("dlgSpeakingResult");
  if (out) out.innerHTML = `<div class="why-box">تقييمك الذاتي: <b>${score}/${checks.length}</b>. هذا إكمال لقائمة تحقق، وليس درجة نطق آلية.</div>`;
  const key = `${dlgCurrent().id}:speaking-selfcheck`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function" && checks.length) { recordAttempt({ id: key, title: `حوار ${dlgCurrent().title} — تحدث (تحقق ذاتي)`, skill: "speaking" }, score, checks.length); DLG.recorded[key] = true; }
}

function dlgSetRole(role) { DLG.role = role; DLG.roleIdx = 0; dlgRenderRoleStage(); }
function dlgStartRolePlay() {
  if (!DLG.role) { dlgStatus("اختر دوراً أولاً."); return; }
  DLG.roleIdx = 0; DLG.roleActive = true;
  dlgSpeakLine(0, { continuous: true, roleMode: true });
  dlgRenderRoleStage();
}
function dlgRenderRoleStage() {
  const d = dlgCurrent(), host = document.getElementById("dlgRoleStage");
  if (!host) return;
  const line = d.lines[DLG.idx] || d.lines[0];
  const mine = line && line.speaker === DLG.role;
  host.innerHTML = `<div class="why-box" style="margin-bottom:8px">الدور المختار: <b dir="ltr">${esc(DLG.role || "—")}</b> · السطر الحالي ${DLG.idx + 1}/${d.lines.length}</div>
    <div dir="ltr" style="text-align:left" class="en-lines"><div><b>${esc(line ? line.speaker : "")}:</b> ${esc(line ? dlgLineDisplayText(line) : "")}</div></div>
    ${mine ? `<button class="btn btn-primary btn-sm" style="margin-top:9px" onclick="dlgRoleSaid()">✅ قلتُها — التالي</button>` : `<small>ستتحدث الأدوار الأخرى بصوت مولّد؛ وعند دورك يتوقف التشغيل تلقائياً.</small>`}`;
}
function dlgRoleSaid() {
  const d = dlgCurrent();
  if (DLG.idx >= d.lines.length - 1) {
    DLG.roleActive = false; dlgStatus("انتهى تمثيل الأدوار."); dlgFinishRolePlay(); dlgRenderRoleStage(); return;
  }
  dlgSpeakLine(DLG.idx + 1, { continuous: true, roleMode: true });
  setTimeout(dlgRenderRoleStage, 40);
}
function dlgFinishRolePlay() {
  const d = dlgCurrent();
  const total = d.lines.filter(l => l.speaker === DLG.role).length;
  const key = `${d.id}:roleplay:${DLG.role}`;
  if (!DLG.recorded[key] && typeof recordAttempt === "function" && total) {
    recordAttempt({ id: key, title: `حوار ${d.title} — تمثيل دور ${DLG.role} (إكمال)`, skill: "speaking" }, total, total);
    DLG.recorded[key] = true;
  }
}

function dlgCardHTML(d) {
  const selected = d.id === DLG.selectedId;
  return `<article class="lesson-card ${selected ? "dlg-selected" : ""}" onclick="openDialogueLab('${d.id}','listen')">
    <div class="lesson-thumb" style="background:linear-gradient(120deg,#1565c0,#6a1b9a)"><span class="t-grade" dir="ltr">Unit ${d.unit} · PB ${esc(d.exercise)}</span><span class="t-icon">${esc(d.icon || "💬")}</span></div>
    <div class="lesson-body"><h4 dir="ltr" style="text-align:left">${esc(d.title)}</h4><p>${esc(d.settingAr)}</p>
      <div style="margin-top:6px">${typeof srcBadge === "function" ? srcBadge(d.status) : esc(d.status)}</div>
      <div class="lesson-meta"><span dir="ltr">${esc(d.printedPages)}</span><span>${d.lines.length} سطراً</span><span>قراءة · استماع · كتابة · تحدث</span></div>
      <small style="display:block;margin-top:6px">🔊 صوت مولّد من الجهاز بالسرعات 0.6/0.8/1.0 — بلا رابط Drive موثّق بعد (مرجع TB: <span dir="ltr">${esc(d.csRefs)}</span>).</small>
    </div></article>`;
}
function dlgDetailHTML(d) {
  const hasGaps = d.lines.some(l => l.completedText);
  const focus = (d.focus || []).map(w => `<button class="chip-filter" dir="ltr" onclick="dlgSpeakFocus('${encodeURIComponent(w).replace(/'/g, "%27")}')">${esc(w)} 🔊</button>`).join("");
  const gaps = dlgGapLines(d);
  const gapOptions = [...new Set(gaps.map(x => x.line.gapAnswer))].reverse();
  const roleOptions = dlgSpeakers(d).filter(s => !/Narrator|Sign/.test(s));
  const savedWriting = dlgLoadWriting(d.id);
  return `<section id="dlgDetail" class="panel" style="margin-top:18px">
    <div class="dlg-detail-head">
      <div>
        <h3 dir="ltr" style="text-align:right">${esc(d.icon || "💬")} ${esc(d.title)}</h3>
        <p class="dlg-muted"><span dir="ltr">Unit ${d.unit} · ${esc(d.printedPages)} · Exercise ${esc(d.exercise)} · stepRef ${esc(d.stepRef)}</span></p>
        <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:7px">${typeof srcBadge === "function" ? srcBadge(d.status) : ""}<span class="badge" style="background:#e6f7ef;color:#08764d">🎧 أربع مهارات</span><span class="badge b-mid">Drive: غير مرتبط — لم يُستمع للتسجيلات</span></div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="dlgDownloadDialogue()">📥 تنزيل الحوار والأنشطة</button>
    </div>

    <div class="dlg-context"><span class="dlg-context-icon">${esc(d.icon || "💬")}</span><div><strong>سياق الصورة في كتاب الطالب (وصف نصي من المنصة، لا صورة ممسوحة منشورة):</strong><p>${esc(d.pictureContextAr)}</p><small>${esc(d.settingAr)}</small></div></div>

    <div class="why-box"><b>🔊 الصوت هنا مولّد آلياً عند الضغط من متصفح/جهاز الطالب (Text-to-Speech) بأصوات وطبقات مختلفة بحسب الدور، وليس تسجيل الكتاب الأصلي ولا ملف MP3 مخزّناً.</b>
    لا يوجد رابط Drive موثّق لهذا الحوار؛ مرجع الكاسيت في TB هو <span dir="ltr">${esc(d.csRefs)}</span> ويبقى مرشح مراجعة سمعية فقط. التشغيل لا يبدأ عند فتح الصفحة أو اختيار الحوار.
    <button class="btn btn-ghost btn-sm" style="margin-inline-start:8px" onclick="dlgStopSpeech(false);navigate('audio')">فتح فهرس Drive دون ربط</button></div>

    <div class="dlg-player">
      <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">
        <button class="btn btn-primary" onclick="dlgPlayAll()">▶️ تشغيل الحوار كاملاً</button>
        <button class="btn btn-ghost" id="dlgPauseBtn" onclick="dlgPauseResume()">⏸️ إيقاف مؤقت</button>
        <button class="btn btn-ghost" onclick="dlgStopSpeech(true)">⏹️ إيقاف</button>
        <button class="btn btn-ghost" onclick="dlgPrevLine()">⏮️ السابق</button>
        <button class="btn btn-ghost" onclick="dlgRepeatLine()">🔁 إعادة السطر</button>
        <button class="btn btn-ghost" onclick="dlgNextLine()">⏭️ التالي</button>
        <button class="btn btn-ghost" id="dlgToggleTextBtn" onclick="dlgToggleText()">🙈 إخفاء النص</button>
        ${hasGaps ? `<button class="btn btn-ghost" id="dlgCompletedBtn" onclick="dlgToggleCompleted()">✏️ إظهار إكمالات الفراغات التدريبية</button>` : ""}
      </div>
      <div class="dlg-rate"><strong>سرعة الصوت المولّد:</strong>
        ${[0.6, 0.8, 1].map(r => `<button type="button" class="chip-filter ${DLG.rate === r ? "active" : ""}" data-dlg-rate="${r}" onclick="dlgSetRate(${r})">${r.toFixed(1)}×</button>`).join("")}
        <small>0.6 للمتابعة البطيئة، 0.8 للتدريب، 1.0 للسرعة العادية.</small>
      </div>
      <div id="dlgPlayStatus" class="dlg-status">اختر «تشغيل الحوار كاملاً» أو 🔊 بجانب أي سطر. لن يبدأ أي صوت تلقائياً.</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap" dir="ltr">${dlgSpeakers(d).map(s => `<span class="badge" style="background:#eef4ff;color:#174ea6">${esc(s)}</span>`).join("")}</div>
    </div>

    <div id="dlgTranscript" style="margin-top:12px">${dlgTranscriptHTML(d)}</div>

    ${dlgTrainingLinksHTML(d)}

    <div class="dlg-source">
      <strong>🔎 مرجع المصدر وحالته:</strong>
      <span dir="ltr">${esc(d.printedPages)} · ${esc(d.pdfPages)}</span>${d.transcriptionId ? ` · سجل النسخ الحالي <span dir="ltr">${esc(d.transcriptionId)}</span>` : " · نسخ حواري بصري جديد في مختبر الحوارات (أسطر الحوار فقط، لا نسخ كامل لكل عناصر الصفحة)"}
      <br>${esc(d.sourceNote)}
      <br><small>${esc(DIALOGUE_SOURCE.method)} ${esc(DIALOGUE_SOURCE.driveNote)}</small>
    </div>

    <div class="dlg-tabs" role="tablist">
      <button type="button" class="chip-filter ${DLG.mode === "listen" ? "active" : ""}" data-dlg-tab="listen" onclick="dlgSetMode('listen')">🎧 الاستماع</button>
      <button type="button" class="chip-filter ${DLG.mode === "read" ? "active" : ""}" data-dlg-tab="read" onclick="dlgSetMode('read')">📖 القراءة</button>
      <button type="button" class="chip-filter ${DLG.mode === "write" ? "active" : ""}" data-dlg-tab="write" onclick="dlgSetMode('write');dlgRenderOrder();dlgUpdateWordCount()">✍️ الكتابة</button>
      <button type="button" class="chip-filter ${DLG.mode === "speak" ? "active" : ""}" data-dlg-tab="speak" onclick="dlgSetMode('speak');dlgRenderSpeakLine();dlgRenderRoleStage()">🎤 التحدث</button>
    </div>

    <div data-dlg-mode="listen" class="dlg-mode-panel" style="display:${DLG.mode === "listen" ? "" : "none"}">
      <p><strong>مهمة الاستماع:</strong> أخفِ النص، شغّل الحوار كاملاً أولاً دون مقاطعة، ثم أعد الأسطر الصعبة عند 0.6× وأجب.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><button class="btn btn-primary btn-sm" onclick="if(DLG.showText)dlgToggleText();dlgPlayAll()">🎧 إخفاء النص وتشغيل كامل الحوار</button><button class="btn btn-ghost btn-sm" onclick="if(!DLG.showText)dlgToggleText()">إظهار النص للمراجعة</button></div>
      ${dlgQuestionHTML(d, "listening")}
    </div>

    <div data-dlg-mode="read" class="dlg-mode-panel" style="display:${DLG.mode === "read" ? "" : "none"}">
      <p><strong>مهمة القراءة:</strong> اقرأ بصوت منخفض، ظلّل ذهنياً سطر الدليل لكل سؤال، ثم راجع العبارات المفتاحية.</p>
      ${focus ? `<h4>عبارات مفتاحية — اضغط لسماع نطق مولّد</h4><div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">${focus}</div>` : ""}
      ${dlgQuestionHTML(d, "reading")}
    </div>

    <div data-dlg-mode="write" class="dlg-mode-panel" style="display:${DLG.mode === "write" ? "" : "none"}">
      <h4>🔢 1) رتّب أسطر الحوار</h4><div id="dlgOrderPieces" style="display:flex;flex-direction:column;gap:7px;margin-bottom:10px"></div><div id="dlgOrderChosen"></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0"><button class="btn btn-primary btn-sm" onclick="dlgCheckOrder()">تحقق من الترتيب</button><button class="btn btn-ghost btn-sm" onclick="dlgOrderReset()">إعادة الترتيب</button></div><div id="dlgOrderResult"></div>

      <h4 style="margin-top:18px">🎧✍️ 2) إملاء سمعي</h4><p class="dlg-muted">استمع إلى سطر مفتاحي واكتبه. المقارنة تتجاهل حالة الأحرف وعلامات الترقيم، لكنها لا تتجاهل الكلمات.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="btn btn-ghost btn-sm" onclick="dlgDictationPlay()">🔊 اسمع السطر</button><input id="dlgDictationInput" class="f-input" dir="ltr" style="flex:1;min-width:230px;text-align:left" placeholder="Type the line you hear …"><button class="btn btn-primary btn-sm" onclick="dlgCheckDictation()">تحقق</button></div><div id="dlgDictationResult" style="margin-top:9px"></div>

      ${gaps.length >= 3 ? `<h4 style="margin-top:18px">🧩 3) أكمل فراغات الكتاب</h4><p class="dlg-muted">اختر العبارة الأنسب سياقياً. العبارات كلها من بنك/فراغات الصفحة والترتيب حل تدريبي، لا نص مطبوع داخل الفراغ.</p>
      ${gaps.map((x, gi) => `<div style="margin-bottom:10px"><div dir="ltr" style="text-align:left;margin-bottom:5px"><b>${esc(x.line.speaker)}:</b> ${esc(x.line.text)}</div><select id="dlgGap-${gi}" class="f-input" dir="ltr" style="text-align:left;max-width:560px"><option value="">Choose …</option>${gapOptions.map(op => `<option value="${esc(op)}">${esc(op)}</option>`).join("")}</select><div id="dlgGapWhy-${gi}" class="why-box" style="display:none;margin-top:6px"></div></div>`).join("")}
      <button class="btn btn-primary btn-sm" onclick="dlgCheckGaps()">تحقق من الفراغات</button><div id="dlgGapResult" style="margin-top:9px"></div>` : ""}

      <h4 style="margin-top:18px">📝 ${gaps.length >= 3 ? "4" : "3"}) كتابة إنتاجية</h4><p>${esc(d.writePromptAr)}</p>
      <div dir="ltr" style="text-align:left" class="why-box">${esc(d.writeStarter)}</div>
      <textarea id="dlgFreeWriting" class="f-input" dir="ltr" style="text-align:left;min-height:130px" oninput="dlgSaveWriting()" placeholder="Write here …">${esc(savedWriting)}</textarea>
      <small id="dlgWordCount">0 كلمة — محفوظ محلياً على هذا الجهاز أثناء الكتابة</small>
      <div class="dlg-checks">${["استخدمت عبارة مفتاحية من الحوار", "كل جملة تبدأ بحرف كبير وتنتهي بعلامة مناسبة", "راجعت الأفعال والاختصارات (I'll / don't) عند وجودها", "أعدت قراءة النص بصوت مرتفع مرة واحدة"].map((c, i) => `<label><input type="checkbox" data-dlg-write-check="${i}"> ${c}</label>`).join("")}</div>
      <button class="btn btn-primary btn-sm" onclick="dlgCompleteWriting()">حفظ وإكمال التحقق الذاتي</button><div id="dlgWritingResult" style="margin-top:9px"></div>
    </div>

    <div data-dlg-mode="speak" class="dlg-mode-panel" style="display:${DLG.mode === "speak" ? "" : "none"}">
      <p><strong>مهمة التحدث:</strong> ${esc(d.speakPromptAr)}</p>
      <h4>🔁 ظلّل وسجّل سطراً</h4>
      <label>اختر سطر التدريب <select class="f-input" dir="ltr" style="text-align:left" onchange="dlgSetSpeakLine(this.value)">${d.lines.map((l, i) => `<option value="${i}" ${DLG.speakLine === i ? "selected" : ""}>${i + 1}. ${esc(l.speaker)} — ${esc(dlgLineDisplayText(l))}</option>`).join("")}</select></label>
      <div id="dlgSpeakLineText" dir="ltr" style="text-align:left" class="why-box"></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="btn btn-ghost btn-sm" onclick="dlgModelLine()">🔊 اسمع النموذج المولّد</button><button class="btn btn-primary btn-sm" id="dlgRecordBtn" onclick="dlgRecordToggle()">🎙️ بدء تسجيل صوتي محلي</button><button class="btn btn-ghost btn-sm" onclick="dlgDiscardRecording()">🗑️ حذف التسجيل</button></div>
      <p id="dlgRecordStatus" class="dlg-muted">التسجيل يبقى في جلسة المتصفح ولا يُرفع؛ لا توجد درجة نطق آلية أو ادعاء تقييم صوتي.</p>
      <audio id="dlgRecordAudio" controls preload="none" style="display:none;width:100%"></audio>

      <h4 style="margin-top:18px">🎭 تمثيل دور</h4>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:end"><label>دوري <select class="f-input" dir="ltr" style="text-align:left" onchange="dlgSetRole(this.value)">${roleOptions.map(r => `<option value="${esc(r)}" ${DLG.role === r ? "selected" : ""}>${esc(r)}</option>`).join("")}</select></label><button class="btn btn-primary btn-sm" onclick="dlgStartRolePlay()">▶️ بدء التمثيل</button><button class="btn btn-ghost btn-sm" onclick="dlgStopSpeech(true);dlgRenderRoleStage()">⏹️ إيقاف</button></div>
      <div id="dlgRoleStage" style="margin-top:10px"></div>

      <div class="dlg-checks">${["سمعت النموذج عند 0.8× أو 0.6× قبل الترديد", "قلت كل كلمات السطر دون حذف", "حاولت نبرة السؤال/الدهشة/التحذير بحسب المعنى", "قارنت تسجيلي أو أدائي بالنموذج مرة ثانية"].map((c, i) => `<label><input type="checkbox" data-dlg-speak-check="${i}"> ${c}</label>`).join("")}</div>
      <button class="btn btn-primary btn-sm" onclick="dlgCompleteSpeaking()">إكمال تحقق التحدث الذاتي</button><div id="dlgSpeakingResult" style="margin-top:9px"></div>
    </div>
  </section>`;
}
function dlgSpeakFocus(encoded) {
  try {
    const text = decodeURIComponent(encoded);
    if (!("speechSynthesis" in window)) { dlgStatus("⚠️ النطق المولّد غير مدعوم على هذا الجهاز."); return; }
    dlgStopSpeech(false);
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-GB"; u.rate = DLG.rate; u.pitch = 1;
    speechSynthesis.speak(u);
  } catch (e) { dlgStatus("⚠️ تعذّر نطق العبارة."); }
}
function vDialogues() {
  const all = typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES;
  const list = all.filter(d => DLG.unitFilter === "all" || d.unit === Number(DLG.unitFilter));
  const selected = list.find(d => d.id === DLG.selectedId) || null;
  const units = [1, 2, 3, 4, 5, 6, 7];
  const counts = units.map(u => all.filter(d => d.unit === u).length);
  const totalLines = all.reduce((a, d) => a + d.lines.length, 0);
  return `<div class="page-head"><h2>🎙️ مختبر حوارات كتاب الطالب</h2>
    <p>حوارات ومحادثات مصورة وقصص حوارية من Pupil's Book، مرتبطة بكل خطوة، مع صوت مولّد من الجهاز بثلاث سرعات وأنشطة قراءة واستماع وكتابة وتحدث لكل حوار.</p></div>
  <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr)">
    <div class="kpi"><span class="k-ic" style="background:#e8f2fe">💬</span><strong>${all.length}</strong><small>مدخلاً حوارياً منسوخاً بصرياً (Units 1–7)</small></div>
    <div class="kpi"><span class="k-ic" style="background:#e6f7ef">🧾</span><strong>${totalLines}</strong><small>سطر راوٍ/لافتة/حوار في البيانات</small></div>
    <div class="kpi"><span class="k-ic" style="background:#fdf2d5">🔊</span><strong>0.6 · 0.8 · 1.0</strong><small>سرعات النطق المولّد من الجهاز</small></div>
    <div class="kpi"><span class="k-ic" style="background:#fde8e8">🎧</span><strong>0</strong><small>رابط Drive موثّق ملحق بحوار حتى الآن</small></div>
  </div>
  <div class="why-box"><b>حدود المصدر والصوت:</b> يغطي <span dir="ltr">${esc(DIALOGUE_SOURCE.newFile)}</span> مطبوعاً ص1 وص3–44 (ص2 غائبة)، ويغطي <span dir="ltr">${esc(DIALOGUE_SOURCE.part2File)}</span> الصفحات المطبوعة 45–77 للوحدات 5–7 (المطبوعة = صفحة PDF + 44). استُخدم OCR في الملفين لتحديد الصفحات فقط ثم قُرئت الصور بصرياً. كل النصوص <b>بانتظار مراجعة بشرية ثانية وليست Verified</b>. لم يُربط أي تسجيل Drive لأن التسجيلات لم تُسمع وتُقارن بالمحتوى؛ أرقام CS هي مراجع TB للمراجعة المستقبلية، لا مطابقة. الصوت البديل هنا نطق جهاز مولّد عند الضغط، لا أصل الكتاب ولا ملفات MP3 مخزنة.</div>
  <div class="panel" style="margin-bottom:15px"><h3>🗺️ التغطية حسب الوحدة</h3>
    <div style="display:flex;gap:7px;flex-wrap:wrap">${units.map((u, i) => `<span class="badge" style="background:${counts[i] ? "#e6f7ef" : "#f3f4f6"};color:${counts[i] ? "#08764d" : "#6b7280"}">Unit ${u}: ${counts[i]} ${counts[i] ? "مدخلات" : "لم تُنسخ بعد"}</span>`).join("")}</div>
    <small>لم تُحتسب الأغاني والرسائل والمذكرات وجداول الاستبدال والنصوص الوصفية أحادية المتكلم حوارات. لم يُحتسب نشاط PB4 «Who is talking?» حواراً لأنه 8 عبارات لتعيين المتكلم، ولا فقاعات PB8 المجزأة حواراً متماسكاً لغياب أسماء/تسلسل مطبوع واضح للمتحدثين. وفي الجزء الثاني استُبعدت أيضاً أغاني ص52/62/71 وملخصات ص58/67/77 ونصوص وصفية مثل PB65 وPB76. حوار الاستبدال في WB للخطوة 3.11 خارج ملفات PB هذه ولم يُنسخ بعد.</small>
  </div>
  <div class="filters">${["all", ...units].map(u => `<button class="chip-filter ${String(DLG.unitFilter) === String(u) ? "active" : ""}" onclick="dlgSetUnitFilter('${u}')">${u === "all" ? "الكل" : `Unit ${u}`}</button>`).join("")}</div>
  ${list.length ? `<div class="lessons-grid">${list.map(dlgCardHTML).join("")}</div>` : `<div class="empty-state"><div class="e-ic">🎙️</div><strong>لا حوارات منسوخة في هذه الوحدة بعد</strong><p>لا توجد مدخلات مطابقة لهذا التصفية في البيانات المنسوخة بصرياً حالياً؛ لن تُضاف حوارات جديدة إلا بعد فحص صور صفحات مصدرها.</p></div>`}
  ${selected ? dlgDetailHTML(selected) : ""}`;
}
function stepDialogueHTML(unitNo, stepRef) {
  const list = dialoguesForStep(stepRef).filter(d => d.unit === unitNo);
  if (!list.length) return "";
  return `<div class="panel" style="margin-bottom:16px"><h3>🎙️ حوار كتاب الطالب ومختبر المهارات الأربع</h3>
    <p style="color:var(--muted);font-size:13.5px">النص التالي منسوخ بصرياً من PB وبانتظار مراجعة بشرية ثانية. الصوت المتاح نطق مولّد من الجهاز عند الضغط بسرعات 0.6/0.8/1.0، لا تسجيل الكتاب؛ ولا يوجد رابط Drive موثّق لهذه الخطوة حتى تُسمع التسجيلات وتُقارن.</p>
    ${list.map(d => `<div class="continue-card" style="align-items:flex-start"><span class="c-ic" style="background:#e8f2fe">${esc(d.icon || "💬")}</span>
      <div style="flex:1"><strong dir="ltr" style="text-align:left;display:block">${esc(d.title)}</strong>
      <small><span dir="ltr">${esc(d.printedPages)} · Exercise ${esc(d.exercise)}</span> · ${d.lines.length} سطراً · قراءة/استماع/كتابة/تحدث</small>
      <div style="margin-top:6px">${typeof srcBadge === "function" ? srcBadge(d.status) : ""}</div></div>
      <div style="display:flex;flex-direction:column;gap:6px"><button class="btn btn-primary btn-sm" onclick="openDialogueLab('${d.id}','listen')">🎧 استمع وتدرب ←</button><button class="btn btn-ghost btn-sm" onclick="openDialogueLab('${d.id}','speak')">🎤 تمثيل دور</button></div></div>`).join("")}
  </div>`;
}
function dlgDownloadDialogue() {
  const d = dlgCurrent();
  const text = [
    "Madrasati Yemen — Book Dialogue Lab", "=".repeat(42),
    `${d.title} — Unit ${d.unit}, Exercise ${d.exercise}, stepRef ${d.stepRef}`,
    `Source: ${d.printedPages}; ${d.pdfPages}`,
    `Status: ${d.status} (not Verified)`,
    `Audio: generated device Text-to-Speech at 0.6/0.8/1.0 only; no verified Drive recording is attached. TB cassette reference for future listening review: ${d.csRefs}.`,
    `Source note: ${d.sourceNote}`,
    `Picture context (platform description): ${d.pictureContextAr}`,
    "", "Dialogue (gap completions, where shown, are practice suggestions, not printed text):",
    ...d.lines.map((l, i) => `${i + 1}. ${l.speaker}: ${dlgLineDisplayText(l)}${l.completedText && !DLG.showCompleted ? ` [Practice completion: ${l.completedText}]` : ""}`),
    "", "Platform-created comprehension questions:",
    ...d.questions.map((q, i) => `${i + 1}. ${q.q}\n   ${q.options.map((o, j) => `${String.fromCharCode(65 + j)}. ${o}`).join("  ")}\n   Answer: ${q.options[q.a]} — ${q.why}`),
    "", `Writing task (platform-created): ${d.writePromptAr}`, `Starter: ${d.writeStarter}`,
    `Speaking task (platform-created): ${d.speakPromptAr}`, ""
  ].join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\ufeff" + text], { type: "text/plain;charset=utf-8" }));
  a.download = `${d.id}-dialogue-lab.txt`; a.click(); URL.revokeObjectURL(a.href);
  if (typeof toast === "function") toast("📥 نُزّل الحوار وأنشطته مع حدود المصدر والصوت");
}

/* ===== Dialogue-derived quizzes and homework (platform-created) =====
   These builders reuse the visually transcribed dialogue lines and the
   platform questions already attached to each entry. They never attach a
   Drive file and never present generated grammar/homework as PB text. */
const DLG_ASSESSMENT_SPEEDS = [0.6, 0.8, 1];
function dlgTrainingText(line) { return line ? (line.completedText || line.text || "") : ""; }
function dlgTrainingSpeechText(line) {
  if (!line) return "";
  if (line.completedText) return line.completedText;
  if (line.speechText) return line.speechText;
  return String(line.text || "").replace(/_+/g, "").replace(/\s+\./g, ".").trim();
}
function dlgSeedNumber(text) { return Math.abs([...String(text || "")].reduce((a, c) => ((a * 31) + c.charCodeAt(0)) | 0, 7)); }
function dlgGrammarCloze(d) {
  const lineIndex = Number.isInteger(d.keyLine) ? d.keyLine : 0;
  const line = d.lines[lineIndex] || d.lines[0] || {};
  const source = dlgTrainingText(line);
  const groups = [
    { id: "possessive", labelAr: "ضمير أو صفة ملكية", words: ["mine", "yours", "his", "hers", "ours", "theirs", "my", "your", "her", "our", "their"] },
    { id: "auxiliary", labelAr: "فعل مساعد أو صيغة زمن/نفي", words: ["shall", "will", "would", "can", "could", "must", "don't", "doesn't", "didn't", "isn't", "aren't", "can't", "won't", "I've", "I'll", "I'm", "you're", "we'll", "do", "does", "did", "is", "are", "was", "were", "have", "has", "had", "am"] },
    { id: "preposition", labelAr: "حرف جر", words: ["from", "to", "in", "on", "at", "under", "over", "behind", "near", "with", "for", "about", "into", "after", "before"] },
    { id: "determiner", labelAr: "أداة تعريف أو كمية", words: ["the", "a", "an", "some", "any"] },
    { id: "question", labelAr: "كلمة استفهام", words: ["why", "what", "where", "when", "who", "whose", "which", "how"] },
    { id: "pronoun", labelAr: "ضمير", words: ["I", "you", "he", "she", "it", "we", "they", "me", "him", "them", "us"] }
  ];
  const tokens = [...source.matchAll(/[A-Za-z]+(?:'[A-Za-z]+)?/g)].map(m => ({ word: m[0], index: m.index }));
  for (const allowFirst of [false, true]) {
    for (const group of groups) {
      const found = tokens.find((t, i) => (allowFirst || i > 0) && group.words.some(w => w.toLowerCase() === t.word.toLowerCase()));
      if (!found) continue;
      const seed = dlgSeedNumber(d.id + found.word + group.id);
      const distractors = group.words.filter(w => w.toLowerCase() !== found.word.toLowerCase());
      const picks = [];
      for (let k = 0; k < distractors.length && picks.length < 2; k++) {
        const pick = distractors[(seed + k) % distractors.length];
        if (pick && !picks.includes(pick)) picks.push(pick);
      }
      const options = [...picks];
      const answerAt = seed % 3;
      options.splice(answerAt, 0, found.word);
      const prompt = source.slice(0, found.index) + "____" + source.slice(found.index + found.word.length);
      return {
        q: `Grammar — choose the exact missing word from the book line: “${prompt}”`,
        options, a: answerAt,
        why: `كلمة سطر الكتاب هي «${found.word}» (${group.labelAr}). راجع السطر ${lineIndex + 1} كاملاً: ${source}`,
        skill: "grammar", dialogueId: d.id, audioLineIndex: lineIndex, audioMode: "line",
        grammar: { answer: found.word, category: group.id, labelAr: group.labelAr, lineIndex, source }
      };
    }
  }
  return null;
}
function dlgSequenceQuestion(d) {
  if (!d.lines.length) return null;
  const isPrintedLine = line => line && !line.completedText && !/^(?:_+|\.{3,})$/.test(String(line.text || "").trim());
  const desiredIndex = Math.max(1, Math.min(Number.isInteger(d.keyLine) ? d.keyLine : 1, d.lines.length - 1));
  const candidateOrder = [desiredIndex, ...d.lines.map((_, i) => i).filter(i => i >= 1 && i !== desiredIndex)];
  let answerIndex = candidateOrder.find(i => isPrintedLine(d.lines[i - 1]) && isPrintedLine(d.lines[i]));
  let usesPracticeCompletion = false;
  if (!Number.isInteger(answerIndex)) {
    // E.g. PB Exercise 4.8 leaves every John reply as a printed blank. The fallback
    // may use the platform completions only when the question labels them as such.
    answerIndex = desiredIndex;
    usesPracticeCompletion = true;
  }
  const prev = d.lines[answerIndex - 1], answer = d.lines[answerIndex];
  const correct = dlgTrainingText(answer);
  const pool = [...new Set(d.lines.filter((line, i) => i !== answerIndex && (usesPracticeCompletion || isPrintedLine(line))).map(dlgTrainingText).filter(x => x && x !== correct))];
  const seed = dlgSeedNumber(d.id + ":sequence:" + answerIndex);
  const options = [];
  for (let k = 0; k < pool.length && options.length < 2; k++) {
    const pick = pool[(seed + k) % pool.length];
    if (!options.includes(pick)) options.push(pick);
  }
  (d.focus || []).forEach(x => { if (options.length < 2 && x && x !== correct && !options.includes(x)) options.push(x); });
  while (options.length < 2) options.push(options.length ? "Thank you." : "OK.");
  const answerAt = seed % 3;
  options.splice(answerAt, 0, correct);
  return {
    q: usesPracticeCompletion
      ? `Writing / sequence — the book leaves some replies blank. In the platform's clearly labelled practice-completed version, after ${prev.speaker} says: “${dlgTrainingText(prev)}” Which line comes next?`
      : `Writing / sequence — after ${prev.speaker} says: “${dlgTrainingText(prev)}” Which exact line comes next?`,
    options, a: answerAt,
    why: usesPracticeCompletion
      ? `في نسخة الإكمال التدريبي الموسومة صراحة (لا كنص مطبوع داخل فراغات الكتاب)، السطر التالي هو سطر ${answer.speaker}: ${correct}`
      : `السطر التالي في ترتيب الحوار هو سطر ${answer.speaker}: ${correct}`,
    skill: "writing", dialogueId: d.id, audioLineIndex: answerIndex, audioMode: "line", practiceCompletionSequence: usesPracticeCompletion
  };
}
function dlgQuizForDialogue(d) {
  const skillCycle = ["listening", "reading", "listening", "reading"];
  const questions = (d.questions || []).map((q, i) => ({
    ...q,
    q: `${skillCycle[i % skillCycle.length] === "listening" ? "🎧 Listening" : "📖 Reading"} — ${q.q}`,
    skill: skillCycle[i % skillCycle.length], dialogueId: d.id,
    audioLineIndex: Number.isInteger(d.keyLine) ? d.keyLine : 0,
    audioMode: i === 0 ? "full" : "line"
  }));
  const grammar = dlgGrammarCloze(d); if (grammar) questions.push(grammar);
  const sequence = dlgSequenceQuestion(d); if (sequence) questions.push(sequence);
  return {
    id: `dlgquiz-${d.id}`,
    title: `اختبار مهارات من حوار: ${d.title}`,
    subject: "english", grade: 8, mins: Math.max(6, questions.length * 2),
    dialogueId: d.id, stepRef: d.stepRef, unit: d.unit,
    sourceNote: `اختبار منصة مولّد من أسطر وأسئلة الحوار ${d.printedPages}؛ النص بانتظار مراجعة بشرية ثانية والصوت TTS من الجهاز فقط.`,
    questions
  };
}
function dialogueQuizCatalog() { return (typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES).map(dlgQuizForDialogue); }
function dlgHomeworkTasks(d) {
  const keyIndex = Number.isInteger(d.keyLine) ? d.keyLine : 0;
  const keyLine = d.lines[keyIndex] || d.lines[0] || {};
  const keyText = dlgTrainingText(keyLine);
  const grammar = dlgGrammarCloze(d);
  return [
    { skill: "listening", icon: "🎧", title: "الاستماع", text: `استمع إلى الحوار كاملاً عند 1.0×، ثم أعد السطر ${keyIndex + 1} عند 0.6× و0.8×. اكتب معلومتين سمعتهما في سطر الدليل: “${keyText}”.` },
    { skill: "speaking", icon: "🎙️", title: "النطق والتحدث", text: `ظلّل سطر ${keyLine.speaker || "المتحدث"} ثلاث مرات (0.6× ثم 0.8× ثم 1.0×): “${keyText}”. ${d.speakPromptAr} التسجيل الذاتي اختياري ومحلي ولا توجد درجة نطق آلية.` },
    { skill: "writing", icon: "✍️", title: "الكتابة والإملاء", text: `اكتب السطر المفتاحي من الاستماع دون النظر: “${keyText}”. ثم أكمل مهمة الكتابة: ${d.writePromptAr} بداية مقترحة: ${d.writeStarter}` },
    { skill: "grammar", icon: "🧩", title: "القواعد", text: grammar ? `حدّد «${grammar.grammar.answer}» (${grammar.grammar.labelAr}) في السطر: “${grammar.grammar.source}”. انسخ النمط ثم اكتب جملة جديدة صحيحة تستخدم الكلمة نفسها. عبارات للمراجعة: ${(d.focus || []).join(" · ")}` : `راجع الأنماط المفتاحية واستخدم واحداً منها في جملة جديدة: ${(d.focus || []).join(" · ")}` }
  ];
}
function dialogueHomeworkCatalog() {
  return (typeof BOOK_DIALOGUES === "undefined" ? [] : BOOK_DIALOGUES).map(d => ({
    id: `dlghw-${d.id}`, dialogueId: d.id, unit: d.unit, stepRef: d.stepRef,
    title: `واجب مهارات من حوار: ${d.title}`,
    due: "قبل الحصة التالية — يحدد المعلم التاريخ",
    tasks: dlgHomeworkTasks(d)
  }));
}
function dlgHomeworkDoneMap() {
  try { return JSON.parse(localStorage.getItem("madrasati_dialogue_homework_v1") || "{}") || {}; } catch (e) { return {}; }
}
function dlgIsHomeworkDone(dialogueId) { return !!dlgHomeworkDoneMap()[dialogueId]; }
function dlgToggleHomework(dialogueId) {
  const map = dlgHomeworkDoneMap();
  map[dialogueId] = !map[dialogueId];
  try { localStorage.setItem("madrasati_dialogue_homework_v1", JSON.stringify(map)); } catch (e) {}
  if (typeof toast === "function") toast(map[dialogueId] ? "✅ عُلّم واجب الحوار كمكتمل محلياً" : "تم إلغاء تعليم واجب الحوار");
  if (typeof navigate === "function" && typeof state !== "undefined" && state.view === "homework") navigate("homework");
}
function dlgDownloadHomework(dialogueId) {
  const d = dlgById(dialogueId); if (!d) return;
  const grammar = dlgGrammarCloze(d);
  const text = [
    "Madrasati Yemen — Dialogue Skills Homework (platform-created)", "=".repeat(56),
    `${d.title} — Unit ${d.unit}, Exercise ${d.exercise}, stepRef ${d.stepRef}`,
    `Pupil's Book source: ${d.printedPages}; ${d.pdfPages}`,
    `Transcription status: ${d.status} (not Verified)`,
    "Audio instruction: use generated device Text-to-Speech at 0.6 / 0.8 / 1.0 in the Dialogue Lab, Companion or animated scene. This is not the original book recording and no Drive track is attached.",
    "", "Homework tasks:",
    ...dlgHomeworkTasks(d).map((t, i) => `${i + 1}. ${t.title}: ${t.text}`),
    "", "Key phrases:", ...(d.focus || []).map(x => `- ${x}`),
    grammar ? `\nGrammar check (platform-generated from a book line): ${grammar.q}\nOptions: ${grammar.options.join(" | ")}\nAnswer: ${grammar.options[grammar.a]}` : "",
    "", "Student self-check: listening □  speaking □  writing □  grammar □", ""
  ].join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\ufeff" + text], { type: "text/plain;charset=utf-8" }));
  a.download = `${d.id}-skills-homework.txt`; a.click(); URL.revokeObjectURL(a.href);
  if (typeof toast === "function") toast("📥 نُزّلت ورقة واجب مهارات الحوار");
}
function dlgQuizSpeak(dialogueId, lineIndex, full) {
  const d = dlgById(dialogueId); if (!d) return;
  DLG.selectedId = d.id;
  const rateEl = document.getElementById("dlgQuizRate");
  if (rateEl) DLG.rate = DLG_ASSESSMENT_SPEEDS.includes(Number(rateEl.value)) ? Number(rateEl.value) : 1;
  dlgSpeakLine(full ? 0 : Math.max(0, Math.min(Number(lineIndex) || 0, d.lines.length - 1)), { continuous: !!full });
}
function dialogueQuizSectionHTML() {
  const quizzes = dialogueQuizCatalog(); if (!quizzes.length) return "";
  const byUnit = [1, 2, 3, 4, 5, 6, 7].map(u => quizzes.filter(q => q.unit === u));
  return `<section class="panel" style="margin-top:18px"><h3>🎙️ اختبارات مهارات مولّدة من حوارات كتاب الطالب (${quizzes.length})</h3>
    <p style="color:var(--muted);font-size:14.5px">لكل حوار اختبار منصة من أسئلة فهم الحوار نفسها + سؤال قواعد من سطر كتابي وسؤال تسلسل/كتابة. أسئلة الاستماع والقواعد تتضمن زر نطق جهاز بسرعات <b dir="ltr">0.6 / 0.8 / 1.0</b>؛ الصوت ليس تسجيل PB ولا Drive. النصوص ما تزال بانتظار مراجعة بشرية ثانية.</p>
    ${byUnit.map((list, i) => list.length ? `<details ${i === 0 ? "open" : ""} style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:800;color:var(--navy)">Unit ${i + 1} — ${list.length} اختبارات حوار</summary>
      <div style="margin-top:10px">${list.map(q => { const d = dlgById(q.dialogueId); const best = (typeof store !== "undefined" && store.quizScores) ? store.quizScores[q.id] : undefined; return `<div class="quiz-card"><span class="q-ic" style="background:#e8f2fe">${esc(d.icon || "💬")}</span><div style="flex:1"><h4>${esc(q.title)}</h4><small><span dir="ltr">${esc(d.printedPages)} · Exercise ${esc(d.exercise)}</span> · ${q.questions.length} أسئلة · فهم/استماع/قراءة + قواعد + تسلسل كتابة${best !== undefined ? ` · أفضل نتيجة: ${best}/${q.questions.length}` : ""}</small></div><div style="display:flex;gap:7px;flex-wrap:wrap"><button class="btn btn-ghost btn-sm" onclick="openDialogueLab('${d.id}','listen')">راجع الحوار</button><button class="btn btn-primary btn-sm" onclick="startQuiz('${q.id}')">ابدأ الاختبار ←</button></div></div>`; }).join("")}</div></details>` : "").join("")}
  </section>`;
}
function dialogueHomeworkSectionHTML() {
  const packs = dialogueHomeworkCatalog(); if (!packs.length) return "";
  const done = packs.filter(p => dlgIsHomeworkDone(p.dialogueId)).length;
  return `<section class="panel" style="margin-top:18px"><h3>📚 واجبات تدريبية من حوارات كتاب الطالب (${packs.length})</h3>
    <p style="color:var(--muted);font-size:14.5px">أكملت محلياً ${done} من ${packs.length} حزم. كل حزمة منصة التحضير وتربط أربع مهارات: استماع بسرعات 0.6/0.8/1.0، نطق وتحدث، إملاء وكتابة، وقواعد من سطر الحوار نفسه. التاريخ الفعلي يحدده المعلم؛ التعليم هنا حفظ محلي على الجهاز.</p>
    ${[1, 2, 3, 4, 5, 6, 7].map(u => { const list = packs.filter(p => p.unit === u); return list.length ? `<details style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:800;color:var(--navy)">Unit ${u} — ${list.length} حزم واجب حوار</summary><div class="task-list" style="margin-top:10px">${list.map(p => { const d = dlgById(p.dialogueId), isDone = dlgIsHomeworkDone(p.dialogueId); return `<div class="task-item ${isDone ? "done" : ""}" style="align-items:flex-start"><button class="task-check" onclick="dlgToggleHomework('${p.dialogueId}')" title="تعليم كمنجز محلياً">${isDone ? "✓" : ""}</button><span class="k-ic" style="background:#e8f2fe;width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:20px">${esc(d.icon || "💬")}</span><div style="flex:1"><strong>${esc(p.title)}</strong><small style="display:block"><span dir="ltr">${esc(d.printedPages)} · Exercise ${esc(d.exercise)}</span> · ${esc(p.due)}</small><details style="margin-top:6px"><summary style="cursor:pointer">عرض مهام المهارات الأربع</summary><ul class="objectives" style="margin-top:7px">${p.tasks.map(t => `<li>${t.icon} <b>${esc(t.title)}:</b> ${esc(t.text)}</li>`).join("")}</ul></details><div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px"><button class="btn btn-primary btn-sm" onclick="openDialogueLab('${d.id}','listen')">افتح التدريب</button><button class="btn btn-ghost btn-sm" onclick="dlgDownloadHomework('${d.id}')">📥 ورقة الواجب</button><button class="btn btn-ghost btn-sm" onclick="startQuiz('dlgquiz-${d.id}')">✍️ اختبار الحوار</button></div></div><span class="due ${isDone ? "done-due" : ""}">${isDone ? "مكتمل محلياً ✓" : "⏰ " + esc(p.due)}</span></div>`; }).join("")}</div></details>` : ""; }).join("")}
  </section>`;
}
function dlgTrainingLinksHTML(d) {
  return `<div class="why-box" style="margin-top:12px"><b>🔗 تدرب على هذا الحوار نفسه أيضًا:</b>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:9px">
      <button class="btn btn-primary btn-sm" onclick="dlgStopSpeech(false);if(typeof openBookDialogueCompanion==='function')openBookDialogueCompanion('${d.id}')">🤖 رفيق اللغة — تبادل أدوار</button>
      <button class="btn btn-ghost btn-sm" onclick="dlgStopSpeech(false);if(typeof openScene==='function')openScene('scene-${d.id}')">🎬 المشهد المتحرك للحوار</button>
      <button class="btn btn-ghost btn-sm" onclick="dlgStopSpeech(false);if(typeof startQuiz==='function')startQuiz('dlgquiz-${d.id}')">✍️ اختبار مهارات الحوار</button>
      <button class="btn btn-ghost btn-sm" onclick="dlgDownloadHomework('${d.id}')">📚 تنزيل واجب المهارات</button>
    </div><small>كلها تستخدم نص الحوار نفسه ونطق جهاز مولّدًا عند الضغط بسرعات 0.6/0.8/1.0؛ لا يوجد تسجيل Drive مرتبط أو درجة نطق آلية.</small></div>`;
}

if (typeof window !== "undefined") {
  window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { dialogues: vDialogues });
}
