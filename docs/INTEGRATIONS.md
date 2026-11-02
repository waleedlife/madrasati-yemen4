# 🔌 خطة التكاملات المستقبلية — من النموذج التجريبي إلى الإنتاج

> حالة اليوم: واجهة ثابتة (Static) بلا خادم وبلا قاعدة بيانات وبلا أي خدمة
> مدفوعة. هذا الملف يوثّق **ما يلزم** لتفعيل كل وظيفة حقيقية، بحيث تُربط الخدمات
> لاحقاً دون إعادة تصميم الواجهات. لا يُنفَّذ أي ربط مدفوع أو نشر إنتاجي إلا
> بموافقة صريحة من صاحب المشروع.

## 1) الفصل بين الطبقات كما هو مبني اليوم

| الطبقة في الواجهة الحالية | ملفاتها | ما يحلّ محلها عند التفعيل |
|---|---|---|
| الواجهات والمكونات | `index.html` + CSS | تبقى كما هي (أو تُنقل تدريجياً لمكوّنات) |
| بيانات المناهج والموارد | `assets/js/data.js` و`english8.js` (كائنات JS) | API محتوى + قاعدة بيانات (بالحقول نفسها تقريباً) |
| أغراض الأنشطة والمشغّل | `activities.js` (مخطط JSON موحّد + مشغّل عام) | يبقى المشغّل؛ تصل الأنشطة من API بالمخطط نفسه |
| حالة التقدّم | LocalStorage (`madrasati_yemen_v1`) | خدمة تقدّم (Progress API) + نسخة محلية للعمل المتقطع |
| «مساعد» الاستوديو | قوالب محلية في `studio-ai.js` | خدمة ذكاء عبر الخادم فقط (المفاتيح لا تصل للواجهة أبداً) |
| الصوت | فهرس Drive خارجي بالبثّ + TTS/تسجيل المتصفح محلياً | تخزين وسائط مرخّص بإذن واضح + جدول مطابقات مراجع بشرياً + خدمة تقييم نطق عند اعتمادها |
| الصلاحيات | أدوار تجريبية بأزرار (ليست مصادقة) | مصادقة حقيقية + RBAC + عزل بيانات بين المدارس |

## 2) مخطط قاعدة البيانات المستهدف (محوّل من بنى البيانات الحالية)

```
governorate   (id, name)
district      (id, governorate_id, name)
school        (id, district_id, name, code)               ← عزل SaaS: كل السجلات التعليمية تحمل school_id
academic_year (id, name, starts_at, ends_at)
grade         (id, n 1..12, label, stage)
classroom     (id, school_id, grade_id, section)          ← شعبة
subject       (id, code, name, icon, color)               ← من DB.subjects
user          (id, school_id?, role[student|teacher|parent|school_admin|platform_admin],
               full_name, login_code, password_hash, is_active)
student_profile (user_id, classroom_id)
parent_child  (parent_user_id, student_user_id, relation) ← من DB.children
teacher_assignment (teacher_user_id, classroom_id, subject_id)

curriculum_book (id, subject_id, grade_id, code[PB|WB|TB], title, source_url, edition)
curriculum_unit (id, book_id, n, theme_ar_descriptor, tb_summary_page)
curriculum_step (id, unit_id, step_label, topic, materials, objectives, language_focus,
                 new_vocabulary, skills, source_status[verified|pending_transcription], source_ref)
lesson        (id, subject_id, grade_id, step_id?, title, summary, content,
               source_status[verified|teacher|pending], source_ref, created_by, status[draft|published])

activity      (id, school_id?, created_by, type[mcq|fill|order|match|flashcards|dialogue|video|doc],
               title, skill, level, instructions, step_id?, payload JSONB,  ← نفس مخطط activities.js
               source_status, source_ref, review_status[draft|reviewed|published],
               target_classroom_id, created_at, updated_at)
activity_attempt (id, activity_id, student_user_id, score, total, answers JSONB,
               error_categories JSONB, duration_sec, created_at)            ← من store.activityAttempts
quiz / quiz_item — يمكن تمثيلها كـ activity من نوع mcq بدل جدول منفصل
homework      (id, classroom_id, subject_id, teacher_user_id, title, due_at)
homework_submission (homework_id, student_user_id, status, file_id?, submitted_at, feedback)
grade_record  (student_user_id, subject_id, term, monthly1, monthly2, final) ← من DB.gradeRows
attendance    (student_user_id, date, status[present|absent_excused|absent|late], recorded_by)
schedule_slot (classroom_id, day, period, subject_id, teacher_user_id)
message_thread/message (thread_id, sender_user_id, body, created_at) — داخل المدرسة فقط
media_file    (id, school_id, uploader_user_id, kind[video|audio|image|doc], storage_key,
               size_bytes, consent_scope, created_at)
curriculum_audio (id, provider, external_id, view_url, stream_url, file_name, size_label,
               duration_sec?, access_status, usage_status)       ← من فهرس Drive الحالي
audio_mapping (id, curriculum_audio_id, curriculum_step_id, page_activity, skill,
               mapping_status[unconfirmed|review|verified|rejected|unavailable],
               description, verified_by, verified_at)             ← قرار store.audioLinks الحالي
consent_record (student_user_id, granted_by(parent), scope[voice|media], granted_at, revoked_at)
ai_generation_job (id, teacher_user_id, step_id?, resource_type, prompt, provider, model,
               output_payload JSONB, review_status, created_at)  ← لا يصل الطالب إلا بعد اعتماد المعلم
```

## 3) نقاط الربط (API) اللازمة — بحسب شاشات اليوم الـ13 + الجديدة

| الشاشة الحالية | قراءة | كتابة |
|---|---|---|
| الدخول | `POST /auth/login` (`login_code`+سر من المدرسة) | جلسات/رموز آمنة |
| لوحات الأدوار | `GET /me/dashboard?role=` | — |
| مكتبة الدروس/الخطوات | `GET /curriculum/steps?grade&subject&q` | `POST /progress/steps/{id}/complete` |
| الأنشطة/الاختبارات | `GET /activities?step&classroom` | `POST /activities/{id}/attempts` (النتيجة + أخطاء مصنّفة) |
| الواجبات | `GET /homework` | `POST /homework/{id}/submit` (+ ملف عبر `POST /media`) |
| الدرجات/الحضور/الجدول | `GET /students/{id}/grades|attendance|schedule` (بصلاحية الدور والعلاقة) | `POST /grades`، `POST /attendance` للمعلم/الإدارة |
| الرسائل | `GET /threads` | `POST /threads/{id}/messages` (اتصال لحظي اختياري: WebSocket) |
| استوديو المعلم | `GET /curriculum/steps/{id}` (لغة موثقة للبناء) | `POST /ai/jobs` (إنشاء عبر الخادم) → `PATCH /activities/{id}` → `POST /activities/{id}/publish` بعد اعتماد |
| الفيديو/الصوت | `GET /curriculum/audio?step&mapping_status` + روابط توقيع مؤقتة من خدمة التخزين | `PATCH /curriculum/audio/{id}/mapping` (قرار معلم)؛ `POST /media/presign` ثم رفع مباشر |
| إدارة المدرسة/المدارس | `GET/POST /school/users|classrooms` | إدارة صلاحيات؛ ومدير منصة: `/platform/schools` |

## 4) خدمات الذكاء والصوت — عقود استبدال آمنة

- **توليد الموارد:** نداء واحد من الخادم `POST /server/ai/generate {step_id, resource_type, level, skill, teacher_prompt}`
  يعيد **JSON بنفس مخطط نشاط المنصة** (أنواع محددة ومهيكلة فقط). يُخزّن jobs + review_status = draft،
  ولا يظهر لأي طالب قبل اعتماد المعلم. **يُمنع** تنفيذ HTML/JS مولّد، وتُطهَّر كل السلاسل.
  المفاتيح تُحفظ أسرار خادم (Secrets Manager/متغيرات بيئة) — لا توجد في المستودع ولا في الواجهة.
- **النطق:** خياران عند الاعتماد — (أ) صوتيات نموذجية مسجّلة/مرخّصة بدل كاسيت الكتاب + TTS خادم/جهاز؛
  (ب) خدمة ASR/تقييم نطق تعيد تغذية راجعة وصفية. حتى تفعيلهما، تبقى الواجهة الحالية:
  تسجيل محلي بلا رفع وقائمة تحقق ذاتية، بلا أي درجة مصنوعة.
- **فهرس Drive الحالي:** ليس خدمة تخزين إنتاجية؛ تُحفظ معرّفات/روابط فقط ويُبثّ
  من Drive. أي نقل إلى تخزين المنصة أو CDN أو تحويل صيغ يحتاج إذن استخدام واضحاً
  أولاً، ثم مراجعة سمعية لكل `audio_mapping` قبل عرضه للطلاب.
- **أصوات الطلاب:** لا تُسجّل/تُخزّن/تُشارك دون `consent_record` ساري من ولي الأمر،
  وحذفٌ فوري عند سحب الموافقة، وتشفير أثناء النقل والسكون، وسجلات وصول.

## 5) العمل مع إنترنت ضعيف/متقطع (مسار مستقبلي صريح — غير مفعّل اليوم)

- المحتوى النصي والأنشطة خفيفة أصلاً ولا مكتبات ثقيلة؛ الصور مضغوطة (~230KB للصورة).
- مستقبلاً: PWA بـ Service Worker لتخزين الهيكل والدروس المقروءة، قائمة انتظار محلية
  لمحاولات الأنشطة ثم مزامنة عند عودة الشبكة، وتنزيل حزم وحدة كاملة (ملخصات/ملفات)
  للمدارس الريفية. **لا تُدّعى أي مزامنة حالياً** — المحفوظ حالياً محلي على الجهاز.
- ميزات تحتاج اتصالاً عند تفعيلها: المحادثة الذكية الحرة، تقييم النطق السحابي، رفع الوسائط، الرسائل اللحظية.

## 6) الصلاحيات وخصوصية القاصرين

- RBAC صارم: طالب لا يرى إلا بياناته؛ ولي أمر لا يرى إلا أبناءه المرتبطين؛ معلم/إدارة
  ضمن مدرستهم فقط؛ وعزل `school_id` في كل استعلام (متعدد مدارس SaaS).
- حدّ أدنى للبيانات الشخصية في النماذج والعروض؛ بيانات اليوم التوضيحية وهمية ومصرّح بها.
- النسخة التجريبية الحالية ليست مصادقة — يجب ألا تُستخدم ببيانات حقيقية لأطفال.

## 7) خطوات تفعيل مقترحة عند الموافقة (دون ترتيب تنفيذي ملزم)

1. نشر الواجهة الثابتة كعرض آمن (GitHub Pages/ما يماثلها) لمراجعة أصحاب القرار.
2. خادم + قاعدة (بديلان خفيفان: Laravel/MySQL أو Node/Postgres) + هجرة مخطط أعلاه.
3. مصادقة أكواد من المدرسة + استيراد شعب/طلاب تجريبيين بلا بيانات حساسة.
4. API المحتوى والتقدم والأنشطة أولاً (أعلى قيمة)، ثم الواجبات/الدرجات، ثم الرسائل.
5. تخزين وسائط (S3-compatible) بروابط موقّعة وحدود أحجام للنت الضعيف.
6. ربط مولّد موارد عبر الخادم بعقد المخطط نفسه + بوابة مراجعة معلم إلزامية.
7. الصوتيات: تأكيد إذن استخدام مجلد Drive/مصدر رسمي بديل، استكمال المراجعة السمعية للفهرس ومطابقاته، ثم تقييم نطق تجريبي محدود بموافقات أولياء الأمور.
8. PWA أوفلاين + لوحات مدير منصة متعدد المدارس.
