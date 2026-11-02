/* ===== مدرستي اليمن — قسم اللغة الإنجليزية للصف الثامن =====
   المصدر الموثّق: Crescent English Course for Yemen — Teacher's Book 2 (دليل المعلم)
   من موقع التعليم الإلكتروني بوزارة التربية والتعليم اليمنية e-learning-moe.edu.ye
   قاعدة المحتوى: لا يُنسب أي عنصر للمنهج الرسمي دون مرجع (وحدة/خطوة/صفحة).
   PB = كتاب الطالب (79 صفحة PDF ممسوحة؛ نُسخت بصريًا صفحات Unit 1 المطبوعة 1 و3 و4
        وصفحات Unit 2 المطبوعة 5–16، ولم تُوجد صفحة Unit 1 المطبوعة 2 في تسلسل المسح المزوّد)
   WB = كتاب الأنشطة (115 صفحة PDF ممسوحة؛ نُسخت بصريًا صفحات Unit 1 المطبوعة 1–13
        وصفحات Unit 2 المطبوعة 14–28)
   كل سجلات PB/WB أعلاه «منسوخة بصريًا — بانتظار مراجعة بشرية ثانية»، وليست Verified.
   TB = دليل المعلم (220 صفحة، نصّه قابل للاستخراج — ملخصات الوحدات مصدر البيانات أدناه)
   CS = أقسام شريط الكاسيت الأصلي للفصل. مجلد Drive المعتمد مفهرس في audio-library.js
   ويُبثّ من مصدره؛ لكن مطابقة أي ملف بقسم CS تظل Mapping Unconfirmed حتى يستمع إليه المعلم. */
const ENG8 = {
  course: "Crescent English Course for Yemen — Book 2",
  grade: 8,
  totalSteps: 107, // كما ورد في TB ص5: المادة منظمة في 7 وحدات، 107 خطوات تعليمية
  docs: [
    { code: "PB", name: "كتاب الطالب Pupil's Book 2", pages: 79, status: "pending", note: "ممسوح ضوئياً بلا طبقة نص. نُسخت بصريًا صفحات Unit 1 المطبوعة 1 و3 و4 وصفحات Unit 2 المطبوعة 5–16، وكلها بانتظار مراجعة بشرية ثانية؛ صفحة Unit 1 المطبوعة 2 لم تُوجد في تسلسل PDF المزوّد، فلا يُنسب إليها نص. بقية صفحات الكتاب بانتظار النسخ البصري." },
    { code: "WB", name: "كتاب الأنشطة Workbook 2", pages: 115, status: "pending", note: "ممسوح ضوئياً بلا طبقة نص. نُسخت بصريًا تمارين Unit 1 في الصفحات المطبوعة 1–13 (Exercises 1.1–1.12) وتمارين Unit 2 في الصفحات المطبوعة 14–28 (Exercises 2.1–2.17 بأقسامها الظاهرة)، وكلها بانتظار مراجعة بشرية ثانية وليست Verified؛ بقية الكتاب بانتظار النسخ." },
    { code: "TB", name: "دليل المعلم Teacher's Book 2", pages: 220, status: "verified", note: "تم استخراج: المحتويات، تنظيم المنهج، نظرة القواعد، وملخصات الوحدات السبع، وملاحظات دروس Unit 1 وUnit 2 وUnit 3 وUnit 4 وUnit 5 وUnit 6 وUnit 7 (الخطوات 1.1–1.12 و2.1–2.17 و3.1–3.15 و4.1–4.16 و5.1–5.18 و6.1–6.14 و7.1–7.15؛ أهداف ومفردات مستخرجة من TB بمراجع صفحاتها). استخراج TB لا يعني نسخ PB/WB بصريًا أو اعتماد أي وحدة Verified. كل مجموعة خطوات بالأسفل مربوطة بصفحة ملخصها في الدليل." }
  ],
  pedagogy: [ // أقسام دليل المعلم التربوية (محتويات TB ص3)
    { title: "العمل الثنائي والجماعي", ref: "TB ص10 — Pair and group work" },
    { title: "مراعاة الفروق الفردية", ref: "TB ص11 — Mixed abilities" },
    { title: "استخدام العربية عند الحاجة التعليمية", ref: "TB ص11 — Using Arabic" },
    { title: "التقييم المستمر", ref: "TB ص12 — Assessment" },
    { title: "تقنيات المهارات الأربع", ref: "الاستماع ص13 · التحدث ص14 · القراءة ص17 · الكتابة ص21" },
    { title: "لغة الصف والتخطيط للدرس", ref: "TB ص11–12" }
  ],
  units: [
    { n: 1, themeAr: "مراجعة تأسيسية: التعارف، الأشياء والألوان، الطعام، الوقت والروتين، البيانات الشخصية، البيت", tbSummary: "25–26", stepsComplete: true,
      steps: [
        { ref: "u1g0", steps: "1/2", materials: "WB1/2", topic: "Everyday objects / colours / numbers / family relations / forms of transport / location",
          objectives: ["Greet someone and introduce self.", "Name everyday objects and colours.", "Spell and write everyday objects and colours.", "Understand classroom instructions.", "Identify objects from oral descriptions.", "Say and recognize numbers 1-20, write numbers one-fifteen.", "Categorize vocabulary."], objectivesRef: "جدولَا الخطوتين 1.1 و1.2 — TB ص27 و29",
          skills: ["التحية والتعريف بالنفس", "تسمية الأشياء اليومية والألوان وتهجئتها وكتابتها", "التعرّف على الأشياء من وصف شفهي", "الأعداد 1–20", "اتباع التعليمات"],
          language: ["Hello. My name is Ali.", "What's this? — A chair.", "Is the door white?", "It's on the table. It's red.", "Put your pencil on your book."],
          vocabAttested: ["chair", "door", "table", "pencil", "book", "bicycle", "bag", "pen", "wall", "window", "red", "white", "green", "on", "in", "under", "next to", "in front of", "behind", "mother", "father", "sister", "brother", "bus", "plane", "car", "boat"], vocabRef: "كلمات وعبارات وردت بنصّها في ملاحظات الخطوتين 1.1 و1.2 (TB ص27–30)، وتحققت كلمات الأسرة والنقل بصريًا في WB ص2؛ تشمل أشياء وألوانًا وحروف مكان وعلاقات أسرية ووسائل نقل، وليست قائمة الكتاب الكاملة." },
        { ref: "u1g1", steps: "3/4", materials: "PB1 · WB3/4 · CS1/2", topic: "Food and drink / days of the week / everyday activities",
          songs: ["I like apples", "This is the way"],
          objectives: ["Name and spell food and drink items.", "Categorize vocabulary.", "Sing a song: I like apples.", "Express likes and dislikes orally and in writing.", "Say and recognize numbers 1-50.", "Re-order and write questions - 2nd and 3rd person.", "Sing a song: This is the way.", "Everyday activities and days of the week."], objectivesRef: "جدولَا الخطوتين 1.3 و1.4 — TB ص31 و33",
          vocabAttested: ["apples", "bread", "rice", "tea", "coffee", "oranges", "chicken", "dates", "lamb", "carrots", "lettuce", "Monday", "Saturday", "Sunday"], vocabRef: "كلمات وردت بنصّها في أمثلة وملاحظات الخطوتين 1.3 و1.4 (TB ص31–34)؛ يصنفها الدليل مراجعةً للطعام والشراب والأعداد وأيام الأسبوع والأنشطة اليومية.",
          skills: ["تسمية أطعمة ومشروبات وتهجئتها وتصنيف المفردات", "التعبير عن الإعجاب وعدمه شفهياً وكتابياً", "أسئلة نعم/لا", "الأعداد 20–50"],
          language: ["What are these? — Apples.", "Do you like oranges? — Yes, I do. / No, I don't.", "Does she like oranges? — Yes, she does. / No, she doesn't."] },
        { ref: "u1g2", steps: "5", materials: "PB2 · WB5 · CS2", topic: "Daily routines — two short texts",
          objectives: ["Ask for and tell the time.", "Identify people by reading descriptions of daily routines.", "Talk and write about daily routines."], objectivesRef: "جدول الخطوة 1.5 — TB ص35",
          vocabAttested: ["gets up", "go to school", "go home"], vocabRef: "عبارات وردت بنصّها في ملاحظات الخطوة 1.5 (TB ص35–36)؛ يسمي الدليل الحقل Revision of time, daily activities دون قائمة مفردات كاملة.",
          skills: ["السؤال عن الوقت والإخبار به", "التحدث والكتابة عن الروتين اليومي", "التعرّف على الأشخاص من قراءة أوصافهم"],
          language: ["What's the time? — It's six o'clock.", "What does Bill do at six o'clock? — He gets up."] },
        { ref: "u1g3", steps: "6/7", materials: "PB3 · WB6/7 · CS3", topic: "Personal details — a conversation",
          objectives: ["Ask and answer about after-school activities.", "Ask and answer about personal details.", "Understand personal details in a conversation.", "Talk and write about personal details; after-school activities."], objectivesRef: "جدولَا الخطوتين 1.6 و1.7 — TB ص37 و39",
          vocabAttested: ["read books", "play football", "goes shopping", "name", "age"], vocabRef: "كلمات وعبارات وردت بنصّها في ملاحظات الخطوتين 1.6 و1.7 (TB ص37–39)؛ حقل الدليل هو مراجعة أنشطة ما بعد المدرسة والبيانات الشخصية.",
          skills: ["السؤال والإجابة عن البيانات الشخصية", "فهم البيانات الشخصية في محادثة", "إكمال فقرة ذات فراغات", "كتابة البيانات الشخصية"],
          language: ["What's your name?", "How old are you?", "Where are you from?", "Have you got any brothers?", "What do you do after school?", "Do you watch TV?"] },
        { ref: "u1g4", steps: "8/9", materials: "PB1 · WB8–10 · CS4", topic: "Activities / location",
          songs: ["Where's Hassan?"],
          objectives: ["Revise the present continuous and spelling rules for adding -ing.", "Express likes/dislikes plus and, or but orally and in writing.", "Name and spell shops and buildings.", "Express location.", "Make conversations using the present continuous.", "Re-order and write sentences.", "Sing a song: Where's Hassan?"], objectivesRef: "جدولَا الخطوتين 1.8 و1.9 — TB ص40 و42",
          vocabAttested: ["watching TV", "playing football", "swimming", "shopping", "riding a bike", "reading", "bakery", "bookshop", "supermarket", "Post Office", "bank", "restaurant", "park", "beach"], vocabRef: "كلمات وعبارات وردت بنصّها في ملاحظات الخطوتين 1.8 و1.9 (TB ص40–43)، وتحققت أمثلة الأنشطة والأمكنة بصريًا في WB ص8–10.",
          skills: ["تسمية الصور ومراجعة قواعد التهجئة", "التعبير عن الإعجاب بأنشطة جارية (and / or / but)", "أداء حوار استبدالي", "إعادة ترتيب الجمل وكتابتها"],
          language: ["What is he doing? — He is watching television.", "I like reading, swimming and watching TV.", "I don't like shopping or playing football."] },
        { ref: "u1g5", steps: "10/11", materials: "PB1 · WB11/12 · CS5", topic: "Places / rooms of the house / furniture",
          songs: ["My house"],
          objectives: ["Name and spell rooms of the house and furniture.", "Describe a room orally.", "Categorize vocabulary.", "Sing a song: My House.", "Talk and write about own house.", "Revise location.", "Describe a room orally and in writing.", "Say and recognize 1-100."], objectivesRef: "جدولَا الخطوتين 1.10 و1.11 — TB ص44 و45",
          vocabAttested: ["bookshop", "living room", "carpet", "hall", "sofa", "kitchen", "bakery", "pictures", "post office", "stairs", "police station", "curtains", "bedroom", "supermarket", "cushion"], vocabRef: "قائمة WB1.10A بنصّها بعد فحص بصري لـWB ص11، مع ملاحظات الخطوتين 1.10 و1.11 في TB ص44–45.",
          skills: ["تصنيف المفردات", "وصف غرفة شفهياً وكتابياً", "الأعداد 50–100", "السؤال عن الكمية"],
          language: ["There is a sofa in the room.", "How many desks are there?"] },
        { ref: "u1g6", steps: "12", materials: "PB4 · WB13", topic: "Tim and Saleh — giving personal details",
          objectives: ["Understand personal details in a conversation.", "Ask and answer about personal details.", "Revise vocabulary."], objectivesRef: "جدول الخطوة 1.12 — TB ص46",
          vocabAttested: ["favourite", "pastime", "family photograph", "beach", "park", "Post Office", "supermarket", "bed", "Wednesday", "Thursday"], vocabRef: "كلمات وعبارات وردت بنصّها في ملاحظات الخطوة 1.12 (TB ص46–47)، بما فيها favourite وpastime اللذان يوجّه الدليل إلى كتابتهما وفحص فهمهما.",
          skills: ["فهم البيانات الشخصية في محادثة", "السؤال والإجابة عن البيانات الشخصية"],
          language: ["Where do you live?", "How many brothers and sisters have you got?", "What does your family do every Thursday?"] }
      ] },
    { n: 2, themeAr: "الماضي البسيط، وسائل المجيء إلى المدرسة، سلامة عبور الشارع، الطلبات والترتيبات، شراء الهدايا والاقتراحات، كتابة قصة ومراجعة المفردات", tbSummary: "48–49", stepsComplete: true,
      steps: [
        { ref: "u2g0", steps: "1", materials: "WB14/15", topic: "Talking about the past", language: ["What did you do yesterday? — I watched TV. / I went to the park.", "Did you go to the beach? — Yes, I did. / No, I didn't."],
          objectives: ["Revise past simple.", "Complete a verb table.", "Understand the logical sequence of a conversation.", "Complete a gapped paragraph.", "Write about past events."], objectivesRef: "جدول الخطوة 2.1 — TB ص50",
          vocabAttested: ["watched", "lived", "visited", "hopped", "prayed", "helped", "phoned", "worked", "yesterday"], vocabRef: "أفعال الماضي البسيط المنتظم كما وردت في جدول نطق ‎-ed‎ وتركيز لغة الخطوة 2.1 (TB ص50)؛ حقل Vocabulary في الدليل: Revision of past simple verb form.",
          skills: ["إكمال جدول أفعال ونصٍّ ذي فراغات", "فهم التسلسل المنطقي لمحادثة", "كتابة أحداث ماضية"] },
        { ref: "u2g1", steps: "2", materials: "PB5/6 · WB16", topic: "How people come to school", language: ["How do you come to school? — I come by bus / by car.", "Yesterday Najeeb came to school by bus.", "Ali didn't walk. He ran."],
          objectives: ["Ask and answer about methods of coming to school.", "Read about how people came to school.", "Write two sentences."], objectivesRef: "جدول الخطوة 2.2 — TB ص52",
          vocabAttested: ["by bus", "by car", "by bicycle", "teacher", "went fishing"], vocabRef: "قائمة Vocabulary للخطوة 2.2 (TB ص52) وأمثلة ملخص الوحدة (TB ص48).",
          skills: ["سؤال وجواب عن وسائل المجيء إلى المدرسة", "قراءة عن كيفية مجيء التلاميذ إلى المدرسة", "كتابة جمل"] },
        { ref: "u2g2", steps: "3–5", materials: "PB7–9 · WB16/17 · CS6", topic: "Instructions for crossing the street / An accident — a cartoon story", songs: ["Accident"], language: ["Stop. Look left. Look right. Don't run.", "أدوات الربط: and, but, Then"],
          objectives: ["Read and understand a past simple narrative.", "Understand and write instructions for crossing the street.", "Understand pictures telling a story.", "Sing a song: Accident.", "Copy and improve a story."], objectivesRef: "جداول الخطوات 2.3–2.5 — TB ص54–56",
          vocabAttested: ["take care", "cross", "stop", "left", "right", "again", "dangerous", "across", "accident", "policeman", "driver", "hit", "head", "road", "clear"], vocabRef: "قوائم Vocabulary للخطوات 2.3–2.5 (TB ص54–56).",
          skills: ["قراءة وفهم قصة بالماضي البسيط", "فهم وكتابة تعليمات عبور الشارع", "فهم صور تروي قصة وكتابة سرد بالماضي البسيط"] },
        { ref: "u2g3", steps: "6", materials: "PB9/10 · CS6/7", topic: "What would you like — a cartoon story", language: ["What would you like to drink? — I'd like a Pepsi, please."],
          objectives: ["Understand and express wants.", "Sing a song: Accident."], objectivesRef: "جدول الخطوة 2.6 — TB ص57",
          vocabAttested: ["take-away", "would", "drink", "Pepsi"], vocabRef: "قائمة Vocabulary وتركيز اللغة (Language focus) للخطوة 2.6 (TB ص57).",
          skills: ["تسمية وتهجئة أطعمة ومشروبات", "فهم الرغبات والتعبير عنها", "أداء محادثة"] },
        { ref: "u2g4", steps: "7/8", materials: "PB11 · WB18/19 · CS8/9", topic: "The girl from Kuwait — a conversation / Making arrangements", language: ["Would you like to come to my house? — I'd love to, Fatma. When?"],
          objectives: ["Understand the details of a conversation.", "Re-order and write sentences.", "Make conversations."], objectivesRef: "جدولَا الخطوتين 2.7 و2.8 — TB ص58–59",
          vocabAttested: ["Kuwait", "on holiday", "love", "tomorrow"], vocabRef: "قائمة Vocabulary للخطوة 2.7 (TB ص58)؛ الخطوة 2.8 بلا مفردات جديدة في الدليل (—).",
          skills: ["فهم تفاصيل محادثة", "إعادة ترتيب جمل وكتابتها", "السؤال والجواب عن الرغبات وصنع محادثات لترتيبات"] },
        { ref: "u2g5", steps: "9–12", materials: "PB12/13 · WB20–22 · CS10/11", topic: "Buying presents, toys, jewellery, clothes", language: ["What can I buy for my brother? — How about a jigsaw puzzle?", "Where can I buy a comic? — At the book shop.", "What did Ameena buy for Asma? — She bought a box of paints."],
          objectives: ["Name toys.", "Ask for and make suggestions about presents.", "Learn vocabulary.", "Describe people orally.", "Understand the details of a conversation.", "Ask, answer and write about presents.", "Understand the details of a past simple narrative text.", "Give reasons for actions."], objectivesRef: "جداول الخطوات 2.9–2.12 — TB ص60–65",
          vocabAttested: ["presents", "toy shop", "jigsaw puzzle", "doll", "chess set", "model boat", "idea", "jewellery shop", "a pair of glasses", "earrings", "shorts", "sandals", "box of paints", "bracelet", "necklace", "comic", "tie", "paint brush", "paper", "ring", "so"], vocabRef: "قوائم Vocabulary للخطوتين 2.9 و2.10 (TB ص60–62)؛ والخطوة 2.12 تضيف so (TB ص65).",
          skills: ["تسمية الألعاب والمجوهرات والملابس والمحلات", "طلب الاقتراحات وتقديمها", "الاستماع لمعلومات محددة", "السؤال والجواب والكتابة عن أنشطة ماضية", "فهم تفاصيل نص سردي وتقديم أسباب للأفعال"] },
        { ref: "u2g6", steps: "13", materials: "PB14 · CS12", topic: "Let's ask Hassan — a conversation", language: ["What would you like to do?", "Let's watch TV. — No. I don't like watching TV.", "How about going to the take-away? — I'd like to play football."],
          objectives: ["Understand and role-play a conversation - ask for, make and reject suggestions."], objectivesRef: "جدول الخطوة 2.13 — TB ص66",
          vocabAttested: ["Dubai", "take-away", "watch TV", "play football"], vocabRef: "Vocabulary الخطوة 2.13 في الدليل هي Dubai فقط؛ بقية العبارات من أمثلة Language focus بنصّها (TB ص66).",
          skills: ["طلب الاقتراحات وتقديمها ورفضها", "الاستماع للتفاصيل", "قراءة واستنتاج معلومات"] },
        { ref: "u2g7", steps: "14", materials: "PB13/15 · WB23 · CS13", topic: "Presents for the family — two short conversations", language: ["That's a nice watch. — Yes, it's for my brother.", "أسماء الإشارة والضمائر: that/it · those/they/them"],
          objectives: ["Find information in a text.", "Make conversations."], objectivesRef: "جدول الخطوة 2.14 — TB ص68",
          vocabAttested: ["nice", "that", "those", "they", "them"], vocabRef: "قائمة Vocabulary وتركيز اللغة للخطوة 2.14 (TB ص68).",
          skills: ["العثور على معلومات في نص", "صنع محادثات"] },
        { ref: "u2g8", steps: "15", materials: "WB24/25 · CS14", topic: "Puzzle activities", language: ["Fatma didn't read a comic. She read a book.", "Fuad didn't buy a ring. He bought a necklace."],
          objectives: ["Revise past simple affirmative and negative forms.", "Revise vocabulary."], objectivesRef: "جدول الخطوة 2.15 — TB ص70",
          vocabAttested: ["watch", "necklace", "ring", "bought", "comic", "book"], vocabRef: "حقل Vocabulary للخطوة 2.15 فارغ في الدليل (—)؛ الكلمات من مثال التوضيح في TB ص70 ومثال ملخص الوحدة TB ص49.",
          skills: ["الاستماع لتحديد الكلمات وإكمال لغز", "إكمال جمل ذات فراغات", "عمل شجرة كلمات"] },
        { ref: "u2g9", steps: "16", materials: "WB26", topic: "Paragraph writing", language: ["أدوات الربط في كتابة الفقرة/القصة: and, but, so, Then"],
          objectives: ["Complete a gapped text.", "Copy and improve the story."], objectivesRef: "جدول الخطوة 2.16 — TB ص72",
          vocabAttested: ["and", "but", "so", "then"], vocabRef: "أدوات الربط في Language focus للخطوة 2.16 (TB ص72)؛ حقل Vocabulary فارغ (—).",
          skills: ["إكمال نصٍّ ذي فراغات", "كتابة قصة"] },
        { ref: "u2g10", steps: "17", materials: "PB15 · WB27/28", topic: "Revision", language: ["تصنيف مفردات الوحدة: clothes · jewellery · toys · food"],
          objectives: ["Revise vocabulary.", "Categorize vocabulary."], objectivesRef: "جدول الخطوة 2.17 — TB ص73",
          vocabAttested: ["clothes", "jewellery", "toys", "food", "dress", "ring", "doll", "lamb"], vocabRef: "فئات وأمثلة لعبة Bingo في الخطوة 2.17 (TB ص74)؛ حقل Vocabulary فارغ (—) لأن الخطوة مراجعة.",
          skills: ["مراجعة مفردات الوحدة", "تصنيف مفردات وإملاء"] }
      ] },
    { n: 3, themeAr: "الكمية والمعدود وغير المعدود، الاحتياجات والعروض، المشاعر، الماضي غير المنتظم، شراء الطعام، القصص واليوميات", tbSummary: "76–77", stepsComplete: true,
      steps: [
        { ref: "u3g0", steps: "1", materials: "PB17 · WB29", topic: "Food and drink: countable / uncountable", language: ["There is some milk in the fridge.", "There are some oranges on the shelf."],
          objectives: ["Talk about food.", "Express definite and indefinite quantity.", "Describe location.", "Complete gapped sentences: is / are.", "List vocabulary in alphabetical order."], objectivesRef: "جدول الخطوة 3.1 — TB ص78",
          vocabAttested: ["olives", "tomatoes", "flour", "butter", "sugar", "fridge", "milk", "oranges", "shelf"], vocabRef: "قائمة Vocabulary وكلمات أمثلة Language focus للخطوة 3.1 (TB ص78).",
          skills: ["وصف موقع ووجود أشياء معدودة وغير معدودة", "إكمال جمل ذات فراغات بـ is/are", "ترتيب مفردات أبجديًا"] },
        { ref: "u3g1", steps: "2/3", materials: "PB18 · WB30–32 · CS15", topic: "Let's make an egg sandwich — a cartoon story", language: ["We need some bread and some eggs.", "There isn't any bread. There aren't any eggs.", "The butter is in the fridge. The olives are on the shelf."],
          objectives: ["Listen to, read and understand a conversation.", "Read and practise a substitution dialogue.", "Match sentences and pictures.", "Write four sentences about needs.", "Describe location.", "Complete a True / False exercise.", "Correct false statements in writing."], objectivesRef: "جدولَا الخطوتين 3.2 و3.3 — TB ص79–80",
          vocabAttested: ["make", "need", "any", "bread", "eggs", "cheese", "rice", "olives"], vocabRef: "قائمة Vocabulary للخطوة 3.2 (TB ص79) وكلمات أمثلة Language focus للخطوتين 3.2 و3.3؛ مفردات 3.3 مراجعة في الدليل.",
          skills: ["فهم الاحتياجات والتعبير عنها", "فهم وجود وعدم وجود أطعمة ومشروبات معدودة وغير معدودة", "تدريب حوار استبدال وتوصيل الجمل بالصور", "كتابة جمل عن الاحتياجات وتصحيح الجمل الخاطئة"] },
        { ref: "u3g2", steps: "4", materials: "PB19 · WB33 · CS16", topic: "A present for Sam — a conversation", language: ["تركيز لغوي: some / any — a / some / a pair of"],
          objectives: ["Introduce vocabulary and revise definite and indefinite quantity.", "Listen to and read a conversation - inference.", "Solve a puzzle.", "Write four sentences."], objectivesRef: "جدول الخطوة 3.4 — TB ص81",
          vocabAttested: ["cupboard", "scissors", "string", "glue", "paint", "birthday", "wood", "kite"], vocabRef: "من قائمة Vocabulary للخطوة 3.4 (TB ص81)، دون أسماء الشخصيات الواردة في القائمة نفسها.",
          skills: ["الاستماع إلى محادثة وقراءتها للاستنتاج", "حل لغز وكتابة أربع جمل", "مراجعة some/any وa/some/a pair of"] },
        { ref: "u3g3", steps: "5/6", materials: "PB20 · WB34/35 · CS18", topic: "Who will help? — a conversation", language: ["We need something to drink.", "I'll bring some Pepsis."],
          objectives: ["Listen and identify words.", "Read to check listening.", "Practise expressing needs and making offers.", "Match statements and responses.", "Listen to a dialogue and match statements and speakers.", "Complete four sentences."], objectivesRef: "جدولَا الخطوتين 3.5 و3.6 — TB ص83–85",
          vocabAttested: ["will", "help", "party", "something to drink", "something to eat", "bring", "music", "model plane"], vocabRef: "قائمة Vocabulary للخطوة 3.5 (TB ص83)، وmodel plane من مثال Language focus للخطوة 3.6 التي لا مفردات جديدة فيها (TB ص85).",
          skills: ["الاستماع وتحديد الكلمات والمتحدثين", "التعبير عن الاحتياجات وتقديم العروض بـ I'll", "مطابقة العبارات بالردود", "كتابة جمل تقدم عروضًا"] },
        { ref: "u3g4", steps: "7", materials: "PB21 · WB36 · CS19", topic: "A letter from Sam — a personal letter", language: ["Irregular past forms: was / were / had / made / got", "Mrs Brown made Sam a cake."],
          objectives: ["Write past simple forms.", "Scan a letter for use of past simple.", "Read for detail and answer questions in writing.", "Rewrite sentences: direct to indirect object."], objectivesRef: "جدول الخطوة 3.7 — TB ص87",
          vocabAttested: ["lots of", "made", "candle", "got", "flew", "high", "air", "broke", "super", "new", "away"], vocabRef: "من قائمة Vocabulary للخطوة 3.7 (TB ص87) بصيغ الماضي كما وردت أزواجها في الدليل (make/made، get/got، fly/flew، break/broke).",
          skills: ["كتابة صيغ الماضي البسيط وإكمال جدول أفعال", "مسح خطاب بحثًا عن صيغ الماضي", "قراءة تفصيلية وإجابة كتابية", "إعادة كتابة الجمل بين المفعول المباشر وغير المباشر"] },
        { ref: "u3g5", steps: "8/9", materials: "PB22–24 · WB37 · CS20–22", topic: "How people feel — adjectives / Picture prompts and short conversations", songs: ["The kite"], language: ["I am / was frightened / tired / sad / happy / angry."],
          objectives: ["Express moods and states.", "Listen for inference: Workbook check.", "Match pairs of sentences.", "Read and understand short conversations.", "Listen and check.", "Read and perform conversations.", "Sing a song: The kite."], objectivesRef: "جدولَا الخطوتين 3.8 و3.9 — TB ص89–91",
          vocabAttested: ["feel", "feeling", "tired", "frightened", "angry", "sad", "happy", "in time", "way", "long", "say", "tie", "cut", "really", "began"], vocabRef: "قائمتا Vocabulary للخطوتين 3.8 و3.9 (TB ص89–91).",
          skills: ["التعبير عن المشاعر والحالات", "الاستماع والقراءة للاستنتاج", "مطابقة أزواج الجمل", "قراءة محادثات قصيرة وأداؤها"] },
        { ref: "u3g6", steps: "10", materials: "WB38 · CS23", topic: "It's dangerous — a cartoon story", language: ["Irregular past forms: sank / swam / brought"],
          objectives: ["Sing a song: The kite.", "Understand past simple forms.", "Read and understand a cartoon story: sentence order check."], objectivesRef: "جدول الخطوة 3.10 — TB ص92",
          vocabAttested: ["dangerous", "cut", "tie", "piece of", "really", "try", "fished", "sank", "swam", "brought"], vocabRef: "قائمة Vocabulary للخطوة 3.10 (TB ص92) وكلمة dangerous من عنوان الخطوة في ملخص الوحدة (TB ص77).",
          skills: ["فهم صيغ الماضي البسيط غير المنتظم", "قراءة تفصيلية لقصة كرتونية", "ترتيب جمل القصة وإعادة سردها"] },
        { ref: "u3g7", steps: "11", materials: "WB39 · CS24", topic: "Buying food — a substitution dialogue", language: ["Can I have six tomatoes?", "I'd like a packet of butter.", "a carton of milk / a can of 7-up"],
          objectives: ["Retell a cartoon story.", "Talk about food and drink: categorize using container words.", "Read and practise a substitution dialogue.", "Sing a song: The kite."], objectivesRef: "جدول الخطوة 3.11 — TB ص93",
          vocabAttested: ["carton of milk", "can of 7-up", "packet of butter", "tomatoes", "began"], vocabRef: "عبارات العبوات من ملخص الوحدة (TB ص77) وLanguage focus للخطوة 3.11 (TB ص93)؛ قائمة Vocabulary نفسها تقتصر على begin/began وby بمعنى past.",
          skills: ["إعادة سرد قصة كرتونية", "الحديث عن الطعام والشراب وتصنيفهما بكلمات العبوات", "قراءة حوار استبدال والتدرب عليه"] },
        { ref: "u3g8", steps: "12", materials: "PB26/27 · WB40 · CS25", topic: "Asma and Mariam — a cartoon story", language: ["look at", "look for"],
          objectives: ["Read and understand a cartoon story.", "Answer questions in writing.", "Write the story."], objectivesRef: "جدول الخطوة 3.12 — TB ص95",
          vocabAttested: ["look at", "cry", "lost", "worry", "look for", "later", "found", "very much"], vocabRef: "قائمة Vocabulary للخطوة 3.12 (TB ص95).",
          skills: ["قراءة وفهم قصة كرتونية", "الإجابة عن أسئلة كتابةً", "كتابة القصة"] },
        { ref: "u3g9", steps: "13", materials: "WB41/42", topic: "An information gap exercise", language: ["Were you at the beach yesterday? — Yes, I was. / No, I wasn't.", "Did you play football? — Yes, I did. / No, I didn't."],
          objectives: ["Ask and answer about what people did yesterday: an information-gap exercise.", "Write a sentence."], objectivesRef: "جدول الخطوة 3.13 — TB ص96",
          vocabAttested: ["yesterday", "beach", "football", "school"], vocabRef: "حقل Vocabulary للخطوة 3.13 مراجعة (Revision)؛ الكلمات من أمثلة Language focus في TB ص96 وملخص الوحدة TB ص77.",
          skills: ["السؤال والجواب عن أنشطة الأمس في تمرين فجوة معلومات", "كتابة جملة"] },
        { ref: "u3g10", steps: "14", materials: "PB28 · WB43 · CS26", topic: "What did they do last Tuesday? — two diary entries", language: ["Past tense forms: phoned / came / saw"],
          objectives: ["Write past simple forms.", "Read two diary entries for specific information.", "Write a diary entry."], objectivesRef: "جدول الخطوة 3.14 — TB ص98",
          vocabAttested: ["diary", "caught", "dinner", "go for a walk", "snake", "hot", "back", "lunch", "phoned", "came", "saw"], vocabRef: "قائمة Vocabulary للخطوة 3.14 (TB ص98) دون أسماء الشخصيات، وصيغ الماضي من ملخص الوحدة (TB ص77).",
          skills: ["إكمال جدول صيغ الماضي", "قراءة مدخلَي يوميات لاستخراج معلومات محددة", "كتابة مدخل يوميات"] },
        { ref: "u3g11", steps: "15", materials: "WB44/45", topic: "Revision", language: ["What am I drawing?", "You're drawing some butter."],
          objectives: ["Revise vocabulary: reading and writing.", "Play a game: draw and guess."], objectivesRef: "جدول الخطوة 3.15 — TB ص99",
          vocabAttested: ["socks", "fridge", "butter", "trousers", "skirt", "presents"], vocabRef: "حقلا Language focus وVocabulary للخطوة 3.15 مراجعة (Revision)؛ الكلمات والأمثلة من لعبتي التخمين والرسم وإجابة شجرة الكلمات في TB ص99.",
          skills: ["تطوير مفردات الوحدة قراءة وكتابة", "إكمال شجرة كلمات", "قراءة للاستنتاج", "لعبة رسم وتخمين"] }
      ] },
    { n: 4, themeAr: "العروض والمستقبل، رسائل الهاتف، الاتجاهات في المدينة، وصف أحداث ماضية بالماضي المستمر، قصص ومراجعة", tbSummary: "101–102", stepsComplete: true,
      steps: [
        { ref: "u4g0", steps: "1", materials: "PB30 · WB46 · CS27", topic: "Can I help you?", language: ["Can I help you?", "You push and I'll pull.", "I'll get the eggs and you get the milk."],
          objectives: ["Ask for and offer help orally and in writing."], objectivesRef: "جدول الخطوة 4.1 — TB ص103",
          vocabAttested: ["move", "pull", "push", "carried", "reach", "hold"], vocabRef: "قائمة Vocabulary للخطوة 4.1 (TB ص103)؛ carried صيغة الماضي في الزوج carry/carried.",
          skills: ["تقديم عروض المساعدة وقبولها بـ I'll", "الاستماع للمعنى العام والنطق", "كتابة حوار بناءً على نموذج"] },
        { ref: "u4g1", steps: "2", materials: "PB31/32 · WB47 · CS28", topic: "The tree house — a cartoon story", language: ["I want to build a house.", "I'll help you.", "Who helped Tom? Who did Anne help?"],
          objectives: ["Read and understand a cartoon story and contextualize offers of help.", "Develop understanding of question forms."], objectivesRef: "جدول الخطوة 4.2 — TB ص105",
          vocabAttested: ["tree", "build", "hammer", "nail", "just", "got", "ladder", "rope"], vocabRef: "قائمة Vocabulary للخطوة 4.2 (TB ص105)؛ got هنا بمعنى brought/fetched كما فسّرها الدليل.",
          skills: ["فهم الرغبات وعروض المساعدة في سياق قصة", "قراءة تفصيلية", "فهم الفرق بين Who helped Tom؟ وWho did Anne help؟"] },
        { ref: "u4g2", steps: "3/4", materials: "PB33 · WB48/49 · CS29", topic: "Telephone messages", language: ["Future simple: will / won't", "He'll be late. He won't be home until 10 o'clock."],
          objectives: ["Understand how to take messages and write two.", "Talk about future actions.", "Read short sentences and match with pictures.", "Play games relating to messages.", "Extract information from recorded conversations.", "Write messages."], objectivesRef: "جدولَا الخطوتين 4.3 و4.4 — TB ص107–109",
          vocabAttested: ["alone", "take a message", "sports teacher", "match", "start", "ill", "meet", "late", "until", "early"], vocabRef: "قائمتا Vocabulary للخطوتين 4.3 و4.4 (TB ص107–109).",
          skills: ["فهم رسائل الهاتف وكتابتها", "الاستماع لاستخراج معلومات محددة من محادثات مسجلة", "استخدام will/won't لأحداث مستقبلية"] },
        { ref: "u4g3", steps: "5", materials: "PB34 · WB50/52 · CS30 · FCs", topic: "Song: Will you help me? / An information gap exercise", songs: ["Will you help me?"], language: ["Who phoned? Where will he/she be? When?"],
          objectives: ["Learn a song.", "Ask and answer questions to complete an information gap activity."], objectivesRef: "جدول الخطوة 4.5 — TB ص111",
          vocabAttested: ["wait and see", "branches", "soon", "phoned"], vocabRef: "مفردات التعرف المنبّه عليها بنجمة في الخطوة 4.5 (TB ص111)، وphoned من سؤال Language في ملخص الوحدة (TB ص101)؛ عبارة الدليل it won't take long لم تُدرج زرًّا نطقيًا مستقلًا.",
          skills: ["السؤال والجواب عن رسائل الهاتف", "كتابة رسائل", "إكمال نشاط فجوة معلومات بأسئلة الماضي والمستقبل"] },
        { ref: "u4g4", steps: "6/7", materials: "PB35 · WB51 · CS31", topic: "A town plan — directions", language: ["Can you tell me the way to…?", "Go along this road (to the supermarket). Turn left / right (at the school)."],
          objectives: ["Give directions to different locations.", "Follow written directions.", "Sing a song.", "Ask for and give directions orally and in writing.", "Follow spoken directions in a recorded conversation."], objectivesRef: "جدولَا الخطوتين 4.6 و4.7 — TB ص113–115",
          vocabAttested: ["along", "road", "turn", "cross over", "straight on", "left", "right", "bank"], vocabRef: "قائمة Vocabulary وأمثلة الاتجاهات للخطوتين 4.6 و4.7 (TB ص113–115)؛ لا مفردات جديدة منفصلة في 4.7.",
          skills: ["فهم الاتجاهات وطلبها وإعطاؤها شفهيًا وكتابة", "اتباع اتجاهات مكتوبة ومنطوقة", "كتابة اتجاهات على مخطط مدينة"] },
        { ref: "u4g5", steps: "8", materials: "PB36 · WB53 · CS32", topic: "Dave, John and Mrs Evans — a 'read and solve' dialogue", language: ["I'll see you tomorrow.", "She won't be back until next Friday.", "I'll / We'll / They'll help."],
          objectives: ["Understand one side of a written telephone conversation and complete the other side in writing."], objectivesRef: "جدول الخطوة 4.8 — TB ص117",
          vocabAttested: ["into", "too", "missing words", "lady", "tomorrow", "back", "Friday"], vocabRef: "كلمات غير الأسماء من قائمة Vocabulary للخطوة 4.8 (TB ص117) وكلمات أمثلة المستقبل في ملخص الوحدة (TB ص101).",
          skills: ["فهم التسلسل المنطقي لحوار هاتفي", "إكمال الطرف الناقص من المحادثة كتابةً", "استخدام I'll وWe'll وThey'll"] },
        { ref: "u4g6", steps: "9", materials: "PB37 · WB54", topic: "What were they doing? — a reading puzzle", language: ["Past continuous: At 11 o'clock Mary was feeding the cat.", "What were they doing?"],
          objectives: ["Read a short paragraph to contextualize new language.", "Ask and answer questions.", "Write sentences to describe pictures."], objectivesRef: "جدول الخطوة 4.9 — TB ص119",
          vocabAttested: ["cooking", "feed", "garden", "bathroom"], vocabRef: "قائمة Vocabulary للخطوة 4.9 (TB ص119).",
          skills: ["فهم أفعال كانت جارية في نقطة زمنية ماضية والتعبير عنها", "السؤال والجواب بالماضي المستمر", "كتابة جمل تصف صورًا"] },
        { ref: "u4g7", steps: "10/11", materials: "PB38/39 · WB55 · CS33 · FCs", topic: "A road accident — a story in dialogue form", language: ["He was tall. He was wearing a black jacket.", "What does he look like?", "I was shopping."],
          objectives: ["Extract specific information from a recorded conversation.", "Ask for details of a story.", "Read for detail.", "Use information to complete a paragraph."], objectivesRef: "جدولَا الخطوتين 4.10 و4.11 — TB ص121–123",
          vocabAttested: ["out of", "suddenly", "look like", "tall", "the police", "short", "corner", "ambulance", "wait a minute"], vocabRef: "قائمتا Vocabulary للخطوتين 4.10 و4.11 (TB ص121–123)، دون أسماء الشخصيات.",
          skills: ["فهم أحداث ماضية وأوصاف سيارات وأشخاص", "قراءة واستماع لمعلومات محددة", "كتابة وصف موجّه باستخدام الماضي البسيط والمستمر"] },
        { ref: "u4g8", steps: "12", materials: "PB40/41 · WB56 · CS34", topic: "Hassan helps — a cartoon story", language: ["Link-words: First, Next, Then, After that"],
          objectives: ["Read and understand a cartoon story.", "Order sentences and complete a written summary.", "Play a game."], objectivesRef: "جدول الخطوة 4.12 — TB ص124",
          vocabAttested: ["list", "forgot", "kind", "on the way", "people", "opened", "somebody", "next"], vocabRef: "من قائمة Vocabulary للخطوة 4.12 (TB ص124)؛ forgot وopened صيغتا الماضي في أزواج الدليل.",
          skills: ["فهم الطلبات والاتجاهات وعروض المساعدة", "فهم التسلسل المنطقي لنص", "ترتيب الجمل وإكمال ملخص مكتوب"] },
        { ref: "u4g9", steps: "13/14", materials: "PB42 · WB57/58 · CS35", topic: "A story in jumbled sequence", language: ["Past simple / past continuous"],
          objectives: ["Talk about a story using picture prompts.", "Understand the sequence of a story.", "Write a paragraph.", "Answer questions about the past."], objectivesRef: "جدولَا الخطوتين 4.13 و4.14 — TB ص125–126",
          vocabAttested: ["sit down", "said", "took", "sequence"], vocabRef: "sit down وsaid وtook من قائمة Vocabulary للخطوة 4.13 (TB ص125)، وsequence كلمة عنوان/هدف الخطوتين؛ لا مفردات جديدة في 4.14.",
          skills: ["فهم التسلسل المنطقي لقصة مبعثرة", "الحديث عن قصة بمثيرات مصورة", "كتابة فقرة وإملاء والإجابة عن أسئلة الماضي"] },
        { ref: "u4g10", steps: "15", materials: "PB43 · WB58 · CS36", topic: "The white falcon — a serial story", language: ["قراءة للمعنى العام وتخمين المعنى من السياق — Past simple"],
          objectives: ["Understand the first episode of a serial story and predict what will happen in the next episode.", "Develop reading for gist."], objectivesRef: "جدول الخطوة 4.15 — TB ص127",
          vocabAttested: ["asked", "nothing", "lazy", "beautiful", "falcon", "shining", "moon"], vocabRef: "من قائمة Vocabulary للخطوة 4.15 (TB ص127)؛ asked وshining بصيغتي الزوجين ask/asked وshine/shining في الدليل.",
          skills: ["قراءة قصة مسلسلة للمعنى العام", "تخمين معاني كلمات من السياق", "التنبؤ بما سيحدث في الحلقة التالية"] },
        { ref: "u4g11", steps: "16", materials: "PB38/44 · WB59/60", topic: "Revision", language: ["Tom was walking home when he saw an accident.", "A boy was crossing the road when a bicycle hit him."],
          objectives: ["Complete a story in writing.", "Write about self.", "Do a crossword."], objectivesRef: "جدول الخطوة 4.16 — TB ص129",
          vocabAttested: ["crossing", "saw", "walking", "hit", "accident", "bicycle", "road", "home"], vocabRef: "حقل Vocabulary للخطوة 4.16 فارغ (—)؛ الكلمات من كلمات السبورة والمثال التوضيحي لإكمال القصة في TB ص129.",
          skills: ["إكمال فقرة بصيغ الماضي البسيط والمستمر", "الكتابة عن النفس وأنشطة الأمس", "حل كلمات متقاطعة ومراجعة ملخص اللغة"] }
      ] },
    { n: 5, themeAr: "التخييم والخطط والطقس والمسافات، قصص سردية، التسوق والملكية، عمليتا صنع الخيمة والسلطة، قصة صحراوية ومراجعة الأصوات", tbSummary: "131–132", stepsComplete: true,
      steps: [
        { ref: "u5g0", steps: "1–5", materials: "PB45–48 · WB61–64 · CS37–41 · FCs", topic: "Camping / Leisure activities / The weather / Alphabet — I spy", language: ["Where shall we go? Let's … / How about …-ing?", "How far is it to…? — It's about three kilometres.", "What can we do there? — Go horse-riding.", "What shall we do first / next / after that? First we'll go climbing.", "It's raining. The sun is shining."],
          objectives: ["Discuss the topic of camping.", "Ask for and make suggestions.", "Write sentences.", "Ask and answer about distances between places.", "Perform a four-line conversation.", "Ask and answer in writing.", "Talk about what people can do in different locations.", "Perform conversations with substitution.", "Understand a recorded conversation.", "Plan a series of activities and write about them.", "Understand a story and a written conversation.", "Listen to and practise a conversation.", "Listen to a recorded example of I spy and understand the rules.", "Play the game I spy."], objectivesRef: "جداول الخطوات 5.1–5.5 — TB ص133–139",
          vocabAttested: ["go camping", "mountain", "river", "pool", "shall", "year", "map", "key", "lake", "path", "wood", "village", "camp", "scale", "kilometre", "far", "about", "half", "take photographs", "horse-riding", "picnic", "go climbing", "partner", "plans", "sun", "It's raining", "raining", "never mind", "weather", "I spy"], vocabRef: "قوائم Vocabulary للخطوات 5.1–5.5 في TB ص133–139، بما فيها العبارات المنبّه عليها key وscale وpartner وIt's raining؛ تُمرَّر أزرار النطق بصيغة مشفرة آمنة عند وجود فاصلة علوية.",
          skills: ["طلب الاقتراحات وتقديمها وقبولها ورفضها", "السؤال عن المسافات والتعبير عنها شفهيًا وكتابة", "السؤال والجواب عن الأنشطة والاستماع للتفاصيل", "فهم خطط يوم وكتابتها بترتيب الأنشطة", "وصف الطقس ولعب I spy"] },
        { ref: "u5g1", steps: "6/7", materials: "PB49 · WB65–67 · CS42–43", topic: "Two stories about camping", language: ["Past simple + link words: First, Next, After that, Then"],
          objectives: ["Understand the details of a diary extract.", "Retell a diary extract as a story.", "Extract specific information from a recorded conversation.", "Write a narrative text based on the information."], objectivesRef: "جدولَا الخطوتين 5.6 و5.7 — TB ص141–143",
          vocabAttested: ["bad", "goat", "ate", "ran away", "tent", "ran out of", "knocked down", "ran at", "threw", "only", "wrote", "felt", "near", "together", "horse"], vocabRef: "قائمتا Vocabulary للخطوتين 5.6 و5.7 في TB ص141–143، بصيغ الماضي كما تظهر في أزواج الدليل.",
          skills: ["الاستماع لمعلومات محددة", "فهم قصتين عن التخييم وإعادة سردهما شفهيًا وكتابة", "استخدام الماضي البسيط وكلمات الربط التسلسلية"] },
        { ref: "u5g2", steps: "8/9", materials: "PB50/51 · WB68 · CS44–45", topic: "Adnan's story / Hassan's story", language: ["Past simple / past continuous"],
          objectives: ["Listen for specific information.", "Understand the details of a narrative text.", "Write sentences comparing two stories."], objectivesRef: "جدولَا الخطوتين 5.8 و5.9 — TB ص145–146",
          vocabAttested: ["story", "desert", "hour", "place", "potatoes", "laugh", "fire", "star", "sky", "I've got no idea", "go to sleep", "island", "got to", "put up a tent"], vocabRef: "قائمتا Vocabulary للخطوتين 5.8 و5.9 في TB ص145–146؛ got to بمعنى reach كما فسّره الدليل.",
          skills: ["فهم قصتين ومقارنتهما", "قراءة تفصيلية", "كتابة السمات المشتركة بين القصتين باستخدام الماضي البسيط والمستمر"] },
        { ref: "u5g3", steps: "10", materials: "PB52 · WB69 · CS46", topic: "A map and narrative text", songs: ["I say, you say"], language: ["اتباع تعليمات مكتوبة على خريطة — Sounds and letters / Rhyming pairs"],
          objectives: ["Follow written instructions on a map.", "Learn a song."], objectivesRef: "جدول الخطوة 5.10 — TB ص147",
          vocabAttested: ["parrot", "another", "left", "which", "kilometre"], vocabRef: "قائمة Vocabulary للخطوة 5.10 (TB ص147)؛ kilometre هي الصورة الكاملة التي يشرح بها الدليل اختصار km.",
          skills: ["اتباع تعليمات مكتوبة على خريطة", "التمييز بين الأصوات والحروف وأزواج القافية"] },
        { ref: "u5g4", steps: "11–13", materials: "PB53–55 · WB70–72 · CS47 · FCs", topic: "Shopping — a reading puzzle / Uncle Ali's farm — a cartoon story", language: ["Whose rubber is this? — It's mine / yours / Nadia's.", "Whose dolls are these? — They're mine / yours.", "This is my hammer. / This hammer is mine."],
          objectives: ["Talk about possession.", "Contextualize the language of possession by understanding the details of a cartoon story.", "Express possession in writing.", "Categorize vocabulary.", "Read and understand a cartoon story."], objectivesRef: "جداول الخطوات 5.11–5.13 — TB ص148–151",
          vocabAttested: ["whose", "mine", "yours", "vegetable", "cucumber", "lettuce", "celery", "tractor", "hers", "ours", "theirs", "uncle", "pick", "one", "ones", "too small"], vocabRef: "قوائم Vocabulary للخطوات 5.11–5.13 في TB ص148–151، دون أسماء الشخصيات؛ أُدرجت too small بصيغتها السياقية كما تظهر too (small) في قائمة 5.13.",
          skills: ["السؤال والحديث والكتابة عن الملكية", "قراءة للاستنتاج وفهم تسلسل قصة", "تصنيف فاكهة وخضروات واستخدام ضمائر الملكية والإشارة"] },
        { ref: "u5g5", steps: "14", materials: "PB56 · WB73", topic: "Making a tent / Making a salad", language: ["Past simple + link words: First, Next, After that, Then"],
          objectives: ["Describe a process.", "Understand and sequence a written process."], objectivesRef: "جدول الخطوة 5.14 — TB ص153",
          vocabAttested: ["show", "salad", "cut up", "mix", "bowl", "tent", "carpet", "rope", "stone"], vocabRef: "قائمة Vocabulary للخطوة 5.14 (TB ص153)، وكلمات tent وcarpet وrope وstone من تقديم وعملية صنع الخيمة الصريحة في ملاحظة الخطوة نفسها وقائمة كلمات Unit 5 (TB ص153 و160).",
          skills: ["فهم عملية ووصفها", "ربط الأفكار بكلمات التسلسل", "إكمال فقرتين عن صنع خيمة وسلطة"] },
        { ref: "u5g6", steps: "15/16", materials: "WB74", topic: "In the desert — a picture composition", language: ["Last Friday I was in the desert. I was getting some cushions from the car.", "Suddenly some goats ran through the camp. One goat ate a cushion."],
          objectives: ["Tell a story from picture prompts.", "Write a diary entry."], objectivesRef: "جدولَا الخطوتين 5.15 و5.16 — TB ص155–157",
          vocabAttested: ["quiet", "through", "put out", "desert", "camp", "goats", "cushions", "car", "suddenly"], vocabRef: "قائمة Vocabulary للخطوة 5.15 (TB ص155) وكلمات النسخة المختصرة الصريحة للقصة في ملاحظات الخطوة 5.16 (TB ص157)؛ لا مفردات جديدة في 5.16.",
          skills: ["الحديث عن قصة وكتابتها من صور", "استخدام الماضي المنقطع: حدث جارٍ يقاطعه حدث مفاجئ", "كتابة مسودة ومدخل يوميات نهائي"] },
        { ref: "u5g7", steps: "17", materials: "PB57 · WB75 · CS48", topic: "The white falcon — a serial story", language: ["The falcon pulled meat from my hand."],
          objectives: ["Recall the previous episodes of a serial story and predict what will happen next.", "Read the second episode for gist.", "Develop the skill of working out meaning from context."], objectivesRef: "جدول الخطوة 5.17 — TB ص158",
          vocabAttested: ["wake up", "dream", "shouted", "frighten", "towards", "held", "careful", "bite", "broken", "standing", "tied", "small", "fed", "also", "find out"], vocabRef: "قائمة Vocabulary للخطوة 5.17 (TB ص158)، بصيغ الماضي كما في أزواج الدليل عند وجودها.",
          skills: ["تذكر الحلقة السابقة والتنبؤ بالحلقة التالية", "قراءة الحلقة الثانية للمعنى العام", "استخراج معاني الكلمات من السياق"] },
        { ref: "u5g8", steps: "18", materials: "PB52/58 · WB76", topic: "Revision", language: ["Rhyming pairs: camp / lamp", "Song: I say, you say"],
          objectives: ["Language awareness - rhyming pairs.", "Do a word tree."], objectivesRef: "جدول الخطوة 5.18 — TB ص159",
          vocabAttested: ["soon", "wood", "camp", "boat", "lamp"], vocabRef: "soon هي كلمة Vocabulary الوحيدة المنبّه عليها في رأس الخطوة 5.18 (TB ص159)، والأربع الأخرى كلمات مثال أزواج القافية على السبورة في الملاحظات نفسها.",
          skills: ["مطابقة الأصوات وأزواج القافية", "إكمال شجرة كلمات", "مراجعة ملخص لغة الوحدة وبناء جمل باستبدال الكلمات"] }
      ] },
    { n: 6, themeAr: "الحيوانات وحديقة الحيوان: الوصف والوقت والالتزام والتفضيل وتركيب الجمل وكتابة زيارة شخصية وحلقة الصقر الثالثة ومراجعة الألغاز", tbSummary: "161–162", stepsComplete: true,
      steps: [
        { ref: "u6g0", steps: "1/2", materials: "PB59 · WB77/78 · CS49", topic: "Appearances / habitat / habits of five animals — descriptive texts", language: ["Present simple for description", "It is brown. It has long ears.", "The mountain zebra is black and white. It lives in the mountains. It eats grass."],
          objectives: ["Read for detail.", "Extract specific information from a recorded text.", "Write a descriptive paragraph based on a chart.", "Write a second paragraph based on known information."], objectivesRef: "جدولَا الخطوتين 6.1 و6.2 — TB ص163–165",
          vocabAttested: ["long-eared owl", "sleep", "daytime", "well", "Fennec fox", "zebra", "otter", "rattlesnake", "America", "hole", "grass"], vocabRef: "قائمة Vocabulary للخطوة 6.1 (TB ص163)؛ قائمة 6.2 شرطة، فلا مفردات جديدة منسوبة إليها.",
          skills: ["قراءة تفصيلية عن مظهر الحيوان وبيئته وعاداته", "استماع لمعلومات محددة", "كتابة أوصاف حيوانات موجّهة بالمضارع البسيط"] },
        { ref: "u6g1", steps: "3", materials: "WB78/79", topic: "Zoo signs / Telling the time", language: ["twenty past three — three twenty", "eleven thirty — half past eleven", "four forty-five — quarter to five"],
          objectives: ["Read to interpret signs and work out the meaning of words.", "Talk about activities at the zoo.", "Express the time in two forms.", "Do two puzzles."], objectivesRef: "جدول الخطوة 6.3 — TB ص166",
          vocabAttested: ["sign", "Way out", "animal", "ride", "learn about", "dangerous", "feeding times", "half past", "quarter to"], vocabRef: "أول خمس عبارات من قائمة Vocabulary للخطوة 6.3 (TB ص166)، والباقي ألفاظ لافتات/وقت صريحة في مراحل TB ص166–167.",
          skills: ["تفسير لافتات حديقة الحيوان وتصنيف معانيها", "الحديث عمّا يمكن فعله في حديقة الحيوان", "التعبير عن الوقت بصيغتين وحل لغزين"] },
        { ref: "u6g2", steps: "4/6", materials: "PB60–62 · WB80/81 · CS50–52 · FCs", topic: "At the zoo — a cartoon story / Obligation and comparison", songs: ["We're going to the zoo"], language: ["have to for obligation: We have to find these animals.", "Superlatives: the biggest / smallest / fastest / tallest", "Bear is the shortest word."],
          objectives: ["Compare sizes of objects.", "Express obligation.", "Read and answer detailed questions in writing.", "Read and understand a cartoon story.", "Write a dictation.", "Learn a song.", "Extract specific information from a recorded text."], objectivesRef: "جداول الخطوات 6.4–6.6 — TB ص168–171",
          vocabAttested: ["homework", "have to", "biggest", "smallest", "tallest", "shortest", "fastest", "others", "elephant", "cheetah", "mouse", "bear", "monkey", "giraffe", "longest", "class", "try", "cage", "rhinoceros", "gazelle", "spider", "art", "best"], vocabRef: "قوائم Vocabulary للخطوات 6.4–6.6 في TB ص168–171، دون أسماء الشخصيات Sue وPat.",
          skills: ["إجابة كتابية عن أسئلة فهم قصة كرتونية", "قراءة وفهم قصة في حديقة الحيوان", "استماع لمعلومات محددة واستخدام التفضيل الأعلى والالتزام"] },
        { ref: "u6g3", steps: "7/8", materials: "PB62–64 · WB82/83 · CS53/54", topic: "Fatma, Yasmin and Mariam — a school assignment / Preference", songs: ["We're going to the zoo"], language: ["What is your favourite animal? — My favourite animal is the lion.", "Reference: it, she, both, mine, yours"],
          objectives: ["Learn a song.", "Express preference.", "Read for detail and complete a multiple choice exercise.", "Identify reference in a text.", "Read for specific information.", "Work out the meaning of words in context.", "Complete a summary of the story.", "Write a sentence."], objectivesRef: "جدولَا الخطوتين 6.7 و6.8 — TB ص172–173",
          vocabAttested: ["favourite", "both", "word", "it", "she", "mine", "yours", "classroom", "sat down", "hold up", "slowly", "front", "Well done", "opposite"], vocabRef: "قائمتا Vocabulary للخطوتين 6.7 و6.8 وLanguage focus الخاص بالتفضيل وكلمات الإحالة في TB ص172–173؛ Well done من دون نقطة أخيرة حتى تعمل زر نطقًا وحيدًا.",
          skills: ["قراءة حوار ونص سردي بالتفصيل", "فهم العلاقات وكلمات الإحالة بين الجمل", "إكمال فقرة/ملخص وبيان الحيوان المفضل وسببه"] },
        { ref: "u6g4", steps: "9", materials: "PB65 · WB84 · CS55", topic: "Hassan Ali — zoo-keeper — a descriptive text", language: ["Hassan Ali is a zoo-keeper. He works at the zoo.", "He cleans their cages. He gets their food ready.", "Reference: they, it, their, them"],
          objectives: ["Extract specific information from a recorded text.", "Read for detail."], objectivesRef: "جدول الخطوة 6.9 — TB ص175",
          vocabAttested: ["zoo", "keeper", "zoo-keeper", "work", "lion", "nearby", "ready", "get ready", "take care of"], vocabRef: "قائمة Vocabulary للخطوة 6.9 (TB ص175) وعنوانها/عبارات دراستها اللغوية (zoo-keeper، get ready) ومناقشة العناية بالحيوانات في TB ص175–176، دون اسم Simba.",
          skills: ["فهم روتين وعادات عامل يومية بالمضارع البسيط", "استماع لمعلومات محددة وقراءة تفصيلية", "تحديد معاني كلمات الإحالة في النص"] },
        { ref: "u6g5", steps: "10", materials: "WB85", topic: "Making a sentence", language: ["Subject / verb / object", "Hassan cleans the cages in the morning.", "The owl eats small animals."],
          objectives: ["Identify and construct subject / verb / object sentences."], objectivesRef: "جدول الخطوة 6.10 — TB ص177",
          vocabAttested: ["subject", "verb", "object", "sentence", "who", "what", "when"], vocabRef: "المصطلحات الثلاثة الأولى هي Vocabulary المنبّه عليها في الخطوة 6.10 (TB ص177)، والباقي كلمات وظيفية يستخدمها شرح تحليل الجملة في الصفحة نفسها.",
          skills: ["فهم بناء الجملة Subject / verb / object", "تحليل جمل إلى فاعل وفعل ومفعول وظرف", "بناء أسئلة Who / What / When من أجزاء الجملة"] },
        { ref: "u6g6", steps: "11", materials: "WB86 · CS56 · FCs", topic: "Activities / Animals / Inability and obligation", language: ["Do you want to come to the zoo? — I can't. I have to help my father.", "Let's go tomorrow. — I'll have to ask my father.", "The monkey is on the lion's cage."],
          objectives: ["Practise a four-line conversation."], objectivesRef: "جدول الخطوة 6.11 — TB ص179",
          vocabAttested: ["look after", "zoo", "today", "tomorrow", "shop", "monkey", "lion", "cage"], vocabRef: "look after هي كلمة Vocabulary الوحيدة المنبّه عليها في الخطوة 6.11 (TB ص179)، والباقي كلمات من نص الحوارين ومثال وصف الموقع في TB ص161 و179–180.",
          skills: ["تقديم اقتراح ورفضه مع بيان سبب وبديل زمني", "ممارسة محادثة من أربعة أسطر وتمثيلها", "وصف موقع حيوان كتابة بعبارات مثل on"] },
        { ref: "u6g7", steps: "12", materials: "WB87", topic: "Paragraph writing — a personal account of a zoo visit", language: ["Past tense + link words", "Mahmoud went to the zoo last year. He went with his uncle. They went by car."],
          objectives: ["Write a personal account of a visit to the zoo."], objectivesRef: "جدول الخطوة 6.12 — TB ص181",
          vocabAttested: ["went to the zoo", "last week", "on Monday", "last year", "by car", "first draft", "final version"], vocabRef: "قائمة Vocabulary في الخطوة 6.12 شرطة (TB ص181)؛ هذه عبارات من أمثلة إعداد الكتابة وعنواني مرحلتي المسودة والنسخة النهائية في الصفحة، لا قائمة مفردات جديدة منسوبة للخطوة.",
          skills: ["الإجابة عن أسئلة تحضيرية قبل الكتابة", "كتابة مسودة سرد شخصي بصيغة فقرات وكلمات ربط", "مراجعة النص مع شريك وكتابة نسخة نهائية"] },
        { ref: "u6g8", steps: "13", materials: "PB66 · WB88 · CS57", topic: "The white falcon — a serial story", language: ["Past simple", "Then we asked Yousif, an old farmer from the mountains."],
          objectives: ["Recall the previous episodes of a serial story and predict what will happen next.", "Read the third episode for gist.", "Develop the skill of working out meaning from context."], objectivesRef: "جدول الخطوة 6.13 — TB ص182",
          vocabAttested: ["everybody", "farmer", "turn round", "sadly", "take care of", "find out", "fly away"], vocabRef: "قائمة Vocabulary للخطوة 6.13 والأفعال المركبة على السبورة (TB ص182)، بصيغتها الأساسية في الشرح؛ استُبعدت أسماء الأشخاص Yousif وSheikh وAbdullah.",
          skills: ["تذكر الحلقات السابقة والتنبؤ بالحلقة الثالثة", "قراءة الحلقة الثالثة للمعنى العام وترتيب الصور", "استنتاج معاني الأفعال المركبة من السياق"] },
        { ref: "u6g9", steps: "14", materials: "PB67 · WB89/90", topic: "Revision", language: ["Consolidation — language summary substitutions"],
          objectives: ["Do a crossword.", "Match rhyming words.", "Write about self."], objectivesRef: "جدول الخطوة 6.14 — TB ص184 (تُستخرج 6.I4 نصيًا)",
          vocabAttested: ["crossword", "rhyming words", "have to", "every day", "in the afternoon"], vocabRef: "قائمة Vocabulary في الخطوة 6.14 شرطة (TB ص184)؛ هذه مصطلحات المهام المستعملة في الأهداف ومرحلة الكتابة عن النفس، لا مفردات كتاب جديدة منسوبة للمراجعة.",
          skills: ["تنفيذ أنشطة ألغاز: كلمات متقاطعة وقوافٍ", "مراجعة ملخص لغة الوحدة وبناء جمل بالاستبدال", "كتابة ما يجب على الطالب فعله يوميًا وبعد الظهر"] }
      ] },
    { n: 7, themeAr: "المهن وأطموحات المستقبل والعائلة وتكوين الكلمات، المتجر والكمية والأزمنة، يوم سائق سيارة الأجرة، مسابقة ومقابلة ومراجعة شاملة", tbSummary: "186–187", stepsComplete: true,
      steps: [
        { ref: "u7g0", steps: "1/2", materials: "PB68/69 · WB91/92 · CS58/59 · FCs", topic: "Job categories", language: ["Who works outside? — A builder.", "Who works inside? Who makes things?", "A dentist takes care of people's teeth.", "A carpenter makes tables and chairs from wood."],
          objectives: ["Ask and answer questions about job categories.", "Discuss own families.", "Understand written descriptions of jobs.", "Understand the gist of three recorded conversations."], objectivesRef: "جدولَا الخطوتين 7.1 و7.2 — TB ص188–190",
          vocabAttested: ["outside", "builder", "painter", "inside", "housewife", "shopkeeper", "secretary", "carpenter", "potter", "dressmaker", "baker", "doctor", "dentist", "nurse", "different", "taxi-driver", "bus-driver", "fisherman", "type", "other"], vocabRef: "قائمتا Vocabulary للخطوتين 7.1 و7.2 في TB ص188–190.",
          skills: ["تصنيف الوظائف بحسب مكان العمل وما تصنعه", "فهم أوصاف وظائف مكتوبة", "استماع للمعنى العام لثلاث محادثات عن العمل"] },
        { ref: "u7g1", steps: "3/4", materials: "PB70 · WB93", topic: "Family relationships / Career ambitions", language: ["Amal is Ali's sister.", "My brother is / wants / would like to be a farmer.", "Amal is Fatma's mother.", "My sister, Amal, is a nurse."],
          objectives: ["Understand the meaning of words in context.", "Follow a diagram of family relationships.", "Describe family relationships orally and in writing.", "Talk about jobs.", "Write three descriptions."], objectivesRef: "جدولَا الخطوتين 7.3 و7.4 — TB ص192–194",
          vocabAttested: ["son", "daughter", "follow", "arrow", "cousin", "aunt", "air-hostess", "brother", "sister", "father", "mother", "farmer"], vocabRef: "قائمة Vocabulary للخطوة 7.3 (TB ص192)؛ قائمة 7.4 شرطة، وكلمات القرابة/المهن الأخيرة من مخطط وأمثلة TB ص192–194 وملخص ص186.",
          skills: ["اتباع مخطط علاقات عائلية ووصفه شفهيًا وكتابة", "استخدام الملكية 's لبيان القرابة", "الحديث عن وظائف وطموحات أفراد العائلة بwant/would like to be"] },
        { ref: "u7g2", steps: "5/6", materials: "PB71 · WB94/95/96 · CS60/61", topic: "Song: What can I be? / Word formation", songs: ["What can I be?"], language: ["What job do you want when you leave school?", "I'd like to be a builder.", "Word formation: teach (verb) → teacher (noun)", "have to for obligation / Future tenses"],
          objectives: ["Learn a song.", "Extract specific information from a recorded conversation.", "Spelling.", "Understand word formation.", "Label descriptions of jobs."], objectivesRef: "جدولَا الخطوتين 7.5 و7.6 — TB ص195–197",
          vocabAttested: ["nothing", "circle", "pilot", "grow", "clinic", "sell", "office", "worse", "bake", "teach", "teacher"], vocabRef: "قائمتا Vocabulary للخطوتين 7.5 و7.6 في TB ص195–197، وزوج teach/teacher من مثال تكوين الكلمات الصريح في TB ص197.",
          skills: ["استماع لحوار لاستخراج معلومات وظائف محددة", "فهم تكوين أسماء وظائف من أفعال بلاحقة -er", "تعليم أوصاف وظائف وإملاء أسمائها"] },
        { ref: "u7g3", steps: "7/8", materials: "PB72/73 · WB97/98 · CS62/63", topic: "The Everything Shop — food / furniture / toys / clothes", language: ["Can you (clean the floor), please?", "I did that an hour ago. / I'm doing that now. / I'll do that in a minute.", "How much / many …?", "I'd like some butter, please. — How much? — A kilo, please."],
          objectives: ["Listen to identify words.", "Read a conversation for detailed understanding.", "Practise a conversation with substitution.", "Talk about countability and uncountability.", "Practise conversations with substitution."], objectivesRef: "جدولَا الخطوتين 7.7 و7.8 — TB ص198–200",
          vocabAttested: ["ago", "everything", "How much", "Excuse me", "kilo", "count", "carpets", "sofas", "beds", "model boats", "dolls", "video games", "sandals", "shorts", "dresses", "meat", "sandwiches", "fruit", "eggs", "tea", "rice", "sugar", "butter", "pencils"], vocabRef: "قائمتا Vocabulary للخطوتين 7.7 و7.8 (TB ص198–200)، وعبارات/أصناف إعلان المتجر وأمثلة المعدود وغير المعدود الصريحة في TB ص198–201.",
          skills: ["تصنيف مفردات المتجر إلى طعام وأثاث وألعاب وملابس", "قراءة محادثة بالتفصيل ومراجعة الماضي والحاضر المستمر والمستقبل", "التعبير عن الرغبة والسؤال عن الكمية بHow much/How many"] },
        { ref: "u7g4", steps: "9", materials: "PB73 · WB99/100 · CS63 · FCs", topic: "An information gap exercise — quantity", language: ["How much rice did Nadia buy?", "How many cucumbers did Nadia buy?", "Writing a series: commas + and"],
          objectives: ["Complete an information gap activity.", "Write sentences based on a chart."], objectivesRef: "جدول الخطوة 7.9 — TB ص202",
          vocabAttested: ["litre", "rice", "sugar", "cucumbers", "water", "orange juice", "milk", "half a kilo"], vocabRef: "litre هي كلمة Vocabulary الوحيدة المنبّه عليها في الخطوة 7.9 (TB ص202)، والباقي أصناف وكميات الأمثلة الصريحة في مراحل الصفحة نفسها.",
          skills: ["تبادل معلومات ناقصة بالأسئلة لإكمال جدول شراء", "السؤال والجواب عن كميات بالماضي البسيط", "كتابة جمل بسلسلة عناصر تفصلها فواصل وand أخيرة"] },
        { ref: "u7g5", steps: "10", materials: "PB74/75 · WB101 · CS64", topic: "A taxi-driver's day — a cartoon story", language: ["Ordering a cartoon story in logical sequence", "Why did Hassan drive fast?"],
          objectives: ["Read and understand a cartoon story.", "Show understanding by ordering sentences."], objectivesRef: "جدول الخطوة 7.10 — TB ص203",
          vocabAttested: ["quickly", "airport", "slowly", "stop", "start", "ill", "well", "fast", "slow", "lost", "found"], vocabRef: "قائمة Vocabulary للخطوة 7.10 (TB ص203) وأزواج الأضداد التي يعرضها تقديم الملاحظة في الصفحة نفسها.",
          skills: ["فهم تسلسل قصة كرتونية منطقيًا وترتيب جملها", "مناقشة صور وأسباب أحداث قصة سائق الأجرة", "الإجابة كتابة عن أسئلة فهم وآراء في الوظيفة"] },
        { ref: "u7g6", steps: "11", materials: "PB74/75 · WB102 · CS64/65", topic: "A quiz show — asking and answering about jobs", language: ["Do you take care of people?", "Do you make things?", "Are you a baker? — Yes, I'm a baker."],
          objectives: ["Perform a story.", "Extract specific information from a recorded conversation.", "Play a guessing game."], objectivesRef: "جدول الخطوة 7.11 — TB ص205",
          vocabAttested: ["pot", "workshop", "baker", "nurse", "secretary", "uniform", "office", "type"], vocabRef: "قائمة Vocabulary للخطوة 7.11 (TB ص205) ووظائف/ألفاظ نص برنامج المسابقة المطبوع في TB ص206؛ type بمعنى يكتب على الآلة/لوحة المفاتيح في سياق السكرتيرة.",
          skills: ["أداء قصة سائق الأجرة بأدوار", "استماع لبرنامج مسابقة واستخراج وظائف من إجابات Yes/No", "طرح أسئلة تخمين وظائف وكتابة أوصافها"] },
        { ref: "u7g7", steps: "12", materials: "WB103", topic: "An interview with a nurse", language: ["Where do you work?", "Do you have to wear a uniform?", "Would you like to be a doctor?"],
          objectives: ["Complete one speaker's part of a conversation by writing questions."], objectivesRef: "جدول الخطوة 7.12 — TB ص207",
          vocabAttested: ["Red Crescent", "uniform", "hard", "nurse", "hospital", "doctor"], vocabRef: "قائمة Vocabulary للخطوة 7.12 (TB ص207) وكلمات أسئلة المقابلة الرئيسة في إجابات/حلول الملاحظة نفسها.",
          skills: ["تشكيل أسئلة شفهيًا وكتابة لإكمال حوار من طرف واحد", "كتابة رأي في وظيفة ممرضة مع أسباب", "إعداد وأداء مقابلة عمل ثنائية"] },
        { ref: "u7g8", steps: "13/15", materials: "PB76/77 · WB104/106", topic: "Revision", language: ["Who is Ali's son?", "Subject / verb / object", "Consolidation — language summary substitutions"],
          objectives: ["Read for gist.", "Identify subject / verb / object sentences.", "Read and understand family relationships.", "Do two puzzles.", "Write a descriptive paragraph.", "Do a reading puzzle."], objectivesRef: "جداول الخطوات 7.13–7.15 — TB ص208–210",
          vocabAttested: ["sometimes", "passenger", "seat", "wooden", "sick", "subject", "verb", "object", "carpenter", "fisherman", "taxi-driver", "housewife", "shoes"], vocabRef: "قائمة Vocabulary للخطوة 7.13 (TB ص208)؛ قائمتا 7.14 و7.15 شرطتان، والباقي مصطلحات/كلمات مهام صريحة في مراحل TB ص208–210 لا مفردات جديدة منسوبة لقائمتي الخطوتين.",
          skills: ["قراءة للمعنى العام وتخمين وظائف من أوصاف", "قراءة لحل لغزي عائلة وملكية أحذية", "كتابة عن الوظائف وفقرة وصفية ومراجعة بناء الجملة"] }
      ] }
  ],
  /* Visual transcriptions of scanned PB/WB pages. Each record is deliberately kept
     below Verified until a second human compares it with the page image. Scanned
     page images themselves are not reproduced in the UI. */
  bookTranscriptions: [
    { id: "u1-wb01-1-1a", unit: 1, stepRef: "u1g0", book: "WB", printedPage: 1, pdfPage: 3, exercise: "1.1A", kind: "exercise", instruction: "Make the words.",
      lines: ["1. Picture: bag — letters: a, b, g — ___ ___ ___", "2. Picture: table — letters: a, b, e, l, t — ___ ___ ___ ___ ___", "3. Picture: desk — letters: d, e, k, s — ___ ___ ___ ___", "4. Picture: pencil — letters: c, e, i, l, n, p — ___ ___ ___ ___ ___ ___", "5. Picture: rubber — letters: b, b, e, r, r, u — ___ ___ ___ ___ ___ ___", "6. Picture: book — letters: b, k, o, o — ___ ___ ___ ___"],
      visualNote: "أسماء الصور الست وصف بصري للرسوم في مواضعها؛ الكلمات نفسها ليست مطبوعة بجانب الصور." },
    { id: "u1-wb01-1-1b", unit: 1, stepRef: "u1g0", book: "WB", printedPage: 1, pdfPage: 3, exercise: "1.1B", kind: "exercise", instruction: "Find the colours.",
      lines: ["1. bryellowgs ______", "2. adbrownel ______", "3. hrswhitej ______", "4. trbluedxc ______", "5. imblacksr ______", "6. bkhredlru ______", "7. sngreenve ______"],
      visualNote: "كل سلسلة حروف متبوعة بسطر إجابة كما في الصفحة." },
    { id: "u1-wb02-1-2a", unit: 1, stepRef: "u1g0", book: "WB", printedPage: 2, pdfPage: 4, exercise: "1.2A", kind: "exercise", instruction: "Read and draw lines. Write.",
      lines: ["Left column, top to bottom: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen.", "Centre numerals, top to bottom: 4, 7, 6, 1, 3, 2, 5, 10, 12, 15, 14, 9, 11, 8, 13.", "Right column repeats one to fifteen in order, with a writing line after each word; a worked line joins one to 1."],
      visualNote: "نُقل ترتيب الأعمدة الثلاثة كما يظهر من أعلى الصفحة إلى أسفلها." },
    { id: "u1-wb02-1-2b", unit: 1, stepRef: "u1g0", book: "WB", printedPage: 2, pdfPage: 4, exercise: "1.2B", kind: "exercise", instruction: "Read, think and write.",
      lines: ["T = Transport    F = Family", "mother — F", "father — ___", "car — ___", "bus — ___", "plane — ___", "brother — ___", "bicycle — ___", "sister — ___", "boat — ___"],
      visualNote: "حرف F بجانب mother مطبوع كنموذج محلول في الصفحة." },
    { id: "u1-pb01-song-apples", unit: 1, stepRef: "u1g1", book: "PB", printedPage: 1, pdfPage: 4, exercise: "Songs", kind: "song", instruction: "Sing the songs.", title: "I like apples.",
      lines: ["I like apples.", "I like dates.", "Do you like apples?", "Do you like dates?", "Yes. I like apples", "and I like dates.", "Do you like bananas?", "Do you like cakes?", "No. I don't like bananas", "and I don't like cakes.", "I like apples", "and I like dates."],
      visualNote: "واحدة من الأغاني الثلاث في صفحة PB المطبوعة 1؛ لا تُعرض صورة الصفحة نفسها في الواجهة." },
    { id: "u1-wb03-1-3a", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 3, pdfPage: 5, exercise: "1.3A", kind: "exercise", instruction: "Write the words in the correct places.",
      lines: ["Word box: juice, dates, chicken, coffee / tea, lamb, milk, oranges / water, eggs, Pepsi, rice.", "Food — six writing lines.", "Drink — six writing lines."],
      visualNote: "يظهر بجانب Food رسم جبن مكتوب عليه CHEESE، وبجانب Drink زجاجة Pepsi؛ لم تُنسخ الصور إلى الواجهة." },
    { id: "u1-wb03-1-3b", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 3, pdfPage: 5, exercise: "1.3B", kind: "exercise", instruction: "Ask and answer.",
      lines: ["Do you like dates? — Yes, I do.", "Do you like lamb? — No, I don't."],
      visualNote: "تظهر dates وlamb بوصفهما بديلين داخل إطار سؤال واحد في الصفحة." },
    { id: "u1-wb03-1-3c", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 3, pdfPage: 5, exercise: "1.3C", kind: "writing", instruction: "Write.",
      lines: ["Four blank writing lines follow the instruction."],
      visualNote: "لا توجد جملة بادئة مطبوعة إضافية مقروءة في هذا القسم." },
    { id: "u1-wb04-1-4a", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 4, pdfPage: 6, exercise: "1.4A", kind: "exercise", instruction: "Re-order and write.",
      lines: ["1. you    Do    bananas?    like", "2. cheese?    like    Does    she", "3. like    Ali and Fatma    Do    fish?"],
      visualNote: "حُفظ ترتيب الكلمات المبعثر وعلامات الاستفهام كما تظهر، وتحت كل بند سطر لكتابة السؤال المرتب." },
    { id: "u1-wb04-1-4b", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 4, pdfPage: 6, exercise: "1.4B", kind: "exercise", instruction: "Write 1 - 7.",
      lines: ["Friday [ ]    Monday [ ]", "Saturday [1]    Tuesday [ ]    Thursday [ ]", "Wednesday [ ]    Sunday [ ]"],
      visualNote: "رقم 1 مطبوع بجانب Saturday كنقطة بداية ظاهرة في الصفحة." },
    { id: "u1-wb04-1-4c", unit: 1, stepRef: "u1g1", book: "WB", printedPage: 4, pdfPage: 6, exercise: "1.4C", kind: "exercise", instruction: "Read and answer.",
      lines: ["Do you come to school on Monday?", "Yes = ✓    No = ✗", "Sat. | Sun. | Mon. | Tue. | Wed. | Thur. | Fri.", "I don't come to school on ______________________________", "______________________________________________________"],
      visualNote: "تظهر اختصارات الأيام السبعة في صف واحد قبل جملة الإكمال." },
    { id: "u1-pb02-not-located", unit: 1, stepRef: "u1g2", book: "PB", printedPage: 2, pdfPage: null, exercise: "Reading puzzle – daily routine (Contents listing)", kind: "source-gap", instruction: "", title: "PB printed page 2 was not located in the supplied scan sequence.",
      lines: [], status: "not-located-in-supplied-scan",
      visualNote: "بعد صفحة Contents في PB PDF ص3 تأتي الصفحة المطبوعة 1 في PDF ص4 ثم الصفحة المطبوعة 3 في PDF ص5؛ لذلك لم تُنسخ أو تُنسب أي كلمات إلى PB2. العنوان هنا من Contents فقط." },
    { id: "u1-wb05-1-5a", unit: 1, stepRef: "u1g2", book: "WB", printedPage: 5, pdfPage: 7, exercise: "1.5A", kind: "exercise", instruction: "Ask and answer.",
      lines: ["When does Tom get up?", "get up — Tom: 7 o'clock; Fatma: 5 o'clock.", "have breakfast — Tom: 8 o'clock; Fatma: 6 o'clock.", "go to school — Tom: 9 o'clock; Fatma: 7 o'clock.", "go home — Tom: 4 o'clock; Fatma: 1 o'clock.", "go to bed — Tom: 10 o'clock; Fatma: 9 o'clock."],
      visualNote: "الأوقات قراءة بصرية لعقارب عشر ساعات تناظرية، وليست أرقامًا مطبوعة؛ لذلك تظل جزءًا من النسخ قيد المراجعة البشرية الثانية." },
    { id: "u1-wb05-1-5b", unit: 1, stepRef: "u1g2", book: "WB", printedPage: 5, pdfPage: 7, exercise: "1.5B", kind: "writing", instruction: "Write about Tom.",
      lines: ["Tom gets up at __________ o'clock. He ________ breakfast", "at __________ o'clock. He ________ ______ school", "at __________ o'clock. He ________ home at __________", "o'clock. He __________ ______ bed at ________ o'clock."],
      visualNote: "حُفظ توزيع الفقرة ذات الفراغات على الأسطر الأربعة كما يظهر في الصفحة." },
    { id: "u1-wb05-1-5c", unit: 1, stepRef: "u1g2", book: "WB", printedPage: 5, pdfPage: 7, exercise: "1.5C", kind: "writing", instruction: "Write about yourself.",
      lines: ["Four blank writing lines follow the instruction."],
      visualNote: "لا توجد جملة بادئة إضافية في هذا القسم." },
    { id: "u1-pb03-1-6-bill", unit: 1, stepRef: "u1g3", book: "PB", printedPage: 3, pdfPage: 5, exercise: "1.6", kind: "dialogue", instruction: "Read and write. WB Page 6", title: "Bill",
      lines: ["Tom: What's your name?", "Bill: Bill. B-i-l-l.", "Tom: How old are you?", "Bill: Thirteen.", "Tom: Where are you from?", "Bill: I'm from England.", "Tom: How many brothers have you got?", "Bill: One.", "Tom: How many sisters have you got?", "Bill: Two.", "Tom: What do you do after school?", "Bill: I watch TV and I go swimming every Tuesday.", "Tom: Do you play football?", "Bill: No, I don't."],
      visualNote: "يظهر الحوار أسفل رسم لولدين عند مكتبين في الصف؛ النص أعلاه منسوخ من الصفحة، والرسم نفسه غير منشور في الواجهة." },
    { id: "u1-wb06-1-6a", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 6, pdfPage: 8, exercise: "1.6A", kind: "exercise", instruction: "Read and talk.",
      lines: ["Do you watch TV?", "No, I don't.    /    Yes. Every day.", "Now use these: watch TV; read books; play football; visit friends; listen to cassettes; go to the park; go shopping; help your mother.", "Alternative answer shown: Every Friday."],
      visualNote: "يتفرع السؤال في الصفحة إلى إجابتين، ثم تظهر الأنشطة الثمانية بدائل للاستخدام الشفهي." },
    { id: "u1-wb06-1-6b", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 6, pdfPage: 8, exercise: "1.6B", kind: "exercise", instruction: "Read and write.",
      lines: ["Columns: Read | You | Your friend.", "Rows: name; age; from; brothers; sisters; after school.", "Extra blank writing lines continue below the after-school row."],
      visualNote: "الجدول مطبوع بخانات كتابة فارغة للأعمدة الثلاثة." },
    { id: "u1-wb07-1-7a", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 7, pdfPage: 9, exercise: "1.7A", kind: "exercise", instruction: "Read and answer. Ask your friend.",
      lines: ["Look at Exercise 1.6 B."],
      visualNote: "إحالة مباشرة إلى جدول Exercise 1.6B في WB ص6." },
    { id: "u1-wb07-1-7b", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 7, pdfPage: 9, exercise: "1.7B", kind: "writing", instruction: "Write.",
      lines: ["Bill is ____________________ . He is from ____________________ . He has got", "________ brothers and ________ sisters. He ____________ ________________________", "every ____________________ ."],
      visualNote: "فقرة إكمال واحدة موزعة على ثلاثة أسطر مطبوعة." },
    { id: "u1-wb07-1-7c", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 7, pdfPage: 9, exercise: "1.7C", kind: "writing", instruction: "Write about yourself.",
      lines: ["Four blank writing lines follow the instruction."],
      visualNote: "لا توجد جملة بادئة إضافية في هذا القسم." },
    { id: "u1-wb07-1-7d", unit: 1, stepRef: "u1g3", book: "WB", printedPage: 7, pdfPage: 9, exercise: "1.7D", kind: "exercise", instruction: "Ask and answer.",
      lines: ["Picture-schedule columns: Sat. | Sun. | Mon. | Tue. | Wed. | Thur. | Fri.", "Picture-schedule rows: Aisha | Fuad.", "What does Aisha/Fuad do every Saturday?/Tuesday?", "She goes shopping.", "He does his homework."],
      visualNote: "توجد 14 صورة نشاط (سبع لكل اسم) لا تُعاد نشرها هنا؛ نُسخ الإطار النصي فقط، وتعتمد إجابات الجدول الكاملة على صور الصفحة." },
    { id: "u1-pb01-song-hassan", unit: 1, stepRef: "u1g4", book: "PB", printedPage: 1, pdfPage: 4, exercise: "Songs", kind: "song", instruction: "Sing the songs.", title: "Where's Hassan?",
      lines: ["Where, oh where, is he, is he?", "Where, oh where, is he?", "Is he here, is he there?", "Is he really anywhere?", "Tell me, where, oh where, is he?", "Is he sitting in the park?", "No, it's late. It's getting dark.", "Tell me, where, oh where, is he?", "Is he sitting by the sea?", "Is he watching the TV?", "Tell me, where, oh where, is he?"],
      visualNote: "واحدة من الأغاني الثلاث في PB ص1؛ لا يُدّعى أن النطق الآلي أو أي ملف Drive هو تسجيل هذه الأغنية." },
    { id: "u1-wb08-1-8a", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 8, pdfPage: 10, exercise: "1.8A", kind: "exercise", instruction: "Write the words.",
      lines: ["1. pray — praying; watch — __________; talk — __________; help — __________; read — __________.", "2. come — coming; drive — __________; phone — __________; ride — __________; have — __________.", "3. run — running; sit — __________; get up — __________; shop — __________; swim — __________.", "4. clean — cleaning; eat — __________."],
      visualNote: "تظهر praying وcoming وrunning وcleaning مطبوعة/مظللة كأمثلة أولى في مجموعاتها." },
    { id: "u1-wb08-09-1-8b", unit: 1, stepRef: "u1g4", book: "WB", printedPage: "8–9", pdfPage: "10–11", exercise: "1.8B", kind: "exercise", instruction: "Write. Label the pictures.",
      lines: ["Picture prompts 1–2 appear on WB printed page 8, each with a writing line.", "Picture prompts 3–6 continue on WB printed page 9, each with a writing line."],
      visualNote: "التمرين يعتمد على ست صور أنشطة غير منشورة في الواجهة؛ لم تُستنتج تسمياتها هنا بوصفها نصًا مطبوعًا." },
    { id: "u1-wb09-1-8c", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 9, pdfPage: 11, exercise: "1.8C", kind: "exercise", instruction: "Ask and answer.",
      lines: ["Do you like reading? — Yes, I do.", "Do you like swimming? — No, I don't."],
      visualNote: "يظهران بديلين في إطار السؤال نفسه أسفل استمرار Exercise 1.8B." },
    { id: "u1-wb09-1-8d", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 9, pdfPage: 11, exercise: "1.8D", kind: "writing", instruction: "Write about yourself.",
      lines: ["What do you like doing?", "Two blank writing lines follow the question."],
      visualNote: "سؤال مطبوع واحد وسطرا كتابة فارغان." },
    { id: "u1-wb10-1-9a", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 10, pdfPage: 12, exercise: "1.9A", kind: "exercise", instruction: "Find the places.",
      lines: ["1. oghospitalm __________", "2. nsolbeachre __________", "3. eizmosquek __________", "4. drestauranti __________", "5. sutbankoms __________", "6. ceflatlruan __________"],
      visualNote: "كل سلسلة حروف متبوعة بسطر إجابة؛ لم تُضف الكلمات المستخرجة من السلاسل بوصفها نصًا مطبوعًا." },
    { id: "u1-wb10-1-9b", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 10, pdfPage: 12, exercise: "1.9B", kind: "exercise", instruction: "Read and talk.",
      lines: ["Is Saleh in?", "No. He's at the supermarket.", "He's buying rice.", "Now use these: Aisha; your brother; Ali and Hassan; your mother and father.", "Places: bakery; Post Office; park; a friend's house."],
      visualNote: "يحيط بالحوار رسما هاتفين قرصيين؛ نُسخ النص ولم تُنشر الرسوم." },
    { id: "u1-wb10-1-9c", unit: 1, stepRef: "u1g4", book: "WB", printedPage: 10, pdfPage: 12, exercise: "1.9C", kind: "exercise", instruction: "Re-order and write.",
      lines: ["1. is    Najeeb    his father's car.    washing", "2. talking    are    Hassan and Fuad    to their friend."],
      visualNote: "تحت كل بند سطر طويل لكتابة الجملة بعد إعادة ترتيبها." },
    { id: "u1-pb01-song-house", unit: 1, stepRef: "u1g5", book: "PB", printedPage: 1, pdfPage: 4, exercise: "Songs", kind: "song", instruction: "Sing the songs.", title: "My house",
      lines: ["I live in a house in London town.", "My house has six rooms,", "some up, some down.", "Three bedrooms, a bathroom,", "some stairs and a hall,", "a living room, kitchen,", "I think that's all."],
      visualNote: "واحدة من الأغاني الثلاث في PB ص1؛ النص وحده منسوخ هنا دون صورة الصفحة أو ادعاء مطابقة صوتية." },
    { id: "u1-wb11-1-10a", unit: 1, stepRef: "u1g5", book: "WB", printedPage: 11, pdfPage: 13, exercise: "1.10A", kind: "exercise", instruction: "Write the words in the correct places.",
      lines: ["Word box: bookshop, living room, carpet, hall / sofa, kitchen, bakery, pictures / post office, stairs, police station / curtains, bedroom, supermarket, cushion.", "Places — five writing lines.", "Rooms of the house — five writing lines.", "Furniture — five writing lines."],
      visualNote: "تحتوي قائمة الصندوق على 15 كلمة/عبارة كما تظهر في أربعة صفوف." },
    { id: "u1-wb11-1-10b", unit: 1, stepRef: "u1g5", book: "WB", printedPage: 11, pdfPage: 13, exercise: "1.10B", kind: "exercise", instruction: "Read and answer.",
      lines: ["Where do you live?", "Two blank writing lines follow the question."],
      visualNote: "سؤال واحد ومساحة إجابة من سطرين." },
    { id: "u1-wb12-1-11a", unit: 1, stepRef: "u1g5", book: "WB", printedPage: 12, pdfPage: 14, exercise: "1.11A", kind: "exercise", instruction: "Look and talk.",
      lines: ["There | is | a ... / an ... | in ... / on ... / in front of ... / behind ... / next to ...", "There | are | two ... / some ... | in ... / on ... / in front of ... / behind ... / next to ..."],
      visualNote: "يقع جدول الاستبدال فوق رسم لغرفة معيشة فيها ولد يقرأ؛ يعتمد الحديث الكامل على تفاصيل الرسم غير المنشور هنا." },
    { id: "u1-wb12-1-11b", unit: 1, stepRef: "u1g5", book: "WB", printedPage: 12, pdfPage: 14, exercise: "1.11B", kind: "writing", instruction: "Write about the room.",
      lines: ["Four blank writing lines follow the instruction."],
      visualNote: "تشير الكتابة إلى رسم الغرفة في Exercise 1.11A بالصفحة نفسها." },
    { id: "u1-pb04-1-12-tim-saleh", unit: 1, stepRef: "u1g6", book: "PB", printedPage: 4, pdfPage: 6, exercise: "1.12", kind: "task-reading", instruction: "Look, read and do. WB Page 13", title: "Tim and Saleh — Who is talking?",
      lines: ["A. I live in a house behind the Post Office.", "B. My house is next to the supermarket.", "C. I've got two brothers and one sister.", "D. I've got one brother and two sisters.", "E. I like listening to cassettes.", "F. My favourite pastime is playing football.", "G. My family goes to the park every Thursday.", "H. We go to the beach every Thursday."],
      visualNote: "ترتبط العبارات بلوحتين مصورتين لـTim وSaleh؛ نُسخت العبارات فقط ولم تُنشر صورتا الصفحة، ويحتاج تعيين المتكلم إلى أدلة اللوحتين." },
    { id: "u1-wb13-1-12a", unit: 1, stepRef: "u1g6", book: "WB", printedPage: 13, pdfPage: 15, exercise: "1.12A", kind: "exercise", instruction: "Read and do.",
      lines: ["Who is talking?", "Tim = T    Saleh = S", "A ____    C ____    E ____    G ____", "B ____    D ____    F ____    H ____"],
      visualNote: "يحيل هذا القسم إلى عبارات A–H ولوحتي PB ص4." },
    { id: "u1-wb13-1-12b", unit: 1, stepRef: "u1g6", book: "WB", printedPage: 13, pdfPage: 15, exercise: "1.12B", kind: "exercise", instruction: "Look and write.", title: "A word tree",
      lines: ["Nine numbered picture/number clues feed a nine-row word tree.", "A bold vertical column runs through the completed words.", "What day is this?"],
      visualNote: "شبكة شجرة الكلمات ورسوم الأدلة التسعة غير منشورة في الواجهة؛ لذلك يصف هذا السجل بنية اللغز ولا يدّعي إمكان حله من النص وحده." },
    { id: "u2-pb05-2-2-present", unit: 2, stepRef: "u2g1", book: "PB", printedPage: 5, pdfPage: 7, exercise: "2.2", kind: "exercise", instruction: "Look, read and answer.", title: "How does he come to school?",
      lines: ["The teacher", "Saleh", "Fuad", "Ahmed", "Taha", "He drives to school.", "He runs to school.", "He comes to school by bus.", "He comes to school by bicycle.", "He walks to school.", "Who?", "How | does | the teacher / Taha | come to school?", "How | do | you | come to school?"],
      visualNote: "تظهر الأسماء الخمسة تحت لوحات مصورة؛ ومطابقة كل جملة بالشخص تعتمد على الصور غير المنشورة هنا، فلا يقدّم هذا السجل المطابقة بوصفها نصًا مطبوعًا مستقلًا." },
    { id: "u2-pb06-2-2-yesterday", unit: 2, stepRef: "u2g1", book: "PB", printedPage: 6, pdfPage: 8, exercise: "2.2", kind: "reading", instruction: "Look, read and do. WB Page 16", title: "How did they come to school yesterday?",
      lines: ["A. Yesterday Najeeb came to school by bus.", "B. Aisha didn't come by bus. She walked.", "C. Hassan didn't walk. He ran.", "D. Fatma didn't run. She came by car.", "E. Ali didn't come by car. He came by bicycle.", "F. Jack didn't come to school. He went fishing."],
      visualNote: "كل عبارة مكتوبة تحت لوحتها المصورة A–F؛ نُقل النص المطبوع كما هو، ولم تُنشر الصور." },
    { id: "u2-pb07-2-3", unit: 2, stepRef: "u2g2", book: "PB", printedPage: 7, pdfPage: 9, exercise: "2.3", kind: "reading", instruction: "Look, read and answer. Write. WB Page 16", title: "Take care!",
      lines: ["Read this. Do it.", "Take care when you cross the street.", "Stop!", "Look left.", "Look right.", "Look left again.", "Walk.", "Don't run! It's dangerous.", "I walked up the street.", "I stopped.", "I looked left.", "I looked right.", "I looked left again.", "I walked across the street.", "I didn't run.", "Did he do it?"],
      visualNote: "تلخّص اللافتة خطوات العبور بأيقونات وأسهم إضافة إلى العبارات المنقولة؛ والولد صاحب التقرير غير مسمّى في الصفحة، فلا يُنسب التقرير إلى اسم معين." },
    { id: "u2-pb08-2-4-2-5", unit: 2, stepRef: "u2g2", book: "PB", printedPage: 8, pdfPage: 10, exercise: "2.4 / 2.5", kind: "picture-story", instruction: "Tell a story. WB Page 17", title: "An accident",
      lines: ["Yesterday Hassan had an accident. What happened?", "Labels: [t]eacher; policeman; driver.", "What happened?", "That car hit him.", "He didn't look left again.", "My leg! My leg!", "I didn't see him.", "He didn't walk. He ran in front of the car."],
      visualNote: "معظم تسلسل الحادث مصور بلا تعليقات مكتوبة في اللوحات العليا؛ والحرف الأول من بطاقة teacher محجوب جزئيًا بالشخصية في المسح. لم تُنسب فقاعات الكلام إلى أسماء غير مطبوعة." },
    { id: "u2-pb09-2-4-2-6-song", unit: 2, stepRef: "u2g2", stepRefs: ["u2g2", "u2g3"], book: "PB", printedPage: 9, pdfPage: 11, exercise: "2.4–2.6", kind: "song", instruction: "Sing a song.", title: "Accident",
      lines: ["He walked up the street", "with his head in the air.", "He didn't see the car.", "He didn't take care.", "He didn't look left.", "He didn't look right.", "He started to run.", "Then he heard his friend cry:", "Accident! Accident!", "Don't have an accident!", "Stop, look and listen.", "Stop, take care.", "Stay where you are", "when a car is there.", "Walk, don't run,", "when the road is clear.", "Look where you're going.", "You don't want to hear:", "Accident! Accident!", "Don't have an accident!"],
      visualNote: "ترويسة الصفحة نفسها تذكر 2.4–2.6؛ لذلك يظهر هذا السجل الواحد في مجموعتي u2g2 وu2g3. أيقونة الكاسيت في الصفحة لا تثبت مطابقة أي ملف Drive لهذه الأغنية." },
    { id: "u2-pb10-2-6", unit: 2, stepRef: "u2g3", book: "PB", printedPage: 10, pdfPage: 12, exercise: "2.6", kind: "dialogue", instruction: "Read aloud.", title: "What would you like?",
      lines: ["ALI'S TAKE-AWAY", "burger", "cheese sandwich", "chicken sandwich", "egg sandwich", "orange juice", "apple juice", "7-up", "Pepsi", "milk", "What would you like?", "I'd like a cheese sandwich, please.", "And what would you like to drink?", "I'd like a Pepsi, please.", "One cheese sandwich and one Pepsi."],
      visualNote: "فقاعات الحوار لا تحمل أسماء مطبوعة؛ لذلك لم تُنسب الأسطر إلى أشخاص بأسمائهم. حروف التغليف الصغيرة داخل رسوم القائمة ليست عناصر قائمة مستقلة." },
    { id: "u2-pb11-2-7", unit: 2, stepRef: "u2g4", book: "PB", printedPage: 11, pdfPage: 13, exercise: "2.7", kind: "dialogue", instruction: "Read and check. WB Page 18", title: "The girl from Kuwait",
      lines: ["At Aisha's house", "Aisha: This is Ameena. She's from Kuwait. She's here on holiday.", "Nadia: Hello, Ameena. My name's Nadia.", "Fatma: And I'm Fatma. Ameena, would you like to come to my house some time?", "Ameena: I'd love to, Fatma. When?", "Fatma: Tomorrow.", "Ameena: Fine. What time?", "Fatma: Ten o'clock.", "Ameena: Ten o'clock. OK.", "Fatma: Great! We can listen to my cassettes.", "Ameena: OK. Your house, tomorrow at ten o'clock. Oh, Fatma, where do you live?", "Fatma: Next to the Post Office.", "Ameena: Next to the Post Office. OK."],
      visualNote: "نُقل الحوار المطبوع كاملًا بحسب ترتيب الصفحة؛ الصورة المصاحبة غير منشورة في الواجهة." },
    { id: "u2-pb12-2-9", unit: 2, stepRef: "u2g5", book: "PB", printedPage: 12, pdfPage: 14, exercise: "2.9", kind: "dialogue", instruction: "Learn the words. Read aloud.", title: "Presents",
      lines: ["TOY SHOP", "a jigsaw puzzle", "a doll", "a chess set", "a model plane", "a model boat", "Ameena: What can I buy for my little brother?", "Fatma: How about a football?", "Ameena: He's got a football.", "Fatma: How about a model boat?", "Ameena: That's a good idea."],
      visualNote: "نُقلت لافتة المحل والبطاقات التعليمية الخمس والحوار. الكلمات المتكررة الصغيرة على علب الألعاب داخل الرسم (مثل JIGSAW وCHESS وأسماء أطقم النماذج) ليست بطاقات تعليمية مستقلة." },
    { id: "u2-pb13-2-10-2-11", unit: 2, stepRef: "u2g5", book: "PB", printedPage: 13, pdfPage: 15, exercise: "2.10 / 2.11", kind: "vocabulary-picture", instruction: "Learn the words.", title: "Shopping",
      lines: ["BOOKSHOP", "JEWELLERY", "CLOTHES", "SHOE SHOP", "1. a pair of glasses", "2. a box of paints", "3. a bracelet", "4. a necklace", "5. a comic", "6. a pair of earrings", "7. a tie", "8. a pair of shorts", "9. a paintbrush", "10. a pair of sandals", "11. some paper", "12. a ring", "○ Where can I buy a ring?", "● At the jewellery shop."],
      visualNote: "ترتبط الأسماء الاثنا عشر بصور مرقمة وترتبط لافتات المحال برسم واجهات المحال؛ الصور نفسها غير منشورة هنا." },
    { id: "u2-pb14-2-13", unit: 2, stepRef: "u2g6", book: "PB", printedPage: 14, pdfPage: 16, exercise: "2.13", kind: "dialogue", instruction: "Read and answer. Read aloud.", title: "Let's ask Hassan.",
      lines: ["Hassan is from Dubai. He is visiting his friends in Yemen.", "Ali: What would you like to do now?", "Taha: Let's watch TV.", "Ali: No. I don't like watching TV.", "Taha: How about going to the take-away?", "Ali: No. I'm not hungry.", "Taha: OK. Let's go to Fuad's house.", "Ali: No. He's not there. He's on holiday.", "Taha: Let's ask Hassan. Hassan, what would you like to do?", "Hassan: I'd like to ...", "Ali: OK. Let's play football.", "What would Hassan like to do?"],
      visualNote: "سطر Hassan غير مكتمل في الكتاب نفسه (I'd like to ...)؛ لم يُكمل النسخ ما تركه النص مفتوحًا للاستنتاج من السطر التالي والسؤال الأحمر." },
    { id: "u2-pb15-2-14", unit: 2, stepRef: "u2g7", book: "PB", printedPage: 15, pdfPage: 17, exercise: "2.14", kind: "dialogue", instruction: "Read aloud.", title: "Presents for the family",
      lines: ["Hassan has got two sisters and one brother. Nadia is five and Amna is eleven. Ali is seventeen. Last Saturday Hassan wanted to buy presents for his family, so he went shopping.", "Taha: That's a nice watch.", "Hassan: Yes. It's for my mother.", "Taha: Where did you buy it?", "Hassan: At the jewellery shop.", "Saleh: Those are nice sandals.", "Hassan: Yes. They're for my brother.", "Saleh: Where did you buy them?", "Hassan: At the shoe shop."],
      visualNote: "نُقل النص التمهيدي والمحادثتان كما طُبعتا؛ الصورتان المصاحبتان غير منشورتين في الواجهة." },
    { id: "u2-pb16-language-summary", unit: 2, stepRef: "u2g10", book: "PB", printedPage: 16, pdfPage: 18, exercise: "Language summary (no exercise number printed)", kind: "summary", title: "Language summary",
      lines: ["Make statements and negative statements like these:", "Yesterday: I came to school by car. / I ran to school. / I came to school by bus.", "Negative statements: I didn't come by bus. / I didn't come by bicycle. / I didn't walk.", "Ask and answer questions about wants like these:", "What would you like to | drink? / eat?", "I'd like | a burger, please. / an orange juice, please.", "Ask for and make suggestions about presents like this:", "What can I buy for my | brother? / sister?", "How about | a ball? / a pair of sandals? / some paper?", "Suggest what to do like this:", "What would you like to do now?", "Let's | watch TV. / go to the park.", "How about | watching TV? / going to the park?", "Ask and answer questions like these:", "Where did you buy | that | ring?", "Where did you buy | those | sandals?", "I bought | it / them | at the | jewellery shop. / shoe shop."],
      visualNote: "هذه جداول بدائل لغوية لا حوارًا متصلًا واحدًا، والصفحة بلا رقم تمرين. رُبطت بمجموعة المراجعة الختامية بحسب موضعها ووظيفتها؛ أما حقل materials المستخرج من ملخص TB لتلك المجموعة فيذكر PB15 ولا يذكر PB16، فيلزم أن تتحقق المراجعة البشرية الثانية من الاستخدام المقصود." },
    { id: "u2-wb14-2-1a", unit: 2, stepRef: "u2g0", book: "WB", printedPage: 14, pdfPage: 16, exercise: "2.1A", kind: "exercise", instruction: "Write the words.",
      lines: ["Infinitive | Past tense", "Regular verbs", "1. watch — watched", "2. live — lived", "3. hop — hopped", "4. pray — ____", "5. visit — ____", "6. help — ____", "7. phone — ____", "8. work — ____", "Use the correct words from the box below.", "Irregular verbs", "9. come — ____", "10. go — ____", "11. drive — ____", "12. run — ____", "13. see — ____", "14. hear — ____", "15. buy — ____", "16. give — ____", "17. have/has — ____", "18. read — ____", "Word box: had, went, saw, bought, came, read, gave, drove, heard, ran."],
      visualNote: "الأفعال الثلاثة الأولى مكتملة في الكتاب ونهاياتها مسطّرة؛ بقية الفراغات غير محلولة في هذا النسخ. كلمات صندوق الأفعال الشاذة مقروءة رغم ظهور طبعة خفيفة من ظهر الصفحة في المسح." },
    { id: "u2-wb15-2-1b", unit: 2, stepRef: "u2g0", book: "WB", printedPage: 15, pdfPage: 17, exercise: "2.1B", kind: "exercise", instruction: "Read and draw lines.",
      lines: ["○ Where did you go yesterday?", "○ What did you do at the park?", "○ Did you go to a restaurant?", "○ Did you go to the beach?", "● I played football.", "● Yes, I did. I went swimming.", "● I went to the park.", "● Yes. I had a burger."],
      visualNote: "الخط المرسوم في الصفحة مثال مطبوع يصل السؤال الأول بـI went to the park؛ لم يقدّم هذا السجل بقية المطابقات بوصفها إجابات منقولة." },
    { id: "u2-wb15-2-1c", unit: 2, stepRef: "u2g0", book: "WB", printedPage: 15, pdfPage: 17, exercise: "2.1C", kind: "exercise", instruction: "Write the words.",
      lines: ["Yesterday I ____ to the park. I ____ football with my friends. Then we ____ ____ at the beach. In the evening we ____ to a ____ and ____ a burger."],
      visualNote: "نُقلت الفقرة وفراغاتها دون ملء الكلمات المطلوبة." },
    { id: "u2-wb15-2-1d", unit: 2, stepRef: "u2g0", book: "WB", printedPage: 15, pdfPage: 17, exercise: "2.1D", kind: "exercise", instruction: "Write about yourself.",
      lines: ["Yesterday I __________________", "Ruled writing lines follow."],
      visualNote: "نشاط كتابة شخصية؛ لم تُضف أي جمل نموذجية من المنصة إلى سجل الكتاب." },
    { id: "u2-wb16-2-2a", unit: 2, stepRef: "u2g1", book: "WB", printedPage: 16, pdfPage: 18, exercise: "2.2A", kind: "exercise", instruction: "Read and do.",
      lines: ["True = ✓    Not true = ✗", "1. Hassan ran to school. □", "2. Ali came by car. □", "3. Aisha walked. □", "4. Fatma ran. □", "5. Najeeb came by bus. □"],
      visualNote: "تُحسم العبارات بالرجوع إلى PB ص6؛ مربعات الاختيار فارغة في الصفحة ولم تُملأ في النسخ." },
    { id: "u2-wb16-2-2b", unit: 2, stepRef: "u2g1", book: "WB", printedPage: 16, pdfPage: 18, exercise: "2.2B", kind: "exercise", instruction: "Correct the sentences.",
      lines: ["1. Ali didn't __________________", "2. __________________"],
      visualNote: "سطرا تصحيح فارغان؛ للعنصر الأول سطر استمراري ثانٍ في تخطيط الصفحة، ولم تُسجل تصحيحات مستنتجة." },
    { id: "u2-wb16-2-3", unit: 2, stepRef: "u2g2", book: "WB", printedPage: 16, pdfPage: 18, exercise: "2.3", kind: "exercise", instruction: "Read and write. Choose the correct 5 sentences and write them in order.",
      lines: ["Take care.", "Candidate sentences: Run.; Walk across the street.; Look right.; Look left.; Stop.; Look right again.; Look left again.", "Write five sentences on lines 1–5."],
      visualNote: "حُفظت عبارة Look right again كما طُبعت بين البدائل رغم اختلافها عن تسلسل لافتة PB ص7؛ لم يختر هذا السجل الجمل الخمس نيابة عن المتعلم." },
    { id: "u2-wb17-2-4", unit: 2, stepRef: "u2g2", book: "WB", printedPage: 17, pdfPage: 19, exercise: "2.4", kind: "exercise", instruction: "Read and do.",
      lines: ["True = ✓    Not true = ✗", "1. Hassan walked up the street. □", "2. He stopped. □", "3. He looked left. □", "4. He looked right. □", "5. He looked left again. □", "6. He walked across the street. □", "7. He ran in front of a car. □", "8. The driver saw Hassan. □", "9. The car hit him. □"],
      visualNote: "تعتمد الإجابات على لوحات قصة PB ص8؛ المربعات فارغة ولم تُستنتج علامات صح/خطأ داخل سجل النسخ." },
    { id: "u2-wb17-2-5", unit: 2, stepRef: "u2g2", book: "WB", printedPage: 17, pdfPage: 19, exercise: "2.5", kind: "exercise", instruction: "Write. Write the story of Hassan's accident.",
      lines: ["Yesterday Hassan had an accident.", "Ruled writing lines follow."],
      visualNote: "الجملة الأولى مطبوعة بخط يشبه خط اليد بوصفها بداية مقدمة؛ بقية أسطر القصة فارغة ولم تُكتب قصة بديلة من المنصة." },
    { id: "u2-wb18-2-7a", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 18, pdfPage: 20, exercise: "2.7A", kind: "exercise", instruction: "Listen and do.",
      lines: ["True = ✓    Not true = ✗", "1. Ameena is from Yemen. □", "2. She wants to go to Fatma's house. □", "3. She wants to go at ten o'clock. □", "4. Fatma lives behind the Post Office. □"],
      visualNote: "هذا قسم استماع وله أيقونة كاسيت؛ لم تستمع المنصة إلى تسجيل ولم تملأ المربعات، ولا يثبت وجود القسم مطابقة أي ملف Drive." },
    { id: "u2-wb18-2-7b", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 18, pdfPage: 20, exercise: "2.7B", kind: "exercise", instruction: "Read and check.",
      lines: ["Look at page 11 of your Pupil's Book."],
      visualNote: "إحالة فقط إلى PB ص11 للتحقق؛ لا توجد مساحة إجابة إضافية في هذا القسم." },
    { id: "u2-wb18-2-7c", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 18, pdfPage: 20, exercise: "2.7C", kind: "exercise", instruction: "Re-order and write.",
      lines: ["1. is    Kuwait.    from    Ameena", "2. next to    lives    Fatma    the Post Office."],
      visualNote: "حُفظ ترتيب الكلمات المبعثرة كما طُبع، وأسطر إعادة الكتابة فارغة." },
    { id: "u2-wb18-2-7d", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 18, pdfPage: 20, exercise: "2.7D", kind: "exercise", instruction: "Read and write.",
      lines: ["1. Why is Ameena in Yemen?", "2. Does she want to visit Fatma today?"],
      visualNote: "أسطر الإجابة فارغة؛ لم تُحوّل معلومات PB ص11 إلى إجابات مكتوبة داخل سجل WB." },
    { id: "u2-wb19-2-8a", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 19, pdfPage: 21, exercise: "2.8A", kind: "exercise", instruction: "Listen, read and talk.",
      lines: ["Would you like to come to my house some time?", "I'd love to. When?", "Tomorrow. / On Monday. / On Wednesday.", "Fine. What time?", "Clock choices: ten o'clock / three o'clock / six o'clock.", "Where do you live?", "Picture choices labelled: Bakery / Supermarket / Post Office."],
      visualNote: "مخطط أسهم ببدائل لا حوارًا واحدًا ثابتًا. الأوقات قراءات بصرية مكبّرة لعقارب الساعات (10 و3 و6) لا أرقامًا مطبوعة؛ وكل مبنى مصور بجوار بيت صغير. أيقونة الكاسيت لا تثبت مطابقة صوتية." },
    { id: "u2-wb19-2-8b", unit: 2, stepRef: "u2g4", book: "WB", printedPage: 19, pdfPage: 21, exercise: "2.8B", kind: "exercise", instruction: "Find the verbs.",
      lines: ["q h a p p e n e d t", "h w s a z d i d s b", "k l o o k e d n e d", "o y s r a n t y d r", "u b x h i t b n m t", "s t o p p e d l f g", "Six numbered answer lines follow."],
      visualNote: "نُقلت شبكة البحث عن الكلمات حرفيًا في ستة صفوف؛ لم يستخرج هذا السجل الأفعال المخفية بوصفها إجابات مطبوعة." },
    { id: "u2-wb20-2-9", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 20, pdfPage: 22, exercise: "2.9", kind: "exercise", instruction: "Listen and do. Circle the words you hear.",
      lines: ["football    desk    rubber", "model plane    bicycle", "ball    pencil    bag", "jigsaw puzzle    model boat", "chess set    cassettes    doll"],
      visualNote: "كلمات الصندوق مطبوعة، أما الكلمات المسموعة المطلوب تحويطها فليست محددة في الصفحة؛ ولم يتم الاستماع إلى تسجيل أو ربط القسم بملف Drive." },
    { id: "u2-wb20-2-10a", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 20, pdfPage: 22, exercise: "2.10A", kind: "exercise", instruction: "Find the toys.",
      lines: ["1. fechessbwseti    __________", "2. ghtdolleugsh    __________", "3. ljigsawipuzzlet    __________", "4. mamodelpboata    __________"],
      visualNote: "رُوجعت سلاسل الحروف الأربع في قصاصة مكبرة من الصفحة وحُفظت كما طُبعت؛ أسماء الألعاب المخفية غير مكتوبة على أسطر الإجابة في الأصل." },
    { id: "u2-wb20-2-10b", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 20, pdfPage: 22, exercise: "2.10B", kind: "exercise", instruction: "Write. Write a, a pair of or some.",
      lines: ["1. __________ necklace", "2. __________ glasses", "3. __________ paper", "4. __________ shorts", "5. __________ comic", "6. __________ sandals"],
      visualNote: "حُفظت الأسماء والفراغات دون اختيار أدوات النكرة نيابة عن المتعلم." },
    { id: "u2-wb21-2-11a", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 21, pdfPage: 23, exercise: "2.11A", kind: "exercise", instruction: "Talk and do. What can Ameena buy for Mariam?",
      lines: ["Columns: Mariam (16) | Fuad (14) | Asma (7)", "1. a blouse", "2. a box of paints", "3. a bracelet", "4. a comic", "5. a pair of earrings", "6. a tie", "7. a paintbrush", "8. a pair of sandals", "9. some paper", "10. a ring", "11. a pair of shorts", "12. a watch"],
      visualNote: "جدول من 12 صفًا وثلاثة أعمدة مربعات؛ الأعمار بين قوسين كما طُبعت، وجميع المربعات فارغة في الأصل." },
    { id: "u2-wb21-2-11b", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 21, pdfPage: 23, exercise: "2.11B", kind: "exercise", instruction: "Listen and check.",
      lines: ["What did Ameena buy? Tick (✓) the correct boxes."],
      visualNote: "يحيل القسم إلى جدول 2.11A والاستماع؛ لم توضع علامات ولم يُربط بأي تسجيل Drive دون استماع فعلي." },
    { id: "u2-wb21-2-11c", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 21, pdfPage: 23, exercise: "2.11C", kind: "exercise", instruction: "Write.",
      lines: ["Ameena bought __________ for Mariam.", "__________ Fuad.", "__________ Asma."],
      visualNote: "قوس عمودي في الصفحة يجمع الإكمالات الثلاثة تحت بداية Ameena bought؛ المشتريات نفسها غير مكتوبة في WB." },
    { id: "u2-wb22-2-12", unit: 2, stepRef: "u2g5", book: "WB", printedPage: 22, pdfPage: 24, exercise: "2.12", kind: "reading", instruction: "Read and do.",
      lines: ["Ameena wanted to buy presents for her family. She went shopping with Fatma.", "Where did they go? Draw lines.", "Map labels: Police Station; Mosque; Park; Supermarket; Post Office; Shoe shop; Jewellery Shop; Bank; Bakery; Bookshop; Take-away; Hospital; Toy Shop; Block of flats; Fatma's house; School.", "First they went to the toy shop. Ameena bought a model boat for her little brother and a box of paints for her little sister, Asma.", "Then they walked up the street. Ameena bought a bracelet for Mariam and a watch for Fuad.", "After that they were hungry, so they went to the take-away. Fatma had a burger. Ameena didn't want a burger, so she had a sandwich.", "Fatma wanted to buy a pair of sandals, so they went to the shoe shop.", "Then they walked home."],
      visualNote: "تتوسط الصفحة خريطة مرسومة لرسم线路 الرحلة؛ نُقلت بطاقات أماكنها المقروءة ونص القراءة، أما خط المسار نفسه فغير مرسوم في الأصل ولا يُنشر رسم الخريطة هنا." },
    { id: "u2-wb23-2-14a", unit: 2, stepRef: "u2g7", book: "WB", printedPage: 23, pdfPage: 25, exercise: "2.14A", kind: "exercise", instruction: "Look and talk.",
      lines: ["○ That's a / Those are | nice ...", "● Yes. | It's / They're | for my ...", "○ Where did you buy | it? / them?", "● At the | jewellery shop. / clothes shop. / toy shop. / bookshop. / shoe shop."],
      visualNote: "إطارات استبدال مصحوبة بست رسوم أشياء في الإطار الأول وأربع شخصيات عائلية في الثاني لتوجيه الإكمال الشفهي؛ الرسوم غير منشورة ولم تُسمَّ الأشياء أو الأشخاص استنتاجًا داخل النص." },
    { id: "u2-wb23-2-14b", unit: 2, stepRef: "u2g7", book: "WB", printedPage: 23, pdfPage: 25, exercise: "2.14B", kind: "exercise", instruction: "Write.",
      lines: ["○ ________________________________________", "● ________________________________________", "○ ________________________________________", "● ________________________________________"],
      visualNote: "أربعة أسطر حوار متناوبة فارغة لإعادة كتابة تبادل من 2.14A؛ لم تُملأ بجمل من المنصة." },
    { id: "u2-wb24-2-15a", unit: 2, stepRef: "u2g8", book: "WB", printedPage: 24, pdfPage: 26, exercise: "2.15A", kind: "exercise", instruction: "Listen and do.",
      lines: ["Start here.", "Labels: bookshop; box of paints; jigsaw puzzle; toy shop; Taha; shoe shop; Sameera; Ali; jewellery shop; clothes shop; blouse; pair of sandals; Fuad; jacket; supermarket; ring; Fatma; bakery; model car; Nadia; watch; Asma.", "What is it?"],
      visualNote: "البطاقات مرتبطة بنقاط متناثرة في لغز استماعي؛ يظهر قوس مطبوع واحد بين نقطتي Taha وjigsaw puzzle. ترتيب/مسار بقية الخطوط وما يكشفه اللغز يعتمدان على التسجيل وتخطيط النقاط، ولم يتم الاستماع أو إعادة إنتاج التخطيط." },
    { id: "u2-wb25-2-15b", unit: 2, stepRef: "u2g8", book: "WB", printedPage: 25, pdfPage: 27, exercise: "2.15B", kind: "exercise", instruction: "Read and write the words. What did they do yesterday?",
      lines: ["1. Ali didn't go shopping. He __________ fishing.", "2. Fatma __________ __________ a comic. She __________ a book.", "3. Taha __________ __________ football. He __________ chess.", "4. Aisha __________ __________ to cassettes. She __________ to the radio.", "5. Hassan __________ __________ his father. He __________ his mother.", "And you?", "________________________________________"],
      visualNote: "في العنصر الأول didn't go مكتوبة بخط نموذجي داخل الكتاب؛ بقية الفراغات وسطر And you? فارغة ولم تُحل في النسخ." },
    { id: "u2-wb25-2-15c", unit: 2, stepRef: "u2g8", book: "WB", printedPage: 25, pdfPage: 27, exercise: "2.15C", kind: "exercise", instruction: "Look and write.", title: "A word tree",
      lines: ["1. a [picture clue]", "2. a pair of [picture clue]", "3. a [picture clue]", "4. a [picture clue]", "5. some [picture clue]", "6. a pair of [picture clue]", "7. a [picture clue]", "8. a [picture clue]", "Ameena bought this for Mariam."],
      visualNote: "ثمانية أدلة مصورة وشبكة شجرة كلمات من ثمانية صفوف وعمود إجابة عمودي غليظ؛ لم تُنشر الرسوم أو الشبكة ولم تُسمَّ الأشياء المصورة استنتاجًا." },
    { id: "u2-wb26-2-16a", unit: 2, stepRef: "u2g9", book: "WB", printedPage: 26, pdfPage: 28, exercise: "2.16A", kind: "exercise", instruction: "Read and write the words.",
      lines: ["Hassan wanted to buy a pair of [picture] __________ for his sister.", "He [walking figure] __________ up the street.", "He looked [left-pointing arrow] __________.", "He looked [right-pointing arrow] __________.", "He looked [left-pointing arrow] __________ again.", "He walked __________ the street.", "He went into a [shop sign: JEWELLERY] __________ shop.", "He looked at some earrings.", "He __________ __________ like them.", "He bought a [picture] __________."],
      visualNote: "قصة بفراغات وأدلة صور/أسهم/لافتة داخل الجمل؛ حُفظ موضع كل دليل بصري دون كتابة الكلمة المستنتجة مكانه." },
    { id: "u2-wb26-2-16b", unit: 2, stepRef: "u2g9", book: "WB", printedPage: 26, pdfPage: 28, exercise: "2.16B", kind: "exercise", instruction: "Write the story. Use these words to make the story better:",
      lines: ["and    but    so    Then", "Ruled writing lines follow."],
      visualNote: "أسطر إعادة كتابة قصة 2.16A فارغة؛ لم تُنتج المنصة نسخة محسّنة داخل سجل الكتاب." },
    { id: "u2-wb27-2-17a", unit: 2, stepRef: "u2g10", book: "WB", printedPage: 27, pdfPage: 29, exercise: "2.17A", kind: "exercise", instruction: "Look and say.",
      lines: ["Nineteen numbered object pictures (1–19).", "Printed word visible on item 4's box: JIGSAW."],
      visualNote: "أسماء الأشياء الـ19 هي استجابات شفهية مطلوبة من الصور وليست مطبوعة تحتها؛ لذلك يصف السجل بنية الصفحة وكلمة JIGSAW المقروءة فقط، دون تخمين قائمة إجابات." },
    { id: "u2-wb28-2-17b", unit: 2, stepRef: "u2g10", book: "WB", printedPage: 28, pdfPage: 30, exercise: "2.17B", kind: "exercise", instruction: "Write the words in the correct places.",
      lines: ["sandwich    tie    chess set    bracelet", "earrings    sweater    burger    model boat", "trousers    ring    apple juice    necklace", "orange juice    football    shorts    doll", "Things we can buy in a toy shop", "Things we can buy in a clothes shop", "Things we can buy in a jewellery shop", "Things we can buy in a take-away", "Four ruled lines follow each heading."],
      visualNote: "نُقل صندوق الكلمات والعناوين الأربعة فقط؛ توزيع الكلمات على الفئات غير مكتوب في الصفحة ولم يُحل داخل السجل." }
  ]
};
ENG8.bookTranscriptions.forEach(t => {
  t.status = t.status || "transcribed-pending-second-review";
  t.transcriber = "Arena coding agent — visual transcription from owner-supplied scan renders";
  t.transcriptionDate = "2026-10-28";
  t.method = "Visual reading of rendered scanned pages; no OCR text layer was used.";
});
const ENGSEL = { unit: 1, step: 0 };
function engUnit(n) { return ENG8.units.find(u => u.n === n); }
function engStepDone(ref) { return (typeof store !== "undefined" && store.engDoneSteps || []).includes(ref); }
function engUnitPct(u) { if (!u.steps.length) return 0; return Math.round(u.steps.filter(s => engStepDone(s.ref)).length / u.steps.length * 100); }
function srcBadge(status) {
  return status === "verified"
    ? '<span class="badge b-excellent">✓ موثّق من المصدر</span>'
    : status === "teacher"
    ? '<span class="badge" style="background:#efe7fd;color:#5b21b6">✎ نشاط من إعداد المعلم — ليس من نصّ الكتاب</span>'
    : status === "transcribed-pending-second-review"
    ? '<span class="badge" style="background:#e8f2fe;color:#174ea6">👁️ نُسخ بصريًا — بانتظار مراجعة بشرية ثانية (ليس Verified)</span>'
    : status === "not-located-in-supplied-scan"
    ? '<span class="badge" style="background:#fde8e8;color:#8b1e1e">⚠️ الصفحة غير موجودة في تسلسل المسح المزوّد</span>'
    : '<span class="badge b-mid">⏳ بانتظار التحقق من المصدر الرسمي</span>';
}
function bookTranscriptionStepRefs(t) {
  return Array.isArray(t.stepRefs) && t.stepRefs.length ? t.stepRefs : [t.stepRef];
}
function bookTranscriptionsForStep(unitNo, stepRef) {
  return (ENG8.bookTranscriptions || []).filter(t => t.unit === unitNo && bookTranscriptionStepRefs(t).includes(stepRef));
}
function bookTranscriptionSummary(unitNo, stepRef) {
  const records = bookTranscriptionsForStep(unitNo, stepRef);
  const transcribed = records.filter(t => t.status === "transcribed-pending-second-review").length;
  const gaps = records.filter(t => t.status === "not-located-in-supplied-scan").length;
  if (!transcribed && !gaps) return "";
  return ` · 👁️ ${arNum(transcribed)} سجلات PB/WB منسوخة بصريًا (قيد مراجعة ثانية)${gaps ? ` · ⚠️ ${arNum(gaps)} فجوة مصدر موثقة` : ""}`;
}
function bookTranscriptionHTML(unitNo, stepRef) {
  const records = bookTranscriptionsForStep(unitNo, stepRef);
  if (!records.length) return "";
  return `<div class="panel" style="margin-bottom:16px"><h3>📖 نصوص وتمارين PB/WB المنسوخة بصريًا لهذه الخطوة</h3>
    <p style="color:var(--muted);font-size:13.5px;margin-bottom:10px">قُرئت هذه السجلات من صور صفحات الكتابين المزوّدة وسُجّلت بمراجعها، لكنها <b>ليست Verified</b> قبل مراجعة بشرية ثانية مقابل صورة كل صفحة. لا تُنشر صور الصفحات الممسوحة نفسها هنا؛ وعند اعتماد التمرين على رسم أو شبكة تُذكر تلك الحدود صراحة.</p>
    ${records.map(t => `<div class="book-card" style="margin-bottom:10px">
      <div style="display:flex;gap:7px;align-items:center;flex-wrap:wrap;margin-bottom:7px"><strong dir="ltr">${esc(t.book)} printed p. ${esc(t.printedPage)} · Exercise ${esc(t.exercise)}</strong>${srcBadge(t.status)}</div>
      ${t.title ? `<div dir="ltr" style="text-align:left;font-weight:700;margin-bottom:4px">${esc(t.title)}</div>` : ""}
      ${t.instruction ? `<div dir="ltr" style="text-align:left;font-weight:700;margin-bottom:6px">${esc(t.instruction)}</div>` : ""}
      ${t.lines && t.lines.length ? `<div dir="ltr" style="text-align:left;white-space:pre-wrap;line-height:1.65">${t.lines.map(line => esc(line)).join("\n")}</div>` : `<div class="why-box">لم يُنسب أي نص إلى هذه الصفحة لأنها غير موجودة في موضعها المتوقع من المسح المزوّد.</div>`}
      ${t.visualNote ? `<small style="display:block;margin-top:8px;color:var(--muted)">${esc(t.visualNote)}</small>` : ""}
      <small style="display:block;margin-top:5px;color:var(--muted)">سجل النسخ: <span dir="ltr">${esc(t.pdfPage ? `${t.book} PDF p. ${t.pdfPage}` : "PDF page not located")} · ${esc(t.transcriptionDate || "")}</span> — ${esc(t.transcriber || "")}</small>
    </div>`).join("")}</div>`;
}
function vEnglish8() {
  const totalGroups = ENG8.units.reduce((a, u) => a + u.steps.length, 0);
  const doneGroups = ENG8.units.reduce((a, u) => a + u.steps.filter(s => engStepDone(s.ref)).length, 0);
  return `<div class="page-head"><h2>🇬🇧 اللغة الإنجليزية — الصف الثامن</h2>
  <p dir="ltr" style="text-align:end"><b>${esc(ENG8.course)}</b> · 7 Units · ${ENG8.totalSteps} teaching steps</p>
  <p>مسار موثّق من دليل المعلم الرسمي (Teacher's Book 2): كل خطوة مربوطة بصفحات كتاب الطالب (PB) وكتاب الأنشطة (WB) وأقسام الصوت (CS).</p></div>
  <div class="panel" style="margin-bottom:16px"><h3>📚 حالة مصادر المنهج الثلاثة</h3>
    ${ENG8.docs.map(d => `<div class="today-item"><span class="today-time" dir="ltr">${d.code}</span><div style="flex:1"><strong>${esc(d.name)}</strong> <small>(${arNum(d.pages)} صفحة)</small><small style="display:block">${esc(d.note)}</small></div>${srcBadge(d.status)}</div>`).join("")}
    <p class="print-note" style="margin-top:8px">🎧 مجلد Google Drive المعتمد من صاحب المشروع مفهرس بمعرّفاته دون نسخ داخل المنصة، لكن تشغيل التسجيلات الصوتية قيد الإصلاح، وسيُعاد تفعيله لاحقًا. لا يمنع ذلك فتح الدروس أو الأنشطة أو حفظ التقدم المحلي. كل ربط بين ملف Drive وقسم/خطوة يبقى <b dir="ltr">Mapping Unconfirmed</b> حتى يستمع إليه المعلم ويعتمده؛ و«النطق الآلي» عند الضغط والتسجيل المحلي بدائل موسومة وليست صوت الكتاب الأصلي.</p></div>
  <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr)">
    <div class="kpi"><span class="k-ic" style="background:#e8f2fe">🗂️</span><strong>${arNum(doneGroups)} / ${arNum(totalGroups)}</strong><small>مجموعات خطوات أنجزتها (حسب توثيق هذا الجهاز)</small></div>
    <div class="kpi"><span class="k-ic" style="background:#e6f7ef">🤖</span><strong style="font-size:17px">رفيق اللغة</strong><small>حوار ونطق وقصة تفاعلية من لغة الدرس الموثّقة</small><button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="navigate('chatbot')">افتح الرفيق ←</button></div>
    <div class="kpi"><span class="k-ic" style="background:#efe7fd">🎙️</span><strong style="font-size:17px">مختبر حوارات PB</strong><small>حوارات Units 1–7 بصوت جهاز مولّد 0.6/0.8/1.0 وأنشطة المهارات الأربع</small><button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="navigate('dialogues')">افتح الحوارات ←</button></div>
    <div class="kpi"><span class="k-ic" style="background:#fdf2d5">🎮</span><strong style="font-size:17px">أنشطة تفاعلية</strong><small>بطاقات، ترتيب، توصيل، فراغات، حوارات…</small><button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="navigate('activities')">ابدأ نشاطاً ←</button></div>
  </div>
  <div class="lessons-grid" style="margin-bottom:16px">
    ${ENG8.units.map(u => `<article class="lesson-card" onclick="ENGSEL.unit=${u.n};navigate('englishUnit')">
      <div class="lesson-thumb" style="background:linear-gradient(120deg,#e67e22,#d35400)"><span class="t-grade" dir="ltr">Unit ${u.n}</span><span class="t-icon">🇬🇧</span></div>
      <div class="lesson-body"><h4 dir="ltr" style="text-align:left">Unit ${u.n}</h4><p>${esc(u.themeAr)}</p>
      <div class="progress-line" style="min-width:0"><i style="width:${engUnitPct(u)}%"></i></div>
      <div class="lesson-meta"><span>📖 ملخص الدليل: TB ص${esc(u.tbSummary)}</span><span>${arNum(u.steps.length)} مجموعات خطوات مستخرجة</span>${u.stepsComplete ? '<span class="badge b-excellent">قائمة الخطوات كاملة ✓</span>' : '<span class="badge b-mid">استخراج بقية خطوات الملخص: جارٍ</span>'}</div>
      </div></article>`).join("")}
  </div>
  <div class="panel"><h3>🧭 كيف تُدرَّس هذه المادة؟ (من دليل المعلم الرسمي)</h3>
    <div class="book-grid">${ENG8.pedagogy.map(p => `<div class="book-card"><h4 style="margin-top:0">${esc(p.title)}</h4><small>${esc(p.ref)}</small></div>`).join("")}</div>
    <p style="color:var(--muted);font-size:14px;margin-top:12px">أنشطة المنصة تتبع التدرج نفسه: فهم ← تطبيق ← تحليل ومقارنة ← بناء حوار/نص قصير، مع عمل ثنائي بالأزرار المخصصة داخل «رفيق اللغة»، وبالعربية كمساند عند الحاجة.</p></div>`;
}
function vEnglishUnit() {
  const u = engUnit(ENGSEL.unit) || ENG8.units[0];
  return `<button class="back-btn" onclick="navigate('english8')">→ كل الوحدات</button>
  <div class="page-head"><h2 dir="ltr" style="text-align:right">🇬🇧 Unit ${u.n}</h2><p>${esc(u.themeAr)} — الخطوات التالية مستخرجة حرفياً من جدول ملخص الوحدة في دليل المعلم (TB ص${esc(u.tbSummary)}). العنوان العربي أعلاه وصف موضوعي منّا، والوحدات في الكتاب مرقّمة فقط.</p></div>
  ${u.stepsComplete ? "" : `<div class="why-box"><b>تنبيه التوثيق:</b> القائمة بالأسفل تغطي ما استُخرج من صفحة الملخص الأولى لهذه الوحدة؛ التحقق من اكتمال بقية خطواتها من صفحة الملخص التالية في الدليل جارٍ — ولن تظهر خطوة هنا قبل استخراجها من المصدر.</div>`}
  <div class="task-list">${u.steps.map((s, i) => `
    <div class="task-item ${engStepDone(s.ref) ? "done" : ""}" style="align-items:flex-start">
      <button class="task-check" onclick="toggleEngStep('${s.ref}')" title="تعليم كمنجز">${engStepDone(s.ref) ? "✓" : ""}</button>
      <div style="flex:1">
        <strong dir="ltr" style="text-align:left;display:block">Step ${esc(s.steps)} — ${esc(s.topic)}</strong>
        <small>المواد: <span dir="ltr">${esc(s.materials)}</span>${bookTranscriptionSummary(u.n, s.ref)}${typeof dialogueStepSummary === "function" ? dialogueStepSummary(s.ref) : ""}${s.songs ? ` · 🎵 أغنية الكتاب: <span dir="ltr">${esc(s.songs.join(", "))}</span> (تسجيل Drive بانتظار مطابقة المعلم)` : ""}</small>
        <div class="en-lines">${s.language.map(l => `<div dir="ltr">${esc(l)}</div>`).join("")}</div>
      </div>
      <button class="btn btn-primary btn-sm" style="flex:none" onclick="ENGSEL.unit=${u.n};ENGSEL.step=${i};navigate('englishStep')">افتح الدرس ←</button>
    </div>`).join("")}</div>`;
}
function toggleEngStep(ref) {
  const i = store.engDoneSteps.indexOf(ref);
  if (i >= 0) store.engDoneSteps.splice(i, 1); else { store.engDoneSteps.push(ref); store.pointsBonus += 15; toast("🎉 خطوة منجزة (+١٥ نقطة)"); }
  save(); navigate(state.view === "englishStep" ? "englishStep" : "englishUnit");
}
function vEnglishStep() {
  const u = engUnit(ENGSEL.unit) || ENG8.units[0];
  const s = u.steps[ENGSEL.step] || u.steps[0];
  const acts = (typeof getActivitiesForStep === "function") ? getActivitiesForStep(s.ref) : [];
  const bookRecords = bookTranscriptionsForStep(u.n, s.ref);
  const stepDialogues = (typeof dialoguesForStep === "function") ? dialoguesForStep(s.ref).filter(d => d.unit === u.n) : [];
  return `<button class="back-btn" onclick="navigate('englishUnit')">→ خطوات الوحدة ${u.n}</button>
  <div class="page-head"><h2 dir="ltr" style="text-align:right">Unit ${u.n} · Step ${esc(s.steps)}</h2>
  <p dir="ltr" style="text-align:left;font-weight:700">${esc(s.topic)}</p></div>
  <div class="why-box"><b>🔎 مصدر هيكل هذه الصفحة:</b> جدول ملخص الوحدة في دليل المعلم TB ص${esc(u.tbSummary)} — المواد: <span dir="ltr">${esc(s.materials)}</span>.
  ${bookRecords.length ? "تظهر أدناه سجلات PB/WB منسوخة بصريًا بمراجع صفحاتها؛ وهي بانتظار مراجعة بشرية ثانية وليست Verified، وأي مشهد/نشاط مشتق منها يحمل وسم مصدره ومرجعه." : stepDialogues.length ? "توجد أدناه بطاقة حوار PB منسوخة بصريًا في «مختبر الحوارات» بمرجع صفحتها؛ هذا نسخ لأسطر الحوار فقط ولا يعني نسخ كل عناصر الصفحة أو WB، ويبقى بانتظار مراجعة بشرية ثانية وليس Verified." : "لا يوجد بعد سجل نص/تمرين PB/WB منسوخ بصريًا لهذه الخطوة؛ لذلك لا يُنسب إليها هنا أي نص من الكتابين."} ${srcBadge("verified")} <small>(وسم «موثّق» هنا يخص وجود/استخراج مصدر TB وهيكله، لا اعتماد سجلات PB/WB.)</small></div>
  <div class="dash-cols">
    <div>
      ${s.objectives ? `<div class="panel" style="margin-bottom:16px"><h3>🎯 أهداف التعلم (بنصّ الدليل — ${esc(s.objectivesRef)})</h3><ul class="objectives">${s.objectives.map(o => `<li dir="ltr" style="text-align:left">✔️ ${esc(o)}</li>`).join("")}</ul></div>` : ""}
      ${bookTranscriptionHTML(u.n, s.ref)}
      ${typeof stepDialogueHTML === "function" ? stepDialogueHTML(u.n, s.ref) : ""}
      <div class="panel" style="margin-bottom:16px"><h3>🗣️ اللغة المستهدفة في هذه الخطوة (أمثلة الدليل بنصّها)</h3>
        ${s.language.map(l => `<div class="today-item"><button class="icon-btn" title="النطق الآلي — صوت متصفحك عند الضغط، وليس التسجيل الصوتي الأصلي" onclick="speakEncoded('${speakEncodedText(l)}')">🔊</button><div dir="ltr" style="text-align:left;font-size:16px">${esc(l)}</div></div>`).join("")}
        <p class="print-note">🔊 <b>«النطق الآلي» اختياري:</b> زر الصوت هنا يشغّل صوت جهازك/متصفحك (Text-to-Speech) لجمل الدليل عند الضغط فقط، ولا يعمل تلقائياً بدل التسجيل. هو ليس التسجيل الصوتي الأصلي؛ تسجيلات Drive المفهرسة منفصلة وتشغيلها مؤجل، ولا تظهر بوصفها صوت هذه الخطوة إلا بعد اعتماد المعلم للمطابقة.</p></div>
      ${s.vocabAttested ? `<div class="panel"><h3>🧩 مفردات موثّقة من ملاحظات الدرس</h3><p style="color:var(--muted);font-size:13.5px;margin-bottom:10px">${esc(s.vocabRef)}</p><div style="display:flex;gap:7px;flex-wrap:wrap" dir="ltr">${s.vocabAttested.map(w => `<button class="chip-filter" onclick="speakEncoded('${speakEncodedText(w)}')">${esc(w)} 🔊</button>`).join("")}</div></div>` : ""}
    </div>
    <div>
      ${typeof stepSceneHTML === "function" ? stepSceneHTML(s) : ""}
      ${typeof stepAudioHTML === "function" ? stepAudioHTML(s) : ""}
      ${s.skills ? `<div class="panel" style="margin-bottom:16px"><h3>🧠 أنشطة ومهارات الخطوة (كما خططها الدليل)</h3><ul class="objectives">${s.skills.map(k => `<li>${esc(k)}</li>`).join("")}</ul></div>` : ""}
      <div class="panel" style="margin-bottom:16px"><h3>🎮 أنشطة تفاعلية لهذه الخطوة</h3>
        ${acts.length ? acts.map(a => `<div class="continue-card" onclick="playActivity('${a.id}')"><span class="c-ic" style="background:#fdebd8">${ACT_TYPES[a.type] ? ACT_TYPES[a.type].icon : "🎮"}</span><div style="flex:1"><strong>${esc(a.title)}</strong><small>${ACT_TYPES[a.type] ? ACT_TYPES[a.type].label : a.type} · مهارة: ${esc(skillAr(a.skill))}</small></div><span class="btn btn-primary btn-sm">العب ←</span></div>`).join("")
        : `<div class="empty-state" style="padding:20px"><div class="e-ic">🛠️</div><p>لا أنشطة منشورة لهذه الخطوة بعد — يمكن لمعلمك إنشاء نشاط لها من «استوديو المعلم الذكي».</p></div>`}
        <button class="btn btn-ghost full" style="margin-top:8px;width:100%" onclick="navigate('chatbot')">🤖 تدرّب مع رفيق اللغة على حوارات هذه المادة</button></div>
      <div class="panel">
        ${engStepDone(s.ref) ? `<div style="text-align:center"><div style="font-size:30px">🎉</div><strong style="color:var(--green)">أنجزت هذه الخطوة</strong></div>` : `<button class="btn btn-primary full" onclick="toggleEngStep('${s.ref}')">✅ تعليم الخطوة كمكتملة (+١٥ نقطة)</button>`}
        <button class="btn btn-ghost full" style="margin-top:9px;width:100%" onclick="downloadEngStep()">📥 تحميل ملخص الخطوة (للمذاكرة دون اتصال)</button>
      </div>
    </div>
  </div>`;
}
function downloadEngStep() {
  const u = engUnit(ENGSEL.unit), s = u.steps[ENGSEL.step];
  const bookRecords = bookTranscriptionsForStep(u.n, s.ref);
  const bookText = bookRecords.length ? "\n\nVisually transcribed PB/WB records (pending a second human review; not Verified):\n" + bookRecords.map(t =>
    `\n[${t.book} printed p. ${t.printedPage} · Exercise ${t.exercise} · ${t.status}]` +
    (t.title ? `\n${t.title}` : "") +
    (t.instruction ? `\n${t.instruction}` : "") +
    (t.lines && t.lines.length ? "\n" + t.lines.join("\n") : "\nNo text is attributed to this page because it was not located in the supplied scan sequence.") +
    (t.visualNote ? `\nVisual note: ${t.visualNote}` : "") +
    `\nTranscription record: ${t.transcriber || ""} · ${t.transcriptionDate || ""}`
  ).join("\n") : "";
  const stepDialogues = (typeof dialoguesForStep === "function") ? dialoguesForStep(s.ref).filter(d => d.unit === u.n) : [];
  const dialogueText = stepDialogues.length ? "\n\nBook Dialogue Lab entries (visually transcribed dialogue lines only; pending a second human review; not Verified; generated device TTS only, no verified Drive link):\n" + stepDialogues.map(d =>
    `\n[${d.title} · ${d.printedPages} · Exercise ${d.exercise} · TB cassette review reference ${d.csRefs}]` +
    `\nSource: ${d.pdfPages}` +
    `\nNote: ${d.sourceNote}` +
    "\n" + d.lines.map((l, i) => `${i + 1}. ${l.speaker}: ${l.text}${l.completedText ? ` [Practice completion, not printed in the gap: ${l.completedText}]` : ""}`).join("\n") +
    `\nPlatform writing task: ${d.writePromptAr}` +
    `\nPlatform speaking task: ${d.speakPromptAr}`
  ).join("\n") : "";
  const text = "Madrasati Yemen — English Grade 8 (Crescent Book 2)\n" + "=".repeat(46) +
    `\nUnit ${u.n} · Step ${s.steps}\nTopic: ${s.topic}\nMaterials: ${s.materials}\nSource: Teacher's Book 2 summary, TB p.${u.tbSummary}\n\nTarget language (from the Teacher's Book):\n` +
    s.language.map(l => "- " + l).join("\n") +
    (s.objectives ? "\n\nLearning objectives (" + s.objectivesRef + "):\n" + s.objectives.map(o => "- " + o).join("\n") : "") +
    (s.vocabAttested ? "\n\nVocabulary attested in TB lesson notes: " + s.vocabAttested.join(", ") : "") + bookText + dialogueText + "\n";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\ufeff" + text], { type: "text/plain;charset=utf-8" }));
  a.download = `english8-unit${u.n}-step${s.steps.replace(/\//g, "-")}.txt`; a.click(); URL.revokeObjectURL(a.href);
  toast("📥 نُزّل ملخص الخطوة بمرجع مصدره");
}
function speakEncodedText(text) { return encodeURIComponent(String(text ?? "")).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"); }
function speakEncoded(encoded) { try { speakEN(decodeURIComponent(encoded)); } catch (e) { toast("⚠️ تعذّر فك نص النطق الآلي"); } }
function speakEN(text) {
  try {
    if (!("speechSynthesis" in window)) { toast("⚠️ النطق الآلي غير مدعوم في هذا المتصفح/الجهاز"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[—]/g, ". "));
    u.lang = "en-GB"; u.rate = 0.92; speechSynthesis.speak(u);
  } catch (e) { toast("⚠️ تعذّر تشغيل النطق الآلي على هذا الجهاز"); }
}
function skillAr(k) { return ({ vocabulary: "المفردات", grammar: "القواعد", reading: "القراءة", listening: "الاستماع", speaking: "التحدث", writing: "الكتابة" })[k] || k; }
window.EXTRA_VIEWS = Object.assign(window.EXTRA_VIEWS || {}, { english8: vEnglish8, englishUnit: vEnglishUnit, englishStep: vEnglishStep });
