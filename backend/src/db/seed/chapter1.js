// Complete Chapter 1 (Arjuna Vishada Yoga - "Arjuna's dilemma"), all 47 verses,
// split into 10 Parts sized for a few minutes of reading each.
// Sanskrit/transliteration verified against enjoylearningsanskrit.com's chapter-1 text.
// Explanations below are original simple paraphrases (not copied from any single
// translator), per the "AI-assisted, no separate review pass" content decision.

const chapter1 = {
    number: 1,
    title: 'Arjuna\'s dilemma',
    title_hi: 'अर्जुन विषाद योग',
    total_verses: 47,
    parts: [
        // Part 1: verses 1-3 (already seeded previously - kept for continuity)
        {
            part_number: 1,
            verse_start: 1,
            verse_end: 3,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 1,
                    sanskrit: 'धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।',
                    transliteration: 'dhritarashtra uvacha: dharma-kshetre kuru-kshetre samaveta yuyutsavah',
                    explanations: { en: 'The blind king Dhritarashtra asks his advisor Sanjaya what happened when his sons and the Pandavas gathered on the battlefield of Kurukshetra, ready to fight.', hi: 'अंधे राजा धृतराष्ट्र अपने सलाहकार संजय से पूछते हैं कि जब उनके पुत्र और पांडव युद्ध के लिए कुरुक्षेत्र के मैदान में इकट्ठा हुए, तो वहाँ क्या हुआ।' },
                },
                {
                    verse_number: 2,
                    sanskrit: 'सञ्जय उवाच। दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।',
                    transliteration: 'sanjaya uvacha: drishtva tu pandavanikam vyudham duryodhanas tada',
                    explanations: { en: 'Sanjaya begins his account: seeing the Pandava army arranged for battle, Prince Duryodhana approached his teacher Drona to speak with him.', hi: 'संजय अपनी कथा शुरू करते हैं: पांडवों की सेना को युद्ध के लिए सजा हुआ देखकर, राजकुमार दुर्योधन अपने गुरु द्रोण के पास गया और उनसे बात की।' },
                },
                {
                    verse_number: 3,
                    sanskrit: 'पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्। व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।',
                    transliteration: 'pashyaitam pandu-putranam acharya mahatim chamum',
                    explanations: { en: 'Duryodhana points out to Drona the vast army of the Pandavas, arranged skillfully by Dhrishtadyumna - ironically, Drona\'s own former student.', hi: 'दुर्योधन द्रोण को पांडवों की विशाल सेना दिखाता है, जिसे उनके ही पुराने शिष्य धृष्टद्युम्न ने बड़ी कुशलता से सजाया है - यह एक विडंबना ही है।' },
                },
            ],
            questions: [{
                question_text: 'Why does the Gita open with Dhritarashtra asking a question, rather than Krishna speaking?',
                options: [
                    { text: 'The whole story is being narrated to the blind king by Sanjaya, who has divine vision to see the battlefield', is_correct: true },
                    { text: 'Dhritarashtra is the main character of the Gita', is_correct: false },
                    { text: 'It is a mistake in the traditional text', is_correct: false },
                ],
                explanation: 'The Gita is framed as a story-within-a-story: Sanjaya narrates the entire battlefield conversation to the blind king Dhritarashtra using a divinely granted vision, which is why the whole text opens with his question.',
                difficulty: 'application',
                hi: {
                    question_text: 'गीता की शुरुआत कृष्ण के बोलने से नहीं, बल्कि धृतराष्ट्र के प्रश्न पूछने से क्यों होती है?',
                    options: [
                        { text: 'पूरी कथा अंधे राजा को संजय द्वारा सुनाई जा रही है, जिन्हें युद्धभूमि देखने की दिव्य दृष्टि प्राप्त है', is_correct: true },
                        { text: 'धृतराष्ट्र गीता के मुख्य पात्र हैं', is_correct: false },
                        { text: 'यह पारंपरिक ग्रंथ में एक भूल है', is_correct: false },
                    ],
                    explanation: 'गीता को एक कथा-में-कथा के रूप में रचा गया है: संजय पूरी युद्धभूमि की बातचीत अंधे राजा धृतराष्ट्र को दिव्य दृष्टि के माध्यम से सुनाते हैं, इसीलिए पूरा ग्रंथ उनके प्रश्न से शुरू होता है।',
                },
            }],
        },
        // Part 2: verses 4-6
        {
            part_number: 2,
            verse_start: 4,
            verse_end: 6,
            estimated_minutes: 3.0,
            verses: [
                {
                    verse_number: 4,
                    sanskrit: 'अत्र शूरा महेष्वासा भीमार्जुनसमा युधि। युयुधानो विराटश्च द्रुपदश्च महारथः।।',
                    transliteration: 'atra shura maheshvasa bhimarjuna-sama yudhi',
                    explanations: { en: 'Duryodhana continues listing the Pandava side\'s great warriors, comparing several of them in skill to Bhima and Arjuna themselves.', hi: 'दुर्योधन पांडव पक्ष के महान योद्धाओं के नाम गिनाना जारी रखता है, और उनमें से कई की तुलना भीम और अर्जुन जैसे कुशल योद्धाओं से करता है।' },
                },
                {
                    verse_number: 5,
                    sanskrit: 'धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्। पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुंगवः।।',
                    transliteration: 'dhrishtaketush chekitanah kashirajash cha viryavan',
                    explanations: { en: 'More Pandava-side warriors are named: Dhrishtaketu, Chekitana, the powerful King of Kashi, Purujit, Kuntibhoja, and Shaibya.', hi: 'और भी पांडव पक्ष के योद्धाओं के नाम लिए जाते हैं: धृष्टकेतु, चेकितान, बलशाली काशिराज, पुरुजित, कुन्तिभोज और शैब्य।' },
                },
                {
                    verse_number: 6,
                    sanskrit: 'युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्। सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः।।',
                    transliteration: 'yudhamanyush cha vikranta uttamaujash cha viryavan',
                    explanations: { en: 'The list continues: the bold Yudhamanyu, the mighty Uttamaujas, Abhimanyu (Subhadra\'s son), and Draupadi\'s five sons - all described as great chariot-warriors.', hi: 'सूची जारी रहती है: निडर युधामन्यु, बलवान उत्तमौजा, सुभद्रा का पुत्र अभिमन्यु, और द्रौपदी के पाँचों पुत्र - सभी को महान रथी बताया गया है।' },
                },
            ],
            questions: [{
                question_text: 'What is Duryodhana\'s purpose in listing out the Pandava warriors one by one?',
                options: [
                    { text: 'He is bragging about his own strength', is_correct: false },
                    { text: 'He is trying to reassure himself and rally his own commander by naming the threat clearly', is_correct: true },
                    { text: 'He is planning to switch sides', is_correct: false },
                ],
                explanation: 'Duryodhana\'s detailed listing of enemy warriors is a mix of anxiety and strategy - by naming the threat precisely to Drona, he is both sizing up the danger and trying to rally his own side\'s confidence.',
                difficulty: 'application',
                hi: {
                    question_text: 'दुर्योधन का पांडव योद्धाओं को एक-एक करके गिनाने का क्या उद्देश्य है?',
                    options: [
                        { text: 'वह अपनी ही ताकत का बखान कर रहा है', is_correct: false },
                        { text: 'वह खतरे को स्पष्ट रूप से नाम लेकर खुद को आश्वस्त करने और अपने सेनापति का हौसला बढ़ाने की कोशिश कर रहा है', is_correct: true },
                        { text: 'वह पाला बदलने की योजना बना रहा है', is_correct: false },
                    ],
                    explanation: 'दुर्योधन द्वारा शत्रु योद्धाओं की विस्तृत सूची बेचैनी और रणनीति का मिश्रण है - द्रोण को सटीक रूप से खतरे के नाम बताकर, वह खतरे को आंक भी रहा है और अपने पक्ष का आत्मविश्वास भी बढ़ाने की कोशिश कर रहा है।',
                },
            }],
        },
        // Part 3: verses 7-11
        {
            part_number: 3,
            verse_start: 7,
            verse_end: 11,
            estimated_minutes: 4.0,
            verses: [
                {
                    verse_number: 7,
                    sanskrit: 'अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।।',
                    transliteration: 'asmakam tu vishishta ye tan nibodha dvijottama',
                    explanations: { en: 'Duryodhana now turns to naming his own side\'s standout commanders, so Drona knows exactly who leads his army.', hi: 'दुर्योधन अब अपनी सेना के प्रमुख सेनापतियों के नाम बताने लगता है, ताकि द्रोण को ठीक-ठीक पता चले कि उसकी सेना का नेतृत्व कौन कर रहा है।' },
                },
                {
                    verse_number: 8,
                    sanskrit: 'भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः। अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च।।',
                    transliteration: 'bhavan bhishmash cha karnash cha kripash cha samitinjayah',
                    explanations: { en: 'He names Drona himself, Bhishma, Karna, Kripa, Ashwatthama, Vikarna, and Bhurishrava - the senior warriors he\'s counting on.', hi: 'वह द्रोण को स्वयं, भीष्म, कर्ण, कृप, अश्वत्थामा, विकर्ण और भूरिश्रवा के नाम गिनाता है - ये वे वरिष्ठ योद्धा हैं जिन पर उसे भरोसा है।' },
                },
                {
                    verse_number: 9,
                    sanskrit: 'अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः। नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।।',
                    transliteration: 'anye cha bahavah shura madarthe tyakta-jivitah',
                    explanations: { en: 'Beyond the named leaders, Duryodhana notes there are many more warriors ready to risk their lives for him, all skilled with different weapons.', hi: 'नामित सेनापतियों के अलावा, दुर्योधन बताता है कि उसके लिए अपनी जान दांव पर लगाने को तैयार और भी कई योद्धा हैं, जो अलग-अलग हथियारों में निपुण हैं।' },
                },
                {
                    verse_number: 10,
                    sanskrit: 'अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्। पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्।।',
                    transliteration: 'aparyaptam tad asmakam balam bhishmabhirakshitam',
                    explanations: { en: 'Duryodhana assesses the two armies: his own force, protected by Bhishma, he sees as vast beyond measure; theirs, protected by Bhima, he sees as merely sufficient - though scholars read this line in different ways.', hi: 'दुर्योधन दोनों सेनाओं का आकलन करता है: भीष्म द्वारा सुरक्षित अपनी सेना को वह असीम मानता है, जबकि भीम द्वारा सुरक्षित उनकी सेना को वह पर्याप्त मात्र मानता है - हालांकि विद्वान इस पंक्ति के अलग-अलग अर्थ निकालते हैं।' },
                },
                {
                    verse_number: 11,
                    sanskrit: 'अयनेषु च सर्वेषु यथाभागमवस्थिताः। भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि।।',
                    transliteration: 'ayaneshu cha sarveshu yatha-bhagam avasthitah',
                    explanations: { en: 'Duryodhana instructs all his commanders to hold their assigned positions and, above all, to protect Bhishma, their most senior warrior.', hi: 'दुर्योधन अपने सभी सेनापतियों को अपनी-अपनी जगह पर डटे रहने और सबसे बढ़कर, अपने सबसे वरिष्ठ योद्धा भीष्म की रक्षा करने का निर्देश देता है।' },
                },
            ],
            questions: [{
                question_text: 'Why does Duryodhana specifically ask everyone to protect Bhishma above all else?',
                options: [
                    { text: 'Because Bhishma is the eldest and most respected, and his safety is treated as central to the whole army\'s morale and strategy', is_correct: true },
                    { text: 'Because Bhishma secretly wants to switch sides', is_correct: false },
                    { text: 'Because Bhishma is the weakest fighter and needs protection', is_correct: false },
                ],
                explanation: 'Bhishma is the grand patriarch and most senior commander on the Kaurava side - his safety symbolizes the stability of the entire army, which is why Duryodhana singles him out for special protection.',
                difficulty: 'application',
                hi: {
                    question_text: 'दुर्योधन सबसे ज़्यादा भीष्म की रक्षा करने के लिए विशेष रूप से क्यों कहता है?',
                    options: [
                        { text: 'क्योंकि भीष्म सबसे वृद्ध और सम्मानित हैं, और उनकी सुरक्षा को पूरी सेना के मनोबल और रणनीति के केंद्र के रूप में देखा जाता है', is_correct: true },
                        { text: 'क्योंकि भीष्म गुप्त रूप से पाला बदलना चाहते हैं', is_correct: false },
                        { text: 'क्योंकि भीष्म सबसे कमज़ोर योद्धा हैं और उन्हें सुरक्षा चाहिए', is_correct: false },
                    ],
                    explanation: 'भीष्म कौरव पक्ष के सबसे वरिष्ठ कुलपुरुष और सेनापति हैं - उनकी सुरक्षा पूरी सेना की स्थिरता का प्रतीक है, इसीलिए दुर्योधन उन्हें विशेष सुरक्षा के लिए अलग से चुनता है।',
                },
            }],
        },
        // Part 4: verses 12-19
        {
            part_number: 4,
            verse_start: 12,
            verse_end: 19,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 12,
                    sanskrit: 'तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः। सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्।।',
                    transliteration: 'tasya sanjanayan harsham kuru-vriddhah pitamahah',
                    explanations: { en: 'To lift Duryodhana\'s spirits, the aged Bhishma roars like a lion and blows his conch shell loudly, signaling the start of the confrontation.', hi: 'दुर्योधन का उत्साह बढ़ाने के लिए, वृद्ध भीष्म सिंह की तरह गरजते हैं और जोर से अपना शंख बजाते हैं, जिससे युद्ध के आरंभ का संकेत मिलता है।' },
                },
                {
                    verse_number: 13,
                    sanskrit: 'ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः। सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्।।',
                    transliteration: 'tatah shankhash cha bheryash cha panavanaka-gomukhah',
                    explanations: { en: 'Conches, drums, and horns erupt all at once across the Kaurava army, creating a tremendous, chaotic wall of sound.', hi: 'इसके बाद कौरव सेना में एक साथ शंख, नगाड़े, ढोल और तुरही बज उठते हैं, जिससे एक भारी और कोलाहलपूर्ण ध्वनि गूंज उठती है।' },
                },
                {
                    verse_number: 14,
                    sanskrit: 'ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ। माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः।।',
                    transliteration: 'tatah shvetair hayair yukte mahati syandane sthitau',
                    explanations: { en: 'On the other side, standing in their grand chariot drawn by white horses, Krishna and Arjuna blow their own divine conches in response.', hi: 'दूसरी ओर, सफेद घोड़ों से जुते अपने भव्य रथ में खड़े कृष्ण और अर्जुन भी जवाब में अपने-अपने दिव्य शंख बजाते हैं।' },
                },
                {
                    verse_number: 15,
                    sanskrit: 'पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः। पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः।।',
                    transliteration: 'panchajanyam hrishikeshah devadattam dhananjayah',
                    explanations: { en: 'Krishna blows his conch Panchajanya, Arjuna blows his conch Devadatta, and the mighty Bhima blows his own great conch, Paundra.', hi: 'कृष्ण अपना शंख पांचजन्य बजाते हैं, अर्जुन अपना शंख देवदत्त बजाते हैं, और शक्तिशाली भीम अपना विशाल शंख पौण्ड्र बजाते हैं।' },
                },
                {
                    verse_number: 16,
                    sanskrit: 'अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः। नकुलः सहदेवश्च सुघोषमणिपुष्पकौ।।',
                    transliteration: 'ananta-vijayam raja kunti-putro yudhishthirah',
                    explanations: { en: 'King Yudhishthira blows his conch Anantavijaya, while his younger brothers Nakula and Sahadeva blow their own conches too.', hi: 'राजा युधिष्ठिर अपना शंख अनन्तविजय बजाते हैं, जबकि उनके छोटे भाई नकुल और सहदेव भी अपने-अपने शंख बजाते हैं।' },
                },
                {
                    verse_number: 17,
                    sanskrit: 'काश्यश्च परमेष्वासः शिखण्डी च महारथः। धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः।।',
                    transliteration: 'kashyash cha parameshvasah shikhandi cha maharathah',
                    explanations: { en: 'More Pandava-side warriors join in blowing their conches: the King of Kashi, Shikhandi, Dhrishtadyumna, Virata, and the unconquered Satyaki.', hi: 'पांडव पक्ष के और योद्धा भी शंख बजाने में शामिल होते हैं: काशिराज, शिखंडी, धृष्टद्युम्न, विराट और अपराजित सात्यकि।' },
                },
                {
                    verse_number: 18,
                    sanskrit: 'द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते। सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।।',
                    transliteration: 'drupado draupadeyash cha sarvashah prithivi-pate',
                    explanations: { en: 'Sanjaya tells Dhritarashtra that Drupada, Draupadi\'s sons, and the mighty Abhimanyu each blow their own separate conches too.', hi: 'संजय धृतराष्ट्र को बताते हैं कि द्रुपद, द्रौपदी के पुत्र, और शक्तिशाली अभिमन्यु भी अपने-अपने अलग शंख बजाते हैं।' },
                },
                {
                    verse_number: 19,
                    sanskrit: 'स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्। नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्।।',
                    transliteration: 'sa ghosho dhartarashtranam hridayani vyadarayat',
                    explanations: { en: 'This overwhelming combined sound shakes the hearts of Dhritarashtra\'s sons and echoes across the sky and earth.', hi: 'यह गगनभेदी सम्मिलित ध्वनि धृतराष्ट्र के पुत्रों के हृदय को कंपा देती है और आकाश तथा पृथ्वी में गूंज उठती है।' },
                },
            ],
            questions: [{
                question_text: 'What is the significance of both sides blowing conch shells before the battle?',
                options: [
                    { text: 'It was simply a musical tradition with no deeper meaning', is_correct: false },
                    { text: 'It formally announces both armies\' readiness and resolve to fight, turning tension into an irreversible moment', is_correct: true },
                    { text: 'It was a signal for the armies to retreat', is_correct: false },
                ],
                explanation: 'Conch-blowing was a ceremonial declaration of readiness for war - once both sides sound their conches, the confrontation becomes formally unavoidable, which sets up the emotional weight of what happens next.',
                difficulty: 'application',
                hi: {
                    question_text: 'युद्ध से पहले दोनों पक्षों द्वारा शंख बजाने का क्या महत्व है?',
                    options: [
                        { text: 'यह केवल एक संगीत परंपरा थी जिसका कोई गहरा अर्थ नहीं था', is_correct: false },
                        { text: 'यह दोनों सेनाओं की युद्ध के लिए तत्परता और संकल्प की औपचारिक घोषणा करता है, जिससे तनाव अब वापस न लिया जा सकने वाला क्षण बन जाता है', is_correct: true },
                        { text: 'यह सेनाओं के पीछे हटने का संकेत था', is_correct: false },
                    ],
                    explanation: 'शंख बजाना युद्ध के लिए तत्परता की एक औपचारिक घोषणा थी - एक बार जब दोनों पक्ष अपने शंख बजा देते हैं, तो टकराव औपचारिक रूप से अनिवार्य हो जाता है, जिससे आगे होने वाली घटनाओं का भावनात्मक महत्व स्थापित होता है।',
                },
            }],
        },
        // Part 5: verses 20-27
        {
            part_number: 5,
            verse_start: 20,
            verse_end: 27,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 20,
                    sanskrit: 'अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः। प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः।।',
                    transliteration: 'atha vyavasthitan drishtva dhartarashtran kapi-dhvajah',
                    explanations: { en: 'As the fighting is about to begin, Arjuna - whose chariot flag bears the emblem of a monkey - raises his bow, seeing the opposing army arrayed before him.', hi: 'जैसे ही युद्ध शुरू होने वाला है, अर्जुन - जिनके रथ की ध्वजा पर वानर का चिन्ह है - सामने खड़ी सेना को देखकर अपना धनुष उठाते हैं।' },
                },
                {
                    verse_number: 21,
                    sanskrit: 'हृषीकेशं तदा वाक्यमिदमाह महीपते। सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।।',
                    transliteration: 'hrishikesham tada vakyam idam aha mahi-pate',
                    explanations: { en: 'Arjuna asks Krishna to drive his chariot to a position right between the two armies, so he can get a clear look at everyone gathered.', hi: 'अर्जुन कृष्ण से कहते हैं कि रथ को दोनों सेनाओं के ठीक बीच में ले चलें, ताकि वे वहाँ इकट्ठे सभी लोगों को स्पष्ट रूप से देख सकें।' },
                },
                {
                    verse_number: 22,
                    sanskrit: 'यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्। कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे।।',
                    transliteration: 'yavad etan nirikshe\'ham yoddhu-kaman avasthitan',
                    explanations: { en: 'He wants to see exactly who is standing ready to fight, so he can know precisely who he will have to face in this upcoming battle.', hi: 'वह ठीक-ठीक देखना चाहते हैं कि युद्ध के लिए कौन-कौन तैयार खड़ा है, ताकि उन्हें पता चल सके कि इस आने वाले युद्ध में उन्हें किन-किन का सामना करना होगा।' },
                },
                {
                    verse_number: 23,
                    sanskrit: 'योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः। धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।',
                    transliteration: 'yotsyamanan avekshe\'ham ya ete\'tra samagatah',
                    explanations: { en: 'Arjuna wants to survey those who have gathered to fight in support of the ill-intentioned Duryodhana.', hi: 'अर्जुन दुष्ट बुद्धि वाले दुर्योधन का साथ देने के लिए युद्ध में जुटे लोगों को एक बार देख लेना चाहते हैं।' },
                },
                {
                    verse_number: 24,
                    sanskrit: 'एवमुक्तो हृषीकेशो गुडाकेशेन भारत। सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्।।',
                    transliteration: 'evam ukto hrishikesho gudakeshena bharata',
                    explanations: { en: 'At Arjuna\'s request, Krishna steers the magnificent chariot to a position right between the two assembled armies.', hi: 'अर्जुन के अनुरोध पर, कृष्ण उस भव्य रथ को दोनों इकट्ठी सेनाओं के ठीक बीच में ले जाते हैं।' },
                },
                {
                    verse_number: 25,
                    sanskrit: 'भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्। उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति।।',
                    transliteration: 'bhishma-drona-pramukhatah sarvesham cha mahi-kshitam',
                    explanations: { en: 'Standing before Bhishma, Drona, and all the assembled rulers, Krishna tells Arjuna to simply look at all the Kurus gathered there.', hi: 'भीष्म, द्रोण और सभी उपस्थित राजाओं के सामने खड़े होकर, कृष्ण अर्जुन से कहते हैं कि वहाँ जमा हुए सभी कुरुओं को बस देख लो।' },
                },
                {
                    verse_number: 26,
                    sanskrit: 'तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्। आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा।।',
                    transliteration: 'tatrapashyat sthitan parthah pitrin atha pitamahan',
                    explanations: { en: 'Looking across the battlefield, Arjuna sees his own uncles, grandfathers, teachers, cousins, sons, grandsons, and close friends standing on both sides.', hi: 'युद्धभूमि में नज़र दौड़ाते हुए, अर्जुन को दोनों ओर अपने ही चाचा, दादा, गुरु, चचेरे भाई, पुत्र, पौत्र और प्रिय मित्र खड़े दिखाई देते हैं।' },
                },
                {
                    verse_number: 27,
                    sanskrit: 'श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि। तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।।',
                    transliteration: 'shvashuran suhridash chaiva senayor ubhayor api',
                    explanations: { en: 'He also spots fathers-in-law and well-wishers positioned in both armies - and seeing all these relatives together starts to overwhelm him.', hi: 'उन्हें दोनों सेनाओं में ससुर और शुभचिंतक भी दिखाई देते हैं - और अपने इन सभी संबंधियों को एक साथ देखकर वे विचलित होने लगते हैं।' },
                },
            ],
            questions: [{
                question_text: 'Why does Arjuna specifically ask Krishna to place the chariot between the two armies rather than behind his own side?',
                options: [
                    { text: 'He wanted a better strategic vantage point to plan an attack', is_correct: false },
                    { text: 'He wanted to personally see who he would be fighting - which is what triggers his emotional crisis once he recognizes his own family', is_correct: true },
                    { text: 'It was a religious ritual required before every battle', is_correct: false },
                ],
                explanation: 'Arjuna\'s request seems tactical at first, but it\'s actually what sets up the entire crisis of the chapter - by seeing his own relatives, teachers, and friends arrayed for battle, the war stops being abstract and becomes deeply personal.',
                difficulty: 'application',
                hi: {
                    question_text: 'अर्जुन कृष्ण से रथ को अपनी सेना के पीछे नहीं, बल्कि दोनों सेनाओं के बीच रखने के लिए विशेष रूप से क्यों कहते हैं?',
                    options: [
                        { text: 'वे हमले की योजना बनाने के लिए एक बेहतर रणनीतिक स्थान चाहते थे', is_correct: false },
                        { text: 'वे स्वयं देखना चाहते थे कि वे किससे लड़ेंगे - और यही वह क्षण है जब अपने ही परिवार को पहचानकर उनका भावनात्मक संकट शुरू होता है', is_correct: true },
                        { text: 'यह हर युद्ध से पहले किया जाने वाला एक धार्मिक अनुष्ठान था', is_correct: false },
                    ],
                    explanation: 'अर्जुन का अनुरोध शुरू में रणनीतिक लगता है, लेकिन वास्तव में यही पूरे अध्याय के संकट की नींव रखता है - अपने ही संबंधियों, गुरुओं और मित्रों को युद्ध के लिए खड़ा देखकर, युद्ध अब एक अमूर्त विचार नहीं रह जाता, बल्कि गहराई से व्यक्तिगत बन जाता है।',
                },
            }],
        },
        // Part 6: verses 28-31
        {
            part_number: 6,
            verse_start: 28,
            verse_end: 31,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 28,
                    sanskrit: 'कृपया परयाविष्टो विषीदन्निदमब्रवीत्। दृष्ट्वेमान्स्वजनान्कृष्ण युयुत्सून्समवस्थितान्।।',
                    transliteration: 'kripaya paraya\'vishto vishidann idam abravit',
                    explanations: { en: 'Overcome with deep compassion and sorrow, Arjuna begins to speak, telling Krishna what he feels upon seeing all his kinsmen ready for battle.', hi: 'गहरी करुणा और दुख से भरकर, अर्जुन बोलना शुरू करते हैं और कृष्ण को बताते हैं कि अपने सभी स्वजनों को युद्ध के लिए तैयार देखकर उन्हें कैसा महसूस हो रहा है।' },
                },
                {
                    verse_number: 29,
                    sanskrit: 'सीदन्ति मम गात्राणि मुखं च परिशुष्यति। वेपथुश्च शरीरे मे रोमहर्षश्च जायते।।',
                    transliteration: 'sidanti mama gatrani mukham cha parishushyati',
                    explanations: { en: 'Arjuna describes physical symptoms of distress: his limbs feel weak, his mouth goes dry, his body trembles, and his hair stands on end.', hi: 'अर्जुन अपनी व्याकुलता के शारीरिक लक्षण बताते हैं: उनके अंग कमजोर पड़ रहे हैं, मुँह सूख रहा है, शरीर काँप रहा है और रोंगटे खड़े हो रहे हैं।' },
                },
                {
                    verse_number: 30,
                    sanskrit: 'गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते। न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः।।',
                    transliteration: 'gandivam sramsate hastat tvak chaiva paridahyate',
                    explanations: { en: 'His famous bow, Gandiva, slips from his hand, his skin feels like it\'s burning, and he feels unable to stand steady as his mind spins.', hi: 'उनका प्रसिद्ध धनुष गांडीव हाथ से फिसल रहा है, त्वचा जलती हुई सी महसूस होती है, और वे स्थिर खड़े नहीं रह पा रहे क्योंकि उनका मन घूम रहा है।' },
                },
                {
                    verse_number: 31,
                    sanskrit: 'निमित्तानि च पश्यामि विपरीतानि केशव। न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे।।',
                    transliteration: 'nimittani cha pashyami viparitani keshava',
                    explanations: { en: 'Arjuna tells Krishna he is seeing bad omens all around, and he can\'t see any good coming from killing his own relatives in this war.', hi: 'अर्जुन कृष्ण से कहते हैं कि उन्हें चारों ओर अशुभ संकेत दिख रहे हैं, और अपने ही स्वजनों को मारकर इस युद्ध में उन्हें कोई भलाई होती नहीं दिखती।' },
                },
            ],
            questions: [{
                question_text: 'What is the significance of Arjuna\'s physical symptoms in this passage?',
                options: [
                    { text: 'They suggest he is simply physically exhausted from the journey', is_correct: false },
                    { text: 'They show that his moral and emotional crisis is intense enough to have real physical effects - this isn\'t just hesitation, it\'s genuine anguish', is_correct: true },
                    { text: 'They are a literary device with no real meaning', is_correct: false },
                ],
                explanation: 'The vivid physical description - trembling, dry mouth, weakening body - signals that Arjuna\'s conflict is not simple battlefield nerves, but a profound moral crisis that the rest of the Gita will need to resolve.',
                difficulty: 'application',
                hi: {
                    question_text: 'इस अंश में अर्जुन के शारीरिक लक्षणों का क्या महत्व है?',
                    options: [
                        { text: 'वे बताते हैं कि वे यात्रा से बस शारीरिक रूप से थके हुए हैं', is_correct: false },
                        { text: 'वे दिखाते हैं कि उनका नैतिक और भावनात्मक संकट इतना गहरा है कि इसका वास्तविक शारीरिक असर पड़ रहा है - यह केवल झिझक नहीं, बल्कि सच्ची पीड़ा है', is_correct: true },
                        { text: 'वे केवल एक साहित्यिक युक्ति हैं जिनका कोई वास्तविक अर्थ नहीं है', is_correct: false },
                    ],
                    explanation: 'यह जीवंत शारीरिक वर्णन - कंपन, सूखा मुँह, कमज़ोर होता शरीर - बताता है कि अर्जुन का संघर्ष सामान्य युद्धभूमि की घबराहट नहीं, बल्कि एक गहन नैतिक संकट है, जिसे गीता का शेष भाग सुलझाएगा।',
                },
            }],
        },
        // Part 7: verses 32-35
        {
            part_number: 7,
            verse_start: 32,
            verse_end: 35,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 32,
                    sanskrit: 'न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च। किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा।।',
                    transliteration: 'na kankshe vijayam krishna na cha rajyam sukhani cha',
                    explanations: { en: 'Arjuna tells Krishna he no longer wants victory, a kingdom, or personal pleasures - and questions what use any of that is if it comes at this cost.', hi: 'अर्जुन कृष्ण से कहते हैं कि अब उन्हें न विजय चाहिए, न राज्य, न सुख-भोग - और सवाल उठाते हैं कि इतनी बड़ी कीमत चुकाकर इन सबका क्या फायदा।' },
                },
                {
                    verse_number: 33,
                    sanskrit: 'येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च। त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।।',
                    transliteration: 'yesham arthe kankshitam no rajyam bhogah sukhani cha',
                    explanations: { en: 'He points out that the very people they would want a kingdom and comforts for - their own relatives and elders - are the ones standing here risking their lives.', hi: 'वे बताते हैं कि जिन लोगों के लिए वे राज्य और सुख-सुविधाएँ चाहते, वही - उनके अपने संबंधी और बड़े-बुजुर्ग - यहाँ अपनी जान और धन दांव पर लगाकर खड़े हैं।' },
                },
                {
                    verse_number: 34,
                    sanskrit: 'आचार्याः पितरः पुत्रास्तथैव च पितामहाः। मातुलाः श्वशुराः पौत्राः स्याला: संबन्धिनस्तथा।।',
                    transliteration: 'acharyah pitarah putras tathaiva cha pitamahah',
                    explanations: { en: 'Arjuna lists again exactly who stands before him: teachers, elders, sons, grandfathers, uncles, in-laws, grandsons, and relatives.', hi: 'अर्जुन फिर से गिनाते हैं कि उनके सामने ठीक कौन-कौन खड़ा है: गुरु, पिता-तुल्य बड़े, पुत्र, दादा, चाचा, ससुराल वाले, पौत्र और अन्य संबंधी।' },
                },
                {
                    verse_number: 35,
                    sanskrit: 'एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन। अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते।।',
                    transliteration: 'etan na hantum ichchhami ghnato\'pi madhusudana',
                    explanations: { en: 'He tells Krishna he doesn\'t want to kill these people even if they attack him first - not even for rule over all three worlds, let alone this one earthly kingdom.', hi: 'वे कृष्ण से कहते हैं कि अगर ये लोग पहले उन पर वार करें तब भी वे इन्हें मारना नहीं चाहते - तीनों लोकों के राज्य के लिए भी नहीं, फिर इस धरती के एक राज्य की तो बात ही क्या।' },
                },
            ],
            questions: [{
                question_text: 'What is the core of Arjuna\'s argument in this passage?',
                options: [
                    { text: 'He is afraid of losing the battle', is_correct: false },
                    { text: 'He questions whether any victory, wealth, or power is worth it if it means destroying the very people those things were meant to benefit', is_correct: true },
                    { text: 'He wants to negotiate a truce with Duryodhana', is_correct: false },
                ],
                explanation: 'Arjuna isn\'t expressing fear of losing - he\'s raising a values question: what is the point of gaining a kingdom if the people you\'d share it with are the ones you must kill to get it?',
                difficulty: 'application',
                hi: {
                    question_text: 'इस अंश में अर्जुन के तर्क का मूल क्या है?',
                    options: [
                        { text: 'उन्हें युद्ध हारने का डर है', is_correct: false },
                        { text: 'वे सवाल उठाते हैं कि क्या कोई भी विजय, धन या सत्ता तब सार्थक है जब उसके लिए उन्हीं लोगों को नष्ट करना पड़े जिनके लिए वह सब हासिल किया जा रहा है', is_correct: true },
                        { text: 'वे दुर्योधन के साथ संधि करना चाहते हैं', is_correct: false },
                    ],
                    explanation: 'अर्जुन हारने का डर व्यक्त नहीं कर रहे - वे एक मूल्यों से जुड़ा प्रश्न उठा रहे हैं: राज्य पाने का क्या फायदा, अगर जिनके साथ उसे बाँटना है, उन्हीं को पाने के लिए मारना पड़े?',
                },
            }],
        },
        // Part 8: verses 36-39
        {
            part_number: 8,
            verse_start: 36,
            verse_end: 39,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 36,
                    sanskrit: 'निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन। पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।',
                    transliteration: 'nihatya dhartarashtran nah ka pritih syaj janardana',
                    explanations: { en: 'Arjuna asks what joy could possibly come from killing Dhritarashtra\'s sons - he believes only sin would result from killing them, even though they may be the aggressors.', hi: 'अर्जुन पूछते हैं कि धृतराष्ट्र के पुत्रों को मारकर उन्हें क्या खुशी मिलेगी - उनका मानना है कि इन्हें मारने से केवल पाप ही लगेगा, भले ही आक्रामक वे ही हों।' },
                },
                {
                    verse_number: 37,
                    sanskrit: 'तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्। स्वजनं हि कथं हत्वा सुखिनः स्याम माधव।।',
                    transliteration: 'tasman narha vayam hantum dhartarashtran sa-bandhavan',
                    explanations: { en: 'He concludes that they have no right to kill their own relatives, and asks how they could ever be happy after killing their own people.', hi: 'वे निष्कर्ष निकालते हैं कि उन्हें अपने ही संबंधियों को मारने का कोई अधिकार नहीं है, और पूछते हैं कि अपने ही लोगों को मारकर वे कभी सुखी कैसे रह पाएंगे।' },
                },
                {
                    verse_number: 38,
                    sanskrit: 'यद्यप्येते न पश्यन्ति लोभोपहतचेतसः। कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्।।',
                    transliteration: 'yady apy ete na pashyanti lobhopahata-chetasah',
                    explanations: { en: 'Arjuna notes that even if the other side, blinded by greed, doesn\'t see the wrongness of destroying a family or betraying friends...', hi: 'अर्जुन कहते हैं कि भले ही दूसरा पक्ष, लोभ में अंधा होकर, परिवार के विनाश और मित्रों से विश्वासघात की बुराई न देख पा रहा हो...' },
                },
                {
                    verse_number: 39,
                    sanskrit: 'कथं न ज्ञेयमस्माभिः पापाद्स्मान्निवर्तितुम्। कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन।।',
                    transliteration: 'katham na jneyam asmabhih papad asman nivartitum',
                    explanations: { en: '...he asks why they, who clearly do see this wrongness, shouldn\'t know better and turn away from committing this sin themselves.', hi: '...वे पूछते हैं कि जो लोग यह बुराई स्पष्ट देख सकते हैं, वे इस पाप से पीछे क्यों नहीं हट जाते, यह सब जानते हुए भी।' },
                },
            ],
            questions: [{
                question_text: 'What distinction is Arjuna drawing between his side and Duryodhana\'s side in this passage?',
                options: [
                    { text: 'He claims his side is stronger in battle', is_correct: false },
                    { text: 'He argues that even if the other side is blinded by greed and doesn\'t see the wrong in this war, his side knows better and should act on that awareness', is_correct: true },
                    { text: 'He claims the other side started the conflict unfairly', is_correct: false },
                ],
                explanation: 'Arjuna is making a moral argument, not a strategic one - he suggests that knowing better creates a responsibility to act better, which is part of why he feels so torn about proceeding with the war.',
                difficulty: 'application',
                hi: {
                    question_text: 'इस अंश में अर्जुन अपने पक्ष और दुर्योधन के पक्ष के बीच क्या भेद बता रहे हैं?',
                    options: [
                        { text: 'वे दावा करते हैं कि उनका पक्ष युद्ध में ज़्यादा मज़बूत है', is_correct: false },
                        { text: 'वे तर्क देते हैं कि भले ही दूसरा पक्ष लोभ में अंधा होकर इस युद्ध की बुराई नहीं देख पा रहा, उनका पक्ष बेहतर जानता है और उसे उसी समझ के अनुसार काम करना चाहिए', is_correct: true },
                        { text: 'वे दावा करते हैं कि दूसरे पक्ष ने अनुचित तरीके से संघर्ष शुरू किया', is_correct: false },
                    ],
                    explanation: 'अर्जुन एक नैतिक तर्क दे रहे हैं, रणनीतिक नहीं - वे सुझाव देते हैं कि बेहतर जानना बेहतर कार्य करने की ज़िम्मेदारी पैदा करता है, और यही एक कारण है कि युद्ध जारी रखने को लेकर वे इतने विचलित महसूस करते हैं।',
                },
            }],
        },
        // Part 9: verses 40-44
        {
            part_number: 9,
            verse_start: 40,
            verse_end: 44,
            estimated_minutes: 4.0,
            verses: [
                {
                    verse_number: 40,
                    sanskrit: 'कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः। धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत।।',
                    transliteration: 'kula-kshaye pranashyanti kula-dharmah sanatanah',
                    explanations: { en: 'Arjuna reasons that when a family is destroyed, its long-standing traditions and values collapse with it, opening the door to disorder.', hi: 'अर्जुन तर्क देते हैं कि जब कोई परिवार नष्ट होता है, तो उसकी सदियों पुरानी परंपराएं और मूल्य भी उसके साथ ही मिट जाते हैं, जिससे अराजकता का रास्ता खुल जाता है।' },
                },
                {
                    verse_number: 41,
                    sanskrit: 'अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः। स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः।।',
                    transliteration: 'adharmabhibhavat krishna pradushyanti kula-striyah',
                    explanations: { en: 'He continues that when values break down, the social fabric of the family suffers too, leading to broader social confusion and instability - reflecting the social concerns of his time.', hi: 'वे आगे कहते हैं कि जब मूल्य टूटते हैं, तो परिवार की सामाजिक बुनावट भी बिखर जाती है, जिससे व्यापक सामाजिक भ्रम और अस्थिरता पैदा होती है - यह उनके समय की सामाजिक चिंताओं को दर्शाता है।' },
                },
                {
                    verse_number: 42,
                    sanskrit: 'सङ्करो नरकायैव कुलघ्नानां कुलस्य च। पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः।।',
                    transliteration: 'sankaro narakayaiva kula-ghnanam kulasya cha',
                    explanations: { en: 'Arjuna says this social breakdown brings ruin to both the family-destroyers and the family itself, and even their ancestors suffer when traditional rites are no longer performed.', hi: 'अर्जुन कहते हैं कि यह सामाजिक टूटन परिवार को नष्ट करने वालों और परिवार दोनों का सर्वनाश करती है, और जब पारंपरिक रीति-रिवाज निभाए नहीं जाते तो पूर्वज भी कष्ट पाते हैं।' },
                },
                {
                    verse_number: 43,
                    sanskrit: 'दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः। उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः।।',
                    transliteration: 'doshair etaih kula-ghnanam varna-sankara-karakaih',
                    explanations: { en: 'He argues that these consequences from destroying a family end up erasing long-held communal and family traditions entirely.', hi: 'वे तर्क देते हैं कि परिवार के विनाश के ये परिणाम अंततः सदियों पुरानी सामाजिक और पारिवारिक परंपराओं को पूरी तरह मिटा देते हैं।' },
                },
                {
                    verse_number: 44,
                    sanskrit: 'उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन। नरके नियतं वासो भवतीत्यनुशुश्रुम।।',
                    transliteration: 'utsanna-kula-dharmanam manushyanam janardana',
                    explanations: { en: 'Arjuna says he has always heard that people whose family traditions collapse are destined to suffer greatly as a result.', hi: 'अर्जुन कहते हैं कि उन्होंने हमेशा सुना है कि जिन लोगों की पारिवारिक परंपराएं टूट जाती हैं, उन्हें इसके परिणामस्वरूप बहुत कष्ट भोगना पड़ता है।' },
                },
            ],
            questions: [{
                question_text: 'What kind of argument is Arjuna making across these verses (40-44)?',
                options: [
                    { text: 'A purely military argument about troop numbers', is_correct: false },
                    { text: 'A social and ethical argument - that destroying a family destroys the traditions and values that hold a whole community together', is_correct: true },
                    { text: 'A financial argument about the cost of war', is_correct: false },
                ],
                explanation: 'Arjuna broadens his objection beyond his personal grief - he\'s now arguing that the war would damage the social and moral fabric that generations of family tradition have built, a concern rooted in his own time and worldview.',
                difficulty: 'application',
                hi: {
                    question_text: 'इन श्लोकों (40-44) में अर्जुन किस तरह का तर्क दे रहे हैं?',
                    options: [
                        { text: 'सैनिकों की संख्या के बारे में विशुद्ध सैन्य तर्क', is_correct: false },
                        { text: 'एक सामाजिक और नैतिक तर्क - कि परिवार का नाश उन परंपराओं और मूल्यों को नष्ट कर देता है जो पूरे समुदाय को जोड़े रखते हैं', is_correct: true },
                        { text: 'युद्ध की लागत के बारे में एक आर्थिक तर्क', is_correct: false },
                    ],
                    explanation: 'अर्जुन अपनी व्यक्तिगत पीड़ा से आगे बढ़कर अपनी आपत्ति को व्यापक बनाते हैं - अब वे तर्क दे रहे हैं कि यह युद्ध उस सामाजिक और नैतिक ताने-बाने को नुकसान पहुँचाएगा जिसे पीढ़ियों की पारिवारिक परंपरा ने बनाया है, यह चिंता उनके अपने समय और दृष्टिकोण में निहित है।',
                },
            }],
        },
        // Part 10: verses 45-47 (final part of chapter 1)
        {
            part_number: 10,
            verse_start: 45,
            verse_end: 47,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 45,
                    sanskrit: 'अहो बत महत्पापं कर्तुं व्यवसिता वयम्। यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः।।',
                    transliteration: 'aho bata mahat papam kartum vyavasita vayam',
                    explanations: { en: 'Arjuna laments that they are about to commit a terrible wrong, ready to kill their own relatives out of a desire for kingdom and comfort.', hi: 'अर्जुन विलाप करते हैं कि वे एक भयंकर पाप करने जा रहे हैं, राज्य और सुख-सुविधा की लालसा में अपने ही संबंधियों को मारने को तैयार होकर।' },
                },
                {
                    verse_number: 46,
                    sanskrit: 'यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः। धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्।।',
                    transliteration: 'yadi mam apratikaram ashastram shastra-panayah',
                    explanations: { en: 'He says he would rather be killed unarmed and without resistance by the armed sons of Dhritarashtra than go through with this fight.', hi: 'वे कहते हैं कि वे इस युद्ध से गुजरने के बजाय निहत्थे और बिना प्रतिरोध के धृतराष्ट्र के हथियारबंद पुत्रों के हाथों मारे जाना ज़्यादा बेहतर समझेंगे।' },
                },
                {
                    verse_number: 47,
                    sanskrit: 'सञ्जय उवाच। एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।',
                    transliteration: 'sanjaya uvacha: evam uktvarjunah sankhye rathopastha upavishat',
                    explanations: { en: 'Sanjaya reports that after saying all this, Arjuna - his mind overwhelmed with grief - drops his bow and arrows and sinks down onto his chariot seat. This is where Chapter 1 ends, setting up Krishna\'s teaching in Chapter 2.', hi: 'संजय बताते हैं कि यह सब कहने के बाद, अर्जुन - जिनका मन शोक से अभिभूत है - अपना धनुष-बाण त्याग कर रथ की सीट पर बैठ जाते हैं। यहीं अध्याय 1 समाप्त होता है, और यहीं से अध्याय 2 में कृष्ण की शिक्षा की शुरुआत होती है।' },
                },
            ],
            questions: [{
                question_text: 'How does Chapter 1 end, and why does this matter for the rest of the Gita?',
                options: [
                    { text: 'Arjuna wins a small skirmish and gains confidence', is_correct: false },
                    { text: 'Arjuna collapses into despair and refuses to fight, setting up the need for Krishna\'s teaching that follows in Chapter 2', is_correct: true },
                    { text: 'The chapter ends with the war already over', is_correct: false },
                ],
                explanation: 'Chapter 1 ends at Arjuna\'s lowest point - paralyzed by grief and moral confusion. This crisis is exactly what creates the need for the dialogue that unfolds through the rest of the Gita, where Krishna responds to each of Arjuna\'s doubts.',
                difficulty: 'application',
                hi: {
                    question_text: 'अध्याय 1 का अंत कैसे होता है, और यह गीता के शेष भाग के लिए क्यों महत्वपूर्ण है?',
                    options: [
                        { text: 'अर्जुन एक छोटी सी झड़प जीतकर आत्मविश्वास हासिल करते हैं', is_correct: false },
                        { text: 'अर्जुन निराशा में डूब जाते हैं और लड़ने से इनकार कर देते हैं, जिससे अध्याय 2 में आने वाली कृष्ण की शिक्षा की आवश्यकता पैदा होती है', is_correct: true },
                        { text: 'अध्याय का अंत युद्ध पहले ही समाप्त हो जाने के साथ होता है', is_correct: false },
                    ],
                    explanation: 'अध्याय 1 अर्जुन के सबसे निराशाजनक क्षण पर समाप्त होता है - शोक और नैतिक उलझन से स्तब्ध। यही संकट गीता के शेष भाग में होने वाले संवाद की आवश्यकता पैदा करता है, जहाँ कृष्ण अर्जुन की हर शंका का उत्तर देते हैं।',
                },
            }],
        },
    ],
};

module.exports = chapter1;
