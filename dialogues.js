// ─── Book Metadata ───────────────────────────────────────
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

// ─── Concept Map Data ────────────────────────────────────
const conceptMapNodes = [
    { id: 'b1', label: 'Book I', x: 150, y: 30, isBook: true, book: 1 },
    { id: 'b1_teleology', label: 'Teleology', x: 60, y: 60, book: 1 },
    { id: 'b1_eudaimonia', label: 'Eudaimonia', x: 150, y: 70, book: 1 },
    { id: 'b1_function', label: 'Function', x: 240, y: 60, book: 1 },

    { id: 'b2', label: 'Book II', x: 150, y: 115, isBook: true, book: 2 },
    { id: 'b2_habit', label: 'Habituation', x: 60, y: 145, book: 2 },
    { id: 'b2_mean', label: 'The Mean', x: 240, y: 145, book: 2 },

    { id: 'b3', label: 'Book III', x: 150, y: 195, isBook: true, book: 3 },
    { id: 'b3_choice', label: 'Choice', x: 60, y: 225, book: 3 },
    { id: 'b3_courage', label: 'Courage', x: 240, y: 225, book: 3 },

    { id: 'b4', label: 'Book IV', x: 150, y: 275, isBook: true, book: 4 },
    { id: 'b4_generosity', label: 'Generosity', x: 60, y: 305, book: 4 },
    { id: 'b4_magnanimity', label: 'Magnanimity', x: 240, y: 305, book: 4 },

    { id: 'b5', label: 'Book V', x: 150, y: 355, isBook: true, book: 5 },
    { id: 'b5_distributive', label: 'Distribution', x: 60, y: 385, book: 5 },
    { id: 'b5_corrective', label: 'Correction', x: 240, y: 385, book: 5 },

    { id: 'b6', label: 'Book VI', x: 150, y: 435, isBook: true, book: 6 },
    { id: 'b6_phronesis', label: 'Phronesis', x: 70, y: 465, book: 6 },
    { id: 'b6_sophia', label: 'Sophia', x: 230, y: 465, book: 6 },

    { id: 'b7', label: 'Book VII', x: 150, y: 515, isBook: true, book: 7 },
    { id: 'b7_akrasia', label: 'Akrasia', x: 60, y: 545, book: 7 },
    { id: 'b7_pleasure', label: 'Pleasure', x: 240, y: 545, book: 7 },

    { id: 'b8', label: 'Book VIII', x: 150, y: 595, isBook: true, book: 8 },
    { id: 'b8_types', label: 'Three Types', x: 60, y: 625, book: 8 },
    { id: 'b8_perfect', label: 'Perfect Philia', x: 240, y: 625, book: 8 },

    { id: 'b9', label: 'Book IX', x: 150, y: 675, isBook: true, book: 9 },
    { id: 'b9_selflove', label: 'Self-Love', x: 60, y: 705, book: 9 },
    { id: 'b9_need', label: 'Need Friends', x: 240, y: 705, book: 9 },

    { id: 'b10', label: 'Book X', x: 150, y: 755, isBook: true, book: 10 },
    { id: 'b10_contemplation', label: 'Theoria', x: 60, y: 790, book: 10 },
    { id: 'b10_politics', label: 'Politics', x: 240, y: 790, book: 10 },
];

const conceptMapEdges = [
    ['b1', 'b2'], ['b2', 'b3'], ['b3', 'b4'], ['b4', 'b5'],
    ['b5', 'b6'], ['b6', 'b7'], ['b7', 'b8'], ['b8', 'b9'], ['b9', 'b10'],
    ['b1', 'b1_teleology'], ['b1', 'b1_eudaimonia'], ['b1', 'b1_function'],
    ['b2', 'b2_habit'], ['b2', 'b2_mean'],
    ['b3', 'b3_choice'], ['b3', 'b3_courage'],
    ['b4', 'b4_generosity'], ['b4', 'b4_magnanimity'],
    ['b5', 'b5_distributive'], ['b5', 'b5_corrective'],
    ['b6', 'b6_phronesis'], ['b6', 'b6_sophia'],
    ['b7', 'b7_akrasia'], ['b7', 'b7_pleasure'],
    ['b8', 'b8_types'], ['b8', 'b8_perfect'],
    ['b9', 'b9_selflove'], ['b9', 'b9_need'],
    ['b10', 'b10_contemplation'], ['b10', 'b10_politics'],
];

// ─── Dialogue Trees (All 10 Books) ──────────────────────

const dialogueTrees = {
// ═══ BOOK I: The Good for Man ═══════════════════════════
1: {
    start: {
        text: [
            "Welcome, friend. I am Aristotle of Stagira \u2014 philosopher, teacher, and a lifelong student of the human condition.",
            "Today we begin at the beginning: What is the ultimate aim of human life? Every art, every inquiry, every action aims at some good. But what is the \u0068ighest good?",
            "Tell me \u2014 when you act, what do you ultimately seek?"
        ],
        choices: [
            { text: "I seek happiness", next: 'happiness_direct' },
            { text: "I want to achieve my goals", next: 'goals_path' },
            { text: "I\u2019m not sure", next: 'not_sure' }
        ],
        concepts: ['b1_teleology']
    },
    happiness_direct: {
        text: [
            "You go straight to the heart of it! Indeed, both the common person and the person of refinement would agree: the ultimate aim is happiness \u2014 eudaimonia, as we say.",
            "But here is where agreement ends. \u2018Happiness\u2019 is merely a word, and people mean vastly different things by it. A sick person says happiness is health. A poor person says it is wealth.",
            "So I must press you: what does happiness actually consist of?"
        ],
        choices: [
            { text: "Pleasure and enjoyment", next: 'pleasure' },
            { text: "Success and recognition", next: 'honor' },
            { text: "Wealth and security", next: 'wealth' }
        ],
        concepts: ['b1_eudaimonia']
    },
    goals_path: {
        text: [
            "You act to achieve goals \u2014 a reasonable answer. But consider: when you achieve one goal, is that the end? You work to earn money, earn money to live comfortably, live comfortably to\u2026 what?",
            "This chain cannot go on forever, or our desires would be empty and vain. There must be some final end \u2014 something pursued for its own sake, never as a means to something else.",
            "Most call this end \u2018happiness.\u2019 But what does happiness consist of?"
        ],
        choices: [
            { text: "Pleasure and enjoyment", next: 'pleasure' },
            { text: "Success and recognition", next: 'honor' },
            { text: "Wealth and security", next: 'wealth' }
        ],
        concepts: ['b1_eudaimonia']
    },
    not_sure: {
        text: [
            "An honest answer \u2014 and honesty is the beginning of wisdom. Let us reason together.",
            "You eat to have energy. You have energy to work. You work to provide for yourself. You provide for yourself in order to\u2026 what? Every chain of purposes must terminate somewhere, in some final good.",
            "Most people call this final good \u2018happiness.\u2019 But they disagree fiercely about what happiness is. What do you think it consists of?"
        ],
        choices: [
            { text: "Pleasure and enjoyment", next: 'pleasure' },
            { text: "Success and recognition", next: 'honor' },
            { text: "Wealth and security", next: 'wealth' }
        ],
        concepts: ['b1_eudaimonia']
    },
    pleasure: {
        text: [
            "Many think so \u2014 the life of pleasure is the life most people choose. But consider: is a life devoted entirely to pleasure truly the highest human life?",
            "Animals also pursue pleasure. If pleasure alone were the highest good, we would be saying the best life for a human is no different from the life of grazing cattle.",
            "Does that sit well with you?"
        ],
        choices: [
            { text: "You\u2019re right \u2014 there must be more to it", next: 'after_examining' },
            { text: "What\u2019s wrong with pleasure?", next: 'pleasure_defend' }
        ],
        concepts: []
    },
    pleasure_defend: {
        text: [
            "Nothing is wrong with pleasure in itself! I am no enemy of enjoyment. But there is a difference between saying pleasure is good and saying it is the highest good.",
            "A musician takes pleasure in playing beautifully. But the pleasure follows from the excellence \u2014 not the other way around. The same reasoning applies to honor and wealth: each is good, but none is complete on its own.",
            "Let us try a different approach entirely."
        ],
        choices: [
            { text: "What approach?", next: 'after_examining' }
        ],
        concepts: []
    },
    honor: {
        text: [
            "The life of honor \u2014 this is the life of the politician, the public figure. But notice: honor depends on those who bestow it, not on the person who receives it.",
            "Surely the good we seek should be something of our own, something that cannot be easily taken away. And consider: we wish to be honored for being virtuous. This suggests virtue, not honor, is what we truly value.",
            "Honor points beyond itself to something deeper. Shall we search for what that deeper thing might be?"
        ],
        choices: [
            { text: "Yes, let\u2019s go deeper", next: 'after_examining' },
            { text: "But recognition matters", next: 'honor_nuance' }
        ],
        concepts: []
    },
    honor_nuance: {
        text: [
            "It does matter \u2014 I do not deny it. But notice why we seek recognition: we want to be honored by wise people, for possessing genuine virtue. This shows honor is a sign of something more fundamental.",
            "The same applies to wealth \u2014 useful, even necessary, but obviously a means rather than an end. No one pursues money purely for its own sake.",
            "All the common answers fall short. Let me propose a different approach."
        ],
        choices: [
            { text: "I\u2019m listening", next: 'after_examining' }
        ],
        concepts: []
    },
    wealth: {
        text: [
            "Wealth? But wealth is the most clearly instrumental of all goods. No one pursues money for its own sake \u2014 we pursue it for what it enables.",
            "A miser who hoards gold but never uses it well is not happy. Wealth is a tool. The question is: a tool for what?",
            "I think we need a fundamentally different approach to this question."
        ],
        choices: [
            { text: "What do you suggest?", next: 'after_examining' },
            { text: "But you can\u2019t be happy without money", next: 'wealth_nuance' }
        ],
        concepts: []
    },
    wealth_nuance: {
        text: [
            "A fair point! Some external goods are indeed necessary for happiness. A person who lacks food, friends, or freedom faces real obstacles to living well.",
            "But this makes wealth a condition for happiness, not happiness itself. The same analysis applies to pleasure and honor: each captures something real, but none is the whole picture.",
            "Let me propose a completely different way of thinking about this."
        ],
        choices: [
            { text: "Go on", next: 'after_examining' }
        ],
        concepts: []
    },
    after_examining: {
        text: [
            "We have examined the common candidates \u2014 pleasure, honor, wealth \u2014 and found each inadequate as a complete account of happiness. Good progress.",
            "Now, consider: a flute player has a function \u2014 to play the flute. A sculptor has a function \u2014 to sculpt. The eye has a function \u2014 to see. Every organ, every craft has its characteristic work.",
            "Can it be that the human being, as a human being, has no function? That we alone in nature are idle, with no work to call our own?"
        ],
        choices: [
            { text: "There must be a human function", next: 'function_search' },
            { text: "Humans are too complex for a single function", next: 'function_objection' }
        ],
        concepts: ['b1_function']
    },
    function_objection: {
        text: [
            "A thoughtful objection. Yet consider: the eye has a function, the hand has a function, every part of the body has a function. Would it not be strange if the whole had no function, when every part does?",
            "I do not mean something narrow. Let us search for what is distinctive about human beings \u2014 what we do that nothing else in nature does."
        ],
        choices: [
            { text: "Let\u2019s search for it", next: 'function_search' }
        ],
        concepts: []
    },
    function_search: {
        text: [
            "The human function cannot simply be to live \u2014 for plants do that. Nor merely to perceive \u2014 for animals do that too.",
            "What remains? What do human beings do that no other creature does?"
        ],
        choices: [
            { text: "We reason and think", next: 'reason_found' },
            { text: "We create and build things", next: 'creation_answer' },
            { text: "We make moral choices", next: 'moral_answer' }
        ],
        concepts: []
    },
    creation_answer: {
        text: [
            "Creativity is remarkable, yes. But what guides creation? What allows a human to plan, design, and envision something that does not yet exist? Is it not reason \u2014 the capacity to think, deliberate, and understand?"
        ],
        choices: [
            { text: "I see \u2014 reason underlies creativity", next: 'reason_found' }
        ],
        concepts: []
    },
    moral_answer: {
        text: [
            "Excellent observation! Moral choice is indeed distinctly human. But what makes moral choice possible? It is our capacity for reason \u2014 the ability to deliberate about what is right, to grasp principles, to govern our actions by thought rather than impulse."
        ],
        choices: [
            { text: "So reason is the key", next: 'reason_found' }
        ],
        concepts: []
    },
    reason_found: {
        text: [
            "Yes! The function peculiar to human beings is the activity of the soul in accordance with reason. Not merely possessing reason \u2014 but actively exercising it. Just as the function of a harpist is not to own a harp, but to play it.",
            "And here is the crucial step: if the human function is rational activity, then the good for a human is to perform this function well \u2014 with excellence, with virtue.",
            "Happiness, then, is an activity of the soul in accordance with virtue, in a complete life. Not a feeling, but a way of living. What do you think?"
        ],
        choices: [
            { text: "This makes sense to me", next: 'conclusion' },
            { text: "What do you mean by \u2018complete life\u2019?", next: 'complete_life' },
            { text: "I have some doubts", next: 'doubts' }
        ],
        concepts: []
    },
    complete_life: {
        text: [
            "One swallow does not make a summer, and one day of virtuous action does not make a person happy. Happiness is not a momentary feeling \u2014 it is the shape of a whole life lived well.",
            "This also means that luck and circumstance play a role. A person who suffers terrible misfortune may struggle to be happy, no matter how virtuous they are. I take this seriously \u2014 I am no naive optimist.",
            "But the foundation remains: happiness is virtuous activity, sustained over time."
        ],
        choices: [
            { text: "I understand. Let\u2019s summarize.", next: 'conclusion' }
        ],
        concepts: []
    },
    doubts: {
        text: [
            "Good \u2014 doubt is the beginning of inquiry! Some worry this view is elitist, or that it ignores luck. Let me address both.",
            "The virtues I speak of are not just for philosophers. Courage, generosity, justice, friendship \u2014 every person exercises these in daily life. The farmer who deals honestly, the parent who raises children with care \u2014 all are living virtuously.",
            "As for luck: yes, extreme misfortune can hinder happiness. But the virtuous person bears even bad fortune with grace. Virtue is remarkably resilient, even if not invincible."
        ],
        choices: [
            { text: "That\u2019s reassuring. Let\u2019s summarize.", next: 'conclusion' }
        ],
        concepts: []
    },
    conclusion: {
        text: [
            "Let us gather what we have found:",
            "Every action aims at some good. There must be a highest good \u2014 an ultimate aim. This is what we call happiness. Happiness is not pleasure, honor, or wealth alone. The function of a human being is rational activity. Therefore: happiness is activity of the soul in accordance with virtue, over a complete life.",
            "This is the foundation upon which everything else rests. In the books that follow, we will explore what the virtues are and how they are cultivated. You have thought well today, friend."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Every action and pursuit aims at some good",
            "There must be a highest good \u2014 happiness (eudaimonia)",
            "Happiness is not reducible to pleasure, honor, or wealth",
            "The human function is rational activity",
            "The good life is activity of the soul in accordance with virtue",
            "Happiness requires a complete life, not just a moment"
        ],
        quote: {
            text: "For one swallow does not make a summer, nor does one day; and so too one day, or a short time, does not make a man blessed and happy.",
            cite: "Nicomachean Ethics, Book I, Ch. 7"
        }
    }
},

// ═══ BOOK II: Moral Virtue ══════════════════════════════
2: {
    start: {
        text: [
            "Now that we know happiness is virtuous activity, we must ask: how does one become virtuous? Are we born with virtue, or must it be acquired?",
            "Tell me \u2014 do you think people are naturally good, or is goodness something learned?"
        ],
        choices: [
            { text: "We\u2019re born with a natural sense of right and wrong", next: 'nature' },
            { text: "Goodness is learned through experience", next: 'learned' },
            { text: "A mix of both", next: 'both' }
        ],
        concepts: ['b2_habit']
    },
    nature: {
        text: [
            "An understandable view, but consider: no natural tendency is altered by habit. A stone falls downward by nature \u2014 you could throw it upward ten thousand times and it would never learn to rise.",
            "But virtue is not like this. We are not born courageous or generous \u2014 we become so through practice. We are given the capacity for virtue by nature, but we perfect that capacity through habit.",
            "Think of it this way: we learn to build by building, to play the harp by playing. We become just by doing just acts, brave by doing brave acts."
        ],
        choices: [
            { text: "So practice makes virtue?", next: 'habituation' }
        ],
        concepts: []
    },
    learned: {
        text: [
            "Precisely right. Moral virtue comes through habit \u2014 the Greek word for it, \u0113thik\u0113, is derived from ethos, meaning habit.",
            "We are not born virtuous, but we are born with the capacity for virtue. Nature gives us the potential; practice actualizes it. We become just by doing just acts, brave by doing brave acts, temperate by practicing temperance.",
            "This has a profound implication for education. Shall I explain?"
        ],
        choices: [
            { text: "Please do", next: 'habituation' }
        ],
        concepts: []
    },
    both: {
        text: [
            "You are close to my own view. Nature gives us the capacity for virtue \u2014 we are not born blank slates. But neither are we born fully formed in character.",
            "The virtues are perfected through habit and practice. Just as we learn to build by building, we become courageous by facing fears, generous by giving, just by acting justly.",
            "This is why upbringing and education matter so enormously."
        ],
        choices: [
            { text: "How does this work in practice?", next: 'habituation' }
        ],
        concepts: []
    },
    habituation: {
        text: [
            "Habituation works like this: by repeatedly doing virtuous acts \u2014 even before we fully understand why \u2014 we develop stable dispositions of character. The acts come first, the character follows.",
            "But there is a danger. Just as the right habits build virtue, the wrong habits build vice. The person who flees every danger becomes a coward; the one who fears nothing becomes reckless.",
            "This brings us to a crucial insight: virtue is a mean between two extremes. What do you think I mean by that?"
        ],
        choices: [
            { text: "Moderation \u2014 not too much, not too little", next: 'mean_right' },
            { text: "Always choosing the middle ground?", next: 'mean_misunderstand' }
        ],
        concepts: ['b2_mean']
    },
    mean_right: {
        text: [
            "Exactly! Virtue lies between two vices: one of excess and one of deficiency. Courage lies between cowardice and recklessness. Generosity between miserliness and prodigality.",
            "But \u2014 and this is important \u2014 the mean is not a mathematical midpoint. It is relative to the person and the situation. What counts as courageous for a soldier differs from what counts as courageous for a child.",
            "The person of practical wisdom knows how to find the right response, at the right time, toward the right person, in the right way. This is the art of living well."
        ],
        choices: [
            { text: "How do we find this mean in practice?", next: 'practical_mean' },
            { text: "Can you give me an example?", next: 'mean_example' }
        ],
        concepts: []
    },
    mean_misunderstand: {
        text: [
            "Not quite \u2014 and this is a common misunderstanding! The mean is not about being lukewarm or always compromising. Sometimes the virtuous response is intense: righteous anger at injustice, for instance.",
            "The mean is between two vices \u2014 one of excess and one of deficiency. Courage is the mean between cowardice (too little) and recklessness (too much). But the brave person may act with great intensity when the situation demands it.",
            "It is relative to the person and the circumstances. Practical wisdom is needed to find it."
        ],
        choices: [
            { text: "Can you give me an example?", next: 'mean_example' }
        ],
        concepts: []
    },
    mean_example: {
        text: [
            "Consider anger. The person who is never angry, even at genuine injustice, is a pushover \u2014 deficient. The person who rages at every slight is irascible \u2014 excessive. The virtuous person feels anger when it is appropriate, to the right degree, at the right things.",
            "Or generosity: the miser gives too little, the spendthrift gives without thought. The generous person gives the right amount, to the right people, at the right time.",
            "Finding this mean is not easy \u2014 which is precisely why virtue is rare and praiseworthy."
        ],
        choices: [
            { text: "How do we learn to find it?", next: 'practical_mean' }
        ],
        concepts: []
    },
    practical_mean: {
        text: [
            "Three pieces of advice. First: avoid the extreme that is more opposed to virtue. If you tend toward cowardice, practice pushing toward boldness rather than trying to find the exact middle.",
            "Second: notice what you are personally drawn to \u2014 your natural inclination \u2014 and lean the other way. We must, as they say, bend the stick in the opposite direction to straighten it.",
            "Third: be especially wary of pleasure, for it corrupts our judgment. We do not judge pleasure impartially \u2014 it is always whispering in our ear."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Moral virtue is acquired through habit, not given by nature",
            "We become virtuous by doing virtuous acts \u2014 practice comes first",
            "Virtue is a mean between excess and deficiency",
            "The mean is relative to the person and situation, not a fixed midpoint",
            "Finding the mean requires practical wisdom and self-knowledge"
        ],
        quote: {
            text: "It is by doing just acts that the just man is produced, and by doing temperate acts the temperate man; without doing these no one would have even a prospect of becoming good.",
            cite: "Nicomachean Ethics, Book II, Ch. 4"
        }
    }
},

// ═══ BOOK III: Choice & Courage ═════════════════════════
3: {
    start: {
        text: [
            "We know virtue is a habit. But not all actions reflect our character equally. If someone pushes you into another person, have you acted unjustly?",
            "For virtue and vice to be meaningful, our actions must be voluntary. When do you think a person is truly responsible for what they do?"
        ],
        choices: [
            { text: "When they choose to do it freely", next: 'voluntary' },
            { text: "When they know what they\u2019re doing", next: 'knowledge' },
            { text: "Always \u2014 we\u2019re always responsible", next: 'always_responsible' }
        ],
        concepts: ['b3_choice']
    },
    voluntary: {
        text: [
            "Yes \u2014 an action is voluntary when its origin lies in the agent, and the agent knows the particular circumstances. An action done under compulsion or from ignorance may be involuntary.",
            "But be careful: acting from emotion is still voluntary. The angry person chooses to strike, even if they later regret it. And ignorance of what is right is no excuse \u2014 a drunk person is doubly culpable, for getting drunk was itself a choice.",
            "This leads to a crucial concept: deliberate choice. What do you think distinguishes a mere wish from a genuine choice?"
        ],
        choices: [
            { text: "Choice involves planning and reasoning", next: 'deliberation' },
            { text: "Choice means committing to action", next: 'deliberation' }
        ],
        concepts: []
    },
    knowledge: {
        text: [
            "Knowledge is indeed essential. A person who acts in ignorance of crucial facts \u2014 not knowing whom they harm, or what they are doing \u2014 may act involuntarily.",
            "But ignorance of what is right is another matter. The unjust person is ignorant of what they should do, but this ignorance is itself their fault. We are responsible for our character because we built it through past choices.",
            "This brings us to the idea of deliberate choice \u2014 the heart of moral agency. We deliberate about things in our power, then choose."
        ],
        choices: [
            { text: "Tell me more about deliberation", next: 'deliberation' }
        ],
        concepts: []
    },
    always_responsible: {
        text: [
            "A bold claim! But surely a person carried away by a storm is not responsible for where they land. Nor is someone who, in complete ignorance of the facts, causes harm they could not have foreseen.",
            "I say an action is voluntary when its origin lies in the agent and the agent knows the circumstances. What matters for moral praise or blame is deliberate choice \u2014 a decision reached through reasoning about what is in our power."
        ],
        choices: [
            { text: "What exactly is deliberate choice?", next: 'deliberation' }
        ],
        concepts: []
    },
    deliberation: {
        text: [
            "We deliberate not about ends but about the means to our ends. A doctor does not deliberate about whether to heal \u2014 but about how. We deliberate about things that are in our power and can be done in more than one way.",
            "Choice, then, is a deliberate desire for things in our power. It is the result of reasoning about what to do. This is why choice reveals character more than actions do \u2014 it shows what we decided after reflection.",
            "Now let us see these ideas in action. Consider courage \u2014 the first virtue I wish to examine. What do you think courage is?"
        ],
        choices: [
            { text: "Not being afraid", next: 'courage_fearless' },
            { text: "Acting rightly despite fear", next: 'courage_right' },
            { text: "Being willing to sacrifice for what matters", next: 'courage_sacrifice' }
        ],
        concepts: ['b3_courage']
    },
    courage_fearless: {
        text: [
            "A common answer, but not quite. The person who fears nothing at all is not courageous but reckless \u2014 or perhaps simply foolish. There are things we should fear: disgrace, harm to our loved ones, injustice.",
            "True courage is not the absence of fear, but the proper response to fear. The courageous person feels fear when it is appropriate but acts rightly despite it \u2014 for a noble end.",
            "The coward feels too much fear; the reckless person too little. Courage is the mean."
        ],
        choices: [
            { text: "What about temperance?", next: 'temperance' }
        ],
        concepts: []
    },
    courage_right: {
        text: [
            "Exactly! You have grasped it. The courageous person fears what should be feared and faces what should be faced, for the right reason and in the right way.",
            "In its fullest form, courage faces the greatest fear \u2014 death \u2014 for the noblest cause. But courage also operates in smaller moments: speaking truth when it is difficult, standing by a friend, enduring hardship for a worthy goal.",
            "The coward gives in to fear; the reckless person ignores it. Both miss the mark."
        ],
        choices: [
            { text: "Let\u2019s discuss temperance too", next: 'temperance' }
        ],
        concepts: []
    },
    courage_sacrifice: {
        text: [
            "You capture something important \u2014 courage involves endurance for the sake of what is noble. But not every sacrifice is courageous. The key is that the courageous person acts from a correct assessment of danger, for the right reasons.",
            "They feel fear when fear is appropriate but do not let it prevent them from acting well. This is the mean between cowardice and recklessness."
        ],
        choices: [
            { text: "What about temperance?", next: 'temperance' }
        ],
        concepts: []
    },
    temperance: {
        text: [
            "Temperance concerns bodily pleasures \u2014 food, drink, and physical desire. The temperate person enjoys these pleasures in the right way and to the right degree.",
            "The self-indulgent person pursues every pleasure without restraint. But the person entirely insensible to pleasure \u2014 finding no enjoyment in anything \u2014 also misses the mark. Such a person is hardly human.",
            "Temperance is the mean: enjoying pleasures appropriately, not being enslaved by them. The temperate person\u2019s appetites are in harmony with reason."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Actions must be voluntary to reflect character \u2014 done with knowledge and without compulsion",
            "Deliberate choice reveals character: we reason about means, then commit",
            "We are responsible for our character because we built it through past choices",
            "Courage is the mean between cowardice and recklessness \u2014 acting rightly despite fear",
            "Temperance is the proper enjoyment of bodily pleasure, governed by reason"
        ],
        quote: {
            text: "The man who abstains from bodily pleasures and delights in this very thing is temperate, while the man who is annoyed at it is self-indulgent.",
            cite: "Nicomachean Ethics, Book III, Ch. 11"
        }
    }
},

// ═══ BOOK IV: The Virtues of Character ══════════════════
4: {
    start: {
        text: [
            "We have discussed courage and temperance. Now let us examine other excellences of character. Consider generosity \u2014 the proper use of wealth.",
            "How do you think one should use their resources?"
        ],
        choices: [
            { text: "Give as much as possible", next: 'prodigal' },
            { text: "Save carefully and give wisely", next: 'generous' },
            { text: "Focus on building wealth first", next: 'miserly' }
        ],
        concepts: ['b4_generosity']
    },
    prodigal: {
        text: [
            "Your impulse is admirable, but unchecked generosity becomes prodigality \u2014 giving without judgment until one has nothing left to give. The prodigal person often gives to the wrong people, at the wrong times, and eventually cannot give at all.",
            "True generosity means giving the right amount, to the right people, at the right time, from the right resources. It is a virtue of proportion, not just quantity.",
            "And notice: the generous person takes pleasure in giving. It is not a painful sacrifice but an expression of character."
        ],
        choices: [
            { text: "What about greatness of spirit?", next: 'magnanimity' }
        ],
        concepts: []
    },
    generous: {
        text: [
            "Well said! The generous person gives and spends on the right objects, in the right amounts, with pleasure. They are not careless with money, nor anxious about it.",
            "Miserliness and prodigality are the two extremes. The miser clings too tightly; the prodigal lets go too freely. Generosity is the mean \u2014 using wealth as a tool for living well and helping others.",
            "The generous person would rather give than receive, and feels more pain at having failed to give than at having given too much."
        ],
        choices: [
            { text: "Tell me about the grander virtues", next: 'magnanimity' }
        ],
        concepts: []
    },
    miserly: {
        text: [
            "Prudence is wise, but taken too far it becomes miserliness \u2014 valuing wealth for its own sake, never spending on worthy causes, missing opportunities to help others and live fully.",
            "The miser\u2019s error is treating wealth as an end rather than a means. Generosity is the mean: giving the right amount, to the right people, while maintaining the ability to continue giving.",
            "Let us move to a grander virtue."
        ],
        choices: [
            { text: "What virtue is that?", next: 'magnanimity' }
        ],
        concepts: []
    },
    magnanimity: {
        text: [
            "Magnanimity \u2014 greatness of soul. The magnanimous person thinks themselves worthy of great things and is, in fact, worthy of them. They are concerned with honor on the grandest scale.",
            "This is perhaps the most controversial of the virtues. The magnanimous person is not humble in the modern sense \u2014 they know their own worth. But neither are they vain \u2014 their self-assessment is accurate.",
            "What do you think of someone who accurately knows they are excellent?"
        ],
        choices: [
            { text: "That sounds like arrogance", next: 'arrogance_worry' },
            { text: "Honest self-knowledge is valuable", next: 'self_knowledge' }
        ],
        concepts: ['b4_magnanimity']
    },
    arrogance_worry: {
        text: [
            "I understand the concern. But consider the difference: the vain person overestimates their worth, which is foolish. The magnanimous person assesses it correctly. Would you prefer they pretend to be less than they are?",
            "The magnanimous person is moderate in their reaction to fortune \u2014 neither elated by success nor crushed by failure. They are slow to act unless the stakes are great, and they care more about truth than opinion.",
            "Beyond these grand virtues, there are also the social virtues: friendliness, wit, truthfulness in daily life. In every domain, the pattern holds: virtue is the excellent mean between two failures."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Generosity is the mean between prodigality and miserliness",
            "The generous person gives rightly, with pleasure, and values wealth as a means",
            "Magnanimity is accurate self-knowledge paired with worthy ambition",
            "The social virtues (friendliness, wit, truthfulness) follow the same pattern of the mean",
            "In every domain, virtue is the excellent response between excess and deficiency"
        ],
        quote: {
            text: "The magnanimous person is concerned with honour on the grand scale... they are moderate in prosperity and adversity alike.",
            cite: "Nicomachean Ethics, Book IV, Ch. 3"
        }
    },
    self_knowledge: {
        text: [
            "Exactly! The magnanimous person combines excellence with accurate self-awareness. They do not grovel or boast. They give more than they receive. They are slow to engage in petty disputes but resolute when great things are at stake.",
            "We also have the quieter social virtues: the friendly person (between the obsequious and the surly), the witty person (between the buffoon and the boor), the truthful person (between the boaster and the self-deprecator).",
            "In every domain of life, the same principle applies: virtue is the excellent mean, found through practical wisdom."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Generosity is the mean between prodigality and miserliness",
            "The generous person gives rightly, with pleasure, and values wealth as a means",
            "Magnanimity is accurate self-knowledge paired with worthy ambition",
            "The social virtues (friendliness, wit, truthfulness) follow the same pattern of the mean",
            "In every domain, virtue is the excellent response between excess and deficiency"
        ],
        quote: {
            text: "The magnanimous person is concerned with honour on the grand scale... they are moderate in prosperity and adversity alike.",
            cite: "Nicomachean Ethics, Book IV, Ch. 3"
        }
    }
},

// ═══ BOOK V: Justice ════════════════════════════════════
5: {
    start: {
        text: [
            "We now come to the most important of the moral virtues: justice. Justice is unique \u2014 it is the virtue directed toward others, not just ourselves. The just person does not merely have a good character; they act rightly toward their community.",
            "But \u2018justice\u2019 has more than one meaning. When do you think someone is being unjust?"
        ],
        choices: [
            { text: "When they take more than their fair share", next: 'distributive' },
            { text: "When they break the law", next: 'lawful' },
            { text: "When they harm others", next: 'harm' }
        ],
        concepts: ['b5_distributive']
    },
    distributive: {
        text: [
            "You identify what I call particular justice \u2014 the justice of fair distribution. When goods, honors, or burdens are shared among people, distributive justice demands they be allocated proportionally.",
            "But proportional to what? This is where political disagreement begins. Democrats say: proportional to freedom. Oligarchs say: proportional to wealth. Aristocrats say: proportional to virtue.",
            "I lean toward merit, but the key insight is the structure: justice is a proportion, not simple equality. The just share depends on the relevant criteria."
        ],
        choices: [
            { text: "What about justice in individual dealings?", next: 'corrective' }
        ],
        concepts: []
    },
    lawful: {
        text: [
            "You point to what I call general or lawful justice. In this broad sense, the just person obeys laws that promote the common good. This justice encompasses all the virtues \u2014 it is \u2018complete virtue in relation to others.\u2019",
            "But there is also particular justice, which concerns fair shares and fair exchanges. This is where things get interesting: how should goods be distributed among people?"
        ],
        choices: [
            { text: "Equally?", next: 'equality_question' },
            { text: "Based on merit", next: 'merit' }
        ],
        concepts: []
    },
    harm: {
        text: [
            "Causing harm is indeed central to injustice. But notice: not all harm is unjust. A judge who sentences a criminal causes harm, but justly. A doctor who causes pain during surgery is not unjust.",
            "Injustice involves a voluntary choice to take more than one\u2019s share of goods, or less than one\u2019s share of burdens, at another\u2019s expense. It is about disrupting the fair balance.",
            "Let us examine the two forms of particular justice: distributive and corrective."
        ],
        choices: [
            { text: "Tell me about distributive justice", next: 'distributive' }
        ],
        concepts: []
    },
    equality_question: {
        text: [
            "Simple equality seems fair, but is it? Should the person who contributes more to a project receive the same share as the one who barely participates? Justice requires proportion \u2014 equal treatment for equals, unequal treatment for unequals.",
            "This is distributive justice: goods shared proportionally based on relevant merit. The debate is always about what counts as \u2018relevant\u2019 \u2014 and this is a political question, not just an ethical one."
        ],
        choices: [
            { text: "What about corrective justice?", next: 'corrective' }
        ],
        concepts: []
    },
    merit: {
        text: [
            "I agree \u2014 distribution should be proportional to merit. But what counts as merit is debated: wealth, freedom, virtue, need? Different political systems answer differently.",
            "The structure of distributive justice is a proportion: the ratio of shares should match the ratio of merits. This is geometric equality, not simple arithmetic equality."
        ],
        choices: [
            { text: "What about corrective justice?", next: 'corrective' }
        ],
        concepts: []
    },
    corrective: {
        text: [
            "Corrective justice governs transactions between individuals. Here, unlike distributive justice, the status of the persons is irrelevant. If one person wrongs another, the judge must restore the balance \u2014 taking the unjust gain from one and returning it to the other.",
            "This is arithmetic equality: whatever was taken must be returned. The law treats both parties equally regardless of who they are.",
            "But sometimes strict law produces injustice. What then?"
        ],
        choices: [
            { text: "Rules should be flexible", next: 'equity' },
            { text: "Law must be applied consistently", next: 'strict_law' }
        ],
        concepts: ['b5_corrective']
    },
    equity: {
        text: [
            "You grasp something important. This is what I call equity \u2014 epieikeia. Law is general, but life is particular. When a law, applied literally, produces an unjust result in a specific case, the equitable person corrects the law\u2019s deficiency.",
            "Equity is not opposed to justice \u2014 it is justice refined. The equitable person is just, but better than merely just. They see beyond the letter to the spirit.",
            "Justice, in all its forms, is the virtue that holds communities together. Without it, no friendship, no politics, no shared life is possible."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Justice is the virtue directed toward others and the community",
            "Distributive justice: shares proportional to merit (geometric equality)",
            "Corrective justice: restoring balance in transactions (arithmetic equality)",
            "Equity corrects the law when strict application produces injustice",
            "Justice is the foundation of all communal life"
        ],
        quote: {
            text: "Justice is that quality in virtue of which a just person is said to be a practitioner of deliberate just action, distributing between self and others, not so as to give more of what is desirable to oneself and less to their neighbour.",
            cite: "Nicomachean Ethics, Book V, Ch. 5"
        }
    },
    strict_law: {
        text: [
            "Consistency is important \u2014 without it, law becomes arbitrary. But consider: law is written in general terms, while life presents particular cases. Sometimes a law, applied strictly, produces the opposite of what the lawmaker intended.",
            "This is where equity enters \u2014 the correction of law where it falls short because of its generality. The equitable person does not follow the letter mechanically but grasps the spirit of justice.",
            "True justice requires both: the consistency of law and the sensitivity of equity."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Justice is the virtue directed toward others and the community",
            "Distributive justice: shares proportional to merit (geometric equality)",
            "Corrective justice: restoring balance in transactions (arithmetic equality)",
            "Equity corrects the law when strict application produces injustice",
            "Justice is the foundation of all communal life"
        ],
        quote: {
            text: "Justice is that quality in virtue of which a just person is said to be a practitioner of deliberate just action.",
            cite: "Nicomachean Ethics, Book V, Ch. 5"
        }
    }
},

// ═══ BOOK VI: Intellectual Virtue ═══════════════════════
6: {
    start: {
        text: [
            "We have spoken of moral virtues \u2014 excellences of character. But the soul has a rational part as well, and it too has its excellences. These are the intellectual virtues.",
            "A person of good character who lacks understanding is like a strong person who is blind \u2014 they may stumble despite their strength. What do you think is more important for living well: good character or good judgment?"
        ],
        choices: [
            { text: "Good character \u2014 intentions matter most", next: 'character_first' },
            { text: "Good judgment \u2014 you need to know what\u2019s right", next: 'judgment_first' },
            { text: "They\u2019re equally necessary", next: 'both_needed' }
        ],
        concepts: ['b6_phronesis']
    },
    character_first: {
        text: [
            "Good character is essential, but without practical wisdom, even good intentions go astray. The well-meaning person who does not understand the situation may cause more harm than good.",
            "Virtue without wisdom is like a powerful horse without a rider \u2014 energetic but directionless. We need phronesis, practical wisdom, to perceive what each situation demands."
        ],
        choices: [
            { text: "What is practical wisdom exactly?", next: 'phronesis' }
        ],
        concepts: []
    },
    judgment_first: {
        text: [
            "Judgment is indeed crucial. But a person who understands what is right yet lacks the character to act on it is no better off \u2014 as we will see when we discuss weakness of will.",
            "What we need is practical wisdom \u2014 phronesis \u2014 which is not mere cleverness but a deep understanding of how to live well, wedded to the character that follows through."
        ],
        choices: [
            { text: "Tell me more about phronesis", next: 'phronesis' }
        ],
        concepts: []
    },
    both_needed: {
        text: [
            "Exactly right. Virtue of character and intellectual virtue are inseparable in the truly good life. The practically wise person has both the understanding of what is right and the character to act on it.",
            "Let us examine this intellectual virtue \u2014 phronesis, practical wisdom \u2014 more closely."
        ],
        choices: [
            { text: "Please do", next: 'phronesis' }
        ],
        concepts: []
    },
    phronesis: {
        text: [
            "Practical wisdom \u2014 phronesis \u2014 is the ability to deliberate well about what is good and advantageous for oneself and for human beings generally. It concerns things that can be otherwise \u2014 the domain of human action.",
            "It differs from scientific knowledge, which deals with what is eternal and necessary. And it differs from craft, which produces something external. Practical wisdom is about living well as a whole.",
            "The practically wise person perceives the particulars of each situation, not just the general principles. They see what this moment requires. Do you think this wisdom can be taught?"
        ],
        choices: [
            { text: "Yes, through education", next: 'wisdom_taught' },
            { text: "It comes only from experience", next: 'wisdom_experience' }
        ],
        concepts: []
    },
    wisdom_taught: {
        text: [
            "Not exactly. Unlike scientific knowledge, practical wisdom cannot simply be transmitted through lectures. It requires experience \u2014 this is why young people can be mathematical geniuses but rarely possess practical wisdom.",
            "Experience teaches us to perceive the particulars that general rules cannot capture. But the other intellectual virtues \u2014 scientific knowledge, art, intuitive understanding \u2014 can be taught more directly.",
            "Now here is the deepest point: you cannot have practical wisdom without moral virtue, and you cannot have complete moral virtue without practical wisdom. They are two sides of one coin."
        ],
        choices: [
            { text: "Why do they depend on each other?", next: 'unity' }
        ],
        concepts: ['b6_sophia']
    },
    wisdom_experience: {
        text: [
            "You are largely right. Practical wisdom requires experience of life in a way that mathematical skill does not. This is why the young can be brilliant geometers but rarely wise in the practical sense.",
            "But experience alone is not enough. One must also grasp the universal principles that make sense of particular situations. The truly wise person moves between principle and perception.",
            "And there is a deep connection between practical wisdom and moral virtue. They depend on each other."
        ],
        choices: [
            { text: "How so?", next: 'unity' }
        ],
        concepts: ['b6_sophia']
    },
    unity: {
        text: [
            "Without moral virtue, a person\u2019s desires are disordered \u2014 they aim at the wrong things. Cleverness without good character is mere cunning, which can serve evil ends as easily as good ones.",
            "Without practical wisdom, a person has good instincts but cannot navigate complex situations. Natural virtue \u2014 the raw disposition to be brave or generous \u2014 is not yet full virtue until wisdom refines it.",
            "This is the unity of the virtues: you cannot truly have any one virtue without practical wisdom, and you cannot have practical wisdom without a good character to orient it. They grow together."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "The intellectual virtues are excellences of the rational soul",
            "Practical wisdom (phronesis) is the ability to deliberate well about how to live",
            "It requires experience, not just theoretical knowledge",
            "Scientific wisdom (sophia) contemplates eternal truths; phronesis navigates human life",
            "Moral virtue and practical wisdom are inseparable \u2014 each requires the other"
        ],
        quote: {
            text: "It is not possible to be good in the strict sense without practical wisdom, or practically wise without moral virtue.",
            cite: "Nicomachean Ethics, Book VI, Ch. 13"
        }
    }
},

// ═══ BOOK VII: Continence & Pleasure ════════════════════
7: {
    start: {
        text: [
            "Here is a puzzle: sometimes a person knows the right thing to do and still does not do it. They know the cake is bad for their health, yet they eat it. They know they should study, yet they procrastinate.",
            "How is this possible? If someone truly knows what is right, how can they fail to act on it?"
        ],
        choices: [
            { text: "Emotions overwhelm reason", next: 'emotion_view' },
            { text: "They don\u2019t really know \u2014 they just think they do", next: 'knowledge_view' },
            { text: "Knowing and doing are different things", next: 'gap_view' }
        ],
        concepts: ['b7_akrasia']
    },
    emotion_view: {
        text: [
            "You describe what many people experience. The appetite or passion surges, and in that moment, the person\u2019s knowledge is pushed aside \u2014 like a person asleep, or drunk. They \u2018have\u2019 the knowledge but are not actively using it.",
            "This is akrasia \u2014 weakness of will, or incontinence. The akratic person has the right principle but fails to follow it when passion intervenes. They are different from the vicious person, who has the wrong principles altogether.",
            "The person of practical wisdom acts well with ease. The continent person struggles but succeeds. The incontinent person struggles and fails. Do you see the distinctions?"
        ],
        choices: [
            { text: "What\u2019s the difference between akrasia and vice?", next: 'akrasia_vs_vice' }
        ],
        concepts: []
    },
    knowledge_view: {
        text: [
            "My teacher Socrates thought exactly this \u2014 that no one willingly does wrong, and apparent weakness of will is really ignorance. I respect his view, but I think he is mistaken about the experience, if not the logic.",
            "The incontinent person does have knowledge, but in the moment of temptation, their grasp on it weakens. It is as if a person knows the general rule (\u2018sweets are bad for me\u2019) but fails to apply it to the particular (\u2018this cake before me now\u2019).",
            "The passion disrupts the practical syllogism \u2014 the reasoning from principle to action."
        ],
        choices: [
            { text: "So it\u2019s a failure of applying knowledge?", next: 'akrasia_vs_vice' }
        ],
        concepts: []
    },
    gap_view: {
        text: [
            "You put your finger on the essential problem. There is a gap between knowing and doing. I call this akrasia \u2014 weakness of will, or incontinence.",
            "The incontinent person possesses the right principle but, in the grip of passion, fails to act on it. Their knowledge becomes like that of a person reciting verses in their sleep \u2014 present but not operative.",
            "This is different from vice: the vicious person has adopted wrong principles. The incontinent person has the right principles but cannot hold to them."
        ],
        choices: [
            { text: "Tell me more about this distinction", next: 'akrasia_vs_vice' }
        ],
        concepts: []
    },
    akrasia_vs_vice: {
        text: [
            "The vicious person acts badly without inner conflict \u2014 they have embraced the wrong values. The incontinent person acts badly despite inner conflict \u2014 they know better but fail to follow through.",
            "This makes incontinence more curable than vice. The incontinent person\u2019s principles are sound; they need only to strengthen their self-control. The vicious person must be reformed from the ground up.",
            "Conversely, continence \u2014 self-control \u2014 is good but not yet virtue. The continent person does the right thing but struggles against temptation. The truly virtuous person does the right thing with ease and pleasure.",
            "Now, this discussion naturally leads us to the topic of pleasure. What do you think \u2014 is pleasure good or bad?"
        ],
        choices: [
            { text: "Pleasure is good", next: 'pleasure_good' },
            { text: "It depends on the pleasure", next: 'pleasure_depends' }
        ],
        concepts: ['b7_pleasure']
    },
    pleasure_good: {
        text: [
            "Some philosophers say all pleasure is bad, and others that pleasure is the supreme good. Both are wrong. Pleasure accompanies activity \u2014 it perfects and completes the activities we engage in.",
            "Good pleasures accompany good activities; bad pleasures accompany bad ones. The pleasure of learning, of friendship, of virtuous action \u2014 these are genuinely good. The key is not to reject pleasure but to take pleasure in the right things.",
            "We will return to pleasure in greater depth later. For now, remember: the good person finds pleasure in good actions. This is, in fact, one of the signs of virtue."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Akrasia (weakness of will) is knowing the right thing but failing to do it",
            "It differs from vice: the akratic person has right principles but weak follow-through",
            "Continence (self-control) overcomes temptation; virtue transcends it entirely",
            "Pleasure is neither simply good nor simply bad \u2014 it depends on the activity",
            "The virtuous person takes pleasure in virtuous activity"
        ],
        quote: {
            text: "The incontinent man acts with appetite but not with choice; while the continent man on the contrary acts with choice but not with appetite.",
            cite: "Nicomachean Ethics, Book VII, Ch. 3"
        }
    },
    pleasure_depends: {
        text: [
            "Wisely said! This is exactly right. Pleasure in itself is neither good nor bad \u2014 it depends on what activity it accompanies. Pleasure completes and perfects activity, the way bloom perfects youth.",
            "The pleasure of learning is good because learning is good. The pleasure of cruelty is bad because cruelty is bad. We should not ask \u2018Is pleasure good?\u2019 but \u2018What pleasures are good?\u2019",
            "The person of good character finds pleasure in virtuous action and feels pain at vice. This is one of the surest signs of genuine virtue \u2014 that you enjoy doing what is right."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Akrasia (weakness of will) is knowing the right thing but failing to do it",
            "It differs from vice: the akratic person has right principles but weak follow-through",
            "Continence (self-control) overcomes temptation; virtue transcends it entirely",
            "Pleasure is neither simply good nor simply bad \u2014 it depends on the activity",
            "The virtuous person takes pleasure in virtuous activity"
        ],
        quote: {
            text: "The incontinent man acts with appetite but not with choice; while the continent man on the contrary acts with choice but not with appetite.",
            cite: "Nicomachean Ethics, Book VII, Ch. 3"
        }
    }
},

// ═══ BOOK VIII: Friendship I ════════════════════════════
8: {
    start: {
        text: [
            "Let us turn to one of the most beautiful subjects in all of ethics: friendship. Friendship is a virtue, or at least involves virtue. And it is one of the most necessary things in life.",
            "No one would choose to live without friends, even if they had all other goods. The rich need friends to exercise their generosity. The poor need friends for refuge. The young, to learn. The old, for care.",
            "But not all friendships are alike. What do you value most in a friend?"
        ],
        choices: [
            { text: "That they\u2019re useful and reliable", next: 'utility' },
            { text: "That we enjoy each other\u2019s company", next: 'pleasure_friend' },
            { text: "That they\u2019re a genuinely good person", next: 'virtue_friend' }
        ],
        concepts: ['b8_types']
    },
    utility: {
        text: [
            "Friendships of utility are real \u2014 business partners, colleagues, allies. You value each other for the benefit you provide. But notice: when the benefit ceases, so does the friendship.",
            "This is the friendship most common among the old, who seek what is useful, and among those in the prime of life who are focused on advancement. It is genuine friendship, but the most fragile kind.",
            "There is also friendship based on pleasure \u2014 common among the young, who are guided by emotion and delight in each other\u2019s company. But this too fades when tastes change.",
            "The deepest friendship is something else entirely."
        ],
        choices: [
            { text: "What is the deepest kind?", next: 'perfect' }
        ],
        concepts: []
    },
    pleasure_friend: {
        text: [
            "Friendships of pleasure are vibrant and joyful \u2014 common among the young, who are guided by emotion and find delight in each other\u2019s company. But notice: when the pleasure fades \u2014 when interests change, or circumstances shift \u2014 so does the friendship.",
            "This is more stable than friendships of mere utility, but still not the deepest form. Both utility-friendship and pleasure-friendship are about what the friend provides, not about who they are.",
            "The highest friendship is grounded in something more enduring."
        ],
        choices: [
            { text: "What is that?", next: 'perfect' }
        ],
        concepts: []
    },
    virtue_friend: {
        text: [
            "You identify the highest form immediately. The perfect friendship is between people who are good, and alike in virtue. They wish well to each other for the other\u2019s own sake, not for any benefit or pleasure they receive.",
            "Such friendships are rare and take time to develop. You cannot know a person\u2019s character quickly. But once formed, these friendships are remarkably stable \u2014 because genuine goodness does not change easily.",
            "And here is the beautiful thing: this friendship includes the other two. Friends in virtue also find each other useful and pleasant. It is the complete friendship."
        ],
        choices: [
            { text: "Does friendship require equality?", next: 'equality' }
        ],
        concepts: ['b8_perfect']
    },
    perfect: {
        text: [
            "The perfect friendship is between people who are good, and alike in virtue. They wish well to each other for the other\u2019s own sake \u2014 not for utility or pleasure, but because of the other\u2019s character.",
            "This friendship includes the other two types as well. Virtuous friends are also useful and pleasant to each other. It is the complete form of which the others are partial reflections.",
            "Such friendships are rare, for good people are rare, and this kind of friendship requires time and intimacy to develop. But when it exists, it is one of the greatest goods in human life."
        ],
        choices: [
            { text: "What about unequal friendships?", next: 'equality' }
        ],
        concepts: ['b8_perfect']
    },
    equality: {
        text: [
            "An important question. Friendship in its primary form exists between equals. But there are also friendships between unequals \u2014 parent and child, ruler and subject, husband and wife.",
            "In these cases, the friendship is maintained by proportion: each gives and receives what is appropriate to their position. The superior party should be loved more than they love. Love should be proportional to merit.",
            "Friendship even has a political dimension. The kind of friendship in a community mirrors its constitution. Democratic friendship is among equals; other forms reflect different political arrangements."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Friendship is essential to the good life \u2014 no one would live without it",
            "Three types: utility (fragile), pleasure (variable), and virtue (enduring)",
            "Perfect friendship is between good people who wish each other well for the other\u2019s sake",
            "Virtue-friendship includes the benefits of the other two",
            "Unequal friendships are sustained through proportional exchange"
        ],
        quote: {
            text: "Perfect friendship is the friendship of men who are good, and alike in virtue; for these wish well alike to each other as good, and they are good in themselves.",
            cite: "Nicomachean Ethics, Book VIII, Ch. 3"
        }
    }
},

// ═══ BOOK IX: Friendship II ═════════════════════════════
9: {
    start: {
        text: [
            "We continue our examination of friendship. A question that deeply interested my students: should a good person love themselves?",
            "Self-love has a bad reputation. We call selfish people \u2018self-lovers\u2019 as an insult. But is all self-love bad?"
        ],
        choices: [
            { text: "Self-love is selfish and bad", next: 'selflove_bad' },
            { text: "Some self-love is healthy", next: 'selflove_healthy' },
            { text: "You have to love yourself to love others", next: 'selflove_precondition' }
        ],
        concepts: ['b9_selflove']
    },
    selflove_bad: {
        text: [
            "Most people think so. But consider: when we condemn \u2018self-lovers,\u2019 we mean people who grasp for more than their share of money, honors, and bodily pleasures. This is selfish because they gratify their worst parts.",
            "But the good person who loves what is best in themselves \u2014 their reason, their virtue \u2014 is also a self-lover, in the truest sense. They assign themselves the noblest actions and gratify the most authoritative part of their soul.",
            "This kind of self-love is not only permitted but admirable. The virtuous person \u2018loves themselves\u2019 by loving excellence."
        ],
        choices: [
            { text: "Do the happy need friends then?", next: 'need_friends' }
        ],
        concepts: []
    },
    selflove_healthy: {
        text: [
            "Exactly. There are two kinds of self-love. The vulgar kind gratifies our worst impulses \u2014 appetite, vanity, greed. This is rightly condemned.",
            "But the noble kind means loving what is best in ourselves: our capacity for reason, virtue, and noble action. The good person who acts virtuously is, in the deepest sense, a friend to themselves. Their soul is in harmony, not at war.",
            "And paradoxically, this good self-lover is also the most generous person. They willingly give up money, honors, even their life for friends \u2014 choosing what is noble over what is materially advantageous."
        ],
        choices: [
            { text: "Do happy people need friends?", next: 'need_friends' }
        ],
        concepts: []
    },
    selflove_precondition: {
        text: [
            "There is real wisdom in that. The relationship a person has with their friends reflects their relationship with themselves. The good person\u2019s soul is in harmony; they wish themselves well, enjoy their own company, and act consistently.",
            "These are the same qualities we look for in friendship! So in a sense, the good person is first a friend to themselves, and this overflows into friendship with others.",
            "But does the truly happy person, who has everything, still need friends?"
        ],
        choices: [
            { text: "That\u2019s an interesting question", next: 'need_friends' }
        ],
        concepts: []
    },
    need_friends: {
        text: [
            "Some say the supremely happy person is self-sufficient and needs no friends. But I disagree strongly. Happiness is an activity, not a possession. And many of the best activities are shared.",
            "The good person perceives their own existence as good. But just as we perceive ourselves through our own activities, we also perceive our friend\u2019s goodness through theirs. A virtuous friend is like a mirror in which we see goodness made real.",
            "Moreover: life is better lived together. The happy person needs friends to share in virtuous activity, in conversation, in the mutual pursuit of the good. Solitary happiness is incomplete."
        ],
        choices: [
            { text: "What about when friendships break down?", next: 'breakdowns' },
            { text: "This is beautiful \u2014 let\u2019s summarize", next: 'end' }
        ],
        concepts: ['b9_need']
    },
    breakdowns: {
        text: [
            "A practical concern. When friends change \u2014 when one becomes vicious while the other remains good \u2014 must the friendship continue? I think not. We are not obligated to maintain friendships with those who have become fundamentally different from who they were.",
            "But we should first try to help them recover their character, for the sake of the friendship that was. Only when the change is irreversible should we withdraw. And even then, we should remember what was shared.",
            "The bonds of friendship are among the deepest in human life. They deserve patience and care."
        ],
        choices: [
            { text: "Let\u2019s summarize what we\u2019ve learned", next: 'end' }
        ],
        concepts: []
    },
    end: {
        text: [
            "Friendship is not a luxury but a necessity of the good life. True self-love means loving what is best in oneself, which overflows into love for others. Even the happiest person needs friends \u2014 for shared activity, mutual perception of goodness, and the completeness of a life lived together.",
            "We are, as I often say, political animals. We are meant to live and flourish together."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "Noble self-love means loving what is best in ourselves \u2014 reason and virtue",
            "The good person is first a friend to themselves, with a soul in harmony",
            "Even the happy person needs friends for shared virtuous activity",
            "Friends are like mirrors reflecting goodness back to us",
            "When friends change fundamentally, the friendship may rightly end"
        ],
        quote: {
            text: "In poverty and other misfortunes of life, true friends are a sure refuge. They keep the young out of mischief; they comfort and aid the old; and they help those in the prime of life to noble deeds.",
            cite: "Nicomachean Ethics, Book VIII, Ch. 1"
        }
    }
},

// ═══ BOOK X: Happiness & Contemplation ══════════════════
10: {
    start: {
        text: [
            "We come now to the summit of our inquiry. We began by asking what happiness is, and we said it is virtuous activity. But there are different kinds of virtue. Which activity brings the highest happiness?",
            "Is it the life of practical virtue \u2014 the life of the just, the courageous, the generous? Or is there something higher still?"
        ],
        choices: [
            { text: "The practical life \u2014 making the world better", next: 'practical_life' },
            { text: "Contemplation and understanding", next: 'contemplative_direct' },
            { text: "A balance of both", next: 'balance' }
        ],
        concepts: ['b10_contemplation']
    },
    practical_life: {
        text: [
            "The practical life is genuinely excellent. The just, courageous, and generous person lives a truly happy life. I do not deny this.",
            "But consider: practical virtue always needs external circumstances \u2014 the generous person needs wealth to give, the just person needs others to treat justly. And practical activity serves some further end beyond itself.",
            "Is there an activity that is complete in itself, that we pursue for no further reason, that brings the deepest satisfaction? I believe there is: contemplation \u2014 the activity of our highest capacity, directed at the highest objects."
        ],
        choices: [
            { text: "Why is contemplation the highest?", next: 'why_contemplation' }
        ],
        concepts: []
    },
    contemplative_direct: {
        text: [
            "You anticipate my conclusion! Contemplation \u2014 theoria \u2014 is the activity of our highest faculty (reason) directed at the highest objects (truth, reality, the eternal).",
            "It is the most continuous activity, the most pleasant, the most self-sufficient. The thinker needs little external equipment. And it is pursued entirely for its own sake \u2014 nothing comes from contemplating beyond the contemplation itself."
        ],
        choices: [
            { text: "But isn\u2019t this impractical?", next: 'why_contemplation' }
        ],
        concepts: []
    },
    balance: {
        text: [
            "A sensible answer, and not far from my own view. The practically virtuous life is genuinely happy \u2014 a secondary but real happiness. But if we must name the single highest activity, I believe it is contemplation.",
            "Let me explain why, and then we can consider how the two relate."
        ],
        choices: [
            { text: "I\u2019m listening", next: 'why_contemplation' }
        ],
        concepts: []
    },
    why_contemplation: {
        text: [
            "Consider: what makes an activity the best? It must be continuous, pleasant, self-sufficient, pursued for its own sake, and in accordance with our highest capacity.",
            "Contemplation meets all these criteria. It is the most continuous \u2014 we can think longer than we can do anything else. It is the most pleasant \u2014 philosophy offers the purest and most enduring pleasures. It is the most self-sufficient \u2014 the wise person can contemplate alone.",
            "And it is the activity of our most divine part. Reason is what is most truly ourselves. The life of contemplation is the life most proper to a human being."
        ],
        choices: [
            { text: "Doesn\u2019t practical virtue matter too?", next: 'practical_still' },
            { text: "This feels too detached from real life", next: 'too_detached' }
        ],
        concepts: []
    },
    practical_still: {
        text: [
            "Absolutely! I do not dismiss the practical life. The person of practical virtue \u2014 who is just, courageous, generous, and wise in daily affairs \u2014 lives a happy life, secondary in degree but genuinely happy.",
            "We are composite beings: not pure intellects, but embodied souls living among others. The practical virtues address our composite nature. Complete happiness may be contemplative, but human happiness requires both.",
            "And here is where my Ethics points beyond itself: the conditions for a good life \u2014 education, law, community \u2014 are the province of politics. Ethics leads naturally to political philosophy."
        ],
        choices: [
            { text: "How does ethics connect to politics?", next: 'politics' }
        ],
        concepts: ['b10_politics']
    },
    too_detached: {
        text: [
            "I hear this objection. But I am not saying we should all become hermit philosophers! We are social beings, and the practical virtues are essential to our nature.",
            "My point is this: in our best moments \u2014 when we contemplate truth, beauty, reality \u2014 we touch something divine. This is the peak of human experience, even if we cannot live there permanently.",
            "The good life includes both practical engagement and contemplative insight. But knowing what the summit looks like helps us orient the rest of the climb."
        ],
        choices: [
            { text: "Where does politics fit in?", next: 'politics' }
        ],
        concepts: ['b10_politics']
    },
    politics: {
        text: [
            "We began this journey asking what the good life is. We found that it requires virtue, and that virtue requires the right conditions \u2014 education, community, law, and leisure.",
            "But who creates these conditions? The legislator. This is why ethics leads to politics. Knowing what virtue is means little if people lack the social conditions to develop it.",
            "My Ethics is, in truth, the first part of a larger inquiry. The second part is my Politics \u2014 the study of how to create communities where human beings can flourish.",
            "And with that, our journey through the Nicomachean Ethics is complete."
        ],
        choices: [],
        isEnd: true,
        concepts: [],
        summary: [
            "The highest happiness is contemplation \u2014 reason directed at the highest truths",
            "Contemplation is the most continuous, pleasant, and self-sufficient activity",
            "The practical virtues provide a secondary but genuine form of happiness",
            "Human beings need both contemplation and practical engagement",
            "Ethics leads naturally to politics: creating conditions for human flourishing"
        ],
        quote: {
            text: "If reason is divine, then, in comparison with man, the life according to it is divine in comparison with human life. But we must not follow those who advise us, being men, to think of human things \u2014 we must, so far as we can, make ourselves immortal.",
            cite: "Nicomachean Ethics, Book X, Ch. 7"
        }
    }
}
};
