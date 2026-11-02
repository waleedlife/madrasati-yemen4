/* ===== مدرستي اليمن — منطق التطبيق ===== */
"use strict";
const LS_KEY = "madrasati_yemen_v1";
let store = loadStore();
let state = {
  user: null, role: null, view: "dashboard", loginRole: "student",
  lessonFilter: { grade: "all", subject: "all", q: "" },
  currentLesson: null, playerTimer: null, playerPct: 0,
  quiz: null, quizIdx: 0, quizScore: 0, quizAnswered: false,
  chatId: DB.contacts[0].id, childIdx: 0
};

function loadStore() {
  try { const r = JSON.parse(localStorage.getItem(LS_KEY)); if (r && typeof r === "object") return Object.assign(defStore(), r); }
  catch (e) {}
  return defStore();
}
function defStore() { return { doneLessons: [], quizScores: {}, doneHW: [], addedLessons: [], extraMsgs: {}, pointsBonus: 0, engDoneSteps: [], activityAttempts: [], customActivities: [], studioDrafts: [], audioLinks: {} }; }
function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {} }
function allLessons() { return DB.lessons.concat(store.addedLessons); }
function subjectOf(id) { return DB.subjects.find(s => s.id === id) || DB.subjects[0]; }
function gradeLabel(n) { const g = DB.grades.find(x => x.n === Number(n)); return g ? "الصف " + g.label : "الصف " + n; }
function arNum(n) { return Number(n).toLocaleString("ar-EG"); }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function toast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.classList.remove("hidden"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.add("hidden"), 3400); }
function $(id) { return document.getElementById(id); }

/* ---------- واجهة الموقع ---------- */
function lessonCard(l, inApp) {
  const s = subjectOf(l.subject), done = store.doneLessons.includes(l.id);
  const open = inApp ? `openLesson(${l.id})` : `previewLesson(${l.id})`;
  return `<article class="lesson-card" onclick="${open}">
    <div class="lesson-thumb" style="background:linear-gradient(120deg,${s.color},${s.color}cc)">
      <span class="t-grade">${esc(gradeLabel(l.grade))}</span><span class="t-icon">${s.icon}</span>
      ${done ? '<span class="lesson-done-badge">✓ مكتمل</span>' : ""}${l.unverified ? '<span class="lesson-done-badge" style="background:var(--amber)">⏳ بانتظار التحقق من المصدر</span>' : ""}
    </div>
    <div class="lesson-body"><h4>${esc(l.title)}</h4><p>${esc(l.desc)}</p>
      <div class="lesson-meta"><span>📚 ${esc(s.name)}</span><span>⏱️ ${arNum(l.mins)} دقيقة</span><span><b>★</b> ${arNum(l.rating)}</span><span>👁️ ${esc(l.views)}</span></div>
    </div></article>`;
}
function renderLanding() {
  $("gradeStrip").innerHTML = DB.grades.map(g =>
    `<button class="grade-chip" onclick="goGrade(${g.n})">الصف ${esc(g.label)}<small>${esc(g.stage)}</small></button>`).join("");
  $("subjectsGrid").innerHTML = DB.subjects.map(s =>
    `<div class="subject-card" onclick="goSubject('${s.id}')"><div class="s-icon" style="background:${s.color}1c">${s.icon}</div><h4>${esc(s.name)}</h4><small>${arNum(s.lessons)} درساً</small></div>`).join("");
  const featured = allLessons().slice().sort((a, b) => b.rating - a.rating).slice(0, 6);
  $("featuredLessons").innerHTML = featured.map(l => lessonCard(l, false)).join("");
  $("quotesGrid").innerHTML = DB.testimonials.map(t =>
    `<div class="quote-card"><div class="q-mark">”</div><p>${esc(t.text)}</p><strong>${esc(t.name)}</strong><small>${esc(t.meta)}</small></div>`).join("");
  $("newsGrid").innerHTML = DB.news.map(n =>
    `<article class="news-card"><div class="news-top"><span class="tag">${esc(n.tag)}</span><time>${esc(n.date)}</time></div><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p></article>`).join("");
  animateCounts();
}
function animateCounts() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || ""; let v = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const iv = setInterval(() => { v += step; if (v >= target) { v = target; clearInterval(iv); } el.textContent = arNum(v) + suffix; }, 24);
  });
}
function goGrade(n) { state.lessonFilter = { grade: String(n), subject: "all", q: "" }; loginAs("student"); navigate("lessons"); toast("عرض دروس " + gradeLabel(n)); }
function goSubject(id) { state.lessonFilter = { grade: "all", subject: id, q: "" }; loginAs("student"); navigate("lessons"); toast("عرض دروس " + subjectOf(id).name); }
function previewLesson(id) {
  const l = allLessons().find(x => x.id === id); if (!l) return;
  const s = subjectOf(l.subject);
  $("genericModalBody").innerHTML = `
    <button class="modal-close" onclick="closeGeneric()">✕</button>
    <div class="lesson-thumb" style="background:linear-gradient(120deg,${s.color},${s.color}cc);border-radius:16px;margin-bottom:16px">
      <span class="t-grade">${esc(gradeLabel(l.grade))} · ${esc(l.term)}</span><span class="t-icon">${s.icon}</span></div>
    <h3 style="font-size:22px;color:var(--navy)">${esc(l.title)}</h3>
    <p style="color:var(--muted);margin:8px 0 4px">${esc(l.desc)}</p>
    <div class="lesson-meta" style="border:0;padding:0;margin:10px 0 16px"><span>👩‍🏫 ${esc(l.teacher)}</span><span>📚 ${esc(s.name)}</span><span>⏱️ ${arNum(l.mins)} دقيقة</span><span>★ ${arNum(l.rating)}</span></div>
    <h4 style="color:var(--navy);margin-bottom:8px">🎯 أهداف الدرس</h4>
    <ul class="objectives" style="margin-bottom:20px">${l.objectives.map(o => `<li>✔️ ${esc(o)}</li>`).join("")}</ul>
    <button class="btn btn-primary full" onclick="closeGeneric();loginAs('student');setTimeout(()=>openLesson(${l.id}),60)">سجّل دخولك وابدأ الدرس مجاناً ←</button>`;
  $("genericModal").classList.remove("hidden");
}
function closeGeneric() { $("genericModal").classList.add("hidden"); stopPlayer(); }

/* ---------- الدخول ---------- */
function openLogin(role) {
  if (role) state.loginRole = role;
  syncLoginRole(); $("loginModal").classList.remove("hidden");
}
function closeLogin() { $("loginModal").classList.add("hidden"); }
function syncLoginRole() {
  document.querySelectorAll("#loginRoles button").forEach(b => b.classList.toggle("active", b.dataset.role === state.loginRole));
  $("loginUser").value = DB.users[state.loginRole].id;
  const lbl = $("loginUser").closest("label");
  const names = { student: "رقم الطالب", teacher: "رقم المعلم", parent: "رقم ولي الأمر", admin: "اسم مستخدم الإدارة" };
  lbl.childNodes[0].textContent = names[state.loginRole] + " ";
}
function submitLogin(e) { e.preventDefault(); closeLogin(); loginAs(state.loginRole); }
document.querySelectorAll("#loginRoles button").forEach(b =>
  b.addEventListener("click", () => { state.loginRole = b.dataset.role; syncLoginRole(); }));

const NAVS = {
  student: [["dashboard", "🏠", "الرئيسية"], ["lessons", "🎬", "دروسي"], ["english8", "🇬🇧", "الإنجليزية — ثامن"], ["activities", "🎮", "الأنشطة التفاعلية"], ["chatbot", "🤖", "رفيق اللغة"], ["dialogues", "🎙️", "مختبر الحوارات"], ["audio", "🎧", "مكتبة الصوتيات"], ["scenes", "🎬", "المشاهد المتحركة"], ["quizzes", "✍️", "الاختبارات"], ["homework", "📝", "الواجبات", "hwCount"], ["grades", "📊", "درجاتي"], ["schedule", "🗓️", "الجدول الدراسي"], ["attendance", "✅", "الحضور"], ["library", "📚", "المكتبة الرقمية"], ["messages", "✉️", "الرسائل"]],
  teacher: [["dashboard", "🏠", "الرئيسية"], ["classes", "👩‍🎓", "شُعبي وطلابي"], ["lessons", "🎬", "مكتبة الدروس"], ["english8", "🇬🇧", "الإنجليزية — ثامن"], ["dialogues", "🎙️", "مختبر الحوارات"], ["aistudio", "✨", "استوديو المعلم الذكي"], ["audio", "🎧", "فهرس الصوتيات والتحقق"], ["scenes", "🎬", "المشاهد المتحركة"], ["studio", "➕", "إضافة درس جديد"], ["activities", "🎮", "معاينة الأنشطة"], ["quizzes", "✍️", "الاختبارات"], ["homework", "📝", "الواجبات"], ["grades", "📊", "رصد الدرجات"], ["schedule", "🗓️", "الجدول الدراسي"], ["messages", "✉️", "الرسائل"]],
  parent: [["dashboard", "🏠", "الرئيسية"], ["children", "👨‍👧‍👦", "تقارير الأبناء"], ["grades", "📊", "درجات الأبناء"], ["attendance", "✅", "الحضور والغياب"], ["homework", "📝", "واجبات الأبناء"], ["english8", "🇬🇧", "إنجليزية الأبناء (ثامن)"], ["schedule", "🗓️", "الجدول الدراسي"], ["messages", "✉️", "رسائل المعلمين"], ["library", "📚", "المكتبة الرقمية"]],
  admin: [["dashboard", "🏠", "الرئيسية"], ["reports", "🇾🇪", "تقارير المحافظات"], ["classes", "👩‍🎓", "الطلاب"], ["lessons", "🎬", "الدروس"], ["english8", "🇬🇧", "الإنجليزية — ثامن"], ["grades", "📊", "النتائج العامة"], ["schedule", "🗓️", "الجدول الدراسي"], ["studio", "➕", "إضافة درس"], ["messages", "✉️", "الرسائل"]]
};
function loginAs(role) {
  state.role = role; state.user = DB.users[role]; state.view = "dashboard";
  $("landingView").classList.add("hidden"); $("appView").classList.remove("hidden");
  $("sideAvatar").textContent = state.user.avatar; $("topAvatar").textContent = state.user.avatar;
  $("sideName").textContent = state.user.name; $("topName").textContent = state.user.name.split(" ").slice(0, 2).join(" ");
  $("sideMeta").textContent = state.user.meta; $("sideSchool").textContent = state.user.school;
  document.querySelectorAll(".role-chips button").forEach(b => b.classList.toggle("active", b.dataset.role === role));
  buildNav(); navigate("dashboard"); toggleSidebar(false);
  toast("أهلاً بك " + state.user.name + " — لوحة " + state.user.roleLabel);
}
function buildNav() {
  const undoneHW = DB.homework.filter(h => !store.doneHW.includes(h.id)).length;
  $("sideNav").innerHTML = NAVS[state.role].map(([v, ic, label, pill]) =>
    `<button data-view="${v}" onclick="navigate('${v}')"><span class="ic">${ic}</span>${label}${pill && undoneHW ? `<span class="pill">${arNum(undoneHW)}</span>` : ""}</button>`).join("");
  const bottom = NAVS[state.role].filter(([v]) => ["dashboard", "english8", "scenes", "chatbot", "lessons"].includes(v)).slice(0, 5);
  $("bottomNav").innerHTML = bottom.map(([v, ic, label]) =>
    `<button data-view="${v}" onclick="navigate('${v}')"><span>${ic}</span>${label.split(" ")[0]}</button>`).join("");
  markActiveNav();
}
function markActiveNav() {
  document.querySelectorAll("#sideNav button,#bottomNav button").forEach(b => b.classList.toggle("active", b.dataset.view === state.view));
}
function logout() {
  stopPlayer(); state.user = null; state.role = null;
  $("appView").classList.add("hidden"); $("landingView").classList.remove("hidden");
  window.scrollTo(0, 0); toast("تم تسجيل الخروج — إلى اللقاء 👋");
}
function toggleSidebar(open) { $("sidebar").classList.toggle("open", !!open); $("sideOverlay").classList.toggle("show", !!open); }
function toggleNotifs(e) {
  e.stopPropagation(); const p = $("notifPanel");
  p.innerHTML = `<h5>الإشعارات</h5>` + DB.notifications.map(n =>
    `<div class="notif-item"><span style="font-size:19px">${n.icon}</span><div>${esc(n.title)}<small>${esc(n.time)}</small></div></div>`).join("");
  p.classList.toggle("hidden"); $("notifDot").style.display = "none";
}
document.addEventListener("click", e => { const p = $("notifPanel"); if (p && !p.contains(e.target)) p.classList.add("hidden"); });
function globalSearchGo() {
  const q = $("globalSearch").value.trim(); if (!q) return;
  state.lessonFilter = { grade: "all", subject: "all", q }; navigate("lessons");
}

/* ---------- التنقل ---------- */
function navigate(view) {
  if (view !== "dialogues" && view !== "quizzes" && typeof dlgStopSpeech === "function") dlgStopSpeech(false);
  if (view !== "chatbot" && typeof botStopSpeech === "function") botStopSpeech();
  if (view !== "scenes" && typeof sceneStop === "function") sceneStop();
  state.view = view; stopPlayer(); markActiveNav(); toggleSidebar(false);
  const c = $("appContent");
  const views = Object.assign({ dashboard: vDashboard, lessons: vLessons, quizzes: vQuizzes, homework: vHomework, grades: vGrades, schedule: vSchedule, attendance: vAttendance, library: vLibrary, messages: vMessages, studio: vStudio, classes: vClasses, children: vChildren, reports: vReports }, window.EXTRA_VIEWS || {});
  c.innerHTML = views[view] ? views[view]() : vDashboard();
  window.scrollTo(0, 0);
  if (view === "messages") scrollChat();
}
function kpi(ic, bg, val, label, trend) {
  return `<div class="kpi"><div class="k-top"><span class="k-ic" style="background:${bg}">${ic}</span>${trend ? `<span class="trend">${trend}</span>` : ""}</div><strong>${val}</strong><small>${label}</small></div>`;
}
function todaySchedule() {
  const idx = Math.min(new Date().getDay(), 5);
  return DB.schedule.rows[idx].map((s, i) =>
    `<div class="today-item"><span class="today-time">${esc(DB.schedule.periods[i])}</span><div><strong>${esc(s)}</strong><small>الحصة ${arNum(i + 1)}</small></div></div>`).join("");
}
function continueList() {
  const notDone = allLessons().filter(l => !store.doneLessons.includes(l.id)).slice(0, 3);
  return (notDone.length ? notDone : allLessons().slice(0, 2)).map((l, i) => {
    const s = subjectOf(l.subject), pct = [65, 30, 0][i] || 0;
    return `<div class="continue-card" onclick="openLesson(${l.id})"><span class="c-ic" style="background:${s.color}1c">${s.icon}</span>
      <div style="flex:1"><strong>${esc(l.title)}</strong><small>${esc(s.name)} · ${esc(gradeLabel(l.grade))}</small>
      <div class="progress-line"><i style="width:${store.doneLessons.includes(l.id) ? 100 : pct}%"></i></div></div>
      <span class="btn btn-primary btn-sm">${pct ? "تابع" : "ابدأ"} ←</span></div>`;
  }).join("");
}
function avgGrade() { return Math.round(DB.gradeRows.reduce((a, r) => a + r.final, 0) / DB.gradeRows.length); }

/* تسجيل محاولات الأنشطة/الشات بوت واشتقاق مستوى المهارات منها (بيانات هذا الجهاز فقط) */
function recordAttempt(act, score, total) {
  if (!act || !total) return;
  (store.activityAttempts = store.activityAttempts || []).push({
    activityId: act.id, title: act.title || "", skill: act.skill || "general",
    score, total, ts: Date.now(), wrongCategory: score < total ? (act.skill || "general") : null
  });
  store.activityAttempts = store.activityAttempts.slice(-200);
  store.pointsBonus += score * 5; save();
}
function skillStats() {
  const out = {};
  (store.activityAttempts || []).forEach(x => {
    const s = out[x.skill] = out[x.skill] || { score: 0, total: 0, attempts: 0 };
    s.score += x.score; s.total += x.total; s.attempts++;
  });
  return out;
}
function skillPanelHTML() {
  const stats = skillStats(), keys = Object.keys(stats);
  if (!keys.length) return `<div class="panel" style="margin-bottom:16px"><h3>🇬🇧 مهاراتك في الإنجليزية وأنشطتك</h3>
    <p style="color:var(--muted);font-size:14.5px">لم تلعب أي نشاط بعد — ابدأ ببطاقات مفردات الوحدة الأولى أو حوار قصير مع «رفيق اللغة»، وستُبنى هنا خريطة مهاراتك من نتائجك الحقيقية على هذا الجهاز (لا أرقام جاهزة).</p>
    <div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-primary btn-sm" onclick="navigate('activities')">🎮 ابدأ أول نشاط</button><button class="btn btn-ghost btn-sm" onclick="navigate('english8')">🇬🇧 مسار الإنجليزية للصف الثامن</button></div></div>`;
  const rows = keys.map(k => { const s = stats[k], pct = Math.round(s.score / s.total * 100);
    return `<div class="bar-row"><span>${esc(skillAr(k))}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${pct >= 75 ? "var(--green)" : pct >= 50 ? "var(--blue)" : "var(--amber)"}"></div></div><b>${arNum(pct)}٪</b></div>
    <p class="print-note" style="margin:-6px 0 8px">${arNum(s.attempts)} محاولة · ${arNum(s.score)}/${arNum(s.total)} إجابة صحيحة${pct < 60 ? " — هذه مهارة تحتاج تدريباً إضافياً: أعد أنشطتها ببطء واقرأ التفسيرات" : pct >= 85 ? " — مهارة تتقنها 🌟" : ""}</p>`; }).join("");
  const last = (store.activityAttempts || []).slice(-3).reverse();
  return `<div class="panel" style="margin-bottom:16px"><h3>🇬🇧 مهاراتك من أنشطتك الفعلية <span class="tag">${arNum((store.activityAttempts || []).length)} محاولة مسجلة</span></h3>${rows}
    <h4 style="margin:12px 0 6px;color:var(--navy)">أحدث الأنشطة</h4>
    ${last.map(x => `<div class="today-item"><span class="today-time">${arNum(x.score)}/${arNum(x.total)}</span><div><strong>${esc(x.title)}</strong><small>${esc(skillAr(x.skill))} · ${new Date(x.ts).toLocaleDateString("ar-EG")}</small></div></div>`).join("")}</div>`;
}

/* ----- لوحة القيادة حسب الدور ----- */
function vDashboard() {
  const u = state.user, done = store.doneLessons.length;
  const pctAll = Math.round(done / Math.max(1, allLessons().length) * 100);
  const points = (u.points || 0) + store.pointsBonus;
  let kpis = "", extra = "";
  if (state.role === "student") {
    kpis = kpi("🎬", "#e8f2fe", arNum(done) + " / " + arNum(allLessons().length), "دروس مكتملة", "▲ أسبوع مميز")
      + kpi("🏆", "#fdf2d5", arNum(points), "نقاط التميز", "")
      + kpi("📊", "#e6f7ef", arNum(avgGrade()) + "٪", "المعدل العام", "▲ ٢٪")
      + kpi("✅", "#f3eefe", "٩٦٪", "نسبة الحضور", "");
    extra = `<div class="panel" style="margin-bottom:16px"><h3>▶️ تابع من حيث توقفت <button class="link btn btn-ghost btn-sm" onclick="navigate('lessons')">كل الدروس</button></h3>${continueList()}</div>` + skillPanelHTML();
  } else if (state.role === "teacher") {
    kpis = kpi("👩‍🎓", "#e8f2fe", "١٨٦", "طالب في شُعبي (٤ شعب)", "") + kpi("🎬", "#e6f7ef", arNum(31 + store.addedLessons.length), "درس نشرته في المنصة", "جديد: هذا الأسبوع")
      + kpi("📝", "#fdf2d5", "٤٢", "واجباً بانتظار التصحيح", "") + kpi("📊", "#f3eefe", "٨٧٪", "متوسط شعبي في الرياضيات", "▲ ٣٪");
    extra = `<div class="panel" style="margin-bottom:16px"><h3>⚡ إجراءات سريعة</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary" onclick="navigate('aistudio')">✨ استوديو المعلم الذكي: إنشاء نشاط</button><button class="btn btn-ghost" onclick="navigate('studio')">➕ إضافة درس جديد</button>
      <button class="btn btn-ghost" onclick="navigate('classes')">👩‍🎓 عرض طلابي</button><button class="btn btn-ghost" onclick="navigate('grades')">📊 كشف درجات الشعبة</button>
      <button class="btn btn-ghost" onclick="navigate('messages')">✉️ مراسلة أولياء الأمور</button></div></div>`;
  } else if (state.role === "parent") {
    kpis = kpi("👨‍👧‍👦", "#e8f2fe", "٣", "أبناء في المنصة", "") + kpi("📊", "#e6f7ef", "٩٢٪", "أحدث معدل (أحمد)", "امتياز")
      + kpi("✅", "#fdf2d5", "٩٦٪", "متوسط حضور الأبناء", "") + kpi("📝", "#f3eefe", arNum(DB.homework.filter(h => !store.doneHW.includes(h.id)).length), "واجبات لم تُسلّم بعد", "");
    extra = `<div class="panel" style="margin-bottom:16px"><h3>👨‍👧‍👦 نظرة سريعة على الأبناء <button class="link btn btn-ghost btn-sm" onclick="navigate('children')">التقارير التفصيلية</button></h3>
      <div class="book-grid">${DB.children.map((c, i) => childCard(c, i)).join("")}</div></div>`;
  } else {
    kpis = kpi("🏫", "#e8f2fe", "٢٬٤١٨", "طالب وطالبة بالمدرسة", "▲ ٤٪ هذا العام") + kpi("👩‍🏫", "#e6f7ef", "١٢٤", "معلماً ومعلمة", "")
      + kpi("📊", "#fdf2d5", "٨٨٪", "متوسط نتائج الفصل الأول", "المركز ٣ بالمديرية") + kpi("✅", "#f3eefe", "٩٣٪", "حضور اليوم", "");
    extra = `<div class="panel" style="margin-bottom:16px"><h3>🇾🇪 تبنّي المنصة في المحافظات <button class="link btn btn-ghost btn-sm" onclick="navigate('reports')">تقرير كامل</button></h3>${govBars(DB.governorates.slice(0, 5))}</div>`;
  }
  return `
  <div class="welcome-band"><div><h2>أهلاً بعودتك، ${esc(u.name.replace(/^أ\. /, "").split(" ")[0])} 👋</h2>
    <p>${esc(u.school)} · ${esc(u.meta)} · رقم الحساب: ${esc(u.id)}</p></div>
    ${state.role === "student" ? `<div class="streak-box">🔥 سلسلة المذاكرة<strong>${arNum(u.streak)} يوماً</strong><small>واصل! باقي ٣ أيام لوسام الشهر</small></div>`
      : `<button class="btn btn-white" onclick="navigate('${state.role === "teacher" ? "classes" : state.role === "parent" ? "children" : "reports"}')">ابدأ جولتي اليوم ←</button>`}
  </div>
  <div class="kpi-grid">${kpis}</div>
  ${extra}
  <div class="dash-cols">
    <div>
      <div class="panel" style="margin-bottom:16px"><h3>📈 تقدمك في المواد <span class="tag">أنجزت ${arNum(pctAll)}٪ من دروس المنصة</span></h3>
        ${DB.subjectProgress.map(p => `<div class="bar-row"><span>${esc(p.name)}</span><div class="bar-track"><div class="bar-fill" style="width:${p.pct}%;background:${p.color}"></div></div><b>${arNum(p.pct)}٪</b></div>`).join("")}
      </div>
      <div class="panel"><h3>📰 إعلانات المدرسة</h3>
        ${DB.news.map(n => `<div class="today-item"><span class="tag">${esc(n.tag)}</span><div><strong>${esc(n.title)}</strong><small>${esc(n.date)}</small></div></div>`).join("")}
      </div>
    </div>
    <div>
      <div class="panel" style="margin-bottom:16px"><h3>🗓️ حصص اليوم <button class="link btn btn-ghost btn-sm" onclick="navigate('schedule')">الجدول كاملاً</button></h3>${todaySchedule()}</div>
      <div class="panel"><h3>🏆 صدارة الشعبة بالنقاط</h3>
        ${DB.leaderboard.map((p, i) => `<div class="leader-row ${p.name.includes("أحمد الحداد") ? "me" : ""}"><span class="leader-rank">${arNum(i + 1)}</span><div><strong>${esc(p.name)}</strong><small style="display:block;color:var(--muted)">${esc(p.school)}</small></div><b>${arNum(p.points + (p.name.includes("أحمد الحداد") ? store.pointsBonus : 0))}</b></div>`).join("")}
      </div>
    </div>
  </div>`;
}
function govBars(list) {
  return list.map(g => `<div class="gov-row"><span>${esc(g.name)}<small style="display:block;color:var(--muted)">${arNum(g.schools)} مدرسة · ${esc(g.students)} طالب</small></span><div class="bar-track"><div class="bar-fill" style="width:${g.pct}%;background:var(--blue)"></div></div><b>${arNum(g.pct)}٪</b></div>`).join("");
}
function childCard(c, i) {
  return `<div class="child-card">
    <div style="display:flex;gap:11px;align-items:center"><span class="avatar">${esc(c.name.slice(0, 2))}</span><div><strong style="color:var(--navy)">${esc(c.name)}</strong><small style="display:block;color:var(--muted)">${esc(c.grade)}</small></div></div>
    <div class="bar-row" style="grid-template-columns:64px 1fr 40px;margin-top:14px"><span>التقدم</span><div class="bar-track"><div class="bar-fill" style="width:${c.progress}%;background:var(--green)"></div></div><b>${arNum(c.progress)}٪</b></div>
    <div style="display:flex;gap:8px;margin-top:6px"><span class="badge b-excellent">المعدل ${arNum(c.avg)}٪</span><span class="badge b-good">الحضور ${arNum(c.att)}٪</span></div>
    <button class="btn btn-ghost btn-sm full" style="margin-top:13px;width:100%" onclick="state.childIdx=${i};navigate('children')">عرض التقرير ←</button></div>`;
}

/* ----- الدروس ----- */
function vLessons() {
  const f = state.lessonFilter;
  const gradesOpts = [`<option value="all">كل الصفوف</option>`].concat(DB.grades.map(g => `<option value="${g.n}" ${String(f.grade) === String(g.n) ? "selected" : ""}>الصف ${esc(g.label)}</option>`)).join("");
  const subjOpts = [`<option value="all">كل المواد</option>`].concat(DB.subjects.map(s => `<option value="${s.id}" ${f.subject === s.id ? "selected" : ""}>${esc(s.name)}</option>`)).join("");
  return `<div class="page-head"><h2>🎬 مكتبة الدروس</h2><p>دروس المنهج اليمني من الصف الأول إلى الثالث الثانوي — اختر صفّك ومادتك وابدأ.</p></div>
  <div class="filters"><input type="search" id="lessonQ" placeholder="🔎 ابحث باسم الدرس أو المعلم…" value="${esc(f.q)}" oninput="state.lessonFilter.q=this.value;refreshLessonGrid()">
    <select onchange="state.lessonFilter.grade=this.value;refreshLessonGrid()">${gradesOpts}</select>
    <select onchange="state.lessonFilter.subject=this.value;refreshLessonGrid()">${subjOpts}</select>
    <button class="chip-filter" onclick="state.lessonFilter={grade:'all',subject:'all',q:''};navigate('lessons')">إعادة تعيين</button>
  </div><div class="lessons-grid" id="lessonGrid">${lessonGridHTML()}</div>`;
}
function filteredLessons() {
  const f = state.lessonFilter, q = (f.q || "").trim();
  return allLessons().filter(l =>
    (f.grade === "all" || String(l.grade) === String(f.grade)) &&
    (f.subject === "all" || l.subject === f.subject) &&
    (!q || l.title.includes(q) || l.teacher.includes(q) || subjectOf(l.subject).name.includes(q)));
}
function lessonGridHTML() {
  const list = filteredLessons();
  if (!list.length) return `<div class="empty-state" style="grid-column:1/-1"><div class="e-ic">🔍</div><strong>لا توجد دروس مطابقة</strong><p>جرّب تغيير الصف أو المادة أو كلمة البحث.</p></div>`;
  return list.map(l => lessonCard(l, true)).join("");
}
function refreshLessonGrid() { const g = $("lessonGrid"); if (g) g.innerHTML = lessonGridHTML(); }

function openLesson(id) {
  const l = allLessons().find(x => x.id === id); if (!l) return;
  state.currentLesson = l; state.view = "lessons"; markActiveNav();
  const s = subjectOf(l.subject), done = store.doneLessons.includes(l.id);
  const quiz = DB.quizzes.find(q => q.subject === l.subject && Math.abs(q.grade - l.grade) <= 1);
  state.playerPct = 0;
  $("appContent").innerHTML = `
  <button class="back-btn" onclick="navigate('lessons')">→ العودة إلى مكتبة الدروس</button>
  <div class="player-box"><div style="font-size:42px">${s.icon}</div>
    <h2 style="font-size:23px;margin:8px 0 4px">${esc(l.title)}</h2>
    <p style="color:#cfe4fb">${esc(s.name)} · ${esc(gradeLabel(l.grade))} · ${esc(l.unit)} · 👩‍🏫 ${esc(l.teacher)}</p>
    <button class="play-btn" id="playBtn" onclick="togglePlay(this)" style="margin-top:18px">▶</button>
    <div class="player-bar"><i id="playerFill"></i></div>
    <small id="playerTime">٠:٠٠ / ${arNum(l.mins)}:٠٠ — اضغط تشغيل لبدء الفيديو التعليمي (محاكاة تجريبية)</small></div>
  ${l.unverified ? `<div class="why-box"><b>⏳ حالة التوثيق:</b> هذا درس إنجليزي عام من النسخة الأولى للمنصة، ولم تتم مطابقته بعد مع منهج Crescent الرسمي للصف الثامن — لذلك هو «بانتظار التحقق من المصدر الرسمي» ولا يُعدّ جزءاً من المسار الموثّق في قسم «الإنجليزية — ثامن».</div>` : ""}
  <div class="dash-cols">
    <div class="panel"><h3>📖 ملخص الدرس المكتوب</h3><div class="lesson-content">${esc(l.content)}</div></div>
    <div>
      <div class="panel" style="margin-bottom:16px"><h3>🎯 ماذا ستتعلم؟</h3><ul class="objectives">${l.objectives.map(o => `<li>✔️ ${esc(o)}</li>`).join("")}</ul></div>
      <div class="panel" style="margin-bottom:16px"><h3>ℹ️ بيانات الدرس</h3>
        <div class="today-item"><span class="today-time">⏱️</span><div><strong>${arNum(l.mins)} دقيقة</strong><small>مدة الفيديو</small></div></div>
        <div class="today-item"><span class="today-time">★ ${arNum(l.rating)}</span><div><strong>تقييم الطلاب</strong><small>من ${esc(l.views)} مشاهدة</small></div></div>
        <div class="today-item"><span class="today-time">📥</span><div><strong>هل النت ضعيف؟</strong><small>حمّل الملخص وذاكر بدون اتصال</small></div>
          <button class="btn btn-ghost btn-sm" style="margin-inline-start:auto" onclick="downloadLesson()">تحميل الملخص</button></div></div>
      <div class="panel">
        ${done ? `<div style="text-align:center;padding:6px"><div style="font-size:34px">🎉</div><strong style="color:var(--green)">أكملت هذا الدرس — أحسنت!</strong></div>`
          : `<button class="btn btn-primary full" onclick="completeLesson(${l.id})">✅ تعليم الدرس كمكتمل (+٥٠ نقطة)</button>`}
        ${quiz ? `<button class="btn btn-ghost full" style="margin-top:10px;width:100%" onclick="startQuiz('${quiz.id}')">✍️ اختبر نفسك: ${esc(quiz.title)}</button>` : ""}
      </div>
    </div>
  </div>`;
  window.scrollTo(0, 0);
}
function togglePlay(btn) {
  if (state.playerTimer) { stopPlayer(); btn.textContent = "▶"; return; }
  btn.textContent = "⏸";
  const fill = $("playerFill"), time = $("playerTime"), total = state.currentLesson ? state.currentLesson.mins : 20;
  state.playerTimer = setInterval(() => {
    state.playerPct = Math.min(100, state.playerPct + 1);
    if (fill) fill.style.width = state.playerPct + "%";
    if (time) time.textContent = "جاري التشغيل… تقدّمت " + arNum(state.playerPct) + "٪ من درس مدته " + arNum(total) + " دقيقة";
    if (state.playerPct >= 100) { stopPlayer(); const b = $("playBtn"); if (b) b.textContent = "↺"; if (time) time.textContent = "انتهى الفيديو — علّم الدرس كمكتمل وحلّ الاختبار القصير 🎉"; }
  }, 120);
}
function stopPlayer() { if (state.playerTimer) { clearInterval(state.playerTimer); state.playerTimer = null; } }
function completeLesson(id) {
  if (!store.doneLessons.includes(id)) { store.doneLessons.push(id); store.pointsBonus += 50; save(); }
  toast("🎉 أحسنت! أكملت الدرس وحصلت على +٥٠ نقطة"); openLesson(id);
}
function downloadLesson() {
  const l = state.currentLesson; if (!l) return;
  const text = "منصة مدرستي اليمن\n" + "=".repeat(30) + "\nالدرس: " + l.title + "\nالمادة: " + subjectOf(l.subject).name + " — " + gradeLabel(l.grade) + "\nالمعلم: " + l.teacher + "\n\nأهداف الدرس:\n" + l.objectives.map(o => "- " + o).join("\n") + "\n\nالملخص:\n" + l.content + "\n";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\ufeff" + text], { type: "text/plain;charset=utf-8" }));
  a.download = "درس-" + l.title.slice(0, 24) + ".txt"; a.click(); URL.revokeObjectURL(a.href);
  toast("📥 تم تحميل ملخص الدرس — ذاكر الآن بدون إنترنت");
}

/* ----- الاختبارات ----- */
function vQuizzes() {
  return `<div class="page-head"><h2>✍️ الاختبارات التفاعلية</h2><p>أسئلة بتصحيح وشرح فوري. كل إجابة صحيحة = +٢٠ نقطة.</p></div>` +
    DB.quizzes.map(q => {
      const s = subjectOf(q.subject), best = store.quizScores[q.id];
      return `<div class="quiz-card"><span class="q-ic" style="background:${s.color}1c">${s.icon}</span>
        <div style="flex:1"><h4>${esc(q.title)}</h4><small>${esc(s.name)} · ${esc(gradeLabel(q.grade))} · ${arNum(q.questions.length)} أسئلة · ${arNum(q.mins)} دقائق${best !== undefined ? ` · <b style="color:var(--green)">أفضل نتيجة لك: ${arNum(best)}/${arNum(q.questions.length)}</b>` : ""}</small></div>
        <button class="btn btn-primary" onclick="startQuiz('${q.id}')">${best !== undefined ? "إعادة المحاولة" : "ابدأ الاختبار"} ←</button></div>`;
    }).join("") +
    (typeof dialogueQuizSectionHTML === "function" ? dialogueQuizSectionHTML() : "") +
    `<div class="panel"><h3>💡 نصيحة للاختبارات الوزارية</h3><p style="color:var(--muted);font-size:14.5px">اقرأ السؤال كاملاً قبل النظر إلى الاختيارات، واستبعد الإجابتين الأبعد عن الصواب أولاً، ثم قارن بين الباقيتين. وراجع شرح كل سؤال تخطئ فيه — الخطأ المعلَّل أفضل معلّم.</p></div>`;
}
function startQuiz(id) {
  const generated = typeof dialogueQuizCatalog === "function" ? dialogueQuizCatalog() : [];
  const q = DB.quizzes.find(x => x.id === id) || generated.find(x => x.id === id); if (!q) return;
  if (typeof dlgStopSpeech === "function") dlgStopSpeech(false);
  state.quiz = q; state.quizIdx = 0; state.quizScore = 0; state.view = "quizzes"; markActiveNav();
  renderQuestion();
}
function renderQuestion() {
  const q = state.quiz, i = state.quizIdx, item = q.questions[i];
  if (typeof dlgStopSpeech === "function") dlgStopSpeech(false);
  state.quizAnswered = false;
  const dialogueAudio = item.dialogueId ? `<div class="why-box" style="margin-bottom:12px"><b>🎧 صوت مولّد من الجهاز لهذا السؤال:</b> اختر السرعة ثم استمع. لا يبدأ الصوت تلقائياً، وهو ليس تسجيل الكتاب أو Drive.
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:9px"><label>السرعة <select id="dlgQuizRate" class="f-input" style="width:auto"><option value="0.6">0.6×</option><option value="0.8">0.8×</option><option value="1" selected>1.0×</option></select></label>
    <button class="btn btn-primary btn-sm" type="button" onclick="dlgQuizSpeak('${item.dialogueId}',${Number(item.audioLineIndex) || 0},${item.audioMode === "full"})">${item.audioMode === "full" ? "🔊 اسمع الحوار كاملاً" : "🔊 اسمع سطر السؤال"}</button>
    <button class="btn btn-ghost btn-sm" type="button" onclick="dlgStopSpeech(false)">⏹️ إيقاف الصوت</button></div></div>` : "";
  $("appContent").innerHTML = `<div class="quiz-run">
    <button class="back-btn" onclick="if(typeof dlgStopSpeech==='function')dlgStopSpeech(false);navigate('quizzes')">→ خروج من الاختبار</button>
    <div style="display:flex;justify-content:space-between;align-items:center"><strong style="color:var(--navy)">${esc(q.title)}</strong><span class="tag">السؤال ${arNum(i + 1)} من ${arNum(q.questions.length)} · نتيجتك حتى الآن: ${arNum(state.quizScore)}</span></div>
    <div class="quiz-progress"><i style="width:${(i) / q.questions.length * 100}%"></i></div>
    <div class="panel">${dialogueAudio}<p class="q-text">${esc(item.q)}</p>
      <div id="optsBox">${item.options.map((o, oi) => `<button class="opt-btn" dir="${/[\u0600-\u06FF]/.test(o) ? "rtl" : "ltr"}" style="text-align:${/[\u0600-\u06FF]/.test(o) ? "right" : "left"}" onclick="answerQuiz(${oi},this)"><span class="opt-key">${["أ", "ب", "ج", "د"][oi]}</span>${esc(o)}</button>`).join("")}</div>
      <div id="whyBox"></div>
      <div style="text-align:end"><button class="btn btn-primary hidden" id="nextQBtn" onclick="nextQuestion()">${i + 1 === q.questions.length ? "عرض النتيجة 🏆" : "السؤال التالي ←"}</button></div>
    </div></div>`;
  window.scrollTo(0, 0);
}
function answerQuiz(oi, btn) {
  if (state.quizAnswered) return; state.quizAnswered = true;
  const item = state.quiz.questions[state.quizIdx];
  document.querySelectorAll("#optsBox .opt-btn").forEach((b, bi) => {
    b.disabled = true;
    if (bi === item.a) b.classList.add("correct");
    else if (bi === oi) b.classList.add("wrong");
  });
  const ok = oi === item.a;
  if (ok) { state.quizScore++; store.pointsBonus += 20; save(); }
  $("whyBox").innerHTML = `<div class="why-box"><b>${ok ? "✅ إجابة صحيحة! (+٢٠ نقطة)" : "❌ ليست الإجابة الصحيحة"}</b><br>${esc(item.why)}</div>`;
  $("nextQBtn").classList.remove("hidden");
}
function nextQuestion() {
  if (state.quizIdx + 1 < state.quiz.questions.length) { state.quizIdx++; renderQuestion(); }
  else quizResult();
}
function quizResult() {
  if (typeof dlgStopSpeech === "function") dlgStopSpeech(false);
  const q = state.quiz, total = q.questions.length, score = state.quizScore, pct = Math.round(score / total * 100);
  const prev = store.quizScores[q.id];
  if (prev === undefined || score > prev) { store.quizScores[q.id] = score; save(); }
  const msg = pct === 100 ? "مذهل! علامة كاملة 🌟 أنت جاهز للاختبار الوزاري" : pct >= 70 ? "أحسنت! فهمك للدرس ممتاز 👏" : pct >= 40 ? "محاولة جيدة — راجع شروح الأسئلة وحاول مرة أخرى 💪" : "لا بأس! عُد إلى الدرس، راجع الملخص، ثم أعد الاختبار 📚";
  $("appContent").innerHTML = `<div class="quiz-run"><div class="panel quiz-result">
    <div class="result-emoji">${pct >= 70 ? "🏆" : pct >= 40 ? "💪" : "📚"}</div>
    <div class="big-score">${arNum(score)} / ${arNum(total)}</div>
    <p style="font-size:17px;color:var(--navy);font-weight:800">${msg}</p>
    <p style="color:var(--muted)">نتيجتك ${arNum(pct)}٪ في «${esc(q.title)}» — وقد حُفظت في ملفك ويشاهدها معلمك وولي أمرك.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px">
      <button class="btn btn-primary" onclick="startQuiz('${q.id}')">↺ إعادة الاختبار</button>
      <button class="btn btn-ghost" onclick="navigate('lessons')">🎬 متابعة الدروس</button>
      <button class="btn btn-ghost" onclick="navigate('dashboard')">🏠 الرئيسية</button></div>
  </div></div>`;
  window.scrollTo(0, 0);
}

/* ----- الواجبات ----- */
function vHomework() {
  const doneCount = DB.homework.filter(h => store.doneHW.includes(h.id)).length;
  return `<div class="page-head"><h2>📝 الواجبات المدرسية</h2><p>سلّمت ${arNum(doneCount)} من ${arNum(DB.homework.length)} واجبات. علّم الواجب عند إنهائه ليصل معلمك إشعار فوراً.</p></div>
  <div class="task-list">${DB.homework.map(h => {
    const s = subjectOf(h.subject), done = store.doneHW.includes(h.id);
    return `<div class="task-item ${done ? "done" : ""}">
      <button class="task-check" onclick="toggleHW(${h.id})" title="تعليم كمنجز">${done ? "✓" : ""}</button>
      <span class="k-ic" style="background:${s.color}1c;width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:20px">${s.icon}</span>
      <div><strong>${esc(h.title)}</strong><small>${esc(s.name)} · ${esc(h.teacher)}</small></div>
      <span class="due ${done ? "done-due" : ""}">${done ? "تم التسليم ✓" : "⏰ " + esc(h.due)}</span></div>`;
  }).join("")}</div>` + (typeof dialogueHomeworkSectionHTML === "function" ? dialogueHomeworkSectionHTML() : "");
}
function toggleHW(id) {
  const i = store.doneHW.indexOf(id);
  if (i >= 0) { store.doneHW.splice(i, 1); toast("تم إلغاء تعليم الواجب"); }
  else { store.doneHW.push(id); store.pointsBonus += 10; toast("📤 تم تسليم الواجب للمعلم (+١٠ نقاط)"); }
  save(); buildNav(); navigate("homework");
}

/* ----- الدرجات ----- */
function gradeBadge(v) { return v >= 90 ? `<span class="badge b-excellent">امتياز</span>` : v >= 80 ? `<span class="badge b-good">جيد جداً</span>` : v >= 70 ? `<span class="badge b-mid">جيد</span>` : `<span class="badge b-low">يحتاج تحسيناً</span>`; }
function vGrades() {
  const total = DB.gradeRows.reduce((a, r) => a + r.final, 0);
  const who = state.role === "parent" ? "كشف درجات الابن: أحمد محمد الحداد — الصف التاسع" : state.role === "teacher" ? "كشف الشعبة (أ) — عرض طالب: أحمد عبدالله الحداد" : state.role === "admin" ? "عينة نتائج الصف التاسع (أ)" : "كشف درجاتك للفصل الأول";
  return `<div class="page-head"><h2>📊 الدرجات والنتائج</h2><p>${esc(who)} · العام الدراسي ٢٠٢٥ / ٢٠٢٦م</p></div>
  <div class="kpi-grid">${kpi("📊", "#e8f2fe", arNum(avgGrade()) + "٪", "المعدل العام", "الترتيب: ٣ / ٤٢")}${kpi("🧮", "#e6f7ef", arNum(total), "المجموع الكلي (من ٨٠٠)", "")}${kpi("🏅", "#fdf2d5", "امتياز", "التقدير العام", "")}${kpi("⭐", "#f3eefe", "الثالث", "الترتيب على الشعبة", "▲ تقدّم مركزين")}</div>
  <div class="table-wrap"><table><thead><tr><th>المادة</th><th>شهري ١ (٥٠)</th><th>شهري ٢ (٥٠)</th><th>نهاية الفصل (١٠٠)</th><th>التقدير</th></tr></thead>
  <tbody>${DB.gradeRows.map(r => `<tr><td class="tt-title">${esc(r.subject)}</td><td class="score-num">${arNum(r.m1)}</td><td class="score-num">${arNum(r.m2)}</td><td class="score-num">${arNum(r.final)}</td><td>${gradeBadge(r.final)}</td></tr>`).join("")}
  <tr style="background:#eef6ff"><td class="tt-title">المجموع والمعدل</td><td></td><td></td><td class="score-num">${arNum(total)} / ٨٠٠</td><td>${gradeBadge(avgGrade())} · ${arNum(avgGrade())}٪</td></tr></tbody></table></div>
  <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap" class="no-print"><button class="btn btn-primary" onclick="window.print()">🖨️ طباعة كشف الدرجات</button>
  <button class="btn btn-ghost" onclick="toast('أُرسل الكشف إلى ولي الأمر برسالة داخل المنصة ✉️')">إرساله لولي الأمر</button></div>
  <p class="print-note" style="margin-top:10px">ملحوظة: هذا كشف إلكتروني تجريبي للعرض داخل المنصة. الشهادات الرسمية تُسلَّم مختومة من إدارة المدرسة.</p>`;
}

/* ----- الجدول والحضور ----- */
function vSchedule() {
  const today = Math.min(new Date().getDay(), 5);
  const palette = ["#0b63c7", "#7c4dbc", "#0e9f6e", "#e67e22", "#0e7490", "#b45309", "#db2777"];
  return `<div class="page-head"><h2>🗓️ الجدول الدراسي الأسبوعي</h2><p>الصف التاسع — الشعبة (أ) · الدوام من السبت إلى الخميس · تبدأ الحصة الأولى ٧:٣٠ صباحاً.</p></div>
  <div class="table-wrap"><table class="sched-table"><thead><tr><th>الحصة / الوقت</th>${DB.schedule.days.map((d, i) => `<th class="${i === today ? "today-col" : ""}">${esc(d)}${i === today ? " · اليوم" : ""}</th>`).join("")}</tr></thead>
  <tbody>${DB.schedule.periods.map((p, pi) => `<tr><td class="period-cell"><b>${arNum(pi + 1)}</b> · <small>${esc(p)}</small></td>${DB.schedule.days.map((_, di) => `<td class="${di === today ? "today-col" : ""}"><span class="subj-dot" style="background:${palette[(di + pi) % palette.length]}"></span>${esc(DB.schedule.rows[di][pi])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
  <div class="panel" style="margin-top:16px"><h3>📌 تنبيهات الجدول</h3><p style="color:var(--muted);font-size:14.5px">• اختبار الرياضيات الشهري: الثلاثاء القادم (الحصة الثانية).<br>• حصة الحاسوب في المعمل (٢) — يُمنع إدخال الطعام والشراب.<br>• يوم الخميس: مسابقة الخطابة في ساحة المدرسة بعد الحصة الرابعة.</p></div>`;
}
function vAttendance() {
  return `<div class="page-head"><h2>✅ سجل الحضور والغياب</h2><p>الفصل الأول — يُحدَّث يومياً من إدارة المدرسة، ويُرسَل أي غياب لولي الأمر فوراً.</p></div>
  <div class="dash-cols">
    <div class="panel" style="text-align:center"><h3>نسبة الحضور الإجمالية</h3>
      <div class="att-ring" style="background:conic-gradient(var(--green) 0 96%, #e7eef6 96% 100%)"><span style="background:#fff;width:84px;height:84px;border-radius:50%;display:flex;align-items:center;justify-content:center">٩٦٪</span></div>
      <p style="color:var(--muted);margin-top:12px">حاضر ٧٢ يوماً من أصل ٧٥ — سلوك انضباط ممتاز 🌟</p></div>
    <div class="panel"><h3>أحدث أيام الشهر</h3>
      ${[["اليوم", true], ["أمس", true], ["قبل أمس", true], ["الثلاثاء الماضي", true], ["الاثنين الماضي", false, "غياب بعذر (مرض) — قُبل عذر ولي الأمر"], ["الأحد الماضي", true]].map(([d, present, note]) =>
        `<div class="today-item"><span class="today-time">${present ? "✓" : "✗"}</span><div><strong>${d} — ${present ? "حاضر" : "غـائب"}</strong>${note ? `<small>${esc(note)}</small>` : `<small>بصمة الحضور ٧:١٢ صباحاً</small>`}</div><span style="margin-inline-start:auto">${present ? '<span class="badge b-excellent">حضور</span>' : '<span class="badge b-mid">غياب بعذر</span>'}</span></div>`).join("")}
    </div></div>
  <div class="kpi-grid">${kpi("✅", "#e6f7ef", "٧٢", "يوم حضور", "")}${kpi("🤒", "#fdf2d5", "٣", "أيام غياب بعذر", "")}${kpi("⛔", "#fde3e1", "٠", "غياب بدون عذر", "")}${kpi("⏰", "#e8f2fe", "٢", "مرتا تأخير صباحي", "")}</div>`;
}

/* ----- المكتبة ----- */
function vLibrary() {
  const icons = ["📘", "📗", "📙", "📕", "🗺️", "📖", "🔤", "🌹"];
  return `<div class="page-head"><h2>📚 المكتبة الرقمية</h2><p>الكتب المدرسية والملخصات وبنوك الأسئلة بملفات خفيفة تناسب الإنترنت الضعيف.</p></div>
  <div class="book-grid">${DB.library.map((b, i) => `<div class="book-card"><span class="b-ic">${icons[i % icons.length]}</span><h4>${esc(b.title)}</h4><small>${esc(b.type)} · الحجم ${esc(b.size)}</small>
    <button class="btn btn-primary btn-sm full" style="width:100%" onclick="fakeDownload(this)">📥 تحميل</button></div>`).join("")}</div>
  <div class="panel" style="margin-top:16px"><h3>📶 تذكير</h3><p style="color:var(--muted);font-size:14.5px">نضغط الملفات لتصلك بسرعة حتى على شبكات الجيل الثالث، ويمكن للمدرسة تزويدك بنسخة على ذاكرة USB من إدارة المدرسة إن لم تتوفر لديك شبكة.</p></div>`;
}
function fakeDownload(btn) { btn.disabled = true; btn.textContent = "⏳ جاري التحميل…"; setTimeout(() => { btn.textContent = "✓ اكتمل التحميل"; toast("احفظ الملف في جهازك وذاكر منه بدون اتصال 📚"); }, 1100); }

/* ----- الرسائل ----- */
function vMessages() {
  const c = DB.contacts.find(x => x.id === state.chatId) || DB.contacts[0];
  const msgs = c.msgs.concat(store.extraMsgs[c.id] || []);
  return `<div class="page-head"><h2>✉️ الرسائل</h2><p>تواصل آمن داخل المنصة بين الطلاب والمعلمين وأولياء الأمور والإدارة.</p></div>
  <div class="chat-shell">
    <div class="chat-list">${DB.contacts.map(x => {
      const all = x.msgs.concat(store.extraMsgs[x.id] || []), last = all[all.length - 1];
      return `<button class="chat-contact ${x.id === c.id ? "active" : ""}" onclick="state.chatId='${x.id}';navigate('messages')"><span class="avatar sm">${esc(x.name.replace(/^أ\. /, "").slice(0, 2))}</span><span><strong>${esc(x.name)}</strong><small>${esc(last ? last.text : x.meta)}</small></span></button>`;
    }).join("")}</div>
    <div class="chat-main">
      <div class="chat-head"><span class="avatar sm">${esc(c.name.replace(/^أ\. /, "").slice(0, 2))}</span><div><strong style="color:var(--navy)">${esc(c.name)}</strong><small style="display:block;color:var(--muted)">${esc(c.meta)}</small></div><span class="badge b-excellent" style="margin-inline-start:auto">متصل الآن</span></div>
      <div class="chat-body" id="chatBody">${msgs.map(m => `<div class="bubble ${m.from}">${esc(m.text)}</div>`).join("")}</div>
      <form class="chat-input" onsubmit="sendMsg(event)"><input id="msgInput" placeholder="اكتب رسالتك هنا…" autocomplete="off"><button class="btn btn-primary" type="submit">إرسال ➤</button></form>
    </div></div>`;
}
function scrollChat() { const b = $("chatBody"); if (b) b.scrollTop = b.scrollHeight; }
function sendMsg(e) {
  e.preventDefault(); const v = $("msgInput").value.trim(); if (!v) return;
  const id = state.chatId;
  (store.extraMsgs[id] = store.extraMsgs[id] || []).push({ from: "me", text: v }); save();
  navigate("messages");
  setTimeout(() => {
    const replies = ["تم، شكراً لك 👍 سنناقشها في الحصة القادمة إن شاء الله.", "وصلتني رسالتك، أحسنت على المتابعة 🌟", "تمام! لا تنسَ مراجعة ملخص الدرس في المنصة قبل الاختبار.", "بارك الله فيك، سيتم الرد التفصيلي مساء اليوم."];
    (store.extraMsgs[id] = store.extraMsgs[id] || []).push({ from: "them", text: replies[Math.floor(Math.random() * replies.length)] }); save();
    if (state.view === "messages") navigate("messages"); else toast("📩 وصلتك رسالة جديدة");
  }, 1400);
}

/* ----- استوديو المعلم ----- */
function vStudio() {
  return `<div class="page-head"><h2>➕ إضافة درس جديد</h2><p>انشر درساً لطلابك — سيظهر فوراً في مكتبة الدروس ويُحفظ في متصفحك (نسخة تجريبية).</p></div>
  <div class="panel"><form onsubmit="addLesson(event)">
    <div class="form-grid">
      <label class="f-label full2">عنوان الدرس<input class="f-input" id="nTitle" required placeholder="مثال: الكسور المتكافئة"></label>
      <label class="f-label">المادة<select class="f-input" id="nSubject">${DB.subjects.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join("")}</select></label>
      <label class="f-label">الصف<select class="f-input" id="nGrade">${DB.grades.map(g => `<option value="${g.n}">الصف ${esc(g.label)}</option>`).join("")}</select></label>
      <label class="f-label">المدة (دقيقة)<input class="f-input" id="nMins" type="number" min="5" max="90" value="25" required></label>
      <label class="f-label">الوحدة / الفصل<input class="f-input" id="nUnit" placeholder="الوحدة الأولى: …"></label>
      <label class="f-label full2">وصف قصير<textarea class="f-input" id="nDesc" required placeholder="نبذة من سطر أو سطرين عن الدرس"></textarea></label>
      <label class="f-label full2">نص الملخص المكتوب<textarea class="f-input" id="nContent" style="min-height:130px" required placeholder="اكتب شرح الدرس هنا — كل فقرة في سطر جديد…"></textarea></label>
      <label class="f-label full2">أهداف التعلم (كل هدف في سطر)<textarea class="f-input" id="nObjectives" placeholder="أن يتعرف الطالب على…&#10;أن يطبق الطالب…"></textarea></label>
    </div>
    <button class="btn btn-primary btn-lg" type="submit" style="margin-top:14px">نشر الدرس في المنصة 🚀</button>
  </form></div>
  ${store.addedLessons.length ? `<div class="panel" style="margin-top:16px"><h3>🎬 دروس أضفتها أنت (${arNum(store.addedLessons.length)})</h3>
    ${store.addedLessons.map(l => `<div class="today-item"><span class="today-time">${subjectOf(l.subject).icon}</span><div><strong>${esc(l.title)}</strong><small>${esc(gradeLabel(l.grade))} · ${esc(subjectOf(l.subject).name)}</small></div>
      <span style="margin-inline-start:auto;display:flex;gap:7px"><button class="btn btn-ghost btn-sm" onclick="openLesson(${l.id})">عرض</button><button class="btn btn-danger-ghost btn-sm" onclick="deleteLesson(${l.id})">حذف</button></span></div>`).join("")}</div>` : ""}`;
}
function addLesson(e) {
  e.preventDefault();
  const objs = $("nObjectives").value.split("\n").map(s => s.trim()).filter(Boolean);
  const l = {
    id: Date.now(), title: $("nTitle").value.trim(), subject: $("nSubject").value, grade: +$("nGrade").value,
    teacher: state.user.name.replace(/^أ\. /, "أ. "), mins: +$("nMins").value || 25, rating: 5.0, views: "جديد ✨",
    term: "الفصل الحالي", unit: $("nUnit").value.trim() || "وحدة جديدة", desc: $("nDesc").value.trim(),
    objectives: objs.length ? objs : ["إتقان مفاهيم الدرس الأساسية"], content: $("nContent").value.trim()
  };
  store.addedLessons.unshift(l); save(); renderLanding();
  state.lessonFilter = { grade: String(l.grade), subject: l.subject, q: "" };
  toast("🎉 نُشر درسك «" + l.title + "» بنجاح"); navigate("lessons");
}
function deleteLesson(id) {
  store.addedLessons = store.addedLessons.filter(l => l.id !== id);
  store.doneLessons = store.doneLessons.filter(x => x !== id); save(); toast("تم حذف الدرس"); navigate("studio"); renderLanding();
}

/* ----- الطلاب / الأبناء / المحافظات ----- */
function vClasses() {
  return `<div class="page-head"><h2>👩‍🎓 طلاب الشعبة (أ) — الصف التاسع</h2><p>${state.role === "teacher" ? "متابعة أداء طلابك وحضورهم وملاحظاتك عليهم." : "قائمة الطلاب للمدرسة — عرض تجريبي لشعبة واحدة."}</p></div>
  <div class="kpi-grid">${kpi("👩‍🎓", "#e8f2fe", "٤٢", "طالب وطالبة في الشعبة", "")}${kpi("📊", "#e6f7ef", "٨٧٪", "متوسط الشعبة", "▲ من ٨٤٪")}${kpi("✅", "#fdf2d5", "٩٤٪", "متوسط الحضور", "")}${kpi("⚠️", "#fde3e1", "٢", "طالبان يحتاجان متابعة", "")}</div>
  <div class="table-wrap"><table><thead><tr><th>الطالب</th><th>المعدل</th><th>الحضور</th><th>ملاحظة المعلم</th><th></th></tr></thead><tbody>
  ${DB.students.map(s => `<tr><td class="tt-title"><span class="avatar sm" style="margin-inline-end:9px;vertical-align:middle">${esc(s.name.slice(0, 2))}</span>${esc(s.name)}</td>
    <td class="score-num">${arNum(s.avg)}٪ ${gradeBadge(s.avg)}</td><td>${arNum(s.att)}٪</td><td style="color:var(--muted)">${esc(s.note)}</td>
    <td><button class="btn btn-ghost btn-sm" onclick="toast('أُنشئت محادثة مع ولي أمر ${esc(s.name.split(" ")[0])} — راجع صفحة الرسائل ✉️')">مراسلة الولي</button></td></tr>`).join("")}
  </tbody></table></div>`;
}
function vChildren() {
  return `<div class="page-head"><h2>👨‍👧‍👦 تقارير الأبناء</h2><p>متابعة شاملة لأبنائك الثلاثة في مدرسة الأمل النموذجية.</p></div>
  <div class="book-grid" style="margin-bottom:16px">${DB.children.map((c, i) => childCard(c, i)).join("")}</div>
  <div class="panel"><h3>📌 مختار الآن: ${esc(DB.children[state.childIdx].name)} — ${esc(DB.children[state.childIdx].grade)}</h3>
  ${DB.subjectProgress.map((p, i) => `<div class="bar-row"><span>${esc(p.name)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(45, p.pct - i * 3 + state.childIdx * 4)}%;background:${p.color}"></div></div><b>${arNum(Math.max(45, p.pct - i * 3 + state.childIdx * 4))}٪</b></div>`).join("")}
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-primary btn-sm" onclick="navigate('grades')">📊 كشف الدرجات</button>
  <button class="btn btn-ghost btn-sm" onclick="navigate('attendance')">✅ الحضور والغياب</button>
  <button class="btn btn-ghost btn-sm" onclick="navigate('messages')">✉️ مراسلة المعلمين</button></div></div>`;
}
function vReports() {
  const totalSchools = DB.governorates.reduce((a, g) => a + g.schools, 0);
  return `<div class="page-head"><h2>🇾🇪 تقارير المنصة على مستوى الجمهورية</h2><p>تبنّي المنصة في أبرز ٨ محافظات — بيانات تجريبية للعرض.</p></div>
  <div class="kpi-grid">${kpi("🏫", "#e8f2fe", arNum(totalSchools), "مدرسة مشاركة (٨ محافظات)", "")}${kpi("🧑‍🎓", "#e6f7ef", "١٬٦٥٢ ألف", "طالب وطالبة", "هدفنا: ٢ مليون")}${kpi("👩‍🏫", "#fdf2d5", "٤٨ ألف", "معلماً ومعلمة", "")}${kpi("🎬", "#f3eefe", "١٬٨٤٠", "درساً منشوراً", "+١٢٠ شهرياً")}</div>
  <div class="panel"><h3>نسبة تفعيل المنصة حسب المحافظة</h3>${govBars(DB.governorates)}</div>
  <div class="panel" style="margin-top:16px"><h3>📋 قرارات مقترحة هذا الشهر</h3>
    <p style="color:var(--muted);font-size:14.5px">• أولوية دعم البنية التحتية لمحافظتي الحديدة وذمار (نسبة التفعيل الأدنى).<br>• نسخ الدروس على أقراص صلبة للمدارس الريفية بدون تغطية.<br>• تدريب ٥٠٠ معلم جديد على «استوديو إعداد الدروس» قبل الفصل الثاني.</p></div>`;
}

/* ---------- تشغيل ---------- */
$("hamburger").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => $("mainNav").classList.remove("open")));
$("genericModal").addEventListener("click", e => { if (e.target === $("genericModal")) closeGeneric(); });
$("loginModal").addEventListener("click", e => { if (e.target === $("loginModal")) closeLogin(); });
/* حالة الاتصال: تنبيه واضح دون تعطيل المحتوى المحلي */
function syncOnline() { const b = document.getElementById("offlineBanner"); if (b) b.classList.toggle("hidden", navigator.onLine); }
window.addEventListener("offline", syncOnline);
window.addEventListener("online", () => { syncOnline(); toast("🌐 عاد الاتصال بالإنترنت"); });
syncOnline();
renderLanding();
