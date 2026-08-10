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
                    explanations: { en: 'Arjuna asks Krishna: if you consider wisdom superior to action, why are you pushing me into this terrible battle? He is confused by what seems like a contradiction.', hi: 'अर्जुन कृष्ण से पूछते हैं: यदि आप ज्ञान को कर्म से श्रेष्ठ मानते हैं, तो फिर मुझे इस भयानक युद्ध में क्यों झोंक रहे हैं? यह विरोधाभास उन्हें उलझन में डाल देता है।' },
                },
                {
                    verse_number: 2,
                    sanskrit: 'व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे। तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्।।',
                    transliteration: 'vyamishreneiva vakyena buddhim mohayasiva me',
                    explanations: { en: 'Arjuna says Krishna\'s mixed message is confusing his mind. He asks for one clear answer that will actually help him.', hi: 'अर्जुन कहते हैं कि कृष्ण की मिली-जुली बातें उनकी बुद्धि को भ्रमित कर रही हैं। वे एक स्पष्ट उत्तर माँगते हैं जिससे वाकई उनका भला हो सके।' },
                },
                {
                    verse_number: 3,
                    sanskrit: 'श्रीभगवानुवाच। लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ। ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम्।।',
                    transliteration: 'shri bhagavan uvacha: loke\'smin dvi-vidha nishtha pura prokta mayanagha',
                    explanations: { en: 'Krishna clarifies: there are two paths he taught from the beginning - the path of knowledge for those inclined toward contemplation, and the path of action for those inclined toward doing.', hi: 'कृष्ण स्पष्ट करते हैं कि इस संसार में उन्होंने आरंभ से ही दो मार्ग बताए हैं - चिंतनशील स्वभाव वालों के लिए ज्ञान योग और कर्मशील स्वभाव वालों के लिए कर्म योग।' },
                },
                {
                    verse_number: 4,
                    sanskrit: 'न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते। न च संन्यसनादेव सिद्धिं समधिगच्छति।।',
                    transliteration: 'na karmanam anarambhan naishkarmyam purusho\'shnute',
                    explanations: { en: 'Krishna says a person doesn\'t achieve freedom from the effects of action simply by not starting actions, nor does merely renouncing action lead to perfection.', hi: 'कृष्ण कहते हैं कि केवल कर्म आरंभ न करने से मनुष्य कर्मों के प्रभाव से मुक्त नहीं होता, और न ही केवल संन्यास लेने भर से सिद्धि प्राप्त होती है।' },
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
                    explanations: { en: 'Krishna explains that no one can remain without acting even for a moment - nature\'s qualities (the gunas) compel everyone to act, whether they like it or not.', hi: 'कृष्ण समझाते हैं कि कोई भी व्यक्ति एक क्षण भी बिना कर्म किए नहीं रह सकता - प्रकृति के गुण हर किसी को चाहे-अनचाहे कर्म करने पर विवश करते हैं।' },
                },
                {
                    verse_number: 6,
                    sanskrit: 'कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्। इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते।।',
                    transliteration: 'karmendriyani samyamya ya aste manasa smaran',
                    explanations: { en: 'He says someone who outwardly restrains their actions but keeps mentally dwelling on sense pleasures is deceiving themselves - that\'s false renunciation.', hi: 'वे कहते हैं कि जो व्यक्ति बाहर से कर्मेंद्रियों को रोककर भी मन में विषय-सुखों का चिंतन करता रहता है, वह स्वयं को धोखा दे रहा है - यही झूठा संन्यास है।' },
                },
                {
                    verse_number: 7,
                    sanskrit: 'यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन। कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते।।',
                    transliteration: 'yas tv indriyani manasa niyamyarabhate\'rjuna',
                    explanations: { en: 'But the person who controls the senses through the mind and then engages in action without attachment - that person is far superior.', hi: 'लेकिन जो व्यक्ति मन से अपनी इंद्रियों को वश में करके बिना आसक्ति के कर्मयोग का आचरण करता है, वह कहीं अधिक श्रेष्ठ है।' },
                },
                {
                    verse_number: 8,
                    sanskrit: 'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।',
                    transliteration: 'niyatam kuru karma tvam karma jyayo hy akarmanah',
                    explanations: { en: 'Krishna tells Arjuna to do his prescribed duty - action is better than inaction. Even just maintaining the body requires action; you cannot survive by doing nothing.', hi: 'कृष्ण अर्जुन से कहते हैं कि वह अपना नियत कर्तव्य निभाए - कर्म न करने से कर्म करना बेहतर है। शरीर का निर्वाह भी बिना कर्म किए संभव नहीं है, कुछ न करके जीवित नहीं रहा जा सकता।' },
                },
                {
                    verse_number: 9,
                    sanskrit: 'यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः। तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर।।',
                    transliteration: 'yajnarthat karmano\'nyatra loko\'yam karma-bandhanah',
                    explanations: { en: 'Action performed as an offering (yajna) doesn\'t bind a person; it\'s only action done for selfish ends that creates bondage. So Arjuna should act as an offering, free from attachment.', hi: 'यज्ञ भाव से किया गया कर्म व्यक्ति को नहीं बाँधता; बंधन तो केवल स्वार्थ के लिए किए गए कर्म से बनता है। इसलिए अर्जुन को आसक्ति त्यागकर यज्ञ के रूप में कर्म करना चाहिए।' },
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
                    explanations: { en: 'Krishna says that at creation, the Lord created beings along with the spirit of yajna (sacred offering), saying: through this spirit of giving and offering, may you flourish - let this be the fulfiller of your needs.', hi: 'कृष्ण कहते हैं कि सृष्टि की शुरुआत में प्रजापति ने प्राणियों की रचना यज्ञ भाव के साथ की और कहा - इसी अर्पण भाव से तुम फलो-फूलो, यही तुम्हारी सब कामनाओं को पूर्ण करने वाला बने।' },
                },
                {
                    verse_number: 11,
                    sanskrit: 'देवान्भावयतानेन ते देवा भावयन्तु वः। परस्परं भावयन्तः श्रेयः परमवाप्स्यथ।।',
                    transliteration: 'devan bhavayatanena te deva bhavayantu vah',
                    explanations: { en: 'By nourishing the higher forces of nature through your offerings, they in turn will nourish you - by sustaining each other in this way, you will attain the highest good.', hi: 'अपने अर्पण से देवताओं (प्रकृति की उच्च शक्तियों) को पोषित करो, वे भी बदले में तुम्हें पोषित करेंगे - इस परस्पर सहारे से तुम परम कल्याण को प्राप्त होगे।' },
                },
                {
                    verse_number: 12,
                    sanskrit: 'इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः। तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः।।',
                    transliteration: 'ishtaan bhogan hi vo deva dasyante yajna-bhavitah',
                    explanations: { en: 'The higher forces, nourished by your offerings, will give you what you need to live well. But someone who enjoys these gifts without giving back in return is essentially a thief.', hi: 'तुम्हारे अर्पण से पोषित देवता तुम्हें अच्छे जीवन के लिए आवश्यक वस्तुएँ प्रदान करेंगे। पर जो इन वरदानों को बिना कुछ लौटाए भोगता है, वह वास्तव में चोर के समान है।' },
                },
                {
                    verse_number: 13,
                    sanskrit: 'यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः। भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्।।',
                    transliteration: 'yajna-shishtashinah santo muchyante sarva-kilbishaih',
                    explanations: { en: 'The good, who eat what remains after an offering, are freed from all wrongdoing. But those who cook and eat only for themselves consume nothing but their own accumulating wrongdoing.', hi: 'जो सज्जन यज्ञ के बाद बचे अन्न को ग्रहण करते हैं, वे सब पापों से मुक्त हो जाते हैं। परंतु जो केवल अपने लिए ही पकाते और खाते हैं, वे अपने संचित पाप को ही खा रहे होते हैं।' },
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
                    explanations: { en: 'Beings live on food; food comes from rain; rain comes from yajna (selfless offering); and yajna arises from action - showing a complete chain of interdependence.', hi: 'सभी प्राणी अन्न से जीवित रहते हैं; अन्न वर्षा से उत्पन्न होता है; वर्षा यज्ञ (निःस्वार्थ अर्पण) से होती है; और यज्ञ कर्म से उत्पन्न होता है - यह पूरी परस्पर-निर्भरता की श्रृंखला दिखाता है।' },
                },
                {
                    verse_number: 15,
                    sanskrit: 'कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्। तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्।।',
                    transliteration: 'karma brahmodbhavam viddhi brahma aksharasamudbhavam',
                    explanations: { en: 'Action arises from the Vedic wisdom; that wisdom arises from the eternal (Brahman). Thus the all-pervading eternal is always present in yajna - selfless offering is grounded in the deepest reality.', hi: 'कर्म वैदिक ज्ञान से उत्पन्न होता है; वह ज्ञान अविनाशी ब्रह्म से उत्पन्न होता है। इस प्रकार सर्वव्यापी ब्रह्म सदा यज्ञ में विद्यमान रहता है - निःस्वार्थ अर्पण गहनतम सत्य में ही जड़ा हुआ है।' },
                },
                {
                    verse_number: 16,
                    sanskrit: 'एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः। अघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।',
                    transliteration: 'evam pravartitam chakram nanuvartayatiha yah',
                    explanations: { en: 'Krishna says whoever doesn\'t keep this wheel of interdependence turning - living only for sensory pleasure - lives in vain and causes harm.', hi: 'कृष्ण कहते हैं जो कोई इस परस्पर-निर्भरता के चक्र को आगे नहीं बढ़ाता - और केवल इंद्रिय-सुखों के लिए जीता है - उसका जीवन व्यर्थ है और वह हानि ही पहुँचाता है।' },
                },
                {
                    verse_number: 17,
                    sanskrit: 'यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः। आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते।।',
                    transliteration: 'yas tv atma-ratir eva syad atma-triptash cha manavah',
                    explanations: { en: 'However, the person who is content in the self, satisfied by the self, and fulfilled within the self alone - for that person, there is no binding duty that must be fulfilled.', hi: 'परंतु जो व्यक्ति आत्मा में ही रमण करता है, आत्मा से ही तृप्त है और केवल आत्मा में ही संतुष्ट है - उसके लिए निभाने योग्य कोई बाध्य कर्तव्य शेष नहीं रहता।' },
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
                    explanations: { en: 'Such a self-realized person has nothing to gain by acting and nothing to lose by not acting - they have no dependency on any being for anything.', hi: 'ऐसे आत्मज्ञानी व्यक्ति को कर्म करने से कुछ प्राप्त नहीं होता और कर्म न करने से कुछ खोता भी नहीं - उसे किसी भी वस्तु के लिए किसी प्राणी पर निर्भर नहीं रहना पड़ता।' },
                },
                {
                    verse_number: 19,
                    sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।',
                    transliteration: 'tasmad asaktah satatam karyam karma samachara',
                    explanations: { en: 'Therefore, Arjuna should always do what needs to be done, but without attachment - because it is by acting without attachment that a person reaches the highest.', hi: 'इसलिए अर्जुन को सदा जो करना आवश्यक है वह करते रहना चाहिए, पर बिना आसक्ति के - क्योंकि निष्काम भाव से कर्म करके ही व्यक्ति परम को प्राप्त होता है।' },
                },
                {
                    verse_number: 20,
                    sanskrit: 'कर्मणैव हि संसिद्धिमास्थिता जनकादयः। लोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि।।',
                    transliteration: 'karmanaiva hi samsiddhim asthita janakadayah',
                    explanations: { en: 'King Janaka and other great souls attained perfection through action itself. Even from the perspective of keeping the world together, Arjuna ought to act.', hi: 'राजा जनक और अन्य महापुरुषों ने कर्म के द्वारा ही सिद्धि प्राप्त की थी। संसार की व्यवस्था बनाए रखने की दृष्टि से भी अर्जुन को कर्म करना चाहिए।' },
                },
                {
                    verse_number: 21,
                    sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।',
                    transliteration: 'yad yad acharati shreshthas tat tad evetaro janah',
                    explanations: { en: 'Whatever a great person does, others follow. Whatever standard they set, the world follows that example.', hi: 'श्रेष्ठ पुरुष जो भी आचरण करता है, बाकी लोग उसी का अनुसरण करते हैं। वह जो भी मापदंड स्थापित करता है, संसार उसी उदाहरण का पालन करता है।' },
                },
                {
                    verse_number: 22,
                    sanskrit: 'न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन। नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि।।',
                    transliteration: 'na me parthasti kartavyam trishu lokeshu kinchana',
                    explanations: { en: 'Krishna himself says: he has no obligation to fulfill in all three worlds, nothing he hasn\'t attained that he needs to attain - yet he continues to act.', hi: 'कृष्ण स्वयं कहते हैं: उन्हें तीनों लोकों में कोई कर्तव्य पूरा करना शेष नहीं है, न कुछ ऐसा है जो उन्हें प्राप्त करना बाकी हो - फिर भी वे कर्म करते रहते हैं।' },
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
                    explanations: { en: 'Krishna says if he himself ever stopped acting tirelessly, all humans would follow that path of inaction, since they follow his example.', hi: 'कृष्ण कहते हैं कि यदि वे स्वयं कभी अथक कर्म करना छोड़ दें, तो सभी मनुष्य उनके उदाहरण का अनुसरण करते हुए निष्क्रियता के उसी मार्ग पर चल पड़ेंगे।' },
                },
                {
                    verse_number: 24,
                    sanskrit: 'उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम्। संकरस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः।।',
                    transliteration: 'utsideyur ime loka na kuryam karma ched aham',
                    explanations: { en: 'These worlds would collapse if he stopped acting, and he would cause chaos and destroy all these people.', hi: 'यदि वे कर्म करना बंद कर दें तो ये सभी लोक नष्ट हो जाएँगे, और वे अव्यवस्था फैलाकर इन सभी प्राणियों के विनाश का कारण बन जाएँगे।' },
                },
                {
                    verse_number: 25,
                    sanskrit: 'सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत। कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम्।।',
                    transliteration: 'saktah karmany avidvamso yatha kurvanti bharata',
                    explanations: { en: 'As the ignorant act with attachment to results, so should the wise act - but without attachment, wanting only to hold the world together.', hi: 'जैसे अज्ञानी लोग फल की आसक्ति से कर्म करते हैं, वैसे ही ज्ञानी को भी कर्म करना चाहिए - परंतु आसक्ति रहित होकर, केवल संसार को एकजुट रखने की इच्छा से।' },
                },
                {
                    verse_number: 26,
                    sanskrit: 'न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्। जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन्।।',
                    transliteration: 'na buddhi-bhedam janayed ajnanam karma-sanginam',
                    explanations: { en: 'The wise should not unsettle the minds of people who are still attached to action. Instead, acting skillfully themselves, they should encourage all actions.', hi: 'ज्ञानी को उन लोगों की बुद्धि को विचलित नहीं करना चाहिए जो अभी कर्म से आसक्त हैं। बल्कि स्वयं कुशलतापूर्वक कर्म करते हुए उसे सभी को कर्म के लिए प्रोत्साहित करना चाहिए।' },
                },
                {
                    verse_number: 27,
                    sanskrit: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते।।',
                    transliteration: 'prakriteh kriyamanani gunaih karmani sarvashah',
                    explanations: { en: 'All actions are actually being carried out by nature\'s qualities (gunas), but a person deluded by ego thinks "I am the doer."', hi: 'सभी कर्म वास्तव में प्रकृति के गुणों द्वारा ही किए जाते हैं, परंतु अहंकार से मोहित व्यक्ति यह सोच बैठता है कि "मैं ही कर्ता हूँ।"' },
                },
                {
                    verse_number: 28,
                    sanskrit: 'तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः। गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते।।',
                    transliteration: 'tattva-vit tu maha-baho guna-karma-vibhagayoh',
                    explanations: { en: 'But the one who truly knows the difference between the qualities of nature and action understands that it is the qualities acting on qualities - and doesn\'t get attached.', hi: 'परंतु जो सचमुच गुण और कर्म के भेद को जानता है, वह समझता है कि गुण ही गुणों पर कार्य कर रहे हैं - और इसलिए वह आसक्त नहीं होता।' },
                },
                {
                    verse_number: 29,
                    sanskrit: 'प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु। तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत्।।',
                    transliteration: 'prakriter guna-sammudah sajjante guna-karmasu',
                    explanations: { en: 'Those deluded by nature\'s qualities become attached to the actions those qualities produce. The wise, who know the whole truth, should not disturb these people of partial understanding.', hi: 'प्रकृति के गुणों से मोहित लोग उन्हीं गुणों से उत्पन्न कर्मों में आसक्त हो जाते हैं। जो सम्पूर्ण सत्य जानता है, उसे इन अल्पज्ञानी लोगों को विचलित नहीं करना चाहिए।' },
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
                    explanations: { en: 'Krishna tells Arjuna to dedicate all actions to him, with a mind focused on the self, free from hope and possessiveness - and fight without mental fever.', hi: 'कृष्ण अर्जुन से कहते हैं कि वह अपना मन आत्मा में स्थिर रखकर सभी कर्म उन्हें अर्पित कर दे, आशा और ममता से मुक्त होकर - और मानसिक बेचैनी त्यागकर युद्ध करे।' },
                },
                {
                    verse_number: 31,
                    sanskrit: 'ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः। श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः।।',
                    transliteration: 'ye me matam idam nityam anutishthanti manavah',
                    explanations: { en: 'Those who always follow this teaching of Krishna\'s with faith and without complaint are freed from the binding effects of action.', hi: 'जो लोग सदा श्रद्धा के साथ और बिना शिकायत किए कृष्ण की इस शिक्षा का पालन करते हैं, वे कर्मों के बंधनकारी प्रभाव से मुक्त हो जाते हैं।' },
                },
                {
                    verse_number: 32,
                    sanskrit: 'ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम्। सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः।।',
                    transliteration: 'ye tv etad abhyasuyanto nanutishthanti me matam',
                    explanations: { en: 'But those who resent and reject this teaching, refusing to follow it, are completely deluded about all knowledge - know them as lost and mindless.', hi: 'परंतु जो इस शिक्षा से असंतुष्ट होकर इसका पालन करने से इनकार करते हैं, वे समस्त ज्ञान के विषय में पूर्णतः भ्रमित हैं - उन्हें दिशाहीन और विवेकहीन ही समझो।' },
                },
                {
                    verse_number: 33,
                    sanskrit: 'सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि। प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति।।',
                    transliteration: 'sadrisham ceshtate svasyah prakriter jnanavaan api',
                    explanations: { en: 'Even a person of knowledge acts according to their own nature - all beings follow their nature. What will mere suppression accomplish?', hi: 'ज्ञानी व्यक्ति भी अपने स्वभाव के अनुसार ही आचरण करता है - सभी प्राणी अपनी प्रकृति का ही अनुसरण करते हैं। केवल दमन करने से क्या हासिल होगा?' },
                },
                {
                    verse_number: 34,
                    sanskrit: 'इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ। तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ।।',
                    transliteration: 'indriyasyendriyasyarthe raga-dveshau vyavasthitau',
                    explanations: { en: 'Attraction and aversion are seated in each sense toward its objects. A person should not come under their control, for they are obstacles on the path.', hi: 'हर इंद्रिय के अपने-अपने विषयों के प्रति राग और द्वेष बसे होते हैं। व्यक्ति को इनके वश में नहीं आना चाहिए, क्योंकि ये मार्ग की बाधाएँ हैं।' },
                },
                {
                    verse_number: 35,
                    sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।।',
                    transliteration: 'shreyaan sva-dharmo vigunah para-dharmat sv-anushthitat',
                    explanations: { en: 'One\'s own duty, even imperfectly performed, is better than the duty of another well performed. Death in one\'s own duty is better - following another\'s path is dangerous.', hi: 'अपना धर्म, भले ही अपूर्ण ढंग से निभाया गया हो, दूसरे के भली-भाँति निभाए गए धर्म से बेहतर है। अपने धर्म में मृत्यु भी श्रेष्ठ है - दूसरे का धर्म भयावह होता है।' },
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
                    explanations: { en: 'Arjuna asks: what is it that drives a person to do wrong, even against their own will, as if compelled by force?', hi: 'अर्जुन पूछते हैं: वह कौन सी शक्ति है जो मनुष्य को उसकी अपनी इच्छा के विरुद्ध भी, मानो बलपूर्वक, गलत काम करने पर विवश कर देती है?' },
                },
                {
                    verse_number: 37,
                    sanskrit: 'श्रीभगवानुवाच। काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्।।',
                    transliteration: 'shri bhagavan uvacha: kama esha krodha esha rajo-guna-samudbhavah',
                    explanations: { en: 'Krishna answers: it is desire - and when desire is thwarted, anger. Both born from the quality of passion (rajas), they are the great devourer and great enemy. Know this as the enemy here.', hi: 'कृष्ण उत्तर देते हैं: यह इच्छा (काम) है - और जब इच्छा में बाधा पड़ती है तो वही क्रोध बन जाती है। रजोगुण से उत्पन्न ये दोनों महाभक्षी और महापापी हैं। इसी को यहाँ शत्रु समझो।' },
                },
                {
                    verse_number: 38,
                    sanskrit: 'धूमेनाव्रियते वह्निर्यथादर्शो मलेन च। यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम्।।',
                    transliteration: 'dhumenavriyate vahnir yathadarso malena cha',
                    explanations: { en: 'Just as fire is covered by smoke, a mirror by dust, and an embryo by the womb - knowledge is covered by desire in the same way, to varying degrees.', hi: 'जैसे धुएँ से अग्नि, धूल से दर्पण और गर्भाशय से भ्रूण ढका रहता है, वैसे ही ज्ञान भी इच्छा से अलग-अलग मात्रा में ढका रहता है।' },
                },
                {
                    verse_number: 39,
                    sanskrit: 'आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा। कामरूपेण कौन्तेय दुष्पूरेणानलेन च।।',
                    transliteration: 'avritam jnanam etena jnanino nitya-vairina',
                    explanations: { en: 'Knowledge is covered by this eternal enemy of the wise - this insatiable fire of desire, Arjuna.', hi: 'ज्ञानी का यह चिर-शत्रु - यह कभी न तृप्त होने वाली इच्छा रूपी अग्नि - इसी तरह ज्ञान को ढके रहता है, अर्जुन।' },
                },
                {
                    verse_number: 40,
                    sanskrit: 'इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते। एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम्।।',
                    transliteration: 'indriyani mano buddhir asyadhishthanam uchyate',
                    explanations: { en: 'The senses, mind, and intellect are said to be desire\'s dwelling places. Through these, it covers knowledge and deludes the person.', hi: 'इंद्रियाँ, मन और बुद्धि इस इच्छा के निवास-स्थान कहे जाते हैं। इन्हीं के माध्यम से यह ज्ञान को ढककर व्यक्ति को मोहित कर देती है।' },
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
                    explanations: { en: 'Therefore, Arjuna should first discipline the senses, then strike down this sinful desire that destroys both knowledge and discernment.', hi: 'इसलिए अर्जुन को पहले अपनी इंद्रियों को अनुशासित करना चाहिए, फिर ज्ञान और विवेक दोनों को नष्ट करने वाली इस पापमयी इच्छा का नाश करना चाहिए।' },
                },
                {
                    verse_number: 42,
                    sanskrit: 'इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः। मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः।।',
                    transliteration: 'indriyani parany ahur indriyebhyah param manah',
                    explanations: { en: 'The senses are considered higher than the body; the mind is higher than the senses; the intellect is higher than the mind; and what is beyond even the intellect is the Self.', hi: 'इंद्रियाँ शरीर से श्रेष्ठ मानी जाती हैं; मन इंद्रियों से श्रेष्ठ है; बुद्धि मन से श्रेष्ठ है; और जो बुद्धि से भी परे है, वह आत्मा है।' },
                },
                {
                    verse_number: 43,
                    sanskrit: 'एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना। जहि शत्रुं महाबाहो कामरूपं दुरासदम्।।',
                    transliteration: 'evam buddheh param buddhva samstabhyatmanam atmana',
                    explanations: { en: 'Krishna concludes: knowing what is beyond the intellect - the Self - steady yourself by the Self, and destroy this enemy that takes the form of desire, which is so hard to overcome.', hi: 'कृष्ण निष्कर्ष में कहते हैं: बुद्धि से भी परे स्थित आत्मा को जानकर, आत्मा के सहारे स्वयं को स्थिर करो, और इस दुर्जेय इच्छा-रूपी शत्रु का नाश करो।' },
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