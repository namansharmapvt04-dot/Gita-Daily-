// Complete Chapter 3 (Karma Yoga - "The Yoga of Action"), all 43 verses,
// split into 9 Parts sized for a few minutes of reading each.
// Sanskrit/transliteration verified against enjoylearningsanskrit.com chapter-3 text.
// Explanations are original simple paraphrases.

const chapter3 = {
    number: 3,
    title: 'The Yoga of Action',
    total_verses: 43,
    parts: [
        // Part 1: verses 1-4 (Arjuna's confusion: knowledge vs action)
        {
            part_number: 1,
            verse_start: 1,
            verse_end: 4,
            estimated_minutes: 4.0,
            verses: [
                {
                    verse_number: 1,
                    sanskrit: 'अर्जुन उवाच। ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन। तत्किं कर्मणि घोरे मां नियोजयसि केशव।।',
                    transliteration: 'arjuna uvacha: jyayasi chet karmanas te mata buddhir janardana',
                    explanations: { en: 'Arjuna asks Krishna: if you consider wisdom superior to action, why are you pushing me into this terrible battle? He is confused by what seems like a contradiction.' },
                },
                {
                    verse_number: 2,
                    sanskrit: 'व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे। तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्।।',
                    transliteration: 'vyamishreneiva vakyena buddhim mohayasiva me',
                    explanations: { en: 'Arjuna says Krishna\'s mixed message is confusing his mind. He asks for one clear answer that will actually help him.' },
                },
                {
                    verse_number: 3,
                    sanskrit: 'श्रीभगवानुवाच। लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ। ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम्।।',
                    transliteration: 'shri bhagavan uvacha: loke\'smin dvi-vidha nishtha pura prokta mayanagha',
                    explanations: { en: 'Krishna clarifies: there are two paths he taught from the beginning - the path of knowledge for those inclined toward contemplation, and the path of action for those inclined toward doing.' },
                },
                {
                    verse_number: 4,
                    sanskrit: 'न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते। न च संन्यसनादेव सिद्धिं समधिगच्छति।।',
                    transliteration: 'na karmanam anarambhan naishkarmyam purusho\'shnute',
                    explanations: { en: 'Krishna says a person doesn\'t achieve freedom from the effects of action simply by not starting actions, nor does merely renouncing action lead to perfection.' },
                },
            ],
            questions: [{
                question_text: 'What is the core confusion Arjuna expresses at the start of Chapter 3?',
                options: [
                    { text: 'He doesn\'t understand the rules of the battle', is_correct: false },
                    { text: 'Krishna praised wisdom in Chapter 2 but is now telling him to act - Arjuna wants to know which path actually leads to the best outcome', is_correct: true },
                    { text: 'He wants to choose a different chariot driver', is_correct: false },
                ],
                explanation: 'Arjuna picked up a real tension in Krishna\'s teaching - Chapter 2 spoke highly of steady wisdom, yet Krishna keeps urging action. Chapter 3 is Krishna\'s direct answer to this apparent contradiction.',
                difficulty: 'application',
            }],
        },
        // Part 2: verses 5-9 (Why action is unavoidable; action as yajna)
        {
            part_number: 2,
            verse_start: 5,
            verse_end: 9,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 5,
                    sanskrit: 'न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्। कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः।।',
                    transliteration: 'na hi kashchitkshanam api jatu tishthaty akarma-krit',
                    explanations: { en: 'Krishna explains that no one can remain without acting even for a moment - nature\'s qualities (the gunas) compel everyone to act, whether they like it or not.' },
                },
                {
                    verse_number: 6,
                    sanskrit: 'कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्। इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते।।',
                    transliteration: 'karmendriyani samyamya ya aste manasa smaran',
                    explanations: { en: 'He says someone who outwardly restrains their actions but keeps mentally dwelling on sense pleasures is deceiving themselves - that\'s false renunciation.' },
                },
                {
                    verse_number: 7,
                    sanskrit: 'यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन। कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते।।',
                    transliteration: 'yas tv indriyani manasa niyamyarabhate\'rjuna',
                    explanations: { en: 'But the person who controls the senses through the mind and then engages in action without attachment - that person is far superior.' },
                },
                {
                    verse_number: 8,
                    sanskrit: 'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।',
                    transliteration: 'niyatam kuru karma tvam karma jyayo hy akarmanah',
                    explanations: { en: 'Krishna tells Arjuna to do his prescribed duty - action is better than inaction. Even just maintaining the body requires action; you cannot survive by doing nothing.' },
                },
                {
                    verse_number: 9,
                    sanskrit: 'यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः। तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर।।',
                    transliteration: 'yajnarthat karmano\'nyatra loko\'yam karma-bandhanah',
                    explanations: { en: 'Action performed as an offering (yajna) doesn\'t bind a person; it\'s only action done for selfish ends that creates bondage. So Arjuna should act as an offering, free from attachment.' },
                },
            ],
            questions: [{
                question_text: 'What does Krishna mean when he distinguishes between outer renunciation and inner renunciation in verse 6?',
                options: [
                    { text: 'He is saying that monks who leave society are always hypocrites', is_correct: false },
                    { text: 'True renunciation is about letting go of mental attachment, not just stopping physical action - someone who sits still but keeps craving in their mind hasn\'t actually renounced anything', is_correct: true },
                    { text: 'He means Arjuna should keep fighting no matter what he feels inside', is_correct: false },
                ],
                explanation: 'Krishna is pointing at something subtle - the real work is internal. Stopping action while the mind still churns with desire is just performance, not genuine practice.',
                difficulty: 'application',
            }],
        },
        // Part 3: verses 10-13 (The cosmic cycle of yajna)
        {
            part_number: 3,
            verse_start: 10,
            verse_end: 13,
            estimated_minutes: 4.0,
            verses: [
                {
                    verse_number: 10,
                    sanskrit: 'सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः। अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्।।',
                    transliteration: 'saha-yajnah prajah srishtva purovaca prajapatih',
                    explanations: { en: 'Krishna says that at creation, the Lord created beings along with the spirit of yajna (sacred offering), saying: through this spirit of giving and offering, may you flourish - let this be the fulfiller of your needs.' },
                },
                {
                    verse_number: 11,
                    sanskrit: 'देवान्भावयतानेन ते देवा भावयन्तु वः। परस्परं भावयन्तः श्रेयः परमवाप्स्यथ।।',
                    transliteration: 'devan bhavayatanena te deva bhavayantu vah',
                    explanations: { en: 'By nourishing the higher forces of nature through your offerings, they in turn will nourish you - by sustaining each other in this way, you will attain the highest good.' },
                },
                {
                    verse_number: 12,
                    sanskrit: 'इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः। तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः।।',
                    transliteration: 'ishtaan bhogan hi vo deva dasyante yajna-bhavitah',
                    explanations: { en: 'The higher forces, nourished by your offerings, will give you what you need to live well. But someone who enjoys these gifts without giving back in return is essentially a thief.' },
                },
                {
                    verse_number: 13,
                    sanskrit: 'यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः। भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्।।',
                    transliteration: 'yajna-shishtashinah santo muchyante sarva-kilbishaih',
                    explanations: { en: 'The good, who eat what remains after an offering, are freed from all wrongdoing. But those who cook and eat only for themselves consume nothing but their own accumulating wrongdoing.' },
                },
            ],
            questions: [{
                question_text: 'What is the underlying principle Krishna is teaching through the concept of yajna in this passage?',
                options: [
                    { text: 'That performing fire rituals is the only valid form of worship', is_correct: false },
                    { text: 'That life operates as an interconnected cycle of giving and receiving - acting selfishly breaks this cycle, while contributing to it freely sustains everything including oneself', is_correct: true },
                    { text: 'That only Brahmins can participate in this cycle', is_correct: false },
                ],
                explanation: 'The concept of yajna here goes beyond ritual - it\'s a model of how all life is sustained through reciprocal giving. Selfishness breaks the cycle; selfless contribution sustains it.',
                difficulty: 'application',
            }],
        },
        // Part 4: verses 14-17 (The cosmic chain; the self-realized person)
        {
            part_number: 4,
            verse_start: 14,
            verse_end: 17,
            estimated_minutes: 4.0,
            verses: [
                {
                    verse_number: 14,
                    sanskrit: 'अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः। यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः।।',
                    transliteration: 'annad bhavanti bhutani parjanyad anna-sambhavah',
                    explanations: { en: 'Beings live on food; food comes from rain; rain comes from yajna (selfless offering); and yajna arises from action - showing a complete chain of interdependence.' },
                },
                {
                    verse_number: 15,
                    sanskrit: 'कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्। तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्।।',
                    transliteration: 'karma brahmodbhavam viddhi brahma aksharasamudbhavam',
                    explanations: { en: 'Action arises from the Vedic wisdom; that wisdom arises from the eternal (Brahman). Thus the all-pervading eternal is always present in yajna - selfless offering is grounded in the deepest reality.' },
                },
                {
                    verse_number: 16,
                    sanskrit: 'एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः। अघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।',
                    transliteration: 'evam pravartitam chakram nanuvartayatiha yah',
                    explanations: { en: 'Krishna says whoever doesn\'t keep this wheel of interdependence turning - living only for sensory pleasure - lives in vain and causes harm.' },
                },
                {
                    verse_number: 17,
                    sanskrit: 'यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः। आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते।।',
                    transliteration: 'yas tv atma-ratir eva syad atma-triptash cha manavah',
                    explanations: { en: 'However, the person who is content in the self, satisfied by the self, and fulfilled within the self alone - for that person, there is no binding duty that must be fulfilled.' },
                },
            ],
            questions: [{
                question_text: 'Why does verse 17 seem to contradict the earlier message that everyone must act?',
                options: [
                    { text: 'It is actually a mistake in the text', is_correct: false },
                    { text: 'It describes a different category of person - someone who has genuinely realized the self no longer acts out of obligation or desire, but may still act freely from a place of fullness', is_correct: true },
                    { text: 'It means lazy people are spiritually advanced', is_correct: false },
                ],
                explanation: 'This verse isn\'t a contradiction - it describes the rare person who has transcended the need to act for personal gain or fulfillment. They may still act, but there\'s no compulsion driving them. Most people aren\'t there yet, which is why action-as-offering is the path Krishna recommends.',
                difficulty: 'application',
            }],
        },
        // Part 5: verses 18-22 (King Janaka; Krishna's own example)
        {
            part_number: 5,
            verse_start: 18,
            verse_end: 22,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 18,
                    sanskrit: 'नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन। न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः।।',
                    transliteration: 'naiva tasya kritenartho nakriteneha kashchana',
                    explanations: { en: 'Such a self-realized person has nothing to gain by acting and nothing to lose by not acting - they have no dependency on any being for anything.' },
                },
                {
                    verse_number: 19,
                    sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।',
                    transliteration: 'tasmad asaktah satatam karyam karma samachara',
                    explanations: { en: 'Therefore, Arjuna should always do what needs to be done, but without attachment - because it is by acting without attachment that a person reaches the highest.' },
                },
                {
                    verse_number: 20,
                    sanskrit: 'कर्मणैव हि संसिद्धिमास्थिता जनकादयः। लोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि।।',
                    transliteration: 'karmanaiva hi samsiddhim asthita janakadayah',
                    explanations: { en: 'King Janaka and other great souls attained perfection through action itself. Even from the perspective of keeping the world together, Arjuna ought to act.' },
                },
                {
                    verse_number: 21,
                    sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।',
                    transliteration: 'yad yad acharati shreshthas tat tad evetaro janah',
                    explanations: { en: 'Whatever a great person does, others follow. Whatever standard they set, the world follows that example.' },
                },
                {
                    verse_number: 22,
                    sanskrit: 'न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन। नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि।।',
                    transliteration: 'na me parthasti kartavyam trishu lokeshu kinchana',
                    explanations: { en: 'Krishna himself says: he has no obligation to fulfill in all three worlds, nothing he hasn\'t attained that he needs to attain - yet he continues to act.' },
                },
            ],
            questions: [{
                question_text: 'Why does Krishna bring up his own example in verse 22?',
                options: [
                    { text: 'To show off his divine status', is_correct: false },
                    { text: 'To make the point that even someone who has absolutely nothing left to gain still acts - because inaction by those in a position of influence would be harmful to everyone around them', is_correct: true },
                    { text: 'To explain why gods don\'t need to follow human rules', is_correct: false },
                ],
                explanation: 'This is a powerful argument: Krishna himself has nothing to gain from action, yet he acts. The reason? Leaders set examples, and if someone in a position of influence stopped acting, it would justify inaction in others and cause harm to the world.',
                difficulty: 'application',
            }],
        },
        // Part 6: verses 23-29 (The wise vs the unwise; acting without disturbing others)
        {
            part_number: 6,
            verse_start: 23,
            verse_end: 29,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 23,
                    sanskrit: 'यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः। मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।',
                    transliteration: 'yadi hy aham na varteyam jatu karmany atandritah',
                    explanations: { en: 'Krishna says if he himself ever stopped acting tirelessly, all humans would follow that path of inaction, since they follow his example.' },
                },
                {
                    verse_number: 24,
                    sanskrit: 'उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम्। संकरस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः।।',
                    transliteration: 'utsideyur ime loka na kuryam karma ched aham',
                    explanations: { en: 'These worlds would collapse if he stopped acting, and he would cause chaos and destroy all these people.' },
                },
                {
                    verse_number: 25,
                    sanskrit: 'सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत। कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम्।।',
                    transliteration: 'saktah karmany avidvamso yatha kurvanti bharata',
                    explanations: { en: 'As the ignorant act with attachment to results, so should the wise act - but without attachment, wanting only to hold the world together.' },
                },
                {
                    verse_number: 26,
                    sanskrit: 'न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्। जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन्।।',
                    transliteration: 'na buddhi-bhedam janayed ajnanam karma-sanginam',
                    explanations: { en: 'The wise should not unsettle the minds of people who are still attached to action. Instead, acting skillfully themselves, they should encourage all actions.' },
                },
                {
                    verse_number: 27,
                    sanskrit: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते।।',
                    transliteration: 'prakriteh kriyamanani gunaih karmani sarvashah',
                    explanations: { en: 'All actions are actually being carried out by nature\'s qualities (gunas), but a person deluded by ego thinks "I am the doer."' },
                },
                {
                    verse_number: 28,
                    sanskrit: 'तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः। गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते।।',
                    transliteration: 'tattva-vit tu maha-baho guna-karma-vibhagayoh',
                    explanations: { en: 'But the one who truly knows the difference between the qualities of nature and action understands that it is the qualities acting on qualities - and doesn\'t get attached.' },
                },
                {
                    verse_number: 29,
                    sanskrit: 'प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु। तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत्।।',
                    transliteration: 'prakriter guna-sammudah sajjante guna-karmasu',
                    explanations: { en: 'Those deluded by nature\'s qualities become attached to the actions those qualities produce. The wise, who know the whole truth, should not disturb these people of partial understanding.' },
                },
            ],
            questions: [{
                question_text: 'Why does Krishna say the wise should NOT disturb people who are still attached to action (verse 26)?',
                options: [
                    { text: 'Because the unwise are dangerous and should be avoided', is_correct: false },
                    { text: 'Because suddenly telling someone that "the self doesn\'t act" when they\'re not ready for that understanding could confuse and paralyze them - better to encourage right action first', is_correct: true },
                    { text: 'Because action is always more important than wisdom', is_correct: false },
                ],
                explanation: 'This is a teaching about meeting people where they are. Prematurely sharing deep philosophical truths with someone not ready for them can be destabilizing - the wise lead by example and encourage skillful action rather than upending others\' frameworks.',
                difficulty: 'application',
            }],
        },
        // Part 7: verses 30-35 (Surrender actions; svadharma)
        {
            part_number: 7,
            verse_start: 30,
            verse_end: 35,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 30,
                    sanskrit: 'मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा। निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः।।',
                    transliteration: 'mayi sarvani karmani sannyasyadhyatma-chetasa',
                    explanations: { en: 'Krishna tells Arjuna to dedicate all actions to him, with a mind focused on the self, free from hope and possessiveness - and fight without mental fever.' },
                },
                {
                    verse_number: 31,
                    sanskrit: 'ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः। श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः।।',
                    transliteration: 'ye me matam idam nityam anutishthanti manavah',
                    explanations: { en: 'Those who always follow this teaching of Krishna\'s with faith and without complaint are freed from the binding effects of action.' },
                },
                {
                    verse_number: 32,
                    sanskrit: 'ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम्। सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः।।',
                    transliteration: 'ye tv etad abhyasuyanto nanutishthanti me matam',
                    explanations: { en: 'But those who resent and reject this teaching, refusing to follow it, are completely deluded about all knowledge - know them as lost and mindless.' },
                },
                {
                    verse_number: 33,
                    sanskrit: 'सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि। प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति।।',
                    transliteration: 'sadrisham ceshtate svasyah prakriter jnanavaan api',
                    explanations: { en: 'Even a person of knowledge acts according to their own nature - all beings follow their nature. What will mere suppression accomplish?' },
                },
                {
                    verse_number: 34,
                    sanskrit: 'इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ। तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ।।',
                    transliteration: 'indriyasyendriyasyarthe raga-dveshau vyavasthitau',
                    explanations: { en: 'Attraction and aversion are seated in each sense toward its objects. A person should not come under their control, for they are obstacles on the path.' },
                },
                {
                    verse_number: 35,
                    sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।।',
                    transliteration: 'shreyaan sva-dharmo vigunah para-dharmat sv-anushthitat',
                    explanations: { en: 'One\'s own duty, even imperfectly performed, is better than the duty of another well performed. Death in one\'s own duty is better - following another\'s path is dangerous.' },
                },
            ],
            questions: [{
                question_text: 'What does verse 35\'s teaching about "svadharma" (one\'s own duty) mean practically?',
                options: [
                    { text: 'That people should never try to learn new skills or change their lifestyle', is_correct: false },
                    { text: 'That authentically living out your own nature and role - even imperfectly - is more wholesome than perfectly imitating someone else\'s path, which doesn\'t fit who you are', is_correct: true },
                    { text: 'That the caste system is permanently fixed and cannot change', is_correct: false },
                ],
                explanation: 'Svadharma isn\'t just about caste roles in a rigid sense - at its core it\'s the principle that acting in alignment with your genuine nature produces better results than mimicking a path that doesn\'t fit you, even if that other path looks more appealing from the outside.',
                difficulty: 'application',
            }],
        },
        // Part 8: verses 36-40 (Desire and anger as the enemy)
        {
            part_number: 8,
            verse_start: 36,
            verse_end: 40,
            estimated_minutes: 4.5,
            verses: [
                {
                    verse_number: 36,
                    sanskrit: 'अर्जुन उवाच। अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः। अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः।।',
                    transliteration: 'arjuna uvacha: atha kena prayukto\'yam papam charati purushah',
                    explanations: { en: 'Arjuna asks: what is it that drives a person to do wrong, even against their own will, as if compelled by force?' },
                },
                {
                    verse_number: 37,
                    sanskrit: 'श्रीभगवानुवाच। काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्।।',
                    transliteration: 'shri bhagavan uvacha: kama esha krodha esha rajo-guna-samudbhavah',
                    explanations: { en: 'Krishna answers: it is desire - and when desire is thwarted, anger. Both born from the quality of passion (rajas), they are the great devourer and great enemy. Know this as the enemy here.' },
                },
                {
                    verse_number: 38,
                    sanskrit: 'धूमेनाव्रियते वह्निर्यथादर्शो मलेन च। यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम्।।',
                    transliteration: 'dhumenavriyate vahnir yathadarso malena cha',
                    explanations: { en: 'Just as fire is covered by smoke, a mirror by dust, and an embryo by the womb - knowledge is covered by desire in the same way, to varying degrees.' },
                },
                {
                    verse_number: 39,
                    sanskrit: 'आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा। कामरूपेण कौन्तेय दुष्पूरेणानलेन च।।',
                    transliteration: 'avritam jnanam etena jnanino nitya-vairina',
                    explanations: { en: 'Knowledge is covered by this eternal enemy of the wise - this insatiable fire of desire, Arjuna.' },
                },
                {
                    verse_number: 40,
                    sanskrit: 'इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते। एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम्।।',
                    transliteration: 'indriyani mano buddhir asyadhishthanam uchyate',
                    explanations: { en: 'The senses, mind, and intellect are said to be desire\'s dwelling places. Through these, it covers knowledge and deludes the person.' },
                },
            ],
            questions: [{
                question_text: 'Why is desire described as an "enemy" rather than simply something to be moderated?',
                options: [
                    { text: 'Because the Gita teaches that all pleasure is sinful', is_correct: false },
                    { text: 'Because uncontrolled desire actively works against your own clarity - it covers your judgment at its source (senses, mind, intellect) and drives you to act against your own better understanding', is_correct: true },
                    { text: 'Because desiring anything at all is forbidden in Vedic tradition', is_correct: false },
                ],
                explanation: 'The "enemy" framing isn\'t about moralizing - it\'s about how desire operates. It actively clouds judgment at every level (senses, mind, intellect), which is why Krishna treats it as something to understand and overcome rather than just balance.',
                difficulty: 'application',
            }],
        },
        // Part 9: verses 41-43 (How to overcome desire; conclusion)
        {
            part_number: 9,
            verse_start: 41,
            verse_end: 43,
            estimated_minutes: 3.5,
            verses: [
                {
                    verse_number: 41,
                    sanskrit: 'तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ। पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम्।।',
                    transliteration: 'tasmaat tvam indriyany adau niyamya bharatarshabha',
                    explanations: { en: 'Therefore, Arjuna should first discipline the senses, then strike down this sinful desire that destroys both knowledge and discernment.' },
                },
                {
                    verse_number: 42,
                    sanskrit: 'इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः। मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः।।',
                    transliteration: 'indriyani parany ahur indriyebhyah param manah',
                    explanations: { en: 'The senses are considered higher than the body; the mind is higher than the senses; the intellect is higher than the mind; and what is beyond even the intellect is the Self.' },
                },
                {
                    verse_number: 43,
                    sanskrit: 'एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना। जहि शत्रुं महाबाहो कामरूपं दुरासदम्।।',
                    transliteration: 'evam buddheh param buddhva samstabhyatmanam atmana',
                    explanations: { en: 'Krishna concludes: knowing what is beyond the intellect - the Self - steady yourself by the Self, and destroy this enemy that takes the form of desire, which is so hard to overcome.' },
                },
            ],
            questions: [{
                question_text: 'What is the practical strategy Krishna gives Arjuna in the final verses for overcoming desire?',
                options: [
                    { text: 'To suppress emotions by force of willpower alone', is_correct: false },
                    { text: 'To understand the hierarchy of senses → mind → intellect → Self, and use the higher levels to govern the lower ones - ultimately grounding in the Self beyond even intellect', is_correct: true },
                    { text: 'To avoid all situations where desire might arise', is_correct: false },
                ],
                explanation: 'Krishna\'s strategy is hierarchical rather than forceful - instead of just suppressing desire at the level of action, he says to work from a higher level. The Self (beyond intellect) can govern the intellect, which governs the mind, which governs the senses. It\'s grounding upward rather than pushing down.',
                difficulty: 'application',
            }],
        },
    ],
};

module.exports = chapter3;