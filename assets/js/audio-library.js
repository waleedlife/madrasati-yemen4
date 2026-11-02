/* ===== مدرستي اليمن — فهرس صوتيات إنجليزية الصف الثامن ومشغّلها =====
   المصدر المعتمد من صاحب المشروع لهذه النسخة: مجلد Google Drive «ثامن»
   https://drive.google.com/drive/u/0/folders/1xeFT2asqEU2NRx4mbaarZy_6D-Xqe_rr

   ما تحققنا منه في 2026-10-27:
   • قائمة المجلد العامة كانت قابلة للقراءة دون تسجيل دخول في بيئة العمل.
   • يحتوي المجلد على 65 ملفاً مرقماً (01.mp3 … 65.mp3) وملف تجميعي واحد
     («لغة انجليزية ثامن.mp3») — المجموع 66 ملف MP3.
   • المجلد نفسه لا يصرّح بتقسيم كتاب الطالب/كتاب النشاط، ولا يعطي مدداً أو
     وحدات/صفحات؛ لذلك لا نخترع هذه الحقول.

   حدود الاستخدام والتحقق:
   • لا ننسخ أي ملف إلى المستودع ولا نعيد استضافته. المشغّل يبث من Drive،
     وإن منع Drive التشغيل المضمّن يبقى رابط فتح الملف في Drive متاحاً.
   • أذونات/حقوق استخدام التسجيلات لم تُتحقق بصورة مستقلة من هذه البيئة؛
     الاستخدام هنا بثّ من رابط المصدر الذي زوّدنا به صاحب المشروع فقط.
   • لم تُستمع التسجيلات أو تُنسخ آلياً في بيئة التطوير. لذلك حالة كل تسجيل
     افتراضياً: Mapping Unconfirmed — ولا يظهر بوصفه صوت درس معتمداً إلا بعد
     أن يستمع إليه معلم/محرر محتوى ويحفظ قرار «Verified» ويربطه بخطوة. */
const AUDIO_SOURCE = {
  provider: "Google Drive",
  folderId: "1xeFT2asqEU2NRx4mbaarZy_6D-Xqe_rr",
  folderUrl: "https://drive.google.com/drive/u/0/folders/1xeFT2asqEU2NRx4mbaarZy_6D-Xqe_rr",
  folderTitle: "ثامن",
  checkedAt: "2026-10-27",
  accessStatus: "available-link",
  accessNote: "قائمة المجلد العامة قُرئت في بيئة العمل دون تسجيل دخول؛ قد تتغير مشاركة المالك لاحقاً.",
  usageStatus: "stream-only-not-cleared",
  usageNote: "لم تُتحقق حقوق الاستخدام مستقلاً؛ بثّ من Drive فقط، بلا نسخ داخل المنصة أو إعادة نشر."
};
const AUDIO_STATUS = {
  unconfirmed: { code: "Mapping Unconfirmed", ar: "مطابقة غير مؤكدة — لم يُستمع/يُربط بعد", cls: "b-mid" },
  review: { code: "Needs Review", ar: "يحتاج مراجعة إضافية بعد بدء الفحص", cls: "b-mid" },
  verified: { code: "Verified", ar: "اعتمده المعلم بعد السماع وربطه بخطوة", cls: "b-excellent" },
  rejected: { code: "Rejected", ar: "استبعده المعلم بعد السماع", cls: "b-low" },
  unavailable: { code: "Source Unavailable", ar: "المصدر غير متاح عند المراجعة", cls: "b-low" }
};
const AUDIO_SKILLS = {
  unknown: "غير محدد — لم يُراجع المحتوى",
  listening: "Listening — استماع",
  speaking: "Speaking — تحدث/حوار",
  pronunciation: "Pronunciation — نطق",
  writing: "Writing — كتابة/إملاء منطوق",
  grammar: "Grammar — قواعد",
  exercises: "Exercises and Activities — تمارين وأنشطة"
};
/* تأجيل مؤقت مقصود لتشغيل تسجيلات Drive (2026-10-27):
   يبقى الفهرس وكل معرّفات الملفات وحالات المطابقة كما هي، لكن الاختيار
   العادي لأي تسجيل لا يبدأ طلب وسائط من Drive ولا يكرر المراحل الفاشلة.
   أدوات التشخيص وحدها تستطيع تجاوز هذا الباب عند بدء اختبار صريح. */
const AUDIO_PLAYBACK_DEFERRED = true;
const AUDIO_DEFERRED_NOTICE = "تشغيل التسجيلات الصوتية قيد الإصلاح، وسيُعاد تفعيله لاحقًا";
/* [اسم الملف الأصلي في Drive, معرّف Drive, الحجم كما ظهر في قائمة المجلد] */
const DRIVE_AUDIO_FILES = [
  ["01.mp3", "1AOkQSESkfZmEQSZAXEZBEV2nuSkG8StR", "4 MB"],
  ["02.mp3", "1zaVHmXf2qMiCr-N_Sl45UzEDwsS4FPVy", "5.2 MB"],
  ["03.mp3", "1t04A_L-npDusmb8wSWwGHzPumB29eU1m", "1.5 MB"],
  ["04.mp3", "1DPqfQbPT_--Jmr4wX0yhjmA3Kag1ThNU", "7.5 MB"],
  ["05.mp3", "1AhkU0STwr57UHXInuwetnTSxE90HyL5S", "5.2 MB"],
  ["06.mp3", "1pBuUGv7kuK6kPfuLJ4iODqRNdtQICw3D", "8.9 MB"],
  ["07.mp3", "1EkQArjQv7TUfPIdWOgKTLKbEREVcgeSl", "3.3 MB"],
  ["08.mp3", "15ZPOGmPVdQHHx_Dg6EO9ge85rZzIEykH", "2.2 MB"],
  ["09.mp3", "1WhLQCgILDF0EJPYelKvQDujW6IdtxSR-", "1.2 MB"],
  ["10.mp3", "1yem-NuEGPHDpthhAaGrCld_w1GQWzY_u", "4.3 MB"],
  ["11.mp3", "12FCs2mhgA0wVp6M3rD9gJCgGMS_5APEF", "4.3 MB"],
  ["12.mp3", "1FYUycSjqGm34HNyL9a-szRTOGCN6cYBZ", "940 KB"],
  ["13.mp3", "1i-lUa5N-Q4-CElcoYDOgKW6QQKPvtGT7", "2 MB"],
  ["14.mp3", "1WgDN00ljzDHp8fQpCRtnNXszf5xF0DLZ", "6.3 MB"],
  ["15.mp3", "1oex4Q1RouYWn8AtZd4one2zOfb9LLjMC", "1.4 MB"],
  ["16.mp3", "12mfBdNYRY5t5BujQkI7hFP6ShHip-33T", "1.8 MB"],
  ["17.mp3", "1syihKjvjrdwCLW-QJLroPCr-TyJPzcgQ", "2.6 MB"],
  ["18.mp3", "1PGTikJKqQBo8LSDJw2Qw2k48SQLStGZH", "3.8 MB"],
  ["19.mp3", "1yQdmGXg-SgquaBsfr2oRY70aPwNIWJ0o", "2.6 MB"],
  ["20.mp3", "1cR4cgOxRZMkiN6ah9ZRG5jz7LWKSDKFB", "2.5 MB"],
  ["21.mp3", "1YHELneD4Rj2BW0n9NF79e4Tf_DiBhyi2", "2.6 MB"],
  ["22.mp3", "1xNvtsPzHk89d03qUyRB0v0hNSPlKT13k", "7.7 MB"],
  ["23.mp3", "1LzZRSiXojKuAcJgaO41KqOqmVR9WW7XX", "3.9 MB"],
  ["24.mp3", "1Xogeei6MftAH2qcnc3-OYNqwXek8NcI5", "2.1 MB"],
  ["25.mp3", "1gR1pyqnkzNybzGI-JCG7FQNbhoIvHi3T", "3.1 MB"],
  ["26.mp3", "1o4cQDNiN3x1Gx5ZMnHrhW0LGs85AGL6y", "3.1 MB"],
  ["27.mp3", "1txL4Hd3xf23PENM7W5uVuZ6yhyRVW2cD", "2.1 MB"],
  ["28.mp3", "1hRU3totYUmcYHkVei9q01f5-x3BUNs8V", "2.6 MB"],
  ["29.mp3", "13IUkDxoN5OSgrXMWVPKD-vjIUDZB8HoH", "2.2 MB"],
  ["30.mp3", "14fmBnteRqH8m9OfiOAdGK1HuTkrU7ehH", "5 MB"],
  ["31.mp3", "1E24L6gH5Vd1cHpbevtizG4ybjM--zsLg", "3.4 MB"],
  ["32.mp3", "1E_CMkvz7Jsp7Bm_X0cntaRE4dEyVjfSz", "2.1 MB"],
  ["33.mp3", "1nOVHT_WYqB4qH-rSaUuhyJqWD8ZHnvoL", "3.4 MB"],
  ["34.mp3", "1WOIosDD1RhCDOurqmPwKp_p7vkAdPp5q", "2.4 MB"],
  ["35.mp3", "1jLtv92PPziGHNVCv2nwJGuwkZo-Uz40n", "1.5 MB"],
  ["36.mp3", "1iPs-4HhPD-fw3osFohS0xdWsyvXHLsFY", "3.3 MB"],
  ["37.mp3", "1X1VsU93tkDlhYtN9pIJBW8epEiSeudEV", "1.3 MB"],
  ["38.mp3", "1E22tlV-jBYZKbWrsPN6VG7nqR2KUERbh", "1.4 MB"],
  ["39.mp3", "1CPcJ5kj9wSci-HD5SZQOrihSoxALDbDE", "2.9 MB"],
  ["40.mp3", "1P03L8vqFpgPdB_7JGVzw4RP-kZeSnk4G", "1.7 MB"],
  ["41.mp3", "1MowjT0PT5u5VQ_F4fgc8K6G0NXRaWrOa", "2.5 MB"],
  ["42.mp3", "1DhY1zkrzgEkCqqli3wS9InINHbsDKDl5", "2.1 MB"],
  ["43.mp3", "1TOrKEEFvHsO830hAlAsh3FuRkUdJprFI", "3.3 MB"],
  ["44.mp3", "1EIUDYzraZEEBrwad0zObSfx3IgJxQhza", "2.9 MB"],
  ["45.mp3", "1xKQbZhrGCnVXBf_lBZRPSl3Nlodop45h", "2.5 MB"],
  ["46.mp3", "1onv6EHxEeUOpQRkGNH-_K1CqONC8FLWs", "4.3 MB"],
  ["47.mp3", "1pYJhKFuAn2zLhIK_EGKCvX3cpQo2CLcJ", "2.4 MB"],
  ["48.mp3", "1kEU07k8ctIofGbhXeEb5Guuk2yNKG4Z0", "3.7 MB"],
  ["49.mp3", "1O_ebNlYieyW4i__7KBvQA2t_ehVcYN_E", "3.4 MB"],
  ["50.mp3", "1SGe6TBt0rK5YDam7Vev5N7L7rOgbn2p_", "2.8 MB"],
  ["51.mp3", "1XxmflVtE7-npywRpKFqYHmWLeqGhuG-N", "5.3 MB"],
  ["52.mp3", "1btN7QyP9mLAhF8tu2GpX8jmfhqKNInB-", "2.2 MB"],
  ["53.mp3", "1JWDHqhM20ZGhKdbl8HsUo0GuDwUiajSb", "1.9 MB"],
  ["54.mp3", "1452C8YNq0FZEAUW-x34IyFOHxKvSIAfV", "2.5 MB"],
  ["55.mp3", "1jjz1lR3w0LH3Y35uCexgU9K1ittI3vri", "2.2 MB"],
  ["56.mp3", "1lfTdyKuwzDdKyPFnesuRyZVGO7gzKVCB", "1.4 MB"],
  ["57.mp3", "1GWauWXv1xYw0Vakgc4N4BugUpQ34yOi1", "4.4 MB"],
  ["58.mp3", "1BdtOzhzgL-C8zoii-eMT5iOylA5xyFEw", "1.3 MB"],
  ["59.mp3", "103TScLXaIxNMm4x2pEHEe6YwkTKpwZ2n", "3.1 MB"],
  ["60.mp3", "1AV3RoBXz4prb9DelROt77PIQTeKbuAvm", "2.6 MB"],
  ["61.mp3", "1ZjpfgmdP0ePsrxTnncLVXCi7a0ApEKsJ", "5.8 MB"],
  ["62.mp3", "1RCBeJPHrVk_sOwt6xunBYEXsCacEmv3X", "1.5 MB"],
  ["63.mp3", "1TN4H3DODF4QROZZrneUKKgPjup5vSVwz", "3.3 MB"],
  ["64.mp3", "1WHDFjmSkiz7Pqxt6SlTesDTr0KNYnQVk", "5.3 MB"],
  ["65.mp3", "1iWH-v37PspZpwrbBsQP-jdolk-nQs8I9", "3.8 MB"],
  ["لغة انجليزية ثامن.mp3", "16nEddn9wlRbKhDy5S3ruagqcj00PbdAY", "93.6 MB"]
];
function driveViewUrl(id) { return `https://drive.google.com/file/d/${id}/view?usp=drive_web`; }
function drivePreviewUrl(id) { return `https://drive.google.com/file/d/${id}/preview`; }
/* نقطة تنزيل Drive المباشرة الحالية (نفس معرّف الملف من قائمة المجلد). رابط uc القديم
   يُحتفظ به محاولة ثانية فقط عند فشل الأولى؛ لا تُخترع أي روابط أو معرّفات هنا. */
function driveStreamUrl(id) { return `https://drive.usercontent.google.com/download?id=${encodeURIComponent(id)}&export=download&confirm=t`; }
function driveLegacyStreamUrl(id) { return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}`; }
/* محاولة مضبوطة بعد سجل متصفح صاحب المشروع في 2026-10-27: فشلت صيغتا
   export=download في Chrome قبل loadedmetadata مع بقاء وضع الجلب نفسه
   CORS anonymous. لذلك نجرب لنفس المعرّف صيغة العرض المضمّن
   export=view&authuser=0 على المضيف نفسه وبوضع CORS نفسه، أي تغيير
   متغير واحد فقط، قبل رابط uc القديم. نجاحها لا يُدّعى قبل أن تصل
   loadedmetadata/canplay/playing من متصفح صاحب المشروع. */
function driveInlineStreamUrl(id) { return `https://drive.usercontent.google.com/download?id=${encodeURIComponent(id)}&export=view&authuser=0`; }
const AUDIO_TRACKS = DRIVE_AUDIO_FILES.map(([file, driveId, size]) => {
  const m = file.match(/^(\d{2})\.mp3$/);
  const n = m ? +m[1] : null;
  return {
    id: m ? "gd-" + m[1] : "gd-full",
    kind: m ? "numbered" : "compilation",
    n,
    file,
    driveId,
    viewUrl: driveViewUrl(driveId),
    previewUrl: drivePreviewUrl(driveId),
    streamUrl: driveStreamUrl(driveId),
    inlineStreamUrl: driveInlineStreamUrl(driveId),
    legacyStreamUrl: driveLegacyStreamUrl(driveId),
    folderUrl: AUDIO_SOURCE.folderUrl,
    size,
    modified: file === "12.mp3" ? "2020-10-22" : file === "لغة انجليزية ثامن.mp3" ? "2018-10-18" : "2018-10",
    duration: "", // غير مذكورة في قائمة Drive؛ تظهر من بيانات المشغّل أو يدخلها المعلم بعد المراجعة
    book: "غير مصرّح به في مجلد المصدر",
    skill: "unknown",
    accessStatus: AUDIO_SOURCE.accessStatus,
    usageStatus: AUDIO_SOURCE.usageStatus
  };
});
/* مرشّح مراجعة يدوي واحد لنموذج Unit 1 — ليس ربطاً معتمداً.
   دليل المعلم (PDF ص41؛ صفحة الدليل 38) يقول بنصّه: «Cassette Section 3 is
   the conversation on PB3»، وملخص Unit 1 يربط الخطوات 6/7 بـ PB3 وCS3.
   وبما أن ملف Drive المسمى 03.mp3 لم يُستمع إليه هنا، يبقى مرشحاً للمقارنة فقط:
   يستمع إليه المعلم؛ فإن طابق حوار PB3 حفظه Verified، وإن لم يطابق استبعده/عدّله. */
const AUDIO_REVIEW_CANDIDATES = [
  { trackId: "gd-03", stepRef: "u1g3", pageActivity: "PB3 — تمرين 1.6 · WB6 · CS3",
    expected: "المحتوى المتوقع إن كان هذا هو CS3: حوار Tom وBill في PB3 (الاسم B-i-l-l، العمر Thirteen، من England).",
    evidence: "TB (ملخص Unit 1 وملاحظة الخطوة 1.6): CS3 هو محادثة PB3. وفي 2026-10-27 زوّد صاحب المشروع رابط هذا الملف مباشرة وحدّده بوصفه تسجيل الوحدة الأولى — تمرين 1.6 لدرس Bill. لم يُستمع إليه في بيئة التطوير، فتبقى المطابقة غير معتمدة حتى يؤكد صاحب المشروع/المعلم أنه سمعه وطابق محتواه." }
];
const AUDIO_REVIEW_CANDIDATE_BY_TRACK = Object.fromEntries(AUDIO_REVIEW_CANDIDATES.map(c => [c.trackId, c]));
const AUDIO_REVIEW_CANDIDATE_BY_STEP = Object.fromEntries(AUDIO_REVIEW_CANDIDATES.map(c => [c.stepRef, c]));

/* تسجيلات أبرزها صاحب المشروع صراحة في 2026-10-27:
   - رابط مجلد المصدر نفسه، مع تحديد 01.mp3 بوصفه «أول درس صوتي رقم 1».
   - رابط ملف 03.mp3 المباشر، مع تحديده بوصفه «تسجيل 1.6 — Bill» في الوحدة الأولى.
   - روابط ملفات 04.mp3 و05.mp3 و06.mp3 المباشرة، مع طلب إضافتها إلى
     المنصة دون ذكر وحدة أو درس أو خطوة لأيٍّ منها.
   هذا توثيق لتعريف/طلب صاحب المشروع وإبراز للروابط داخل المنصة، وليس
   قرار Verified: لم يُستمع إلى أيٍّ منها في بيئة التطوير، وتظل المطابقة
   Mapping Unconfirmed حتى يؤكد صاحب المشروع/المعلم السماع والمحتوى
   من محرّر المراجعة. */
const OWNER_AUDIO_FEATURES = [
  { trackId: "gd-01", title: "أول درس صوتي — رقم 1", context: "01.mp3 داخل مجلد Google Drive المعتمد", viewerDuration: "2:07",
    note: "حدّده صاحب المشروع بوصفه أول درس صوتي رقم 1 داخل مجلد المصدر. لم يذكر في رسالته عنوان درس أو خطوة محددة له، لذلك أُبرز في مكتبة الصوتيات دون ربطه تعسفياً بخطوة." },
  { trackId: "gd-03", title: "Bill — تمرين 1.6", context: "Unit 1 · PB3 · خطوات 6/7 · درس Bill", stepRef: "u1g3", viewerDuration: "0:45",
    note: "زوّد صاحب المشروع رابط هذا الملف مباشرة وحدّده بوصفه التسجيل رقم 1.6 في الوحدة الأولى لدرس Bill. يظهر في درس Bill وبطاقة الصوتيات بهذا التعريف، مع بقائه مرشح مراجعة لا Verified حتى تأكيد السماع." },
  { trackId: "gd-04", title: "ملف صوتي 4", context: "04.mp3 داخل مجلد Google Drive المعتمد", viewerDuration: "4:00",
    note: "زوّد صاحب المشروع رابط هذا الملف مباشرة وطلب إضافته إلى المنصة. كان مفهرساً أصلاً بنفس معرّف Drive، فأُبرز هنا دون إنشاء نسخة مكررة. لم يذكر صاحب المشروع وحدة أو درساً أو خطوة له، ولم يُستمع إليه في بيئة التطوير؛ لذلك يبقى Mapping Unconfirmed ولا يُربط بخطوة بناءً على رقمه." },
  { trackId: "gd-05", title: "ملف صوتي 5", context: "05.mp3 داخل مجلد Google Drive المعتمد", viewerDuration: "2:45",
    note: "زوّد صاحب المشروع رابط هذا الملف مباشرة وطلب إضافته إلى المنصة. كان مفهرساً أصلاً بنفس معرّف Drive، فأُبرز هنا دون إنشاء نسخة مكررة. لم يذكر صاحب المشروع وحدة أو درساً أو خطوة له، ولم يُستمع إليه في بيئة التطوير؛ لذلك يبقى Mapping Unconfirmed ولا يُربط بخطوة بناءً على رقمه." },
  { trackId: "gd-06", title: "ملف صوتي 6", context: "06.mp3 داخل مجلد Google Drive المعتمد", viewerDuration: "4:45",
    note: "زوّد صاحب المشروع رابط هذا الملف مباشرة وطلب إضافته إلى المنصة. كان مفهرساً أصلاً بنفس معرّف Drive، فأُبرز هنا دون إنشاء نسخة مكررة. لم يذكر صاحب المشروع وحدة أو درساً أو خطوة له، ولم يُستمع إليه في بيئة التطوير؛ لذلك يبقى Mapping Unconfirmed ولا يُربط بخطوة بناءً على رقمه." }
];
const OWNER_AUDIO_FEATURE_BY_TRACK = Object.fromEntries(OWNER_AUDIO_FEATURES.map(f => [f.trackId, f]));


function getAudioTrack(id) { return AUDIO_TRACKS.find(t => t.id === id) || null; }
function audioLink(trackId) { return (typeof store !== "undefined" && store.audioLinks || {})[trackId] || null; }
function trackStatus(t) {
  const id = typeof t === "string" ? t : t.id;
  const l = audioLink(id);
  return l && AUDIO_STATUS[l.status] ? l.status : "unconfirmed";
}
function audioStatusMeta(status) { return AUDIO_STATUS[status] || AUDIO_STATUS.unconfirmed; }
function audioBadge(t) {
  const m = audioStatusMeta(trackStatus(t));
  return `<span class="badge ${m.cls}" dir="ltr">${m.code}</span><span class="badge" style="background:#eef4fb;color:var(--blue-dark)">${m.ar}</span>`;
}
function findEngStep(ref) {
  if (typeof ENG8 === "undefined") return null;
  for (const u of ENG8.units) { const s = u.steps.find(x => x.ref === ref); if (s) return { unit: u.n, s }; }
  return null;
}
function audioSkillLabel(v) { return AUDIO_SKILLS[v] || AUDIO_SKILLS.unknown; }
function linkedStepForTrack(t) { const l = audioLink(t.id); return l && l.stepRef ? findEngStep(l.stepRef) : null; }
function trackDurationLabel(t) {
  const l = audioLink(t.id);
  return l && l.duration ? l.duration : "غير مذكورة في Drive — تظهر في المشغّل بعد تحميل البيانات";
}
/* مساعد بحث للمعلم داخل المحرّر فقط: خطوات تذكر موادُّها رقم CS نفسه في الدليل.
   هذا لا يُنشئ أي ربط ولا يُعرض للطالب كأنه مطابقة. */
function csCandidateSteps(cs) {
  const refs = [];
  if (typeof ENG8 === "undefined") return refs;
  ENG8.units.forEach(u => u.steps.forEach(s => {
    const matches = (s.materials || "").match(/CS\s*(\d+)(?:\s*[-–\/](\d+))?/g) || [];
    matches.forEach(tok => {
      const mm = tok.match(/CS\s*(\d+)(?:\s*[-–\/](\d+))?/);
      const a = +mm[1], b = mm[2] ? +mm[2] : a;
      if (cs >= a && cs <= b) refs.push({ unit: u.n, ref: s.ref, steps: s.steps, topic: s.topic });
    });
  }));
  return refs;
}
function allStepOptions(sel) {
  return ENG8.units.flatMap(u => u.steps.map(s => `<option value="${s.ref}" ${sel === s.ref ? "selected" : ""}>Unit ${u.n} · خطوة ${esc(s.steps)} — ${esc(s.topic.slice(0, 38))}</option>`)).join("");
}

function auOpenEnglishStep(ref) {
  if (typeof ENG8 === "undefined" || typeof ENGSEL === "undefined") return;
  for (const u of ENG8.units) {
    const idx = u.steps.findIndex(x => x.ref === ref);
    if (idx >= 0) { ENGSEL.unit = u.n; ENGSEL.step = idx; navigate("englishStep"); return; }
  }
}
function ownerAudioFeaturesHTML() {
  const cards = OWNER_AUDIO_FEATURES.map(f => {
    const t = getAudioTrack(f.trackId);
    if (!t) return "";
    return `<div class="today-item" style="background:#fff;align-items:flex-start;margin-top:9px">
      <button class="play-mini" type="button" onclick="auLoad('${t.id}')" title="اختيار ${esc(t.file)} وعرض بياناته في المشغّل" aria-label="اختيار ${esc(t.file)} وعرض بياناته في المشغّل">🎧</button>
      <div style="flex:1;min-width:0">
        <strong>${esc(f.title)}</strong> <span dir="ltr" style="font-weight:700">${esc(t.file)}</span>
        <small style="display:block">${esc(f.context)} · المدة كما يعرضها مشغّل Drive: <span dir="ltr">${esc(f.viewerDuration)}</span> · Drive ID: <span dir="ltr">${esc(t.driveId)}</span></small>
        <small style="display:block;margin-top:4px">${esc(f.note)}</small>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:7px">${audioBadge(t)}<span class="badge" style="background:#fff4d6;color:#7c4a03">⭐ تعريف/رابط من صاحب المشروع</span></div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-primary btn-sm" type="button" onclick="auLoad('${t.id}')">🎧 عرض البيانات في المشغّل</button>
          <button class="btn btn-ghost btn-sm" type="button" onclick="auRunDriveDiagnostic('${t.id}')">🧪 اختبار البثّ</button>
          <a class="btn btn-ghost btn-sm" href="${t.viewUrl}" target="_blank" rel="noopener">فتح الملف في Drive ↗</a>
          ${f.stepRef ? `<button class="btn btn-ghost btn-sm" type="button" onclick="auOpenEnglishStep('${f.stepRef}')">📘 فتح درس Bill</button>` : `<a class="btn btn-ghost btn-sm" href="${AUDIO_SOURCE.folderUrl}" target="_blank" rel="noopener">فتح مجلد المصدر ↗</a>`}
        </div>
      </div>
    </div>`;
  }).join("");
  return `<div class="panel" style="margin-bottom:16px;border-color:#f2d38a;background:#fffdf5"><h3>⭐ تسجيلات أضافها/حدّدها صاحب المشروع</h3>
    <p style="color:var(--muted);font-size:13.5px">هذه الروابط مضافة هنا بنفس تعريف صاحب المشروع المؤرخ 2026-10-27. ظهورها المميز لا يعني أن المنصة استمعت إليها أو غيّرت حالتها إلى <b dir="ltr">Verified</b>؛ الاعتماد النهائي ما زال من زر «مراجعة الربط» بعد السماع.</p>${cards}</div>`;
}
function gd03DiagnosticGuideHTML() {
  const t = getAudioTrack("gd-03");
  if (!t) return "";
  return `<div class="panel" id="gd03DiagGuide" style="margin-bottom:16px;border:2px solid #7db3e8;background:#f4f9ff">
    <h3 style="margin-top:0">🧪 تشخيص <span dir="ltr">gd-03 / 03.mp3</span> — مكان السجلّ وطريقة إرساله</h3>
    <p style="margin:6px 0">سجلّ التشخيص موجود <b>داخل هذه الصفحة، أسفل المشغّل الموحّد مباشرة</b>، في القسم المسمّى «سجلّ تشخيص بثّ Drive الفعلي في هذا المتصفح» — لا تحتاج إلى فتح أدوات المطوّر. التشخيص <b>لا يعمل تلقائياً عند اختيار تسجيل</b>؛ تبدأ محاولات البثّ وفحص HTTP فقط عندما تضغط زر بدء التشخيص صراحةً.</p>
    <ol style="margin:8px 0 10px;padding-inline-start:22px;line-height:1.9">
      <li>اضغط <b>«بدء تشخيص gd-03»</b> بالأسفل؛ سيفتح السجلّ تلقائياً.</li>
      <li>اضغط زر <b>«▶ تشغيل»</b> الرئيسي مرة واحدة، ثم انتظر حتى تظهر نتيجة أو تنتهي مهلة المحاولة.</li>
      <li>إذا فشلت محاولات المشغّل، سيبدأ تلقائياً فحص HTTP محدود للروابط الثلاثة (<span dir="ltr">Range: bytes=0-15</span>) لتسجيل الحالة و<span dir="ltr">Content-Type</span> والرابط النهائي وتصنيف أول البايتات. انتظر ظهور <span dir="ltr">network-probe-done</span> قبل النسخ.</li>
      <li>مرّر إلى السجلّ المفتوح، واضغط <b>«نسخ تقرير التشخيص»</b>، ثم ألصق النص كله في المحادثة. عند تعذّر النسخ استخدم <b>«تنزيل التقرير .txt»</b> وأرفق الملف.</li>
    </ol>
    <div style="display:flex;gap:7px;flex-wrap:wrap">
      <button class="btn btn-primary btn-sm" type="button" onclick="auRunDriveDiagnostic('gd-03')">🧪 بدء تشخيص gd-03</button>
      <button class="btn btn-ghost btn-sm" type="button" onclick="auDiagShow()">إظهار السجلّ الحالي دون مسحه</button>
      <button class="btn btn-ghost btn-sm" type="button" onclick="auRunNetworkProbe('gd-03')">فحص HTTP فقط</button>
      <a class="btn btn-ghost btn-sm" href="${t.viewUrl}" target="_blank" rel="noopener">صفحة الملف في تبويب منفصل ↗</a>
      <a class="btn btn-ghost btn-sm" href="${t.previewUrl}" target="_blank" rel="noopener">معاينة Drive في نافذة عادية ↗</a>
    </div>
  </div>`;
}
let AU = { kind: "all", status: "all", q: "", current: null, editId: null, reviewStops: false, lastStop: -1, streamStage: 0, loadToken: 0, loadTimer: null, playRequested: false, diag: [], diagnosticTrackId: "", diagnosticForLoad: 0, networkProbeRunning: false, networkProbeToken: 0, networkProbeForLoad: 0, streamEnabledForLoad: false };
function vAudioLibrary() {
  const isEd = ["teacher", "admin"].includes(state.role);
  const q = AU.q.trim().toLowerCase();
  const list = AUDIO_TRACKS.filter(t => (AU.kind === "all" || t.kind === AU.kind)
    && (AU.status === "all" || trackStatus(t) === AU.status)
    && (!q || t.file.toLowerCase().includes(q) || t.driveId.toLowerCase().includes(q) || String(t.n || "").padStart(2, "0") === q));
  const countByStatus = s => AUDIO_TRACKS.filter(t => trackStatus(t) === s).length;
  return `<div class="page-head"><h2>🎧 فهرس صوتيّات إنجليزية الصف الثامن</h2>
  <p>الصف الثامن ← الإنجليزية ← مجلد Drive المعتمد ← التسجيل ← (الوحدة/الخطوة/الصفحة/النشاط بعد سماع المعلم واعتماده).</p></div>
  <div class="why-box"><b>🔎 حالة المصدر والمطابقة — اقرأ قبل الاستخدام في الصف:</b><br>
  المصدر هو مجلد Google Drive «${esc(AUDIO_SOURCE.folderTitle)}» الذي اعتمده صاحب المشروع، وفُحصت قائمته بتاريخ ${esc(AUDIO_SOURCE.checkedAt)}: ${arNum(AUDIO_TRACKS.length)} ملف MP3 مفهرساً بمعرّفاته من Drive دون نسخ داخل المنصة؛ بثّ التسجيلات مؤجل مؤقتاً كما في التنبيه التالي.
  <b>لم تُستمع التسجيلات في بيئة التطوير، والمجلد لا يصرّح بالكتاب أو الوحدة أو الصفحة أو النشاط.</b> لذلك كل تسجيل افتراضياً <b dir="ltr">Mapping Unconfirmed</b>، ورقم اسم الملف وحده ليس دليل ربط.
  ${isEd ? "بوصفك معلماً/مشرف محتوى: استمع إلى التسجيل كاملاً، قارنه بمواد الخطوة ونصوصها، ثم احفظ قرارك من زر «مراجعة الربط»." : "لا يظهر أي تسجيل داخل درس بوصفه صوتاً معتمداً إلا بعد أن يستمع إليه المعلم ويحفظ قرار اعتماد صريحاً."}
  <br><small>${esc(AUDIO_SOURCE.accessNote)} ${esc(AUDIO_SOURCE.usageNote)} <a href="${AUDIO_SOURCE.folderUrl}" target="_blank" rel="noopener">فتح مجلد المصدر ↗</a></small></div>
  <div class="panel" role="status" aria-live="polite" style="margin-bottom:16px;border:2px solid #f2c14e;background:#fff8e1">
    <h3 style="margin-top:0">⚠️ ${AUDIO_DEFERRED_NOTICE}</h3>
    <p style="margin:6px 0">أوقفنا مؤقتاً محاولات تحميل تسجيلات Google Drive التلقائية حتى لا تعيق استخدام المنصة. يبقى الفهرس كاملاً بمعرّفاته وحالات مطابقته، واختيار أي تسجيل يعرض بياناته وروابط Drive فقط دون طلب الصوت. بقية الدروس والتنقل والأنشطة والاختبارات وحفظ التقدم المحلي مستمرة كالمعتاد.</p>
    <p style="margin:6px 0">أدوات التشخيص بالأسفل باقية للاستخدام عند الحاجة فقط؛ لا تبدأ أي محاولة بثّ إلا بعد ضغط زرها الصريح. يمكنك أيضاً استخدام <b>«النطق الآلي»</b> اختيارياً من المشغّل أو أزرار 🔊 في الدروس والأنشطة؛ وهو صوت متصفحك عند الضغط فقط، وليس التسجيل الصوتي الأصلي.</p>
  </div>
  ${gd03DiagnosticGuideHTML()}
  ${ownerAudioFeaturesHTML()}
  ${audioPlayerHTML()}
  <div class="filters" aria-label="تصفية التسجيلات">
    <button class="chip-filter ${AU.kind === "all" ? "active" : ""}" onclick="AU.kind='all';navigate('audio')">الكل (${arNum(AUDIO_TRACKS.length)})</button>
    <button class="chip-filter ${AU.kind === "numbered" ? "active" : ""}" onclick="AU.kind='numbered';navigate('audio')">ملفات مرقمة 01–65</button>
    <button class="chip-filter ${AU.kind === "compilation" ? "active" : ""}" onclick="AU.kind='compilation';navigate('audio')">الملف التجميعي</button>
    <button class="chip-filter ${AU.status === "all" ? "active" : ""}" onclick="AU.status='all';navigate('audio')">كل حالات المطابقة</button>
    <button class="chip-filter ${AU.status === "verified" ? "active" : ""}" onclick="AU.status='verified';navigate('audio')">Verified (${arNum(countByStatus("verified"))})</button>
    <button class="chip-filter ${AU.status === "unconfirmed" ? "active" : ""}" onclick="AU.status='unconfirmed';navigate('audio')">Mapping Unconfirmed (${arNum(countByStatus("unconfirmed"))})</button>
    <button class="chip-filter ${AU.status === "review" ? "active" : ""}" onclick="AU.status='review';navigate('audio')">Needs Review (${arNum(countByStatus("review"))})</button>
    <input type="search" placeholder="رقم/اسم الملف أو معرّف Drive…" value="${esc(AU.q)}" oninput="AU.q=this.value" onkeydown="if(event.key==='Enter')navigate('audio')" aria-label="بحث في فهرس الصوتيات">
    <button class="btn btn-ghost btn-sm" onclick="navigate('audio')">بحث</button>
  </div>
  <div class="task-list">
  ${list.length ? list.map(t => trackRowHTML(t, isEd)).join("") : `<div class="empty-state"><div class="e-ic">🎧</div><strong>لا تسجيلات بهذه التصفية</strong><p>غيّر نوع الملف أو حالة المطابقة أو كلمة البحث.</p></div>`}
  </div>
  <p class="print-note" style="margin-top:12px">بيانات هذا الفهرس (أسماء الملفات ومعرّفاتها وأحجامها) مأخوذة من قائمة مجلد Drive العامة عند الفحص. المدة الفعلية ليست في قائمة Drive؛ تظهر في المشغّل عندما يحمّل المتصفح بيانات الملف، ويمكن للمعلم تدوينها في قرار المراجعة. الفهرس الآلي القابل للمراجعة محفوظ أيضاً في <span dir="ltr">docs/english8-audio-index.csv</span>.</p>`;
}
function trackRowHTML(t, isEd) {
  const l = audioLink(t.id);
  const linked = linkedStepForTrack(t);
  const candidate = AUDIO_REVIEW_CANDIDATE_BY_TRACK[t.id];
  const ownerFeature = OWNER_AUDIO_FEATURE_BY_TRACK[t.id];
  return `<div class="task-item audio-row ${AU.current && AU.current.id === t.id ? "playing" : ""}" style="align-items:flex-start">
    <button class="play-mini" onclick="auLoad('${t.id}')" title="اختيار ${esc(t.file)} وعرض بيانات فهرسه في المشغّل" aria-label="اختيار ${esc(t.file)} وعرض بيانات فهرسه">🎧</button>
    <div style="flex:1;min-width:0">
      <strong dir="ltr" style="text-align:left;display:block">${esc(t.file)}</strong>
      <small>المصدر: Google Drive · الحجم ${esc(t.size)} · آخر تعديل ظاهر ${esc(t.modified)} · الكتاب: ${esc(t.book)} · المدة: ${esc(trackDurationLabel(t))}</small>
      <small style="display:block;word-break:break-all">Drive ID: <span dir="ltr">${esc(t.driveId)}</span> · <a href="${t.viewUrl}" target="_blank" rel="noopener">فتح الملف في Drive ↗</a></small>
      <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${audioBadge(t)}${linked ? `<span class="badge b-good">مرتبط بقرار المعلم: Unit ${linked.unit} · خطوة ${esc(linked.s.steps)}${l.page ? " · " + esc(l.page) : ""}</span>` : ""}${candidate && trackStatus(t) !== "verified" ? '<span class="badge b-mid">مرشّح مراجعة يدوي لنموذج Unit 1 — ليس اعتماداً</span>' : ""}${ownerFeature ? `<span class="badge" style="background:#fff4d6;color:#7c4a03">⭐ صاحب المشروع: ${esc(ownerFeature.title)}</span>` : ""}</div>
      ${candidate && trackStatus(t) !== "verified" ? `<small style="display:block;margin-top:5px"><b>لماذا هذا المرشح؟</b> ${esc(candidate.evidence)} ${esc(candidate.expected)}</small>` : ""}${ownerFeature ? `<small style="display:block;margin-top:5px"><b>تعريف صاحب المشروع (2026-10-27):</b> ${esc(ownerFeature.context)} — ${esc(ownerFeature.note)}</small>` : ""}
      ${l ? `<small style="display:block;margin-top:5px">مهارة بقرار المراجع: ${esc(audioSkillLabel(l.skill || "unknown"))}${l.at ? " · آخر قرار " + esc(l.at) : ""}${l.by ? " · " + esc(l.by) : ""}</small>` : ""}
      ${l && l.note ? `<small style="display:block;margin-top:4px">📝 وصف/ملاحظة المراجعة: ${esc(l.note)}</small>` : ""}
      ${isEd && AU.editId === t.id ? audioEditorHTML(t) : ""}
    </div>
    ${isEd ? `<button class="btn btn-ghost btn-sm" style="flex:none" onclick="AU.editId=AU.editId==='${t.id}'?null:'${t.id}';navigate('audio')">🔗 مراجعة الربط</button>` : ""}
  </div>`;
}
function audioEditorHTML(t) {
  const l = audioLink(t.id) || {};
  const currentStatus = l.status || trackStatus(t);
  const helper = t.n && t.n >= 1 && t.n <= 64 ? csCandidateSteps(t.n) : [];
  const candidate = AUDIO_REVIEW_CANDIDATE_BY_TRACK[t.id];
  return `<div class="panel" style="margin-top:12px;background:#fbfdff">
    <h4 style="margin-bottom:8px">✏️ قرار مطابقة التسجيل — يُحفظ في هذا الجهاز بوصفه نموذجاً تجريبياً</h4>
    ${candidate ? `<div class="why-box"><b>مرشح مراجعة يدوي:</b> ${esc(candidate.evidence)}<br>${esc(candidate.expected)} لا تحفظ «Verified» إلا إذا سمعت هذا المحتوى فعلاً.</div>` : ""}
    ${helper.length ? `<p class="print-note">مساعد بحث فقط (لا يُعرض للطالب ولا يربط تلقائياً): مواد الخطوات التالية في الدليل تذكر <span dir="ltr">CS${t.n}</span>: ${helper.map(c => `Unit ${c.unit} خطوة ${esc(c.steps)}`).join("، ")}. التشابه الرقمي وحده ليس مطابقة؛ السماع هو الدليل.</p>` : ""}
    <div class="form-grid">
      <label class="f-label">حالة المطابقة بعد فحصك<select class="f-input" id="auEdStatus">
        ${Object.entries(AUDIO_STATUS).map(([v, m]) => `<option value="${v}" ${currentStatus === v ? "selected" : ""}>${m.code} — ${m.ar}</option>`).join("")}</select></label>
      <label class="f-label">الخطوة في Crescent Book 2<select class="f-input" id="auEdStep"><option value="">— بلا ربط بخطوة —</option>${allStepOptions(l.stepRef || (candidate ? candidate.stepRef : ""))}</select></label>
      <label class="f-label">الصفحة/النشاط<input class="f-input" id="auEdPage" placeholder="مثال: PB3 تمرين 1.6 · WB6" value="${esc(l.page || (candidate ? candidate.pageActivity : ""))}"></label>
      <label class="f-label">المهارة بعد مراجعة المحتوى<select class="f-input" id="auEdSkill">${Object.entries(AUDIO_SKILLS).map(([v, lb]) => `<option value="${v}" ${(l.skill || "unknown") === v ? "selected" : ""}>${lb}</option>`).join("")}</select></label>
      <label class="f-label">المدة الفعلية إن قرأتها من المشغّل<input class="f-input" id="auEdDuration" dir="ltr" style="text-align:left" placeholder="مثال: 01:35" value="${esc(l.duration || "")}"></label>
      <label class="f-label full2">وصف مختصر/ما سمعتَه فعلاً<input class="f-input" id="auEdNote" placeholder="مثال: استمعت إليه كاملاً؛ حوار PB3 بنفس ترتيب أسئلة Tom وإجابات Bill" value="${esc(l.note || "")}"></label>
    </div>
    <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
      <button class="btn btn-primary btn-sm" onclick="auSaveLink('${t.id}')">💾 حفظ قرار المراجعة</button>
      <button class="btn btn-danger-ghost btn-sm" onclick="auClearLink('${t.id}')">إزالة قراري (عودة إلى Mapping Unconfirmed)</button>
    </div>
  </div>`;
}
function auSaveLink(id) {
  const status = document.getElementById("auEdStatus").value;
  const stepRef = document.getElementById("auEdStep").value || "";
  if (status === "verified" && !stepRef) { toast("⚠️ لا يمكن حفظ Verified دون اختيار الخطوة التي سمعتَ مطابقتها للتسجيل"); return; }
  (store.audioLinks = store.audioLinks || {})[id] = {
    status,
    stepRef,
    page: document.getElementById("auEdPage").value.trim(),
    skill: document.getElementById("auEdSkill").value,
    duration: document.getElementById("auEdDuration").value.trim(),
    note: document.getElementById("auEdNote").value.trim(),
    by: state.user ? state.user.name : "", at: new Date().toISOString().slice(0, 10)
  };
  save(); toast("💾 حُفظ قرار مطابقة التسجيل في هذا الجهاز"); navigate("audio");
}
function auClearLink(id) { if (store.audioLinks) delete store.audioLinks[id]; save(); toast("أُعيد التسجيل إلى Mapping Unconfirmed"); navigate("audio"); }

/* مشغّل تعليمي موحّد: الوضع الافتراضي استماع كامل بلا توقفات/أسئلة قسرية.
   وضع مراجعة المعلم الاختياري يوقف كل 30 ثانية لتدوين المطابقة. */
function audioPlayerHTML() {
  const t = AU.current;
  return `<div class="panel audio-player" id="auPlayerBox">
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      <span style="font-size:30px">🎧</span>
      <div style="flex:1;min-width:200px"><strong id="auTitle">${t ? esc(t.file) : "لم يُختر تسجيل بعد"}</strong>
      <small style="display:block" id="auSub">${t ? (auDeferredActive() ? "Google Drive · بيانات الفهرس فقط — تشغيل التسجيل قيد الإصلاح" : "Google Drive · بثّ مباشر من المصدر") : "اختر تسجيلاً من الفهرس لعرض بياناته وحالته — الدروس والأنشطة والاختبارات متاحة دون انتظار تشغيل Drive."}</small></div>
      <span id="auState" class="tag">${auDeferredActive() ? "قيد الإصلاح" : "جاهز"}</span>
    </div>
    <audio id="auEl" preload="none" crossorigin="anonymous" style="display:none"></audio>
    <div class="au-controls">
      <button class="btn btn-primary" id="auPlayBtn" onclick="auToggle()">${auDeferredActive() ? "▶ التشغيل قيد الإصلاح" : "▶ تشغيل"}</button>
      <button class="btn btn-ghost btn-sm" onclick="auRestart()">⏮ من البداية</button>
      <button class="btn btn-ghost btn-sm" onclick="auSeekBy(-10)">رجوع ١٠ ثوانٍ</button>
      <button class="btn btn-ghost btn-sm" onclick="auSeekBy(10)">تقديم ١٠ ثوانٍ</button>
      <input type="range" id="auSeek" min="0" max="1000" value="0" oninput="auSeekTo(this.value)" aria-label="شريط التقدم">
      <span dir="ltr" id="auTime" style="font-family:Cairo;font-weight:800">--:-- / --:--</span>
      <label style="font-size:13px">السرعة <select id="auRate" class="f-input" style="width:auto;display:inline-block;padding:5px 8px" onchange="auRateSet(this.value)"><option>0.75</option><option selected>1</option><option>1.25</option><option>1.5</option></select></label>
      <label style="font-size:13px">الصوت <input type="range" id="auVol" min="0" max="100" value="90" oninput="auVolSet(this.value)" style="width:80px;vertical-align:middle" aria-label="مستوى الصوت"></label>
      <button class="btn btn-ghost btn-sm" type="button" onclick="auShowDrivePreview()">مشغّل Drive الرسمي (بديل)</button>
      <button class="btn btn-ghost btn-sm" type="button" onclick="auRunDriveDiagnostic()">🧪 اختبار تشخيص البثّ</button>
      <a class="btn btn-ghost btn-sm" id="auOpenDrive" href="${t ? t.viewUrl : AUDIO_SOURCE.folderUrl}" target="_blank" rel="noopener">فتح في Google Drive ↗</a>
      <label class="check-row" style="margin:0;padding:7px 11px"><input type="checkbox" ${AU.reviewStops ? "checked" : ""} onchange="AU.reviewStops=this.checked;AU.lastStop=-1"> وضع مراجعة اختياري: إيقاف كل ٣٠ ثانية</label>
    </div>
    <div id="auMsg"></div>
    <div style="margin-top:10px;background:#f3fbf6;border:1px solid #bfe3cc;border-radius:12px;padding:10px 12px">
      <b>🔊 النطق الآلي (اختياري)</b>
      <p class="print-note" style="margin:6px 0">اكتب كلمة أو عبارة إنجليزية واضغط «النطق الآلي» لسماعها بصوت متصفحك. لا يعمل هذا الخيار تلقائياً، ولا يقرأ التسجيل المختار ولا يدّعي معرفة محتواه؛ <b>ليس التسجيل الصوتي الأصلي</b>.</p>
      <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">
        <input class="f-input" id="auTtsText" dir="ltr" style="flex:1;min-width:210px;text-align:left" placeholder="Write an English word or phrase…" aria-label="نص النطق الآلي" onkeydown="if(event.key==='Enter')auSpeakAutomatedText()">
        <button class="btn btn-primary btn-sm" type="button" onclick="auSpeakAutomatedText()">🔊 النطق الآلي</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="auStopAutomatedSpeech()">إيقاف النطق</button>
      </div>
    </div>
    <div id="auPreviewWrap" class="hidden" style="margin-top:10px">
      <p class="print-note" style="margin-bottom:7px">مشغّل Google Drive الرسمي البديل — اضغط زر التشغيل داخله. هذا إطار من Drive نفسه، لا نسخة مستضافة لدينا. للمقارنة خارج إطار المنصة: <a id="auOpenPreview" href="${t ? t.previewUrl : AUDIO_SOURCE.folderUrl}" target="_blank" rel="noopener">فتح نفس المعاينة في نافذة متصفح عادية ↗</a>.</p>
      <iframe id="auPreviewFrame" title="مشغّل Google Drive" style="width:100%;height:180px;border:0;border-radius:12px;background:#fff" loading="eager" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
    <details id="auDiagWrap" ${AU.diag && AU.diag.length ? "open" : ""} style="margin-top:10px;background:#f7faff;border:1px solid #d7e7f8;border-radius:12px;padding:9px 11px">
      <summary style="cursor:pointer;font-weight:800">🧪 سجلّ تشخيص بثّ Drive الفعلي في هذا المتصفح</summary>
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin:8px 0">
        <button class="btn btn-ghost btn-sm" type="button" onclick="auRunDriveDiagnostic()">بدء اختبار التسجيل الحالي</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="auRunNetworkProbe()">فحص HTTP للروابط الثلاثة</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="auDiagCopy()">نسخ تقرير التشخيص</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="auDiagDownload()">تنزيل التقرير .txt</button>
        <button class="btn btn-ghost btn-sm" type="button" onclick="auDiagClear(true)">مسح السجلّ</button>
      </div>
      <div id="auDiagSummary" dir="ltr" style="text-align:left;white-space:pre-wrap;word-break:break-word;background:#eef6ff;border:1px solid #c7def5;border-radius:9px;padding:9px;margin:8px 0;font-size:12.5px;line-height:1.65">${esc(auDiagSummaryText())}</div>
      <pre id="auDiagLog" dir="ltr" style="text-align:left;white-space:pre-wrap;word-break:break-all;max-height:260px;overflow:auto;background:#fff;border:1px solid #e2edf7;border-radius:9px;padding:9px;font-size:12px;line-height:1.55">${esc(auDiagText())}</pre>
      <p class="print-note" style="margin:7px 0 0">يُضبط المشغّل حالياً على وضع <span dir="ltr">CORS anonymous</span>، لكن هذا وحده ليس تشخيصاً لسبب ما حدث في متصفحك. الدليل هو تسلسل الأحداث في هذا السجلّ نفسه: هل وصل <span dir="ltr">loadedmetadata</span> أو <span dir="ltr">canplay</span>؟ وما آخر <span dir="ltr">MediaError</span> وقيمتا <span dir="ltr">readyState/networkState</span>؟ لا نسمّي السبب CORS أو صلاحيات Drive قبل قراءة تلك القيم.</p>
    </details>
    <p class="print-note">${AUDIO_PLAYBACK_DEFERRED ? `اختيار تسجيل من الفهرس الآن يعرض بياناته وحالته فقط و<b>لا يطلب الصوت من Drive</b>. يبدأ اختبار البثّ حصراً من أدوات التشخيص عند الحاجة؛ أما الدروس والتنقل والأنشطة والاختبارات والتقدم المحلي فتعمل دون انتظار الملفات الصوتية.` : `اختيار تسجيل من الفهرس يطلب بياناته ومدّته فقط؛ <b>لن يبدأ الصوت حتى تضغط «▶ تشغيل»</b>. يتطلب البثّ اتصالاً بالإنترنت ووصولاً متاحاً إلى Drive.`}</p>
  </div>`;
}
function auEl() { return document.getElementById("auEl"); }
function auMsg(txt) { const m = document.getElementById("auMsg"); if (m) m.innerHTML = txt ? `<div class="why-box">${txt}</div>` : ""; }
function auFmtTime(sec) {
  if (!isFinite(sec) || sec < 0) return "--:--";
  return Math.floor(sec / 60) + ":" + String(Math.floor(sec % 60)).padStart(2, "0");
}
function auSetState(txt) { const s = document.getElementById("auState"); if (s) s.textContent = txt; }
function auDeferredActive() { return AUDIO_PLAYBACK_DEFERRED && !(typeof AU !== "undefined" && AU.streamEnabledForLoad); }
function auDeferredHTML(t) {
  const file = t ? ` لملف <span dir="ltr">${esc(t.file)}</span>` : "";
  return `⚠️ <b>${AUDIO_DEFERRED_NOTICE}.</b><br>عرضنا بيانات الفهرس${file} وحالة مطابقته فقط، ولم نبدأ أي طلب صوت من Google Drive. يمكنك متابعة الدروس والأنشطة والاختبارات وحفظ تقدمك المحلي الآن. إذا احتجت فحص البثّ لاحقاً، استخدم أدوات التشخيص أسفل المشغّل — فهي المسار الصريح الوحيد لمحاولة البثّ أثناء هذا التأجيل.`;
}
function auShowDeferredMessage() {
  auSetState("قيد الإصلاح");
  const b = document.getElementById("auPlayBtn"); if (b) b.textContent = "▶ التشغيل قيد الإصلاح";
  auMsg(auDeferredHTML(typeof AU !== "undefined" ? AU.current : null));
}
function auSpeakAutomatedText() {
  const input = document.getElementById("auTtsText");
  const text = input ? input.value.trim() : "";
  if (!text) { toast("اكتب كلمة أو عبارة إنجليزية أولاً لاستخدام النطق الآلي"); if (input) input.focus(); return; }
  if (typeof speakEN === "function") speakEN(text);
  else toast("⚠️ النطق الآلي غير متاح في هذا المتصفح/الجهاز");
}
function auStopAutomatedSpeech() {
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
}
function auUpdateTime(el) {
  if (!el) return;
  const tm = document.getElementById("auTime"), seek = document.getElementById("auSeek");
  if (tm) tm.textContent = auFmtTime(el.currentTime || 0) + " / " + (isFinite(el.duration) && el.duration > 0 ? auFmtTime(el.duration) : "--:--");
  if (seek) seek.value = isFinite(el.duration) && el.duration > 0 ? Math.round((el.currentTime || 0) / el.duration * 1000) : 0;
}
function auClearLoadTimer() { if (AU.loadTimer) { clearTimeout(AU.loadTimer); AU.loadTimer = null; } }
function auArmLoadTimer(token) {
  auClearLoadTimer();
  AU.loadTimer = setTimeout(() => {
    if (token !== AU.loadToken) return;
    const el = auEl();
    if (el && el.readyState < 1) auHandleLoadFailure("timeout");
  }, 20000);
}
function auMediaErrorInfo(el) {
  const err = el && el.error, code = err ? err.code : 0;
  const names = {
    1: ["MEDIA_ERR_ABORTED", "أوقف المتصفح جلب الوسائط"],
    2: ["MEDIA_ERR_NETWORK", "حدث خطأ شبكة أثناء جلب الصوت"],
    3: ["MEDIA_ERR_DECODE", "وصلت بيانات لكن تعذّر فك ترميزها"],
    4: ["MEDIA_ERR_SRC_NOT_SUPPORTED", "لم يحصل المتصفح على مصدر صوت قابل للتشغيل من الرابط"]
  };
  const got = names[code] || ["NO_MEDIA_ERROR_YET", "لم تصل بيانات وصفية من المصدر في المهلة المحددة"];
  return { code, name: got[0], ar: got[1] };
}
function auDiagText() {
  return AU.diag && AU.diag.length ? AU.diag.join("\n") : "No diagnostic events yet. Select a recording, or press the Drive diagnostic test.";
}
function auDiagField(line, name) {
  const m = String(line).match(new RegExp("(?:^|\\|\\s*)" + name + "=([^|]*)"));
  return m ? m[1].trim() : "";
}
function auDiagHasEvent(name) {
  return (AU.diag || []).some(line => auDiagField(line, "event") === name);
}
function auDiagSummaryText() {
  const lines = AU.diag || [];
  if (!lines.length) return "Diagnostic summary: no events recorded yet. Press the gd-03 diagnostic button, then press the main Play button once.";
  const last = lines[lines.length - 1];
  const trackLine = lines.find(line => auDiagField(line, "track") && auDiagField(line, "track") !== "none") || last;
  const events = [];
  lines.forEach(line => {
    const ev = auDiagField(line, "event");
    if (ev && !events.includes(ev)) events.push(ev);
  });
  const errorLine = [...lines].reverse().find(line => {
    const err = auDiagField(line, "mediaError");
    return err && !/^0:/.test(err);
  });
  const seen = name => auDiagHasEvent(name) ? "YES" : "NO";
  return [
    "Diagnostic summary (facts from this browser only; no cause inferred)",
    `track=${auDiagField(trackLine, "track") || "unknown"}`,
    `lastEvent=${auDiagField(last, "event") || "unknown"}`,
    `loadedmetadata=${seen("loadedmetadata")} | canplay=${seen("canplay")} | playing=${seen("playing")}`,
    `latestReadyState=${auDiagField(last, "readyState")} | latestNetworkState=${auDiagField(last, "networkState")} | latestDuration=${auDiagField(last, "duration")} | latestCurrentTime=${auDiagField(last, "currentTime")}`,
    `latestMediaError=${auDiagField(last, "mediaError") || "none recorded"}`,
    `lastNonZeroMediaError=${errorLine ? auDiagField(errorLine, "mediaError") : "none recorded"}`,
    `fetchMode=${auDiagField(last, "fetchMode")} | stage=${auDiagField(last, "stage")}`,
    `networkProbeDownload=${auDiagProbeSummary(lines, "download")}`,
    `networkProbeInlineView=${auDiagProbeSummary(lines, "inline-view")}`,
    `networkProbeLegacyDownload=${auDiagProbeSummary(lines, "legacy-download")}`,
    `eventsSeen=${events.join(", ")}`
  ].join("\n");
}
function auDiagProbeSummary(lines, label) {
  const line = [...lines].reverse().find(x => ["network-probe-response", "network-probe-error"].includes(auDiagField(x, "event")) && auDiagField(x, "probe") === label);
  if (!line) return "not run";
  if (auDiagField(line, "event") === "network-probe-error") return `ERROR ${auDiagField(line, "errorName")}: ${auDiagField(line, "errorMessage")}`;
  return `HTTP ${auDiagField(line, "httpStatus")}; contentType=${auDiagField(line, "contentType")}; body=${auDiagField(line, "bodyClass")}; finalUrl=${auDiagField(line, "finalUrl")}`;
}
function auDiagSafeValue(value) {
  return String(value == null ? "" : value).replace(/[|\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}
function auProbeHeader(headers, name) {
  try { return auDiagSafeValue(headers && headers.get ? headers.get(name) : ""); } catch (e) { return ""; }
}
function auClassifyProbeBytes(bytes) {
  if (!bytes || !bytes.length) return "empty";
  if (bytes.length >= 3 && bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return "mp3-id3";
  if (bytes.length >= 2 && bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) return "mpeg-audio-frame-sync";
  let text = "";
  try { text = String.fromCharCode(...bytes).replace(/^\s+/, "").toLowerCase(); } catch (e) {}
  if (text.startsWith("<!doctype") || text.startsWith("<html") || text.startsWith("<head") || text.startsWith("<body") || text.startsWith("<")) return "html-like";
  if (text.startsWith("{") || text.startsWith("[")) return "json-like";
  return "unknown";
}
async function auReadProbePrefix(response, maxBytes) {
  if (!response || !response.body || !response.body.getReader) return new Uint8Array();
  const reader = response.body.getReader();
  let out = new Uint8Array();
  try {
    while (out.length < maxBytes) {
      const part = await reader.read();
      if (part.done) break;
      const value = part.value || new Uint8Array();
      if (!value.length) continue;
      const merged = new Uint8Array(out.length + value.length);
      merged.set(out); merged.set(value, out.length);
      out = merged.slice(0, maxBytes);
    }
  } finally {
    try { await reader.cancel(); } catch (e) {}
  }
  return out;
}
async function auNetworkProbeOne(label, url) {
  const started = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
  auDiag("network-probe-start", `probe=${label} | method=GET | fetchMode=cors | credentials=omit | range=bytes=0-15 | requestedUrl=${auDiagSafeValue(url)}`);
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = controller ? setTimeout(() => { try { controller.abort(); } catch (e) {} }, 20000) : null;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      redirect: "follow",
      headers: { Range: "bytes=0-15" },
      signal: controller ? controller.signal : undefined
    });
    const bytes = await auReadProbePrefix(response, 16);
    const elapsedMs = Math.round((typeof performance !== "undefined" && performance.now ? performance.now() : Date.now()) - started);
    const firstBytesHex = [...bytes].map(b => b.toString(16).padStart(2, "0")).join(" ");
    auDiag("network-probe-response", [
      `probe=${label}`,
      `httpStatus=${response.status}`,
      `statusText=${auDiagSafeValue(response.statusText)}`,
      `responseType=${auDiagSafeValue(response.type)}`,
      `redirected=${response.redirected}`,
      `finalUrl=${auDiagSafeValue(response.url)}`,
      `contentType=${auProbeHeader(response.headers, "content-type")}`,
      `contentLength=${auProbeHeader(response.headers, "content-length")}`,
      `contentRange=${auProbeHeader(response.headers, "content-range")}`,
      `contentDisposition=${auProbeHeader(response.headers, "content-disposition")}`,
      `accessControlAllowOrigin=${auProbeHeader(response.headers, "access-control-allow-origin")}`,
      `crossOriginResourcePolicy=${auProbeHeader(response.headers, "cross-origin-resource-policy")}`,
      `crossOriginEmbedderPolicy=${auProbeHeader(response.headers, "cross-origin-embedder-policy")}`,
      `bodyClass=${auClassifyProbeBytes(bytes)}`,
      `firstBytesHex=${firstBytesHex}`,
      `bytesInspected=${bytes.length}`,
      `elapsedMs=${elapsedMs}`,
      `requestedUrl=${auDiagSafeValue(url)}`
    ].join(" | "));
    return true;
  } catch (e) {
    const elapsedMs = Math.round((typeof performance !== "undefined" && performance.now ? performance.now() : Date.now()) - started);
    auDiag("network-probe-error", `probe=${label} | httpStatus=unavailable | errorName=${auDiagSafeValue(e && e.name ? e.name : "Error")} | errorMessage=${auDiagSafeValue(e && e.message ? e.message : String(e))} | elapsedMs=${elapsedMs} | requestedUrl=${auDiagSafeValue(url)} | note=Fetch API does not expose an HTTP status when the browser rejects the fetch before delivering a readable response`);
    return false;
  } finally {
    if (timer) clearTimeout(timer);
  }
}
function auDiagResourceTiming(reason) {
  const t = AU.current;
  if (!t || typeof performance === "undefined" || !performance.getEntriesByType) return;
  let entries = [];
  try { entries = performance.getEntriesByType("resource").filter(e => e.name && e.name.includes(t.driveId)); } catch (e) { return; }
  if (!entries.length) {
    auDiag("resource-timing-none", `source=${auDiagSafeValue(reason)} | note=No PerformanceResourceTiming entry matching this Drive ID was exposed to the page`);
    return;
  }
  entries.slice(-12).forEach((e, i) => {
    auDiag("resource-timing", [
      `source=${auDiagSafeValue(reason)}`,
      `resourceIndex=${i}`,
      `resourceName=${auDiagSafeValue(e.name)}`,
      `initiatorType=${auDiagSafeValue(e.initiatorType)}`,
      `responseStatus=${e.responseStatus || 0}`,
      `transferSize=${e.transferSize || 0}`,
      `encodedBodySize=${e.encodedBodySize || 0}`,
      `decodedBodySize=${e.decodedBodySize || 0}`,
      `durationMs=${Math.round(e.duration || 0)}`,
      `nextHopProtocol=${auDiagSafeValue(e.nextHopProtocol)}`,
      `redirectStart=${Math.round(e.redirectStart || 0)}`,
      `redirectEnd=${Math.round(e.redirectEnd || 0)}`,
      `responseStart=${Math.round(e.responseStart || 0)}`,
      `responseEnd=${Math.round(e.responseEnd || 0)}`
    ].join(" | "));
  });
}
async function auRunNetworkProbe(trackId, fromMediaFailure) {
  const t = (trackId ? getAudioTrack(trackId) : null) || AU.current || getAudioTrack("gd-03");
  if (!t || AU.networkProbeRunning) return false;
  if (typeof fetch === "undefined") { auDiag("network-probe-unavailable", "Fetch API is unavailable in this browser"); return false; }
  AU.networkProbeRunning = true;
  AU.networkProbeToken = (AU.networkProbeToken || 0) + 1;
  const token = AU.networkProbeToken;
  auSetState("جارٍ فحص HTTP لروابط Drive…");
  auDiag("network-probe-sequence-start", `trackId=${t.id} | trigger=${fromMediaFailure ? "media-final-failure" : "manual"} | note=Each probe requests bytes 0-15, inspects at most 16 bytes, then cancels the response body; it does not change the media player source`);
  const attempts = [
    ["download", t.streamUrl],
    ["inline-view", t.inlineStreamUrl],
    ["legacy-download", t.legacyStreamUrl]
  ];
  for (const [label, url] of attempts) {
    if (token !== AU.networkProbeToken) break;
    if (url) await auNetworkProbeOne(label, url);
  }
  AU.networkProbeRunning = false;
  if (token === AU.networkProbeToken) {
    auDiag("network-probe-done", `trackId=${t.id} | note=Copy the diagnostic report now so media events and HTTP probe results stay in one report`);
    auSetState("اكتمل فحص HTTP — انسخ تقرير التشخيص");
    toast("🧪 اكتمل فحص HTTP. انسخ تقرير التشخيص الآن");
    const details = document.getElementById("auDiagWrap"); if (details) details.open = true;
    auDiagRender();
    if (fromMediaFailure) AU.diagnosticTrackId = "";
  }
  return true;
}
function auMaybeRunNetworkProbe() {
  const t = AU.current;
  if (!t || AU.diagnosticTrackId !== t.id || AU.diagnosticForLoad !== AU.loadToken) return;
  if (AU.networkProbeForLoad === AU.loadToken || AU.networkProbeRunning) return;
  AU.networkProbeForLoad = AU.loadToken;
  setTimeout(() => { auRunNetworkProbe(t.id, true); }, 0);
}
function auDiagReportText() {
  return `Madrasati Yemen — Google Drive audio diagnostic\nGenerated: ${new Date().toISOString()}\n\n${auDiagSummaryText()}\n\n--- Raw browser media events ---\n${auDiagText()}`;
}
function auDiagShow() {
  const details = document.getElementById("auDiagWrap");
  if (!details) return false;
  details.open = true;
  auDiagRender();
  details.scrollIntoView({ behavior: "smooth", block: "nearest" });
  return true;
}
function auDiagRender() {
  const box = document.getElementById("auDiagLog");
  if (box) {
    box.textContent = auDiagText();
    box.scrollTop = box.scrollHeight;
  }
  const summary = document.getElementById("auDiagSummary");
  if (summary) summary.textContent = auDiagSummaryText();
}
function auDiag(event, extra) {
  const el = typeof auEl === "function" ? auEl() : null;
  const t = AU.current || null;
  const info = el ? auMediaErrorInfo(el) : { code: 0, name: "NO_ELEMENT" };
  const frame = document.getElementById("auPreviewFrame");
  const mediaErrorMessage = el && el.error && el.error.message ? String(el.error.message).replace(/\s+/g, " ").replace(/[|\r\n]+/g, " ") : "";
  const canPlayMp3 = el && el.canPlayType ? el.canPlayType("audio/mpeg") : "";
  const parts = [
    new Date().toISOString(),
    `event=${event}`,
    `track=${t ? t.id + "/" + t.file : "none"}`,
    `driveId=${t ? t.driveId : ""}`,
    `stage=${AU.streamStage}`,
    `fetchMode=${el && el.crossOrigin ? "cors-" + el.crossOrigin : "no-cors-default"}`,
    `readyState=${el ? el.readyState : ""}`,
    `networkState=${el ? el.networkState : ""}`,
    `duration=${el ? String(el.duration) : ""}`,
    `currentTime=${el ? el.currentTime : ""}`,
    `paused=${el ? el.paused : ""}`,
    `mediaError=${info.code}:${info.name}`,
    `mediaErrorMessage=${mediaErrorMessage}`,
    `canPlayMp3=${canPlayMp3}`,
    `online=${navigator.onLine}`,
    `bufferedRanges=${el && el.buffered ? el.buffered.length : 0}`,
    `src=${el ? (el.currentSrc || el.getAttribute("src") || "") : ""}`,
    `previewSrc=${frame ? (frame.getAttribute("src") || "") : ""}`,
    `pageOrigin=${location.origin}`,
    `userAgent=${navigator.userAgent}`
  ];
  if (extra) parts.push(String(extra));
  const line = parts.join(" | ");
  AU.diag = AU.diag || [];
  AU.diag.push(line);
  if (AU.diag.length > 160) AU.diag.splice(0, AU.diag.length - 160);
  auDiagRender();
  if (typeof console !== "undefined" && console.info) console.info("[Madrasati audio diagnostic]", line);
  return line;
}
function auDiagClear(render) {
  AU.diag = [];
  if (render) auDiagRender();
}
function auDiagCopy() {
  const txt = auDiagReportText();
  const done = () => toast("📋 نُسخ تقرير تشخيص البثّ — ألصقه في رسالتك إلينا");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(done).catch(() => auDiagCopyFallback(txt, done));
  } else auDiagCopyFallback(txt, done);
}
function auDiagCopyFallback(txt, done) {
  const ta = document.createElement("textarea");
  ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.focus(); ta.select();
  try { document.execCommand("copy"); done(); } catch (e) { toast("تعذّر النسخ التلقائي — افتح سجل التشخيص وانسخه يدوياً"); }
  ta.remove();
}
function auDiagDownload() {
  const trackId = AU.current ? AU.current.id : "gd-03";
  const blob = new Blob([auDiagReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `madrasati-${trackId}-audio-diagnostic.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  toast("⬇️ نُزّل تقرير التشخيص — أرفق الملف في المحادثة إن تعذّر اللصق");
}
function auRunDriveDiagnostic(trackId) {
  const t = (trackId ? getAudioTrack(trackId) : null) || AU.current || getAudioTrack("gd-03");
  if (!t) { toast("اختر تسجيلاً من الفهرس أولاً"); return; }
  auDiagClear(false);
  AU.diagnosticTrackId = t.id; AU.diagnosticForLoad = 0; AU.networkProbeForLoad = 0;
  try { if (typeof performance !== "undefined" && performance.clearResourceTimings) performance.clearResourceTimings(); } catch (e) {}
  const details = document.getElementById("auDiagWrap"); if (details) details.open = true;
  auDiag("diagnostic-start", `requestedTrack=${t.id}`);
  auLoad(t.id, { diagnostic: true });
  auDiag("diagnostic-waiting-for-user-play", "Press the main Play button after selecting; the test intentionally does not autoplay.");
  auDiagShow();
  setTimeout(() => auDiagShow(), 180);
  toast("🧪 السجلّ مفتوح أسفل المشغّل. اضغط «▶ تشغيل» مرة واحدة، ثم انسخ تقرير التشخيص بعد ظهور النتيجة");
}
function auHideDrivePreview(reset) {
  const wrap = document.getElementById("auPreviewWrap"), frame = document.getElementById("auPreviewFrame");
  if (wrap) wrap.classList.add("hidden");
  if (reset && frame) frame.removeAttribute("src");
}
function auShowDrivePreview() {
  const t = AU.current;
  if (!t) { toast("اختر تسجيلاً من الفهرس أولاً"); return; }
  const wrap = document.getElementById("auPreviewWrap"), frame = document.getElementById("auPreviewFrame");
  if (!wrap || !frame) return;
  const openPreview = document.getElementById("auOpenPreview"); if (openPreview) openPreview.href = t.previewUrl;
  wrap.classList.remove("hidden");
  frame.onload = () => {
    const r = frame.getBoundingClientRect();
    auDiag("preview-iframe-load", `frameRect=${Math.round(r.width)}x${Math.round(r.height)}; note=iframe load event only proves a document/error page finished loading, not that its cross-origin media can be inspected`);
  };
  frame.src = t.previewUrl;
  auDiag("preview-iframe-open-requested", `previewUrl=${t.previewUrl}`);
  const details = document.getElementById("auDiagWrap"); if (details) details.open = true;
  auMsg("فتحنا مشغّل Google Drive الرسمي أسفل المشغّل الموحّد. اضغط زر التشغيل داخله. إن بقي فارغاً، قارن فوراً برابط «فتح نفس المعاينة في نافذة متصفح عادية» فوق الإطار؛ اختلاف النتيجتين سيشير إلى قيد في سياق التضمين أو المعاينة، لكنه وحده لا يحدّد أي قيد بالضبط؛ سجّل النتيجتين مع تقرير التشخيص.");
}
function auRetryStreamAttempt(nextStage, url, eventName, stateText, message) {
  const el = auEl();
  if (!el || !url) return false;
  AU.streamStage = nextStage; AU.playRequested = false;
  auSetState(stateText);
  auMsg(message);
  el.preload = "metadata";
  el.crossOrigin = "anonymous";
  auDiag(eventName, `url=${url}`);
  el.src = url;
  el.load();
  auUpdateTime(el);
  auArmLoadTimer(AU.loadToken);
  return true;
}
function auHandleLoadFailure(source) {
  const el = auEl(), t = AU.current;
  if (!el || !t) return;
  auClearLoadTimer();
  auDiag("load-failure", `source=${source || "unknown"}`);
  const info = auMediaErrorInfo(el);
  if (AU.streamStage === 0 && t.inlineStreamUrl && el.readyState < 2) {
    auRetryStreamAttempt(1, t.inlineStreamUrl, "retry-inline-view-source", "جارٍ تجربة صيغة العرض المضمّن من Drive…",
      `لم تصل مدة/صوت من صيغة التنزيل الأولى (<span dir="ltr">${esc(info.name)}</span>). نجرّب الآن متغيراً واحداً فقط: صيغة العرض المضمّن <span dir="ltr">export=view</span> للمعرّف نفسه وعلى مضيف Drive نفسه وبوضع <span dir="ltr">CORS anonymous</span> نفسه، لطلب البيانات فقط. لن يبدأ التشغيل حتى تضغط «▶ تشغيل» بعد ظهور المدة.`);
    return;
  }
  if (AU.streamStage === 1 && t.legacyStreamUrl && el.readyState < 2) {
    auRetryStreamAttempt(2, t.legacyStreamUrl, "retry-legacy-source", "جارٍ تجربة رابط Drive القديم…",
      `لم تصل مدة/صوت من صيغة العرض المضمّن أيضاً (<span dir="ltr">${esc(info.name)}</span>). نجرّب أخيراً رابط <span dir="ltr">uc?export=download</span> القديم للمعرّف نفسه لطلب البيانات فقط، ولن يبدأ التشغيل حتى تضغط «▶ تشغيل» بعد ظهور المدة.`);
    return;
  }
  AU.playRequested = false;
  auDiag("load-failure-final", `source=${source || "unknown"}`);
  auDiagResourceTiming("media-final-failure");
  auSetState("تعذّر بثّ Drive المباشر");
  const b = document.getElementById("auPlayBtn"); if (b) b.textContent = "▶ حاول التشغيل مجدداً";
  const diagDetails = document.getElementById("auDiagWrap"); if (diagDetails) diagDetails.open = true;
  auDiagRender();
  auMsg(`⚠️ <b>تعذّر وصول المتصفح إلى بثّ MP3 قابل للتشغيل من Google Drive.</b><br>
    <b>التشخيص من المتصفح:</b> <span dir="ltr">${esc(info.name)}</span> — ${esc(info.ar)}
    <span dir="ltr">(readyState=${el.readyState}, networkState=${el.networkState}${source ? ", stage=" + esc(source) : ""})</span>.<br>
    هذا يعني فقط أن متصفحك لم يحصل على مصدر صوت قابل للتشغيل في هذه المحاولة؛ لا نسمّي السبب CORS أو صلاحيات Drive أو شبكة قبل قراءة تسلسل الأحداث. سجلّ التشخيص مفتوح أسفل المشغّل، وأهم ما فيه آخر أحداث <span dir="ltr">error/load-failure-final</span> وقيم <span dir="ltr">MediaError/readyState/networkState</span> وهل وصل <span dir="ltr">loadedmetadata/canplay</span>. جرّب <button class="btn btn-ghost btn-sm" type="button" onclick="auShowDrivePreview()">مشغّل Drive الرسمي</button> أو <a href="${t.viewUrl}" target="_blank" rel="noopener">افتح الملف في Drive ↗</a>. إن بدأ فحص HTTP التلقائي، انتظر ظهور <span dir="ltr">network-probe-done</span> ثم انسخ تقرير التشخيص من السجلّ وأرسله قبل أي تغيير آخر في روابط أو منطق التشغيل.`);
  auMaybeRunNetworkProbe();
}
/* اختيار تسجيل لعرضه في المشغّل. في الوضع الطبيعي أثناء التأجيل المؤقت
   نعرض بيانات الفهرس فقط ولا نطلب أي وسائط من Drive؛ أما جلسة التشخيص
   الصريحة فتطلب بيانات التسجيل الوصفية لغرض القياس. لا يوجد تشغيل
   تلقائي في الحالتين. */
function auLoad(id, options) {
  const t = getAudioTrack(id); if (!t) return;
  const diagnosticLoad = !!(options && options.diagnostic);
  const allowStream = !AUDIO_PLAYBACK_DEFERRED || diagnosticLoad;
  AU.current = t; AU.lastStop = -1; AU.streamStage = 0; AU.playRequested = false; AU.streamEnabledForLoad = allowStream;
  AU.loadToken = (AU.loadToken || 0) + 1;
  const token = AU.loadToken;
  if (AU.diagnosticTrackId === id) AU.diagnosticForLoad = token;
  if (state.view !== "audio") { navigate("audio"); setTimeout(() => { if (token === AU.loadToken) auLoad(id, options); }, 60); return; }
  const el = auEl(); if (!el) return;
  auWire(el);
  auClearLoadTimer();
  auHideDrivePreview(true);
  try { el.pause(); } catch (e) {}
  const title = document.getElementById("auTitle"); if (title) title.textContent = t.file;
  const sub = document.getElementById("auSub"); if (sub) sub.textContent = `Google Drive · الحجم ${t.size} · ${audioStatusMeta(trackStatus(t)).code} · ${allowStream ? "اختبار بثّ صريح — لا تشغيل تلقائي" : "عرض بيانات الفهرس فقط — لا تحميل للصوت"}`;
  const open = document.getElementById("auOpenDrive"); if (open) open.href = t.viewUrl;
  const openPreview = document.getElementById("auOpenPreview"); if (openPreview) openPreview.href = t.previewUrl;
  const b = document.getElementById("auPlayBtn");
  if (!allowStream) {
    el.preload = "none";
    el.removeAttribute("src");
    try { el.load(); } catch (e) {}
    if (b) b.textContent = "▶ التشغيل قيد الإصلاح";
    const tm = document.getElementById("auTime"); if (tm) tm.textContent = "--:-- / --:--";
    const seek = document.getElementById("auSeek"); if (seek) seek.value = 0;
    auDiag("playback-deferred-selection", "note=Catalog display only; no Drive media request was started");
    auShowDeferredMessage();
    return;
  }
  el.preload = "metadata";
  el.crossOrigin = "anonymous";
  auDiag("source-set", `url=${t.streamUrl}`);
  el.src = t.streamUrl;
  el.load();
  if (b) b.textContent = "▶ تشغيل";
  auUpdateTime(el);
  auSetState("جارٍ طلب بيانات/مدة التسجيل…");
  auDiag("metadata-requested");
  auMsg(`تم اختيار <span dir="ltr">${esc(t.file)}</span> وطلب بياناته من Google Drive بوضع <span dir="ltr">CORS anonymous</span>. انتظر ظهور المدة إن أتاحها المتصفح، ثم اضغط «▶ تشغيل» لبدء الصوت؛ وإن لم تصل، سيظهر السبب في سجل التشخيص.`);
  auArmLoadTimer(token);
}
let __auWiredFor = null;
function auWire(el) {
  if (__auWiredFor === el) return; __auWiredFor = el;
  const live = () => auEl() === el;
  ["loadstart", "loadedmetadata", "durationchange", "loadeddata", "canplay", "playing", "pause", "waiting", "stalled", "suspend", "progress", "abort", "emptied", "ended", "error"].forEach(ev => el.addEventListener(ev, () => { if (live()) auDiag(ev); }));
  el.addEventListener("loadstart", () => { if (live()) auSetState("جارٍ الاتصال بـ Drive…"); });
  el.addEventListener("loadedmetadata", () => {
    if (!live()) return;
    auClearLoadTimer(); auUpdateTime(el);
    if (isFinite(el.duration) && el.duration > 0) {
      auSetState("جاهز للتشغيل");
      if (!AU.playRequested) auMsg(`✅ وصلت بيانات التسجيل ومدّته (${auFmtTime(el.duration)}) من Drive. اضغط «▶ تشغيل» لبدء الاستماع.`);
    } else {
      auSetState("المدة غير متاحة من المصدر بعد");
    }
  });
  el.addEventListener("durationchange", () => { if (live()) auUpdateTime(el); });
  el.addEventListener("canplay", () => {
    if (!live()) return;
    auClearLoadTimer(); auUpdateTime(el); auSetState("جاهز للتشغيل");
    if (AU.playRequested) auMsg("");
  });
  el.addEventListener("playing", () => {
    if (!live()) return;
    auClearLoadTimer(); auUpdateTime(el); auSetState("▶ يشتغل الآن");
    const b = document.getElementById("auPlayBtn"); if (b) b.textContent = "⏸ إيقاف مؤقت";
    auMsg("");
  });
  el.addEventListener("pause", () => {
    if (!live()) return;
    auUpdateTime(el);
    if (!el.ended) { auSetState("⏸ متوقف مؤقتاً"); const b = document.getElementById("auPlayBtn"); if (b) b.textContent = "▶ استئناف"; }
  });
  el.addEventListener("waiting", () => { if (live()) auSetState("⏳ ينتظر بيانات من Drive…"); });
  el.addEventListener("stalled", () => {
    if (!live()) return;
    auSetState("التحميل متعثّر…");
    if (AU.playRequested) auMsg("تباطأ وصول بيانات Drive أو توقف مؤقتاً. إن استمرت الحالة ستظهر نتيجة التشخيص وخيار مشغّل Drive الرسمي.");
  });
  el.addEventListener("ended", () => {
    if (!live()) return;
    AU.playRequested = false; auUpdateTime(el); auSetState("✔ انتهى — يمكنك الإعادة من البداية");
    const b = document.getElementById("auPlayBtn"); if (b) b.textContent = "↺ إعادة التشغيل";
    if (AU.current && typeof recordAttempt === "function") recordAttempt({ id: "audio-" + AU.current.id, title: "استماع كامل: " + AU.current.file, skill: "listening" }, 1, 1);
  });
  el.addEventListener("error", () => {
    if (!live() || !el.getAttribute("src")) return;
    auHandleLoadFailure("media-error");
  });
  el.addEventListener("timeupdate", () => {
    if (!live()) return;
    auUpdateTime(el);
    if (AU.reviewStops && isFinite(el.duration) && el.duration > 0) {
      const mark = Math.floor(el.currentTime / 30);
      if (mark > 0 && mark !== AU.lastStop && (el.currentTime % 30) < 0.7) {
        AU.lastStop = mark; AU.playRequested = false; el.pause();
        auMsg("⏸ توقف اختياري لوضع مراجعة المعلم — دوّن ما سمعتَه ثم اضغط «استئناف» إن أردت المتابعة.");
      }
    }
  });
}
function auPlayFromUser(el) {
  if (!el || !AU.current) return;
  if (auDeferredActive()) { AU.playRequested = false; auShowDeferredMessage(); return; }
  AU.playRequested = true;
  auDiag("play-requested-by-user");
  auSetState(el.readyState >= 2 ? "جارٍ بدء التشغيل…" : "جارٍ الاتصال بـ Drive لبدء التشغيل…");
  if (el.readyState < 1) auArmLoadTimer(AU.loadToken);
  try {
    const pr = el.play();
    if (pr && pr.catch) pr.catch(e => {
      AU.playRequested = false;
      const name = e && e.name ? e.name : "PlayError";
      auDiag("play-promise-rejected", `name=${name}; message=${e && e.message ? e.message : ""}`);
      if (name === "NotSupportedError") { auHandleLoadFailure("play-not-supported"); return; }
      auSetState("لم يبدأ التشغيل");
      if (name === "NotAllowedError") auMsg("منع المتصفح بدء الصوت في هذه اللحظة (سياسة التشغيل بتدخل المستخدم). اضغط «▶ تشغيل» مرة أخرى بعد ظهور جاهزية التسجيل؛ المنصة لا تستخدم تشغيلاً تلقائياً.");
      else if (name === "AbortError") auMsg("قُطعت محاولة التشغيل لأن التحميل أو المصدر تغيّر. انتظر ظهور المدة/الجاهزية ثم اضغط «▶ تشغيل» مرة أخرى.");
      else auMsg(`تعذّر بدء التشغيل من المتصفح (<span dir="ltr">${esc(name)}</span>). إن تكرر بعد ظهور المدة، جرّب مشغّل Drive الرسمي أو افتح الملف في Drive.`);
    });
  } catch (e) {
    AU.playRequested = false;
    auMsg("تعذّر بدء التشغيل من المتصفح. جرّب مرة أخرى بعد تحميل البيانات أو افتح الملف في Drive.");
  }
}
function auToggle() {
  const el = auEl(); if (!el || !AU.current) { toast("اختر تسجيلاً من الفهرس أولاً"); return; }
  if (auDeferredActive()) { auShowDeferredMessage(); return; }
  if (!el.getAttribute("src")) { auLoad(AU.current.id); const fresh = auEl(); if (fresh) auPlayFromUser(fresh); return; }
  if (el.paused || el.ended) {
    if (el.ended) { try { el.currentTime = 0; } catch (e) {} }
    auPlayFromUser(el);
  } else {
    AU.playRequested = false;
    el.pause();
  }
}
function auRestart() {
  const el = auEl();
  if (!el || !AU.current) { toast("اختر تسجيلاً من الفهرس أولاً"); return; }
  if (auDeferredActive()) { auShowDeferredMessage(); return; }
  if (!el.getAttribute("src")) { auLoad(AU.current.id); return; }
  try { el.currentTime = 0; } catch (e) {}
  AU.lastStop = -1;
  auPlayFromUser(el);
}
/* توافق خلفي إن استدعاها كود قديم: لا تُستخدم لأي تشغيل تلقائي. */
function auSafePlay(el) { auPlayFromUser(el); }
function auSeekBy(d) { if (auDeferredActive()) { auShowDeferredMessage(); return; } const el = auEl(); if (!el || !isFinite(el.duration) || el.duration <= 0) { auMsg("المدة/بيانات التقديم غير متاحة من Drive بعد؛ انتظر جاهزية التسجيل أو جرّب مشغّل Drive الرسمي."); return; } el.currentTime = Math.max(0, Math.min(el.duration, el.currentTime + d)); }
function auSeekTo(v) { const el = auEl(); if (!el || !isFinite(el.duration) || el.duration <= 0) return; el.currentTime = el.duration * (v / 1000); }
function auRateSet(v) { const el = auEl(); if (el) { el.playbackRate = +v; toast("سرعة التشغيل ×" + v); } }
function auVolSet(v) { const el = auEl(); if (el) el.volume = v / 100; }

/* قسم الصوت داخل صفحة خطوة: المعتمد فقط يُقدَّم صوتاً للدرس.
   مرشح Unit 1 اليدوي يظهر منفصلاً وموسوماً لمراجعة/مقارنة المعلم، لا اعتماداً. */
function stepAudioHTML(step) {
  const verified = AUDIO_TRACKS.filter(t => { const l = audioLink(t.id); return l && l.status === "verified" && l.stepRef === step.ref; });
  const csNums = [...new Set(((step.materials || "").match(/CS\s*\d+(?:\s*[-–\/]\d+)?/g) || []))];
  const candidateMeta = AUDIO_REVIEW_CANDIDATE_BY_STEP[step.ref];
  const candidate = candidateMeta ? getAudioTrack(candidateMeta.trackId) : null;
  const ownerFeature = candidate ? OWNER_AUDIO_FEATURE_BY_TRACK[candidate.id] : null;
  const showCandidate = candidate && !verified.some(t => t.id === candidate.id) && !["rejected", "unavailable"].includes(trackStatus(candidate));
  if (!csNums.length && !verified.length && !showCandidate) return "";
  return `<div class="panel" style="margin-bottom:16px"><h3>🎧 صوت الدرس وأنشطة الاستماع</h3>
    <p style="color:var(--muted);font-size:13.5px">مواد هذه الخطوة في الدليل: <span dir="ltr">${esc(step.materials)}</span>. فهرس Drive المعتمد مفهرس بمعرّفاته، لكن <b>ربط أي ملف بهذه الخطوة يظل Mapping Unconfirmed حتى يستمع إليه المعلم ويعتمده</b>. تشغيل التسجيلات مؤجل مؤقتاً ولا يمنع فتح الدرس أو الأنشطة؛ و«النطق الآلي» عند الضغط يستخدم صوت جهازك (TTS) ولا يُسمّى صوت الكتاب الأصلي.</p>
    ${verified.length ? verified.map(t => { const l = audioLink(t.id) || {}; return `<div class="today-item"><button class="play-mini" title="فتح في المشغّل وتحميل بياناته" onclick="auLoad('${t.id}')">🎧</button><div style="flex:1"><strong dir="ltr">${esc(t.file)}</strong><small style="display:block">اعتمده ${esc(l.by || "معلمك")} لهذه الخطوة بعد السماع${l.page ? " · " + esc(l.page) : ""}${l.at ? " · " + esc(l.at) : ""} — يفتح في المشغّل الموحّد للاستماع الكامل.</small></div>${audioBadge(t)}</div>`; }).join("")
    : `<p class="print-note">لا يوجد تسجيل Verified لهذه الخطوة بعد في هذا الجهاز.</p>`}
    ${showCandidate ? `<div class="why-box" style="margin-top:10px"><b>⭐ تسجيل Bill الذي حدّده صاحب المشروع — مرشح مراجعة لا اعتماد بعد:</b>
      <div class="today-item" style="background:#fff;margin-top:8px"><button class="play-mini" title="فتح المرشح في المشغّل وتحميل بياناته" onclick="auLoad('${candidate.id}')">🎧</button><div style="flex:1"><strong dir="ltr">${esc(candidate.file)}</strong><small style="display:block">${esc(candidateMeta.evidence)} ${esc(candidateMeta.expected)}${ownerFeature ? `<br><b>تعريف صاحب المشروع:</b> ${esc(ownerFeature.title)} — ${esc(ownerFeature.context)} · المدة في مشغّل Drive: <span dir="ltr">${esc(ownerFeature.viewerDuration)}</span>.` : ""}<br><a href="${candidate.viewUrl}" target="_blank" rel="noopener">فتح رابط الملف في Drive كما زوّده صاحب المشروع ↗</a></small></div>${audioBadge(candidate)}</div>
      <small>هذا الزر للمقارنة/المراجعة الصفية بقيادة المعلم؛ لا يعني أن المنصة تحققت من أن الملف هو CS3. بعد سماع المعلم يصبح إما Verified من محرّر الفهرس أو يُستبعد.</small></div>` : ""}
    ${csNums.length ? `<p class="print-note">أقسام الكاسيت المذكورة لهذه الخطوة: <span dir="ltr">${esc(csNums.join(", "))}</span>. لا نعرض رقم ملف Drive المشابه كربط تلقائي.</p>` : ""}
    <button class="btn btn-ghost btn-sm" onclick="navigate('audio')">🎧 فتح فهرس Drive ومشغّل الصوتيات</button></div>`;
}

/* مرفقات وسائط اختيارية داخل مشغّل الأنشطة الحالي (تُستخدم من الاستوديو):
   الصوت يعمل هنا بمشغّل مضمّن أو في المشغّل الموحّد؛ والمشهد زرّ يفتحه.
   لا يُقدَّم تسجيل غير Verified في نشاط منشور بوصفه صوتاً معتمداً — النشر يُمنع في الاستوديو. */
function activityMediaHTML(a) {
  const t = a && a.audioTrackId ? getAudioTrack(a.audioTrackId) : null;
  const scene = a && a.sceneId && typeof SCENES !== "undefined" ? SCENES.find(s => s.id === a.sceneId) : null;
  if (!t && !scene) return "";
  const audioBlock = !t ? "" : AUDIO_PLAYBACK_DEFERRED
    ? `<div style="margin-top:9px"><strong dir="ltr">${esc(t.file)}</strong> ${audioBadge(t)}<br>
      <p class="print-note" style="margin:8px 0">⚠️ ${AUDIO_DEFERRED_NOTICE}. أكمل هذا النشاط الآن دون انتظار التسجيل؛ بيانات الملف ومعرّفه محفوظة في الفهرس.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:7px"><button class="btn btn-ghost btn-sm" onclick="auLoad('${t.id}')">عرض بيانات التسجيل في المكتبة</button><a class="btn btn-ghost btn-sm" href="${t.viewUrl}" target="_blank" rel="noopener">فتح في Drive ↗</a></div></div>`
    : `<div style="margin-top:9px"><strong dir="ltr">${esc(t.file)}</strong> ${audioBadge(t)}<br>
      <audio controls preload="none" crossorigin="anonymous" src="${esc(t.streamUrl)}" style="width:100%;margin-top:8px"></audio>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:7px"><button class="btn btn-ghost btn-sm" onclick="auLoad('${t.id}')">فتح في المشغّل التعليمي الموحّد</button><a class="btn btn-ghost btn-sm" href="${t.viewUrl}" target="_blank" rel="noopener">فتح في Drive ↗</a></div>
      <small>استمع كاملاً أولاً إن أردت؛ الأنشطة لا تفرض توقفاً قبل نهاية التسجيل.</small></div>`;
  return `<div class="why-box" style="margin:12px 0"><b>🎧 وسائط هذا النشاط:</b>
    ${audioBlock}
    ${scene ? `<div style="margin-top:9px"><button class="btn btn-primary btn-sm" onclick="openScene('${scene.id}')">🎬 افتح المشهد المتحرك: ${esc(scene.title)}</button> <small>مشهد ويب SVG بنطق الجهاز — ليس فيديو وليس متزامناً مع تسجيل Drive.</small></div>` : ""}
  </div>`;
}
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { audio: vAudioLibrary });
