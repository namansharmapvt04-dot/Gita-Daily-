// Complete Chapter 5 (Karma Sanyasa Yoga - "The Yoga of Renunciation of Action"),
// all 29 verses, split into 6 parts.

const chapter5 = {
    number: 5,
    title: 'The Yoga of Renunciation',
    total_verses: 29,
    parts: [
        {
            part_number: 1,
            verse_start: 1,
            verse_end: 6,
            estimated_minutes: 4.5,
            verses: [
                { verse_number: 1, sanskrit: 'अर्जुन उवाच। संन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि। यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम्।।', transliteration: 'arjuna uvacha: sannyasam karmanam krishna punar yogam cha shamsasi', explanations: { en: 'Arjuna asks Krishna: you praise renunciation of action, and also the yoga of action. Tell me which of these two is definitely better.' } },
                { verse_number: 2, sanskrit: 'श्रीभगवानुवाच। संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ। तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते।।', transliteration: 'shri bhagavan uvacha: sannyasah karma-yogash cha nihshreyasa-karav ubhau', explanations: { en: 'Krishna says both renunciation and karma yoga lead to liberation, but of the two, karma yoga is superior to mere renunciation of action.' } },
                { verse_number: 3, sanskrit: 'ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति। निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते।।', transliteration: 'jneyah sa nitya-sannyasi yo na dveshti na kankshati', explanations: { en: 'The true eternal renunciant is one who neither hates nor craves — free from the pairs of opposites, easily liberated from bondage.' } },
                { verse_number: 4, sanskrit: 'सांख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः। एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम्।।', transliteration: 'sankhya-yogau prithag balah pravadanti na panditah', explanations: { en: 'Only the childish, not the wise, say Sankhya (knowledge) and yoga (action) are separate. Anyone who is truly established in either one reaches the fruit of both.' } },
                { verse_number: 5, sanskrit: 'यत्सांख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते। एकं सांख्यं च योगं च यः पश्यति स पश्यति।।', transliteration: 'yat sankhyaih prapyate sthanam tad yogair api gamyate', explanations: { en: 'The state reached by the Sankhya path is also reached through yoga. One who sees Sankhya and yoga as one truly sees.' } },
                { verse_number: 6, sanskrit: 'संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः। योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति।।', transliteration: 'sannyasas tu maha-baho duhkham aptum ayogatah', explanations: { en: 'But renunciation without yoga is hard to attain and painful. The sage established in yoga quickly reaches Brahman.' } },
            ],
            questions: [{ question_text: 'Why does Krishna say knowledge-path (Sankhya) and action-path (yoga) lead to the same result?', options: [{ text: 'Because both involve memorizing the same scriptures', is_correct: false }, { text: 'Because both, when fully developed, dissolve the ego and its attachments — the outer form differs but the inner transformation is identical', is_correct: true }, { text: 'Because both require complete inaction', is_correct: false }], explanation: 'The apparent debate between knowledge vs. action is resolved here: both paths, when genuinely followed, lead to the same egoless state. The division is practical (which suits your temperament) not ultimate (which is truly correct).', difficulty: 'application' }],
        },
        {
            part_number: 2,
            verse_start: 7,
            verse_end: 12,
            estimated_minutes: 4.5,
            verses: [
                { verse_number: 7, sanskrit: 'योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः। सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते।।', transliteration: 'yoga-yukto vishuddhatma vijitatma jitendriyah', explanations: { en: 'The yogi who is pure in self, victorious over the mind and senses, who feels their self in all beings — even while acting, they are not tainted.' } },
                { verse_number: 8, sanskrit: 'नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित्। पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन्।।', transliteration: 'naiva kinchit karomiti yukto manyeta tattva-vit', explanations: { en: 'The person who knows the truth thinks "I do nothing at all" — even while seeing, hearing, touching, smelling, eating, walking, sleeping, breathing...' } },
                { verse_number: 9, sanskrit: 'प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि। इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्।।', transliteration: 'pralapan visrijan grihnan unmishan nimishanapi', explanations: { en: '...even while talking, letting go, grasping, opening and closing the eyes — holding firm that it is only the senses acting on their objects.' } },
                { verse_number: 10, sanskrit: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा।।', transliteration: 'brahmany adhaya karmani sangam tyaktva karoti yah', explanations: { en: 'One who acts by offering all actions to Brahman, abandoning attachment, is not tainted by wrongdoing — like a lotus leaf untouched by water.' } },
                { verse_number: 11, sanskrit: 'कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि। योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये।।', transliteration: 'kayena manasa buddhya kevalair indriyair api', explanations: { en: 'Yogis perform action with body, mind, intellect, and senses alone — abandoning attachment — for the purification of the self.' } },
                { verse_number: 12, sanskrit: 'युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्। अयुक्तः कामकारेण फले सक्तो निबध्यते।।', transliteration: 'yuktah karma-phalam tyaktva shantim apnoti naishtikeem', explanations: { en: 'The disciplined person, abandoning the fruit of action, attains lasting peace. The undisciplined person, driven by desire and attached to results, remains bound.' } },
            ],
            questions: [{ question_text: 'The lotus leaf image in verse 10 — untouched by water — is one of the Gita\'s most famous. What does it actually describe?', options: [{ text: 'That an enlightened person becomes emotionally numb to life', is_correct: false }, { text: 'That someone acting without ego-attachment participates fully in life without being stained by it — present in action but not possessively entangled in its outcomes', is_correct: true }, { text: 'That the best people avoid messy situations altogether', is_correct: false }], explanation: 'The lotus leaf doesn\'t avoid the water — it\'s in it completely. The image is about participation without entanglement. The yogi acts fully in the world but remains inwardly untouched by ego-driven results.', difficulty: 'application' }],
        },
        {
            part_number: 3,
            verse_start: 13,
            verse_end: 17,
            estimated_minutes: 4.5,
            verses: [
                { verse_number: 13, sanskrit: 'सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी। नवद्वारे पुरे देही नैव कुर्वन्न कारयन्।।', transliteration: 'sarva-karmani manasa sannyasyaste sukham vashi', explanations: { en: 'The self-controlled embodied person mentally renounces all actions, dwells happily in the city of nine gates (the body) — neither acting nor causing action.' } },
                { verse_number: 14, sanskrit: 'न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः। न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते।।', transliteration: 'na kartritvam na karmani lokasya srijati prabhuh', explanations: { en: 'The Lord of the body creates neither agency, nor actions, nor the union of action and result — it is nature itself that operates.' } },
                { verse_number: 15, sanskrit: 'नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः। अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः।।', transliteration: 'nadatte kasyachit papam na chaiva sukritam vibhuh', explanations: { en: 'The all-pervading Self takes on neither the wrongdoing nor the good deeds of anyone. Knowledge is covered by ignorance — that is why beings are deluded.' } },
                { verse_number: 16, sanskrit: 'ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः। तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्।।', transliteration: 'jnanena tu tad ajnanam yesham nashitam atmanah', explanations: { en: 'But for those in whom that ignorance has been destroyed by knowledge of the self, their knowledge illumines the Supreme — like the sun.' } },
                { verse_number: 17, sanskrit: 'तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः। गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः।।', transliteration: 'tad-buddhayas tad-atmanas tan-nishthhas tat-parayanah', explanations: { en: 'Those whose intellect is in that, whose self is in that, who are established in that and devoted to that — they go to non-return, their impurities washed away by knowledge.' } },
            ],
            questions: [{ question_text: 'What does Krishna mean when he says the Lord doesn\'t take on anyone\'s wrongdoing or goodness (verse 15)?', options: [{ text: 'That God doesn\'t care about human morality', is_correct: false }, { text: 'That the pure Self is beyond the categories of good and bad action — it\'s ignorance that makes beings think the self is bound by deeds, when in fact the self is always free', is_correct: true }, { text: 'That karma doesn\'t exist', is_correct: false }], explanation: 'This is pointing at the transcendent nature of the Self — it doesn\'t accumulate karma the way the ego does. The problem isn\'t that the Self is stained; it\'s that ignorance makes it appear so. Knowledge dissolves that apparent stain.', difficulty: 'application' }],
        },
        {
            part_number: 4,
            verse_start: 18,
            verse_end: 21,
            estimated_minutes: 3.5,
            verses: [
                { verse_number: 18, sanskrit: 'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः।।', transliteration: 'vidya-vinaya-sampanne brahmane gavi hastini', explanations: { en: 'The truly wise see the same Self in a learned and humble Brahmin, a cow, an elephant, a dog, and an outcaste who eats dogs — they see with equal vision.' } },
                { verse_number: 19, sanskrit: 'इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः। निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः।।', transliteration: 'ihaiva tair jitah sargo yesham samye sthitam manah', explanations: { en: 'Right here in this life, those whose minds rest in equality have conquered creation. Brahman is faultless and equal — therefore they are established in Brahman.' } },
                { verse_number: 20, sanskrit: 'न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम्। स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः।।', transliteration: 'na prahrishyet priyam prapya nodvijet prapya chapriyam', explanations: { en: 'One established in Brahman — steady in intellect, undeluded — neither rejoices upon receiving what is pleasant nor is disturbed upon receiving what is unpleasant.' } },
                { verse_number: 21, sanskrit: 'बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्। स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते।।', transliteration: 'bahya-sparsheShv asaktaatma vindaty atmani yat sukham', explanations: { en: 'Unattached to external contacts and finding joy within the self — such a person, united with Brahman, enjoys inexhaustible happiness.' } },
            ],
            questions: [{ question_text: 'Verse 18 says the wise see the same self in a scholar and an outcaste equally. Is this a call to ignore social injustice, or something else?', options: [{ text: 'Yes, it means social inequalities should be accepted as permanent', is_correct: false }, { text: 'It describes a level of inner vision — seeing the same consciousness in all beings — not a justification for external inequality; it\'s about perception of the Self, not social policy', is_correct: true }, { text: 'It means all people must be treated identically in all circumstances', is_correct: false }], explanation: 'Equal vision here refers to seeing the same divine Self in all beings at the level of ultimate reality — it\'s a spiritual perception, not a statement that external circumstances should never change. Many Gita commentators distinguish between this spiritual equality and the need for social justice.', difficulty: 'application' }],
        },
        {
            part_number: 5,
            verse_start: 22,
            verse_end: 26,
            estimated_minutes: 4.5,
            verses: [
                { verse_number: 22, sanskrit: 'ये हि संस्पर्शजा भोगा दुःखयोनय एव ते। आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः।।', transliteration: 'ye hi samsparshaja bhoga duhkha-yonaya eva te', explanations: { en: 'Pleasures born of sense-contact are sources of suffering — they have a beginning and an end. The wise do not delight in them.' } },
                { verse_number: 23, sanskrit: 'शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्। कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः।।', transliteration: 'shaknotihaiva yah sodhum prak sharira-vimokshanat', explanations: { en: 'One who is able to withstand the force of desire and anger right here, before leaving the body — that person is a yogi, and is happy.' } },
                { verse_number: 24, sanskrit: 'योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः। स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति।।', transliteration: 'yo\'ntah-sukho\'ntar-aramas tathantar-jyotir eva yah', explanations: { en: 'One whose happiness is within, whose delight is within, whose light is only within — that yogi, having become Brahman, reaches the peace of Brahman.' } },
                { verse_number: 25, sanskrit: 'लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः। छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः।।', transliteration: 'labhante brahma-nirvanam rishayah kshina-kalmasah', explanations: { en: 'The sages who have shed their impurities, cut through doubt, are self-disciplined and devoted to the welfare of all beings — they attain the peace of Brahman.' } },
                { verse_number: 26, sanskrit: 'कामक्रोधवियुक्तानां यतीनां यतचेतसाम्। अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम्।।', transliteration: 'kama-krodha-viyuktanam yatinam yata-chetasam', explanations: { en: 'The peace of Brahman exists all around those ascetics who are free from desire and anger, self-controlled, and who know the self.' } },
            ],
            questions: [{ question_text: 'Why does Krishna say pleasures born of the senses are "sources of suffering" even though they feel good?', options: [{ text: 'Because pleasure is sinful according to religious law', is_correct: false }, { text: 'Because they are temporary — what begins must end, and the ending (and the anxiety of losing it) produces suffering even when the experience itself is pleasant', is_correct: true }, { text: 'Because only ascetics who feel no pleasure are spiritual', is_correct: false }], explanation: 'This isn\'t a moral condemnation of pleasure — it\'s a practical observation about impermanence. Sense pleasures are real, but their dependence on external conditions makes them inherently unreliable, and the gap between expectation and reality creates suffering.', difficulty: 'application' }],
        },
        {
            part_number: 6,
            verse_start: 27,
            verse_end: 29,
            estimated_minutes: 3.5,
            verses: [
                { verse_number: 27, sanskrit: 'स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः। प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ।।', transliteration: 'sparshan kritva bahir bahyamsh chakshush chaivantare bhruvoh', explanations: { en: 'Keeping external sense-contacts outside, fixing the gaze between the eyebrows, equalizing the in-breath and out-breath moving within the nostrils...' } },
                { verse_number: 28, sanskrit: 'यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः। विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः।।', transliteration: 'yatendriya-mano-buddhir munir moksha-parayanah', explanations: { en: '...with senses, mind and intellect controlled, the sage devoted to liberation, free from desire, fear and anger — such a one is ever liberated.' } },
                { verse_number: 29, sanskrit: 'भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्। सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति।।', transliteration: 'bhoktaram yajna-tapasam sarva-loka-maheshvaram', explanations: { en: 'Knowing Krishna as the enjoyer of all sacrifices and austerities, the great Lord of all worlds, and the friend of all beings — one attains peace.' } },
            ],
            questions: [{ question_text: 'Chapter 5 ends with Krishna describing himself as the "friend of all beings." How does this connect to the rest of the chapter\'s teaching?', options: [{ text: 'It\'s an unrelated closing statement', is_correct: false }, { text: 'It frames the entire teaching in a relationship of care — the one giving this knowledge about liberation, equanimity, and the self does so as a friend, not as a judge or authority demanding compliance', is_correct: true }, { text: 'It means only devotees of Krishna can reach peace', is_correct: false }], explanation: 'The closing verse reframes everything: the teaching on renunciation, equal vision, and inner joy isn\'t delivered as a command from above but from a stance of genuine friendship. This makes the entire chapter feel less like instruction and more like guidance from someone who wants the best for you.', difficulty: 'application' }],
        },
    ],
};

module.exports = chapter5;
