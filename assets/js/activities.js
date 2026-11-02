/* ===== مدرستي اليمن — محرك الأنشطة التفاعلية =====
   بنية نشاط واحدة قابلة للتوسع: {id,type,title,skill,level,instructions,
   stepRef, sourceStatus: verified|teacher, sourceNote, items…}
   أنواع جديدة تُضاف للمشغّل بتسجيل نوع في ACT_TYPES وباني عرض — دون تغيير بقية المنصة. */
const ACT_TYPES = {
  mcq:        { label: "اختيار من متعدد", icon: "☑️" },
  fill:       { label: "إكمال الفراغات", icon: "✏️" },
  order:      { label: "ترتيب الكلمات/الأحداث", icon: "🔢" },
  match:      { label: "التوصيل بين العناصر", icon: "🔗" },
  flashcards: { label: "بطاقات مفردات", icon: "🃏" },
  dialogue:   { label: "حوار متفرع", icon: "💬" },
  video:      { label: "أسئلة داخل فيديو", icon: "🎬" }
};
const SEEDED_ACTIVITIES = [
  { id: "e8-u1-cards", type: "flashcards", title: "بطاقات: أشياء يومية وألوان (خطوة 1/2)", skill: "vocabulary", level: "أساسي", stepRef: "u1g0",
    sourceStatus: "verified", sourceNote: "الكلمات بنصّها من ملاحظات الخطوة 1.1 في TB ص27–28 (مراجعة أشياء WS2 وألوان WS4 وتمارين WB1.1A/B)؛ الترجمة العربية مساعدة من المنصة.",
    instructions: "اضغط البطاقة لقلبها ورؤية المعنى، ثم علّم: أعرفها / ما زلت أتعلمها. اسمع النطق بزر 🔊 (نطق جهازك).",
    items: [["chair","كرسي"],["door","باب"],["table","طاولة"],["pencil","قلم رصاص"],["book","كتاب"],["bicycle","درّاجة"],["bag","حقيبة"],["pen","قلم"],["wall","جدار"],["window","نافذة"],["red","أحمر"],["white","أبيض"],["green","أخضر"]].map(([front,back]) => ({ front, back })) },
  { id: "e8-u1-mcq", type: "mcq", title: "اختبار قصير: التحية والأشياء والإعجاب (خطوات 1–4)", skill: "grammar", level: "أساسي", stepRef: "u1g1",
    sourceStatus: "verified", sourceNote: "الأسئلة والإجابات من أمثلة اللغة في جدول ملخص Unit 1 بالدليل TB ص25.",
    instructions: "اختر الإجابة الصحيحة لكل سؤال، ثم اضغط «تحقق». اقرأ تفسير كل إجابة — الخطأ المفسَّر يعلّمك أكثر.",
    items: [
      { q: "🔊 What's this? (نشير إلى كرسي)", options: ["A chair.", "It's six o'clock.", "Yes, I do.", "My name is Ali."], a: 0, why: "What's this? سؤال لتسمية الأشياء اليومية في الخطوة 1/2 — والإجابة باسم الشيء: A chair." },
      { q: "Is the door white?", options: ["Yes, I do.", "No. It's green.", "Apples.", "On the table."], a: 1, why: "هذا مثال الدليل في مراجعة الألوان (TB 1.1): Is the door white? — No, it's green. نجيب عن لون الشيء بـ It's + colour." },
      { q: "Do you like oranges?", options: ["Yes, she does.", "Yes, I am.", "Yes, I do.", "Oranges."], a: 2, why: "سؤال Do you…؟ يُجاب بـ Yes, I do / No, I don't — لغة الخطوة 3/4 للتعبير عن الإعجاب." },
      { q: "Does she like oranges?", options: ["No, she doesn't.", "No, I don't.", "No, she isn't watch.", "Yes, they do."], a: 0, why: "مع she نستخدم Does في السؤال وdoesn't في النفي — قارن: Do you like…? لكن Does she like…؟" },
      { q: "🧠 فكّر: أيّ سؤال نستخدمه لنعرف الوقت؟", options: ["What are these?", "What's the time?", "Where are you from?", "How many desks are there?"], a: 1, why: "What's the time? — It's six o'clock. هي لغة الخطوة 5 (الروتين اليومي). بقية الأسئلة عن الأشياء والمكان والعدد." }
    ] },
  { id: "e8-u1-fill", type: "fill", title: "أكمل الفراغ بالكلمة المناسبة (Unit 1)", skill: "grammar", level: "أساسي", stepRef: "u1g3",
    sourceStatus: "verified", sourceNote: "الجمل من أمثلة ملخص Unit 1 في TB ص25–26 وحُذفت منها كلمة التركيز اللغوي.",
    instructions: "اختر الكلمة التي تكمل الجملة بشكل صحيح.",
    items: [
      { before: "Hello. My name", after: "Ali.", options: ["is", "are", "am"], a: 0, why: "My name is… للتعريف بالنفس (خطوة 1/2)." },
      { before: "It's", after: "the table.", options: ["on", "blue", "do"], a: 0, why: "It's on the table — حرف مكان من لغة الخطوة 1/2." },
      { before: "", after: "your name?", options: ["What's", "Where", "Do"], a: 0, why: "What's your name? أول أسئلة البيانات الشخصية في الخطوة 6/7." },
      { before: "There", after: "a sofa in the room.", options: ["is", "are", "do"], a: 0, why: "There is + مفرد: a sofa (خطوة 10/11)." },
      { before: "How many desks", after: "there?", options: ["are", "is", "does"], a: 0, why: "How many + جمع ← are there (خطوة 10/11)." }
    ] },
  { id: "e8-u1-orderwords", type: "order", title: "رتّب الكلمات لتكوين تعليمة صحيحة (خطوة 1/2)", skill: "writing", level: "أساسي", stepRef: "u1g0",
    sourceStatus: "verified", sourceNote: "الجملة بنصّها من لغة الخطوة 1/2 في ملخص الدليل TB ص25 — وهي من تعليمات الصف في الخطوة 1.1.",
    instructions: "المس الكلمات بالترتيب الصحيح. تذكّر: التعليمة تبدأ بفعل أمر.",
    pieces: ["book.", "pencil", "Put", "your", "on", "your"], answer: ["Put", "your", "pencil", "on", "your", "book."] },
  { id: "e8-u1-match", type: "match", title: "وصّل السؤال بإجابته (البيانات الشخصية)", skill: "speaking", level: "أساسي", stepRef: "u1g3", sceneId: "bill-talk",
    sourceStatus: "verified", sourceNote: "الأسئلة من الخطوة 6/7 والخطوة 5 في TB ص25؛ الإجابات أمثلة تدريبية بصوت الطالب (من إعداد المعلم).",
    instructions: "شاهد واستمع إلى مشهد PB3 أولاً إن أردت، ثم المس سؤالاً من اليمين وإجابته المناسبة. قل كل زوج بصوت مرتفع مع زميلك (عمل ثنائي — TB ص10). صوت المشهد نطق جهاز؛ تسجيل Drive المرشح لا يُستخدم بوصفه معتمداً هنا.",
    items: [
      { left: "What's your name?", right: "My name is Saleh." },
      { left: "How old are you?", right: "I'm thirteen." },
      { left: "Where are you from?", right: "I'm from Yemen." },
      { left: "Do you watch TV?", right: "Yes, I do." },
      { left: "What's the time?", right: "It's six o'clock." }
    ], rightOrder: [3, 0, 4, 1, 2] },
  { id: "e8-u1-dialogue", type: "dialogue", title: "حوار: التعرّف على طالب جديد (خطوات 6/7 و12)", skill: "speaking", level: "متوسط", stepRef: "u1g6",
    sourceStatus: "teacher", sourceNote: "سيناريو حواري من إعداد المعلم يستخدم أسئلة البيانات الشخصية في الخطوتين 6/7 و12. عبارات Tim and Saleh الأصلية في PB ص4 نُسخت الآن بصريًا في سجل الخطوة وهي بانتظار مراجعة بشرية ثانية؛ أما هذا السيناريو وردوده فمن صياغة المنصة ولا يُقدَّم كنص الكتاب.",
    instructions: "أنت Saleh. اختر الرد المناسب في كل دور لإكمال المحادثة، وفسّر اختيارك في السؤال الأخير.",
    items: [
      { bot: "Hello! What's your name?", choices: [{ text: "My name is Saleh.", ok: 1, reply: "أحسنت — نعرّف بأنفسنا بـ My name is…" }, { text: "I'm thirteen.", ok: 0, reply: "هذه إجابة سؤال العمر How old are you? وليس سؤال الاسم. حاول مجدداً في إعادة اللعب." }, { text: "Yes, I do.", ok: 0, reply: "Yes, I do جواب أسئلة Do you…؟ هنا سألنا عن الاسم." }] },
      { bot: "Nice to meet you, Saleh. Where do you live?", choices: [{ text: "It's on the table.", ok: 0, reply: "هذه عن مكان شيء صغير على الطاولة، لا عن سكنك." }, { text: "I live in Sana'a.", ok: 1, reply: "صحيح — Where do you live? من الخطوة 12." }, { text: "At six o'clock.", ok: 0, reply: "هذا وقت، لا مكان سكن." }] },
      { bot: "How many brothers and sisters have you got?", choices: [{ text: "I watch TV after school.", ok: 0, reply: "جميل، لكن السؤال عن عدد الإخوة والأخوات." }, { text: "I've got two brothers and one sister.", ok: 1, reply: "ممتاز — إجابة كاملة عن عدد الإخوة (خطوة 12)." }, { text: "Yes, she does.", ok: 0, reply: "هذه إجابة بسؤال Does she…؟" }] },
      { bot: "🧠 أسئلة مفكر: لماذا نقول Does she like…؟ ولا نقول Do she؟", choices: [{ text: "لأن she مفرد غائب فيأخذ الفعل المساعد Does.", ok: 1, reply: "تفسير صحيح — هذا هو الفرق بين Do you وDoes she في الخطوة 3/4." }, { text: "لأن السؤال عن oranges.", ok: 0, reply: "نوع الطعام لا يغيّر الفعل المساعد؛ الضمير هو المؤثر." }, { text: "لا فرق بينهما.", ok: 0, reply: "يوجد فرق نحوي: مع he/she نستخدم Does." }] }
    ] },
  { id: "e8-u1-sequence", type: "order", title: "قصة قصيرة: رتّب يوم Bill (نشاط قصصي للخطوة 5)", skill: "reading", level: "أساسي", stepRef: "u1g2",
    sourceStatus: "teacher", sourceNote: "نشاط قصصي تدريبي من إعداد المعلم يبني على جملة الخطوة 5 في TB (What does Bill do at six o'clock? He gets up) وعلى تراكيب من ملخص الوحدة. صفحة PB2 لم تُوجد بين ص1 وص3 في تسلسل المسح المزوّد، فلا يُنسب هذا النشاط إلى نص قراءتها الأصلي.",
    instructions: "رتّب أحداث يوم Bill من الصباح إلى ما بعد المدرسة. ما الكلمات التي ساعدتك على معرفة الترتيب؟",
    pieces: ["After school, Bill watches TV.", "Bill gets up at six o'clock.", "Bill comes to school."],
    answer: ["Bill gets up at six o'clock.", "Bill comes to school.", "After school, Bill watches TV."] },
  { id: "e8-u1-ing-places", type: "fill", title: "أكمل: المضارع المستمر وقواعد -ing والأمكنة (خطوتا 8/9)", skill: "grammar", level: "أساسي", stepRef: "u1g4",
    sourceStatus: "teacher", sourceNote: "نشاط تطبيقي من إعداد المعلم مبني على أهداف وقواعد وأمثلة الخطوتين 1.8 و1.9 في TB ص40–43، وعلى تمارين WB ص8–10 المنسوخة بصريًا في سجل الخطوة (بانتظار مراجعة بشرية ثانية، وليست Verified). صياغة الأسئلة من المنصة وليست نصًا منقولًا حرفيًا من الكتاب.",
    instructions: "اختر الكلمة الصحيحة لإكمال كل جملة أو صيغة. راجع قاعدة be + verb-ing وقواعد تهجئة -ing قبل التحقق.",
    items: [
      { before: "What is he doing? — He is", after: "television.", options: ["watching", "watch", "watches"], a: 0, why: "المضارع المستمر في الخطوة 1.8 هو be + verb-ing: He is watching television." },
      { before: "run + -ing =", after: "", options: ["running", "runing", "runeing"], a: 0, why: "في الأفعال القصيرة التي تنتهي بحرف ساكن بعد حرف متحرك واحد نضاعف الحرف الأخير: run → running، كما في WB1.8A وشرح TB ص40." },
      { before: "ride + -ing =", after: "", options: ["riding", "rideing", "ridding"], a: 0, why: "نحذف e الصامتة قبل -ing: ride → riding. الفعل نفسه ظاهر في جدول WB1.8A." },
      { before: "I like reading, swimming", after: "watching TV.", options: ["and", "or", "but"], a: 0, why: "في قائمة الأشياء التي نحبها نستخدم and قبل العنصر الأخير، كما في نموذج TB للخطوة 1.8." },
      { before: "I don't like shopping", after: "playing football.", options: ["or", "and", "but"], a: 0, why: "بعد don't like نستخدم or لربط الأنشطة غير المحبوبة، كما في نموذجي TB للخطوتين 1.3 و1.8." },
      { before: "Where can you buy bread? — At the", after: ".", options: ["bakery", "bank", "beach"], a: 0, why: "هذا هو مثال TB في الخطوة 1.9 لمراجعة المحلات والأبنية: buy bread → at the bakery." },
      { before: "Hassan and Fuad are", after: "to their friend.", options: ["talking", "talk", "talks"], a: 0, why: "مع فاعل جمع نستخدم are + verb-ing. الجملة بصيغتها الصحيحة هي هدف إعادة الترتيب في WB1.9C بعد فحصه بصريًا." }
    ] },
  { id: "e8-u1-house-categories", type: "mcq", title: "صنّف كلمات الأمكنة والبيت والأثاث (خطوتا 10/11)", skill: "vocabulary", level: "أساسي", stepRef: "u1g5",
    sourceStatus: "teacher", sourceNote: "نشاط من إعداد المعلم يستخدم قائمة WB1.10A المنسوخة بصريًا من WB ص11 (بانتظار مراجعة بشرية ثانية، وليست Verified) وأمثلة There is/There are في TB ص44–45؛ أسئلة التصنيف بصياغة المنصة وليست نقلًا حرفيًا للتمرين كاملًا.",
    instructions: "اختر التصنيف الصحيح لكل كلمة من قائمة WB1.10A، ثم اختر is أو are في جملتي الوصف.",
    items: [
      { q: "bookshop", options: ["Place", "Room of the house", "Furniture"], a: 0, why: "في WB1.10A تُصنف bookshop ضمن Places." },
      { q: "living room", options: ["Place", "Room of the house", "Furniture"], a: 1, why: "living room غرفة من غرف البيت في قائمة WB1.10A." },
      { q: "carpet", options: ["Place", "Room of the house", "Furniture"], a: 2, why: "carpet من مفردات Furniture في WB1.10A." },
      { q: "police station", options: ["Place", "Room of the house", "Furniture"], a: 0, why: "police station مكان/مبنى، لا غرفة ولا قطعة أثاث." },
      { q: "bedroom", options: ["Place", "Room of the house", "Furniture"], a: 1, why: "bedroom غرفة من غرف البيت." },
      { q: "cushion", options: ["Place", "Room of the house", "Furniture"], a: 2, why: "cushion قطعة/عنصر أثاث في قائمة WB1.10A." },
      { q: "There ___ a sofa in the room.", options: ["is", "are", "do"], a: 0, why: "نستخدم There is مع المفرد a sofa، كما في Language focus للخطوة 1.10." },
      { q: "There ___ two pictures on the wall.", options: ["is", "are", "does"], a: 1, why: "نستخدم There are مع الجمع two pictures، كما في أمثلة TB للخطوة 1.10." }
    ] },
  { id: "e8-u2-past-ed", type: "fill", title: "أكمل: الماضي البسيط ونهاية -ed (Unit 2 خطوة 1)", skill: "grammar", level: "أساسي", stepRef: "u2g0",
    sourceStatus: "teacher", sourceNote: "نشاط تطبيقي من إعداد المعلم مبني على جدول أفعال الماضي ونطق ‎-ed‎ وأمثلة الخطوة 2.1 في TB ص50؛ صياغة الجمل من المنصة وليس نصًا منقولًا حرفيًا من WB.",
    instructions: "اختر صيغة الماضي البسيط الصحيحة. تذكّر قواعد تهجئة ‎-ed‎ التي شرحها الدليل: مضاعفة الحرف الأخير أحيانًا، وإبقاء y بعد حرف متحرك.",
    items: [
      { before: "What did you do yesterday? — I", after: "TV.", options: ["watched", "watch", "watchs"], a: 0, why: "هذا نموذج الدليل نفسه في الخطوة 2.1: What did you do yesterday? — I watched TV." },
      { before: "hop + -ed =", after: "", options: ["hopped", "hoped", "hopping"], a: 0, why: "في الفعل القصير المنتهي بحرف ساكن بعد متحرك واحد نضاعف الحرف الأخير: hop → hopped، وهو في جدول نطق TB ص50." },
      { before: "pray + -ed =", after: "", options: ["prayed", "praied", "prayyed"], a: 0, why: "إذا جاء قبل y حرف متحرك (a) نبقي y ونضيف ‎-ed‎ فقط: pray → prayed، كما في جدول TB ص50." },
      { before: "Did you go to the beach? — Yes, I", after: ".", options: ["did", "didn't", "do"], a: 0, why: "الإجابة القصيرة في الدليل: Yes, I did. / No, I didn't. (TB ص50)." },
      { before: "She", after: "her grandmother yesterday.", options: ["visited", "visit", "visiting"], a: 0, why: "visited صيغة الماضي من visit وتُنطق نهايتها ‎/ɪd/‎ كما في جدول نطق ‎-ed‎ في TB ص50." }
    ] },
  { id: "e8-u2-come-school", type: "mcq", title: "كيف يأتي التلاميذ إلى المدرسة؟ (Unit 2 خطوة 2)", skill: "grammar", level: "أساسي", stepRef: "u2g1",
    sourceStatus: "teacher", sourceNote: "نشاط من إعداد المعلم مبني على أمثلة الخطوة 2.2 في ملخص الوحدة وملاحظاتها (TB ص48 و52) عن الحاضر والماضي البسيط ووسائل المجيء إلى المدرسة؛ الأسئلة بصياغة المنصة وليست نصًا منقولًا من PB.",
    instructions: "اختر الإجابة الصحيحة؛ انتبه للفرق بين عادة كل يوم (present simple) وما حدث أمس (past simple).",
    items: [
      { q: "How do you come to school?", options: ["I come by bus.", "I came yesterday at six.", "Yes, I did."], a: 0, why: "سؤال How do you…؟ عن العادة يُجاب بوسيلة المجيء: I come by bus / by car (TB ص48)." },
      { q: "Yesterday Najeeb ___ to school by bus.", options: ["came", "come", "comes"], a: 0, why: "كلمة Yesterday تعني الماضي؛ ومثال الدليل: Yesterday Najeeb came to school by bus." },
      { q: "Ali didn't walk to school. He ___.", options: ["ran", "runs every day", "run now"], a: 0, why: "مثال الدليل في ملخص الوحدة: Ali didn't walk. He ran. — كلاهما ماضٍ بسيط." },
      { q: "أي جملة تتحدث عن الماضي؟", options: ["He walks to school.", "He walked to school.", "He walk to school yesterday."], a: 1, why: "walked هي صيغة الماضي المنتظم بإضافة ‎-ed‎ كما راجعته الخطوة 2.1؛ أما walks فللحاضر." }
    ] },
  { id: "e8-u2-cross-order", type: "order", title: "رتّب تعليمات عبور الشارع بأمان (Unit 2 خطوات 3–5)", skill: "reading", level: "أساسي", stepRef: "u2g2",
    sourceStatus: "teacher", sourceNote: "نشاط ترتيب من إعداد المعلم يستخدم تعليمات العبور كما وردت في ملخص الخطوة 2.3 وملاحظاتها (TB ص48 و54)؛ ترتيب القطع هنا تدريب منصة وليس نصًا منقولًا من PB7.",
    instructions: "المس التعليمات بالترتيب الآمن الصحيح لعبور الشارع كما علّمتك الخطوة 2.3، ثم تحقق.",
    pieces: ["Look right.", "Don't run.", "Look left.", "Stop."],
    answer: ["Stop.", "Look left.", "Look right.", "Don't run."] },
  { id: "e8-u2-would-like", type: "mcq", title: "ماذا تودّ أن تشرب؟ — would like (Unit 2 خطوة 6)", skill: "speaking", level: "أساسي", stepRef: "u2g3",
    sourceStatus: "teacher", sourceNote: "نشاط من إعداد المعلم مبني على Language focus للخطوة 2.6 (TB ص57): What would you like to drink? — I'd like a Pepsi, please؛ الأسئلة بصياغة المنصة وليست حوار الكتاب.",
    instructions: "اختر الردّ المهذّب المناسب لكل موقف طلب.",
    items: [
      { q: "What would you like to drink?", options: ["I'd like a Pepsi, please.", "I watched TV.", "By bus."], a: 0, why: "هذا هو تبادل الدليل نفسه في الخطوة 2.6 للتعبير عن الرغبة بأدب: I'd like … , please." },
      { q: "What ___ you like to drink?", options: ["would", "did yesterday", "is"], a: 0, why: "صيغة السؤال عن الرغبة هي What would you like…؟ وكلمة would من مفردات الخطوة 2.6 الجديدة." },
      { q: "ما الكلمة التي تجعل الطلب مهذّبًا في: I'd like a Pepsi, please؟", options: ["please", "Pepsi", "like"], a: 0, why: "كلمة please في نهاية الطلب تجعله مهذّبًا، كما في نموذج الدليل." },
      { q: "A take-away is a place where you buy ___.", options: ["food and drink", "clothes", "a bus"], a: 0, why: "take-away من مفردات الخطوة 2.6: مكان يُشترى منه الطعام والشراب الجاهز." }
    ] },
  { id: "e8-u2-arrangements", type: "dialogue", title: "حوار: ترتيب زيارة مع فتاة من الكويت (Unit 2 خطوتا 7/8)", skill: "speaking", level: "متوسط", stepRef: "u2g4",
    sourceStatus: "teacher", sourceNote: "سيناريو حواري من إعداد المعلم يستخدم تركيب would like/love + infinitive ومفردات الخطوتين 2.7 و2.8 (TB ص58–59) وعنوان محادثة PB11؛ ليس نصّ محادثة الكتاب التي ما زالت بانتظار النسخ البصري.",
    instructions: "أنت Fatma. اختاري الردّ المناسب في كل دور لإكمال ترتيب الزيارة.",
    items: [
      { bot: "Hello! I'm Ameena. I'm on holiday from Kuwait.", choices: [{ text: "Nice to meet you, Ameena.", ok: 1, reply: "أحسنت — ردّ مناسب للتعارف؛ وعبارة on holiday من مفردات الخطوة 2.7." }, { text: "I watched TV yesterday.", ok: 0, reply: "هذه جملة عن الماضي لا تناسب التحية والتعارف هنا." }, { text: "By bus.", ok: 0, reply: "By bus تجيب عن وسيلة المجيء، لا عن تقديم شخص لنفسه." }] },
      { bot: "Would you like to come to my house tomorrow?", choices: [{ text: "No. It's green.", ok: 0, reply: "هذه إجابة عن لون شيء، لا عن دعوة للزيارة." }, { text: "I'd love to. When?", ok: 1, reply: "صحيح — هذا نموذج ملخص الوحدة: Would you like to come to my house? — I'd love to. When?" }, { text: "He ran to school.", ok: 0, reply: "جملة ماضٍ عن شخص آخر لا تردّ على الدعوة." }] },
      { bot: "Come at four o'clock tomorrow.", choices: [{ text: "Fine. See you tomorrow!", ok: 1, reply: "ممتاز — Fine. من مفردات الخطوة 2.7، وtomorrow تؤكد موعد الترتيب." }, { text: "I don't like watching TV.", ok: 0, reply: "هذا رفض لاقتراح مشاهدة التلفاز (خطوة 2.13)، لا تأكيد لموعد." }, { text: "At the book shop.", ok: 0, reply: "هذه إجابة عن مكان شراء، لا عن موعد زيارة." }] }
    ] },
  { id: "e8-u2-presents-cards", type: "flashcards", title: "بطاقات: هدايا وألعاب ومجوهرات (Unit 2 خطوات 9–12)", skill: "vocabulary", level: "أساسي", stepRef: "u2g5",
    sourceStatus: "teacher", sourceNote: "بطاقات من إعداد المعلم؛ الكلمات الإنجليزية بنصّها من قوائم Vocabulary للخطوتين 2.9 و2.10 (TB ص60–62)، والمعاني العربية مساعدة من المنصة.",
    instructions: "اضغط البطاقة لقلبها ورؤية المعنى، ثم علّم: أعرفها / ما زلت أتعلمها. زر 🔊 هو النطق الآلي لجهازك عند الضغط فقط.",
    items: [["jigsaw puzzle","أحجية تركيب الصور"],["doll","دمية"],["chess set","طقم شطرنج"],["model boat","نموذج قارب"],["bracelet","سِوار"],["necklace","قِلادة"],["a pair of earrings","زوج أقراط"],["comic","قصة/مجلة مصوّرة"],["box of paints","علبة ألوان"],["tie","ربطة عنق"],["ring","خاتم"],["toy shop","محلّ ألعاب"]].map(([front,back]) => ({ front, back })) },
  { id: "e8-u2-suggestions", type: "mcq", title: "لنسأل حسن: اقتراحات وقبول ورفض (Unit 2 خطوة 13)", skill: "speaking", level: "أساسي", stepRef: "u2g6",
    sourceStatus: "teacher", sourceNote: "نشاط من إعداد المعلم مبني على Language focus للخطوة 2.13 (TB ص66) في طلب الاقتراحات وتقديمها ورفضها؛ المواقف بصياغة المنصة وليست نصّ محادثة PB14.",
    instructions: "اختر الردّ أو الصيغة الصحيحة في مواقف الاقتراحات.",
    items: [
      { q: "Hassan: Let's watch TV. — You do not like TV. You say:", options: ["No. I don't like watching TV.", "Yes, I watched TV.", "At the take-away."], a: 0, why: "هذا هو ردّ الرفض في الدليل: No. I don't like watching TV — لاحظ watching بعد like." },
      { q: "How about ___ to the take-away?", options: ["going", "go yesterday", "went to school"], a: 0, why: "بعد How about يأتي الفعل بصيغة ‎-ing‎: How about going to the take-away? (TB ص66)." },
      { q: "What would you like to do?", options: ["I'd like to play football.", "I came by bus.", "She bought a ring."], a: 0, why: "الإجابة عن رغبتك الآن تكون بـ I'd like to + فعل، كما في نموذج الخطوة 2.13." },
      { q: "أي جملة تقدّم اقتراحًا لنشاط جماعي؟", options: ["Let's go to the park.", "I went to the park yesterday.", "He is in the park."], a: 0, why: "Let's + فعل صيغة اقتراح مشترك وردت في ملخص الخطوة 2.13 (TB ص49)." }
    ] },
  { id: "e8-u2-that-those", type: "fill", title: "أكمل: that/those و it/them (Unit 2 خطوة 14)", skill: "grammar", level: "أساسي", stepRef: "u2g7",
    sourceStatus: "teacher", sourceNote: "نشاط تطبيقي من إعداد المعلم على Language focus للخطوة 2.14 (TB ص68): that/it للمفرد وthose/they/them للجمع؛ الجمل بصياغة المنصة وليست نصًّا من محادثتي PB.",
    instructions: "اختر اسم الإشارة أو الضمير الصحيح بحسب المفرد والجمع.",
    items: [
      { before: "Look at", after: "watch. It is nice.", options: ["that", "those", "them"], a: 0, why: "watch مفرد فنستخدم that، ثم نعود عليها بـ it — قاعدة الخطوة 2.14: that / it." },
      { before: "Look at", after: "sandals. I like them.", options: ["those", "that", "it"], a: 0, why: "sandals جمع (a pair of sandals من خطوة 2.10) فنستخدم those ونعود عليها بـ them." },
      { before: "That's a nice bracelet. I bought", after: "for Asma.", options: ["it", "them", "they"], a: 0, why: "الضمير العائد على مفرد (bracelet) في موقع المفعول هو it." },
      { before: "Those earrings are nice. I like", after: ".", options: ["them", "it", "that"], a: 0, why: "earrings جمع؛ ضمير المفعول العائد عليها them كما في قاعدة الخطوة 2.14." }
    ] },
  { id: "e8-u2-didnt-puzzle", type: "mcq", title: "لغز: ماذا اشترى كلٌّ منهم؟ (Unit 2 خطوة 15)", skill: "reading", level: "متوسط", stepRef: "u2g8",
    sourceStatus: "teacher", sourceNote: "نشاط فهم من إعداد المعلم يعيد استخدام جمل المثال التوضيحي في ملاحظات الخطوة 2.15 (TB ص70) ومثال ملخص الوحدة (TB ص49)؛ الأسئلة بصياغة المنصة وليست لغز WB نفسه.",
    instructions: "اقرأ كل جملة بدقة — انتبه: ما يُنفى بـ didn't لم يحدث! ثم اختر الإجابة الصحيحة.",
    items: [
      { q: "Mona bought a watch. Where did she buy it?", options: ["At the jewellery shop.", "At the toy shop.", "At the book shop."], a: 0, why: "في مثال الدليل: She bought it at the jewellery shop (TB ص70)." },
      { q: "She didn't buy the watch for Taha. Who did she buy it for?", options: ["For Fuad.", "For her brother Taha.", "For Nadia."], a: 0, why: "المثال يقول: She bought it for Fuad — وTaha هو المنفي بـ didn't فاحذر الخلط." },
      { q: "Fuad didn't buy a ring. What did he buy?", options: ["A necklace.", "A ring.", "A watch."], a: 0, why: "في المثال: He bought a necklace؛ والخاتم هو ما لم يشترِه." },
      { q: "Fatma didn't read a comic. What did she read?", options: ["A book.", "A comic.", "A letter."], a: 0, why: "مثال ملخص الوحدة (TB ص49): Fatma didn't read a comic. She read a book." }
    ] },
  { id: "e8-u2-link-words", type: "fill", title: "أكمل القصة بأدوات الربط (Unit 2 خطوة 16)", skill: "writing", level: "متوسط", stepRef: "u2g9",
    sourceStatus: "teacher", sourceNote: "نشاط كتابة تطبيقي من إعداد المعلم على أدوات الربط في الخطوتين 2.12 و2.16 (TB ص65 و72): and, but, so, Then؛ القصة القصيرة بصياغة المنصة من مفردات الوحدة الموثقة وليست نصّ WB26.",
    instructions: "اختر أداة الربط التي تعطي المعنى الصحيح: and للإضافة، but للمفاجأة/التعارض، so للنتيجة، Then لما حدث بعد ذلك.",
    items: [
      { before: "Ameena wanted to buy a present,", after: "she went to the toy shop.", options: ["so", "but", "yesterday"], a: 0, why: "so تربط السبب بالنتيجة — وهو نمط الدليل: Fuad wanted to buy a present so… (TB ص49 و65)." },
      { before: "She wanted a comic,", after: "the book shop was closed.", options: ["but", "and a ring", "so nice"], a: 0, why: "لكن but تُستخدم عند تعارض الرغبة مع الواقع: أرادت قصة مصوّرة لكن المكتبة مغلقة." },
      { before: "He bought a watch", after: "a ring for his sister.", options: ["and", "but", "then he"], a: 0, why: "and تضيف شيئًا ثانيًا اشتراه في الجملة نفسها دون تعارض أو ترتيب جديد." },
      { before: "First she went to the toy shop.", after: "she bought a doll.", options: ["Then", "But watch", "So nice"], a: 0, why: "Then تعني «بعد ذلك» وترتّب أحداث القصة بعد First، كما في لغة الخطوتين 2.12 و2.16." }
    ] },
  { id: "e8-u2-bingo-categories", type: "mcq", title: "مراجعة: صنّف مفردات الوحدة — Bingo (Unit 2 خطوة 17)", skill: "vocabulary", level: "أساسي", stepRef: "u2g10",
    sourceStatus: "teacher", sourceNote: "نشاط مراجعة من إعداد المعلم يحاكي لعبة Bingo في ملاحظات الخطوة 2.17 (TB ص74) بفئاتها الأربع نفسها: clothes, jewellery, toys, food؛ اختيار الكلمات من قائمة كلمات Unit 2 في TB ص75.",
    instructions: "ضع كل كلمة في فئتها الصحيحة كما في لوحة Bingo بالدليل.",
    items: [
      { q: "dress", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 0, why: "في مثال Bingo بالدليل (TB ص74) كلمة dress تحت فئة clothes." },
      { q: "ring", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 1, why: "ring مثال الدليل نفسه لفئة jewellery (TB ص74)." },
      { q: "doll", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 2, why: "doll مثال الدليل نفسه لفئة toys (TB ص74)." },
      { q: "lamb", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 3, why: "lamb مثال الدليل نفسه لفئة food (TB ص74)." },
      { q: "bracelet", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 1, why: "bracelet (سِوار) من المجوهرات، وهي من مفردات الخطوة 2.10 في محلّ jewellery shop." },
      { q: "jigsaw puzzle", options: ["Clothes", "Jewellery", "Toys", "Food"], a: 2, why: "jigsaw puzzle لعبة من مفردات الخطوة 2.9 التي تُشترى من toy shop." }
    ] },
  { id: "e8-u3-there-some", type: "fill", title: "أكمل: There is/are + some في المطبخ (Unit 3 خطوة 1)", skill: "grammar", level: "أساسي", stepRef: "u3g0",
    sourceStatus: "teacher", sourceNote: "نشاط تطبيقي من إعداد المعلم مبني على مثالي Language focus للخطوة 3.1 (TB ص78) في الكمية غير المحدودة والموقع؛ صياغة الأسئلة من المنصة وليس نصًا منقولًا من PB17 أو WB29.",
    instructions: "اختر is أو are بحسب الاسم: غير المعدود يعامل مفردًا، والجمع يأخذ are.",
    items: [
      { before: "There", after: "some milk in the fridge.", options: ["is", "are", "do"], a: 0, why: "milk غير معدود فيعامل مفردًا: There is some milk — مثال الدليل نفسه (TB ص78)." },
      { before: "There", after: "some oranges on the shelf.", options: ["are", "is", "does"], a: 0, why: "oranges جمع معدود فنستخدم There are — مثال الدليل نفسه (TB ص78)." },
      { before: "The butter", after: "in the fridge.", options: ["is", "are", "do"], a: 0, why: "butter غير معدود/مفرد هنا فنقول is لوصف مكانه في الثلاجة." },
      { before: "The olives", after: "on the shelf.", options: ["are", "is", "does"], a: 0, why: "olives جمع فنقول are عند وصف مكانها على الرف، كما في لغة الخطوات 3.1–3.3." },
      { before: "", after: "is some flour in the cupboard.", options: ["There", "Where", "Who"], a: 0, why: "نبدأ جملة الوجود بـ There is/are؛ وflour من قائمة مفردات الخطوة 3.1." }
    ] },
  { id: "e8-u3-need-any", type: "fill", title: "أكمل: need وsome/any لتحضير الشطيرة (Unit 3 خطوتا 2/3)", skill: "grammar", level: "أساسي", stepRef: "u3g1",
    sourceStatus: "teacher", sourceNote: "نشاط من إعداد المعلم مبني على Language focus للخطوتين 3.2 و3.3 (TB ص79–80) في التعبير عن الاحتياجات ووجود وعدم وجود الأطعمة؛ الجمل تدريبية بصياغة المنصة وليست قصة PB18.",
    instructions: "اختر some في الجمل المثبتة والاحتياجات، وany بعد النفي بـ isn't/aren't.",
    items: [
      { before: "We need", after: "eggs.", options: ["some", "any", "a pair of"], a: 0, why: "في طلب الاحتياج المثبت نستخدم some: We need some eggs (TB ص79)." },
      { before: "There isn't", after: "bread.", options: ["any", "some", "a"], a: 0, why: "بعد النفي isn't نستخدم any: There isn't any bread — مثال الدليل نفسه." },
      { before: "There aren't", after: "eggs.", options: ["any", "some", "a"], a: 0, why: "بعد النفي aren't مع الجمع نستخدم any: There aren't any eggs (TB ص79)." },
      { before: "There is", after: "rice.", options: ["some", "any", "a pair of"], a: 0, why: "جملة مثبتة عن وجود rice غير المعدود: There is some rice، كما في أمثلة الخطوة 3.3." },
      { before: "We need some bread", after: "some eggs.", options: ["and", "any", "are"], a: 0, why: "and تربط احتياجين في مثال الملخص: We need some bread and some eggs (TB ص76)." }
    ] },
  { id: "e8-u3-quantity-choice", type: "mcq", title: "اختر: a أم some أم a pair of؟ (Unit 3 خطوة 4)", skill: "vocabulary", level: "أساسي", stepRef: "u3g2",
    sourceStatus: "teacher", sourceNote: "نشاط تصنيف من إعداد المعلم على تركيز some/any وa/some/a pair of في الخطوة 3.4 (TB ص76 و81)، باستخدام كلمات قائمة Vocabulary نفسها؛ ليس لغز WB33 المنقول.",
    instructions: "اختر ما يسبق كل كلمة عادة: a لشيء مفرد معدود، some لغير المعدود أو كمية، a pair of لما يأتي زوجًا.",
    items: [
      { q: "___ scissors", options: ["a pair of", "a", "some"], a: 0, why: "scissors تُعامل زوجًا ذا شفرتين فنقول a pair of scissors، وهو تركيز الخطوة 3.4." },
      { q: "___ kite", options: ["a", "some", "a pair of"], a: 0, why: "kite اسم مفرد معدود (طائرة ورقية واحدة) فيأخذ a." },
      { q: "___ glue", options: ["some", "a", "a pair of"], a: 0, why: "glue مادة غير معدودة فنستخدم some للكمية غير المحدودة." },
      { q: "___ wood", options: ["some", "a pair of", "a"], a: 0, why: "wood مادة غير معدودة في هذا الاستعمال فنقول some wood." },
      { q: "___ cupboard", options: ["a", "some", "any"], a: 0, why: "cupboard شيء مفرد معدود فيأخذ a لا some." }
    ] },
  { id: "e8-u3-offers", type: "dialogue", title: "حوار: من سيساعد في الحفلة؟ (Unit 3 خطوتا 5/6)", skill: "speaking", level: "متوسط", stepRef: "u3g3",
    sourceStatus: "teacher", sourceNote: "سيناريو حواري من إعداد المعلم يستخدم تركيب We need… / I'll bring… ومفردات الخطوتين 3.5 و3.6 (TB ص83–85)؛ ليس نصّ محادثة PB20 الذي ما زال بانتظار النسخ البصري.",
    instructions: "قدّم عرضًا مناسبًا بـ I'll لكل احتياج في الحفلة.",
    items: [
      { bot: "We need something to drink for the party.", choices: [{ text: "I'll bring some Pepsis.", ok: 1, reply: "أحسنت — هذا عرض الدليل نفسه: I'll bring some Pepsis." }, { text: "There isn't any bread.", ok: 0, reply: "هذه جملة تنفي وجود الخبز، ولا تقدّم مشروبًا للحفلة." }, { text: "I was tired yesterday.", ok: 0, reply: "جملة عن مشاعر الأمس لا تلبي احتياجًا الآن." }] },
      { bot: "We need something to eat.", choices: [{ text: "The butter is in the fridge.", ok: 0, reply: "معلومة عن مكان الزبدة، وليست عرضًا بإحضار طعام." }, { text: "I'll bring some bread and eggs.", ok: 1, reply: "صحيح — يبدأ العرض بـ I'll bring ويذكر طعامًا من مفردات الوحدة." }, { text: "He phoned last Tuesday.", ok: 0, reply: "جملة ماضية عن شخص آخر لا تقدّم مساعدة." }] },
      { bot: "We need music, too.", choices: [{ text: "I'll bring some music.", ok: 1, reply: "ممتاز — music من مفردات الخطوة 3.5، والعرض بصيغة I'll." }, { text: "There are some oranges on the shelf.", ok: 0, reply: "وصف مكان برتقال، لا عرض موسيقى." }, { text: "She made Sam a cake.", ok: 0, reply: "جملة ماضية من خطوة الخطاب، ولا تلبي طلب الموسيقى." }] }
    ] },
  { id: "e8-u3-letter-past", type: "fill", title: "أكمل: أفعال غير منتظمة من خطاب سام (Unit 3 خطوة 7)", skill: "grammar", level: "متوسط", stepRef: "u3g4",
    sourceStatus: "teacher", sourceNote: "نشاط تطبيقي من إعداد المعلم على أزواج الأفعال في قائمة Vocabulary للخطوة 3.7 (make/made، get/got، fly/flew، break/broke) ومثال made a cake for Sam / made Sam a cake (TB ص87)؛ الجمل ليست نصّ خطاب PB21.",
    instructions: "اختر صيغة الماضي الصحيحة أو كلمة الربط المناسبة.",
    items: [
      { before: "Mrs Brown", after: "a cake for Sam.", options: ["made", "make", "makes"], a: 0, why: "ماضي make هو made، وهو مثال الدليل نفسه في الخطوة 3.7." },
      { before: "Sam", after: "a new kite.", options: ["got", "get", "gets"], a: 0, why: "ماضي get بمعنى «حصل على» هو got كما في قائمة أزواج الأفعال (TB ص87)." },
      { before: "The kite", after: "high in the air.", options: ["flew", "fly", "flies"], a: 0, why: "ماضي fly هو flew، وhigh وair من مفردات الخطوة نفسها." },
      { before: "Then the string", after: ".", options: ["broke", "break", "breaks"], a: 0, why: "ماضي break هو broke؛ والجملة تدريب على الزوج الوارد في قائمة الدليل لا ادعاء بأنها من الخطاب." },
      { before: "She made a cake", after: "Sam. = She made Sam a cake.", options: ["for", "any", "are"], a: 0, why: "التركيبان في الدليل متكافئان: made a cake for Sam = made Sam a cake (مفعول غير مباشر)." }
    ] },
  { id: "e8-u3-feelings", type: "match", title: "وصّل: كيف يشعر الناس؟ (Unit 3 خطوتا 8/9)", skill: "vocabulary", level: "أساسي", stepRef: "u3g5",
    sourceStatus: "teacher", sourceNote: "نشاط توصيل من إعداد المعلم؛ الصفات بنصّها من قائمة Vocabulary للخطوة 3.8 (TB ص89)، والتعريفات القصيرة باللغة الإنجليزية مساعدة من المنصة.",
    instructions: "المس صفة الشعور ثم تعريفها المناسب. قل كل زوج بصوت مرتفع: I am …",
    items: [
      { left: "tired", right: "wants to sleep" },
      { left: "frightened", right: "afraid of something" },
      { left: "happy", right: "feels good and smiles" },
      { left: "sad", right: "feels unhappy" },
      { left: "angry", right: "feels mad" }
    ], rightOrder: [3, 0, 4, 1, 2] },
  { id: "e8-u3-dangerous-past", type: "fill", title: "أكمل جدول الماضي: أفعال قصة الخطر (Unit 3 خطوة 10)", skill: "grammar", level: "متوسط", stepRef: "u3g6",
    sourceStatus: "teacher", sourceNote: "نشاط جدول أفعال من إعداد المعلم مبني على صيغ الماضي المعلنة في ملخص الخطوة 3.10 وقائمة مفرداتها (TB ص77 و92)؛ لا يعيد سرد قصة الكتاب ولا يدّعي نقل أحداثها.",
    instructions: "اختر الماضي البسيط الصحيح لكل فعل؛ انتبه للأفعال غير المنتظمة.",
    items: [
      { before: "swim →", after: "", options: ["swam", "swimmed", "swims"], a: 0, why: "swam هي صيغة الماضي غير المنتظم المعلنة في ملخص الخطوة (TB ص77)." },
      { before: "sink →", after: "", options: ["sank", "sinked", "sanks"], a: 0, why: "sink/sank زوج صريح في قائمة كلمات Unit 3 (TB ص100)." },
      { before: "bring →", after: "", options: ["brought", "bringed", "brings"], a: 0, why: "bring/brought من أزواج القائمة نفسها، وقد وردت brought في ملخص الخطوة." },
      { before: "fish →", after: "", options: ["fished", "fish", "fishes"], a: 0, why: "fish فعل منتظم هنا: fish/fished كما في قائمة مفردات الخطوة 3.10." },
      { before: "try →", after: "", options: ["tried", "tryed", "trys"], a: 0, why: "عندما يسبق y حرف ساكن تتحول إلى i قبل ‎-ed‎: try → tried، تطبيقًا لقاعدة تهجئة الماضي من Unit 2 على فعل هذه الخطوة." }
    ] },
  { id: "e8-u3-containers", type: "match", title: "وصّل العبوة بما فيها (Unit 3 خطوة 11)", skill: "vocabulary", level: "أساسي", stepRef: "u3g7",
    sourceStatus: "teacher", sourceNote: "نشاط توصيل من إعداد المعلم؛ عبارات العبوات والأطعمة من ملخص الخطوة 3.11 وLanguage focus (TB ص77 و93)، وصياغة التوصيل من المنصة وليست حوار WB39.",
    instructions: "وصّل كل كلمة عبوة أو عدد بالطعام أو الشراب المناسب، ثم اقرأ العبارة كاملة.",
    items: [
      { left: "a carton of", right: "milk" },
      { left: "a can of", right: "7-up" },
      { left: "a packet of", right: "butter" },
      { left: "six", right: "tomatoes" }
    ], rightOrder: [2, 3, 0, 1] },
  { id: "e8-u3-look-for", type: "mcq", title: "انظر إلى… أم ابحث عن؟ (Unit 3 خطوة 12)", skill: "vocabulary", level: "أساسي", stepRef: "u3g8",
    sourceStatus: "teacher", sourceNote: "أسئلة تطبيقية من إعداد المعلم على عبارات وكلمات قائمة Vocabulary للخطوة 3.12 (look at / look for / lost / found / later) في TB ص95؛ المواقف ليست أحداث قصة Asma and Mariam المنقولة.",
    instructions: "اختر العبارة أو المعنى المناسب لكل موقف قصير.",
    items: [
      { q: "Asma cannot find her bag. She must ___ it.", options: ["look for", "look at", "cry very much"], a: 0, why: "look for تعني «يبحث عن» شيء مفقود، أما look at فتعني النظر إلى شيء موجود أمامك." },
      { q: "___ the picture and answer the question.", options: ["Look at", "Look for", "Lost"], a: 0, why: "الصورة موجودة أمامك، فنقول Look at the picture." },
      { q: "She ___ her bag, but later she ___ it.", options: ["lost / found", "found / lost", "looked at / cried"], a: 0, why: "lost ثم found هو التسلسل المنطقي: فقدت الحقيبة ثم وجدتها لاحقًا (later)." },
      { q: "ما معنى كلمة worry في مفردات هذه الخطوة؟", options: ["يقلق", "يجد", "يبكي"], a: 0, why: "worry تعني «يقلق»؛ أما «يجد» فهي found في الماضي، و«يبكي» هي cry — وكلها من قائمة الخطوة 3.12." }
    ] },
  { id: "e8-u3-yesterday-gap", type: "dialogue", title: "حوار فجوة معلومات: ماذا فعلت أمس؟ (Unit 3 خطوة 13)", skill: "speaking", level: "أساسي", stepRef: "u3g9",
    sourceStatus: "teacher", sourceNote: "تبادل أدوار من إعداد المعلم يستخدم أسئلة وأجوبة Language focus للخطوة 3.13 وملخصها (TB ص77 و96) عن أنشطة الأمس؛ المعلومات الشخصية هنا تدريبية ولا تنقل جداول WB41/42.",
    instructions: "اختر الجواب القصير الصحيح نحويًا لكل سؤال عن الأمس.",
    items: [
      { bot: "Were you at the beach yesterday?", choices: [{ text: "Yes, I was.", ok: 1, reply: "صحيح — سؤال Were you…؟ جوابه Yes, I was / No, I wasn't كما في ملخص الخطوة." }, { text: "Yes, I did.", ok: 0, reply: "did تُستخدم مع أسئلة Did، أما هنا فالفعل هو were." }, { text: "Yes, I were.", ok: 0, reply: "مع I نقول was لا were." }] },
      { bot: "Did you play football?", choices: [{ text: "No, I wasn't.", ok: 0, reply: "wasn't جواب أسئلة was/were، والسؤال هنا يبدأ بـ Did." }, { text: "No, I didn't.", ok: 1, reply: "أحسنت — Did you…؟ → Yes, I did / No, I didn't." }, { text: "No, I doesn't.", ok: 0, reply: "doesn't للحاضر مع he/she، ولا تناسب سؤالًا عن الأمس بـ Did." }] },
      { bot: "Did Tom go to school yesterday?", choices: [{ text: "Yes, he was.", ok: 0, reply: "السؤال عن فعل الذهاب بـ Did، فلا نجيب بـ was." }, { text: "Yes, he do.", ok: 0, reply: "do صيغة حاضر؛ الماضي المساعد هنا did." }, { text: "Yes, he did.", ok: 1, reply: "صحيح — هذا مثال Language focus للخطوة 3.13 نفسه (TB ص96)." }] }
    ] },
  { id: "e8-u3-diary-verbs", type: "fill", title: "أكمل جدول أفعال اليوميات (Unit 3 خطوة 14)", skill: "grammar", level: "متوسط", stepRef: "u3g10",
    sourceStatus: "teacher", sourceNote: "نشاط جدول لغة من إعداد المعلم يحاكي هدف الخطوة 3.14 في إكمال جدول وكتابة مدخل يوميات؛ الصيغ phoned/came/saw من ملخص TB ص77 وcatch/caught من قائمة TB ص98، ولا ينقل نصّ مدخلَي PB28.",
    instructions: "اختر صيغة الماضي التي ستكتبها في مدخل يوميات عن يوم مضى.",
    items: [
      { before: "phone →", after: "", options: ["phoned", "phons", "phoning"], a: 0, why: "phoned صيغة الماضي المعلنة في ملخص الخطوة 3.14 (TB ص77)." },
      { before: "come →", after: "", options: ["came", "comed", "comes"], a: 0, why: "came ماضٍ غير منتظم لـ come كما في ملخص الخطوة." },
      { before: "see →", after: "", options: ["saw", "seed", "sees"], a: 0, why: "saw ماضٍ غير منتظم لـ see كما في ملخص الخطوة." },
      { before: "catch →", after: "", options: ["caught", "catched", "catches"], a: 0, why: "catch/caught زوج صريح في قائمة Vocabulary للخطوة 3.14 (TB ص98)." },
      { before: "After lunch, we went", after: "a walk.", options: ["for", "any", "are"], a: 0, why: "العبارة كاملة go for a walk من قائمة مفردات الخطوة 3.14، وبصيغة الماضي went for a walk." }
    ] },
  { id: "e8-u3-draw-guess", type: "mcq", title: "لعبة المراجعة: ارسم وخمّن (Unit 3 خطوة 15)", skill: "vocabulary", level: "أساسي", stepRef: "u3g11",
    sourceStatus: "teacher", sourceNote: "نشاط مراجعة من إعداد المعلم يستخدم أمثلة التخمين والرسم وإجابة شجرة الكلمات كما وردت حرفيًا في ملاحظات الخطوة 3.15 (TB ص99)؛ تحويلها إلى أسئلة اختيار من عمل المنصة.",
    instructions: "اقرأ التلميحات كما في لعبة الدليل وخمّن الكلمة.",
    items: [
      { q: "It's clothes. It's a pair. It begins with s.", options: ["socks", "skirt", "fridge"], a: 0, why: "هذا هو مثال التلميحات الأول في TB ص99 وإجابته بين قوسين: socks." },
      { q: "It's in a kitchen. It begins with f.", options: ["fridge", "football", "feeling"], a: 0, why: "مثال الدليل الثاني إجابته fridge؛ فهو في المطبخ ويبدأ بحرف f." },
      { q: "Teacher: What am I drawing? — Pupil: You're drawing some ___.", options: ["butter", "music", "diary"], a: 0, why: "في مثال لعبة الرسم بالدليل يخمّن التلميذ أولًا: You're drawing some butter (TB ص99)." },
      { q: "ما إجابة شجرة الكلمات (word tree) في ملاحظات الخطوة 3.15؟", options: ["PRESENTS", "PICTURES", "PENCILS"], a: 0, why: "يصرّح الدليل في TB ص99: The answer is PRESENTS." }
    ] },
  { id: "e8-u4-offers-help", type: "dialogue", title: "حوار: هل أستطيع مساعدتك؟ (Unit 4 خطوة 1)", skill: "speaking", level: "أساسي", stepRef: "u4g0",
    sourceStatus: "teacher", sourceNote: "تبادل أدوار من إعداد المعلم يستخدم عروض I'll وأفعال الحركة في الخطوة 4.1 (TB ص103)، بما فيها نموذجا You push and I'll pull وI'll get the eggs؛ المواقف تدريبية وليست نصوص PB30 المنقولة.",
    instructions: "اختر عرض المساعدة المناسب لكل موقف، ثم قله بصوت مرتفع مع زميل.",
    items: [
      { bot: "This box is heavy. I can't move it.", choices: [{ text: "You push and I'll pull.", ok: 1, reply: "أحسنت — هذا نموذج الدليل نفسه لتقسيم العمل بعرض فوري: You push and I'll pull." }, { text: "I was feeding the cat.", ok: 0, reply: "جملة ماضٍ مستمر لا تعرض مساعدة الآن." }, { text: "He won't be home until ten.", ok: 0, reply: "هذه رسالة عن موعد عودة، لا حل لمشكلة الصندوق." }] },
      { bot: "I can't reach the eggs.", choices: [{ text: "I'll get the eggs.", ok: 1, reply: "صحيح — I'll get… عرض مباشر ورد في تدريب السلسلة بملاحظات الخطوة 4.1." }, { text: "Go along this road.", ok: 0, reply: "هذا توجيه طريق من الخطوة 4.6، لا عرض إحضار البيض." }, { text: "She made a cake.", ok: 0, reply: "جملة ماضية لا تساعد المتحدث الآن." }] },
      { bot: "These bags are heavy.", choices: [{ text: "I'll carry one.", ok: 1, reply: "ممتاز — carry من أفعال الخطوة 4.1، وI'll يجعل الجملة عرض مساعدة." }, { text: "What were they doing?", ok: 0, reply: "سؤال عن أفعال ماضية، لا عرض حمل." }, { text: "There is some milk.", ok: 0, reply: "جملة وجود من Unit 3 لا تعرض المساعدة هنا." }] }
    ] },
  { id: "e8-u4-tree-house", type: "mcq", title: "بيت الشجرة وأسئلة Who (Unit 4 خطوة 2)", skill: "grammar", level: "أساسي", stepRef: "u4g1",
    sourceStatus: "teacher", sourceNote: "أسئلة من إعداد المعلم على لغة ومفردات الخطوة 4.2 (TB ص101 و105)، بما فيها التمييز بين Who helped Tom؟ وWho did Anne help؟؛ لا تنقل أحداث قصة PB31/32.",
    instructions: "اختر الكلمة أو الصيغة الصحيحة؛ انتبه لموضع Who: فاعلًا أم مفعولًا.",
    items: [
      { q: "I want to ___ a tree house.", options: ["build", "built the way", "ladder"], a: 0, why: "build هو فعل الرغبة في مثال الدليل: I want to build a house." },
      { q: "You hold it and I'll ___ up.", options: ["go", "went yesterday", "nail"], a: 0, why: "بعد I'll يأتي الفعل الأساسي: I'll go up، كما في Language focus للخطوة 4.2." },
      { q: "___ helped Tom?", options: ["Who", "Where will", "How many o'clock"], a: 0, why: "نسأل بـ Who عن الشخص الذي قام بفعل المساعدة (الفاعل)." },
      { q: "Who did Anne ___?", options: ["help", "helped the tree", "helps yesterday"], a: 0, why: "بعد did يعود الفعل إلى صورته الأساسية help؛ والسؤال هنا عمّن تلقى المساعدة." },
      { q: "We climb up to the tree house on a ___.", options: ["ladder", "hammer", "message"], a: 0, why: "ladder (سلّم) من مفردات الخطوة، أما hammer فلدق المسامير." }
    ] },
  { id: "e8-u4-phone-messages", type: "fill", title: "أكمل رسائل الهاتف بالمستقبل (Unit 4 خطوتا 3/4)", skill: "writing", level: "أساسي", stepRef: "u4g2",
    sourceStatus: "teacher", sourceNote: "نشاط كتابة تطبيقية من إعداد المعلم على will/won't ومفردات أخذ الرسائل في الخطوتين 4.3 و4.4 (TB ص107–109)؛ الرسائل القصيرة هنا مكتوبة للتدريب وليست محادثات PB33 أو CS29.",
    instructions: "اختر ما يكمل كل رسالة هاتف قصيرة بصورة صحيحة.",
    items: [
      { before: "He", after: "be late.", options: ["will", "was yesterday", "is feeding"], a: 0, why: "will + فعل أساسي للمستقبل: He'll be late كما في مثال الخطوة 4.3." },
      { before: "He", after: "be home until 10 o'clock.", options: ["won't", "will yesterday", "was"], a: 0, why: "won't هي نفي will؛ ومثال الدليل: He won't be home until 10 o'clock." },
      { before: "Can I take a", after: "?", options: ["message", "ladder", "falcon"], a: 0, why: "take a message عبارة صريحة في قائمة مفردات الخطوة 4.3 وتعني أخذ رسالة هاتفية." },
      { before: "She will", after: "you at school.", options: ["meet", "met yesterday", "meeting the cat"], a: 0, why: "بعد will نستخدم meet بصورته الأساسية، وهي من مفردات الخطوة 4.3." },
      { before: "The match will start soon. Don't be", after: ".", options: ["late", "alone in a tree", "a message"], a: 0, why: "late تعني متأخرًا وتناسب تنبيه موعد بدء المباراة؛ وmatch وstart من مفردات الخطوة." }
    ] },
  { id: "e8-u4-message-questions", type: "mcq", title: "أسئلة فجوة المعلومات عن الرسائل (Unit 4 خطوة 5)", skill: "speaking", level: "أساسي", stepRef: "u4g3",
    sourceStatus: "teacher", sourceNote: "أسئلة من إعداد المعلم على أدوات الاستفهام المعلنة في ملخص الخطوة 4.5 (Who/Where/When) ومفردات التعرف في TB ص111؛ ليست بطاقات فجوة المعلومات الأصلية FCs.",
    instructions: "اختر أداة السؤال المناسبة لاستخراج المعلومة الناقصة.",
    items: [
      { q: "___ phoned?", options: ["Who", "Where", "How many desks"], a: 0, why: "نسأل بـ Who عن الشخص الذي اتصل، وهو أول سؤال في ملخص الخطوة 4.5." },
      { q: "___ will she be?", options: ["Where", "Who phoned", "What were"], a: 0, why: "Where تسأل عن المكان الذي ستكون فيه في المستقبل." },
      { q: "___ will he be home?", options: ["When", "Who", "Which ladder"], a: 0, why: "When تسأل عن وقت العودة إلى المنزل." },
      { q: "ما معنى soon في مفردات تعرّف الخطوة 4.5؟", options: ["قريبًا", "وحيدًا", "مريضًا"], a: 0, why: "soon تعني «قريبًا»؛ أما alone وill فهما من مفردات الخطوة 4.3 بمعنيين آخرين." }
    ] },
  { id: "e8-u4-directions", type: "order", title: "رتّب اتجاهات الطريق إلى البنك (Unit 4 خطوتا 6/7)", skill: "speaking", level: "أساسي", stepRef: "u4g4",
    sourceStatus: "teacher", sourceNote: "نشاط ترتيب من إعداد المعلم يستخدم عبارات الاتجاه بنصّ معانيها من الخطوتين 4.6 و4.7 (TB ص113–115)؛ المسار المحدد هنا تدريبي ولا يُنسب إلى مخطط مدينة PB35.",
    instructions: "رتّب الجمل كما تحدث في حوار سؤال عن الطريق ثم السير فيه.",
    pieces: ["Turn left at the school.", "Can you tell me the way to the bank?", "Then go straight on.", "Go along this road to the supermarket."],
    answer: ["Can you tell me the way to the bank?", "Go along this road to the supermarket.", "Turn left at the school.", "Then go straight on."] },
  { id: "e8-u4-future-help", type: "fill", title: "أكمل: I'll / We'll / They'll وwon't (Unit 4 خطوة 8)", skill: "grammar", level: "أساسي", stepRef: "u4g5",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم على صيغ المستقبل المعلنة في ملخص الخطوة 4.8 وتركيزها (TB ص101 و117)؛ لا يكشف أو ينقل حل حوار PB36 المبعثر.",
    instructions: "اختر الاختصار أو الكلمة التي تكمل جمل المستقبل.",
    items: [
      { before: "I", after: "see you tomorrow.", options: ["'ll", "was", "did yesterday"], a: 0, why: "I'll = I will، وهي صيغة مثال الملخص: I'll see you tomorrow." },
      { before: "She", after: "be back until next Friday.", options: ["won't", "was", "is feeding"], a: 0, why: "النفي في المستقبل هو won't، كما في مثال الدليل نفسه." },
      { before: "", after: "help you tomorrow. (نحن)", options: ["We'll", "They'll", "I'll"], a: 0, why: "We'll تعني نحن سنفعل، وهي إحدى الصيغ الثلاث في تركيز الخطوة 4.8." },
      { before: "", after: "help Mrs Evans. (هم)", options: ["They'll", "We'll", "I'll"], a: 0, why: "They'll تعني هم سيفعلون، وتناسب فاعلًا جمعًا غائبًا." },
      { before: "She won't be back", after: "next Friday.", options: ["until", "into a ladder", "too a message"], a: 0, why: "until تعني «حتى» زمنيًا: لن تعود حتى الجمعة القادمة." }
    ] },
  { id: "e8-u4-past-continuous", type: "fill", title: "أكمل: ماذا كانوا يفعلون؟ (Unit 4 خطوة 9)", skill: "grammar", level: "أساسي", stepRef: "u4g6",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم على was/were + ‎-ing‎ في الخطوة 4.9 (TB ص119) ومثال Mary في الملخص؛ لا ينقل حل لغز قراءة PB37.",
    instructions: "اختر was للمفرد وwere للجمع في الماضي المستمر.",
    items: [
      { before: "At 11 o'clock, Mary", after: "feeding the cat.", options: ["was", "were", "will"], a: 0, why: "Mary مفردة فنقول was feeding كما في مثال ملخص الوحدة." },
      { before: "What", after: "they doing?", options: ["were", "was", "will"], a: 0, why: "they جمع؛ وسؤال الخطوة هو What were they doing?" },
      { before: "He", after: "painting the wall when she came in.", options: ["was", "were", "won't"], a: 0, why: "He مفرد؛ وهذا هو مثال تقديم اللغة في ملاحظات الخطوة 4.9." },
      { before: "They", after: "cooking in the kitchen.", options: ["were", "was", "did"], a: 0, why: "مع They نستخدم were + cooking؛ وcooking من مفردات الخطوة." },
      { before: "I", after: "feeding the cat.", options: ["was", "were", "will"], a: 0, why: "مع I في الماضي نستخدم was لا were." }
    ] },
  { id: "e8-u4-road-accident", type: "mcq", title: "صف الشخص والحدث الماضي (Unit 4 خطوتا 10/11)", skill: "reading", level: "متوسط", stepRef: "u4g7",
    sourceStatus: "teacher", sourceNote: "أسئلة من إعداد المعلم على وصف الأشخاص والماضي المستمر في الخطوتين 4.10 و4.11 (TB ص121–123) ومثال الملخص «He was wearing a black jacket»؛ لا تنقل تفاصيل قصة حادث PB38/39.",
    instructions: "اختر الصيغة المناسبة لوصف شخص أو حدث كان جاريًا.",
    items: [
      { q: "He was tall. He was ___ a black jacket.", options: ["wearing", "wear yesterday", "will wear a message"], a: 0, why: "was + ‎-ing‎ لوصف ما كان يرتديه؛ وهو مثال الملخص نفسه (TB ص102)." },
      { q: "What does he look ___?", options: ["like", "along", "until"], a: 0, why: "عبارة السؤال عن الشكل هي What does he look like؟ كما في Language focus للخطوة 4.10." },
      { q: "I was ___ when I saw the accident.", options: ["shopping", "shop tomorrow", "a ladder"], a: 0, why: "I was shopping صيغة صريحة في تركيز الخطوتين 4.10 و4.11." },
      { q: "بعد حادث طريق، من نستدعي للتحقيق والمساعدة الرسمية؟", options: ["the police", "the sports teacher", "the falcon"], a: 0, why: "the police من قائمة مفردات الخطوة 4.10 في سياق حادث الطريق." },
      { q: "ما معنى suddenly؟", options: ["فجأة", "مبكرًا دائمًا", "وحيدًا"], a: 0, why: "suddenly تعني «فجأة»، وهي كلمة ربط حدث مفاجئ في سياق هذه الخطوة." }
    ] },
  { id: "e8-u4-link-words", type: "fill", title: "أكمل تسلسل المساعدة بكلمات الربط (Unit 4 خطوة 12)", skill: "writing", level: "أساسي", stepRef: "u4g8",
    sourceStatus: "teacher", sourceNote: "تسلسل قصير من إعداد المعلم صاغته المنصة للتدريب على Link-words المعلنة في ملخص الخطوة 4.12 (TB ص102) ومفردات TB ص124؛ ليس ملخصًا منقولًا لقصة Hassan helps في PB40/41.",
    instructions: "اختر كلمة ترتيب الأحداث أو الفعل الذي يجعل التسلسل التدريبي منطقيًا.",
    items: [
      { before: "", after: ", Hassan wrote a list.", options: ["First", "After that", "Suddenly a ladder"], a: 0, why: "First تبدأ تسلسل الأحداث، وهي أولى كلمات الربط في ملخص الخطوة." },
      { before: "", after: ", he went on his way.", options: ["Next", "Until Friday", "Were"], a: 0, why: "Next تعني الخطوة التالية في التسلسل؛ وعبارة on the way من مفردات الخطوة 4.12." },
      { before: "", after: ", he helped somebody.", options: ["Then", "A pair of", "Who phoned"], a: 0, why: "Then تربط حدثًا لاحقًا داخل التسلسل؛ وsomebody من مفردات الخطوة." },
      { before: "After", after: ", he opened the door.", options: ["that", "any", "were"], a: 0, why: "After that عبارة ربط صريحة في الدليل وتعني «بعد ذلك»." },
      { before: "Oh no! He", after: "the list.", options: ["forgot", "forgets tomorrow", "will message"], a: 0, why: "forgot هي صيغة الماضي في زوج forget/forgot من قائمة الخطوة 4.12." }
    ] },
  { id: "e8-u4-jumbled-story", type: "order", title: "أعد ترتيب قصة مبعثرة (Unit 4 خطوتا 13/14)", skill: "reading", level: "متوسط", stepRef: "u4g9",
    sourceStatus: "teacher", sourceNote: "قصة مصغرة من إعداد المعلم للتدريب على فهم تسلسل نص بالماضي البسيط والمستمر كما في الخطوتين 4.13 و4.14 (TB ص125–126)، باستخدام أفعال said/took والسلوك sit down من مفرداتهما؛ ليست قصة PB42 المبعثرة نفسها.",
    instructions: "رتّب الجمل الأربع لتكوّن تسلسلًا منطقيًا واحدًا.",
    pieces: ["Then he took his bag.", "First, he was sitting in the garden.", "After that, he said goodbye.", "Next, his friend came."],
    answer: ["First, he was sitting in the garden.", "Next, his friend came.", "Then he took his bag.", "After that, he said goodbye."] },
  { id: "e8-u4-falcon-cards", type: "flashcards", title: "بطاقات: الصقر الأبيض (Unit 4 خطوة 15)", skill: "vocabulary", level: "متوسط", stepRef: "u4g10",
    sourceStatus: "teacher", sourceNote: "بطاقات مراجعة من إعداد المعلم؛ الكلمات الإنجليزية من قائمة Vocabulary للخطوة 4.15 (TB ص127)، والمعاني العربية مساعدة من المنصة لقراءة القصة وتخمين السياق.",
    instructions: "خمّن معنى كل كلمة من سياق قصة متسلسلة، ثم اقلب البطاقة وعلّم مدى معرفتك بها. زر الصوت هو النطق الآلي لجهازك عند الضغط فقط.",
    items: [["falcon","صقر"],["beautiful","جميل"],["lazy","كسول"],["nothing","لا شيء"],["moon","قمر"],["shining","لامع / يسطع"],["asked","سأل (في الماضي)"]].map(([front,back]) => ({ front, back })) },
  { id: "e8-u4-revision-accident", type: "fill", title: "مراجعة: أكمل قصة الحادث بالماضيين (Unit 4 خطوة 16)", skill: "grammar", level: "متوسط", stepRef: "u4g11",
    sourceStatus: "teacher", sourceNote: "نشاط مراجعة من إعداد المعلم يستخدم كلمات السبورة والمثال التوضيحي في ملاحظات الخطوة 4.16 (TB ص129) للتمييز بين حدث جارٍ وحدث قاطع؛ لا ينقل إجابة نص WB59/60.",
    instructions: "اختر الكلمات التي تكمل مثال الدليل وتساعدك على كتابة قصتك.",
    items: [
      { before: "Tom was", after: "home when he saw an accident.", options: ["walking", "walk tomorrow", "a message"], a: 0, why: "was walking حدث جارٍ في الخلفية، وهي كلمة السبورة الأولى في مثال TB ص129." },
      { before: "when he", after: "an accident.", options: ["saw", "sees yesterday", "will look like"], a: 0, why: "saw حدث ماضٍ بسيط قصير قاطع المشي الجاري." },
      { before: "A boy was", after: "the road", options: ["crossing", "cross tomorrow", "a falcon"], a: 0, why: "was crossing يصف عبورًا جاريًا وقت وقوع الحدث الآخر." },
      { before: "when a bicycle", after: "him.", options: ["hit", "hits every day", "will ladder"], a: 0, why: "hit حدث مفاجئ قصير بصيغة الماضي البسيط، كما في مثال الدليل." },
      { before: "What were you", after: "at six o'clock yesterday evening?", options: ["doing", "do tomorrow", "a crossword"], a: 0, why: "هذا هو سؤال الكتابة عن النفس في TB ص129 لمراجعة الماضي المستمر." }
    ] },
  { id: "e8-u5-camping-plan", type: "dialogue", title: "حوار: نخطط ليوم تخييم (Unit 5 خطوات 1–5)", skill: "speaking", level: "أساسي", stepRef: "u5g0",
    sourceStatus: "teacher", sourceNote: "تبادل أدوار من إعداد المعلم يستخدم أسئلة وعبارات ملخص الخطوات 5.1–5.5 وتركيز لغتها في TB ص131–139 (suggestions، distance، activities، plans، weather)؛ ليس نص محادثات PB45–48 أو تسجيلات CS37–41.",
    instructions: "اختر الرد المناسب لبناء خطة يوم تخييم كاملة، ثم أعد الحوار مع زميل بتغيير المكان والنشاط.",
    items: [
      { bot: "Where shall we go?", choices: [{ text: "Let's go to the Blue Pool.", ok: 1, reply: "أحسنت — Let's + فعل أساسي لاقتراح مكان؛ وThe Blue Pool هو اختيار الحوار الذي تشرحه ملاحظات 5.1." }, { text: "It was raining yesterday.", ok: 0, reply: "جملة عن طقس ماضٍ لا تقترح مكانًا لليوم." }, { text: "Mine, not yours.", ok: 0, reply: "هذا رد عن الملكية من خطوة لاحقة، لا إجابة عن Where." }] },
      { bot: "How far is it?", choices: [{ text: "It's about three kilometres.", ok: 1, reply: "صحيح — about تعني تقريبًا، وهي صيغة المسافة في ملخص Unit 5." }, { text: "First we'll go climbing.", ok: 0, reply: "هذه خطة نشاط أول، لا مسافة." }, { text: "Whose rubber is this?", ok: 0, reply: "هذا سؤال ملكية، لا إجابة عن البعد." }] },
      { bot: "What can we do there?", choices: [{ text: "Go horse-riding.", ok: 1, reply: "ممتاز — horse-riding نشاط ترفيهي في مفردات 5.3 وإجابة الملخص نفسها." }, { text: "Suddenly some goats ran.", ok: 0, reply: "حدث قصصي مفاجئ لا يقترح نشاطًا مخططًا." }, { text: "It is on the shelf.", ok: 0, reply: "وصف مكان شيء داخل غرفة لا يناسب سؤال أنشطة الموقع." }] },
      { bot: "What shall we do first?", choices: [{ text: "First we'll go climbing.", ok: 1, reply: "صحيح — نستخدم First + we'll لبدء خطة متسلسلة كما في 5.4." }, { text: "He won't be home until ten.", ok: 0, reply: "رسالة موعد من Unit 4، لا أول نشاط في خطة اليوم." }, { text: "She was feeding the cat.", ok: 0, reply: "حدث ماضٍ مستمر لشخص آخر لا يبني خطتنا." }] },
      { bot: "Oh no! Look at the weather now.", choices: [{ text: "It's raining. Never mind.", ok: 1, reply: "صحيح — عبارة الطقس وNever mind من مفردات/لغة 5.5؛ يمكن تأجيل النشاط أو لعب I spy داخل الخيمة." }, { text: "The sun is shining all night.", ok: 0, reply: "تركيب شمس مشرقة طوال الليل غير منطقي هنا ولا يصف التغير المفاجئ المطلوب." }, { text: "How far is the rain?", ok: 0, reply: "How far للمسافة بين أماكن، لا لوصف حالة المطر الآن." }] }
    ] },
  { id: "e8-u5-camping-stories", type: "fill", title: "أكمل حكاية تخييم قصيرة بأفعال الماضي (Unit 5 خطوتا 6/7)", skill: "writing", level: "متوسط", stepRef: "u5g1",
    sourceStatus: "teacher", sourceNote: "حكاية تدريبية قصيرة صاغتها المنصة من إعداد المعلم باستخدام أفعال ومفردات قوائم 5.6 و5.7 وكلمات التسلسل في TB ص141–143؛ ليست أيًّا من قصتي التخييم في PB49 أو التسجيلات.",
    instructions: "اختر صيغة الماضي أو العبارة التي تكمل التسلسل التدريبي.",
    items: [
      { before: "First, we put up the", after: ".", options: ["tent", "kilometre", "message"], a: 0, why: "tent من مفردات 5.6، وبداية القصة التدريبية بكلمة First." },
      { before: "Next, a goat", after: "my shoe.", options: ["ate", "eat tomorrow", "is a ladder"], a: 0, why: "ate هي ماضي eat في زوج قائمة 5.6، وتناسب حدثًا مكتملًا في قصة." },
      { before: "Then the goat ran", after: ".", options: ["away", "about three", "yours"], a: 0, why: "ran away عبارة كاملة في قائمة مفردات الخطوة 5.6." },
      { before: "After that, the goat knocked", after: "a bowl.", options: ["down", "whose", "along"], a: 0, why: "knock down وردت في القائمة knock / knocked down، فالكلمة الثانية هي down." },
      { before: "At night, I", after: "the story in my diary.", options: ["wrote", "write now", "will whose"], a: 0, why: "write/wrote زوج ماضٍ صريح في قائمة 5.6 ويطابق هدف إعادة سرد مقتطف يوميات." }
    ] },
  { id: "e8-u5-two-stories", type: "mcq", title: "قارن: حدث جارٍ أم حدث مكتمل؟ (Unit 5 خطوتا 8/9)", skill: "grammar", level: "متوسط", stepRef: "u5g2",
    sourceStatus: "teacher", sourceNote: "أسئلة مقارنة صيغ من إعداد المعلم على Language focus المشترك للخطوتين 5.8 و5.9 ومفرداتهما في TB ص145–146؛ لا تدّعي نقل أحداث قصتي عدنان وحسن في PB50/51.",
    instructions: "اختر الجملة أو المعنى الذي يطابق التركيب المطلوب.",
    items: [
      { q: "أي جملة تصف حدثًا كان جاريًا في وقت محدد بالماضي؟", options: ["He was sleeping in the desert at nine.", "He got to the island at nine.", "He will sleep tomorrow."], a: 0, why: "was sleeping ماضٍ مستمر لحدث جارٍ؛ أما got to فحدث وصول مكتمل، والأخيرة مستقبل." },
      { q: "أي جملة تصف وصولًا مكتملًا؟", options: ["They got to the island.", "They were sleeping.", "They are on the island now."], a: 0, why: "got to بمعنى reached صيغة ماضٍ بسيط مكتمل في قائمة 5.9." },
      { q: "في قائمة الدليل، get to / got to تعني:", options: ["reach — يصل إلى", "go to sleep — ينام", "look like — يبدو مثل"], a: 0, why: "هذا هو تفسير الدليل الصريح بين القوسين في Vocab للخطوة 5.9." },
      { q: "ما معنى عبارة put up a tent؟", options: ["ينصب خيمة", "يُطعم قطة", "يأخذ رسالة"], a: 0, why: "put up (a tent) عبارة مفردات 5.9 الخاصة بإقامة خيمة التخييم." }
    ] },
  { id: "e8-u5-map-sounds", type: "mcq", title: "خريطة وأصوات وقافية (Unit 5 خطوة 10)", skill: "reading", level: "أساسي", stepRef: "u5g3",
    sourceStatus: "teacher", sourceNote: "أسئلة تطبيقية من إعداد المعلم على مفردات الخطوة 5.10 وهدف Rhyming pairs في TB ص147؛ مثال camp/lamp مستخدم لتوضيح الصوت كما يرد لاحقًا في مراجعة الدليل TB ص159، وليس حل خريطة PB52.",
    instructions: "اختر المعنى أو الكلمة ذات القافية أو صيغة الماضي الصحيحة.",
    items: [
      { q: "في ملاحظات الدليل، km اختصار لأي كلمة؟", options: ["kilometre", "kite", "kitchen"], a: 0, why: "يشرح TB في قائمة 5.10 أن km تعني kilometre، وهي وحدة مسافات الخريطة." },
      { q: "أي كلمة تقافي camp؟", options: ["lamp", "boat", "wood"], a: 0, why: "camp/lamp هما الزوج المقافي الذي يوضحه الدليل في مراجعة الأصوات؛ boat وwood لا ينتهيان بالصوت نفسه." },
      { q: "ما ماضي leave في قائمة الخطوة؟", options: ["left", "leaves every day", "will leaving"], a: 0, why: "الزوج الصريح هو leave/left في TB ص147." },
      { q: "ما معنى parrot؟", options: ["ببغاء", "خيمة", "جزيرة"], a: 0, why: "parrot كلمة تعرف منبّه عليها في قائمة 5.10 وتعني ببغاء؛ المعنى العربي مساعدة من المنصة." }
    ] },
  { id: "e8-u5-possession", type: "fill", title: "أكمل: لمن هذا؟ ضمائر الملكية (Unit 5 خطوات 11–13)", skill: "grammar", level: "أساسي", stepRef: "u5g4",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم على أسئلة Whose وضمائر الملكية في الخطوات 5.11–5.13 وملخصها TB ص131 و148–151؛ الأشخاص والمواقف مبسطة للتدريب وليست حل لغز التسوق أو قصة مزرعة العم علي.",
    instructions: "اختر ضمير الملكية المستقل المناسب للفاعل بين القوسين في شرح كل سؤال.",
    items: [
      { before: "Whose rubber is this? — It's", after: ". (أنا)", options: ["mine", "yours", "theirs"], a: 0, why: "mine تعني «لي» وتقابل my؛ وهي إجابة نموذج الملخص عن مفرد rubber." },
      { before: "Whose dolls are these? — They're", after: ". (أنت)", options: ["yours", "mine", "hers"], a: 0, why: "yours تعني «لك» للمخاطب، وتطابق They're في مثال dolls بالملخص." },
      { before: "No, it's not mine. It's", after: ". (هي)", options: ["hers", "ours", "his bag is"], a: 0, why: "hers ضمير الملكية المستقل للمؤنث الغائب في قائمة 5.12." },
      { before: "These vegetables are", after: ". (نحن)", options: ["ours", "theirs", "yours"], a: 0, why: "ours تعني «لنا» وتأتي بعد are دون اسم مملوك بعدها." },
      { before: "That tractor is", after: ". (هم)", options: ["theirs", "mine", "hers"], a: 0, why: "theirs تعني «لهم»؛ و tractor من مفردات التسوق/المزرعة في 5.11." }
    ] },
  { id: "e8-u5-salad-process", type: "order", title: "رتّب عملية صنع سلطة (Unit 5 خطوة 14)", skill: "writing", level: "أساسي", stepRef: "u5g5",
    sourceStatus: "teacher", sourceNote: "ترتيب عملية عامة من إعداد المعلم للتدرب على Link words وأفعال cut up/mix وكلمة bowl في الخطوة 5.14 (TB ص153)؛ ليس نص فقرتي صنع الخيمة/السلطة في PB56 أو WB73.",
    instructions: "رتّب خطوات العملية التدريبية من الأولى إلى الأخيرة.",
    pieces: ["Then mix the salad.", "First, wash the cucumber and lettuce.", "After that, put them in a bowl.", "Next, cut up the cucumber and lettuce."],
    answer: ["First, wash the cucumber and lettuce.", "Next, cut up the cucumber and lettuce.", "After that, put them in a bowl.", "Then mix the salad."] },
  { id: "e8-u5-tent-process", type: "order", title: "رتّب عملية صنع خيمة بسجادة وحبل (Unit 5 خطوة 14)", skill: "writing", level: "أساسي", stepRef: "u5g5",
    sourceStatus: "teacher", sourceNote: "نشاط ترتيب من إعداد المعلم يستخدم مراحل الخيمة الأربع الصريحة في ملاحظة الخطوة 5.14 (TB ص153: إحضار حبل وسجادة وحجارة، ربط الحبل، وضع السجادة، تثبيتها بالحجارة)؛ صياغة النشاط للمنصة وليس نقلًا حرفيًا من PB56/WB73.",
    instructions: "رتّب مراحل العملية من First إلى Then، ثم اذكر المواد الثلاث بصوت مرتفع.",
    pieces: ["Then they put the stones on the carpet.", "First they got a rope, a carpet and some stones.", "After that they put the carpet over the rope.", "Next they tied the rope to two trees."],
    answer: ["First they got a rope, a carpet and some stones.", "Next they tied the rope to two trees.", "After that they put the carpet over the rope.", "Then they put the stones on the carpet."] },
  { id: "e8-u5-desert-diary", type: "fill", title: "أكمل يومية الصحراء: حدث جارٍ وحدث مفاجئ (Unit 5 خطوتا 15/16)", skill: "writing", level: "متوسط", stepRef: "u5g6",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم يستخدم النسخة المختصرة الصريحة للقصة في ملاحظات الخطوة 5.16 (TB ص157) لشرح Interrupted past؛ لا ينقل صور WB74 أو يزعم أنها يومية الطالب المطلوبة.",
    instructions: "اختر ما يكمل جمل المثال والتمييز بين الخلفية الجارية والحدث المفاجئ.",
    items: [
      { before: "Last Friday I was in the", after: ".", options: ["desert", "shelf", "message"], a: 0, why: "تبدأ النسخة المختصرة في TB ص157 بعبارة I was in the desert." },
      { before: "I was", after: "some cushions from the car.", options: ["getting", "get tomorrow", "whose"], a: 0, why: "was getting حدث جارٍ في الخلفية قبل المقاطعة المفاجئة." },
      { before: "Suddenly, some goats", after: "through the camp.", options: ["ran", "run every day", "will whose"], a: 0, why: "ran حدث ماضٍ بسيط مفاجئ قاطع الحدث الجاري، كما في مثال الدليل." },
      { before: "One goat", after: "a cushion.", options: ["ate", "eats now", "will yours"], a: 0, why: "ate تكمل الجملة الأخيرة من النسخة المختصرة نفسها." },
      { before: "I was putting some wood on the", after: ".", options: ["fire", "kilometre", "rubber"], a: 0, why: "هذا الشطر من مثال Interrupted past في ملخص الخطوتين 5.15/5.16 (TB ص132)." }
    ] },
  { id: "e8-u5-falcon-ep2-cards", type: "flashcards", title: "بطاقات: مفردات الحلقة الثانية من الصقر الأبيض (Unit 5 خطوة 17)", skill: "vocabulary", level: "متوسط", stepRef: "u5g7",
    sourceStatus: "teacher", sourceNote: "بطاقات مساعدة من إعداد المعلم؛ الكلمات الإنجليزية بنصّها من قائمة Vocabulary للخطوة 5.17 في TB ص158 والمعاني العربية مساعدة من المنصة لتحضير قراءة المعنى العام وتخمين السياق.",
    instructions: "خمّن معنى الكلمة من عنوان القصة وسياقها قبل قلب البطاقة، ثم علّم: أعرفها / ما زلت أتعلمها.",
    items: [["wake up","يستيقظ"],["dream","يحلم"],["shouted","صرخ (في الماضي)"],["frighten","يُخيف"],["towards","نحو / باتجاه"],["held","أمسك (في الماضي)"],["careful","حذِر"],["bite","يعضّ"],["broken","مكسور"],["tied","مربوط / ربط في الماضي"],["fed","أطعم (في الماضي)"],["find out","يكتشف / يعرف"]].map(([front,back]) => ({ front, back })) },
  { id: "e8-u5-rhyming-pairs", type: "match", title: "مراجعة: وصّل أزواج القافية (Unit 5 خطوة 18)", skill: "vocabulary", level: "أساسي", stepRef: "u5g8",
    sourceStatus: "teacher", sourceNote: "نشاط مطابقة أصوات من إعداد المعلم لتحقيق هدف Language awareness - rhyming pairs في الخطوة 5.18؛ زوج camp/lamp هو مثال الدليل الصريح في TB ص159، وبقية الأزواج كلمات مألوفة/من مفردات الوحدات اختارتها المنصة للتدريب وليست إجابات WB76.",
    instructions: "وصّل كل كلمة بالكلمة التي تنتهي بالصوت نفسه، ثم انطق الزوجين مع زميل.",
    items: [
      { left: "camp", right: "lamp" },
      { left: "boat", right: "goat" },
      { left: "star", right: "car" },
      { left: "lake", right: "cake" },
      { left: "pool", right: "school" }
    ], rightOrder: [3, 0, 4, 1, 2] },
  { id: "e8-u6-animal-descriptions", type: "mcq", title: "اقرأ وصف الحيوانات واختر المعلومة الصحيحة (Unit 6 خطوتا 1/2)", skill: "reading", level: "أساسي", stepRef: "u6g0",
    sourceStatus: "teacher", sourceNote: "أسئلة من إعداد المعلم تعيد استخدام معلومات صريحة في ملاحظات الخطوتين 6.1 و6.2 وفي أمثلة السبورة في TB ص163–165؛ ليست نسخًا من نصوص PB59 ولا من جدول WB77/78.",
    instructions: "استخدم كلمات الوصف والموئل والطعام لاختيار الإجابة التي تطابق المثال في دليل المعلم.",
    items: [
      { q: "ما لون البومة طويلة الأذنين في مثال الدليل؟", options: ["brown", "blue", "red"], a: 0, why: "يقول مثال TB: It is brown. It has long ears." },
      { q: "أين تعيش هذه البومة في مثال الدليل؟", options: ["in trees", "in the sea", "in a shop"], a: 0, why: "الإجابة المسجلة على السبورة في TB هي in trees." },
      { q: "متى تبحث البومة طويلة الأذنين عن الطعام؟", options: ["at night", "at seven in the morning", "only on Friday"], a: 0, why: "يحدد TB معلومة القراءة بأنها تبحث عن الطعام at night." },
      { q: "ما طعام الحمار الوحشي الجبلي في جملة النموذج؟", options: ["grass", "small animals", "cake"], a: 0, why: "يقول نموذج 6.2: The mountain zebra ... eats grass." }
    ] },
  { id: "e8-u6-zoo-times", type: "match", title: "وصّل أوقات حديقة الحيوان بطريقتها الأخرى (Unit 6 خطوة 3)", skill: "vocabulary", level: "أساسي", stepRef: "u6g1",
    sourceStatus: "teacher", sourceNote: "مطابقة من إعداد المعلم على صيغتي الوقت وأمثلة الخطوة 6.3 في TB ص161 و166–167؛ ليست حل ألغاز WB78/79 أو لافتاتها.",
    instructions: "وصّل كل وقت رقمي بالعبارة الإنجليزية المكافئة، ثم قل الوقتين مع زميل.",
    items: [
      { left: "3:20", right: "twenty past three" },
      { left: "11:30", right: "half past eleven" },
      { left: "4:45", right: "quarter to five" },
      { left: "12:10", right: "ten past twelve" },
      { left: "12:05", right: "twelve oh five" }
    ], rightOrder: [2, 4, 0, 3, 1] },
  { id: "e8-u6-superlatives-obligation", type: "fill", title: "أكمل: أكبر وأسرع وما يجب فعله (Unit 6 خطوات 4–6)", skill: "grammar", level: "أساسي", stepRef: "u6g2",
    sourceStatus: "teacher", sourceNote: "تدريب صيغ من إعداد المعلم على Superlatives وhave to في الخطوات 6.4–6.6 (TB ص168–171)؛ جمل الصناديق/الممحاة والكلمات مقتبسة من أمثلة التدريس، وليس النشاط حل قصة PB60–62.",
    instructions: "اختر صيغة التفضيل الأعلى أو عبارة الالتزام المناسبة.",
    items: [
      { before: "Which is the", after: "box?", options: ["biggest", "big tomorrow", "have to"], a: 0, why: "biggest صيغة التفضيل الأعلى من big، وسؤال الصندوق هو مثال تقديم 6.4." },
      { before: "My rubber is the", after: "thing.", options: ["smallest", "small yesterday", "ours"], a: 0, why: "smallest تقابل smallest thing في جملة الدليل عن أصغر شيء على الطاولة." },
      { before: "Ahmed is the", after: "pupil.", options: ["tallest", "tall slowly", "class"], a: 0, why: "يستخدم TB أحمد مثالًا على أطول طالب: Ahmed is the tallest." },
      { before: "Bear is the", after: "word.", options: ["shortest", "nearby", "have to"], a: 0, why: "يقول شرح 6.5 إن bear أقصر كلمة بين كلمات السبورة، لذا shortest." },
      { before: "We", after: "find these animals.", options: ["have to", "whose", "yesterday"], a: 0, why: "have to تعبّر عن الالتزام، وهي عبارة تركيز 6.4 نفسها: We have to find these animals." }
    ] },
  { id: "e8-u6-preference-reference", type: "mcq", title: "الحيوان المفضل وكلمات الإحالة (Unit 6 خطوتا 7/8)", skill: "reading", level: "متوسط", stepRef: "u6g3",
    sourceStatus: "teacher", sourceNote: "أسئلة قصيرة من إعداد المعلم على التفضيل وكلمات الإحالة وإجابات الدليل للخطوة 6.7 في TB ص172؛ الجمل التدريبية مبسطة ولا تنقل نص PB63/64 أو تلخيص WB83.",
    instructions: "اختر ما تعود إليه الكلمة أو ما يكمل جملة التفضيل/الملكية.",
    items: [
      { q: "ما الإجابة الكاملة عن: What is your favourite animal؟", options: ["My favourite animal is the lion.", "I have to cage.", "They went by car."], a: 0, why: "هذه صيغة الملخص نفسها، ويمكن استبدال lion بحيوان آخر مع ذكر سبب كما في 6.7." },
      { q: "في: Yasmin has a picture. Maryam looks at it — ما الذي تعود إليه it؟", options: ["the picture", "Yasmin", "the zoo"], a: 0, why: "يؤكد TB أن it في تمرين الإحالة تعني a picture." },
      { q: "في: Maryam painted a mouse. She is happy — ما الذي تعود إليه She؟", options: ["Maryam", "the mouse", "the classroom"], a: 0, why: "she ضمير للمؤنث، وفي إجابات الدليل تعود إلى Maryam." },
      { q: "Your picture is yours. My picture is ____.", options: ["mine", "both", "slowly"], a: 0, why: "mine تعني «صورتي/لي»، ويقابلها yours للمخاطب في قائمة الإحالة للخطوة 6.7." }
    ] },
  { id: "e8-u6-zoo-keeper", type: "dialogue", title: "حوار: ماذا يفعل حارس حديقة الحيوان؟ (Unit 6 خطوة 9)", skill: "speaking", level: "أساسي", stepRef: "u6g4",
    sourceStatus: "teacher", sourceNote: "تبادل أسئلة من إعداد المعلم يستخدم جمل تقديم ومناقشة الخطوة 6.9 في TB ص175–176؛ ليس نص PB65 المسجل CS55 ولا يدعي محتوى أي ملف Drive.",
    instructions: "اختر الرد الصحيح لوصف روتين حسن علي بالمضارع البسيط.",
    items: [
      { bot: "Where does Hassan Ali work?", choices: [{ text: "He works at the zoo.", ok: 1, reply: "صحيح — هذه جملة تقديم الدليل: Hassan Ali is a zoo-keeper. He works at the zoo." }, { text: "He went to the zoo last year.", ok: 0, reply: "زيارة ماضية، لكن المطلوب عمله المعتاد بالمضارع البسيط." }, { text: "It is quarter to five.", ok: 0, reply: "هذه إجابة وقت من خطوة سابقة لا مكان عمل حسن." }] },
      { bot: "What does he clean?", choices: [{ text: "He cleans the animals' cages.", ok: 1, reply: "أحسنت — TB يستخرج He cleans their cages من الفقرة." }, { text: "He paints the cage tomorrow.", ok: 0, reply: "الفكرة ليست مهمة الروتين المذكورة، وtomorrow يجعلها مستقبلية." }, { text: "The monkey is mine.", ok: 0, reply: "جملة ملكية لا تجيب عن ما ينظفه الحارس." }] },
      { bot: "What does he get ready?", choices: [{ text: "He gets their food ready.", ok: 1, reply: "نعم — get ready هنا يجهّز طعام الحيوانات، كما في مناقشة 6.9." }, { text: "He draws a zebra.", ok: 0, reply: "الرسم نشاط مهمة البنات المدرسية في الخطوتين 7/8 لا روتين حسن هنا." }, { text: "He will meet us in the park.", ok: 0, reply: "مثال بناء جملة من الخطوة التالية ولا يصف إعداد الطعام." }] },
      { bot: "Which sentence describes a daily habit?", choices: [{ text: "He cleans the cages in the morning.", ok: 1, reply: "تمامًا — المضارع البسيط cleans مع in the morning يدل على عادة/روتين." }, { text: "He cleaned one cage last year only.", ok: 0, reply: "last year only يجعلها مرة ماضية محددة لا عادة يومية." }, { text: "He is the tallest cage.", ok: 0, reply: "tallest صفة تفضيل لشيء طويل، وجملة غير منطقية للحارس هنا." }] }
    ] },
  { id: "e8-u6-sentence-parts", type: "mcq", title: "حلّل الجملة: فاعل وفعل ومفعول (Unit 6 خطوة 10)", skill: "grammar", level: "متوسط", stepRef: "u6g5",
    sourceStatus: "teacher", sourceNote: "تدريب تحليل من إعداد المعلم يستخدم جمل TB في الخطوة 6.10 وإجابات جدولها (TB ص177–178)؛ ليس نسخًا لجمل WB85 الخمس.",
    instructions: "في كل جملة اختر الجزء المطلوب، واسأل Who/What/When لتساعدك كما اقترح الدليل.",
    items: [
      { q: "في جملة: Hassan cleans the cages in the morning — ما الفاعل؟", options: ["Hassan", "cleans", "the cages"], a: 0, why: "Hassan يجيب عن Who cleans؟ وهو الفاعل في شرح TB." },
      { q: "في الجملة نفسها، ما الفعل؟", options: ["cleans", "Hassan", "in the morning"], a: 0, why: "cleans هو العمل الذي يقوم به حسن ويأتي بين الفاعل والمفعول." },
      { q: "في الجملة نفسها، ما المفعول؟", options: ["the cages", "cleans", "in the morning"], a: 0, why: "the cages تجيب عن What does Hassan clean؟ فهي المفعول." },
      { q: "ما الذي تعبر عنه in the morning؟", options: ["when", "the subject", "the verb"], a: 0, why: "تجاوب When does Hassan clean؟ فهي عبارة زمن، لا فاعل ولا فعل." },
      { q: "في جملة الدليل: The lions like meat — ما الفاعل؟", options: ["The lions", "like", "meat"], a: 0, why: "The lions هنا فاعل، والدليل ينبّه أن الكلمات نفسها قد تكون فاعلًا في جملة ومفعولًا في أخرى." }
    ] },
  { id: "e8-u6-zoo-invitation", type: "dialogue", title: "حوار: دعوة إلى حديقة الحيوان واعتذار بالالتزام (Unit 6 خطوة 11)", skill: "speaking", level: "أساسي", stepRef: "u6g6",
    sourceStatus: "teacher", sourceNote: "تبادل أدوار تفاعلي من إعداد المعلم يعيد توظيف ردود الحوارين المنشورين نصيًا في TB ص179–180 ومثال موقع الملخص ص161؛ اختيارات المنصة ليست ادعاء بأن Drive CS56 سُمع أو طوبق.",
    instructions: "اختر الرد الذي يعتذر بسبب واضح أو يقترح وقتًا آخر أو يصف الموقع.",
    items: [
      { bot: "What are you doing?", choices: [{ text: "Nothing at the moment.", ok: 1, reply: "صحيح — هذا افتتاح يقترحه TB ص179 قبل تطوير المحادثة." }, { text: "The cages in the morning.", ok: 0, reply: "هذه أجزاء جملة وصف لا إجابة طبيعية عن نشاطك الآن." }, { text: "Quarter to five.", ok: 0, reply: "وقت من الخطوة 3 لا يخبر بما تفعل." }] },
      { bot: "Do you want to come to the zoo?", choices: [{ text: "I can't. I have to help my father in the shop.", ok: 1, reply: "أحسنت — رفض مع سبب التزام have to كما في نص الحوار الأول المنشور في TB." }, { text: "I can't because it is a cage.", ok: 0, reply: "عدم القدرة بلا سبب منطقي من الحوار؛ المطلوب التزام محدد." }, { text: "It eats grass.", ok: 0, reply: "وصف حيوان لا يجيب عن الدعوة." }] },
      { bot: "Let's go tomorrow.", choices: [{ text: "I'll have to ask my father.", ok: 1, reply: "نعم — الوعد/الاحتياج في نهاية الحوار الأول يؤجل القرار لطلب إذن الأب." }, { text: "My favourite animal is a sentence.", ok: 0, reply: "خلط بين تفضيل حيوان ودرس الجملة، ولا يجيب عن موعد الغد." }, { text: "Not tomorrow yesterday.", ok: 0, reply: "خلط أزمنة غير مفهوم؛ تحتاج ردًا كاملًا عن الغد." }] },
      { bot: "Where is the monkey?", choices: [{ text: "The monkey is on the lion's cage.", ok: 1, reply: "تمامًا — مثال Phrases of location في ملخص الخطوة 11." }, { text: "The monkey is quarter to five.", ok: 0, reply: "هذا وقت، لا عبارة موقع بحرف جر." }, { text: "I have to an otter.", ok: 0, reply: "have to يحتاج فعلًا بعده ولا يصف موقع القرد." }] }
    ] },
  { id: "e8-u6-zoo-account", type: "order", title: "رتّب فقرة زيارة إلى حديقة الحيوان (Unit 6 خطوة 12)", skill: "writing", level: "أساسي", stepRef: "u6g7",
    sourceStatus: "teacher", sourceNote: "ترتيب كتابة من إعداد المعلم يبدأ من محمود الذي سار على السبورة في TB ص181 ويضيف كلمتي First/Then للتدريب على هدف الفقرة؛ لا يقدم إجابة للمسودة الشخصية في WB87.",
    instructions: "رتّب الجمل لتشكيل بداية حكاية شخصية في الماضي، ثم تابعها بجملتين من عندك.",
    pieces: ["Then they saw the animals.", "Last year, Mahmoud went to the zoo.", "They went by car.", "First, he went with his uncle."],
    answer: ["Last year, Mahmoud went to the zoo.", "First, he went with his uncle.", "They went by car.", "Then they saw the animals."] },
  { id: "e8-u6-falcon-ep3-cards", type: "flashcards", title: "بطاقات: أفعال الحلقة الثالثة من الصقر الأبيض (Unit 6 خطوة 13)", skill: "vocabulary", level: "متوسط", stepRef: "u6g8",
    sourceStatus: "teacher", sourceNote: "بطاقات مساعدة من إعداد المعلم؛ العبارات الإنجليزية من Vocabulary وقائمة الأفعال المركبة في TB ص182، والمعاني العربية مساعدة من المنصة قبل قراءة المعنى العام للحلقة الثالثة.",
    instructions: "حاول استنتاج معنى الفعل المركب من جزأيه وسياق القصة قبل قلب البطاقة.",
    items: [["everybody","الجميع"],["farmer","مزارع"],["sadly","بحزن"],["turn round","يلتفت / يدور"],["take care of","يعتني بـ"],["find out","يكتشف / يعرف"],["fly away","يطير بعيدًا"],["put up","يرفع / ينصب بحسب السياق"],["cut up","يقطّع"],["run away","يهرب"],["come back","يعود"]].map(([front,back]) => ({ front, back })) },
  { id: "e8-u6-revision-puzzles", type: "mcq", title: "مراجعة ألغاز: قافية ومفردات وواجبات يومية (Unit 6 خطوة 14)", skill: "vocabulary", level: "أساسي", stepRef: "u6g9",
    sourceStatus: "teacher", sourceNote: "أسئلة مراجعة من إعداد المعلم لتحقيق مهام الخطوة 6.14 (قوافٍ/لغة موجزة/كتابة عن النفس) في TB ص184؛ ليست كلمات أو إجابات الكلمات المتقاطعة والقوافي في WB89/90.",
    instructions: "اختر القافية أو المعنى أو الجملة الشخصية المناسبة من مفردات Unit 6 المألوفة.",
    items: [
      { q: "أي كلمة تقافي cage؟", options: ["page", "lion", "zebra"], a: 0, why: "cage/page تنتهيان بصوت /eɪdʒ/ نفسه؛ النشاط يراجع هدف القوافي لا إجابات WB89/90." },
      { q: "أي كلمة تقافي bear؟", options: ["chair", "grass", "hole"], a: 0, why: "bear/chair تتقاسمان النغمة الأخيرة نفسها تقريبًا، وكلاهما معروف من وحدات سابقة/هذه الوحدة." },
      { q: "ما معنى لافتة Way out؟", options: ["المخرج", "طعام الحيوانات", "وقت الإطعام"], a: 0, why: "Way out من Vocabulary الخطوة 6.3 وتعني طريق الخروج/المخرج." },
      { q: "ما صيغة التفضيل الأعلى من big؟", options: ["biggest", "biggestly cage", "have to big"], a: 0, why: "biggest صيغة التفضيل في قائمة 6.4، ويتضاعف حرف g قبل -est." },
      { q: "أي جملة تكتب عن واجبك اليومي بعد الظهر؟", options: ["I have to do my homework in the afternoon.", "I went to the zoo last year.", "The zebra eats grass."], a: 0, why: "have to + فعل + وقت بعد الظهر يطابق مرحلة الكتابة عن النفس في TB ص184." }
    ] },
  { id: "e8-u7-job-descriptions", type: "match", title: "وصّل وصف العمل بصاحب المهنة (Unit 7 خطوتا 1/2)", skill: "vocabulary", level: "أساسي", stepRef: "u7g0",
    sourceStatus: "teacher", sourceNote: "مطابقة من إعداد المعلم على أسماء مهن قائمة Vocabulary للخطوتين 7.1/7.2 ومثالي الدليل الصريحين عن طبيب الأسنان والنجار في TB ص188–190؛ الأوصاف الأخرى صياغة تدريبية مختصرة من المنصة وليست إجابات WB91/92.",
    instructions: "وصّل كل وصف قصير بالوظيفة المناسبة، ثم قل: Who works outside/inside أو Who makes things؟",
    items: [
      { left: "takes care of people's teeth", right: "dentist" },
      { left: "makes tables and chairs from wood", right: "carpenter" },
      { left: "builds houses and works outside", right: "builder" },
      { left: "drives people in a taxi", right: "taxi-driver" },
      { left: "catches fish from the sea", right: "fisherman" },
      { left: "works in a shop and sells things", right: "shopkeeper" }
    ], rightOrder: [3, 0, 5, 2, 4, 1] },
  { id: "e8-u7-family-ambitions", type: "fill", title: "أكمل علاقات العائلة والطموح المهني (Unit 7 خطوتا 3/4)", skill: "grammar", level: "أساسي", stepRef: "u7g1",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم يستخدم علاقات مخطط TB ص192 وأمثلة الخطوة 7.4 في ص194 وجملة الملخص عن المزارع؛ لا ينقل حل WB93.",
    instructions: "اختر كلمة القرابة أو التركيب الذي يكمل الجملة بحسب مخطط الدليل.",
    items: [
      { before: "Amal is Fatma's", after: ".", options: ["mother", "pilot", "arrow"], a: 0, why: "يصرّح TB ص192: Amal is Fatma's mother، والعلاقة تُقرأ باتجاه السهم في المخطط." },
      { before: "Taha is Ali's", after: ".", options: ["son", "aunt", "clinic"], a: 0, why: "يستخرج الدليل أن Ali هو Taha's father، فطه ابن علي: son." },
      { before: "Fatma is Taha's", after: ".", options: ["cousin", "daughter", "dentist"], a: 0, why: "تدرّب الخطوة 7.4 بجملة: She's Taha's cousin — Fatma." },
      { before: "My brother would like", after: "be a farmer.", options: ["to", "yesterday", "whose"], a: 0, why: "would like to be هو تركيب الطموح في ملخص الخطوتين 3/4." },
      { before: "My sister, Amal,", after: "a nurse.", options: ["is", "makes outside", "went by car"], a: 0, why: "مثال TB ص194 نفسه: My sister, Amal, is a nurse، والفاصلتان تحيطان بمعلومة الاسم الإضافية." }
    ] },
  { id: "e8-u7-word-formation", type: "mcq", title: "كوّن أسماء المهن واسأل عن عمل المستقبل (Unit 7 خطوتا 5/6)", skill: "vocabulary", level: "أساسي", stepRef: "u7g2",
    sourceStatus: "teacher", sourceNote: "أسئلة من إعداد المعلم على مثال teach/teacher وإملاء senru في TB ص195–197 ونص الحوار المطبوع في TB ص196؛ ليست كلمات أغنية PB71 ولا حلول WB94–96.",
    instructions: "اختر اسم المهنة أو السؤال/التركيب الصحيح عن المستقبل.",
    items: [
      { q: "أي كلمة تتكون من الفعل teach بمعنى صاحب مهنة التعليم؟", options: ["teacher", "teachest", "teaching shop"], a: 0, why: "يكتب TB الزوج Verb: teach / Noun: teacher لشرح لاحقة -er." },
      { q: "أي اسم مهنة يرتبط بالفعل bake؟", options: ["baker", "bakery office", "bakes yesterday"], a: 0, why: "bake من Vocabulary 7.6 وbaker اسم المهنة في قوائم الوحدة؛ نضيف r بعد e الصامتة." },
      { q: "في مثال إملاء الدليل، senru عند إعادة ترتيب حروفها تصبح:", options: ["nurse", "nurse's cage", "sun + er"], a: 0, why: "يقدم TB ص195 كلمة senru مثالًا على anagram وحلها nurse." },
      { q: "أي سؤال يسأل عن وظيفة المستقبل في الحوار المطبوع؟", options: ["What job do you want when you leave school?", "How many pencils did she buy?", "Where is the lion's cage?"], a: 0, why: "هذا سؤال Bill في نص TB ص196؛ يحدد when you leave school زمن الطموح." },
      { q: "اختر الإكمال الصحيح: I'd like ___ a builder.", options: ["to be", "be yesterday", "am being an hour ago"], a: 0, why: "يقول Bill في النص: I'd like to be a builder، فبعد would like يأتي to + فعل أساسي." }
    ] },
  { id: "e8-u7-everything-shop", type: "dialogue", title: "حوار: مهام المتجر وكمية الشراء (Unit 7 خطوتا 7/8)", skill: "speaking", level: "متوسط", stepRef: "u7g3",
    sourceStatus: "teacher", sourceNote: "تبادل أدوار من إعداد المعلم يستخدم عبارات أزمنة TB ص198 وسؤال الزبدة/الكيلو في ص200؛ ليس نص محادثتي PB72/73 ولا يشير إلى سماع CS62/63 من Drive.",
    instructions: "اختر رد العامل المناسب لزمن المهمة، ثم أكمل طلب الشراء بكمية غير معدودة.",
    items: [
      { bot: "Can you clean the floor, please?", choices: [{ text: "I did that an hour ago.", ok: 1, reply: "صحيح — an hour ago مع did يضع المهمة في الماضي كما يشرح TB التسلسل الزمني." }, { text: "I'm doing that tomorrow yesterday.", ok: 0, reply: "اختلاط now/tomorrow/yesterday لا يعبّر عن زمن واحد واضح." }, { text: "How many sugar is it?", ok: 0, reply: "sugar غير معدود، والأهم أن الرد لا يجيب عن طلب المهمة." }] },
      { bot: "Can you bring the dresses here?", choices: [{ text: "I'm doing that now.", ok: 1, reply: "أحسنت — المضارع المستمر I'm doing يصف عملًا جارٍ الآن." }, { text: "I did that in a minute.", ok: 0, reply: "in a minute مستقبل قريب لكن did ماضٍ؛ التركيبان متناقضان." }, { text: "A kilo, please.", ok: 0, reply: "كمية شراء لا ترد على سؤال إحضار الفساتين." }] },
      { bot: "Can you make sandwiches?", choices: [{ text: "I'll do that in a minute.", ok: 1, reply: "تمامًا — will + in a minute يعد بفعل قريب في المستقبل كما في عبارات الدرس." }, { text: "I did that now.", ok: 0, reply: "did ماضٍ بينما now زمن حاضر؛ لا يجتمعان في وصف هذه المهمة هنا." }, { text: "Five pencils ago.", ok: 0, reply: "ago تحتاج مدة زمنية قبلها (an hour ago)، وليس عدد أقلام." }] },
      { bot: "I'd like some butter, please. — How much?", choices: [{ text: "A kilo, please.", ok: 1, reply: "صحيح — butter غير معدود ويطلب بالوزن، وهذا حوار TB التدريبي نفسه." }, { text: "Five butters, please.", ok: 0, reply: "لا نعد butter نفسه عادة؛ نحدد وزنه أو عدد عبواته." }, { text: "I did that an hour ago.", ok: 0, reply: "جملة زمنية صحيحة لسياق آخر لكنها لا تحدد كمية الزبدة." }] }
    ] },
  { id: "e8-u7-quantity-gap", type: "fill", title: "أكمل أسئلة فجوة المعلومات والكمية (Unit 7 خطوة 9)", skill: "grammar", level: "متوسط", stepRef: "u7g4",
    sourceStatus: "teacher", sourceNote: "تدريب من إعداد المعلم على أسئلة وأصناف أمثلة الخطوة 7.9 في TB ص202، بما فيها سؤالا الأرز والخيار؛ ليس مفتاح جدول WB99/100.",
    instructions: "اختر How much أو How many أو وحدة/كلمة الربط المناسبة لكتابة جملة شراء.",
    items: [
      { before: "How", after: "rice did Nadia buy?", options: ["much", "many", "whose"], a: 0, why: "rice اسم غير معدود، وسؤال الدليل الصريح يستخدم How much rice." },
      { before: "How", after: "cucumbers did Nadia buy?", options: ["many", "much", "far"], a: 0, why: "cucumbers جمع قابل للعد، فيأتي معه How many كما في مثال TB." },
      { before: "I need a", after: "of milk.", options: ["litre", "cousin", "arrow"], a: 0, why: "يقدّم TB كلمة litre لتوسيع التدريب إلى السوائل مثل milk." },
      { before: "She bought rice, sugar", after: "cucumbers.", options: ["and", "ago", "whose"], a: 0, why: "في سلسلة عناصر نضع فواصل ثم and قبل العنصر الأخير، وهذا هدف الكتابة في الخطوة." },
      { before: "I want half a", after: "of meat.", options: ["kilo", "seat", "uniform"], a: 0, why: "يستخدم مثال TB ص202 عبارة Half a kilo لكمية اللحم غير المعدود." }
    ] },
  { id: "e8-u7-taxi-sequence", type: "order", title: "رتّب رحلة سيارة أجرة منطقيًا (Unit 7 خطوة 10)", skill: "reading", level: "أساسي", stepRef: "u7g5",
    sourceStatus: "teacher", sourceNote: "تسلسل تدريبي جديد من إعداد المعلم لتحقيق هدف ترتيب قصة سائق الأجرة في الخطوة 7.10 (TB ص203)؛ يستخدم passenger/airport في سياق عام ولا يدّعي أنه ترتيب جمل PB74/75 أو إجابة WB101.",
    instructions: "رتّب أحداث الرحلة التدريبية من البداية إلى النهاية بحسب المنطق الزمني.",
    pieces: ["Then the passenger got out at the airport.", "First, Hassan stopped his taxi.", "Finally, Hassan looked for another passenger.", "Next, a passenger got in.", "After that, Hassan drove quickly to the airport."],
    answer: ["First, Hassan stopped his taxi.", "Next, a passenger got in.", "After that, Hassan drove quickly to the airport.", "Then the passenger got out at the airport.", "Finally, Hassan looked for another passenger."] },
  { id: "e8-u7-quiz-show", type: "dialogue", title: "برنامج مسابقة: خمّن المهنة بأسئلة Yes/No (Unit 7 خطوة 11)", skill: "speaking", level: "متوسط", stepRef: "u7g6",
    sourceStatus: "teacher", sourceNote: "تنفيذ تفاعلي من إعداد المعلم للأسئلة والإجابات المطبوعة لباند 1 من Cassette Section 65 في TB ص206؛ استخدامه هنا قرائي/تفاعلي ولا يثبت سماع أي MP3 أو مطابقته في Drive.",
    instructions: "أنت صاحب المهنة السرية. اختر Yes أو No الصحيحة بحسب أدلة المهنة حتى يخمّنها السائل.",
    items: [
      { bot: "Do you take people to different places?", choices: [{ text: "No.", ok: 1, reply: "صحيح — أول إجابة في النص المطبوع تنفي نقل الناس، فليست المهنة سائقًا." }, { text: "Yes, in my taxi.", ok: 0, reply: "هذا يصف سائق أجرة ويخالف تسلسل أدلة الوظيفة السرية." }, { text: "How many?", ok: 0, reply: "برنامج المسابقة يسمح بإجابات Yes/No فقط بحسب مقدم النص." }] },
      { bot: "Do you take care of people?", choices: [{ text: "No.", ok: 1, reply: "نعم — النفي يستبعد مهن الرعاية مثل nurse في هذا التسلسل." }, { text: "Yes, I'm a nurse.", ok: 0, reply: "النص يؤخر كشف المهنة، وهذه الإجابة تخالف الدليل الثاني." }, { text: "A kilo, please.", ok: 0, reply: "كمية شراء من درس المتجر لا تجيب عن سؤال Yes/No." }] },
      { bot: "Do you take care of animals?", choices: [{ text: "No.", ok: 1, reply: "صحيح — ثالث نفي يضيّق الاحتمالات بعيدًا عن العمل مع الحيوانات." }, { text: "Yes, at the zoo.", ok: 0, reply: "ذلك عمل حارس حديقة حيوان من Unit 6، لا صاحب هذه المهنة السرية." }, { text: "I did that an hour ago.", ok: 0, reply: "جملة ماضية لا تعطي إجابة تخمين قابلة للاستبعاد." }] },
      { bot: "Do you make things?", choices: [{ text: "Yes.", ok: 1, reply: "أحسنت — أول دليل إيجابي: صاحب المهنة يصنع أشياء." }, { text: "No, I type letters.", ok: 0, reply: "كتابة الرسائل دليل السكرتيرة في باند آخر، ولا يطابق هذا التسلسل." }, { text: "Where do you work?", ok: 0, reply: "لا ترد بسؤال؛ المتسابق صاحب المهنة يجيب Yes/No فقط." }] },
      { bot: "Do you work in a shop?", choices: [{ text: "Yes.", ok: 1, reply: "تمامًا — اجتماع «أصنع أشياء» و«أعمل في محل» يقود السائل إلى التخمين التالي." }, { text: "No, in an office.", ok: 0, reply: "العمل في مكتب دليل مهنة أخرى لاحقة في النص، لا هذه الجولة." }, { text: "I'm doing that now.", ok: 0, reply: "لا يحدد مكان العمل ولا يلتزم صيغة إجابة المسابقة." }] },
      { bot: "Are you a baker?", choices: [{ text: "Yes, I'm a baker.", ok: 1, reply: "صحيح — هذه خاتمة باند 1 المطبوعة في TB ص206." }, { text: "Yes, I'm a secretary.", ok: 0, reply: "السكرتيرة تُكتشف في باند 3 بعد أدلة المكتب وكتابة الرسائل." }, { text: "No, I'm a pilot.", ok: 0, reply: "الطيار ينقل الناس، وهو ما نفيته في أول سؤال." }] }
    ] },
  { id: "e8-u7-nurse-interview", type: "fill", title: "كوّن أسئلة مقابلة الممرضة نادية (Unit 7 خطوة 12)", skill: "writing", level: "متوسط", stepRef: "u7g7",
    sourceStatus: "teacher", sourceNote: "تدريب اختيار أدوات سؤال من إعداد المعلم على الأسئلة الستة وحلولها في ملاحظة الخطوة 7.12 (TB ص207)؛ النشاط يعيد بناء بدايات الأسئلة ولا ينشر إجابات نادية من WB103.",
    instructions: "اختر بداية السؤال الصحيحة لكل سؤال مقابلة.",
    items: [
      { before: "", after: "do you work?", options: ["Where", "How many sugar", "Yesterday"], a: 0, why: "Where do you work؟ هو السؤال الأول في حلول TB ويسأل عن مكان العمل." },
      { before: "", after: "you have to wear a uniform?", options: ["Do", "Is many", "Whose"], a: 0, why: "سؤال Yes/No مع الفاعل you يبدأ بـDo: Do you have to...؟" },
      { before: "", after: "it hard work?", options: ["Is", "Does many", "Where"], a: 0, why: "Is it hard work؟ يستخدم be لأن hard صفة تصف العمل." },
      { before: "How", after: "people come to the hospital every day?", options: ["many", "much", "far"], a: 0, why: "people في هذا السياق تُعدّ كأشخاص، لذا How many people كما في حل TB." },
      { before: "", after: "you like to be a doctor?", options: ["Would", "Did yesterday", "How much"], a: 0, why: "Would you like to be...؟ يسأل عن رغبة/طموح افتراضي وهو السؤال السادس في الدليل." }
    ] },
  { id: "e8-u7-revision-cards", type: "flashcards", title: "بطاقات مراجعة: كلمات وجمل ووظائف (Unit 7 خطوات 13–15)", skill: "vocabulary", level: "متوسط", stepRef: "u7g8",
    sourceStatus: "teacher", sourceNote: "بطاقات مساعدة من إعداد المعلم؛ الإنجليزية من Vocabulary الخطوة 7.13 ومصطلحات/كلمات مهام 7.14–7.15 في TB ص208–210؛ المعاني العربية مساعدة من المنصة ولا تكشف حلول ألغاز PB/WB.",
    instructions: "تذكّر معنى كل كلمة أو وظيفتها في الجملة قبل قلب البطاقة، ثم علّم ما تعرفه.",
    items: [["sometimes","أحيانًا"],["passenger","راكب"],["seat","مقعد"],["wooden","خشبي"],["sick","مريض"],["subject","الفاعل"],["verb","الفعل"],["object","المفعول به"],["carpenter","نجّار"],["fisherman","صيّاد سمك"],["taxi-driver","سائق سيارة أجرة"],["housewife","ربة منزل"],["shoes","أحذية"]].map(([front,back]) => ({ front, back })) }
];
function allActivities() {
  const custom = (typeof store !== "undefined" && store.customActivities || []).filter(a => a.status === "published");
  return SEEDED_ACTIVITIES.concat(custom);
}
function getActivity(id) { return allActivities().find(a => a.id === id) || (typeof store !== "undefined" && (store.studioDrafts || []).find(a => a.id === id)); }
function speakEncodedText(text) { return encodeURIComponent(String(text ?? "")).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"); }
function getActivitiesForStep(ref) { return allActivities().filter(a => a.stepRef === ref); }
/* دوال تصحيح صافية (قابلة للاختبار آلياً دون متصفح) */
function gradeSelections(items, sels) { let sc = 0; items.forEach((it, i) => { if (Number(sels[i]) === it.a) sc++; }); return { score: sc, total: items.length }; }
function gradeSequence(answer, chosen) { let sc = 0; answer.forEach((p, i) => { if (chosen[i] === p) sc++; }); return { score: sc, total: answer.length, perfect: sc === answer.length }; }

let ACTFILTER = "all", ACTPLAY = null;
function vActivities() {
  const list = allActivities().filter(a => ACTFILTER === "all" || a.type === ACTFILTER);
  return `<div class="page-head"><h2>🎮 الأنشطة التفاعلية</h2><p>أنشطة مبنية على لغة موثّقة من دليل المنهج أو موسومة بأنها من إعداد المعلم — مع تعليمات وتصحيح وتغذية راجعة وإعادة محاولة. نتائجك تُحفظ في ملف تقدمك على هذا الجهاز.</p></div>
  <div class="filters">${["all"].concat(Object.keys(ACT_TYPES)).map(t => `<button class="chip-filter ${ACTFILTER === t ? "active" : ""}" onclick="ACTFILTER='${t}';navigate('activities')">${t === "all" ? "الكل" : ACT_TYPES[t].icon + " " + ACT_TYPES[t].label}</button>`).join("")}</div>
  ${list.length ? `<div class="lessons-grid">${list.map(a => `
    <article class="lesson-card" onclick="playActivity('${a.id}')">
      <div class="lesson-thumb" style="background:linear-gradient(120deg,#0e9f6e,#0b7a55)"><span class="t-grade">${ACT_TYPES[a.type] ? ACT_TYPES[a.type].label : a.type}</span><span class="t-icon">${ACT_TYPES[a.type] ? ACT_TYPES[a.type].icon : "🎮"}</span></div>
      <div class="lesson-body"><h4>${esc(a.title)}</h4><p>${esc(a.instructions || "")}</p>
      <div style="margin-top:6px">${srcBadge(a.sourceStatus === "verified" ? "verified" : "teacher")}</div>
      <div class="lesson-meta"><span>🎯 ${esc(skillAr(a.skill))}</span><span>📶 ${esc(a.level || "عام")} </span>${bestActivityBadge(a.id)}</div></div></article>`).join("")}</div>`
  : `<div class="empty-state"><div class="e-ic">🎮</div><strong>لا أنشطة من هذا النوع بعد</strong><p>يمكن للمعلم إنشاءها من استوديو المعلم الذكي ونشرها هنا.</p></div>`}`;
}
function bestActivityBadge(id) {
  const atts = (store.activityAttempts || []).filter(x => x.activityId === id);
  if (!atts.length) return "";
  const best = Math.max(...atts.map(x => x.total ? x.score / x.total : 0));
  return `<span class="badge b-excellent">أفضل محاولة: ${arNum(Math.round(best * 100))}٪ · ${arNum(atts.length)} محاولة</span>`;
}
function playActivity(id, preview) {
  const a = getActivity(id); if (!a) { toast("تعذّر العثور على النشاط"); return; }
  ACTPLAY = { act: a, sels: {}, chosen: [], matched: {}, errs: 0, selLeft: null, flip: 0, know: {}, node: 0, nodeScore: 0, done: false, preview: !!preview };
  state.view = "activities"; markActiveNav();
  document.getElementById("appContent").innerHTML = activityShell(a);
  window.scrollTo(0, 0);
}
function activityShell(a) {
  return `<button class="back-btn" onclick="navigate('${ACTPLAY && ACTPLAY.preview && state.role === "teacher" ? "aistudio" : "activities"}')">→ ${ACTPLAY && ACTPLAY.preview ? "عودة إلى الاستوديو" : "كل الأنشطة"}</button>
  <div class="quiz-run"><div class="panel">
    <div style="display:flex;gap:9px;align-items:center;flex-wrap:wrap"><span class="tag">${ACT_TYPES[a.type] ? ACT_TYPES[a.type].icon + " " + ACT_TYPES[a.type].label : a.type}</span>${srcBadge(a.sourceStatus === "verified" ? "verified" : "teacher")}<span class="tag">مهارة: ${esc(skillAr(a.skill))}</span></div>
    <h3 style="font-size:20px;margin:10px 0 6px">${esc(a.title)}</h3>
    <p style="color:var(--muted);font-size:14.5px">📌 ${esc(a.instructions || "")}</p>
    ${a.sourceNote ? `<p class="print-note" style="margin:6px 0 4px">🔎 المصدر: ${esc(a.sourceNote)}</p>` : ""}
    ${typeof activityMediaHTML === "function" ? activityMediaHTML(a) : ""}
    <div id="actBody" style="margin-top:16px">${renderActBody(a)}</div>
    <div id="actResult"></div>
  </div></div>`;
}
function renderActBody(a) {
  if (a.type === "mcq") return a.items.map((it, i) => `<div class="act-q"><p class="q-text" style="font-size:16.5px" dir="${/[\u0600-\u06FF]/.test(it.q) && !/^[A-Za-z]/.test(it.q) ? "rtl" : "ltr"}">${esc(it.q)}</p>${it.options.map((o, oi) => `<button class="opt-btn act-opt" dir="ltr" style="text-align:left" onclick="actPick(${i},${oi},this)"><span class="opt-key">${["A","B","C","D"][oi]}</span>${esc(o)}</button>`).join("")}<div id="actWhy${i}"></div></div>`).join("") + actCheckBtn("تحقق من إجاباتي ✓");
  if (a.type === "fill") return a.items.map((it, i) => `<div class="act-q" dir="ltr" style="text-align:left;font-size:17px">${esc(it.before)} <select class="f-input" style="display:inline-block;width:auto;padding:6px 10px" onchange="ACTPLAY.sels[${i}]=this.value"><option value="">— choose —</option>${it.options.map((o, oi) => `<option value="${oi}">${esc(o)}</option>`).join("")}</select> ${esc(it.after)}<div id="actWhy${i}" dir="rtl" style="text-align:right"></div></div>`).join("") + actCheckBtn("تحقق ✓");
  if (a.type === "order") return `<div class="order-built" id="orderBuilt" dir="ltr"><span class="empty-hint">…اضغط القطع بالترتيب</span></div>
    <div class="order-bank" dir="ltr">${a.pieces.map((p, i) => `<button class="word-chip" id="ordPiece${i}" onclick="actOrderPick(${i})">${esc(p)}</button>`).join("")}</div>
    <div style="display:flex;gap:9px;flex-wrap:wrap"><button class="btn btn-ghost btn-sm" onclick="actOrderReset()">↺ إعادة الترتيب</button><button class="btn btn-ghost btn-sm" onclick="speakEncoded('${speakEncodedText(a.answer.join(" "))}')">🔊 استمع للترتيب الصحيح بعد محاولتك</button></div>` + actCheckBtn("تحقق من الترتيب ✓");
  if (a.type === "match") {
    const rights = (a.rightOrder || a.items.map((_, i) => i)).map(i => a.items[i]);
    return `<div class="match-cols"><div>${a.items.map((it, i) => `<button class="opt-btn act-opt" dir="ltr" style="text-align:left" id="mL${i}" onclick="actMatchLeft(${i})">${esc(it.left)}</button>`).join("")}</div>
    <div>${rights.map((it) => { const real = a.items.indexOf(it); return `<button class="opt-btn act-opt" dir="ltr" style="text-align:left" id="mR${real}" onclick="actMatchRight(${real})">${esc(it.right)}</button>`; }).join("")}</div></div>
    <p class="print-note">الأزواج المكتملة: <b id="matchCount">0 / ${a.items.length}</b> · المحاولات الخاطئة: <b id="matchErr">0</b></p>`;
  }
  if (a.type === "flashcards") { ACTPLAY.flip = 0; return flashHTML(a, 0, false); }
  if (a.type === "dialogue") return `<div id="dlgBody">${dialogueHTML(a)}</div>`;
  if (a.type === "video") return videoHTML(a);
  return `<div class="empty-state"><div class="e-ic">🧩</div><p>نوع نشاط غير مدعوم في هذا المشغّل بعد.</p></div>`;
}
function actCheckBtn(label) { return `<div style="text-align:end;margin-top:10px"><button class="btn btn-primary" id="actCheckBtn" onclick="actGrade()">${label}</button></div>`; }
function actPick(qi, oi, btn) {
  if (ACTPLAY.done) return;
  ACTPLAY.sels[qi] = oi;
  btn.closest(".act-q").querySelectorAll(".opt-btn").forEach(b => b.classList.remove("picked"));
  btn.classList.add("picked");
}
function actOrderPick(i) {
  if (ACTPLAY.done) return;
  const btn = document.getElementById("ordPiece" + i);
  if (btn.classList.contains("used")) return;
  btn.classList.add("used"); ACTPLAY.chosen.push(ACTPLAY.act.pieces[i]); ACTPLAY.chosenIdx = (ACTPLAY.chosenIdx || []); ACTPLAY.chosenIdx.push(i);
  document.getElementById("orderBuilt").innerHTML = ACTPLAY.chosen.map(p => `<span class="word-chip built">${esc(p)}</span>`).join(" ");
}
function actOrderReset() { ACTPLAY.chosen = []; ACTPLAY.chosenIdx = []; ACTPLAY.done = false; document.getElementById("appContent").innerHTML = activityShell(ACTPLAY.act); }
function actMatchLeft(i) { if (ACTPLAY.done || ACTPLAY.matched[i]) return; ACTPLAY.selLeft = i; document.querySelectorAll("[id^=mL]").forEach(b => b.classList.remove("picked")); document.getElementById("mL" + i).classList.add("picked"); }
function actMatchRight(realIdx) {
  if (ACTPLAY.done || ACTPLAY.selLeft === null || ACTPLAY.matched[realIdx]) return;
  const left = ACTPLAY.selLeft;
  if (left === realIdx) {
    ACTPLAY.matched[realIdx] = true;
    document.getElementById("mL" + left).classList.add("correct"); document.getElementById("mR" + realIdx).classList.add("correct");
    document.getElementById("mL" + left).disabled = document.getElementById("mR" + realIdx).disabled = true;
    ACTPLAY.selLeft = null;
  } else {
    ACTPLAY.errs++; const b = document.getElementById("mR" + realIdx); b.classList.add("wrong"); setTimeout(() => b.classList.remove("wrong"), 650);
    document.getElementById("matchErr").textContent = ACTPLAY.errs;
  }
  const n = Object.keys(ACTPLAY.matched).length;
  document.getElementById("matchCount").textContent = n + " / " + ACTPLAY.act.items.length;
  if (n === ACTPLAY.act.items.length) finishActivity(ACTPLAY.act.items.length - Math.min(ACTPLAY.errs, ACTPLAY.act.items.length - 1), ACTPLAY.act.items.length, "وصلت كل الأزواج" + (ACTPLAY.errs ? ` بعد ${arNum(ACTPLAY.errs)} محاولة خاطئة — راجع الأزواج بصوت مع زميل.` : " من أول مرة — رائع! 🎉"));
}
function flashHTML(a, idx, flipped) {
  const c = a.items[idx];
  return `<div class="flash-wrap">
    <div class="flash-card ${flipped ? "flipped" : ""}" dir="ltr" onclick="actFlip()"><div class="flash-inner">
      <div class="flash-face front">${esc(c.front)}</div><div class="flash-face back" dir="rtl">${esc(c.back)}</div></div></div>
    <p class="print-note">بطاقة ${arNum(idx + 1)} من ${arNum(a.items.length)} — اضغط البطاقة لقلبها</p>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-ghost btn-sm" onclick="speakEncoded('${speakEncodedText(c.front)}')">🔊 النطق</button>
      <button class="btn btn-primary btn-sm" onclick="actKnow(1)">✓ أعرفها</button>
      <button class="btn btn-ghost btn-sm" onclick="actKnow(0)">↺ ما زلت أتعلمها</button></div></div>`;
}
function actFlip() { const el = document.querySelector(".flash-card"); if (el) el.classList.toggle("flipped"); }
function actKnow(k) {
  const a = ACTPLAY.act; ACTPLAY.know[ACTPLAY.flip] = k;
  if (ACTPLAY.flip + 1 >= a.items.length) { finishActivity(Object.values(ACTPLAY.know).reduce((x, y) => x + y, 0), a.items.length, "راجعت كل البطاقات — الكلمات التي علّمتها «ما زلت أتعلمها» هي خطوتك التالية."); return; }
  ACTPLAY.flip++; document.getElementById("actBody").innerHTML = flashHTML(a, ACTPLAY.flip, false);
}
function dialogueHTML(a) {
  const n = a.items[ACTPLAY.node];
  const hist = (ACTPLAY.hist || []).map(h => `<div class="bubble them" dir="ltr" style="text-align:left">${esc(h.bot)}</div><div class="bubble me" dir="${h.ar ? "rtl" : "ltr"}">${esc(h.me)}</div><div class="why-box" style="font-size:13.5px">${h.ok ? "✅" : "💡"} ${esc(h.reply)}</div>`).join("");
  if (!n) return hist;
  return `<div class="chat-body" style="max-height:none;background:#fff;border:0;padding:0">${hist}
    <div class="bubble them" dir="${/^🧠/.test(n.bot) ? "rtl" : "ltr"}" style="text-align:${/^🧠/.test(n.bot) ? "right" : "left"}">${esc(n.bot)} ${!/^🧠/.test(n.bot) ? `<button class="icon-btn" style="width:30px;height:30px;font-size:13px" onclick="speakEncoded('${speakEncodedText(n.bot)}')">🔊</button>` : ""}</div></div>
    <div style="margin-top:10px">${n.choices.map((c, ci) => `<button class="opt-btn" dir="${/[\u0600-\u06FF]/.test(c.text) ? "rtl" : "ltr"}" style="text-align:${/[\u0600-\u06FF]/.test(c.text) ? "right" : "left"}" onclick="actDialoguePick(${ci})">${esc(c.text)}</button>`).join("")}</div>`;
}
function actDialoguePick(ci) {
  const a = ACTPLAY.act, node = a.items[ACTPLAY.node], ch = node.choices[ci];
  (ACTPLAY.hist = ACTPLAY.hist || []).push({ bot: node.bot, me: ch.text, ok: !!ch.ok, reply: ch.reply, ar: /[\u0600-\u06FF]/.test(ch.text) });
  if (ch.ok) ACTPLAY.nodeScore++;
  ACTPLAY.node++;
  if (ACTPLAY.node >= a.items.length) { document.getElementById("actBody").innerHTML = dialogueHTML(a); finishActivity(ACTPLAY.nodeScore, a.items.length, "أنهيت الحوار — جرّب أداءه صوتياً مع زميل (عمل ثنائي)."); return; }
  document.getElementById("actBody").innerHTML = dialogueHTML(a);
}
function videoHTML(a) {
  const url = window.__sessionVideoFor && window.__sessionVideoFor(a.id);
  if (!url) return `<div class="empty-state"><div class="e-ic">🎬</div><strong>ملف الفيديو غير موجود في هذه الجلسة</strong><p>أنشطة «أسئلة داخل فيديو» نموذج أولي: الملف يُعايَن محلياً من جهاز المعلم ولا يُرفع إلى أي خادم. التفعيل الدائم يتطلب خدمة تخزين ملفات (انظر خطة التكاملات في README).</p>
  ${a.markers && a.markers.length ? `<p>أسئلة هذا النشاط (${arNum(a.markers.length)}):</p>` + a.markers.map(m => `<div class="today-item"><span class="today-time" dir="ltr">⏱ ${esc(String(m.sec))}s</span><div dir="ltr" style="text-align:left">${esc(m.q)}</div></div>`).join("") : ""}</div>`;
  return `<video id="actVideo" controls style="width:100%;border-radius:14px" src="${url}"></video><div id="vidQ"></div>
  <script>(function(){var v=document.getElementById('actVideo');var marks=${JSON.stringify(a.markers || [])};var asked={};v.addEventListener('timeupdate',function(){marks.forEach(function(m,i){if(!asked[i]&&v.currentTime>=+m.sec){asked[i]=1;v.pause();document.getElementById('vidQ').innerHTML='<div class="why-box"><b dir="ltr">'+m.q+'</b><br>'+m.options.map(function(o,oi){return '<button class="opt-btn" dir="ltr" style="text-align:left" onclick="this.closest(\\'.why-box\\').innerHTML=(('+oi+'==='+m.a+')?\\'✅ صحيح — تابع المشاهدة\\':\\'💡 ليست الصحيحة — أعد المقطع وحاول\\')">'+o+'</button>'}).join('')+'</div>';}});});})();<\/script>`;
}
function actGrade() {
  const a = ACTPLAY.act, p = ACTPLAY;
  if (a.type === "mcq" || a.type === "fill") {
    const sels = a.items.map((_, i) => p.sels[i] === undefined ? -1 : p.sels[i]);
    if (sels.some(s => s === -1 || s === "")) { toast("أجب عن كل الأسئلة أولاً ✋"); return; }
    const g = gradeSelections(a.items, sels);
    a.items.forEach((it, i) => {
      const ok = Number(sels[i]) === it.a, box = document.getElementById("actWhy" + i);
      if (box) box.innerHTML = `<div class="why-box"><b>${ok ? "✅ صحيحة" : "💡 الصواب: " + esc(it.options[it.a])}</b><br>${esc(it.why || "")}</div>`;
      const q = box && box.closest(".act-q");
      if (q) q.querySelectorAll(".opt-btn").forEach((b, bi) => { b.disabled = true; if (bi === it.a) b.classList.add("correct"); else if (bi === Number(sels[i])) b.classList.add("wrong"); });
    });
    finishActivity(g.score, g.total);
  } else if (a.type === "order") {
    if (p.chosen.length < a.answer.length) { toast("رتّب كل القطع أولاً"); return; }
    const g = gradeSequence(a.answer, p.chosen);
    finishActivity(g.perfect ? g.total : g.score, g.total, g.perfect ? "ترتيب صحيح بالكامل 🎉 اقرأه بصوت مرتفع." : "الترتيب الصحيح: " + a.answer.join(" "));
  }
}
function finishActivity(score, total, msg) {
  const a = ACTPLAY.act; ACTPLAY.done = true;
  const pct = total ? Math.round(score / total * 100) : 0;
  if (!ACTPLAY.preview && typeof recordAttempt === "function") recordAttempt(a, score, total);
  const el = document.getElementById("actResult");
  if (el) el.innerHTML = `<div class="quiz-result" style="border-top:1.5px dashed var(--line);margin-top:16px">
    <div class="result-emoji">${pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📚"}</div>
    <div class="big-score">${arNum(score)} / ${arNum(total)}</div>
    <p style="font-weight:800;color:var(--navy)">${esc(msg || (pct >= 80 ? "عمل ممتاز!" : pct >= 50 ? "جيد — راجع التفسيرات وحاول ثانية" : "راجع لغة الدرس في الأعلى ثم أعد المحاولة"))}</p>
    <p style="color:var(--muted);font-size:13.5px">${ACTPLAY.preview ? "هذه معاينة معلم — لم تُسجَّل نتيجة." : "سُجّلت المحاولة في ملف تقدمك على هذا الجهاز (نموذج تجريبي — لا تُرسل لأي خادم)."}</p>
    <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-top:12px">
      <button class="btn btn-primary" onclick="playActivity('${a.id}',${ACTPLAY.preview ? "true" : "false"})">↺ إعادة المحاولة</button>
      <button class="btn btn-ghost" onclick="navigate('activities')">🎮 أنشطة أخرى</button>
      ${a.stepRef ? `<button class="btn btn-ghost" onclick="navigate('english8')">🇬🇧 عودة لمادة الإنجليزية</button>` : ""}</div></div>`;
  const cb = document.getElementById("actCheckBtn"); if (cb) cb.style.display = "none";
  if (el) { try { el.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (e) { /* بيئات بلا تمرير مرئي */ } }
}
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { activities: vActivities });
