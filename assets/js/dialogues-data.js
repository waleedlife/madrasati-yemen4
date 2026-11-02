/* ===== Madrasati Yemen — Book Dialogue Lab data =====
   Dialogue texts below were visually read from owner-supplied Pupil's Book scans.
   OCR in the compressed file was used only to locate candidates; it was not copied as source truth.
   Every text remains pending a second human review and must not be called Verified.
   Questions, Arabic setting notes, writing prompts and speaking prompts are platform-created practice,
   not additional Pupil's Book text. Gap completions are explicitly marked where the page leaves a blank. */

const DIALOGUE_SOURCE = {
  grade: "Grade 8",
  course: "English for Yemen — Crescent Book 2",
  newFile: "english_pubils_8th-1_compressed.pdf",
  newFileSha256: "1fa54a6c41ab58f3e03f2ef4828b7a27af0d1ee2550213e953535d7204051d86",
  newFilePages: 45,
  newFilePrintedCoverage: "Cover, contents, printed p.1 and printed pp.3–44; printed p.2 is absent and Units 5–7 are not in this attachment.",
  part2File: "english_pubils_8th-2.pdf",
  part2FileSha256: "8fed2367bea7f84c380cad8255c9403addaa3c197ea51763315d65cd7cd98b7f",
  part2FilePages: 33,
  part2PrintedCoverage: "Printed pp.45–77; within this attachment, printed page = PDF page + 44.",
  method: "OCR/text layer used only as a page locator; dialogue wording and speaker order were read from rendered page images. Speaker names are printed on most pages; where speech-bubble tails or clothing identify a speaker, the entry says so.",
  status: "transcribed-pending-second-review",
  driveNote: "No Drive recording is attached to any dialogue in this dataset. CS numbers are Teacher's Book material references and future listening-review candidates only; filename or number similarity was not treated as a match."
};

const DLG_LINE = (speaker, text, extra = {}) => ({ speaker, text, ...extra });
const DLG_Q = (q, options, a, why) => ({ q, options, a, why });

const BOOK_DIALOGUES = [
  {
    id: "dlg-u1-bill", unit: 1, stepRef: "u1g3", exercise: "1.6", title: "Bill", kind: "conversation",
    printedPages: "PB printed p.3", pdfPages: "PB PDF p.5 in the earlier full supplied scan", transcriptionId: "u1-pb03-1-6-bill",
    csRefs: "CS3", icon: "🏫", settingAr: "ولدان عند مكتبين في الصف؛ يسأل Tom زميله Bill عن بياناته الشخصية.",
    pictureContextAr: "سياق الصورة في الكتاب فصل دراسي، لذلك تُستخدم أصوات أولاد مولّدة آلياً ونبرة أسئلة/أجوبة قصيرة.",
    sourceNote: "نص الحوار منسوخ بصرياً في سجل PB3 الحالي وبانتظار مراجعة بشرية ثانية.",
    speakers: { Tom: { voice: "boy" }, Bill: { voice: "boy2" } },
    lines: [
      DLG_LINE("Tom", "What's your name?"), DLG_LINE("Bill", "Bill. B-i-l-l.", { speechText: "Bill. B. I. L. L." }),
      DLG_LINE("Tom", "How old are you?"), DLG_LINE("Bill", "Thirteen."),
      DLG_LINE("Tom", "Where are you from?"), DLG_LINE("Bill", "I'm from England."),
      DLG_LINE("Tom", "How many brothers have you got?"), DLG_LINE("Bill", "One."),
      DLG_LINE("Tom", "How many sisters have you got?"), DLG_LINE("Bill", "Two."),
      DLG_LINE("Tom", "What do you do after school?"), DLG_LINE("Bill", "I watch TV and I go swimming every Tuesday."),
      DLG_LINE("Tom", "Do you play football?"), DLG_LINE("Bill", "No, I don't.")
    ],
    questions: [
      DLG_Q("How old is Bill?", ["Twelve", "Thirteen", "Fourteen"], 1, "يُجيب Bill بكلمة Thirteen."),
      DLG_Q("Where is Bill from?", ["Yemen", "Kuwait", "England"], 2, "يقول: I'm from England."),
      DLG_Q("What does Bill do every Tuesday?", ["He goes swimming.", "He plays football.", "He goes shopping."], 0, "يقول إنه يشاهد التلفاز ويذهب للسباحة كل ثلاثاء."),
      DLG_Q("Does Bill play football?", ["Yes, he does.", "No, he doesn't.", "The dialogue does not say."], 1, "جوابه الأخير: No, I don't.")
    ],
    keyLine: 11, focus: ["What's your name?", "How old are you?", "Where are you from?", "every Tuesday"],
    writePromptAr: "اكتب إجاباتك الشخصية عن الاسم والعمر والبلد والإخوة ونشاط بعد المدرسة في 5 جمل قصيرة.",
    writeStarter: "My name is ... . I am ... . I am from ... . After school, I ... .",
    speakPromptAr: "اختر دور Tom أو Bill، ثم أعد التمثيل مع تغيير بيانات Bill إلى بياناتك في الجولة الثانية."
  },
  {
    id: "dlg-u2-takeaway", unit: 2, stepRef: "u2g3", exercise: "2.6", title: "What would you like?", kind: "conversation",
    printedPages: "PB printed p.10", pdfPages: "PB PDF p.12 in the earlier full supplied scan", transcriptionId: "u2-pb10-2-6",
    csRefs: "CS6/7", icon: "🥪", settingAr: "محل Ali's Take-Away وقائمة ساندويتشات وعصائر ومشروبات غازية وحليب.",
    pictureContextAr: "قائمة الصورة تشمل burger وcheese/chicken/egg sandwiches وorange/apple juice و7-up وPepsi وmilk.",
    sourceNote: "أسماء المتحدثين غير مطبوعة في فقاعات الصورة؛ استُخدمت تسميتا الدور Server وCustomer للتوضيح فقط.",
    speakers: { Server: { voice: "man" }, Customer: { voice: "girl" } },
    lines: [
      DLG_LINE("Server", "What would you like?"), DLG_LINE("Customer", "I'd like a cheese sandwich, please."),
      DLG_LINE("Server", "And what would you like to drink?"), DLG_LINE("Customer", "I'd like a Pepsi, please."),
      DLG_LINE("Server", "One cheese sandwich and one Pepsi.")
    ],
    questions: [
      DLG_Q("What food does the customer order?", ["A burger", "A cheese sandwich", "An egg sandwich"], 1, "تقول: I'd like a cheese sandwich, please."),
      DLG_Q("What does the customer want to drink?", ["Milk", "Apple juice", "A Pepsi"], 2, "تقول: I'd like a Pepsi, please."),
      DLG_Q("What does the server repeat at the end?", ["One cheese sandwich and one Pepsi.", "One burger and one milk.", "Two orange juices."], 0, "السطر الأخير يؤكد الطلب كاملاً.")
    ],
    keyLine: 1, focus: ["What would you like?", "I'd like ..., please.", "cheese sandwich", "Pepsi"],
    writePromptAr: "اكتب طلب طعام وشراب جديداً من قائمة الصفحة باستخدام I'd like ..., please.",
    writeStarter: "I'd like a ... sandwich, please. And I'd like ... to drink.",
    speakPromptAr: "تمثيل ثنائي في محل وجبات: بدّل الطعام والشراب في كل جولة، وحافظ على please."
  },
  {
    id: "dlg-u2-kuwait", unit: 2, stepRef: "u2g4", exercise: "2.7", title: "The girl from Kuwait", kind: "conversation",
    printedPages: "PB printed p.11", pdfPages: "PB PDF p.13 in the earlier full supplied scan", transcriptionId: "u2-pb11-2-7",
    csRefs: "CS8/9", icon: "🏠", settingAr: "في بيت Aisha؛ تُعرّف Ameena القادمة من الكويت إلى Nadia وFatma، ثم يُرتَّب لقاء غداً.",
    pictureContextAr: "الصفحة تُظهر الترحيب والتعارف داخل المنزل؛ الأصوات المولّدة لفتيات بأدوار مسمّاة في النص.",
    sourceNote: "الأسماء مطبوعة قبل الأسطر في الصفحة. اسم الفتاة الكويتية Ameena (A-m-e-e-n-a)، وهو مختلف عن Nadia.",
    speakers: { Narrator: { voice: "narrator" }, Aisha: { voice: "girl" }, Nadia: { voice: "girl2" }, Fatma: { voice: "girl3" }, Ameena: { voice: "girl4" } },
    lines: [
      DLG_LINE("Narrator", "At Aisha's house", { kind: "narration" }),
      DLG_LINE("Aisha", "This is Ameena. She's from Kuwait. She's here on holiday."),
      DLG_LINE("Nadia", "Hello, Ameena. My name's Nadia."),
      DLG_LINE("Fatma", "And I'm Fatma. Ameena, would you like to come to my house some time?"),
      DLG_LINE("Ameena", "I'd love to, Fatma. When?"), DLG_LINE("Fatma", "Tomorrow."),
      DLG_LINE("Ameena", "Fine. What time?"), DLG_LINE("Fatma", "Ten o'clock."),
      DLG_LINE("Ameena", "Ten o'clock. OK."), DLG_LINE("Fatma", "Great! We can listen to my cassettes."),
      DLG_LINE("Ameena", "OK. Your house, tomorrow at ten o'clock. Oh, Fatma, where do you live?"),
      DLG_LINE("Fatma", "Next to the Post Office."), DLG_LINE("Ameena", "Next to the Post Office. OK.")
    ],
    questions: [
      DLG_Q("Where is Ameena from?", ["Dubai", "Kuwait", "England"], 1, "تُقدّمها Aisha: She's from Kuwait."),
      DLG_Q("When will Ameena go to Fatma's house?", ["Today at nine", "Tomorrow at ten", "Next week"], 1, "يتفقان على tomorrow at ten o'clock."),
      DLG_Q("Where does Fatma live?", ["Behind the school", "Next to the Post Office", "Near the beach"], 1, "تقول Fatma: Next to the Post Office."),
      DLG_Q("What can they listen to at Fatma's house?", ["The radio", "Fatma's cassettes", "A story"], 1, "تقول: We can listen to my cassettes.")
    ],
    keyLine: 3, focus: ["She's from Kuwait.", "on holiday", "Would you like to come ...?", "tomorrow at ten o'clock"],
    writePromptAr: "اكتب دعوة قصيرة لصديق: اليوم والوقت والمكان ونشاط ستفعلانه.",
    writeStarter: "Would you like to come to my house tomorrow at ...? We can ... .",
    speakPromptAr: "أدّوا الحوار بأربعة أدوار، ثم بدّلوا اليوم والوقت ومكان السكن دون تغيير بنية الدعوة."
  },
  {
    id: "dlg-u2-presents", unit: 2, stepRef: "u2g5", exercise: "2.9", title: "Presents", kind: "conversation",
    printedPages: "PB printed p.12", pdfPages: "PB PDF p.14 in the earlier full supplied scan", transcriptionId: "u2-pb12-2-9",
    csRefs: "CS10/11", icon: "🎁", settingAr: "داخل محل ألعاب؛ تختار Ameena هدية لأخيها الصغير بمساعدة Fatma.",
    pictureContextAr: "بطاقات ألعاب الصورة تشمل jigsaw puzzle وdoll وchess set وmodel plane وmodel boat.",
    sourceNote: "الحوار المطبوع أسفل بطاقات الألعاب؛ أسماء المتحدثتين مطبوعة.",
    speakers: { Ameena: { voice: "girl" }, Fatma: { voice: "girl2" } },
    lines: [
      DLG_LINE("Ameena", "What can I buy for my little brother?"), DLG_LINE("Fatma", "How about a football?"),
      DLG_LINE("Ameena", "He's got a football."), DLG_LINE("Fatma", "How about a model boat?"),
      DLG_LINE("Ameena", "That's a good idea.")
    ],
    questions: [
      DLG_Q("Who is the present for?", ["Ameena's little brother", "Fatma", "Ameena's mother"], 0, "تسأل Ameena عمّا يمكن شراؤه لأخيها الصغير."),
      DLG_Q("Why doesn't Ameena choose a football?", ["It is too big.", "Her brother has already got one.", "The shop has no football."], 1, "تقول: He's got a football."),
      DLG_Q("Which suggestion does Ameena accept?", ["A doll", "A chess set", "A model boat"], 2, "تقول عن model boat: That's a good idea.")
    ],
    keyLine: 3, focus: ["What can I buy for ...?", "How about ...?", "He's got ...", "That's a good idea."],
    writePromptAr: "اكتب حواراً من 4 أسطر تقترح فيه هدية من بطاقات الصفحة وترفض اقتراحاً أول لسبب واضح.",
    writeStarter: "What can I buy for ...? How about ...? He's/She's got ... . How about ...?",
    speakPromptAr: "تبادل الأدوار في محل الألعاب، وغيّر الشخص واللعبة في كل جولة."
  },
  {
    id: "dlg-u2-shopping-where", unit: 2, stepRef: "u2g5", exercise: "2.10 / 2.11", title: "Where can I buy a ring?", kind: "pair-exchange",
    printedPages: "PB printed p.13", pdfPages: "PB PDF p.15 in the earlier full supplied scan", transcriptionId: "u2-pb13-2-10-2-11",
    csRefs: "CS10/11", icon: "💍", settingAr: "واجهات محال كتب ومجوهرات وملابس وأحذية مع 12 غرضاً مرقماً.",
    pictureContextAr: "الأغراض المطبوعة في الصورة تشمل glasses وpaints وbracelet وnecklace وcomic وearrings وtie وshorts وpaintbrush وsandals وpaper وring.",
    sourceNote: "التبادل المطبوع بسطرين فقط وبعلامتي ○/● بلا أسماء؛ استُخدم Speaker A وSpeaker B دون اختراع شخصيتين.",
    speakers: { "Speaker A": { voice: "girl" }, "Speaker B": { voice: "girl2" } },
    lines: [DLG_LINE("Speaker A", "Where can I buy a ring?"), DLG_LINE("Speaker B", "At the jewellery shop.")],
    questions: [
      DLG_Q("What does Speaker A want to buy?", ["A ring", "A comic", "A pair of sandals"], 0, "يسأل: Where can I buy a ring?"),
      DLG_Q("Where can Speaker A buy it?", ["At the bookshop", "At the jewellery shop", "At the shoe shop"], 1, "الإجابة المطبوعة: At the jewellery shop."),
      DLG_Q("Which question asks about a place to buy something?", ["How old are you?", "Where can I buy a ring?", "What time is it?"], 1, "تبدأ صيغة الصفحة بـ Where can I buy ...?")
    ],
    keyLine: 0, focus: ["Where can I buy ...?", "At the jewellery shop.", "ring", "comic", "sandals"],
    writePromptAr: "اكتب 3 أزواج سؤال/جواب لأغراض أخرى من صورة الصفحة ومحالها.",
    writeStarter: "Where can I buy ...? At the ... shop.",
    speakPromptAr: "سلسلة صفية: طالب يسأل عن غرض، وزميله يجيب باسم المحل، ثم يتبادلان."
  },
  {
    id: "dlg-u2-ask-Hassan", unit: 2, stepRef: "u2g6", exercise: "2.13", title: "Let's ask Hassan.", kind: "conversation-with-open-line",
    printedPages: "PB printed p.14", pdfPages: "PB PDF p.16 in the earlier full supplied scan", transcriptionId: "u2-pb14-2-13",
    csRefs: "CS12", icon: "⚽", settingAr: "Hassan من Dubai يزور أصدقاءه في اليمن؛ يقترح Taha أنشطة ويرفض Ali كل اقتراح لسبب.",
    pictureContextAr: "الصفحة تضع الحوار بعد سطر تمهيدي عن Hassan وزيارته؛ نهاية Hassan مفتوحة في الكتاب نفسه.",
    sourceNote: "سطر Hassan مطبوع ناقصاً (I'd like to ...)؛ إكماله بـ play football استنتاج تدريبي من رد Ali التالي وليس نصاً مطبوعاً داخل سطر Hassan.",
    speakers: { Narrator: { voice: "narrator" }, Ali: { voice: "boy" }, Taha: { voice: "boy2" }, Hassan: { voice: "boy3" } },
    lines: [
      DLG_LINE("Narrator", "Hassan is from Dubai. He is visiting his friends in Yemen.", { kind: "narration" }),
      DLG_LINE("Ali", "What would you like to do now?"), DLG_LINE("Taha", "Let's watch TV."),
      DLG_LINE("Ali", "No. I don't like watching TV."), DLG_LINE("Taha", "How about going to the take-away?"),
      DLG_LINE("Ali", "No. I'm not hungry."), DLG_LINE("Taha", "OK. Let's go to Fuad's house."),
      DLG_LINE("Ali", "No. He's not there. He's on holiday."),
      DLG_LINE("Taha", "Let's ask Hassan. Hassan, what would you like to do?"),
      DLG_LINE("Hassan", "I'd like to ...", { completedText: "I'd like to play football.", gapAnswer: "play football", gapNote: "إكمال مستنتج من سطر Ali التالي، وليس مطبوعاً في سطر Hassan." }),
      DLG_LINE("Ali", "OK. Let's play football.")
    ],
    questions: [
      DLG_Q("Where is Hassan from?", ["Kuwait", "Dubai", "England"], 1, "السطر التمهيدي يقول: Hassan is from Dubai."),
      DLG_Q("Why does Ali reject the take-away?", ["He is not hungry.", "It is closed.", "He has no money."], 0, "يقول: I'm not hungry."),
      DLG_Q("Why can't they go to Fuad's house?", ["Fuad is at school.", "Fuad is on holiday.", "The house is far away."], 1, "يقول Ali: He's not there. He's on holiday."),
      DLG_Q("Which activity do they agree to do at the end?", ["Watch TV", "Go to the take-away", "Play football"], 2, "يختم Ali: OK. Let's play football.")
    ],
    keyLine: 8, focus: ["What would you like to do?", "Let's ...", "How about ...-ing?", "I'd like to ..."],
    writePromptAr: "اكتب 6 أسطر: اقتراحان مرفوضان لسببين مختلفين ثم اقتراح مقبول.",
    writeStarter: "Let's ... . No, I don't like ... . How about ...? OK, let's ... .",
    speakPromptAr: "ثلاثة أدوار؛ على Hassan اختيار نشاط جديد في إعادة التمثيل بعد سماع الرفضين."
  },
  {
    id: "dlg-u2-family-presents", unit: 2, stepRef: "u2g7", exercise: "2.14", title: "Presents for the family", kind: "two-conversations",
    printedPages: "PB printed p.15", pdfPages: "PB PDF p.17 in the earlier full supplied scan", transcriptionId: "u2-pb15-2-14",
    csRefs: "CS13", icon: "⌚", settingAr: "يشتري Hassan هدايا لعائلته؛ يسأله Taha عن ساعة، وSaleh عن صندل.",
    pictureContextAr: "النص التمهيدي المطبوع يذكر أختي Hassan وأخاه وأعمارهم ورحلة تسوق السبت الماضي.",
    sourceNote: "نُقل النص التمهيدي والمحادثتان كما في سجل PB15 الحالي.",
    speakers: { Narrator: { voice: "narrator" }, Taha: { voice: "boy" }, Hassan: { voice: "boy2" }, Saleh: { voice: "boy3" } },
    lines: [
      DLG_LINE("Narrator", "Hassan has got two sisters and one brother. Nadia is five and Amna is eleven. Ali is seventeen. Last Saturday Hassan wanted to buy presents for his family, so he went shopping.", { kind: "narration" }),
      DLG_LINE("Taha", "That's a nice watch."), DLG_LINE("Hassan", "Yes. It's for my mother."),
      DLG_LINE("Taha", "Where did you buy it?"), DLG_LINE("Hassan", "At the jewellery shop."),
      DLG_LINE("Saleh", "Those are nice sandals."), DLG_LINE("Hassan", "Yes. They're for my brother."),
      DLG_LINE("Saleh", "Where did you buy them?"), DLG_LINE("Hassan", "At the shoe shop.")
    ],
    questions: [
      DLG_Q("Who is the watch for?", ["Hassan's mother", "Hassan's brother", "Taha"], 0, "يقول Hassan: It's for my mother."),
      DLG_Q("Where did Hassan buy the watch?", ["At the shoe shop", "At the jewellery shop", "At the bookshop"], 1, "يُجيب: At the jewellery shop."),
      DLG_Q("Who are the sandals for?", ["Saleh", "Hassan's sister", "Hassan's brother"], 2, "يقول: They're for my brother."),
      DLG_Q("When did Hassan go shopping?", ["Last Saturday", "Every Tuesday", "Tomorrow"], 0, "النص التمهيدي يبدأ زمن التسوق بـ Last Saturday.")
    ],
    keyLine: 3, focus: ["It's for my mother.", "Where did you buy it?", "They're for my brother.", "last Saturday"],
    writePromptAr: "اكتب محادثة قصيرة عن هديتين: لمن كل هدية؟ ومن أين اشتريتها؟",
    writeStarter: "That's a nice ... . It's for ... . Where did you buy it? At the ... .",
    speakPromptAr: "أمسك غرضاً صفياً متخيلاً ودع زميلك يسأل لمن هو وأين اشتريته."
  },
  {
    id: "dlg-u3-egg-sandwich", unit: 3, stepRef: "u3g1", exercise: "3.2", title: "Let's make an egg sandwich.", kind: "cartoon-dialogue",
    printedPages: "PB printed p.18", pdfPages: "PDF p.19 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS15", icon: "🍳", settingAr: "مطبخ بيت Aisha؛ Nadia جائعة، لكن الخزائن والثلاجة بلا خبز أو بيض.",
    pictureContextAr: "تسلسل الرسوم يبيّن البحث عن bread ثم eggs، ثم اقتراح الذهاب إلى take-away.",
    sourceNote: "نُسخت الفقاعات بصرياً. تعيين Nadia/Aisha يعتمد على السطر التمهيدي وألوان الملابس وذيول الفقاعات، وما يزال بانتظار مراجعة بشرية ثانية.",
    speakers: { Narrator: { voice: "narrator" }, Nadia: { voice: "girl" }, Aisha: { voice: "girl2" } },
    lines: [
      DLG_LINE("Narrator", "Nadia is at Aisha's house. She is hungry.", { kind: "narration" }),
      DLG_LINE("Nadia", "I'm hungry."), DLG_LINE("Aisha", "Let's make an egg sandwich."),
      DLG_LINE("Nadia", "OK. We need some bread and some eggs."),
      DLG_LINE("Aisha", "There isn't any bread."), DLG_LINE("Aisha", "And there aren't any eggs."),
      DLG_LINE("Nadia", "Oh! Let's go to the take-away.")
    ],
    questions: [
      DLG_Q("Why does Aisha suggest making a sandwich?", ["Nadia is hungry.", "It is a birthday.", "They are going to school."], 0, "يبدأ التمهيد: Nadia ... She is hungry."),
      DLG_Q("What do they need?", ["Bread and eggs", "Cheese and olives", "Paper and glue"], 0, "تقول Nadia: We need some bread and some eggs."),
      DLG_Q("What is the problem?", ["The shop is closed.", "There isn't any bread and there aren't any eggs.", "The eggs are on the table."], 1, "هذان هما سطرا البحث في المطبخ."),
      DLG_Q("Where do they decide to go?", ["To the bakery", "To the take-away", "To school"], 1, "يختم الحوار: Let's go to the take-away.")
    ],
    keyLine: 3, focus: ["I'm hungry.", "We need some ...", "There isn't any ...", "There aren't any ..."],
    writePromptAr: "اكتب قائمة مكوّنات ساندويتش آخر، ثم جملتين: ما المتوفر وما غير المتوفر.",
    writeStarter: "We need some ... and some ... . There isn't any ... .",
    speakPromptAr: "تمثيل في المطبخ: أحدكما يبحث ويعلن غياب مكوّن، والآخر يقترح حلاً."
  },
  {
    id: "dlg-u3-present-sam", unit: 3, stepRef: "u3g2", exercise: "3.4", title: "A present for Sam", kind: "conversation",
    printedPages: "PB printed p.19", pdfPages: "PDF p.20 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS16", icon: "🪁", settingAr: "ثلاثة أصدقاء يقررون صنع هدية عيد ميلاد Sam بدل شرائها، وتحتهم ورق وغراء وخيط وخشب وطلاء ومقص.",
    pictureContextAr: "مواد الصورة هي أدلة النشاط، لكن هذا السجل لا يحوّل الاستنتاج البصري عن نوع الهدية إلى نص مطبوع.",
    sourceNote: "أسماء Peter وSimon وJohn مطبوعة قبل كل سطر.",
    speakers: { Peter: { voice: "boy" }, Simon: { voice: "boy2" }, John: { voice: "boy3" } },
    lines: [
      DLG_LINE("Peter", "It's Sam's birthday."), DLG_LINE("Simon", "Let's buy him a present."),
      DLG_LINE("Peter", "We haven't got any money."), DLG_LINE("John", "OK. Let's make him a present."),
      DLG_LINE("Peter", "What can we make?"), DLG_LINE("Simon", "I know."),
      DLG_LINE("John", "Right. We need some paper and some glue."), DLG_LINE("Peter", "We need some string."),
      DLG_LINE("Simon", "We need some wood."), DLG_LINE("John", "And we need some paint and some scissors.")
    ],
    questions: [
      DLG_Q("Why do the boys decide to make a present?", ["Sam asked them to make one.", "They haven't got any money.", "The shops are closed."], 1, "يقول Peter: We haven't got any money."),
      DLG_Q("Who says they need string?", ["Peter", "Simon", "John"], 0, "سطر Peter هو: We need some string."),
      DLG_Q("Which pair does John mention last?", ["Paper and glue", "Wood and string", "Paint and scissors"], 2, "ينهي John القائمة بـ paint and scissors."),
      DLG_Q("What is the occasion?", ["Sam's first school day", "Sam's birthday", "A school party"], 1, "يبدأ Peter: It's Sam's birthday.")
    ],
    keyLine: 6, focus: ["Let's buy him ...", "We haven't got any money.", "Let's make him ...", "We need some ..."],
    writePromptAr: "اكتب خطة هدية مصنوعة يدوياً: لمن؟ وما 4 مواد تحتاجها؟",
    writeStarter: "Let's make ... a present. We need some ..., some ... and some ... .",
    speakPromptAr: "ثلاثة أدوار لتخطيط الهدية؛ بدّلوا المواد مع إبقاء We need some ... ."
  },
  {
    id: "dlg-u3-who-will-help", unit: 3, stepRef: "u3g3", exercise: "3.5", title: "Who will help?", kind: "conversation",
    printedPages: "PB printed p.20", pdfPages: "PDF p.21 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS18", icon: "🎉", settingAr: "Mrs Brown تخطط لحفل عيد ميلاد Sam؛ يتطوع الأولاد بالمشروبات والطعام والموسيقى.",
    pictureContextAr: "الرسم العلوي يبيّن Mrs Brown وثلاث فقاعات تطوع، ثم نص مسمّى يوزع المهام.",
    sourceNote: "أسماء أولاد فقاعات الرسم العلوية غير مطبوعة بجانبها، فاستُخدم Child 1/2/3؛ كل الأسطر اللاحقة مسمّاة مطبوعاً.",
    speakers: { "Mrs Brown": { voice: "woman" }, "Child 1": { voice: "boy" }, "Child 2": { voice: "boy2" }, "Child 3": { voice: "boy3" }, Peter: { voice: "boy" }, Simon: { voice: "boy2" }, John: { voice: "boy3" } },
    lines: [
      DLG_LINE("Mrs Brown", "It's Sam's birthday. I want to have a party. Who'll help?"),
      DLG_LINE("Child 1", "I will!"), DLG_LINE("Child 2", "I will!"), DLG_LINE("Child 3", "I will, Mrs Brown."),
      DLG_LINE("Mrs Brown", "Thank you. Now, what do we need?"), DLG_LINE("Peter", "We need something to drink."),
      DLG_LINE("Simon", "I'll bring some Pepsis."), DLG_LINE("John", "And I'll bring some orange juice."),
      DLG_LINE("Simon", "And we need something to eat."), DLG_LINE("Peter", "I'll make some sandwiches."),
      DLG_LINE("Simon", "I'll bring some cheese and olives."), DLG_LINE("Mrs Brown", "And I'll make a cake."),
      DLG_LINE("Mrs Brown", "Anything else?"), DLG_LINE("John", "We need some music."),
      DLG_LINE("Simon", "I'll bring some cassettes.")
    ],
    questions: [
      DLG_Q("Why does Mrs Brown want help?", ["She wants to have a party for Sam's birthday.", "She is cleaning a house.", "She is building a tree house."], 0, "تقول إن عيد ميلاد Sam وتريد إقامة حفل."),
      DLG_Q("Who will make sandwiches?", ["John", "Peter", "Simon"], 1, "يقول Peter: I'll make some sandwiches."),
      DLG_Q("Who will bring cheese and olives?", ["Simon", "Mrs Brown", "Peter"], 0, "يقول Simon إنه سيحضر cheese and olives."),
      DLG_Q("What will Simon bring for music?", ["A radio", "Some cassettes", "A cake"], 1, "السطر الأخير: I'll bring some cassettes.")
    ],
    keyLine: 9, focus: ["Who'll help?", "I will!", "I'll bring some ...", "I'll make a/some ..."],
    writePromptAr: "اكتب خطة حفل من 5 مهام بصيغة I'll bring/make ... .",
    writeStarter: "I'll bring some ... . I'll make ... . We'll need some ... .",
    speakPromptAr: "اجتماع تخطيط جماعي: قائد يسأل Who'll help? وكل طالب يتطوع بمهمة مختلفة."
  },
  {
    id: "dlg-u3-feelings", unit: 3, stepRef: "u3g5", exercise: "3.9", title: "How did they feel?", kind: "four-mini-dialogues-with-gaps",
    printedPages: "PB printed p.23", pdfPages: "PDF p.24 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS20–22", icon: "💭", settingAr: "أربع محادثات قصيرة عن حادث كاد يقع، ومشوار شاطئ طويل، وساعة مكسورة، وطائرة ورقية طارت بعيداً.",
    pictureContextAr: "أسفل الصفحة بنك مشاعر: happy وangry وtired وfrightened وsad، مع بداية I was very ... .",
    sourceNote: "الفراغات الزرقاء في الصفحة متروكة للطالب. الإكمالات هنا حلول سياقية تدريبية من المنصة، لا نصوص مطبوعة داخل الفراغات.",
    speakers: { Ali: { voice: "boy" }, Ahmed: { voice: "boy2" }, Hassan: { voice: "boy3" }, Fuad: { voice: "boy4" }, Nadia: { voice: "girl" }, Aisha: { voice: "girl2" }, Sam: { voice: "boy" }, Tom: { voice: "boy2" } },
    lines: [
      DLG_LINE("Ali", "A little boy ran in front of our car last night.", { section: "Mini-dialogue 1" }),
      DLG_LINE("Ahmed", "Oh, no! Did you hit him?"),
      DLG_LINE("Ali", "No. My father stopped the car in time. But ____.", { completedText: "No. My father stopped the car in time. But I was very frightened.", gapAnswer: "I was very frightened" }),
      DLG_LINE("Hassan", "Where did you go yesterday?", { section: "Mini-dialogue 2" }),
      DLG_LINE("Fuad", "I went to the beach. I walked all the way there and all the way back."),
      DLG_LINE("Hassan", "But it's a long way!"),
      DLG_LINE("Fuad", "Yes. ____.", { completedText: "Yes. I was very tired.", gapAnswer: "I was very tired" }),
      DLG_LINE("Nadia", "Where's your watch?", { section: "Mini-dialogue 3" }),
      DLG_LINE("Aisha", "My little sister broke it last night."), DLG_LINE("Nadia", "But it was new."),
      DLG_LINE("Aisha", "I know. ____.", { completedText: "I know. I was very angry.", gapAnswer: "I was very angry" }),
      DLG_LINE("Sam", "My friends gave me a kite for my birthday.", { section: "Mini-dialogue 4" }),
      DLG_LINE("Tom", "Great! Can we fly it?"), DLG_LINE("Sam", "No. The string broke and it flew away."),
      DLG_LINE("Tom", "Oh, no!"),
      DLG_LINE("Sam", "Yes. ____.", { completedText: "Yes. I was very sad.", gapAnswer: "I was very sad" })
    ],
    questions: [
      DLG_Q("Why was Ali frightened?", ["A boy ran in front of the car.", "He walked to the beach.", "His watch broke."], 0, "ركض ولد صغير أمام السيارة ليلاً."),
      DLG_Q("Why was Fuad tired?", ["He flew a kite.", "He walked all the way to the beach and back.", "He drove a car."], 1, "مشى الطريق كاملاً ذهاباً وعودة."),
      DLG_Q("What happened to Aisha's watch?", ["Her little sister broke it.", "She lost it at the beach.", "Nadia bought it."], 0, "تقول Aisha إن أختها الصغيرة كسرتها."),
      DLG_Q("Why was Sam sad?", ["His kite string broke and the kite flew away.", "He did not get a present.", "His friends went home."], 0, "انكسر خيط الطائرة الورقية وطارت بعيداً.")
    ],
    keyLine: 4, focus: ["I was very frightened.", "I was very tired.", "I was very angry.", "I was very sad."],
    writePromptAr: "اختر موقفين واكتب لكل منهما: ماذا حدث؟ وكيف شعرت؟ باستخدام I was very ... .",
    writeStarter: "Yesterday ... . I was very ... because ... .",
    speakPromptAr: "اقرأ كل محادثة مصغرة بنبرة تناسب الشعور قبل إظهار الإكمال، ثم تحقق مع زميلك."
  },
  {
    id: "dlg-u3-dangerous", unit: 3, stepRef: "u3g6", exercise: "3.10", title: "It's dangerous.", kind: "cartoon-story-dialogue",
    printedPages: "PB printed p.25", pdfPages: "PDF p.26 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS23", icon: "⛵", settingAr: "شاطئ وبيت وسيارة؛ Tom يصر على الصيد في قارب أبيض قديم رغم تحذير Anne، ثم يغرق القارب.",
    pictureContextAr: "تسلسل الصور يوضح تجاهل التحذير، وإخبار الأب، والقيادة إلى الشاطئ، وغرق القارب واعتذار Tom.",
    sourceNote: "نُسخت فقاعات القصة بترتيب اللوحات؛ أسماء Tom وAnne وDad مستنتجة من النداءات والفقاعات والشخصيات، وبانتظار مراجعة بشرية ثانية.",
    speakers: { Tom: { voice: "boy" }, Anne: { voice: "girl" }, Dad: { voice: "man" } },
    lines: [
      DLG_LINE("Tom", "Anne! Come here."), DLG_LINE("Tom", "Look! Let's go fishing."),
      DLG_LINE("Anne", "In that boat?"), DLG_LINE("Tom", "Yes."), DLG_LINE("Anne", "No. It's dangerous."),
      DLG_LINE("Tom", "Well, I want to go fishing."), DLG_LINE("Anne", "Dad!"),
      DLG_LINE("Dad", "What's the matter?"), DLG_LINE("Anne", "Tom's fishing! In an old white boat!"),
      DLG_LINE("Dad", "Come on!"), DLG_LINE("Dad", "That boat is dangerous."),
      DLG_LINE("Anne", "Look, Dad. It's Tom."), DLG_LINE("Anne", "The boat is sinking."),
      DLG_LINE("Dad", "He can't swim."), DLG_LINE("Anne", "Why didn't you listen to me?"),
      DLG_LINE("Tom", "I'm sorry.")
    ],
    questions: [
      DLG_Q("What does Tom want to do?", ["Go fishing", "Build a boat", "Drive a car"], 0, "يقول: Let's go fishing."),
      DLG_Q("Why does Anne say no?", ["The boat is dangerous.", "She is tired.", "Dad is not home."], 0, "تحذر: No. It's dangerous."),
      DLG_Q("What happens to the boat?", ["It goes home.", "It is sinking.", "It flies away."], 1, "تقول Anne: The boat is sinking."),
      DLG_Q("What can't Tom do?", ["Fish", "Swim", "Listen"], 1, "يقول Dad: He can't swim.")
    ],
    keyLine: 8, focus: ["Let's go fishing.", "It's dangerous.", "What's the matter?", "I'm sorry."],
    writePromptAr: "اكتب نهاية آمنة بديلة من 4 جمل: ماذا لو استمع Tom إلى Anne؟",
    writeStarter: "Tom listened to Anne. He did not ... . Then they ... .",
    speakPromptAr: "ثلاثة أدوار بنبرات: حماس Tom، تحذير Anne، وقلق Dad؛ توقف قبل الاعتذار وتوقع رد Tom."
  },
  {
    id: "dlg-u3-asma-mariam", unit: 3, stepRef: "u3g8", exercise: "3.12", title: "Asma and Mariam", kind: "cartoon-story-dialogue",
    printedPages: "PB printed pp.26–27", pdfPages: "PDF pp.27–28 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS25", icon: "🧕", settingAr: "سوق مزدحم بأكشاك وبضائع؛ تساعد Asma وMariam طفلة ضائعة في العثور على أمها.",
    pictureContextAr: "الرسوم تميّز المرأتين بملابس زرقاء/وردية وسوداء، والطفلة Amna تبكي ثم تلتقي بأمها قرب supermarket.",
    sourceNote: "تعيين Asma/Mariam أُخذ من أول نداء (Asma, look...) وثبات ألوان الملابس وذيول الفقاعات؛ يحتاج مراجعة بشرية ثانية.",
    speakers: { Narrator: { voice: "narrator" }, Mariam: { voice: "woman" }, Asma: { voice: "woman2" }, Amna: { voice: "childgirl" }, Mother: { voice: "woman3" } },
    lines: [
      DLG_LINE("Narrator", "One day Asma and Mariam were in the market.", { kind: "narration" }),
      DLG_LINE("Mariam", "Asma, look at that little girl. She's crying."),
      DLG_LINE("Mariam", "What's your name?"), DLG_LINE("Amna", "Amna."),
      DLG_LINE("Mariam", "What's the matter, Amna? Why are you crying?"), DLG_LINE("Amna", "I'm frightened."),
      DLG_LINE("Asma", "Why are you frightened?"), DLG_LINE("Amna", "I'm lost."),
      DLG_LINE("Amna", "I was with my mother. Now I can't find her."),
      DLG_LINE("Asma", "Don't worry. We'll look for your mother."), DLG_LINE("Mariam", "What's she wearing?"),
      DLG_LINE("Amna", "She's wearing a red and green dress."), DLG_LINE("Narrator", "Later ...", { kind: "narration" }),
      DLG_LINE("Mariam", "Look! She's over there."), DLG_LINE("Mother", "Amna! Where were you?"),
      DLG_LINE("Mariam", "We found her in the market."), DLG_LINE("Mother", "Thank you. Thank you very much.")
    ],
    questions: [
      DLG_Q("Why is Amna frightened?", ["She is lost.", "She is hungry.", "She broke a watch."], 0, "تقول: I'm lost."),
      DLG_Q("What is Amna's mother wearing?", ["A blue and white dress", "A red and green dress", "A black coat"], 1, "تصفها Amna بـ red and green dress."),
      DLG_Q("Where do they find Amna's mother?", ["In the market", "At school", "In a boat"], 0, "تقول Mariam: We found her in the market."),
      DLG_Q("How do Asma and Mariam help?", ["They buy Amna a present.", "They look for her mother.", "They take her to school."], 1, "تقول Asma: We'll look for your mother.")
    ],
    keyLine: 11, focus: ["What's the matter?", "I'm lost.", "Don't worry.", "What's she wearing?"],
    writePromptAr: "اكتب وصف شخص تبحث عنه في السوق في 4 جمل: الاسم والمشكلة والملابس والمكان.",
    writeStarter: "This is ... . She/He is lost. She/He is wearing ... .",
    speakPromptAr: "ثلاثة أدوار: طفلة ضائعة ومساعدتان؛ ركّز على التهدئة بـ Don't worry ووصف الملابس."
  },
  {
    id: "dlg-u4-can-help", unit: 4, stepRef: "u4g0", exercise: "4.1", title: "Can I help you?", kind: "picture-dialogue",
    printedPages: "PB printed p.30", pdfPages: "PDF p.31 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS27", icon: "🤝", settingAr: "ثلاث مواقف مصورة: صندوق لا يتحرك، وكتب كثيرة ودراجة، وغرض مرتفع على رف متجر.",
    pictureContextAr: "كلمات الحركة في اللوحات هي pull/push وcarry/push وreach/hold، والحوار النموذجي أسفل الصفحة لموقف الرف.",
    sourceNote: "لا أسماء مطبوعة للمتحدثين؛ استُخدم Picture 1/2/3 وHelper/Student بوصفها أدواراً توضيحية، لا أسماء كتاب.",
    speakers: { "Picture 1": { voice: "boy" }, "Picture 2": { voice: "boy2" }, "Picture 3": { voice: "girl" }, Helper: { voice: "girl2" }, Student: { voice: "girl" } },
    lines: [
      DLG_LINE("Picture 1", "I can't move it.", { section: "Three picture situations" }),
      DLG_LINE("Picture 2", "I can't carry these books."), DLG_LINE("Picture 3", "I can't reach it."),
      DLG_LINE("Helper", "Can I help you?", { section: "Model dialogue" }),
      DLG_LINE("Student", "Yes, please. I can't reach it."), DLG_LINE("Helper", "OK. You hold this and I'll get it.")
    ],
    questions: [
      DLG_Q("What can't the student in Picture 2 do?", ["Move a box", "Carry the books", "Reach a shelf"], 1, "تقول لوحة 2: I can't carry these books."),
      DLG_Q("Which offer begins the model dialogue?", ["Can I help you?", "Where are you from?", "What would you like?"], 0, "أول سطر نموذجي هو Can I help you?"),
      DLG_Q("What will the helper do?", ["Hold the basket and wait", "Get the thing", "Carry the books"], 1, "تقول: You hold this and I'll get it."),
      DLG_Q("Which verb means to try to take something high?", ["reach", "pull", "carry"], 0, "لوحة الرف تستخدم reach.")
    ],
    keyLine: 3, focus: ["I can't move/carry/reach it.", "Can I help you?", "You hold this and I'll get it."],
    writePromptAr: "اختر موقفاً من الصور واكتب عرض مساعدة وردّاً من 3 أسطر.",
    writeStarter: "I can't ... . Can I help you? Yes, please. ...",
    speakPromptAr: "مثّل المواقف الثلاثة بحركة آمنة دون أغراض ثقيلة، وبدّل الأفعال move/carry/reach."
  },
  {
    id: "dlg-u4-tree-house", unit: 4, stepRef: "u4g1", exercise: "4.2", title: "The tree house", kind: "cartoon-story-dialogue",
    printedPages: "PB printed pp.31–32", pdfPages: "PDF pp.32–33 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS28", icon: "🌳", settingAr: "Tom وAnne يبنيان بيت شجرة بألواح ومسامير ومطرقتين وسلّم أبيهم وحبل، ثم يأخذ الأب السلّم دون أن يسمعهما.",
    pictureContextAr: "أسفل ص32 مفردات مصورة: hammer وnails وladder وrope؛ الغروب في اللوحة الأخيرة يبيّن بقاءهما أعلى الشجرة.",
    sourceNote: "بعض الأسطر مسمّاة في صناديق النص، وبقيتها عُيّنت من فقاعات ومواقع Tom/Anne/Dad في اللوحات؛ بانتظار مراجعة بشرية ثانية.",
    speakers: { Tom: { voice: "boy" }, Anne: { voice: "girl" }, Dad: { voice: "man" }, Children: { voice: "children" } },
    lines: [
      DLG_LINE("Tom", "I want to build a house. In that tree. With those pieces of wood."),
      DLG_LINE("Anne", "I'll help you. I'll get a hammer and some nails."),
      DLG_LINE("Tom", "No, just get the nails. And I'll get two hammers."), DLG_LINE("Anne", "OK."),
      DLG_LINE("Tom", "I can't reach it."), DLG_LINE("Anne", "I'll get Dad's ladder."),
      DLG_LINE("Tom", "You hold it. I'll go up."), DLG_LINE("Anne", "No, you hold it. I'll go up."),
      DLG_LINE("Tom", "OK."), DLG_LINE("Anne", "I can't reach it."), DLG_LINE("Tom", "I'll get some rope."),
      DLG_LINE("Anne", "You push and I'll pull."), DLG_LINE("Tom", "Now, you hold the nails and I'll hit them."),
      DLG_LINE("Anne", "Why? We have two hammers."), DLG_LINE("Dad", "Ah! There's my ladder."),
      DLG_LINE("Children", "Dad! Dad!"), DLG_LINE("Tom", "He can't hear you."), DLG_LINE("Children", "Help! Help!")
    ],
    questions: [
      DLG_Q("What does Tom want to build?", ["A boat", "A house in a tree", "A shop"], 1, "يقول: I want to build a house. In that tree."),
      DLG_Q("Who will get two hammers?", ["Anne", "Dad", "Tom"], 2, "يقول Tom: I'll get two hammers."),
      DLG_Q("Why do they need the ladder?", ["They can't reach the tree.", "The wood is wet.", "Dad asked for it."], 0, "بعد I can't reach it تقترح Anne إحضار السلّم."),
      DLG_Q("Why do the children shout at the end?", ["Dad took the ladder and cannot hear them.", "The house is finished.", "They lost the nails."], 0, "يأخذ Dad السلّم، ويقول أحد الطفلين He can't hear you.")
    ],
    keyLine: 12, focus: ["I want to build ...", "I'll help you.", "You hold it. I'll go up.", "Help!"],
    writePromptAr: "اكتب خطة بناء آمنة من 5 خطوات باستخدام First وThen وI'll ...، واذكر أدوات الصفحة.",
    writeStarter: "First, I'll get ... . Then you hold ... and I'll ... .",
    speakPromptAr: "تمثيل تعاوني: تناوبا إعطاء التعليمات You push / You hold ... and I'll ... بلا تسلق فعلي."
  },
  {
    id: "dlg-u4-messages", unit: 4, stepRef: "u4g2", exercise: "4.3", title: "Messages", kind: "telephone-message-set",
    printedPages: "PB printed p.33", pdfPages: "PDF p.34 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS29", icon: "☎️", settingAr: "Fatma al Jaufi في البيت وحدها وتأخذ 4 رسائل هاتفية لعائلتها من Ali وMr al Jaufi وSameera ومعلم الرياضة.",
    pictureContextAr: "صور المتصلين ترتبط بمتجر وساعة 4، وباب وساعة 10، ومدرسة مشطوبة، وملعب كرة؛ الرسائل مكتوبة بخط يدوي أسفل الصفحة.",
    sourceNote: "الصفحة تطبع سطر Fatma مرة واحدة ثم 4 رسائل وتسأل Who are they from؟ مطابقة كل رسالة بمتصل هنا تفسير للصور والسياق، لا إسناد مطبوع بجانب الرسائل.",
    speakers: { Narrator: { voice: "narrator" }, Fatma: { voice: "girl" }, "Sports teacher": { voice: "man" }, Sameera: { voice: "girl2" }, Ali: { voice: "boy" }, "Mr al Jaufi": { voice: "man2" } },
    lines: [
      DLG_LINE("Narrator", "Fatma al Jaufi is at home alone. She takes four messages for her family.", { kind: "narration" }),
      DLG_LINE("Fatma", "Can I help you? Can I take a message?"),
      DLG_LINE("Sports teacher", "The match will start at 3 o'clock.", { section: "Message 1 — visual match" }),
      DLG_LINE("Sameera", "She won't be at school tomorrow. She's ill.", { section: "Message 2 — visual match" }),
      DLG_LINE("Ali", "He'll meet you in front of the supermarket at 4 o'clock.", { section: "Message 3 — visual match" }),
      DLG_LINE("Mr al Jaufi", "He'll be late. He won't be home until 10 o'clock.", { section: "Message 4 — visual match" })
    ],
    questions: [
      DLG_Q("How many messages does Fatma take?", ["Two", "Three", "Four"], 2, "النص التمهيدي يقول four messages."),
      DLG_Q("When will the match start?", ["At 3 o'clock", "At 4 o'clock", "At 10 o'clock"], 0, "الرسالة 1: The match will start at 3 o'clock."),
      DLG_Q("Where will the meeting be at 4 o'clock?", ["At school", "In front of the supermarket", "At home"], 1, "الرسالة 3 تذكر in front of the supermarket."),
      DLG_Q("Until when won't he be home?", ["Until 3 o'clock", "Until tomorrow", "Until 10 o'clock"], 2, "الرسالة 4: He won't be home until 10 o'clock.")
    ],
    keyLine: 1, focus: ["Can I take a message?", "will start at ...", "won't be ... tomorrow", "until 10 o'clock"],
    writePromptAr: "اكتب رسالة هاتفية من سطرين تتضمن من المتصل، وماذا سيحدث، والوقت.",
    writeStarter: "Message from ...: ... will ... at ... o'clock.",
    speakPromptAr: "اتصال ثنائي: Fatma تسأل Can I take a message? والمتصل يترك معلومة ووقتاً واضحين."
  },
  {
    id: "dlg-u4-directions", unit: 4, stepRef: "u4g4", exercise: "4.6", title: "Can you tell me the way?", kind: "directions-dialogue",
    printedPages: "PB printed p.35", pdfPages: "PDF p.36 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS31", icon: "🧭", settingAr: "خريطة بلدة فيها مسجد ومخبز ومركز شرطة ومدرسة ومكتب بريد ومطعم وبنك ومكتبة وحديقة ومستشفى وسوبرماركت ومحل ألعاب.",
    pictureContextAr: "تعتمد وجهة الرجل النهائية على تتبع الخريطة المرسومة؛ هذا السجل ينسخ السؤال والاتجاهات ولا يجعل الاستنتاج من الخريطة نصاً مطبوعاً.",
    sourceNote: "قُسّمت فقرة الاتجاهات إلى جملها المطبوعة لأغراض الممارسة سطرًا بسطر دون تغيير الكلمات.",
    speakers: { Man: { voice: "man" }, Helper: { voice: "man2" } },
    lines: [
      DLG_LINE("Man", "Can you help me? Can you tell me the way to ...?"),
      DLG_LINE("Helper", "Go along this road."), DLG_LINE("Helper", "Turn left at the school."),
      DLG_LINE("Helper", "Then turn right at the roundabout."), DLG_LINE("Helper", "Cross over."),
      DLG_LINE("Helper", "Go straight on to the supermarket."), DLG_LINE("Helper", "Turn left."),
      DLG_LINE("Helper", "You'll see it on the left.")
    ],
    questions: [
      DLG_Q("What is the first direction?", ["Turn right at the roundabout.", "Go along this road.", "Cross over."], 1, "تبدأ الاتجاهات بـ Go along this road."),
      DLG_Q("Where should the man turn left first?", ["At the school", "At the supermarket", "At the hospital"], 0, "الجملة الثانية: Turn left at the school."),
      DLG_Q("What should he do at the roundabout?", ["Turn left", "Turn right", "Stop"], 1, "تقول التعليمات: Then turn right at the roundabout."),
      DLG_Q("Where will he see the place at the end?", ["On the right", "On the left", "Behind the school"], 1, "يختم المساعد: You'll see it on the left.")
    ],
    keyLine: 3, focus: ["Can you tell me the way to ...?", "Turn left/right", "Go straight on", "Cross over"],
    writePromptAr: "اكتب اتجاهات من المدرسة إلى مكان في خريطة الصفحة في 5 خطوات مرتبة.",
    writeStarter: "Go along ... . Turn ... at ... . Then go straight on to ... .",
    speakPromptAr: "طالب تائه وآخر مساعد؛ استخدم إشارات يد آمنة لليسار واليمين والمستقيم أثناء النطق."
  },
  {
    id: "dlg-u4-dave-john", unit: 4, stepRef: "u4g5", exercise: "4.8", title: "Dave, John and Mrs Evans", kind: "telephone-dialogue-with-gaps",
    printedPages: "PB printed p.36", pdfPages: "PDF p.37 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS32", icon: "📞", settingAr: "مكالمة بين Dave وJohn بعد زيارة Mrs Evans الحزينة والمريضة؛ يخططان لتنظيف بيتها بمساعدة أصدقاء.",
    pictureContextAr: "رسم علوي يوضح Dave عند Mrs Evans، وصورتان جانبيتان للولدين على الهاتف.",
    sourceNote: "تترك الصفحة أسطر John فارغة وتضع 7 عبارات في بنك أسفلها. ترتيب العبارات هنا حل تدريبي من المنصة وفق سياق كل سطر، لا نص مطبوع في مواضع الفراغات.",
    speakers: { Dave: { voice: "boy" }, John: { voice: "boy2" } },
    lines: [
      DLG_LINE("Dave", "John? Dave here."),
      DLG_LINE("John", "____", { completedText: "Hi, Dave!", gapAnswer: "Hi, Dave!" }),
      DLG_LINE("Dave", "Listen! I went to see Mrs Evans yesterday. She was very sad."),
      DLG_LINE("John", "____", { completedText: "Why?", gapAnswer: "Why?" }),
      DLG_LINE("Dave", "She's ill. She's going into hospital. She won't be back until next Friday. Let's do something for her."),
      DLG_LINE("John", "____", { completedText: "What?", gapAnswer: "What?" }),
      DLG_LINE("Dave", "I know! We'll clean her house for her."),
      DLG_LINE("John", "____", { completedText: "That's a good idea.", gapAnswer: "That's a good idea." }),
      DLG_LINE("Dave", "I'll tell Peter and Mary. They'll help."),
      DLG_LINE("John", "____", { completedText: "And I'll tell Jill and Penny.", gapAnswer: "And I'll tell Jill and Penny." }),
      DLG_LINE("Dave", "Great! They'll help too."),
      DLG_LINE("John", "____", { completedText: "OK. I'll see you tomorrow.", gapAnswer: "OK. I'll see you tomorrow." }),
      DLG_LINE("Dave", "Fine. Bye!"),
      DLG_LINE("John", "____", { completedText: "Bye!", gapAnswer: "Bye!" })
    ],
    questions: [
      DLG_Q("Why was Mrs Evans sad?", ["She is ill and going into hospital.", "Her house is dirty.", "Dave did not visit her."], 0, "يشرح Dave أنها مريضة وستدخل المستشفى."),
      DLG_Q("When will Mrs Evans be back?", ["Tomorrow", "Next Friday", "At seven o'clock"], 1, "يقول Dave: She won't be back until next Friday."),
      DLG_Q("What do Dave and John decide to do?", ["Clean Mrs Evans's house", "Buy her a present", "Phone the police"], 0, "يقترح Dave: We'll clean her house for her."),
      DLG_Q("Who else will help?", ["Peter, Mary, Jill and Penny", "Tom and Anne", "Ali and Hassan"], 0, "يذكر Dave Peter وMary، ويضيف John Jill وPenny في الإكمال التدريبي.")
    ],
    keyLine: 6, focus: ["She's ill.", "She won't be back until ...", "We'll clean ...", "I'll tell ..."],
    writePromptAr: "أعد ترتيب عبارات John السبع في دفترك، ثم اكتب سبب اختيار كل عبارة بجوار سطرين منها.",
    writeStarter: "Hi, Dave! Why? What? That's ... .",
    speakPromptAr: "اختر دور John واستمع لأسطر Dave؛ قل العبارة المناسبة في كل فراغ قبل إظهار الحل."
  },
  {
    id: "dlg-u4-jim-police", unit: 4, stepRef: "u4g7", exercise: "4.10 / 4.11", title: "Jim helps the police.", kind: "story-dialogue",
    printedPages: "PB printed pp.38–39", pdfPages: "PDF pp.39–40 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS33", icon: "🚑", settingAr: "أمام مخبز ولافتة حادث صفراء؛ Jim كان يخرج من المخبز حين صدمت سيارة كبيرة رجلاً عجوزاً وهربت، ثم يصف السائق من صورة مجموعة رجال.",
    pictureContextAr: "تاريخ اللافتة السبت 27 May ورقم الشرطة 515674؛ صورة الإسعاف وصف الرجال يدعمان تسلسل القصة.",
    sourceNote: "نُسخت اللافتة والحوار المسمّى من الصفحتين. تحديد موضع السائق في صورة الرجال نشاط بصري من الوصف، وليس اسمًا مطبوعًا.",
    speakers: { Sign: { voice: "narrator" }, Jim: { voice: "boy" }, Bill: { voice: "boy2" } },
    lines: [
      DLG_LINE("Sign", "ACCIDENT — Saturday, 27 May. Did you see anything? Phone the Police Station: 515674.", { kind: "sign", speechText: "Accident. Saturday, twenty-seven May. Did you see anything? Phone the Police Station: five, one, five, six, seven, four." }),
      DLG_LINE("Jim", "Bill! Look! I saw that accident."), DLG_LINE("Bill", "Really?"),
      DLG_LINE("Jim", "Yes. I was shopping here on Saturday. I was coming out of the bakery. Suddenly a big car came round the corner. It hit an old man and drove away."),
      DLG_LINE("Bill", "Was the old man OK?"), DLG_LINE("Jim", "No. An ambulance took him to hospital."),
      DLG_LINE("Bill", "Who was driving the car?"), DLG_LINE("Jim", "I don't know."),
      DLG_LINE("Bill", "Was it a man or a woman?"), DLG_LINE("Jim", "A man."),
      DLG_LINE("Bill", "What did he look like?"), DLG_LINE("Jim", "He was tall. His hair was white."),
      DLG_LINE("Bill", "What was he wearing?"),
      DLG_LINE("Jim", "Let's see. He was wearing a black ... Wait a minute! I'll phone the police. What's that number? 515674.", { speechText: "Let's see. He was wearing a black... Wait a minute! I'll phone the police. What's that number? Five, one, five, six, seven, four." })
    ],
    questions: [
      DLG_Q("Where was Jim coming from when the accident happened?", ["The bakery", "The hospital", "The police station"], 0, "يقول: I was coming out of the bakery."),
      DLG_Q("What did the big car do?", ["It stopped and helped.", "It hit an old man and drove away.", "It took the man to hospital."], 1, "يروي Jim أن السيارة صدمته وهربت."),
      DLG_Q("How does Jim describe the driver?", ["Short with black hair", "Tall with white hair", "A woman with white hair"], 1, "يقول: He was tall. His hair was white."),
      DLG_Q("What is the police station number?", ["515674", "27 May", "Saturday"], 0, "الرقم مكتوب على اللافتة ويعيده Jim.")
    ],
    keyLine: 3, focus: ["I saw that accident.", "Suddenly ...", "What did he look like?", "What was he wearing?"],
    writePromptAr: "اكتب تقرير شاهد من 5 جمل: أين كنت؟ ماذا حدث فجأة؟ وكيف بدا السائق؟",
    writeStarter: "I was ... . Suddenly ... . The driver was ... .",
    speakPromptAr: "مقابلة شاهد: Bill يسأل وJim يجيب؛ انطق الرقم رقمًا رقمًا بوضوح."
  },
  {
    id: "dlg-u4-Hassan-helps", unit: 4, stepRef: "u4g8", exercise: "4.12", title: "Hassan helps.", kind: "cartoon-story-dialogue",
    printedPages: "PB printed pp.40–41", pdfPages: "PDF pp.41–42 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS34", icon: "🛍️", settingAr: "منزل Hassan ثم شارع فيه مخبز ومكتبة وسوبرماركت؛ يساعد رجلاً تائهًا ورجلاً عجوزاً وامرأة وصبيًا، ثم ينسى سمك عشاء أبيه.",
    pictureContextAr: "تسلسل الصور يوضح قائمة التسوق، وإعطاء الاتجاهات، ومساعدة العبور وفتح باب السوبرماركت واسترجاع كرة، ثم العودة إلى المطبخ.",
    sourceNote: "نُسخت الفقاعات بترتيب اللوحات؛ تعيين Mum وMan وOld man وWoman وBoy من الصور والنداءات، وبانتظار مراجعة بشرية ثانية.",
    speakers: { Hassan: { voice: "boy" }, Mum: { voice: "woman" }, Man: { voice: "man" }, "Old man": { voice: "elderman" }, Woman: { voice: "woman2" }, Boy: { voice: "boy2" } },
    lines: [
      DLG_LINE("Hassan", "That was Dad. He'll be home at seven."),
      DLG_LINE("Mum", "Can you do some shopping, Hassan? Here's the list."),
      DLG_LINE("Mum", "Don't forget the fish. It's for Dad's dinner."),
      DLG_LINE("Man", "Can you tell me the way to the bank, please?"),
      DLG_LINE("Hassan", "Go straight on. It's on your right."),
      DLG_LINE("Hassan", "Can I help you?"), DLG_LINE("Old man", "You are very kind."),
      DLG_LINE("Woman", "Thank you."), DLG_LINE("Boy", "My ball is under there. I can't reach it."),
      DLG_LINE("Hassan", "You hold this. I'll get it."), DLG_LINE("Hassan", "I'm back, Mum."),
      DLG_LINE("Mum", "Did you get the fish?"), DLG_LINE("Hassan", "No! I forgot!")
    ],
    questions: [
      DLG_Q("When will Dad be home?", ["At six", "At seven", "At ten"], 1, "يقول Hassan: He'll be home at seven."),
      DLG_Q("What must Hassan not forget?", ["The fish", "The list", "The ball"], 0, "تذكّره Mum: Don't forget the fish."),
      DLG_Q("Where is the bank in Hassan's directions?", ["On the left", "On the right", "Next to the school"], 1, "يقول: Go straight on. It's on your right."),
      DLG_Q("What happens at the end?", ["Hassan buys two fish.", "Hassan forgot the fish.", "Mum goes shopping."], 1, "يعترف: No! I forgot!")
    ],
    keyLine: 4, focus: ["He'll be home at seven.", "Don't forget ...", "It's on your right.", "I forgot!"],
    writePromptAr: "اكتب قائمة تسوق و3 أعمال مساعدة فعلها Hassan بترتيب حدوثها.",
    writeStarter: "First, Hassan ... . Then he ... . At home, he ... .",
    speakPromptAr: "مشاهد قصيرة متتالية: طلب أم، اتجاهات لرجل، مساعدة صبي، ثم اعتراف أخير بنبرة دهشة."
  },
  {
    id: "dlg-u4-saleh-old-man", unit: 4, stepRef: "u4g9", exercise: "4.13 / 4.14", title: "Saleh and the old man", kind: "picture-story-mini-dialogue",
    printedPages: "PB printed p.42", pdfPages: "PDF p.43 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS35", icon: "💧", settingAr: "ثمانية مشاهد صامتة تقريباً: Saleh يرى رجلاً عجوزاً من النافذة، يحضر كرسياً وماء من المطبخ، ثم يدعوه للجلوس في الشارع.",
    pictureContextAr: "الكلام المطبوع يظهر فقط في اللوحتين 7 و8؛ بقية القصة تُروى بالصور ولا تُنسب لها عبارات مخترعة في نص الحوار.",
    sourceNote: "هذا تبادل قصير من سطرين داخل قصة مصورة، لا نص حوار كامل لكل اللوحات.",
    speakers: { Saleh: { voice: "boy" }, "Old man": { voice: "elderman" } },
    lines: [
      DLG_LINE("Saleh", "Please sit down and have some water."),
      DLG_LINE("Old man", "Thank you. You are very kind.")
    ],
    questions: [
      DLG_Q("What does Saleh offer the old man?", ["A chair and some water in the picture story", "A fish", "A book"], 0, "يقول Please sit down and have some water، وتُظهر الصورة الكرسي والماء."),
      DLG_Q("How does the old man answer?", ["No, thank you.", "Thank you. You are very kind.", "I forgot."], 1, "هذا هو سطره المطبوع في اللوحة 8."),
      DLG_Q("Which polite word begins Saleh's offer?", ["Please", "Suddenly", "Really"], 0, "يبدأ العرض بكلمة Please.")
    ],
    keyLine: 0, focus: ["Please sit down", "have some water", "You are very kind."],
    writePromptAr: "اكتب 4 جمل تروي القصة المصورة قبل السطرين: رأى، أسرع، أحضر، دعا.",
    writeStarter: "Saleh saw ... . He got ... . Then he said, 'Please ... .'",
    speakPromptAr: "مثّل اللوحتين الأخيرتين بنبرة لطف وامتنان، ثم بدّل العرض إلى كرسي/طعام/ظل."
  },
  {
    id: "dlg-u4-white-falcon", unit: 4, stepRef: "u4g10", exercise: "4.15", title: "The white falcon", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.43", pdfPages: "PDF p.44 in english_pubils_8th-1_compressed.pdf",
    csRefs: "CS36", icon: "🦅", settingAr: "مدرسة ثم بيت Rashid؛ بعد يوم صعب مع المعلم والأب، يرى ليلاً صقراً أبيض لامعاً على كرسيه.",
    pictureContextAr: "رسم الصفحة يبيّن صقراً أبيض كبيراً على كرسي تحت القمر، وهو بداية قصة متسلسلة لا نهايتها.",
    sourceNote: "أُعيد تنظيم كلام القصة المنثور إلى أسطر متحدث/راوٍ مع حفظ الكلمات المقروءة بصرياً؛ لا تُقدَّم هذه الصفحة نهاية كاملة للسلسلة.",
    speakers: { Teacher: { voice: "woman" }, Narrator: { voice: "narrator" }, Mother: { voice: "woman2" }, Rashid: { voice: "boy" }, Father: { voice: "man" } },
    lines: [
      DLG_LINE("Teacher", "Rashid! Look at this! It's terrible!"),
      DLG_LINE("Narrator", "Rashid looked at his Workbook. Lots of things were wrong. After school he ran home.", { kind: "narration" }),
      DLG_LINE("Mother", "Why are you sad, Rashid? Tell me."), DLG_LINE("Rashid", "Oh, it's nothing."),
      DLG_LINE("Narrator", "At seven o'clock Rashid's father came home.", { kind: "narration" }),
      DLG_LINE("Father", "Rashid! Where were you yesterday?"), DLG_LINE("Rashid", "At the beach. Why?"),
      DLG_LINE("Father", "You don't help your mother. You're lazy, Rashid. Lazy!"),
      DLG_LINE("Rashid", "I'm sorry, Father."),
      DLG_LINE("Narrator", "He went to his room and went to bed. He was sad.", { kind: "narration" }),
      DLG_LINE("Narrator", "In the night he heard something.", { kind: "narration" }),
      DLG_LINE("Rashid", "Hello! Who's there?"),
      DLG_LINE("Narrator", "Then he saw it. On his chair there was a beautiful falcon — white and shining like the moon.", { kind: "narration" })
    ],
    questions: [
      DLG_Q("Why is the teacher unhappy with Rashid's Workbook?", ["Lots of things were wrong.", "Rashid lost it.", "It was on his chair."], 0, "يقول الراوي: Lots of things were wrong."),
      DLG_Q("Where was Rashid yesterday?", ["At the market", "At the beach", "In hospital"], 1, "يُجيب أباه: At the beach."),
      DLG_Q("Why does Father call Rashid lazy?", ["He doesn't help his mother.", "He can't swim.", "He forgot the fish."], 0, "يقول Father: You don't help your mother."),
      DLG_Q("What does Rashid see in the night?", ["A white falcon on his chair", "A boat at the beach", "A kite in the tree"], 0, "يرى beautiful falcon أبيض ولامعاً على الكرسي.")
    ],
    keyLine: 7, focus: ["Lots of things were wrong.", "Why are you sad?", "Where were you yesterday?", "Who's there?"],
    writePromptAr: "اكتب فقرة من 6 جمل تتخيل ما سيقوله Rashid للصقر أولاً، مع سطر حوار واحد على الأقل.",
    writeStarter: "Rashid looked at the falcon. 'Who are you?' he asked. ...",
    speakPromptAr: "قراءة درامية بأصوات: معلم صارم، أم قلقة، أب غاضب، ثم Rashid مندهش عند رؤية الصقر."
  },
  {
    id: "dlg-u5-camping", unit: 5, stepRef: "u5g0", exercise: "5.1", title: "Let's go camping", kind: "conversation",
    printedPages: "PB printed p.45", pdfPages: "PDF p.1 in english_pubils_8th-2.pdf",
    csRefs: "CS37–41 (TB group range)", icon: "⛺", settingAr: "أربعة أماكن مصوّرة للتخييم: Black Mountains وRiver Test وSeatown وBlue Pool؛ يختار Peter وSimon وجهتهما.",
    pictureContextAr: "عناوين الصور الأربعة مطبوعة على الصفحة، لكن أسطر الحوار لا تذكر إلا Black Mountains وBlue Pool.",
    sourceNote: "الأسماء مطبوعة قبل كل سطر. نُسخت أسطر الحوار فقط من صورة الصفحة، لا كل عناصر الصفحة.",
    speakers: { Peter: { voice: "boy" }, Simon: { voice: "boy2" } },
    lines: [
      DLG_LINE("Peter", "Where shall we go?"), DLG_LINE("Simon", "Let's go to the Black Mountains."),
      DLG_LINE("Peter", "No. We went there last year. How about going to the Blue Pool?"), DLG_LINE("Simon", "OK.")
    ],
    questions: [
      DLG_Q("Who asks where they shall go?", ["Simon", "Peter", "John"], 1, "السطر الأول بصوت Peter."),
      DLG_Q("Where does Simon suggest first?", ["The Blue Pool", "Seatown", "The Black Mountains"], 2, "يقول: Let's go to the Black Mountains."),
      DLG_Q("Why does Peter say no?", ["They went there last year.", "It is raining.", "It is too far."], 0, "يقول: We went there last year."),
      DLG_Q("Which place does Peter suggest instead?", ["The River Test", "The Blue Pool", "The farm"], 1, "يسأل: How about going to the Blue Pool؟ ويوافق Simon.")
    ],
    keyLine: 2, focus: ["Where shall we go?", "Let's go to ...", "last year", "How about going to ...?"],
    writePromptAr: "اكتب اقتراحين لمكان رحلة وسبب رفض أحدهما، ثم جملة اتفاق أخيرة.",
    writeStarter: "Let's go to ... . No, we ... . How about going to ...? OK.",
    speakPromptAr: "تمثيل ثنائي لاختيار مكان: اقترح، ارفض بسبب، اقترح بديلاً، ثم اتفقا."
  },
  {
    id: "dlg-u5-how-far", unit: 5, stepRef: "u5g0", exercise: "PB p.47 (no exercise number visible)", title: "How far is it?", kind: "conversation",
    printedPages: "PB printed p.47", pdfPages: "PDF p.3 in english_pubils_8th-2.pdf",
    csRefs: "CS37–41 (TB group range)", icon: "🗺️", settingAr: "Dave وJohn ينظران إلى خريطة ويسألان عن المسافة إلى المزرعة ثم من المزرعة إلى الغابة.",
    pictureContextAr: "أسفل الصفحة أنشطة مصورة منفصلة (horse-riding, photographs, picnic, swimming, climbing, fishing) ليست جزءاً من أسطر هذا الحوار.",
    sourceNote: "الصفحة المفحوصة لا تُظهر رقم تمرين للحوار؛ رُبط بالمجموعة u5g0 لأن موادها في TB تشمل PB45–48 وسؤال المسافة نفسه.",
    speakers: { Dave: { voice: "boy" }, John: { voice: "boy2" } },
    lines: [
      DLG_LINE("Dave", "How far is it to the farm?"), DLG_LINE("John", "It's about three kilometres.", { speechText: "It's about three kilometers." }),
      DLG_LINE("Dave", "How far is it from the farm to the wood?"), DLG_LINE("John", "It's about four and a half kilometres.", { speechText: "It's about four and a half kilometers." })
    ],
    questions: [
      DLG_Q("How far is it to the farm?", ["About three kilometres", "About four kilometres", "About five kilometres"], 0, "يجيب John: about three kilometres."),
      DLG_Q("How far is it from the farm to the wood?", ["Three kilometres", "Four and a half kilometres", "Six kilometres"], 1, "يجيب John: about four and a half kilometres."),
      DLG_Q("Who asks both questions?", ["John", "Peter", "Dave"], 2, "اسم Dave مطبوع قبل السؤالين."),
      DLG_Q("Who gives the distances?", ["John", "Simon", "Dave"], 0, "اسم John مطبوع قبل الإجابتين.")
    ],
    keyLine: 1, focus: ["How far is it to ...?", "It's about ... kilometres.", "from ... to ...", "four and a half"],
    writePromptAr: "اكتب سؤالين عن مسافة مكانين قريبين من مدرستك وإجابتين تقريبيتين بالكيلومترات.",
    writeStarter: "How far is it to ...? It's about ... kilometres.",
    speakPromptAr: "اسأل زميلك عن مسافتين على خريطة متخيلة، مع نبرة صاعدة في السؤال ووضوح في الأرقام."
  },
  {
    id: "dlg-u5-raining", unit: 5, stepRef: "u5g0", exercise: "5.5", title: "It's raining", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.48", pdfPages: "PDF p.4 in english_pubils_8th-2.pdf",
    csRefs: "CS37–41 (TB group range)", icon: "🌧️", settingAr: "أربعة أولاد عند خيمة؛ كان صباح الجمعة حاراً ومشمساً، ثم بدأ المطر فجأة فاختاروا لعبة داخل الخيمة.",
    pictureContextAr: "الصورة الأولى خارج الخيمة تحت المطر، والثانية داخلها؛ ترتيب الأسطر مطبوع تحت الصورة الأولى وبجانب الثانية.",
    sourceNote: "سطر الراوي الافتتاحي منسوخ من نثر الصفحة، وأسماء المتحدثين مطبوعة قبل أسطر الحوار.",
    speakers: { Narrator: { voice: "narrator" }, Dave: { voice: "boy" }, Peter: { voice: "boy2" }, Simon: { voice: "boy3" }, John: { voice: "boy4" } },
    lines: [
      DLG_LINE("Narrator", "We went camping last week. On Friday morning it was very hot. The sun was shining and we wanted to go swimming. Suddenly it started to rain.", { kind: "narration" }),
      DLG_LINE("Dave", "Oh, no! It's raining."), DLG_LINE("Peter", "Never mind. We'll go swimming tomorrow."),
      DLG_LINE("Simon", "But what shall we do now?"), DLG_LINE("John", "Let's play some cassettes."),
      DLG_LINE("Dave", "We did that last night."), DLG_LINE("Peter", "I know! How about playing 'I spy'?"),
      DLG_LINE("Simon", "OK. I'll start.")
    ],
    questions: [
      DLG_Q("What was Friday morning like at first?", ["Cold and rainy", "Very hot and sunny", "Windy and dark"], 1, "يقول الراوي: it was very hot والشمس كانت مشرقة."),
      DLG_Q("What did the boys want to do before the rain?", ["Go fishing", "Go swimming", "Go climbing"], 1, "يقول الراوي: we wanted to go swimming."),
      DLG_Q("Why does Dave reject the cassettes?", ["They did that last night.", "The cassettes are lost.", "It is too hot."], 0, "يقول Dave: We did that last night."),
      DLG_Q("Who will start the game?", ["Peter", "John", "Simon"], 2, "يختتم Simon: OK. I'll start.")
    ],
    keyLine: 5, focus: ["Suddenly", "It's raining.", "Never mind.", "How about playing ...?"],
    writePromptAr: "اكتب 4 أسطر: خطة طقس مشمس، تغيّر مفاجئ، اقتراح مرفوض، واقتراح مقبول.",
    writeStarter: "We wanted to ... . Suddenly ... . Let's ... . OK, I'll ... .",
    speakPromptAr: "تمثيل جماعي بأربعة أدوار؛ اجعل خيبة Dave واقتراح Peter وحماس Simon واضحين."
  },
  {
    id: "dlg-u5-ahmed-story", unit: 5, stepRef: "u5g2", exercise: "5.8", title: "Ahmed's story", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.50", pdfPages: "PDF p.6 in english_pubils_8th-2.pdf",
    csRefs: "CS44–45 (TB group range)", icon: "☄️", settingAr: "تخرج أسرة Ahmed إلى الصحراء مساء الجمعة؛ حول نار الطعام يرون كرة نار تعبر السماء وتسقط في البحر بعيداً.",
    pictureContextAr: "خلفية الصفحة ليلية بقمر ونجوم وكرة نار؛ عنوان PB المطبوع Ahmed's story رغم أن وصف مجموعة TB الحالي يقول Adnan's story.",
    sourceNote: "أُعيد تنظيم نثر القصة إلى راوٍ وأسطر مقتبسة مع حفظ الكلمات المقروءة بصرياً؛ المتكلم بضمير I هو Ahmed وفق العنوان والسرد.",
    speakers: { Narrator: { voice: "narrator" }, Father: { voice: "man" }, Mother: { voice: "woman" }, Ahmed: { voice: "boy" } },
    lines: [
      DLG_LINE("Narrator", "On Friday evening I went to the desert with my family. We left at five o'clock. After an hour Father stopped the car.", { kind: "narration" }),
      DLG_LINE("Father", "This is a nice place."),
      DLG_LINE("Narrator", "The moon was shining and there were lots of stars in the sky. Father and I made a fire. Mother started to cook. Amal helped her. Soon we were sitting near the fire, eating meat and potatoes.", { kind: "narration" }),
      DLG_LINE("Narrator", "We were talking and laughing. Suddenly Father jumped up.", { kind: "narration" }),
      DLG_LINE("Father", "Look! There!"),
      DLG_LINE("Narrator", "There was a ball of fire in the sky.", { kind: "narration" }),
      DLG_LINE("Mother", "What is it?"), DLG_LINE("Father", "I don't know."), DLG_LINE("Ahmed", "I've got no idea."),
      DLG_LINE("Narrator", "The ball of fire went into the sea about twenty kilometres away.", { kind: "narration", speechText: "The ball of fire went into the sea about twenty kilometers away." }),
      DLG_LINE("Narrator", "In the car going home Amal went to sleep. Mother, Father and I talked and talked.", { kind: "narration" })
    ],
    questions: [
      DLG_Q("When did the family leave?", ["At four o'clock", "At five o'clock", "At seven o'clock"], 1, "يقول الراوي: We left at five o'clock."),
      DLG_Q("Who helped Mother cook?", ["Amal", "Ahmed", "Father"], 0, "يقول النص: Amal helped her."),
      DLG_Q("What did they see in the sky?", ["A white falcon", "A ball of fire", "A plane"], 1, "يقول الراوي: There was a ball of fire in the sky."),
      DLG_Q("How far away did it go into the sea?", ["About six kilometres", "About ten kilometres", "About twenty kilometres"], 2, "المسافة المطبوعة about twenty kilometres.")
    ],
    keyLine: 8, focus: ["On Friday evening", "Suddenly", "a ball of fire", "I've got no idea."],
    writePromptAr: "اكتب نهاية تخمينية من 4 جمل لما يمكن أن تكونه كرة النار، مع سؤال وجواب قصيرين.",
    writeStarter: "In the car, I asked, 'What was it?' Father said, '...'",
    speakPromptAr: "اقرأ القصة بتنغيم هادئ، ثم ارفع الصوت عند Look! There! وعبّر عن حيرة الأسرة."
  },
  {
    id: "dlg-u5-hassan-story", unit: 5, stepRef: "u5g2", exercise: "5.9", title: "Hassan's story", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.51", pdfPages: "PDF p.7 in english_pubils_8th-2.pdf",
    csRefs: "CS44–45 (TB group range)", icon: "⛵", settingAr: "Hassan وأبوه يأخذان قارباً إلى جزيرة، ينصبان خيمة ويصيدان أربع سمكات، ثم يريان كرة نار تسقط في البحر.",
    pictureContextAr: "كرة النار في رسم الصفحة تقترب من البحر؛ القصة موازية لقصة Ahmed لكن المسافة هنا ستة كيلومترات.",
    sourceNote: "المتكلم بضمير I هو Hassan وفق العنوان والسرد. نُسخت الأسطر المقروءة بصرياً من النثر والاقتباسات فقط.",
    speakers: { Hassan: { voice: "boy" }, Father: { voice: "man" }, Narrator: { voice: "narrator" } },
    lines: [
      DLG_LINE("Hassan", "What shall we do tomorrow?"), DLG_LINE("Father", "We'll take the boat and we'll go to the island."),
      DLG_LINE("Narrator", "We left at nine o'clock the next morning. We got to the island at eleven o'clock. First we put up the tent. Then my father and I went fishing. We caught four fish. In the evening we made a fire on the beach.", { kind: "narration" }),
      DLG_LINE("Narrator", "We were cooking the fish. Suddenly I saw something in the sky.", { kind: "narration" }),
      DLG_LINE("Hassan", "Look at that! What is it, Dad?"),
      DLG_LINE("Narrator", "A ball of fire was moving across the sky.", { kind: "narration" }),
      DLG_LINE("Father", "I don't know."),
      DLG_LINE("Narrator", "We watched it. It came down, down, and went into the sea about six kilometres away.", { kind: "narration", speechText: "We watched it. It came down, down, and went into the sea about six kilometers away." }),
      DLG_LINE("Narrator", "I looked at the stars on the way home. They were beautiful.", { kind: "narration" })
    ],
    questions: [
      DLG_Q("What is Father's plan for tomorrow?", ["Take the boat to the island", "Go to the desert", "Visit the farm"], 0, "يقول: We'll take the boat and we'll go to the island."),
      DLG_Q("At what time did they reach the island?", ["Nine o'clock", "Ten o'clock", "Eleven o'clock"], 2, "غادرا في التاسعة ووصلا في الحادية عشرة."),
      DLG_Q("How many fish did they catch?", ["Two", "Four", "Six"], 1, "يقول الراوي: We caught four fish."),
      DLG_Q("How far away did the ball of fire go into the sea?", ["About six kilometres", "About twenty kilometres", "About three kilometres"], 0, "المسافة في هذه القصة about six kilometres.")
    ],
    keyLine: 4, focus: ["What shall we do tomorrow?", "First / Then", "four fish", "came down, down"],
    writePromptAr: "قارن كتابةً بين رحلة Ahmed ورحلة Hassan في المكان وعدد الأشخاص والمسافة.",
    writeStarter: "Ahmed went ... . Hassan went ... . The ball of fire was ... .",
    speakPromptAr: "مثّل سؤال Hassan وجواب أبيه، ثم لحظة رؤية كرة النار ببطء عند down, down."
  },
  {
    id: "dlg-u5-whose", unit: 5, stepRef: "u5g4", exercise: "5.11", title: "Whose is it?", kind: "picture-puzzle-dialogue",
    printedPages: "PB printed p.53", pdfPages: "PDF p.9 in english_pubils_8th-2.pdf",
    csRefs: "CS47", icon: "🥒", settingAr: "Amna وNadia وYasmin وMariam عدن من السوق بأكياس خضار، وعلى الطالب استخدام أقوالهن لمعرفة ملكية الخيار وغيره.",
    pictureContextAr: "الأسماء مطبوعة أسفل صورة الفتيات الأربع؛ Yasmin باللون الأصفر، Mariam بالأزرق، Nadia بالأحمر، وAmna ببلوزة منقطة.",
    sourceNote: "أسماء الشخصيات مطبوعة أعلى الصفحة؛ نُسبت الفقاعات من مواقعها وملابس الشخصيات، وما زالت النسبة بانتظار مراجعة بشرية ثانية.",
    speakers: { Narrator: { voice: "narrator" }, Yasmin: { voice: "girl" }, Mariam: { voice: "girl2" }, Nadia: { voice: "girl3" }, Amna: { voice: "girl4" } },
    lines: [
      DLG_LINE("Narrator", "Amna, Nadia, Yasmin and Mariam went to the market. They bought some vegetables. Whose is the cucumber?", { kind: "narration" }),
      DLG_LINE("Yasmin", "I don't like cucumbers."), DLG_LINE("Mariam", "Whose is the lettuce?"), DLG_LINE("Nadia", "It's not mine."),
      DLG_LINE("Yasmin", "Amna! Is this cucumber yours?"), DLG_LINE("Amna", "No."),
      DLG_LINE("Mariam", "The potatoes are mine. I didn't buy anything else.")
    ],
    questions: [
      DLG_Q("Where did the four girls go?", ["To the zoo", "To the market", "To the farm"], 1, "يفتتح النص بأن الفتيات went to the market."),
      DLG_Q("Who doesn't like cucumbers?", ["Yasmin", "Amna", "Mariam"], 0, "تقول Yasmin في صورتها الدائرية: I don't like cucumbers."),
      DLG_Q("What does Nadia say about the lettuce?", ["It is hers.", "It's not mine.", "She bought two."], 1, "رد Nadia المطبوع: It's not mine."),
      DLG_Q("What did Mariam buy?", ["Cucumbers only", "Lettuce only", "Potatoes, and nothing else"], 2, "تقول: The potatoes are mine. I didn't buy anything else.")
    ],
    keyLine: 4, focus: ["Whose is ...?", "It's not mine.", "Is this ... yours?", "anything else"],
    writePromptAr: "استخدم الأدلة المطبوعة لكتابة استنتاجك عن صاحب الخيار، واذكر دليلين على الأقل قبل الإجابة.",
    writeStarter: "Yasmin says ... . Amna says ... . I think the cucumber is ... because ... .",
    speakPromptAr: "تمثيل تحقيق قصير بأربع فتيات: اسألي Whose is it? وردّي بـmine / not mine / yours."
  },
  {
    id: "dlg-u5-uncle-ali-farm", unit: 5, stepRef: "u5g4", exercise: "5.13", title: "Uncle Ali's farm", kind: "picture-story-dialogue",
    printedPages: "PB printed pp.54–55", pdfPages: "PDF pp.10–11 in english_pubils_8th-2.pdf",
    csRefs: "CS47", icon: "🚜", settingAr: "يساعد ولدان Uncle Ali في قطف الطماطم، يجدان مالاً، يسألان عنه، ثم يسلّمانه إلى مركز الشرطة.",
    pictureContextAr: "الصندوق الافتتاحي يسمي الولدين جماعياً Ahmed وSaleh؛ حقول الصفحة موسومة dates وcucumbers وlettuces وtomatoes، وتظهر عنزات قرب المال.",
    sourceNote: "لا تُسمّي الفقاعات أيّاً من Ahmed وSaleh منفرداً؛ لذلك استُخدمت تسميتا Boy 1 وBoy 2 للمنصة بدلاً من نسبة غير مؤكدة.",
    speakers: { Narrator: { voice: "narrator" }, "Uncle Ali": { voice: "elderman" }, "Boy 1": { voice: "boy" }, "Boy 2": { voice: "boy2" }, Policeman: { voice: "man" } },
    lines: [
      DLG_LINE("Narrator", "Ahmed and Saleh want to help Uncle Ali.", { kind: "narration" }),
      DLG_LINE("Uncle Ali", "Go and pick some tomatoes for me. Pick the big red ones — not the small red ones."),
      DLG_LINE("Boy 1", "Don't pick that one. It's too small."), DLG_LINE("Boy 2", "Hey! Stop!"), DLG_LINE("Boy 1", "Look at all this money!"),
      DLG_LINE("Boy 1", "Uncle Ali! Is this yours?"), DLG_LINE("Uncle Ali", "No. It's not mine."), DLG_LINE("Boy 2", "Whose is it, then?"), DLG_LINE("Uncle Ali", "I don't know."),
      DLG_LINE("Boy 1", "What shall we do with it?"), DLG_LINE("Boy 2", "We can't keep it."), DLG_LINE("Boy 2", "We'll take it to the police station."),
      DLG_LINE("Boy 1", "We found this money on Uncle Ali's farm."), DLG_LINE("Policeman", "Thank you, Saleh. Thank you, Ahmed."),
      DLG_LINE("Policeman", "Mr Tariq, is this yours?")
    ],
    questions: [
      DLG_Q("Which tomatoes does Uncle Ali want?", ["The small red ones", "The big red ones", "The green ones"], 1, "يقول: Pick the big red ones — not the small red ones."),
      DLG_Q("What do the boys find?", ["A camera", "Money", "A key"], 1, "يقول أحدهما: Look at all this money!"),
      DLG_Q("What does Uncle Ali say about the money?", ["It is his.", "It's not mine, and he doesn't know whose it is.", "It belongs to the boys."], 1, "يجيب: No. It's not mine ثم I don't know."),
      DLG_Q("What do the boys decide to do?", ["Keep it", "Hide it on the farm", "Take it to the police station"], 2, "يقول أحدهما: We'll take it to the police station.")
    ],
    keyLine: 11, focus: ["Pick the big red ones", "Is this yours?", "It's not mine.", "We can't keep it."],
    writePromptAr: "اكتب تقرير تسليم قصيراً للشرطة: أين وجدتما المال؟ من سألتما؟ ولماذا لم تحتفظا به؟",
    writeStarter: "We found this money ... . Uncle Ali said ... . We brought it here because ... .",
    speakPromptAr: "مثّل مشهد العثور على المال وقرار الشرطة؛ ركّز على نبرة الدهشة ثم الحسم الأخلاقي."
  },
  {
    id: "dlg-u5-garden", unit: 5, stepRef: "u5g5", exercise: "5.14", title: "A day in the garden", kind: "picture-dialogue",
    printedPages: "PB printed p.56", pdfPages: "PDF p.12 in english_pubils_8th-2.pdf",
    csRefs: "No CS listed in TB group materials", icon: "🥗", settingAr: "فتاتان تصنعان خيمة من بطانية بين نخيلتين، ثم تقرران صنع سلطة وتسألان عمّا يلزم وكيف تُصنع.",
    pictureContextAr: "لا أسماء مطبوعة للفتاتين؛ تُميَّزان هنا بلون الملابس فقط. أسفل الصفحة ثلاث خطوات مصورة موسومة wash وcut up وmix ووعاء bowl.",
    sourceNote: "تسميتا Girl in red وGirl in blue وصفيتان للمنصة وليستا اسمين مطبوعين؛ نسبة الفقاعات من ذيولها ومواقع الشخصيات وبانتظار مراجعة ثانية.",
    speakers: { "Girl in red": { voice: "girl" }, "Girl in blue": { voice: "girl2" } },
    lines: [
      DLG_LINE("Girl in red", "Let's make a tent."), DLG_LINE("Girl in blue", "How?"), DLG_LINE("Girl in red", "I'll show you."),
      DLG_LINE("Girl in blue", "That's good."), DLG_LINE("Girl in red", "What shall we eat?"), DLG_LINE("Girl in blue", "Let's make a salad."),
      DLG_LINE("Girl in red", "What do we need? How do we make a salad?")
    ],
    questions: [
      DLG_Q("What does the girl in red suggest first?", ["Make a salad", "Make a tent", "Go swimming"], 1, "السطر الأول: Let's make a tent."),
      DLG_Q("What does the girl in blue ask after the suggestion?", ["How?", "Where?", "Whose is it?"], 0, "تسأل بكلمة How؟"),
      DLG_Q("What do they decide to make to eat?", ["Soup", "A sandwich", "A salad"], 2, "تقول الفتاة باللون الأزرق: Let's make a salad."),
      DLG_Q("Which two questions end the dialogue?", ["What do we need? How do we make a salad?", "Where is it? How far is it?", "Whose is it? Is it yours?"], 0, "هذان السؤالان مطبوعان في آخر فقاعة.")
    ],
    keyLine: 6, focus: ["Let's make ...", "I'll show you.", "What shall we eat?", "What do we need?"],
    writePromptAr: "أكمل الحوار بكتابة مكونات سلطة وثلاث خطوات باستخدام wash وcut up وmix.",
    writeStarter: "We need ... . First, wash ... . Then cut up ... . Finally, mix ... .",
    speakPromptAr: "تمثيل ثنائي لصنع خيمة وسلطة؛ أضيفي في الجولة الثانية إجاباتكما الخاصة عن المكونات والخطوات."
  },
  {
    id: "dlg-u5-white-falcon", unit: 5, stepRef: "u5g7", exercise: "5.17", title: "The white falcon", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.57", pdfPages: "PDF p.13 in english_pubils_8th-2.pdf",
    csRefs: "CS48", icon: "🦅", settingAr: "يوقظ Rashid أباه بعدما وجد صقراً أبيض على كرسيه؛ يطعماه، يكتشفان كسر ساقه اليسرى، ويعتني به أسبوعين.",
    pictureContextAr: "الرسم يبيّن الأب ممسكاً الصقر الأبيض على طاولة؛ النص يقرر البحث عن صاحبه غداً، فتستمر السلسلة في Unit 6.",
    sourceNote: "أُعيد تنظيم النثر والاقتباسات إلى أسطر؛ عبارات مثل Be careful منسوبة إلى الأب من سياق الفقرة، والكل بانتظار مراجعة بشرية ثانية.",
    speakers: { Rashid: { voice: "boy" }, Father: { voice: "man" }, Narrator: { voice: "narrator" } },
    lines: [
      DLG_LINE("Rashid", "Dad! Dad! Wake up! There's a white falcon on my chair."), DLG_LINE("Father", "A white falcon? You're dreaming."),
      DLG_LINE("Narrator", "We went into my room.", { kind: "narration" }), DLG_LINE("Rashid", "Look!"),
      DLG_LINE("Father", "Rashid. Sh! You'll frighten it."),
      DLG_LINE("Narrator", "My father went towards the falcon and held it in his hands.", { kind: "narration" }),
      DLG_LINE("Father", "It's hungry. Get some meat."),
      DLG_LINE("Narrator", "The falcon pulled the meat from my hand. It was very hungry.", { kind: "narration" }),
      DLG_LINE("Father", "Be careful! It'll bite you."), DLG_LINE("Rashid", "Look, Dad. The left leg. It's broken."),
      DLG_LINE("Narrator", "The falcon was standing on one leg.", { kind: "narration" }), DLG_LINE("Father", "Wait here."),
      DLG_LINE("Narrator", "He got some string and tied a small piece of wood on the falcon's leg.", { kind: "narration" }),
      DLG_LINE("Narrator", "I fed the falcon every day. After two weeks we were friends. I was very happy, but I was also sad.", { kind: "narration" }),
      DLG_LINE("Rashid", "The falcon's beautiful, Dad. But it's not mine."), DLG_LINE("Father", "I know. I know. But where does it come from? We'll find out tomorrow.")
    ],
    questions: [
      DLG_Q("Where is the white falcon when Rashid wakes his father?", ["On his chair", "On the table", "In the garden"], 0, "يقول Rashid: There's a white falcon on my chair."),
      DLG_Q("Why does Father ask for meat?", ["The falcon is hungry.", "Rashid is hungry.", "The meat is for a salad."], 0, "يقول: It's hungry. Get some meat."),
      DLG_Q("Which leg is broken?", ["The right leg", "The left leg", "Both legs"], 1, "يقول Rashid: The left leg. It's broken."),
      DLG_Q("What will they try to find out tomorrow?", ["Where the falcon comes from", "How far the farm is", "Who painted the picture"], 0, "يختتم الأب: But where does it come from? We'll find out tomorrow.")
    ],
    keyLine: 9, focus: ["Wake up!", "You'll frighten it.", "It's broken.", "We'll find out tomorrow."],
    writePromptAr: "اكتب سجل عناية بالصقر لمدة أسبوعين في 5 جمل ماضية: طعام، ساق، مشاعر، وسؤال عن صاحبه.",
    writeStarter: "Every day, I fed ... . Its left leg was ... . I felt ... because ... .",
    speakPromptAr: "قراءة درامية: صراخ خفيف عند الاستيقاظ، همس عند الاقتراب، ثم حزن هادئ في النهاية."
  },
  {
    id: "dlg-u6-zoo", unit: 6, stepRef: "u6g2", exercise: "6.4 / 6.5", title: "At the zoo", kind: "picture-story-dialogue",
    printedPages: "PB printed pp.60–61", pdfPages: "PDF pp.16–17 in english_pubils_8th-2.pdf",
    csRefs: "CS50–52 (TB group range)", icon: "🦒", settingAr: "Kim وPat وSue وAnne يؤدين واجباً في حديقة الحيوان: إيجاد أكبر وأصغر وأسرع وأطول حيوان، ثم اللقاء قرب الساعة.",
    pictureContextAr: "اللوحات مرقمة 1–9 وتُظهر فيلًا وزرافات وقردة وفئرانًا وفهدًا وجملًا؛ الحروف P وK وA وS على زي الفتيات في اللوحة الأولى تساعد على التعرف إليهن.",
    sourceNote: "بعض الفقاعات الصغيرة لا تسمح بنسبة اسم مؤكدة؛ استُخدمت Girl 1/Girl 2/Girl هناك، ونُسبت بقية الأسطر من الحروف والشعر وذيول الفقاعات وتقسيم المهام المعلن.",
    speakers: { Narrator: { voice: "narrator" }, Sue: { voice: "girl3" }, Kim: { voice: "girl" }, Sign: { voice: "narrator" }, "Girl 1": { voice: "girl2" }, "Girl 2": { voice: "girl4" }, Pat: { voice: "girl2" }, Anne: { voice: "girl4" }, Girl: { voice: "girl" } },
    lines: [
      DLG_LINE("Narrator", "Kim, Pat, Sue and Anne have to go to the zoo. Why?", { kind: "narration" }),
      DLG_LINE("Sue", "This is our homework."), DLG_LINE("Kim", "We have to find these animals."),
      DLG_LINE("Sign", "Homework. Find the biggest, smallest, fastest, tallest animal in the zoo.", { kind: "sign" }),
      DLG_LINE("Kim", "You and Anne find the smallest and the tallest. Pat and I will find the others."),
      DLG_LINE("Girl 1", "We have to be home at 3 o'clock.", { speechText: "We have to be home at three o'clock." }),
      DLG_LINE("Girl 2", "Right. We'll meet at 2.30. Here. Near the clock.", { speechText: "Right. We'll meet at two thirty. Here. Near the clock." }),
      DLG_LINE("Pat", "Don't do that! Look! It's frightened."), DLG_LINE("Anne", "Which one is the smallest?"),
      DLG_LINE("Girl", "Look! It wants to play."), DLG_LINE("Kim", "This one is the biggest."), DLG_LINE("Pat", "But I can't find the fastest."),
      DLG_LINE("Sue", "Where are Kim and Pat?"), DLG_LINE("Anne", "Look!")
    ],
    questions: [
      DLG_Q("What four kinds of animal must the girls find?", ["Biggest, smallest, fastest and tallest", "Oldest, youngest, happiest and saddest", "First, second, third and fourth"], 0, "ورقة الواجب المطبوعة تذكر biggest/smallest/fastest/tallest."),
      DLG_Q("Which pair will find the smallest and tallest?", ["Kim and Pat", "Sue and Anne", "Pat and Anne"], 1, "تقول Kim لـSue: You and Anne find the smallest and the tallest."),
      DLG_Q("Where and when will they meet?", ["At 3.00 near the gate", "At 2.30 near the clock", "At 2.00 near the elephants"], 1, "الاتفاق: meet at 2.30 ... Near the clock."),
      DLG_Q("What does Kim say about the elephant in panel 7?", ["It is the fastest.", "It wants to play.", "This one is the biggest."], 2, "الفقاعة عند الفيل تقول: This one is the biggest.")
    ],
    keyLine: 4, focus: ["have to", "the biggest / smallest", "the fastest / tallest", "near the clock"],
    writePromptAr: "اكتب تقرير واجب قصيراً بأربع جمل، واحدة لكل صفة تفضيل، دون ادعاء حيوان لم يثبته الحوار إلا إذا وصفته بأنه تخمين.",
    writeStarter: "The biggest animal is ... . The smallest is ... . We met at ... .",
    speakPromptAr: "تقمصي دور Kim وقسّمي المهام بثقة، ثم بدّلي الحيوانات والأزواج في جولة ثانية."
  },
  {
    id: "dlg-u6-Fatma", unit: 6, stepRef: "u6g3", exercise: "6.7", title: "Fatma", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.63", pdfPages: "PDF p.19 in english_pubils_8th-2.pdf",
    csRefs: "CS53/54", icon: "🎨", settingAr: "تزور Fatma صديقتيها Yasmin وMariam؛ Mariam ترسم ثعلباً لواجب مدرسي، وYasmin رسمت فأراً في اليوم السابق.",
    pictureContextAr: "الصورة العليا تُظهر Mariam عند الحامل وFatma عند الباب وYasmin تقرأ؛ أسفل الصفحة رسم فأر وسؤال مطبوع Who painted this?",
    sourceNote: "العناوين الهامشية What?/Who? وسؤال Who painted this? عناصر تمرين وليست أسطر حوار؛ نُسخ السرد والكلام المقتبس فقط.",
    speakers: { Fatma: { voice: "girl" }, Mariam: { voice: "girl2" }, Yasmin: { voice: "girl3" } },
    lines: [
      DLG_LINE("Fatma", "Last Thursday I went to visit Yasmin and Mariam. Yasmin was reading a book and Mariam was painting a picture.", { kind: "narration" }),
      DLG_LINE("Mariam", "Do you like it?"), DLG_LINE("Fatma", "It's beautiful. But why are you painting a fox?"),
      DLG_LINE("Mariam", "It's for school. We both have to paint a picture of our favourite animal.", { speechText: "It's for school. We both have to paint a picture of our favorite animal." }),
      DLG_LINE("Fatma", "Where's yours, Yasmin?"), DLG_LINE("Yasmin", "I did mine yesterday. I painted a mouse. The smallest animal in the zoo.")
    ],
    questions: [
      DLG_Q("When did Fatma visit Yasmin and Mariam?", ["Last Thursday", "Last Friday", "On Saturday"], 0, "يبدأ السرد: Last Thursday I went to visit..."),
      DLG_Q("What animal is Mariam painting?", ["A mouse", "A fox", "A falcon"], 1, "تسألها Fatma لماذا ترسم a fox."),
      DLG_Q("Why are the girls painting animals?", ["For a zoo sign", "For school: a picture of their favourite animal", "For Uncle Ali"], 1, "تقول Mariam: It's for school... our favourite animal."),
      DLG_Q("What did Yasmin paint yesterday?", ["A fox", "A horse", "A mouse, the smallest animal in the zoo"], 2, "تقول: I painted a mouse. The smallest animal in the zoo.")
    ],
    keyLine: 3, focus: ["Last Thursday", "Do you like it?", "favourite animal", "I did mine yesterday."],
    writePromptAr: "اكتب 4 جمل عن صورة حيوانك المفضل: متى رسمتها؟ ما الحيوان؟ ولماذا اخترته؟",
    writeStarter: "I painted a ... . It is my favourite animal because ... .",
    speakPromptAr: "مثّلي زيارة فنية: امدحي الصورة، اسألي عن سبب اختيار الحيوان، ثم اعرضي صورتك."
  },
  {
    id: "dlg-u6-Yasmin-and-Mariam", unit: 6, stepRef: "u6g3", exercise: "6.8", title: "Yasmin and Mariam", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.64", pdfPages: "PDF p.20 in english_pubils_8th-2.pdf",
    csRefs: "CS53/54", icon: "🏫", settingAr: "في صف صباح السبت تعرض الفتيات صور الحيوانات؛ تتفحص Mrs Moosa الصور كلها وتعلن أن صورتي Yasmin وMariam الأفضل.",
    pictureContextAr: "الرسم يُظهر المعلمة واقفة بين مقاعد الطالبات وهن يرفعن صورهن؛ سؤال الصفحة Whose pictures were the best? سُجل بوصفه موجهاً لا كلام شخصية.",
    sourceNote: "راوية الضمير I هي Yasmin: Nadia تخاطبها باسمها بعد قول I said. أُبقي سطر الراوي منفصلاً لتوضيح هذا الاستنتاج النصي.",
    speakers: { Narrator: { voice: "narrator" }, Yasmin: { voice: "girl3" }, Nadia: { voice: "girl4" }, "Mrs Moosa": { voice: "woman" }, Mariam: { voice: "girl2" } },
    lines: [
      DLG_LINE("Narrator", "Whose pictures were the best?", { kind: "prompt" }),
      DLG_LINE("Narrator", "On Saturday morning we all took our pictures to school. In the classroom everybody was talking about them.", { kind: "narration" }),
      DLG_LINE("Yasmin", "Yours is great, Nadia."), DLG_LINE("Nadia", "Thanks, Yasmin. Can I see yours?"),
      DLG_LINE("Mrs Moosa", "Quiet, girls. Quiet, please. Thank you."),
      DLG_LINE("Narrator", "We all sat down and held up our pictures. Mrs Moosa walked round the class very slowly. She looked at every one. Then she looked at mine again. Then she looked at Mariam's again.", { kind: "narration" }),
      DLG_LINE("Mrs Moosa", "Well done, girls. All the pictures are very good, but Yasmin's and Mariam's are the best. We'll put theirs on the wall."),
      DLG_LINE("Mariam", "Come on, Yasmin. Let's tell Fatma.")
    ],
    questions: [
      DLG_Q("When did the girls take their pictures to school?", ["On Thursday evening", "On Saturday morning", "On Friday afternoon"], 1, "يبدأ السرد: On Saturday morning..."),
      DLG_Q("What does Nadia ask Yasmin?", ["Can I see yours?", "Where is Fatma?", "Whose is the cucumber?"], 0, "بعد الشكر تقول: Can I see yours?"),
      DLG_Q("Who asks the class to be quiet?", ["Fatma", "Nadia", "Mrs Moosa"], 2, "يقول النص: said Mrs Moosa."),
      DLG_Q("Whose pictures will go on the wall?", ["Nadia's and Fatma's", "Yasmin's and Mariam's", "All of them equally"], 1, "تعلن Mrs Moosa أن صورتي Yasmin وMariam الأفضل وستضع theirs على الجدار.")
    ],
    keyLine: 6, focus: ["Yours is great.", "Can I see yours?", "the best", "theirs"],
    writePromptAr: "اكتب إعلان معلمة قصيراً يمدح عملين ويشرح سبب اختيارهما للجدار دون إحباط بقية الصف.",
    writeStarter: "Well done, everyone. All the ... are good, but ... are the best because ... .",
    speakPromptAr: "مثّلي صوت المعلمة الهادئ الحازم عند Quiet, please ثم صوتها المشجع عند إعلان الأفضل."
  },
  {
    id: "dlg-u6-white-falcon", unit: 6, stepRef: "u6g8", exercise: "6.13", title: "The white falcon", kind: "narrative-with-dialogue",
    printedPages: "PB printed p.66", pdfPages: "PDF p.22 in english_pubils_8th-2.pdf",
    csRefs: "CS57", icon: "🦅", settingAr: "في سوق البلدة يبحث Rashid وأبوه عن صاحب الصقر؛ يدلّهما Yousif إلى Sheikh Abdullah الذي يهب الصقر لـRashid مكافأة على عنايته.",
    pictureContextAr: "الصفحة نثرية بلا رسم مشهد كبير؛ تختتم سلسلة الصقر التي بدأت في Unit 4 واستمرت في Unit 5.",
    sourceNote: "سطر سؤال السوق بصيغة we لذلك سُمي المتحدث Rashid and Father؛ بقية النسب من عبارات said/asked المطبوعة في النثر.",
    speakers: { Narrator: { voice: "narrator" }, Father: { voice: "man" }, Rashid: { voice: "boy" }, "Rashid and Father": { voice: "narrator" }, "People in the market": { voice: "children" }, Yousif: { voice: "elderman" }, "Sheikh Abdullah": { voice: "man2" } },
    lines: [
      DLG_LINE("Narrator", "We were having breakfast. I was feeding the white falcon — my white falcon.", { kind: "narration" }),
      DLG_LINE("Father", "Rashid, you can't keep it. You know that."), DLG_LINE("Rashid", "Yes, Dad. But whose is it?"), DLG_LINE("Father", "We'll find out in town."),
      DLG_LINE("Rashid and Father", "We have a white falcon at home. Is it yours? Whose is it? Do you know?"),
      DLG_LINE("People in the market", "No."),
      DLG_LINE("Narrator", "Then we asked Yousif, an old farmer from the mountains.", { kind: "narration" }),
      DLG_LINE("Yousif", "Yes, I know. It's Sheikh Abdullah's. He lives near me."), DLG_LINE("Father", "How far is it to your home?"), DLG_LINE("Sheikh Abdullah", "Not far."),
      DLG_LINE("Narrator", "I turned round. He was tall and had a kind face. He was laughing.", { kind: "narration" }),
      DLG_LINE("Sheikh Abdullah", "I'm Sheikh Abdullah. Do you want to see me?"),
      DLG_LINE("Narrator", "I told him about the white falcon.", { kind: "narration" }),
      DLG_LINE("Sheikh Abdullah", "I had a white falcon. But it flew away. It was my favourite.", { speechText: "I had a white falcon. But it flew away. It was my favorite." }),
      DLG_LINE("Rashid", "So it's yours."), DLG_LINE("Sheikh Abdullah", "It isn't mine now."), DLG_LINE("Rashid", "Why not?"),
      DLG_LINE("Sheikh Abdullah", "The falcon came to you. And you helped it. You fed it and took care of it. Now it's yours.")
    ],
    questions: [
      DLG_Q("Why does Father say Rashid can't keep the falcon at first?", ["It belongs to somebody else and they must find out whose it is.", "Falcons cannot eat meat.", "The market is closed."], 0, "يسأل Rashid: But whose is it؟ ويقرر الأب البحث في البلدة."),
      DLG_Q("Who first identifies the owner?", ["A policeman", "Yousif, an old farmer", "Mrs Moosa"], 1, "يقول Yousif: It's Sheikh Abdullah's."),
      DLG_Q("What happened to Sheikh Abdullah's falcon?", ["It flew away.", "It went to the zoo.", "It broke a wing at the market."], 0, "يقول الشيخ: But it flew away."),
      DLG_Q("Why does the Sheikh give the falcon to Rashid?", ["Rashid paid for it.", "The falcon came to Rashid, and he helped, fed and took care of it.", "Father asked for a present."], 1, "يعدد الشيخ أفعال Rashid ثم يقول: Now it's yours.")
    ],
    keyLine: 16, focus: ["You can't keep it.", "Whose is it?", "It flew away.", "took care of it"],
    writePromptAr: "اكتب رسالة شكر قصيرة من Rashid إلى الشيخ تذكر فيها كيف ساعد الصقر ووعداً بالعناية به.",
    writeStarter: "Dear Sheikh Abdullah, Thank you for ... . I helped it when ... . I will ... .",
    speakPromptAr: "اقرأ ختام السلسلة بثلاثة أصوات: أب حازم، ولد حزين، وشيخ كريم هادئ."
  },
  {
    id: "dlg-u7-bob-shop", unit: 7, stepRef: "u7g3", exercise: "7.7 / 7.8", title: "Bob, the shopkeeper's son", kind: "multi-scene-conversation",
    printedPages: "PB printed pp.72–73", pdfPages: "PDF pp.28–29 in english_pubils_8th-2.pdf",
    csRefs: "CS62/63", icon: "🛒", settingAr: "في متجر The Everything Shop يساعد Bob أباه كل سبت، ثم يخدم Housewife تشتري زبدة وسكراً وBoy يشتري فراشي رسم وأقلاماً.",
    pictureContextAr: "لافتة المتجر وكلمة OPEN ومشاهد الزبدة وفراشي الرسم مطبوعة في الرسوم؛ أسماء/أدوار المتحدثين مطبوعة قبل كل سطر.",
    sourceNote: "جُمعت المشاهد الثلاثة المتتالية على الصفحتين في مدخل تمرين واحد لأنها التمرين نفسه 7.7/7.8 وبنفس الشخصية المركزية.",
    speakers: { Bob: { voice: "boy" }, Father: { voice: "man" }, Housewife: { voice: "woman" }, Boy: { voice: "boy2" } },
    lines: [
      DLG_LINE("Bob", "My name is Bob. Every Saturday I help my father in his shop.", { kind: "narration" }),
      DLG_LINE("Father", "Bob, can you clean the floor, please?"), DLG_LINE("Bob", "I did that an hour ago."),
      DLG_LINE("Father", "Can you put some shirts on the shelf?"), DLG_LINE("Bob", "I'm doing that now."),
      DLG_LINE("Father", "After that, can you help those people over there?"), DLG_LINE("Bob", "Yes, I'll do that in a minute."),
      DLG_LINE("Bob", "Can I help you?"), DLG_LINE("Housewife", "Yes. I'd like some butter, please."), DLG_LINE("Bob", "How much?"), DLG_LINE("Housewife", "Half a kilo, please."),
      DLG_LINE("Bob", "Would you like anything else?"), DLG_LINE("Housewife", "Yes, please. Some sugar."), DLG_LINE("Bob", "How much?"), DLG_LINE("Housewife", "Two kilos."),
      DLG_LINE("Boy", "Excuse me, can you help me? I can't reach those paintbrushes."), DLG_LINE("Bob", "I'll get them. How many do you want?"),
      DLG_LINE("Boy", "Two, please. Thank you."), DLG_LINE("Bob", "Anything else?"), DLG_LINE("Boy", "Yes, please. I'd like some pencils."),
      DLG_LINE("Bob", "How many?"), DLG_LINE("Boy", "Five, please."), DLG_LINE("Bob", "Here you are."), DLG_LINE("Boy", "Thank you.")
    ],
    questions: [
      DLG_Q("What does Bob say about cleaning the floor?", ["I'll do it tomorrow.", "I did that an hour ago.", "I'm doing that now."], 1, "يجيب: I did that an hour ago."),
      DLG_Q("What is Bob doing when Father mentions the shirts?", ["Cleaning the floor", "Putting shirts on the shelf", "Serving the boy"], 1, "يقول: I'm doing that now."),
      DLG_Q("What quantities does the housewife ask for?", ["Half a kilo of butter and two kilos of sugar", "Two kilos of butter and half a kilo of sugar", "One kilo of each"], 0, "تطلب Half a kilo للزبدة ثم Two kilos للسكر."),
      DLG_Q("What does the boy buy?", ["Two paintbrushes and five pencils", "Five paintbrushes and two pencils", "Two books and five pens"], 0, "يطلب Two من فراشي الرسم وFive من الأقلام.")
    ],
    keyLine: 10, focus: ["Can you ... please?", "I did that an hour ago.", "How much?", "How many?"],
    writePromptAr: "اكتب قائمة مهام ومشتريات: مهمة انتهت، مهمة جارية، مهمة ستحدث بعد دقيقة، وطلبا How much/How many.",
    writeStarter: "I did ... . I am doing ... now. I'll ... in a minute. I'd like ... .",
    speakPromptAr: "تمثيل متجر بثلاثة زبائن؛ بدّل السلع والكميات وميّز صوتياً بين How much وHow many."
  },
  {
    id: "dlg-u7-taxi-day", unit: 7, stepRef: "u7g5", exercise: "7.10", title: "Hassan Ibrahim — my day", kind: "picture-story-dialogue",
    printedPages: "PB printed pp.74–75", pdfPages: "PDF pp.30–31 in english_pubils_8th-2.pdf",
    csRefs: "CS64", icon: "🚕", settingAr: "يقود Hassan Ibrahim سيارة أجرة في دبي: يسارع بأب وابنه المريض إلى المستشفى، يساعد الشرطي، يوصل مسافراً إلى المطار، ويعيد كاميرا منسية.",
    pictureContextAr: "اللوحات مقسمة Morning وAfternoon وEvening؛ مشاهد المستشفى والشرطة والفندق والمطار وحادث السيارتين توضح انتقالات اليوم.",
    sourceNote: "Hassan مسمى في العنوان والسطر التعريفي؛ بقية الأدوار وصفية من المشاهد (أب/شرطي/مسافر/رجل) وليست أسماء مطبوعة، وبانتظار مراجعة ثانية.",
    speakers: { Narrator: { voice: "narrator" }, Father: { voice: "man2" }, "Hassan Ibrahim": { voice: "man" }, Policeman: { voice: "elderman" }, "Hotel passenger": { voice: "boy3" }, Passenger: { voice: "man2" }, "Man at the cars": { voice: "man2" }, Man: { voice: "man2" } },
    lines: [
      DLG_LINE("Narrator", "Hassan Ibrahim drives a taxi in Dubai.", { kind: "narration" }),
      DLG_LINE("Father", "The hospital. Quickly, please. My son is very ill."),
      DLG_LINE("Hassan Ibrahim", "It's the police. I'll have to stop."), DLG_LINE("Policeman", "You were driving too fast. Why?"),
      DLG_LINE("Hassan Ibrahim", "His son is ill. We have to get to the hospital."), DLG_LINE("Policeman", "OK. I'll help. Follow me."),
      DLG_LINE("Hotel passenger", "Can you take me to the airport, please?"), DLG_LINE("Hotel passenger", "Thank you."),
      DLG_LINE("Passenger", "Whose camera is this?"), DLG_LINE("Hassan Ibrahim", "Sorry. I'll have to go back to the airport."),
      DLG_LINE("Hotel passenger", "My camera! Where is it?"), DLG_LINE("Hassan Ibrahim", "Is this yours?"), DLG_LINE("Hotel passenger", "Yes, it is. Thank you."),
      DLG_LINE("Hassan Ibrahim", "Can I help?"), DLG_LINE("Man at the cars", "No, thanks. We're OK."), DLG_LINE("Man", "Taxi!")
    ],
    questions: [
      DLG_Q("Why must the first passenger go quickly to hospital?", ["His camera is there.", "His son is very ill.", "His plane is leaving."], 1, "يقول الأب: My son is very ill."),
      DLG_Q("How does the policeman help after hearing the reason?", ["He drives the taxi.", "He says, 'Follow me.'", "He takes them to the airport."], 1, "يقول الشرطي: OK. I'll help. Follow me."),
      DLG_Q("Why does Hassan go back to the airport?", ["A passenger has found a camera in the taxi.", "The taxi needs petrol.", "A man wants a hotel."], 0, "يسأل مسافر: Whose camera is this؟ فيعتذر Hassan ويعود."),
      DLG_Q("What happens in the evening scene?", ["Hassan offers help at two cars, but the people say they are OK.", "Hassan goes home by plane.", "The policeman stops him again."], 0, "يسأل Can I help؟ فيأتي الرد: No, thanks. We're OK.")
    ],
    keyLine: 4, focus: ["Quickly, please.", "I'll have to stop.", "Follow me.", "Is this yours?"],
    writePromptAr: "اكتب يوميات سائق أجرة في 6 جمل مرتبة Morning وAfternoon وEvening مع جملتي حوار.",
    writeStarter: "In the morning, a man said, '...' In the afternoon, I ... . In the evening, ... .",
    speakPromptAr: "مثّل إلحاح الأب وهدوء الشرطي بعد الفهم، ثم لطف Hassan عند إعادة الكاميرا."
  }
];

BOOK_DIALOGUES.forEach(d => {
  d.status = "transcribed-pending-second-review";
  d.audio = {
    type: "generated-device-tts",
    labelAr: "صوت مولّد آلياً على جهاز الطالب عند الضغط — ليس تسجيل الكتاب الأصلي",
    rates: [0.6, 0.8, 1],
    driveTrackId: null,
    driveStatus: "not-linked-unlistened"
  };
  d.skills = ["reading", "listening", "writing", "speaking"];
});
