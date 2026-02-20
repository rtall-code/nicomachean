// ─── Topic Metadata ──────────────────────────────────────
const topics = [
    {
        id: 'happiness',
        title: 'What is Happiness?',
        subtitle: 'Eudaimonia and the highest good',
        readRef: { book: 1, chapter: 7 },
        questions: [
            { text: "Is happiness the same as pleasure?", next: 'q_pleasure' },
            { text: "Can happiness be taken away by misfortune?", next: 'q_fortune' },
            { text: "What makes a life truly good?", next: 'q_good_life' }
        ]
    },
    {
        id: 'function',
        title: 'The Human Function',
        subtitle: 'What makes us distinctly human',
        readRef: { book: 1, chapter: 7 },
        questions: [
            { text: "Do human beings have a purpose?", next: 'q_purpose' },
            { text: "Is reason what defines us?", next: 'q_reason' },
            { text: "How does our function relate to happiness?", next: 'q_function_happiness' }
        ]
    },
    {
        id: 'virtue',
        title: 'Virtue & Character',
        subtitle: 'How we become good people',
        readRef: { book: 2, chapter: 1 },
        questions: [
            { text: "Are we born good or do we become good?", next: 'q_born' },
            { text: "Can you teach someone to be virtuous?", next: 'q_teach' },
            { text: "What is the role of habit in building character?", next: 'q_habit' }
        ]
    },
    {
        id: 'mean',
        title: 'The Golden Mean',
        subtitle: 'Virtue as balance between extremes',
        readRef: { book: 2, chapter: 6 },
        questions: [
            { text: "Is virtue always in the middle?", next: 'q_always_middle' },
            { text: "How do I find the right balance?", next: 'q_find_balance' },
            { text: "Can the mean be different for different people?", next: 'q_relative' }
        ]
    },
    {
        id: 'courage',
        title: 'Courage',
        subtitle: 'The nature of true bravery',
        readRef: { book: 3, chapter: 7 },
        questions: [
            { text: "Is courage just the absence of fear?", next: 'q_no_fear' },
            { text: "Can you be too brave?", next: 'q_too_brave' },
            { text: "What are you supposed to be courageous about?", next: 'q_about_what' }
        ]
    },
    {
        id: 'temperance',
        title: 'Temperance',
        subtitle: 'Mastering desire and pleasure',
        readRef: { book: 3, chapter: 12 },
        questions: [
            { text: "Should we avoid pleasure?", next: 'q_avoid' },
            { text: "What is the difference between temperance and self-denial?", next: 'q_denial' },
            { text: "Why is temperance so hard?", next: 'q_hard' }
        ]
    },
    {
        id: 'generosity',
        title: 'Generosity',
        subtitle: 'The art of giving well',
        readRef: { book: 4, chapter: 1 },
        questions: [
            { text: "Can you be too generous?", next: 'q_too_generous' },
            { text: "Is generosity about money?", next: 'q_money' },
            { text: "What makes giving virtuous rather than foolish?", next: 'q_virtuous_giving' }
        ]
    },
    {
        id: 'magnanimity',
        title: 'Magnanimity & Pride',
        subtitle: 'Greatness of soul',
        readRef: { book: 4, chapter: 3 },
        questions: [
            { text: "Is pride a virtue or a vice?", next: 'q_pride' },
            { text: "What does a truly great-souled person look like?", next: 'q_great_soul' },
            { text: "Is humility better than magnanimity?", next: 'q_humility' }
        ]
    },
    {
        id: 'justice',
        title: 'Justice',
        subtitle: 'What we owe each other',
        readRef: { book: 5, chapter: 10 },
        questions: [
            { text: "Is justice about equality?", next: 'q_equality' },
            { text: "What is the difference between fairness and justice?", next: 'q_fairness' },
            { text: "Can the law be unjust?", next: 'q_law' }
        ]
    },
    {
        id: 'phronesis',
        title: 'Practical Wisdom',
        subtitle: 'The skill of living well',
        readRef: { book: 6, chapter: 12 },
        questions: [
            { text: "Is practical wisdom the same as being clever?", next: 'q_clever' },
            { text: "Can you have virtue without practical wisdom?", next: 'q_without' },
            { text: "How do you develop practical wisdom?", next: 'q_develop' }
        ]
    },
    {
        id: 'akrasia',
        title: 'Weakness of Will',
        subtitle: 'Why we fail to do what we know is right',
        readRef: { book: 7, chapter: 1 },
        questions: [
            { text: "If I know what\u2019s right, why don\u2019t I do it?", next: 'q_why_fail' },
            { text: "Is weakness of will the same as vice?", next: 'q_vs_vice' },
            { text: "Can weakness of will be overcome?", next: 'q_overcome' }
        ]
    },
    {
        id: 'friendship',
        title: 'Friendship',
        subtitle: 'Why we need others to flourish',
        readRef: { book: 8, chapter: 1 },
        questions: [
            { text: "What makes a true friend?", next: 'q_true_friend' },
            { text: "Can friendships based on usefulness be real?", next: 'q_utility' },
            { text: "Do happy people need friends?", next: 'q_need_friends' }
        ]
    },
    {
        id: 'selflove',
        title: 'Self-Love',
        subtitle: 'Is loving yourself a vice or a virtue?',
        readRef: { book: 9, chapter: 8 },
        questions: [
            { text: "Isn\u2019t self-love just selfishness?", next: 'q_selfish' },
            { text: "How is self-love connected to friendship?", next: 'q_connected' },
            { text: "What does healthy self-love look like?", next: 'q_healthy' }
        ]
    },
    {
        id: 'pleasure',
        title: 'Pleasure',
        subtitle: 'Its role in the good life',
        readRef: { book: 10, chapter: 4 },
        questions: [
            { text: "Is pleasure good or bad?", next: 'q_good_bad' },
            { text: "Are all pleasures equal?", next: 'q_equal' },
            { text: "What is the relationship between pleasure and virtue?", next: 'q_virtue_pleasure' }
        ]
    },
    {
        id: 'contemplation',
        title: 'The Contemplative Life',
        subtitle: 'Is thinking the highest activity?',
        readRef: { book: 10, chapter: 7 },
        questions: [
            { text: "Why does Aristotle value contemplation so highly?", next: 'q_why_value' },
            { text: "Is the contemplative life realistic?", next: 'q_realistic' },
            { text: "What about the life of action?", next: 'q_action' }
        ]
    },
    {
        id: 'politics',
        title: 'Ethics & Politics',
        subtitle: 'Why personal virtue needs good laws',
        readRef: { book: 10, chapter: 8 },
        questions: [
            { text: "Why can\u2019t I just be good on my own?", next: 'q_own' },
            { text: "What does ethics have to do with politics?", next: 'q_connection' },
            { text: "What role does education play in virtue?", next: 'q_education' }
        ]
    }
];

// ─── Topic Dialogue Trees ────────────────────────────────

const topicDialogues = {

// ═══ HAPPINESS ═══════════════════════════════════════════
happiness: {
    q_pleasure: {
        text: [
            "Many people believe so \u2014 that happiness is simply pleasure. But consider this: animals also pursue pleasure. If pleasure were the whole of happiness, the best human life would be no different from the life of grazing cattle.",
            "Does that seem right to you?"
        ],
        choices: [
            { text: "No \u2014 there must be more to it", next: 'deeper' },
            { text: "What\u2019s wrong with pleasure?", next: 'pleasure_defense' }
        ]
    },
    pleasure_defense: {
        text: [
            "Nothing is wrong with pleasure in itself! I am no enemy of enjoyment. But there is a difference between saying pleasure is good and saying it is the highest good.",
            "A musician takes pleasure in playing beautifully. But the pleasure follows from the excellence \u2014 not the other way around. Pleasure accompanies good activity; it does not replace it."
        ],
        choices: [
            { text: "So what is happiness then?", next: 'deeper' }
        ]
    },
    q_fortune: {
        text: [
            "A question that troubled me greatly. Consider: a good person who suffers terrible misfortune \u2014 the loss of children, exile, ruin \u2014 can we call them happy?",
            "I do not think so. One swallow does not make a summer, and one day does not make a person happy. Happiness requires a complete life."
        ],
        choices: [
            { text: "So happiness depends on luck?", next: 'fortune_luck' },
            { text: "That seems unfair", next: 'fortune_unfair' }
        ]
    },
    fortune_luck: {
        text: [
            "Not entirely. External goods are necessary conditions, but they are not sufficient. A wealthy fool is not happy. The foundation of happiness is virtuous activity \u2014 living well and doing well.",
            "But I am honest: some minimum of good fortune is needed. We are not disembodied minds. We need friends, some resources, and reasonable circumstances."
        ],
        choices: [
            { text: "How do we build happiness then?", next: 'deeper' }
        ]
    },
    fortune_unfair: {
        text: [
            "I understand the feeling. But notice: the truly virtuous person bears misfortune with dignity. They are resilient, not because they feel no pain, but because their character provides a stable foundation.",
            "They will never become truly miserable, because they will never do what is hateful and base. Still, I do not call them blessed in the midst of great suffering. Honesty demands that much."
        ],
        choices: [
            { text: "What is the foundation of happiness?", next: 'deeper' }
        ]
    },
    q_good_life: {
        text: [
            "The most important question one can ask. Let us think about it carefully.",
            "People pursue many things \u2014 pleasure, honour, wealth. But each of these is sought for the sake of something further. Is there something we pursue for its own sake, never as a means to something else?"
        ],
        choices: [
            { text: "Happiness?", next: 'deeper' },
            { text: "I\u2019m not sure such a thing exists", next: 'chain' }
        ]
    },
    chain: {
        text: [
            "If no final end exists, then our desires go on to infinity \u2014 each thing wanted for the sake of something else, endlessly. But that would make all desire empty and vain.",
            "There must be some end that is complete and self-sufficient \u2014 something that, when you have it, you lack nothing. Everyone calls this happiness, though they disagree about what it is."
        ],
        choices: [
            { text: "How do we figure out what it is?", next: 'deeper' }
        ]
    },
    deeper: {
        text: [
            "Here is my approach. A flute player\u2019s good lies in playing the flute well. A sculptor\u2019s good lies in sculpting well. If human beings have a distinctive function, then our good lies in performing that function excellently.",
            "What is our function? Not mere life \u2014 plants have that. Not perception \u2014 animals have that. What remains is the active life of the rational part of the soul.",
            "Happiness, then, is the activity of the soul in accordance with virtue, in a complete life."
        ],
        choices: [
            { text: "What do you mean by \u2018activity\u2019?", next: 'activity' },
            { text: "This makes sense \u2014 tell me more", next: 'conclusion' }
        ]
    },
    activity: {
        text: [
            "This is crucial. Happiness is not a feeling or a possession \u2014 it is an activity. Just as the Olympic crown goes not to the strongest but to those who compete, the good life belongs not to those who merely possess virtue but to those who exercise it.",
            "You cannot be happy asleep. Happiness requires action \u2014 living in a certain way, day after day, over a lifetime."
        ],
        choices: [
            { text: "Let\u2019s wrap this up", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Happiness is the activity of the soul in accordance with virtue, over a complete life. It is not a fleeting feeling but the shape of a well-lived life. It requires virtue as its core, some external goods as conditions, and time to unfold.",
            "This is the foundation upon which everything else in ethics rests."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Happiness (eudaimonia) is the highest good \u2014 pursued for its own sake",
            "It is not pleasure, honour, or wealth alone, though these play supporting roles",
            "Happiness is an activity \u2014 living well \u2014 not a feeling or possession",
            "It requires virtue, some external goods, and a complete life"
        ],
        quote: { text: "One swallow does not make a summer, nor does one day; and so too one day, or a short time, does not make a man blessed and happy.", cite: "Nicomachean Ethics, Book I, Ch. 7" }
    }
},

// ═══ HUMAN FUNCTION ══════════════════════════════════════
function: {
    q_purpose: {
        text: [
            "Consider: the eye has a function \u2014 to see. The hand has a function \u2014 to grasp. Every organ, every craft, has its characteristic work. Would it not be strange if the whole human being, composed of parts that each have functions, had no function of its own?"
        ],
        choices: [
            { text: "That does seem odd", next: 'search' },
            { text: "Maybe humans are too complex for a single purpose", next: 'objection' }
        ]
    },
    objection: {
        text: [
            "A thoughtful objection. I do not mean something narrow \u2014 not a single task, but a distinctive capacity. Just as a good eye is one that sees well, a good human is one who excels at what is distinctly human."
        ],
        choices: [
            { text: "What is distinctly human then?", next: 'search' }
        ]
    },
    q_reason: {
        text: [
            "You anticipate my conclusion. But let us reason our way there properly. We share life with plants, and perception with animals. What is left that belongs to us alone?",
            "It is the life of the rational soul \u2014 our capacity to think, deliberate, and act according to principle."
        ],
        choices: [
            { text: "But animals can be clever too", next: 'animals' },
            { text: "How does this connect to living well?", next: 'connection' }
        ]
    },
    animals: {
        text: [
            "Animals can learn and respond, yes. But they do not deliberate about what is good, formulate principles, or act on reasons they have examined. A dog can be trained; it cannot decide to change its own character.",
            "Reason in the fullest sense \u2014 the capacity to reflect on how to live \u2014 is distinctly ours."
        ],
        choices: [
            { text: "And this relates to happiness?", next: 'connection' }
        ]
    },
    q_function_happiness: {
        text: [
            "Directly. If the function of a harpist is to play the harp, then a good harpist plays the harp well. If the function of a human is rational activity, then a good human exercises reason well \u2014 with excellence, with virtue.",
            "The good for a human being is therefore the excellent exercise of our distinctive capacity. This is what I call happiness."
        ],
        choices: [
            { text: "So being good and being happy are connected?", next: 'connection' },
            { text: "This feels very abstract", next: 'practical' }
        ]
    },
    search: {
        text: [
            "We share nutrition and growth with plants. We share sensation and movement with animals. What remains? The active life of the part that has reason \u2014 our capacity to think, deliberate, and govern our actions by principle.",
            "This is the human function: not merely to live, but to live rationally."
        ],
        choices: [
            { text: "And how does this connect to the good life?", next: 'connection' }
        ]
    },
    connection: {
        text: [
            "If our function is rational activity, then our good is rational activity performed excellently \u2014 that is, in accordance with virtue. Just as a good knife is one that cuts well, a good human is one who lives and acts well according to reason.",
            "This is not just abstract philosophy. It means the good life is one where you exercise your best capacities \u2014 in your relationships, your decisions, your work, your thinking."
        ],
        choices: [
            { text: "What counts as \u2018well\u2019?", next: 'conclusion' },
            { text: "This is compelling", next: 'conclusion' }
        ]
    },
    practical: {
        text: [
            "Let me make it concrete. A person who reasons well about how to treat friends, how to spend money, how to face danger, how to manage anger \u2014 that person is exercising their human function excellently.",
            "The function argument is not about sitting in a chair and thinking. It is about living a fully human life, guided by reason, in all its practical dimensions."
        ],
        choices: [
            { text: "That makes more sense", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "The human function argument is this: since every being with a function has its good in performing that function well, and since the human function is rational activity, the human good is excellent rational activity \u2014 which is virtue.",
            "To live well is to fulfil what is best in our nature."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Every part of us has a function; the whole human being does too",
            "Our distinctive function is rational activity \u2014 thinking, deliberating, choosing",
            "Living well means exercising this function with excellence (virtue)",
            "The function argument connects human nature directly to ethics"
        ],
        quote: { text: "The function of man is an activity of soul in accordance with, or not without, rational principle.", cite: "Nicomachean Ethics, Book I, Ch. 7" }
    }
},

// ═══ VIRTUE & CHARACTER ══════════════════════════════════
virtue: {
    q_born: {
        text: [
            "Neither entirely, and both partially. We are born with the capacity for virtue, but not with virtue itself. No one is born courageous or just \u2014 but everyone is born with the potential to become so.",
            "Think of it this way: we are born with eyes, but we do not learn to see. The senses come fully formed. Virtues are different. How do you think we acquire them?"
        ],
        choices: [
            { text: "Through practice?", next: 'practice' },
            { text: "Through education and learning?", next: 'learning' }
        ]
    },
    q_teach: {
        text: [
            "Here I must make an important distinction. Intellectual virtues \u2014 like scientific knowledge and wisdom \u2014 can be taught through instruction. But moral virtues \u2014 courage, temperance, justice \u2014 cannot be acquired merely by listening to a lecture.",
            "How, then?"
        ],
        choices: [
            { text: "By doing them?", next: 'practice' },
            { text: "By having good role models?", next: 'models' }
        ]
    },
    q_habit: {
        text: [
            "You go straight to the heart of my teaching. In Greek, the word for moral virtue (\u00EAthik\u00EA) comes from the word for habit (\u00EAthos) \u2014 with only a slight change in spelling. This is not a coincidence.",
            "We become builders by building. We become musicians by playing music. And we become virtuous by practising virtue."
        ],
        choices: [
            { text: "But isn\u2019t that circular?", next: 'circular' },
            { text: "How do you start if you\u2019re not yet virtuous?", next: 'start' }
        ]
    },
    practice: {
        text: [
            "Exactly! We become courageous by doing courageous things. We become generous by giving. We become just by acting justly. The moral virtues come through habituation \u2014 through repeated practice until the right response becomes second nature.",
            "This is why childhood training matters so much. The habits we form early shape the character we carry for life."
        ],
        choices: [
            { text: "But how do you start?", next: 'start' },
            { text: "Can bad habits be reversed?", next: 'reverse' }
        ]
    },
    learning: {
        text: [
            "Education plays a role, but not through lectures alone. Moral virtue comes through doing. You cannot become courageous just by reading about courage. You must face frightening situations and learn to respond well.",
            "This is why I say virtue comes from habit, not from instruction."
        ],
        choices: [
            { text: "How does habit work exactly?", next: 'practice' }
        ]
    },
    models: {
        text: [
            "Role models matter enormously! We learn virtue partly by imitating those who already have it. A child raised among virtuous people absorbs their patterns of feeling and acting.",
            "But imitation must eventually become internalized. The truly virtuous person does not merely copy others \u2014 they act from their own settled character."
        ],
        choices: [
            { text: "How does character become settled?", next: 'practice' }
        ]
    },
    circular: {
        text: [
            "An excellent objection. But consider: is it circular to say we learn to build by building? The first acts are imperfect, guided by teachers and models. Through repetition, we develop the skill. Then the skilled builder builds from genuine expertise.",
            "Virtue works the same way. Early acts of courage may be shaky and guided. Through practice, they become natural \u2014 expressions of a stable character."
        ],
        choices: [
            { text: "That makes sense", next: 'conclusion' }
        ]
    },
    start: {
        text: [
            "You begin under guidance \u2014 from parents, teachers, laws. They direct you to act rightly before you fully understand why. Through repeated right action, you develop the disposition. Eventually, you act well because your character demands it.",
            "This is why good laws and good education are so critical. They provide the framework within which virtue can grow."
        ],
        choices: [
            { text: "Can character change later in life?", next: 'reverse' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    reverse: {
        text: [
            "With great difficulty. Just as health is easier to maintain than to restore, virtue is easier to build than to rebuild. But it is not impossible \u2014 if a person commits to sustained effort and better habits.",
            "This is why I insist on getting it right from the start. Character, once formed, is remarkably persistent."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Virtue is not innate and cannot be taught through words alone. It comes through habituation \u2014 through repeated practice of right action until it becomes second nature. Character is built like a craft: by doing, under guidance, until excellence becomes who you are."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "We are born with the capacity for virtue, not with virtue itself",
            "Moral virtue comes through habituation \u2014 repeated practice of good actions",
            "We become courageous by doing courageous things, just by acting justly",
            "Early training and guidance are essential; character, once formed, is persistent"
        ],
        quote: { text: "It makes no small difference, then, whether we form habits of one kind or of another from our very youth; it makes a very great difference, or rather all the difference.", cite: "Nicomachean Ethics, Book II, Ch. 1" }
    }
},

// ═══ THE GOLDEN MEAN ═════════════════════════════════════
mean: {
    q_always_middle: {
        text: [
            "Not a simple arithmetic middle \u2014 that would be absurd. The mean is relative to the person and the situation. The right amount of food for an athlete differs from the right amount for a beginner. What counts as courageous depends on the danger and your capacity.",
            "And some things have no mean at all. There is no moderate amount of murder or adultery. Some actions are base in themselves."
        ],
        choices: [
            { text: "How do you find the mean?", next: 'finding' },
            { text: "Give me an example", next: 'example' }
        ]
    },
    q_find_balance: {
        text: [
            "It is not easy \u2014 which is precisely why virtue is rare and praiseworthy. Finding the centre of a circle is harder than just picking any point on it.",
            "But there are practical guidelines. First: identify which extreme you are naturally drawn to, and lean away from it. Second: be wary of pleasure, for it clouds judgment. Third: attend to the particular circumstances rather than applying rigid rules."
        ],
        choices: [
            { text: "Can you give an example?", next: 'example' },
            { text: "Why is it so hard?", next: 'why_hard' }
        ]
    },
    q_relative: {
        text: [
            "Absolutely. This is one of my most important points. The mean is not the same for everyone. What is generous for a student is stingy for a wealthy person. What is courageous for a trained soldier differs from what is courageous for a civilian.",
            "The virtuous person perceives the right amount in each situation \u2014 the right action, at the right time, toward the right person, for the right reason."
        ],
        choices: [
            { text: "Doesn\u2019t that make it subjective?", next: 'subjective' },
            { text: "Show me how it works in practice", next: 'example' }
        ]
    },
    example: {
        text: [
            "Take courage. It is a mean between two extremes: cowardice (too much fear, too little confidence) and rashness (too little fear, too much confidence). The courageous person fears what is truly dangerous, but faces it when reason demands.",
            "Or generosity: between wastefulness (giving too much, to the wrong people, at the wrong times) and stinginess (giving too little). The generous person gives the right amount, to the right people, at the right time."
        ],
        choices: [
            { text: "This makes sense", next: 'conclusion' },
            { text: "But who decides what\u2019s \u2018right\u2019?", next: 'who_decides' }
        ]
    },
    finding: {
        text: [
            "Three practical rules. First: identify the extreme you are drawn to, and drag yourself toward the opposite. If you are naturally timid, practise boldness. Second: beware pleasure \u2014 we are poor judges when pleasure is involved. Third: look at the details of each situation.",
            "And attend to the reactions of wise people. The practically wise person perceives the mean almost by feel."
        ],
        choices: [
            { text: "Who is this practically wise person?", next: 'who_decides' }
        ]
    },
    subjective: {
        text: [
            "Not subjective \u2014 relative. There is a difference. The right amount of food for an athlete is objectively more than for a sedentary person. It is relative to real differences, not to whims.",
            "The mean is determined by reason \u2014 specifically, the reason of the practically wise person. It is the response that a person of good judgment would make in these circumstances."
        ],
        choices: [
            { text: "Let\u2019s wrap this up", next: 'conclusion' }
        ]
    },
    why_hard: {
        text: [
            "Because getting it right requires sensitivity to the particulars of each situation. There is no formula, no algorithm. It requires experience, good judgment, and well-trained emotional responses.",
            "This is why virtue cannot be reduced to following rules. It is more like a skill than a science."
        ],
        choices: [
            { text: "Makes sense. Let\u2019s summarize.", next: 'conclusion' }
        ]
    },
    who_decides: {
        text: [
            "The person of practical wisdom \u2014 the phronimos. This is the person whose experience and good character have given them reliable judgment. We recognize them by their track record of good decisions.",
            "It may seem circular, but all standards ultimately rest on exemplars. We learn what good music sounds like from good musicians. We learn what virtue looks like from virtuous people."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Virtue is a mean between two vices \u2014 one of excess, one of deficiency. But the mean is relative to the person and the situation, not a rigid midpoint. Finding it requires practical wisdom, experience, and well-formed character."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Virtue is a mean between excess and deficiency",
            "The mean is relative to the person and situation, not an arithmetic middle",
            "Some actions are always wrong \u2014 they have no mean",
            "Finding the mean requires practical wisdom and sensitivity to circumstances"
        ],
        quote: { text: "Virtue is a state of character concerned with choice, lying in a mean relative to us, this being determined by reason and in the way in which the man of practical wisdom would determine it.", cite: "Nicomachean Ethics, Book II, Ch. 6" }
    }
},

// ═══ COURAGE ═════════════════════════════════════════════
courage: {
    q_no_fear: {
        text: [
            "Not at all! A person who fears nothing is not courageous \u2014 they are rash, or perhaps simply mad. The courageous person does feel fear, but they face what must be faced because it is noble to do so.",
            "Courage is not fearlessness. It is the right response to fear."
        ],
        choices: [
            { text: "What should we fear?", next: 'what_fear' },
            { text: "So fear can be good?", next: 'good_fear' }
        ]
    },
    q_too_brave: {
        text: [
            "Yes! This is exactly the doctrine of the mean at work. Courage is a mean between cowardice (too much fear) and rashness (too little fear). The rash person rushes into danger without proper regard for the risk \u2014 that is not courage, it is recklessness.",
            "True courage involves clear-eyed assessment of danger, combined with the resolve to face it when honour demands."
        ],
        choices: [
            { text: "What should we be courageous about?", next: 'what_fear' },
            { text: "How do you tell courage from rashness?", next: 'distinction' }
        ]
    },
    q_about_what: {
        text: [
            "In the strictest sense, courage concerns the greatest dangers \u2014 above all, death. And the noblest form of courage faces death in battle, where the danger is greatest and the cause most honourable.",
            "But more broadly, courage applies to any situation where fear might prevent you from doing what is right."
        ],
        choices: [
            { text: "Only death in battle?", next: 'broader' },
            { text: "What does courage look like in daily life?", next: 'daily' }
        ]
    },
    what_fear: {
        text: [
            "Some fears are appropriate and even admirable. A good person fears disgrace, and rightly so. Not to fear disgrace would make you shameless, not courageous.",
            "The greatest test of courage is the fear of death, especially death in a noble cause. But the principle extends: courage is facing what is frightening for the sake of what is noble."
        ],
        choices: [
            { text: "What about everyday courage?", next: 'daily' }
        ]
    },
    good_fear: {
        text: [
            "Very much so. Fear of disgrace is not just acceptable \u2014 it is admirable. It shows you care about what matters. And some dangers genuinely should be feared. The person who fears nothing at all has no judgment.",
            "Courage is not about eliminating fear but about acting well despite it."
        ],
        choices: [
            { text: "What does courage look like in practice?", next: 'daily' }
        ]
    },
    distinction: {
        text: [
            "The courageous person acts for the right reason \u2014 because it is noble and honourable. The rash person acts from overconfidence or bravado. The difference shows especially when things go badly: the courageous person endures suffering steadily, while the rash person often collapses when real danger arrives."
        ],
        choices: [
            { text: "Can we develop courage?", next: 'daily' }
        ]
    },
    broader: {
        text: [
            "The strictest form concerns mortal danger, yes. But the principle is broader. Standing firm against social pressure, speaking truth to power, enduring hardship for a noble cause \u2014 these all involve courage.",
            "The common thread is: facing what is difficult or frightening because it is the right thing to do."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    daily: {
        text: [
            "Courage in daily life means speaking the truth when it is uncomfortable, standing by your principles under pressure, and enduring necessary hardship without complaint. It means doing the right thing even when it costs you.",
            "And like all virtues, it is developed through practice. You become courageous by doing courageous things \u2014 starting with small acts of bravery and building from there."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Courage is the mean between cowardice and rashness. It involves feeling appropriate fear but facing danger for the sake of what is noble. It is not fearlessness but the right relationship with fear."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Courage is not the absence of fear but the right response to it",
            "It is a mean between cowardice (too much fear) and rashness (too little)",
            "The courageous person acts for the sake of what is noble",
            "Courage extends beyond battle to any situation requiring moral resolve"
        ],
        quote: { text: "The courageous man endures and fears the right things, for the right reason, in the right way, and at the right time.", cite: "Nicomachean Ethics, Book III, Ch. 7" }
    }
},

// ═══ TEMPERANCE ══════════════════════════════════════════
temperance: {
    q_avoid: {
        text: [
            "Not at all. I am not an ascetic. Pleasures are a natural part of life, and the temperate person enjoys them. But they enjoy the right pleasures, in the right amounts, at the right times.",
            "Temperance is not about denying yourself pleasure. It is about not being controlled by it."
        ],
        choices: [
            { text: "What pleasures does temperance concern?", next: 'which_pleasures' },
            { text: "How is that different from self-denial?", next: 'difference' }
        ]
    },
    q_denial: {
        text: [
            "A crucial distinction. The person who avoids all pleasure and takes no enjoyment in anything is not temperate \u2014 they are insensible. That, too, is an extreme to avoid.",
            "The temperate person enjoys bodily pleasures moderately. They are not tormented by desire for what they lack, nor distressed by abstaining from excess. Their relationship with pleasure is easy and natural."
        ],
        choices: [
            { text: "What kinds of pleasure are we talking about?", next: 'which_pleasures' }
        ]
    },
    q_hard: {
        text: [
            "Because pleasure is powerful and begins training us from childhood. It is woven into our lives so deeply that we can hardly separate our judgments from it. As I often say, we must be on guard against pleasure as the elders of Troy were on guard against Helen.",
            "The pull of immediate gratification is strong. Temperance requires that reason, not appetite, governs our choices."
        ],
        choices: [
            { text: "How do we develop temperance?", next: 'develop' },
            { text: "What exactly is temperance about?", next: 'which_pleasures' }
        ]
    },
    which_pleasures: {
        text: [
            "Temperance concerns bodily pleasures specifically \u2014 the pleasures of touch and taste. Food, drink, and physical gratification. No one is called intemperate for excessive love of music or mathematics.",
            "The intemperate person craves these pleasures beyond what is reasonable and suffers when they cannot satisfy those cravings. The temperate person desires them moderately and is not distressed by their absence."
        ],
        choices: [
            { text: "How do you develop this moderation?", next: 'develop' }
        ]
    },
    difference: {
        text: [
            "The self-denying person fights against their desires and suffers. The temperate person has trained their desires so that they do not crave excess in the first place. There is no inner struggle because their appetites are already aligned with reason.",
            "This is the difference between continence and temperance. The continent person resists temptation; the temperate person is not even tempted by excess."
        ],
        choices: [
            { text: "How do you reach that point?", next: 'develop' }
        ]
    },
    develop: {
        text: [
            "Through practice and habituation, starting young. By repeatedly choosing moderate pleasures, your appetites gradually align with reason. The process is like training a horse: at first it resists, but over time it learns to respond to gentle guidance.",
            "Good laws and education provide the structure. Personal effort does the rest."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Temperance is the mean between self-indulgence and insensibility. The temperate person enjoys bodily pleasures moderately, without being enslaved by appetite. It is not about denial but about a well-ordered relationship with pleasure."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Temperance is not self-denial but moderate enjoyment of pleasure",
            "It concerns bodily pleasures \u2014 food, drink, physical gratification",
            "The temperate person\u2019s desires are aligned with reason, not at war with it",
            "It is developed through practice until moderation becomes natural"
        ],
        quote: { text: "The temperate man craves the things he ought, as he ought, and when he ought; and this is what rational principle directs.", cite: "Nicomachean Ethics, Book III, Ch. 12" }
    }
},

// ═══ GENEROSITY ══════════════════════════════════════════
generosity: {
    q_too_generous: {
        text: [
            "Absolutely. This is the vice of prodigality \u2014 wastefulness. The prodigal person gives to the wrong people, at the wrong times, in the wrong amounts. They spend without thought and eventually have nothing left to give.",
            "Generosity is a mean between prodigality and stinginess."
        ],
        choices: [
            { text: "What makes giving virtuous?", next: 'virtuous' },
            { text: "Is stinginess worse than wastefulness?", next: 'comparison' }
        ]
    },
    q_money: {
        text: [
            "Primarily, yes. Generosity concerns the giving and receiving of wealth \u2014 especially giving. But it is not about the amount. A poor person who gives a little from what they have can be more generous than a rich person who gives much.",
            "What matters is the disposition: the generous person gives readily and takes pleasure in giving."
        ],
        choices: [
            { text: "What makes giving virtuous rather than foolish?", next: 'virtuous' }
        ]
    },
    q_virtuous_giving: {
        text: [
            "The generous person gives the right amounts, to the right people, at the right times, and takes pleasure in doing so. They do not give to impress others or out of guilt, but because giving is noble.",
            "And importantly: they are careful about getting wealth too. You cannot be generous without resources to give."
        ],
        choices: [
            { text: "Can you be generous without money?", next: 'without_money' },
            { text: "What about the extremes?", next: 'comparison' }
        ]
    },
    virtuous: {
        text: [
            "Three marks of virtuous giving. First: it goes to the right people \u2014 not to flatterers or to buy influence, but to those who deserve help. Second: it comes at the right time and in the right amount. Third: the giver takes genuine pleasure in it.",
            "The generous person does not agonize over money. They see wealth as a tool for noble action, not as an end in itself."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    comparison: {
        text: [
            "Interestingly, prodigality is closer to virtue than stinginess. The prodigal person at least has the impulse to give \u2014 they simply lack judgment. With maturity, they can be corrected. The stingy person\u2019s error is deeper: they cling to wealth and resist giving altogether.",
            "Stinginess is harder to cure because it is rooted in fear."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    without_money: {
        text: [
            "Generosity primarily concerns material resources, because that is where giving and receiving are most concrete. But the underlying disposition \u2014 openness, willingness to share, pleasure in benefiting others \u2014 can express itself in many ways.",
            "Still, I am realistic: some minimum of resources is needed to exercise this virtue fully."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Generosity is the mean between prodigality and stinginess. It concerns giving and receiving wealth, but what matters is not the amount but the disposition \u2014 giving to the right people, at the right times, with genuine pleasure."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Generosity is a mean between wastefulness and stinginess",
            "It concerns giving the right amount, to the right people, at the right time",
            "The generous person takes pleasure in giving and sees wealth as a tool",
            "Prodigality is closer to virtue than stinginess and easier to correct"
        ],
        quote: { text: "The generous man will give to the right people, the right amounts, at the right time, with all the other qualifications that accompany right giving.", cite: "Nicomachean Ethics, Book IV, Ch. 1" }
    }
},

// ═══ MAGNANIMITY ═════════════════════════════════════════
magnanimity: {
    q_pride: {
        text: [
            "It depends on what kind of pride. If a person of genuine excellence knows their own worth and claims the honour they deserve \u2014 that is magnanimity, and it is a virtue. If a person without merit claims great honour \u2014 that is vanity, and it is a vice.",
            "The opposite extreme is excessive humility: the person of genuine worth who underestimates themselves and shrinks from what they deserve."
        ],
        choices: [
            { text: "What does the magnanimous person look like?", next: 'portrait' },
            { text: "Is humility not a virtue?", next: 'humility_response' }
        ]
    },
    q_great_soul: {
        text: [
            "The magnanimous person is concerned with great things and believes themselves worthy of them \u2014 and is right to do so. They are dignified without being arrogant. They care about honour from good people but are indifferent to flattery.",
            "They speak their mind openly, are slow to anger but formidable when roused, and do not bear grudges."
        ],
        choices: [
            { text: "This sounds like arrogance", next: 'arrogance' },
            { text: "Tell me more about this character", next: 'more' }
        ]
    },
    q_humility: {
        text: [
            "An interesting question. In my framework, excessive humility is actually a deficiency \u2014 a failure to claim what you truly deserve. If a genuinely worthy person habitually undervalues themselves, they miss opportunities for noble action.",
            "The key is accuracy: knowing your true worth, neither inflating it nor diminishing it."
        ],
        choices: [
            { text: "What does the magnanimous person look like?", next: 'portrait' }
        ]
    },
    portrait: {
        text: [
            "The magnanimous person is concerned with honour and dishonour. They confer benefits gladly but are ashamed to receive them. They are open about their loves and hates, because concealment comes from fear.",
            "They do not fuss over small matters. Their movements are unhurried, their voice deep, their speech measured. They are, in a word, dignified."
        ],
        choices: [
            { text: "I can see why some find this troubling", next: 'arrogance' },
            { text: "This is fascinating \u2014 let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    humility_response: {
        text: [
            "Some later traditions valued humility highly. But in my view, a person who truly is excellent should recognize that excellence. False modesty is a kind of dishonesty about yourself.",
            "Of course, the person who claims greatness without deserving it is merely vain. Magnanimity requires that the self-assessment be accurate."
        ],
        choices: [
            { text: "What does this person look like?", next: 'portrait' }
        ]
    },
    arrogance: {
        text: [
            "I understand the concern. But the magnanimous person is not arrogant \u2014 arrogance is claiming more than you deserve. The magnanimous person claims exactly what they deserve, no more.",
            "They are actually quite generous and gracious. They help others freely and do not remind people of favours done. Their greatness is quiet, not loud."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    more: {
        text: [
            "The magnanimous person does not care much about small honours. They face great dangers willingly because they consider few things worth anxiety. They are truthful \u2014 except when they ironically downplay themselves to ordinary people.",
            "This is perhaps my most controversial portrait. But I believe excellence should be acknowledged, not hidden."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Magnanimity is accurate self-knowledge combined with genuine excellence. The great-souled person knows their worth, claims appropriate honour, and bears themselves with dignity. It is a mean between vanity and excessive humility."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Magnanimity is knowing your true worth and claiming appropriate honour",
            "It requires genuine excellence \u2014 without it, the claim is mere vanity",
            "Excessive humility is also a defect: undervaluing your real capacities",
            "The magnanimous person is generous, honest, dignified, and unhurried"
        ],
        quote: { text: "He is the sort of man to confer benefits, but he is ashamed of receiving them; for the one is the mark of a superior, the other of an inferior.", cite: "Nicomachean Ethics, Book IV, Ch. 3" }
    }
},

// ═══ JUSTICE ═════════════════════════════════════════════
justice: {
    q_equality: {
        text: [
            "In a sense, but not simple equality. I distinguish two kinds. Distributive justice divides goods proportionally \u2014 according to merit, not equally. The person who contributes more to a partnership deserves a greater share.",
            "Corrective justice, on the other hand, treats people as equals regardless of status \u2014 if you wrong someone, the harm must be corrected whether you are rich or poor."
        ],
        choices: [
            { text: "Why not equal shares for everyone?", next: 'why_not_equal' },
            { text: "What about fairness?", next: 'equity' }
        ]
    },
    q_fairness: {
        text: [
            "You touch on something important. Justice operates through general rules, but general rules cannot anticipate every situation. This is where equity comes in \u2014 the correction of law where it is defective owing to its generality.",
            "The equitable person does not insist rigidly on their legal rights but adjusts to what the situation truly demands."
        ],
        choices: [
            { text: "So equity goes beyond strict justice?", next: 'equity' },
            { text: "Can the law itself be unjust?", next: 'unjust_law' }
        ]
    },
    q_law: {
        text: [
            "Law aims at the common good. When it does so properly, obeying the law is just. But laws are general, and life is particular. A law that applies well in most cases may produce unjust results in specific ones.",
            "This is why we need equity \u2014 the ability to correct the letter of the law in the spirit of justice."
        ],
        choices: [
            { text: "Tell me more about equity", next: 'equity' },
            { text: "What about the two types of justice?", next: 'types' }
        ]
    },
    why_not_equal: {
        text: [
            "Because equal distribution to unequal contributors is itself unjust. If two people build a house and one does three-quarters of the work, giving them equal pay is unfair to the one who worked more.",
            "Justice is proportion, not simple equality. But in corrective matters \u2014 contracts, injuries \u2014 the prior status of the parties does not matter. The harm itself must be rectified."
        ],
        choices: [
            { text: "Tell me about equity", next: 'equity' }
        ]
    },
    types: {
        text: [
            "Distributive justice concerns how goods, honours, and burdens are divided among members of a community \u2014 proportionally, according to merit. Corrective justice concerns transactions between individuals \u2014 restoring what was taken, repairing what was damaged.",
            "Both are essential. A just community needs both fair distribution and fair redress."
        ],
        choices: [
            { text: "And equity ties it together?", next: 'equity' }
        ]
    },
    equity: {
        text: [
            "Equity is the finest form of justice. It corrects the inevitable shortcomings of general rules. The equitable person bends the rule to fit the case, not out of weakness but out of superior judgment.",
            "Think of it like a flexible ruler used to measure irregular stones \u2014 it adapts its shape to the object. Equity adapts justice to the particular situation."
        ],
        choices: [
            { text: "Beautiful analogy. Let\u2019s summarize.", next: 'conclusion' }
        ]
    },
    unjust_law: {
        text: [
            "A law that does not aim at the common good, or that systematically advantages one group at the expense of another, falls short of true justice. The legislator should aim at the good of the whole community.",
            "And even a well-intentioned law needs equity to handle the cases it could not foresee."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Justice involves both fair distribution (proportional to merit) and fair correction (equal treatment in redressing wrongs). Equity perfects justice by adapting general rules to particular cases, like a flexible ruler that measures irregular shapes."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Distributive justice allocates goods proportionally, according to merit",
            "Corrective justice treats parties as equals when redressing wrongs",
            "Equity corrects the law where its generality produces unjust results",
            "Justice is proportion, not simple equality"
        ],
        quote: { text: "The equitable is just, but not the legally just, but a correction of legal justice.", cite: "Nicomachean Ethics, Book V, Ch. 10" }
    }
},

// ═══ PRACTICAL WISDOM ════════════════════════════════════
phronesis: {
    q_clever: {
        text: [
            "Cleverness is the ability to find effective means to any end \u2014 good or bad. A clever thief uses cleverness, but we would not call them wise. Practical wisdom includes cleverness but adds something essential: a correct perception of what is truly good.",
            "The practically wise person not only knows how to achieve their goals but pursues the right goals."
        ],
        choices: [
            { text: "How do they know the right goals?", next: 'right_goals' },
            { text: "Is practical wisdom different from theoretical wisdom?", next: 'vs_theory' }
        ]
    },
    q_without: {
        text: [
            "Strictly speaking, no. The moral virtues tell you what to aim at \u2014 courage aims at what is noble, generosity at proper giving. But without practical wisdom, you cannot determine the right action in particular circumstances.",
            "You might have the disposition to be generous but give to the wrong person at the wrong time. Practical wisdom is what makes the other virtues effective."
        ],
        choices: [
            { text: "So wisdom coordinates the virtues?", next: 'coordination' },
            { text: "Can you have wisdom without virtue?", next: 'without_virtue' }
        ]
    },
    q_develop: {
        text: [
            "Not through study alone. Practical wisdom requires experience \u2014 long experience of life. This is why young people can become brilliant mathematicians but are rarely wise. Mathematics requires no experience of life, but wisdom does.",
            "You develop it through deliberating, deciding, acting, observing the results, and refining your judgment over time."
        ],
        choices: [
            { text: "Why can\u2019t it be taught in a classroom?", next: 'not_taught' },
            { text: "What role does experience play?", next: 'experience' }
        ]
    },
    right_goals: {
        text: [
            "Through virtue. Good character shapes your perception of what matters. The temperate person perceives that moderation is worth pursuing; the courageous person perceives that noble action is worth the risk.",
            "Practical wisdom and moral virtue are inseparable: virtue provides the right ends, wisdom provides the right means."
        ],
        choices: [
            { text: "So they depend on each other?", next: 'coordination' }
        ]
    },
    vs_theory: {
        text: [
            "Yes. Theoretical wisdom (sophia) concerns eternal truths \u2014 mathematics, metaphysics, the nature of the cosmos. Practical wisdom (phronesis) concerns human affairs \u2014 what is good and bad for human beings in particular situations.",
            "Both are excellences of reason, but they operate in different domains. You can be a brilliant physicist and terrible at managing your own life."
        ],
        choices: [
            { text: "Which matters more?", next: 'coordination' }
        ]
    },
    coordination: {
        text: [
            "Practical wisdom is the master virtue of practical life. It perceives what each situation demands and orchestrates the other virtues accordingly. Without it, the virtues can misfire \u2014 courage becomes rashness, generosity becomes wastefulness.",
            "And wisdom itself requires virtue: a bad character distorts one\u2019s perception of what is good. They are, in truth, a unity."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    without_virtue: {
        text: [
            "Without virtue, you get cleverness \u2014 the ability to achieve ends effectively, but potentially terrible ends. The cunning manipulator is clever but not wise. Wisdom necessarily includes a correct orientation toward genuine human goods."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    not_taught: {
        text: [
            "Because practical wisdom concerns particulars, not universals. You can teach general principles, but no principle tells you exactly what to do in this specific situation. That requires judgment \u2014 a kind of perception that comes only from experience.",
            "It is more like a skill than a science."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    experience: {
        text: [
            "Experience teaches you to perceive the salient features of a situation \u2014 what matters, what can be ignored, what the likely consequences of different actions are. A doctor with decades of practice sees things an intern cannot.",
            "The same is true for ethics. The wise person has an experienced eye for human situations."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Practical wisdom is the intellectual virtue that governs ethical life. It perceives what is good in particular situations and finds the right means to achieve it. It requires both good character and long experience, and it is inseparable from moral virtue."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Practical wisdom (phronesis) differs from cleverness: it includes correct moral aims",
            "It is inseparable from moral virtue \u2014 each requires the other",
            "It develops through experience, not classroom instruction alone",
            "It is the master virtue that coordinates all other virtues in action"
        ],
        quote: { text: "It is not possible to be good in the strict sense without practical wisdom, nor practically wise without moral virtue.", cite: "Nicomachean Ethics, Book VI, Ch. 13" }
    }
},

// ═══ WEAKNESS OF WILL ════════════════════════════════════
akrasia: {
    q_why_fail: {
        text: [
            "This puzzled my teacher Socrates, who believed that no one does wrong knowingly. I disagree. It is a plain fact that people act against their own better judgment, overcome by anger, desire, or passion.",
            "The question is: what happens to their knowledge in that moment?"
        ],
        choices: [
            { text: "They forget what they know?", next: 'forget' },
            { text: "They know but don\u2019t really believe it?", next: 'not_believe' }
        ]
    },
    q_vs_vice: {
        text: [
            "An important distinction. The vicious person believes they are pursuing what is good. They have the wrong values. The weak-willed person has the right values but fails to act on them.",
            "In a strange way, weakness of will is better than vice \u2014 because the weak person\u2019s principles are sound. They just cannot live up to them."
        ],
        choices: [
            { text: "Why is it better?", next: 'better' },
            { text: "Can it be overcome?", next: 'overcoming' }
        ]
    },
    q_overcome: {
        text: [
            "Yes, and this is the good news. Weakness of will can be cured because the person\u2019s fundamental orientation is correct. They know what is right \u2014 they lack the strength of character to follow through consistently.",
            "Vice, by contrast, is much harder to cure because the person does not even see their error."
        ],
        choices: [
            { text: "How does one overcome it?", next: 'overcoming' },
            { text: "What exactly happens when will fails?", next: 'mechanism' }
        ]
    },
    forget: {
        text: [
            "In a sense, yes. The knowledge is there in principle, but passion pushes it to the background. Think of a person who knows that sweets are bad for them but, in the presence of a cake, the general knowledge recedes and the immediate appetite dominates.",
            "They \u2018have\u2019 the knowledge the way a sleeping person or a drunk has it \u2014 it is present but not active."
        ],
        choices: [
            { text: "How do we keep it active?", next: 'overcoming' }
        ]
    },
    not_believe: {
        text: [
            "Close. I would say they know the universal principle (\u2018excess is harmful\u2019) but fail to apply it to the particular case in front of them. The immediate desire or passion prevents the practical syllogism from completing.",
            "The conclusion \u2014 \u2018therefore I should not do this\u2019 \u2014 never forms properly because emotion intervenes."
        ],
        choices: [
            { text: "How do we fix this?", next: 'overcoming' }
        ]
    },
    better: {
        text: [
            "Because the weak-willed person can be saved. Their principles are correct; they need only to strengthen their character. Through practice and habituation, they can develop the firmness to act on what they know.",
            "The vicious person is much further from virtue because they must first change their very understanding of what is good."
        ],
        choices: [
            { text: "How does one strengthen their will?", next: 'overcoming' }
        ]
    },
    mechanism: {
        text: [
            "Here is what happens. You know the general rule: \u2018Excess is harmful.\u2019 You also know the particular fact: \u2018This is excessive.\u2019 Normally, these combine to produce action: \u2018Therefore, I should refrain.\u2019",
            "But strong passion disrupts the connection. The appetite overwhelms the practical reasoning, and you act as if you did not know \u2014 even though, in a calm moment, you clearly do."
        ],
        choices: [
            { text: "How do we overcome this?", next: 'overcoming' }
        ]
    },
    overcoming: {
        text: [
            "Through habituation, as with all virtue. By repeatedly choosing to act on principle rather than passion, you strengthen the connection between knowledge and action. The more you practice, the harder it becomes for desire to override reason.",
            "This is also why good surroundings matter. It is easier to resist temptation in a community that supports virtue than in one that celebrates excess."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Weakness of will is acting against one\u2019s own better judgment, overwhelmed by passion. It differs from vice because the person\u2019s values are correct. It can be overcome through habituation \u2014 strengthening the link between knowledge and action."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Weakness of will means acting against your own better judgment",
            "It differs from vice: the weak person knows what\u2019s right but fails to do it",
            "Passion disrupts the connection between general knowledge and particular action",
            "It can be cured through practice, habituation, and supportive circumstances"
        ],
        quote: { text: "The incontinent man, knowing that what he does is bad, does it as a result of passion, while the continent man, knowing that his appetites are bad, refuses on account of his rational principle to follow them.", cite: "Nicomachean Ethics, Book VII, Ch. 1" }
    }
},

// ═══ FRIENDSHIP ══════════════════════════════════════════
friendship: {
    q_true_friend: {
        text: [
            "The truest friendship exists between people who are good and alike in virtue. They wish well to each other for the other\u2019s own sake \u2014 not for any benefit or pleasure they provide, but because of who they are.",
            "Such friendships are rare, take time to develop, and are remarkably stable."
        ],
        choices: [
            { text: "What about friendships based on shared interests?", next: 'pleasure_friendship' },
            { text: "Why are they so rare?", next: 'rare' }
        ]
    },
    q_utility: {
        text: [
            "They are real, but limited. I distinguish three types of friendship: those based on utility, those based on pleasure, and those based on virtue. Utility-friendships dissolve when the usefulness ends. Pleasure-friendships fade when tastes change.",
            "Both are genuine forms of friendship, but neither is complete."
        ],
        choices: [
            { text: "What makes the highest form different?", next: 'highest' },
            { text: "Are utility friendships bad?", next: 'not_bad' }
        ]
    },
    q_need_friends: {
        text: [
            "Absolutely, yes. Some say the supremely happy person is self-sufficient and needs no one. But I disagree strongly. Happiness is an activity, and many of the best activities are shared.",
            "A virtuous friend is like a mirror in which we see goodness made real. Through perceiving our friend\u2019s virtuous activity, we deepen our perception of our own."
        ],
        choices: [
            { text: "Why can\u2019t the happy person be self-sufficient?", next: 'not_solitary' },
            { text: "That\u2019s a beautiful idea", next: 'highest' }
        ]
    },
    pleasure_friendship: {
        text: [
            "Friendships of pleasure are common among the young, who are guided by emotion. They enjoy each other\u2019s company, share interests, find delight together. But when interests change, the friendship often fades.",
            "This is not a defect \u2014 it is simply the nature of this type of bond. It is good but incomplete."
        ],
        choices: [
            { text: "What is the highest form?", next: 'highest' }
        ]
    },
    not_bad: {
        text: [
            "Not at all. Business partners, professional colleagues, neighbours \u2014 these relationships serve genuine purposes. They just do not reach the depth of virtue-friendship. They are friendships of a limited kind, and there is nothing wrong with that.",
            "The problem comes only when we mistake them for the highest kind."
        ],
        choices: [
            { text: "What is the highest kind?", next: 'highest' }
        ]
    },
    rare: {
        text: [
            "Because good people are rare, and because virtue-friendship requires time and intimacy. You cannot know a person\u2019s character quickly. Many shared meals, shared trials, shared conversations are needed before such trust develops.",
            "This is also why you can have many acquaintances but few true friends."
        ],
        choices: [
            { text: "Tell me about virtue-friendship", next: 'highest' }
        ]
    },
    not_solitary: {
        text: [
            "Humans are social beings \u2014 political animals, as I say. No one would choose to live without friends, even if they had all other goods. Solitary happiness is incomplete.",
            "Moreover, the good person perceives their own existence as good, and this perception is enhanced through sharing life with a virtuous friend."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    highest: {
        text: [
            "The perfect friendship is between people who are good and who wish well to each other for the other\u2019s own sake. It includes the goods of the other two types: virtue-friends are also useful and pleasant to each other.",
            "This friendship is stable because genuine goodness does not change easily. And it is one of the greatest goods in a human life."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Friendship is essential to the good life. The highest form \u2014 between people who are good and wish each other well for the other\u2019s sake \u2014 includes the benefits of utility and pleasure while transcending both. Even the happiest person needs friends for shared virtuous activity."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Three types: utility (fragile), pleasure (variable), and virtue (enduring)",
            "Perfect friendship is between good people who wish each other well for the other\u2019s sake",
            "It includes the benefits of the other two types",
            "Even the happy need friends \u2014 no one would choose life without them"
        ],
        quote: { text: "Without friends no one would choose to live, though he had all other goods.", cite: "Nicomachean Ethics, Book VIII, Ch. 1" }
    }
},

// ═══ SELF-LOVE ═══════════════════════════════════════════
selflove: {
    q_selfish: {
        text: [
            "Most people think so. But consider: when we condemn \u2018self-lovers,\u2019 we mean people who grasp for more than their share of money, honours, and bodily pleasures. They gratify their worst parts.",
            "But the good person who loves what is best in themselves \u2014 their reason, their virtue \u2014 is also a self-lover, in the truest sense."
        ],
        choices: [
            { text: "So there are two kinds of self-love?", next: 'two_kinds' },
            { text: "That sounds like a paradox", next: 'paradox' }
        ]
    },
    q_connected: {
        text: [
            "Deeply connected. The relationship a person has with their friends mirrors the relationship they have with themselves. The good person\u2019s soul is in harmony: they wish themselves well, enjoy their own company, and act consistently.",
            "These are the same qualities we look for in friendship. So the good person is first a friend to themselves, and this overflows into friendship with others."
        ],
        choices: [
            { text: "What if someone doesn\u2019t like themselves?", next: 'dislike' },
            { text: "That\u2019s really interesting", next: 'two_kinds' }
        ]
    },
    q_healthy: {
        text: [
            "Healthy self-love means assigning yourself the noblest actions and gratifying the most authoritative part of your soul \u2014 reason. The person who does this is truly a friend to themselves.",
            "Paradoxically, such a person is also the most generous. They willingly give up money, honours, even their life for friends \u2014 choosing what is noble over what is materially advantageous."
        ],
        choices: [
            { text: "How can self-love lead to sacrifice?", next: 'sacrifice' },
            { text: "Are there two kinds of self-love?", next: 'two_kinds' }
        ]
    },
    two_kinds: {
        text: [
            "Exactly. Vulgar self-love gratifies appetite, vanity, and greed \u2014 rightly condemned. Noble self-love means loving what is best in yourself: your capacity for reason, virtue, and noble action.",
            "The good person who acts virtuously is, in the deepest sense, a friend to themselves. Their soul is in harmony, not at war."
        ],
        choices: [
            { text: "How does this lead to generosity?", next: 'sacrifice' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    paradox: {
        text: [
            "It does seem paradoxical. But think of it this way: the person who loves their best self naturally wants to do what is noble. And noble action often means benefiting others, even at a cost to oneself.",
            "True self-love and true generosity are not opposed \u2014 they spring from the same source."
        ],
        choices: [
            { text: "Tell me about the sacrifice angle", next: 'sacrifice' }
        ]
    },
    dislike: {
        text: [
            "The bad person is actually at war with themselves. Their soul is divided: part wants what reason says is good, part craves what appetite demands. They are dissatisfied with their own company and seek distraction.",
            "This inner conflict makes true friendship impossible, because the template for friendship is the relationship with oneself."
        ],
        choices: [
            { text: "So inner harmony comes first?", next: 'two_kinds' }
        ]
    },
    sacrifice: {
        text: [
            "The truly self-loving person willingly gives up material goods for their friends \u2014 because they choose the nobler part. In giving up money, they gain nobility. In risking their life, they choose a brief moment of great beauty over a long stretch of mediocrity.",
            "They \u2018assign themselves the greater good\u2019 \u2014 the good of the soul, not of the body or the wallet."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "There are two kinds of self-love. Vulgar self-love gratifies the worst in us and is rightly condemned. Noble self-love means loving our capacity for reason and virtue \u2014 and paradoxically, it produces the most generous and self-sacrificing character."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Vulgar self-love is selfishness; noble self-love is loving what is best in yourself",
            "The good person is first a friend to themselves \u2014 their soul is in harmony",
            "Noble self-love leads to generosity, not greed",
            "Inner harmony is the template for all true friendship"
        ],
        quote: { text: "The good man should be a lover of self, for he will both himself profit by doing noble acts, and will benefit his fellows.", cite: "Nicomachean Ethics, Book IX, Ch. 8" }
    }
},

// ═══ PLEASURE ════════════════════════════════════════════
pleasure: {
    q_good_bad: {
        text: [
            "Some philosophers of my time argued that pleasure is the greatest good. Others argued it is entirely bad. I think both are wrong.",
            "Pleasure is a natural accompaniment of unimpeded activity. When you exercise your capacities well and without hindrance, pleasure follows. It is like the bloom of youth on a healthy body \u2014 a sign of flourishing, not the flourishing itself."
        ],
        choices: [
            { text: "So pleasure is a good sign?", next: 'good_sign' },
            { text: "What about harmful pleasures?", next: 'harmful' }
        ]
    },
    q_equal: {
        text: [
            "Emphatically not. The pleasures of contemplation differ from the pleasures of eating, which differ from the pleasures of gambling. They differ not just in intensity but in kind.",
            "The pleasures of the virtuous person are the truest pleasures. The pleasures of the base person may feel strong but are mixed with pain and ultimately unsatisfying."
        ],
        choices: [
            { text: "How do you distinguish good from bad pleasures?", next: 'distinguish' },
            { text: "Why are virtuous pleasures better?", next: 'good_sign' }
        ]
    },
    q_virtue_pleasure: {
        text: [
            "They are intimately connected. The truly virtuous person takes pleasure in virtuous action. If you find justice burdensome and generosity painful, you are not yet truly virtuous \u2014 you are merely continent.",
            "Pleasure is the test of character: what you enjoy reveals who you are."
        ],
        choices: [
            { text: "Pleasure reveals character?", next: 'reveals' },
            { text: "What about people who enjoy bad things?", next: 'harmful' }
        ]
    },
    good_sign: {
        text: [
            "Precisely. Pleasure completes good activity the way beauty completes health. When you exercise a capacity excellently, pleasure arises naturally. The mathematician delights in proofs; the musician delights in playing well.",
            "This tells us something important: the good life is not grim. The person who truly lives well takes deep pleasure in doing so."
        ],
        choices: [
            { text: "But what about guilty pleasures?", next: 'harmful' },
            { text: "That\u2019s reassuring \u2014 let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    harmful: {
        text: [
            "Some pleasures are indeed harmful \u2014 but this shows that not all pleasures are the same kind of thing. The pleasure a sadist takes in cruelty is not the same type of experience as the pleasure a good person takes in helping others.",
            "Bad pleasures belong to corrupted dispositions. The standard of true pleasure is set by the good person."
        ],
        choices: [
            { text: "How do we know which pleasures to trust?", next: 'distinguish' }
        ]
    },
    reveals: {
        text: [
            "Yes. Tell me what you enjoy, and I will tell you what kind of person you are. The courageous person finds satisfaction in noble danger. The just person takes pleasure in fair dealing. The intemperate person craves excess.",
            "Training in virtue is, in large part, training your pleasures \u2014 learning to enjoy the right things."
        ],
        choices: [
            { text: "Let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    distinguish: {
        text: [
            "By looking to the good person as the standard. The pleasures of the virtuous person are the truest pleasures \u2014 they are stable, deep, and unmixed with regret. Other pleasures may feel intense but often leave dissatisfaction in their wake.",
            "The virtuous person is, in a sense, the measure of pleasure, just as the healthy palate is the measure of flavour."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Pleasure is neither the highest good nor something to be avoided. It naturally accompanies good activity and reveals character. Not all pleasures are equal \u2014 the pleasures of the virtuous person are the truest standard. The good life is a deeply pleasant life."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Pleasure accompanies unimpeded activity \u2014 it is a sign of flourishing",
            "Not all pleasures are equal; they differ in kind, not just intensity",
            "What you enjoy reveals your character",
            "The good life is genuinely pleasant \u2014 virtue and pleasure are allies, not enemies"
        ],
        quote: { text: "Pleasure completes the activity not as the corresponding permanent state does, but as an end which supervenes as the bloom of youth does on those in the flower of their age.", cite: "Nicomachean Ethics, Book X, Ch. 4" }
    }
},

// ═══ THE CONTEMPLATIVE LIFE ══════════════════════════════
contemplation: {
    q_why_value: {
        text: [
            "Consider: what makes an activity the highest? It must be continuous, pleasant, self-sufficient, pursued for its own sake, and in accordance with our highest capacity.",
            "Contemplation meets all these criteria. It is the most continuous \u2014 we can think longer than we can do anything else. It is the most pleasant \u2014 philosophy offers the purest pleasures. It is the most self-sufficient \u2014 the thinker needs little external equipment."
        ],
        choices: [
            { text: "But isn\u2019t this impractical?", next: 'impractical' },
            { text: "What about practical virtue?", next: 'practical_too' }
        ]
    },
    q_realistic: {
        text: [
            "I acknowledge it freely: a life of pure contemplation is beyond most human beings. We are composite creatures \u2014 not pure intellects but embodied souls living among others. We need food, friends, and a functioning community.",
            "But knowing what the summit looks like helps us orient the rest of the climb. The contemplative ideal gives direction even if we cannot live there permanently."
        ],
        choices: [
            { text: "So it\u2019s an ideal, not a requirement?", next: 'ideal' },
            { text: "What about the practical virtues?", next: 'practical_too' }
        ]
    },
    q_action: {
        text: [
            "The life of practical virtue \u2014 the life of the just, courageous, generous person \u2014 is genuinely happy. I do not dismiss it. It is a secondary but real form of happiness.",
            "But practical virtue always needs external circumstances: the generous person needs wealth to give, the just person needs others to treat justly. Contemplation is more self-contained."
        ],
        choices: [
            { text: "Doesn\u2019t this devalue action?", next: 'impractical' },
            { text: "Can we have both?", next: 'both' }
        ]
    },
    impractical: {
        text: [
            "I am not saying everyone should become a hermit philosopher! We are social beings, and the practical virtues are essential to our nature. My point is this: in our best moments \u2014 when we contemplate truth, beauty, the structure of reality \u2014 we touch something divine.",
            "This is the peak of human experience, even if we cannot live there permanently."
        ],
        choices: [
            { text: "What about a balanced life?", next: 'both' }
        ]
    },
    ideal: {
        text: [
            "An ideal that is also partially achievable. Every moment of genuine understanding \u2014 grasping a proof, seeing how things connect, contemplating something beautiful \u2014 is a taste of the highest happiness.",
            "The practical life provides the conditions; contemplation provides the summit."
        ],
        choices: [
            { text: "How do these relate?", next: 'both' }
        ]
    },
    practical_too: {
        text: [
            "The practically virtuous life is happy in a secondary but genuine way. The just, courageous, and generous person lives well. I insist on this. A human life needs both: practical engagement and contemplative insight.",
            "But if forced to name the single highest activity, I point to contemplation \u2014 the activity of our most divine part."
        ],
        choices: [
            { text: "Can we combine them?", next: 'both' }
        ]
    },
    both: {
        text: [
            "In a complete human life, both are present. We engage with others through practical virtue \u2014 justice, generosity, courage. And we also make time for understanding \u2014 reflection, learning, contemplation.",
            "The best life weaves both threads together. But we should be honest: the moments of deepest contemplation are the moments closest to the divine."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "The contemplative life represents the highest form of happiness because contemplation is the most continuous, pleasant, and self-sufficient activity of our highest capacity. The practical virtues provide a genuine but secondary happiness. The best human life combines both."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Contemplation is the highest activity: continuous, pleasant, self-sufficient",
            "It engages our highest capacity (reason) with the highest objects (truth)",
            "Practical virtue provides genuine but secondary happiness",
            "The best life combines contemplative insight with practical engagement"
        ],
        quote: { text: "If reason is divine, then, in comparison with man, the life according to it is divine in comparison with human life.", cite: "Nicomachean Ethics, Book X, Ch. 7" }
    }
},

// ═══ ETHICS & POLITICS ═══════════════════════════════════
politics: {
    q_own: {
        text: [
            "Because human beings are, by nature, political animals. We are not self-sufficient individuals who happen to live together. We are creatures whose flourishing depends on community \u2014 on laws, education, and shared institutions.",
            "Can you imagine becoming virtuous in complete isolation?"
        ],
        choices: [
            { text: "Maybe \u2014 with enough willpower?", next: 'willpower' },
            { text: "I suppose not \u2014 we need others", next: 'need_others' }
        ]
    },
    q_connection: {
        text: [
            "Ethics tells us what a good life looks like. Politics creates the conditions in which good lives become possible. Without good laws, education, and institutions, most people cannot develop virtue.",
            "This is why my Ethics ends by pointing toward my Politics. The study of individual virtue is incomplete without the study of community."
        ],
        choices: [
            { text: "What conditions does virtue need?", next: 'conditions' },
            { text: "Can bad laws prevent virtue?", next: 'bad_laws' }
        ]
    },
    q_education: {
        text: [
            "Education is absolutely central. Virtue comes through habituation, and habituation begins in childhood. Good education trains the emotions before reason is fully developed \u2014 teaching children to take pleasure in the right things and feel pain at the wrong ones.",
            "But who provides this education?"
        ],
        choices: [
            { text: "Parents?", next: 'parents' },
            { text: "The state and its laws?", next: 'law_role' }
        ]
    },
    willpower: {
        text: [
            "Willpower alone is not enough. Where would you learn what courage looks like without anyone to model it? How would you practice justice with no one to be just toward? How would you develop practical wisdom without the complexity of social life?",
            "We need others not just for help but for the very development of our character."
        ],
        choices: [
            { text: "What role does the community play?", next: 'conditions' }
        ]
    },
    need_others: {
        text: [
            "Precisely. Virtue develops in community. We learn from models, we practice with others, we refine our judgment through shared deliberation. And the institutions of a community \u2014 its laws, customs, education \u2014 shape the environment in which character forms."
        ],
        choices: [
            { text: "What makes a good political environment?", next: 'conditions' }
        ]
    },
    conditions: {
        text: [
            "Good laws that guide behaviour. Education that trains character from youth. Enough material prosperity that citizens are not forced into base actions by poverty. Leisure for contemplation and civic participation.",
            "The legislator\u2019s highest task is to create conditions where virtue can flourish. This is why politics is the master science of the good."
        ],
        choices: [
            { text: "Can bad laws ruin people?", next: 'bad_laws' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    bad_laws: {
        text: [
            "Absolutely. Bad laws can habituate people to vice just as surely as good laws habituate them to virtue. A community that rewards greed and punishes honesty will produce greedy, dishonest people. This is why the quality of legislation matters enormously.",
            "Nearly every Greek state neglected this, I observe. The Spartans were almost alone in taking education seriously."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    parents: {
        text: [
            "Parents are the first educators, yes. But parental authority is limited. The law has compulsive power that a single father lacks. And laws apply to everyone, creating a shared standard.",
            "The best approach combines parental care with good public education and wise legislation."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    law_role: {
        text: [
            "The law is a form of reason without passion. It guides behaviour consistently, where individual authority often fails. Good laws habituate citizens to virtue by requiring right action until it becomes second nature.",
            "This is why the study of legislation is the natural continuation of ethics."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "Ethics and politics are two halves of one inquiry. Ethics shows what virtue is; politics creates the conditions for virtue to flourish. Good laws, education, and community are essential because human beings develop character in a social context, not in isolation."
        ],
        isEnd: true,
        choices: [],
        summary: [
            "Humans are political animals \u2014 our flourishing depends on community",
            "Ethics tells us what is good; politics creates conditions for achieving it",
            "Good laws, education, and institutions are essential for developing virtue",
            "The study of individual virtue leads naturally to the study of community"
        ],
        quote: { text: "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.", cite: "Aristotle, Politics, Book I" }
    }
}

};

// ─── Book metadata (for Read mode) ──────────────────────
const books = [
    { id: 1, numeral: 'I', title: 'The Good for Man', desc: 'Happiness, the highest good, and the function argument' },
    { id: 2, numeral: 'II', title: 'Moral Virtue', desc: 'Virtue through habit and the doctrine of the mean' },
    { id: 3, numeral: 'III', title: 'Choice & Courage', desc: 'Voluntary action, deliberation, courage, and temperance' },
    { id: 4, numeral: 'IV', title: 'The Virtues of Character', desc: 'Generosity, magnificence, magnanimity, and social virtues' },
    { id: 5, numeral: 'V', title: 'Justice', desc: 'Distributive justice, corrective justice, and equity' },
    { id: 6, numeral: 'VI', title: 'Intellectual Virtue', desc: 'Practical wisdom, knowledge, and the life of the mind' },
    { id: 7, numeral: 'VII', title: 'Continence & Pleasure', desc: 'Weakness of will, self-control, and the nature of pleasure' },
    { id: 8, numeral: 'VIII', title: 'Friendship I', desc: 'The types and foundations of friendship' },
    { id: 9, numeral: 'IX', title: 'Friendship II', desc: 'Self-love, goodwill, and why the happy need friends' },
    { id: 10, numeral: 'X', title: 'Happiness & Contemplation', desc: 'Pleasure revisited, the contemplative life, and politics' },
];
