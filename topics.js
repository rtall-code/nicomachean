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
            "Many people believe so \u2014 that *happiness* is simply *pleasure*. But consider this: animals also pursue pleasure. If pleasure were the whole of happiness, the best human life would be no different from the life of grazing cattle.",
            "Does that seem right to you?"
        ],
        choices: [
            { text: "No \u2014 there must be more to it", next: 'deeper' },
            { text: "What\u2019s wrong with pleasure?", next: 'pleasure_defense' }
        ]
    },
    pleasure_defense: {
        text: [
            "Nothing is wrong with pleasure in itself! I am no enemy of enjoyment. But there is a difference between saying pleasure is good and saying it is *the highest good*.",
            "A musician takes pleasure in playing beautifully. But the pleasure follows from the *excellence* \u2014 not the other way around. Pleasure accompanies *good activity*; it does not replace it."
        ],
        choices: [
            { text: "So what is happiness then?", next: 'deeper' }
        ]
    },
    q_fortune: {
        text: [
            "A question that troubled me greatly. Consider: a good person who suffers terrible misfortune \u2014 the loss of children, exile, ruin \u2014 can we call them *happy*?",
            "I do not think so. One swallow does not make a summer, and one day does not make a person happy. *Happiness* requires a *complete life*."
        ],
        choices: [
            { text: "So happiness depends on luck?", next: 'fortune_luck' },
            { text: "That seems unfair", next: 'fortune_unfair' }
        ]
    },
    fortune_luck: {
        text: [
            "Not entirely. *External goods* are necessary conditions, but they are not sufficient. A wealthy fool is not happy. The foundation of happiness is *virtuous activity* \u2014 living well and doing well.",
            "But I am honest: some minimum of good fortune is needed. We are not disembodied minds. We need friends, some resources, and reasonable circumstances."
        ],
        choices: [
            { text: "How do we build happiness then?", next: 'deeper' }
        ]
    },
    fortune_unfair: {
        text: [
            "I understand the feeling. But notice: the truly *virtuous* person bears misfortune with dignity. They are resilient, not because they feel no pain, but because their *character* provides a stable foundation.",
            "They will never become truly miserable, because they will never do what is hateful and base. Still, I do not call them *blessed* in the midst of great suffering. Honesty demands that much."
        ],
        choices: [
            { text: "What is the foundation of happiness?", next: 'deeper' }
        ]
    },
    q_good_life: {
        text: [
            "The most important question one can ask. Let us think about it carefully.",
            "People pursue many things \u2014 pleasure, honour, wealth. But each of these is sought for the sake of something further. Is there something we pursue *for its own sake*, never as a means to something else?"
        ],
        choices: [
            { text: "Happiness?", next: 'deeper' },
            { text: "I\u2019m not sure such a thing exists", next: 'chain' }
        ]
    },
    chain: {
        text: [
            "If no *final end* exists, then our desires go on to infinity \u2014 each thing wanted for the sake of something else, endlessly. But that would make all desire empty and vain.",
            "There must be some end that is *complete* and *self-sufficient* \u2014 something that, when you have it, you lack nothing. Everyone calls this happiness, though they disagree about what it is."
        ],
        choices: [
            { text: "How do we figure out what it is?", next: 'deeper' }
        ]
    },
    deeper: {
        text: [
            "Here is my approach. A flute player\u2019s good lies in playing the flute well. A sculptor\u2019s good lies in sculpting well. If human beings have a distinctive *function*, then our good lies in performing that function excellently.",
            "What is our function? Not mere life \u2014 plants have that. Not perception \u2014 animals have that. What remains is the active life of the *rational part of the soul*.",
            "*Happiness*, then, is the activity of the soul in accordance with *virtue*, in a complete life."
        ],
        choices: [
            { text: "What do you mean by \u2018activity\u2019?", next: 'activity' },
            { text: "This makes sense \u2014 tell me more", next: 'conclusion' }
        ]
    },
    activity: {
        text: [
            "This is crucial. *Happiness* is not a feeling or a possession \u2014 it is an *activity*. Just as the Olympic crown goes not to the strongest but to those who compete, the good life belongs not to those who merely possess virtue but to those who exercise it.",
            "You cannot be happy asleep. Happiness requires action \u2014 living in a certain way, day after day, over a *complete life*."
        ],
        choices: [
            { text: "Let\u2019s wrap this up", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Happiness* is the activity of the soul in accordance with *virtue*, over a complete life. It is not a fleeting feeling but the shape of a well-lived life. It requires virtue as its core, some *external goods* as conditions, and time to unfold.",
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
    },
    deep_start: {
        text: [
            "You\u2019ve grasped Aristotle\u2019s basic account of *eudaimonia*. Now let\u2019s step into one of the liveliest debates in Aristotelian scholarship: what exactly does Aristotle mean when he calls happiness *the highest good*? This question has divided interpreters for decades, and the answer has profound consequences for how we understand the good life.",
            "The central puzzle is this. Aristotle says happiness is \u2018complete\u2019 and \u2018*self-sufficient*.\u2019 But he also says it is \u2018activity of the soul in accordance with virtue\u2019 \u2014 and in Book X, he seems to identify it specifically with philosophical *contemplation*. So is happiness one supreme activity, or is it an inclusive whole that embraces all the goods of a human life?",
            "Two towering figures staked out opposing positions on this question, and their debate has shaped virtually all subsequent scholarship."
        ],
        choices: [
            { text: "Tell me about the inclusive vs. dominant end debate", next: 'deep_a' },
            { text: "What about luck and vulnerability \u2014 can happiness be lost?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "In a landmark 1980 essay, *Ackrill* argued that Aristotle\u2019s happiness must be understood as an *inclusive end* \u2014 a composite good that contains within itself all intrinsically valuable activities. On this reading, happiness is not any single activity but the harmonious exercise of all the virtues, together with friendship, moderate prosperity, and even some good fortune. When Aristotle says happiness is \u2018self-sufficient,\u2019 Ackrill took this to mean it lacks nothing: it is the complete package of *human flourishing*.",
            "*Kraut* challenged this reading in his 1989 book *Aristotle on the Human Good*. Kraut argued that Aristotle means happiness in a \u2018*dominant end*\u2019 sense \u2014 it is one supremely valuable activity, namely the exercise of our highest virtue. The other goods are real goods, but they serve or support this central activity rather than being parts of happiness itself. Kraut pointed to Book X, where Aristotle ranks contemplation above practical virtue, as strong evidence for the dominant reading.",
            "The stakes of this debate are not merely academic. If *Ackrill* is right, then Aristotle\u2019s ethics is pluralistic and humane \u2014 a good life weaves together many kinds of value. If *Kraut* is right, Aristotle is more radical: the best life is the life of the mind, and everything else is scaffolding. Which vision of *the good life* strikes you as more compelling \u2014 or more true to Aristotle\u2019s text?"
        ],
        choices: [
            { text: "This is fascinating \u2014 let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Nussbaum*\u2019s *The Fragility of Goodness* (1986) opened up a dimension of Aristotle\u2019s ethics that many philosophers had downplayed: the role of luck. Nussbaum argued that Aristotle, unlike Plato and the Stoics, took seriously the idea that the good life is vulnerable to fortune. You can be virtuous and still be struck by catastrophe \u2014 the loss of children, exile, poverty. Aristotle himself says that no one would call Priam happy.",
            "This is a deeply unsettling thought for an ethical theory. If *happiness* requires *external goods* and a complete life, then it is partly out of our control. Nussbaum saw this not as a weakness in Aristotle but as a mark of his honesty. The Stoics tried to make virtue immune to fortune, declaring that the sage is happy even on the rack. Aristotle refused this move. He acknowledged that human goodness is bound up with *human fragility* \u2014 with our bodies, our relationships, our dependence on circumstances we did not choose.",
            "*Nussbaum*\u2019s reading has been enormously influential, but it raises a hard question: if the good life can be wrecked by bad luck, what kind of guide can ethics really be? Aristotle\u2019s answer seems to be that *virtue* gives us the best chance at happiness and the greatest resilience in misfortune \u2014 but it cannot make us invulnerable. That tension, Nussbaum argues, is precisely what makes Aristotle\u2019s ethics so humanly real."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The scholarly debate over *eudaimonia* remains one of the richest in all of philosophy. Whether happiness is an *inclusive end* or a *dominant end*, and whether it is fragile or resilient, these questions go to the heart of what it means to live well. The readings below will take you deeper into these arguments.",
            "Each of these works rewards careful study, and together they show how a 2,400-year-old text can still generate urgent philosophical disagreement."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'J.L. Ackrill', title: 'Aristotle on Eudaimonia', year: '1980' },
            { author: 'Richard Kraut', title: 'Aristotle on the Human Good', year: '1989' },
            { author: 'Martha Nussbaum', title: 'The Fragility of Goodness', year: '1986' }
        ]
    }
},

// ═══ HUMAN FUNCTION ══════════════════════════════════════
function: {
    q_purpose: {
        text: [
            "Consider: the eye has a *function* \u2014 to see. The hand has a function \u2014 to grasp. Every organ, every craft, has its characteristic work. Would it not be strange if the whole human being, composed of parts that each have functions, had no function of its own?"
        ],
        choices: [
            { text: "That does seem odd", next: 'search' },
            { text: "Maybe humans are too complex for a single purpose", next: 'objection' }
        ]
    },
    objection: {
        text: [
            "A thoughtful objection. I do not mean something narrow \u2014 not a single task, but a *distinctive capacity*. Just as a good eye is one that sees well, a good human is one who excels at what is *distinctly human*."
        ],
        choices: [
            { text: "What is distinctly human then?", next: 'search' }
        ]
    },
    q_reason: {
        text: [
            "You anticipate my conclusion. But let us reason our way there properly. We share life with plants, and perception with animals. What is left that belongs to us alone?",
            "It is the life of the *rational soul* \u2014 our capacity to think, deliberate, and act according to principle."
        ],
        choices: [
            { text: "But animals can be clever too", next: 'animals' },
            { text: "How does this connect to living well?", next: 'connection' }
        ]
    },
    animals: {
        text: [
            "Animals can learn and respond, yes. But they do not *deliberate* about what is good, formulate principles, or act on reasons they have examined. A dog can be trained; it cannot decide to change its own character.",
            "*Reason* in the fullest sense \u2014 the capacity to reflect on how to live \u2014 is distinctly ours."
        ],
        choices: [
            { text: "And this relates to happiness?", next: 'connection' }
        ]
    },
    q_function_happiness: {
        text: [
            "Directly. If the *function* of a harpist is to play the harp, then a good harpist plays the harp well. If the function of a human is *rational activity*, then a good human exercises reason well \u2014 with excellence, with *virtue*.",
            "*The good* for a human being is therefore the excellent exercise of our distinctive capacity. This is what I call *happiness*."
        ],
        choices: [
            { text: "So being good and being happy are connected?", next: 'connection' },
            { text: "This feels very abstract", next: 'practical' }
        ]
    },
    search: {
        text: [
            "We share nutrition and growth with plants. We share sensation and movement with animals. What remains? The active life of the part that has *reason* \u2014 our capacity to think, deliberate, and govern our actions by principle.",
            "This is the *human function*: not merely to live, but to live *rationally*."
        ],
        choices: [
            { text: "And how does this connect to the good life?", next: 'connection' }
        ]
    },
    connection: {
        text: [
            "If our *function* is rational activity, then our good is rational activity performed excellently \u2014 that is, in accordance with *virtue*. Just as a good knife is one that cuts well, a good human is one who lives and acts well according to reason.",
            "This is not just abstract philosophy. It means the good life is one where you exercise your best capacities \u2014 in your relationships, your decisions, your work, your thinking."
        ],
        choices: [
            { text: "What counts as \u2018well\u2019?", next: 'conclusion' },
            { text: "This is compelling", next: 'conclusion' }
        ]
    },
    practical: {
        text: [
            "Let me make it concrete. A person who reasons well about how to treat friends, how to spend money, how to face danger, how to manage anger \u2014 that person is exercising their *human function* excellently.",
            "The *function argument* is not about sitting in a chair and thinking. It is about living a fully human life, guided by *reason*, in all its practical dimensions."
        ],
        choices: [
            { text: "That makes more sense", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "The *function argument* is this: since every being with a function has its good in performing that function well, and since the human function is *rational activity*, the human good is excellent rational activity \u2014 which is *virtue*.",
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
    },
    deep_start: {
        text: [
            "The *function argument* is one of the most audacious moves in the history of ethics: Aristotle claims to derive what is good for human beings from what human beings are. If we can identify our distinctive function (*ergon*), we can identify our distinctive *excellence* \u2014 and therefore our good. It is elegant, powerful, and deeply controversial.",
            "Modern philosophers have attacked this argument from multiple angles. Some say it commits a basic logical error \u2014 the so-called *naturalistic fallacy* of deriving \u2018ought\u2019 from \u2018is.\u2019 Others have tried to rehabilitate and extend the argument in surprising new directions. The debate cuts to the heart of whether ethics can be grounded in human nature at all.",
            "Let\u2019s explore two major threads in this scholarly conversation."
        ],
        choices: [
            { text: "Is the function argument logically valid?", next: 'deep_a' },
            { text: "How has the function argument been developed in modern thought?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "*Nagel*, in his influential 1972 essay \u2018Aristotle on Eudaimonia,\u2019 offered a sympathetic reconstruction of the *function argument* while acknowledging its difficulties. Nagel argued that Aristotle is not simply saying \u2018humans reason, therefore they should reason.\u2019 Rather, Aristotle is identifying the activity that makes human life go well or badly in a distinctively human way. The function argument is less a logical deduction than an attempt to identify what kind of creature we are and what *flourishing* looks like for that kind of creature.",
            "*Williams*, in *Ethics and the Limits of Philosophy* (1985), was more skeptical. Williams argued that even if we grant that humans have a characteristic activity, it does not follow that this activity is good or that we ought to pursue it. Resistance, defiance, even self-destruction can be distinctively human responses. Williams worried that the function argument smuggles in normative assumptions disguised as neutral descriptions of human nature. The gap between what we are and what we should be, *Williams* insisted, cannot be closed by biology or metaphysics alone.",
            "This debate remains unresolved. Defenders of Aristotle argue that *Williams* misreads the argument \u2014 that Aristotle is working within a framework where the nature of a thing and its good are not separate questions. Critics reply that this just pushes the problem back: why accept that framework?"
        ],
        choices: [
            { text: "Show me the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Perhaps the most creative modern development of Aristotle\u2019s function argument is *Nussbaum*\u2019s *capabilities approach*, developed in her 1995 essay \u2018Aristotle on Human Nature and the Foundations of Ethics\u2019 and in her broader political philosophy. Nussbaum took Aristotle\u2019s insight \u2014 that the good life requires the exercise of distinctively human capacities \u2014 and transformed it into a framework for global justice.",
            "*Nussbaum* argued that we can identify a list of central *human capabilities*: life, bodily health, bodily integrity, the use of senses and imagination, emotional development, *practical reason*, affiliation with others, connection with nature, play, and control over one\u2019s environment. A just society, on this view, is one that ensures every citizen has access to at least a threshold level of each capability. This is Aristotle\u2019s function argument writ large \u2014 applied not just to individual ethics but to political institutions.",
            "What makes *Nussbaum*\u2019s approach so powerful is that it avoids some of the objections to the original argument. She does not claim that there is one single *human function*. Instead, she identifies a plurality of capabilities that together constitute a fully human life. Critics argue that any such list is culturally biased, but Nussbaum responds that the capabilities are deliberately abstract and open to local specification. The Aristotelian root is unmistakable: human nature, properly understood, tells us something about human good."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The *function argument* remains a flashpoint in moral philosophy. Whether you see it as a brilliant insight or a seductive fallacy depends on deep questions about the relationship between nature, reason, and value. The readings below represent some of the most important contributions to this ongoing debate.",
            "*Nagel* and *Williams* offer sharply contrasting assessments of the argument\u2019s logical credentials, while *Nussbaum* shows how it can be reimagined for contemporary ethics and political philosophy."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'Thomas Nagel', title: 'Aristotle on Eudaimonia', year: '1972' },
            { author: 'Martha Nussbaum', title: 'Aristotle on Human Nature and the Foundations of Ethics', year: '1995' },
            { author: 'Bernard Williams', title: 'Ethics and the Limits of Philosophy', year: '1985' }
        ]
    }
},

// ═══ VIRTUE & CHARACTER ══════════════════════════════════
virtue: {
    q_born: {
        text: [
            "Neither entirely, and both partially. We are born with the capacity for *virtue*, but not with virtue itself. No one is born courageous or just \u2014 but everyone is born with the potential to become so.",
            "Think of it this way: we are born with eyes, but we do not learn to see. The senses come fully formed. Virtues are different. How do you think we acquire them?"
        ],
        choices: [
            { text: "Through practice?", next: 'practice' },
            { text: "Through education and learning?", next: 'learning' }
        ]
    },
    q_teach: {
        text: [
            "Here I must make an important distinction. *Intellectual virtues* \u2014 like scientific knowledge and wisdom \u2014 can be taught through instruction. But *moral virtues* \u2014 courage, temperance, justice \u2014 cannot be acquired merely by listening to a lecture.",
            "How, then?"
        ],
        choices: [
            { text: "By doing them?", next: 'practice' },
            { text: "By having good role models?", next: 'models' }
        ]
    },
    q_habit: {
        text: [
            "You go straight to the heart of my teaching. In Greek, the word for *moral virtue* (\u00EAthik\u00EA) comes from the word for *habit* (\u00EAthos) \u2014 with only a slight change in spelling. This is not a coincidence.",
            "We become builders by building. We become musicians by playing music. And we become virtuous by practising virtue."
        ],
        choices: [
            { text: "But isn\u2019t that circular?", next: 'circular' },
            { text: "How do you start if you\u2019re not yet virtuous?", next: 'start' }
        ]
    },
    practice: {
        text: [
            "Exactly! We become courageous by doing courageous things. We become generous by giving. We become just by acting justly. The *moral virtues* come through *habituation* \u2014 through repeated practice until the right response becomes second nature.",
            "This is why childhood training matters so much. The habits we form early shape the *character* we carry for life."
        ],
        choices: [
            { text: "But how do you start?", next: 'start' },
            { text: "Can bad habits be reversed?", next: 'reverse' }
        ]
    },
    learning: {
        text: [
            "Education plays a role, but not through lectures alone. *Moral virtue* comes through doing. You cannot become courageous just by reading about courage. You must face frightening situations and learn to respond well.",
            "This is why I say *virtue* comes from *habit*, not from instruction."
        ],
        choices: [
            { text: "How does habit work exactly?", next: 'practice' }
        ]
    },
    models: {
        text: [
            "Role models matter enormously! We learn *virtue* partly by imitating those who already have it. A child raised among virtuous people absorbs their patterns of feeling and acting.",
            "But imitation must eventually become internalized. The truly virtuous person does not merely copy others \u2014 they act from their own settled *character*."
        ],
        choices: [
            { text: "How does character become settled?", next: 'practice' }
        ]
    },
    circular: {
        text: [
            "An excellent objection. But consider: is it circular to say we learn to build by building? The first acts are imperfect, guided by teachers and models. Through repetition, we develop the skill. Then the skilled builder builds from genuine *expertise*.",
            "*Virtue* works the same way. Early acts of courage may be shaky and guided. Through practice, they become natural \u2014 expressions of a stable *character*."
        ],
        choices: [
            { text: "That makes sense", next: 'conclusion' }
        ]
    },
    start: {
        text: [
            "You begin under guidance \u2014 from parents, teachers, laws. They direct you to act rightly before you fully understand why. Through repeated right action, you develop the *disposition*. Eventually, you act well because your *character* demands it.",
            "This is why good laws and good education are so critical. They provide the framework within which virtue can grow."
        ],
        choices: [
            { text: "Can character change later in life?", next: 'reverse' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    reverse: {
        text: [
            "With great difficulty. Just as health is easier to maintain than to restore, *virtue* is easier to build than to rebuild. But it is not impossible \u2014 if a person commits to sustained effort and better *habits*.",
            "This is why I insist on getting it right from the start. Character, once formed, is remarkably persistent."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Virtue* is not innate and cannot be taught through words alone. It comes through *habituation* \u2014 through repeated practice of right action until it becomes second nature. *Character* is built like a craft: by doing, under guidance, until excellence becomes who you are."
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
    },
    deep_start: {
        text: [
            "Aristotle\u2019s account of *virtue* and *character* was largely sidelined in modern philosophy for centuries, as Kantian and utilitarian frameworks dominated ethical theory. Then, in the mid-twentieth century, something remarkable happened: *virtue ethics* came roaring back. The story of this revival \u2014 and the fierce challenges it has provoked \u2014 is one of the most exciting chapters in recent philosophy.",
            "The revival began with a single, electrifying essay. It continued with ambitious attempts to rebuild moral philosophy on Aristotelian foundations. And it was met with a startling challenge from an unexpected quarter: experimental psychology. The question at the centre of all this is deceptively simple: does *character*, as Aristotle describes it, actually exist?",
            "Let\u2019s trace two major threads of this debate."
        ],
        choices: [
            { text: "How did virtue ethics make its comeback?", next: 'deep_a' },
            { text: "What is the challenge from psychology?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "In 1958, *Anscombe* published \u2018Modern Moral Philosophy,\u2019 one of the most consequential essays in twentieth-century ethics. Anscombe argued that modern moral philosophy \u2014 both Kantian and utilitarian \u2014 was fundamentally confused. Concepts like \u2018moral obligation\u2019 and \u2018moral ought\u2019 were remnants of a divine-law framework that modern secular philosophers had abandoned without finding a replacement. Her radical proposal: we should stop doing moral philosophy in this broken framework and return to the Aristotelian concepts of *virtue*, *character*, and *human flourishing*.",
            "*MacIntyre* took up Anscombe\u2019s challenge in *After Virtue* (1981), one of the most widely read works of moral philosophy in the last century. MacIntyre argued that modern moral discourse is in a state of grave disorder \u2014 we use moral language, but we have lost the coherent framework that once gave it meaning. His solution was to recover an Aristotelian account of the virtues, grounded not in Aristotle\u2019s metaphysical biology but in the concept of a \u2018practice\u2019 \u2014 a cooperative human activity with internal standards of excellence. On MacIntyre\u2019s view, *virtues* are the qualities that enable us to achieve the goods internal to practices and to sustain the communities in which practices thrive.",
            "Together, *Anscombe* and *MacIntyre* transformed the landscape of ethics. *Virtue ethics* is now recognised as a major tradition alongside deontology and consequentialism, and Aristotle\u2019s Nicomachean Ethics is once again treated as a living contribution to moral philosophy, not merely a historical artefact."
        ],
        choices: [
            { text: "Impressive \u2014 show me the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Just as virtue ethics was enjoying its renaissance, a challenge emerged from social psychology. In his 2002 book *Lack of Character*, *Doris* marshalled decades of experimental evidence to argue that stable, global *character traits* \u2014 the kind Aristotle describes \u2014 may not actually exist. The evidence comes from studies like the Milgram obedience experiments and Darley and Batson\u2019s Good Samaritan study, which show that people\u2019s behaviour is far more sensitive to situational pressures than to any enduring inner disposition. Whether someone helps a stranger depends more on whether they are in a hurry than on whether they are a \u2018generous person.\u2019",
            "*Harman* pressed a similar argument: if character traits were real and robust, we should see far more behavioural consistency across situations than the experiments reveal. The implication is devastating for Aristotelian ethics: if there is no such thing as a stable courageous or just character, then the whole project of cultivating *virtue* is built on a psychological fiction.",
            "Virtue ethicists have responded vigorously. Some argue that Aristotle never claimed most people have stable virtues \u2014 his point is precisely that full *virtue* is rare and requires extensive *habituation*. Others point out that the experiments test ordinary people in unusual situations, not the kind of deeply habituated character Aristotle has in mind. The debate has forced virtue ethicists to engage seriously with empirical psychology, which has arguably made the tradition stronger and more rigorous."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The revival of *virtue ethics* and the *situationist challenge* have together produced one of the most dynamic debates in contemporary moral philosophy. These readings will take you into the heart of it \u2014 from *Anscombe*\u2019s foundational provocation, through *MacIntyre*\u2019s ambitious reconstruction, to *Doris*\u2019s empirical challenge.",
            "Whether Aristotle\u2019s vision of character can survive the evidence of social psychology is a question that remains genuinely open, and engaging with it will sharpen your understanding of what virtue ethics does and does not claim."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'G.E.M. Anscombe', title: 'Modern Moral Philosophy', year: '1958' },
            { author: 'Alasdair MacIntyre', title: 'After Virtue', year: '1981' },
            { author: 'John Doris', title: 'Lack of Character', year: '2002' }
        ]
    }
},

// ═══ THE GOLDEN MEAN ═════════════════════════════════════
mean: {
    q_always_middle: {
        text: [
            "Not a simple arithmetic middle \u2014 that would be absurd. *The mean* is relative to the person and the situation. The right amount of food for an athlete differs from the right amount for a beginner. What counts as courageous depends on the danger and your capacity.",
            "And some things have no *mean* at all. There is no moderate amount of murder or adultery. Some actions are base in themselves."
        ],
        choices: [
            { text: "How do you find the mean?", next: 'finding' },
            { text: "Give me an example", next: 'example' }
        ]
    },
    q_find_balance: {
        text: [
            "It is not easy \u2014 which is precisely why *virtue* is rare and praiseworthy. Finding the centre of a circle is harder than just picking any point on it.",
            "But there are practical guidelines. First: identify which extreme you are naturally drawn to, and lean away from it. Second: be wary of pleasure, for it clouds judgment. Third: attend to the particular circumstances rather than applying rigid rules."
        ],
        choices: [
            { text: "Can you give an example?", next: 'example' },
            { text: "Why is it so hard?", next: 'why_hard' }
        ]
    },
    q_relative: {
        text: [
            "Absolutely. This is one of my most important points. *The mean* is not the same for everyone. What is generous for a student is stingy for a wealthy person. What is courageous for a trained soldier differs from what is courageous for a civilian.",
            "The *virtuous* person perceives the right amount in each situation \u2014 the right action, at the right time, toward the right person, for the right reason."
        ],
        choices: [
            { text: "Doesn\u2019t that make it subjective?", next: 'subjective' },
            { text: "Show me how it works in practice", next: 'example' }
        ]
    },
    example: {
        text: [
            "Take *courage*. It is a mean between two extremes: *cowardice* (too much fear, too little confidence) and *rashness* (too little fear, too much confidence). The courageous person fears what is truly dangerous, but faces it when reason demands.",
            "Or *generosity*: between wastefulness (giving too much, to the wrong people, at the wrong times) and stinginess (giving too little). The generous person gives the right amount, to the right people, at the right time."
        ],
        choices: [
            { text: "This makes sense", next: 'conclusion' },
            { text: "But who decides what\u2019s \u2018right\u2019?", next: 'who_decides' }
        ]
    },
    finding: {
        text: [
            "Three practical rules. First: identify the *extreme* you are drawn to, and drag yourself toward the opposite. If you are naturally timid, practise boldness. Second: beware pleasure \u2014 we are poor judges when pleasure is involved. Third: look at the details of each situation.",
            "And attend to the reactions of wise people. The *practically wise* person perceives the mean almost by feel."
        ],
        choices: [
            { text: "Who is this practically wise person?", next: 'who_decides' }
        ]
    },
    subjective: {
        text: [
            "Not subjective \u2014 *relative*. There is a difference. The right amount of food for an athlete is objectively more than for a sedentary person. It is relative to real differences, not to whims.",
            "*The mean* is determined by reason \u2014 specifically, the reason of the *practically wise* person. It is the response that a person of good judgment would make in these circumstances."
        ],
        choices: [
            { text: "Let\u2019s wrap this up", next: 'conclusion' }
        ]
    },
    why_hard: {
        text: [
            "Because getting it right requires sensitivity to the particulars of each situation. There is no formula, no algorithm. It requires experience, good judgment, and well-trained *emotional responses*.",
            "This is why *virtue* cannot be reduced to following rules. It is more like a skill than a science."
        ],
        choices: [
            { text: "Makes sense. Let\u2019s summarize.", next: 'conclusion' }
        ]
    },
    who_decides: {
        text: [
            "The person of *practical wisdom* \u2014 the *phronimos*. This is the person whose experience and good character have given them reliable judgment. We recognize them by their track record of good decisions.",
            "It may seem circular, but all standards ultimately rest on exemplars. We learn what good music sounds like from good musicians. We learn what virtue looks like from virtuous people."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Virtue* is a mean between two vices \u2014 one of *excess*, one of *deficiency*. But the mean is relative to the person and the situation, not a rigid midpoint. Finding it requires *practical wisdom*, experience, and well-formed character."
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
    },
    deep_start: {
        text: [
            "Aristotle\u2019s *doctrine of the mean* is perhaps the most recognisable idea in his ethics \u2014 and one of the most frequently misunderstood. Scholars have long debated whether the doctrine provides genuine practical guidance or whether it is, at bottom, a sophisticated tautology. If the right action is the one that hits the mean, and the mean is whatever the person of *practical wisdom* would choose, have we actually been told anything useful?",
            "This worry has generated a rich body of scholarship. Some defenders have argued that the doctrine is more substantive than it first appears. Others have used it as a springboard for rethinking what virtue ethics can and cannot do as a guide to action. And some critics have concluded that the doctrine, while illuminating as a description of virtue, fails as a practical decision-procedure.",
            "Two debates in particular are worth exploring here."
        ],
        choices: [
            { text: "Is the doctrine of the mean actually useful?", next: 'deep_a' },
            { text: "Can virtue ethics guide action at all?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "*Urmson*, in his influential 1973 essay \u2018Aristotle\u2019s Doctrine of the Mean,\u2019 offered one of the most important defences of the doctrine. Urmson argued that critics who dismiss the mean as trivial are misreading Aristotle. The doctrine is not a *decision-procedure* \u2014 it does not tell you, in advance, exactly what to do. Rather, it is a structural account of what virtue looks like. Every virtue involves getting something right: the right amount of emotion, directed at the right object, at the right time, in the right way. The mean is a framework for understanding the shape of virtuous response, not a formula for calculating it.",
            "*Brown*, in her 1997 essay \u2018What is the Mean Relative to Us in Aristotle\u2019s Ethics?,\u2019 pushed further into the question of what \u2018*relative to us*\u2019 actually means. Brown argued that interpreters have been too quick to read this as mere subjectivism \u2014 as if the mean varies arbitrarily from person to person. Instead, she proposed that \u2018relative to us\u2019 means relative to the kind of situation an agent faces, including their capacities, relationships, and responsibilities. The mean is objective in the sense that there is a genuinely right response; it is relative only in that the right response depends on the full context of the agent\u2019s situation.",
            "Critics remain unconvinced. If the doctrine says \u2018do the right thing in the right way at the right time,\u2019 it seems to presuppose the very moral knowledge it is supposed to provide. The charge of *circularity* is hard to shake entirely \u2014 but defenders argue that this is a feature, not a bug: ethics cannot be reduced to a rulebook, and Aristotle knew it."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Hursthouse*, in her 1999 book *On Virtue Ethics*, tackled head-on the objection that virtue ethics cannot guide action. Critics had long complained that virtue ethics tells you to \u2018be virtuous\u2019 but never tells you what to do. Hursthouse argued that this is simply false. Virtue ethics generates action guidance through what she called *v-rules*: do what is honest, do what is courageous, do not do what is cruel, do not do what is unjust. These rules are no less specific than utilitarian or Kantian principles \u2014 and they have the advantage of being grounded in a rich account of human character and flourishing.",
            "*Hursthouse* also addressed the problem of *moral dilemmas*, where v-rules conflict. She argued that virtue ethics handles these cases no worse than its rivals \u2014 and perhaps better, because it acknowledges the genuine moral difficulty of such situations rather than pretending that a single principle can resolve every conflict. The person of *practical wisdom* may not have a formula, but they have something more valuable: the perceptual sensitivity and emotional attunement to recognise what a situation demands.",
            "This debate connects directly to the *doctrine of the mean*. If the mean is \u2018determined by reason and in the way in which the person of practical wisdom would determine it,\u2019 then *practical wisdom* \u2014 *phronesis* \u2014 does the real work. The doctrine of the mean is not a substitute for wisdom; it is a description of what wisdom achieves. *Hursthouse*\u2019s contribution was to show that this is a strength of *virtue ethics*, not a weakness: moral life genuinely requires judgment, and any ethical theory that pretends otherwise is deceiving itself."
        ],
        choices: [
            { text: "Show me the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The *doctrine of the mean* continues to provoke philosophical argument. Is it a substantive guide to action or an elegant redescription of what we already need to know? The answer may depend on what you expect an ethical theory to do. The readings below represent the strongest voices on each side of this debate.",
            "*Urmson* and *Brown* defend the doctrine\u2019s depth and coherence, while *Hursthouse* shows how virtue ethics as a whole can meet the challenge of practical guidance. Together, they demonstrate that the doctrine of the mean is far richer than the simple \u2018moderation in all things\u2019 it is often reduced to."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'J.O. Urmson', title: 'Aristotle\u2019s Doctrine of the Mean', year: '1973' },
            { author: 'Rosalind Hursthouse', title: 'On Virtue Ethics', year: '1999' },
            { author: 'Lesley Brown', title: 'What is the Mean Relative to Us in Aristotle\u2019s Ethics?', year: '1997' }
        ]
    }
},

// ═══ COURAGE ═════════════════════════════════════════════
courage: {
    q_no_fear: {
        text: [
            "Not at all! A person who fears nothing is not *courageous* \u2014 they are *rash*, or perhaps simply mad. The courageous person does feel fear, but they face what must be faced because it is noble to do so.",
            "*Courage* is not fearlessness. It is the right response to fear."
        ],
        choices: [
            { text: "What should we fear?", next: 'what_fear' },
            { text: "So fear can be good?", next: 'good_fear' }
        ]
    },
    q_too_brave: {
        text: [
            "Yes! This is exactly the doctrine of *the mean* at work. *Courage* is a mean between *cowardice* (too much fear) and *rashness* (too little fear). The rash person rushes into danger without proper regard for the risk \u2014 that is not courage, it is recklessness.",
            "True *courage* involves clear-eyed assessment of danger, combined with the resolve to face it when honour demands."
        ],
        choices: [
            { text: "What should we be courageous about?", next: 'what_fear' },
            { text: "How do you tell courage from rashness?", next: 'distinction' }
        ]
    },
    q_about_what: {
        text: [
            "In the strictest sense, *courage* concerns the greatest dangers \u2014 above all, death. And the noblest form of courage faces death in battle, where the danger is greatest and the cause most honourable.",
            "But more broadly, *courage* applies to any situation where fear might prevent you from doing what is right."
        ],
        choices: [
            { text: "Only death in battle?", next: 'broader' },
            { text: "What does courage look like in daily life?", next: 'daily' }
        ]
    },
    what_fear: {
        text: [
            "Some fears are appropriate and even admirable. A good person fears *disgrace*, and rightly so. Not to fear disgrace would make you shameless, not courageous.",
            "The greatest test of *courage* is the fear of death, especially death in a *noble cause*. But the principle extends: courage is facing what is frightening for the sake of what is noble."
        ],
        choices: [
            { text: "What about everyday courage?", next: 'daily' }
        ]
    },
    good_fear: {
        text: [
            "Very much so. Fear of *disgrace* is not just acceptable \u2014 it is admirable. It shows you care about what matters. And some dangers genuinely should be feared. The person who fears nothing at all has no judgment.",
            "*Courage* is not about eliminating fear but about acting well despite it."
        ],
        choices: [
            { text: "What does courage look like in practice?", next: 'daily' }
        ]
    },
    distinction: {
        text: [
            "The *courageous* person acts for the right reason \u2014 because it is noble and honourable. The *rash* person acts from overconfidence or bravado. The difference shows especially when things go badly: the courageous person endures suffering steadily, while the rash person often collapses when real danger arrives."
        ],
        choices: [
            { text: "Can we develop courage?", next: 'daily' }
        ]
    },
    broader: {
        text: [
            "The strictest form concerns mortal danger, yes. But the principle is broader. Standing firm against social pressure, speaking truth to power, enduring hardship for a *noble cause* \u2014 these all involve *courage*.",
            "The common thread is: facing what is difficult or frightening because it is the right thing to do."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    daily: {
        text: [
            "*Courage* in daily life means speaking the truth when it is uncomfortable, standing by your principles under pressure, and enduring necessary hardship without complaint. It means doing the right thing even when it costs you.",
            "And like all *virtues*, it is developed through practice. You become courageous by doing courageous things \u2014 starting with small acts of bravery and building from there."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Courage* is *the mean* between *cowardice* and *rashness*. It involves feeling appropriate fear but facing danger for the sake of what is noble. It is not fearlessness but the right relationship with fear."
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
    },
    deep_start: {
        text: [
            "Scholars have long debated exactly what Aristotle means by *courage* and whether his account is too narrow. In Book III, Aristotle focuses almost exclusively on courage in battle \u2014 facing mortal danger in warfare. This is what he calls courage \u2018in the strictest sense.\u2019 But *David Pears*, in his influential essay \u2018Courage as a Mean,\u2019 argues that what makes Aristotle\u2019s account philosophically interesting is not the battlefield context but the underlying structure: courage requires correct *practical reasoning* about what is genuinely worth risking one\u2019s safety for.",
            "This raises a fundamental question. If courage is really about correct judgment under conditions of fear, then it should apply far beyond the battlefield. *Moral courage*, civic courage, the courage to endure chronic illness \u2014 all of these seem to involve the same underlying disposition. Yet Aristotle himself treats these as secondary or analogical cases. Is he right to do so, or does his account need to be broadened?",
            "Two lines of scholarly inquiry open up from here."
        ],
        choices: [
            { text: "Explore Pears on courage and practical reasoning", next: 'deep_a' },
            { text: "Explore whether Aristotle\u2019s account is too narrow", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "*David Pears* argues that Aristotle\u2019s treatment of courage is more sophisticated than it first appears. The key insight is that courage is not simply about overcoming fear through willpower \u2014 it requires a correct assessment of what is genuinely dangerous and what is genuinely worth facing danger for. The courageous person\u2019s fear must be calibrated by reason: they fear what they ought to fear and are confident where confidence is warranted. This means courage is deeply intertwined with *practical wisdom* (phronesis), since only a person with good judgment can reliably identify which risks are noble and which are foolish.",
            "*Pears* draws out an important consequence: the merely brave person who charges headlong into danger without thought is not truly courageous in Aristotle\u2019s sense. Genuine *courage* requires a kind of perceptual accuracy \u2014 seeing the situation clearly, understanding the stakes, and then acting despite the fear that accurate perception generates. This is why Aristotle insists that the courageous person feels fear. A person who feels no fear at all either lacks understanding of the danger or lacks the normal human attachment to life that makes risking it meaningful.",
            "This reading helps explain why Aristotle lists five \u2018imperfect\u2019 forms of courage \u2014 *civic courage*, experience-based confidence, spirited courage, optimistic courage, and courage from ignorance. Each one gets something right but falls short of the full integration of feeling, reason, and *noble motivation* that true courage requires."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Douglas Walton*\u2019s philosophical investigation of courage takes aim at what he sees as Aristotle\u2019s overly militaristic focus. *Walton* argues that courage is a virtue that spans many domains of life \u2014 physical, moral, psychological, and civic \u2014 and that no single context can claim to be the \u2018primary\u2019 instance. A whistleblower who risks their career to expose wrongdoing, a patient who endures painful treatment with steadfastness, a person who faces down social ostracism for the sake of principle \u2014 all of these exhibit genuine courage, not merely courage \u2018by analogy.\u2019",
            "*Daniel Putman* extends this line of thinking in his work on *psychological courage*. He argues that some of the most difficult acts of courage are internal: facing painful truths about oneself, confronting grief, overcoming the paralysis of anxiety. These require the same structure Aristotle identifies \u2014 correct perception of a genuine threat, appropriate fear, and action despite that fear \u2014 but the \u2018battlefield\u2019 is within the self. Putman suggests that Aristotle\u2019s framework is actually more flexible than Aristotle himself realized.",
            "The broader question is whether Aristotle\u2019s emphasis on mortal danger reflects a genuine philosophical point \u2014 that death is the ultimate test of character \u2014 or simply the assumptions of a culture that valued martial excellence. Most modern *virtue ethicists* follow *Walton* in broadening the account while keeping Aristotle\u2019s structural insights about *the mean*, practical reasoning, and noble motivation."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The scholarly conversation around Aristotle\u2019s *courage* reveals a pattern common in *virtue ethics*: Aristotle\u2019s structural insights often outrun his specific examples. His framework \u2014 courage as a *mean* shaped by *practical reasoning*, aimed at what is noble, involving genuine fear rightly managed \u2014 turns out to be remarkably powerful once freed from the narrow context of battlefield heroism.",
            "The readings below will take you deeper into these debates, from *Pears*\u2019s careful analysis of courage and practical reasoning to *Walton*\u2019s broader philosophical investigation and *Putman*\u2019s exploration of *psychological courage*."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: "David Pears", title: "Courage as a Mean", year: "1980" },
            { author: "Douglas Walton", title: "Courage: A Philosophical Investigation", year: "1986" },
            { author: "Daniel Putman", title: "Psychological Courage", year: "2004" }
        ]
    }
},

// ═══ TEMPERANCE ══════════════════════════════════════════
temperance: {
    q_avoid: {
        text: [
            "Not at all. I am not an ascetic. Pleasures are a natural part of life, and the *temperate* person enjoys them. But they enjoy the right pleasures, in the right amounts, at the right times.",
            "*Temperance* is not about denying yourself pleasure. It is about not being controlled by it."
        ],
        choices: [
            { text: "What pleasures does temperance concern?", next: 'which_pleasures' },
            { text: "How is that different from self-denial?", next: 'difference' }
        ]
    },
    q_denial: {
        text: [
            "A crucial distinction. The person who avoids all pleasure and takes no enjoyment in anything is not *temperate* \u2014 they are *insensible*. That, too, is an extreme to avoid.",
            "The *temperate* person enjoys bodily pleasures moderately. They are not tormented by desire for what they lack, nor distressed by abstaining from excess. Their relationship with pleasure is easy and natural."
        ],
        choices: [
            { text: "What kinds of pleasure are we talking about?", next: 'which_pleasures' }
        ]
    },
    q_hard: {
        text: [
            "Because *pleasure* is powerful and begins training us from childhood. It is woven into our lives so deeply that we can hardly separate our judgments from it. As I often say, we must be on guard against pleasure as the elders of Troy were on guard against Helen.",
            "The pull of immediate gratification is strong. *Temperance* requires that reason, not *appetite*, governs our choices."
        ],
        choices: [
            { text: "How do we develop temperance?", next: 'develop' },
            { text: "What exactly is temperance about?", next: 'which_pleasures' }
        ]
    },
    which_pleasures: {
        text: [
            "*Temperance* concerns *bodily pleasures* specifically \u2014 the pleasures of touch and taste. Food, drink, and physical gratification. No one is called intemperate for excessive love of music or mathematics.",
            "The *intemperate* person craves these pleasures beyond what is reasonable and suffers when they cannot satisfy those cravings. The *temperate* person desires them moderately and is not distressed by their absence."
        ],
        choices: [
            { text: "How do you develop this moderation?", next: 'develop' }
        ]
    },
    difference: {
        text: [
            "The self-denying person fights against their desires and suffers. The *temperate* person has trained their desires so that they do not crave excess in the first place. There is no *inner struggle* because their appetites are already aligned with reason.",
            "This is the difference between *continence* and *temperance*. The *continent* person resists temptation; the temperate person is not even tempted by excess."
        ],
        choices: [
            { text: "How do you reach that point?", next: 'develop' }
        ]
    },
    develop: {
        text: [
            "Through practice and *habituation*, starting young. By repeatedly choosing moderate pleasures, your appetites gradually align with reason. The process is like training a horse: at first it resists, but over time it learns to respond to gentle guidance.",
            "Good laws and education provide the structure. Personal effort does the rest."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Temperance* is *the mean* between *self-indulgence* and *insensibility*. The temperate person enjoys bodily pleasures moderately, without being enslaved by appetite. It is not about denial but about a well-ordered relationship with pleasure."
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
    },
    deep_start: {
        text: [
            "One of the most fascinating aspects of Aristotle\u2019s account of *temperance* is the distinction between the temperate person and the merely *continent* person. The continent person resists temptation through willpower \u2014 they feel strong desires for excessive pleasure but manage to override them through rational self-control. The temperate person, by contrast, does not even experience those excessive desires. Their appetites have been so thoroughly shaped by reason and *habituation* that they naturally desire only what is moderate and appropriate.",
            "This distinction has generated significant scholarly debate, particularly because it seems to conflict with a deeply influential idea in modern moral philosophy. Immanuel *Kant* appeared to argue that moral worth requires acting against inclination \u2014 that the person who does the right thing despite wanting to do otherwise deserves more moral credit than the person who does the right thing effortlessly. If Kant is right, then Aristotle\u2019s temperate person, who acts well without *inner struggle*, seems morally less impressive than the continent person who wages a constant battle against desire.",
            "*Philippa Foot* took up this challenge directly. Two scholarly paths emerge from this tension."
        ],
        choices: [
            { text: "Explore the temperance vs. continence distinction", next: 'deep_a' },
            { text: "Explore the Aristotle\u2013Kant debate on virtuous action", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "The distinction between *temperance* (sophrosyne) and *continence* (enkrateia) is one of Aristotle\u2019s most psychologically penetrating observations. *Amelie Rorty*, in her essay \u2018Where Does the Akratic Break Take Place?,\u2019 explores the underlying psychology. The continent person has correct beliefs about what is good but their desires pull them in a different direction. They succeed in following reason, but at a cost \u2014 the experience is one of inner conflict, tension, and effort. The temperate person has achieved something deeper: a harmony between reason and desire where the right action flows naturally from a unified character.",
            "*Howard Curzer*, in his comprehensive study of Aristotle\u2019s virtues, argues that this distinction reveals something important about Aristotle\u2019s entire ethical project. For Aristotle, the goal is not merely right action but a certain kind of character \u2014 one where all parts of the soul are working together. The *continent* person is, in a sense, at war with themselves. The *temperate* person has achieved internal peace. This is why Aristotle considers temperance a genuine virtue while continence, though admirable, falls short.",
            "The practical implication is striking: on Aristotle\u2019s view, someone who constantly struggles against the desire to overeat has not yet achieved the virtue of *temperance*, even if they always succeed in resisting. True temperance means the struggle itself has been resolved through long *habituation* and the proper formation of desire."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Philippa Foot*\u2019s influential essay \u2018*Virtues and Vices*\u2019 addresses the apparent conflict between Aristotle and *Kant* head-on. She considers the case of two charitable people: one who naturally feels compassion and gives readily, and another who feels no natural sympathy but forces themselves to give out of duty. Kant seems to favour the second person as more morally praiseworthy. But Foot argues that this gets things exactly wrong. The person who feels no compassion at all, she suggests, is actually revealing a deficiency of character \u2014 something is missing in them that ought to be there.",
            "*Foot*\u2019s analysis supports Aristotle\u2019s position: the truly virtuous person is not the one who constantly overcomes bad inclinations but the one whose inclinations have been properly formed. A person who must struggle mightily against the desire to be cruel is not more virtuous than someone who simply has no desire for cruelty. The absence of the bad desire is itself a mark of *good character*, not a moral disadvantage.",
            "This does not mean the *continent* person deserves no credit \u2014 far from it. *Continence* is better than *incontinence*, and the person who successfully resists temptation is doing well. But Aristotle and Foot agree that there is a higher state to aspire to: one where virtue has become, as it were, second nature, and the right action is also the desired action. The debate continues to shape how contemporary virtue ethicists think about the relationship between moral effort and moral excellence."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The scholarly debate around *temperance* cuts to the heart of what we think virtue is. Is it a matter of doing the right thing regardless of how you feel, or does genuine virtue require the transformation of feeling itself? Aristotle\u2019s answer \u2014 that true virtue involves the alignment of desire with reason \u2014 remains one of his most distinctive and challenging claims.",
            "The readings below explore this territory from multiple angles: *Foot*\u2019s landmark defense of Aristotelian virtue against Kantian objections, *Rorty*\u2019s analysis of the psychology underlying *akrasia* and continence, and *Curzer*\u2019s comprehensive treatment of how temperance fits into Aristotle\u2019s broader account of the virtues."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: "Philippa Foot", title: "Virtues and Vices", year: "1978" },
            { author: "Amelie Rorty", title: "Where Does the Akratic Break Take Place?", year: "1980" },
            { author: "Howard Curzer", title: "Aristotle and the Virtues", year: "2012" }
        ]
    }
},

// ═══ GENEROSITY ══════════════════════════════════════════
generosity: {
    q_too_generous: {
        text: [
            "Absolutely. This is the vice of *prodigality* \u2014 wastefulness. The prodigal person gives to the wrong people, at the wrong times, in the wrong amounts. They spend without thought and eventually have nothing left to give.",
            "*Generosity* is a mean between *prodigality* and *stinginess*."
        ],
        choices: [
            { text: "What makes giving virtuous?", next: 'virtuous' },
            { text: "Is stinginess worse than wastefulness?", next: 'comparison' }
        ]
    },
    q_money: {
        text: [
            "Primarily, yes. *Generosity* concerns the giving and receiving of wealth \u2014 especially giving. But it is not about the amount. A poor person who gives a little from what they have can be more generous than a rich person who gives much.",
            "What matters is the *disposition*: the generous person gives readily and takes pleasure in giving."
        ],
        choices: [
            { text: "What makes giving virtuous rather than foolish?", next: 'virtuous' }
        ]
    },
    q_virtuous_giving: {
        text: [
            "The *generous* person gives the right amounts, to the right people, at the right times, and takes pleasure in doing so. They do not give to impress others or out of guilt, but because giving is *noble*.",
            "And importantly: they are careful about getting wealth too. You cannot be *generous* without resources to give."
        ],
        choices: [
            { text: "Can you be generous without money?", next: 'without_money' },
            { text: "What about the extremes?", next: 'comparison' }
        ]
    },
    virtuous: {
        text: [
            "Three marks of *virtuous giving*. First: it goes to the right people \u2014 not to flatterers or to buy influence, but to those who deserve help. Second: it comes at the right time and in the right amount. Third: the giver takes genuine pleasure in it.",
            "The *generous* person does not agonize over money. They see wealth as a tool for *noble action*, not as an end in itself."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    comparison: {
        text: [
            "Interestingly, *prodigality* is closer to virtue than *stinginess*. The prodigal person at least has the impulse to give \u2014 they simply lack judgment. With maturity, they can be corrected. The stingy person\u2019s error is deeper: they cling to wealth and resist giving altogether.",
            "*Stinginess* is harder to cure because it is rooted in fear."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    without_money: {
        text: [
            "*Generosity* primarily concerns material resources, because that is where giving and receiving are most concrete. But the underlying *disposition* \u2014 openness, willingness to share, pleasure in benefiting others \u2014 can express itself in many ways.",
            "Still, I am realistic: some minimum of resources is needed to exercise this virtue fully."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Generosity* is *the mean* between *prodigality* and *stinginess*. It concerns giving and receiving wealth, but what matters is not the amount but the disposition \u2014 giving to the right people, at the right times, with genuine pleasure."
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
    },
    deep_start: {
        text: [
            "Aristotle\u2019s account of *generosity* (eleutheriotēs) raises a question that modern readers find hard to ignore: it seems to presuppose wealth. The generous person, as Aristotle describes them, has resources to give and gives them wisely. But what about people who have very little? Can generosity be a virtue for the poor, or is it an *aristocratic virtue* available only to those with means?",
            "This concern connects to a broader debate about whether Aristotle\u2019s ethical framework is bound to his social context \u2014 a world of wealthy Athenian citizens with slaves, property, and leisure. *Seneca*, writing from within the Stoic tradition several centuries later, offered a strikingly different account of beneficence in his treatise \u2018De Beneficiis\u2019 (On Benefits), one that places less emphasis on material wealth and more on the spirit of giving. And in our own time, *Peter Singer*\u2019s *effective altruism* movement offers yet another vision of what good giving looks like \u2014 one that would challenge Aristotle\u2019s assumptions in fundamental ways.",
            "Two scholarly paths open from here."
        ],
        choices: [
            { text: "Explore whether generosity requires wealth", next: 'deep_a' },
            { text: "Explore Aristotelian vs. utilitarian giving", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "*Howard Curzer*, in his detailed analysis of Aristotle\u2019s virtues, argues that Aristotle is more nuanced on this point than he first appears. Aristotle explicitly says that *generosity* is measured not by the amount given but by the *disposition* of the giver \u2014 and that a person of modest means who gives a small amount from what they have can be more generous than a rich person who gives a large sum. The virtue lies in the character, not the chequebook. Still, Curzer acknowledges that Aristotle\u2019s concrete examples tend to involve people of means, and his discussion of magnificence (megaloprepeia) \u2014 the related virtue of large-scale giving \u2014 is frankly aristocratic.",
            "*Seneca*\u2019s approach in \u2018On Benefits\u2019 offers a useful contrast. For Seneca, the most important aspect of giving is not what is given but how and why. A benefit conferred grudgingly, even if materially generous, is no true benefit. Conversely, a kind word or a small act of help given with genuine *goodwill* counts as a real gift. Seneca also emphasizes the relational dimension: giving creates bonds between people, and the virtue lies in maintaining those bonds through gratitude, reciprocity, and continued goodwill.",
            "This Stoic perspective helps address the worry about Aristotle\u2019s class bias. If we follow *Seneca* in locating *generosity* primarily in the spirit rather than the substance of giving, the virtue becomes available to anyone regardless of social position. Many modern *virtue ethicists* have argued for exactly this kind of broadening of Aristotle\u2019s account."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Peter Singer*\u2019s work, particularly \u2018*The Life You Can Save*,\u2019 presents a radically different vision of what good giving looks like. For Singer, the moral demand is simple and relentless: if you can prevent serious suffering at relatively little cost to yourself, you are morally required to do so. This means that the affluent have an obligation to give a substantial portion of their income to effective charities \u2014 those that produce the most good per dollar spent. Giving should be guided not by personal relationships or emotional resonance but by careful calculation of impact.",
            "Aristotle\u2019s approach could hardly be more different. The generous person gives to the right people \u2014 which for Aristotle means friends, fellow citizens, and those in one\u2019s community. They give at the right time and in the right way, which implies personal judgment, not algorithmic optimization. And crucially, they take pleasure in giving, which means the virtue is partly about what giving does to the giver\u2019s character, not only about the consequences for recipients. Aristotelian *generosity* is relational, contextual, and character-forming; Singerian *effective altruism* is impartial, maximizing, and consequence-focused.",
            "Neither approach is obviously correct. *Singer* would say that Aristotle\u2019s emphasis on giving to friends and community members is a form of moral parochialism \u2014 why should proximity matter when a child on the other side of the world needs help just as urgently? Aristotle might respond that Singer\u2019s framework misunderstands the nature of *virtue*: generosity is not just about transferring resources efficiently but about developing a certain kind of character through particular relationships. The debate remains one of the most productive tensions in contemporary moral philosophy."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The scholarly conversation around Aristotelian *generosity* forces us to confront deep questions about what giving is really for. Is it primarily about improving outcomes in the world, as *Singer* argues? Or is it about forming a certain kind of character through particular relationships, as Aristotle suggests? The ancient Stoic perspective, represented by *Seneca*, offers a middle path that emphasizes the spirit of giving over its material substance.",
            "The readings below will take you into these debates: *Seneca*\u2019s rich exploration of the ethics of giving and receiving, *Curzer*\u2019s careful treatment of how generosity fits into Aristotle\u2019s system of virtues, and *Singer*\u2019s powerful challenge to rethink our obligations to distant others."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: "Seneca", title: "On Benefits (De Beneficiis)", year: "c. 56 AD" },
            { author: "Howard Curzer", title: "Aristotle and the Virtues", year: "2012" },
            { author: "Peter Singer", title: "The Life You Can Save", year: "2009" }
        ]
    }
},

// ═══ MAGNANIMITY ═════════════════════════════════════════
magnanimity: {
    q_pride: {
        text: [
            "It depends on what kind of pride. If a person of genuine excellence knows their own worth and claims the honour they deserve \u2014 that is *magnanimity*, and it is a virtue. If a person without merit claims great honour \u2014 that is *vanity*, and it is a vice.",
            "The opposite extreme is *excessive humility*: the person of genuine worth who underestimates themselves and shrinks from what they deserve."
        ],
        choices: [
            { text: "What does the magnanimous person look like?", next: 'portrait' },
            { text: "Is humility not a virtue?", next: 'humility_response' }
        ]
    },
    q_great_soul: {
        text: [
            "The *magnanimous* person is concerned with great things and believes themselves worthy of them \u2014 and is right to do so. They are dignified without being arrogant. They care about *honour* from good people but are indifferent to flattery.",
            "They speak their mind openly, are slow to anger but formidable when roused, and do not bear grudges."
        ],
        choices: [
            { text: "This sounds like arrogance", next: 'arrogance' },
            { text: "Tell me more about this character", next: 'more' }
        ]
    },
    q_humility: {
        text: [
            "An interesting question. In my framework, *excessive humility* is actually a deficiency \u2014 a failure to claim what you truly deserve. If a genuinely worthy person habitually undervalues themselves, they miss opportunities for *noble action*.",
            "The key is accuracy: knowing your *true worth*, neither inflating it nor diminishing it."
        ],
        choices: [
            { text: "What does the magnanimous person look like?", next: 'portrait' }
        ]
    },
    portrait: {
        text: [
            "The *magnanimous* person is concerned with *honour* and dishonour. They confer benefits gladly but are ashamed to receive them. They are open about their loves and hates, because concealment comes from fear.",
            "They do not fuss over small matters. Their movements are unhurried, their voice deep, their speech measured. They are, in a word, *dignified*."
        ],
        choices: [
            { text: "I can see why some find this troubling", next: 'arrogance' },
            { text: "This is fascinating \u2014 let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    humility_response: {
        text: [
            "Some later traditions valued humility highly. But in my view, a person who truly is excellent should recognize that excellence. *False modesty* is a kind of dishonesty about yourself.",
            "Of course, the person who claims greatness without deserving it is merely *vain*. *Magnanimity* requires that the self-assessment be accurate."
        ],
        choices: [
            { text: "What does this person look like?", next: 'portrait' }
        ]
    },
    arrogance: {
        text: [
            "I understand the concern. But the *magnanimous* person is not arrogant \u2014 arrogance is claiming more than you deserve. The magnanimous person claims exactly what they deserve, no more.",
            "They are actually quite generous and gracious. They help others freely and do not remind people of favours done. Their *greatness* is quiet, not loud."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    more: {
        text: [
            "The *magnanimous* person does not care much about small honours. They face great dangers willingly because they consider few things worth anxiety. They are *truthful* \u2014 except when they ironically downplay themselves to ordinary people.",
            "This is perhaps my most controversial portrait. But I believe excellence should be acknowledged, not hidden."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Magnanimity* is accurate self-knowledge combined with genuine excellence. The *great-souled* person knows their worth, claims appropriate honour, and bears themselves with dignity. It is a mean between *vanity* and *excessive humility*."
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
    },
    deep_start: {
        text: [
            "*Magnanimity* (megalopsychia) is perhaps the most controversial virtue in Aristotle\u2019s entire catalogue. Many modern scholars have found Aristotle\u2019s portrait of the *great-souled man* deeply troubling. The *megalopsychos* walks slowly, speaks in a deep voice, is reluctant to ask for help, and considers few things worth getting excited about. To many readers, this figure seems less like a model of excellence and more like an insufferable snob. The philosopher David Hume reportedly found the portrait so off-putting that he considered it a genuine embarrassment to Aristotle\u2019s ethics.",
            "Yet magnanimity has had remarkable defenders. *Thomas Aquinas*, writing in the thirteenth century, performed one of the most creative reinterpretations in the history of philosophy: he transformed Aristotelian magnanimity into something compatible with Christian humility, arguing that the truly great-souled person recognizes their gifts as coming from God and therefore has no grounds for arrogance. And contemporary scholars like *Roger Crisp* and *Nancy Sherman* have asked whether magnanimity, properly understood, might still have something valuable to teach us.",
            "Two paths into the scholarly debate present themselves."
        ],
        choices: [
            { text: "Explore the \u2018embarrassment\u2019 of magnanimity", next: 'deep_a' },
            { text: "Explore Aquinas\u2019s reinterpretation", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "*Roger Crisp*, in his essay \u2018Aristotle on Greatness of Soul,\u2019 takes the discomfort seriously and tries to identify exactly what modern readers find troubling. Part of the problem is Aristotle\u2019s apparent endorsement of a kind of social hierarchy: the *great-souled man* is superior and knows it, and his dealings with others are inflected by that awareness. He is generous but ashamed to receive benefits; he helps others but regards needing help as a mark of inferiority. For modern egalitarians, this relational asymmetry is deeply problematic.",
            "*Nancy Sherman*, in \u2018*The Fabric of Character*,\u2019 offers a more sympathetic reading. She argues that Aristotle\u2019s portrait needs to be understood within his broader account of self-knowledge and the virtues. The *great-souled* person is not merely proud \u2014 they have achieved genuine excellence across all the virtues and have an accurate understanding of their own worth. Their self-assessment is not arrogance but honesty. *Sherman* suggests that the real difficulty is not magnanimity itself but the cultural assumptions Aristotle wraps around it: the slow walk, the deep voice, the disdain for small things. If we strip away these culturally specific details, we find a more defensible core: the idea that genuine excellence deserves to be acknowledged, and that false modesty about real achievements is its own kind of dishonesty.",
            "The question remains whether this core can be salvaged. Can we value honest self-assessment and the aspiration to genuine *greatness* without the elitism and condescension that seem to accompany Aristotle\u2019s original portrait?"
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "*Thomas Aquinas*\u2019s treatment of *magnanimity* in his \u2018Commentary on the Nicomachean Ethics\u2019 and in the \u2018Summa Theologiae\u2019 is a masterpiece of creative appropriation. *Aquinas* faced a genuine dilemma: Aristotle was his primary philosophical authority, but magnanimity as Aristotle described it seemed flatly incompatible with the Christian virtue of humility. A person who considers themselves worthy of great honours and claims them confidently appears to be the opposite of the humble person who recognizes their own lowliness before God.",
            "*Aquinas*\u2019s solution was elegant. He argued that *magnanimity* and *humility* are not opposed but complementary. Humility concerns our relationship to God: we recognize that whatever excellence we possess is ultimately a gift of divine grace, not our own achievement. Magnanimity concerns our relationship to the great things we can accomplish with those gifts: the magnanimous person aspires to great deeds precisely because they recognize the magnitude of what God has given them. To shrink from great action would be, in Aquinas\u2019s terms, a kind of ingratitude \u2014 a failure to make use of the talents entrusted to you.",
            "This reinterpretation profoundly influenced the Christian moral tradition and remains philosophically interesting even for secular readers. *Aquinas* shows that it is possible to hold together two apparently contradictory ideas: that a person can honestly recognize their own excellence while simultaneously recognizing that the ultimate source of that excellence lies beyond themselves. Whether this synthesis fully resolves the tension between *pride* and *humility* remains debated, but it demonstrates the extraordinary flexibility of Aristotle\u2019s ethical concepts when placed in new frameworks."
        ],
        choices: [
            { text: "Thank you \u2014 let\u2019s see the further reading", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "*Magnanimity* forces us to confront one of the deepest questions in ethics: what is the right relationship to our own excellence? Aristotle insists that genuine *greatness* should be acknowledged, not hidden. The Christian tradition, through *Aquinas*, insists that any greatness we possess must be understood as gift rather than achievement. And modern egalitarianism is suspicious of the whole framework, worried that claims to superior worth inevitably license condescension and hierarchy.",
            "The readings below explore this rich terrain: *Aquinas*\u2019s remarkable synthesis of Aristotelian magnanimity and Christian humility, *Crisp*\u2019s careful analysis of what makes the *great-souled man* so controversial, and *Sherman*\u2019s attempt to recover the defensible core of Aristotle\u2019s portrait."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: "Thomas Aquinas", title: "Commentary on the Nicomachean Ethics", year: "c. 1271" },
            { author: "Roger Crisp", title: "Aristotle on Greatness of Soul", year: "2006" },
            { author: "Nancy Sherman", title: "The Fabric of Character", year: "1989" }
        ]
    }
},

// ═══ JUSTICE ═════════════════════════════════════════════
justice: {
    q_equality: {
        text: [
            "In a sense, but not simple equality. I distinguish two kinds. *Distributive justice* divides goods proportionally \u2014 according to merit, not equally. The person who contributes more to a partnership deserves a greater share.",
            "*Corrective justice*, on the other hand, treats people as equals regardless of status \u2014 if you wrong someone, the harm must be corrected whether you are rich or poor."
        ],
        choices: [
            { text: "Why not equal shares for everyone?", next: 'why_not_equal' },
            { text: "What about fairness?", next: 'equity' }
        ]
    },
    q_fairness: {
        text: [
            "You touch on something important. *Justice* operates through general rules, but general rules cannot anticipate every situation. This is where *equity* comes in \u2014 the correction of law where it is defective owing to its generality.",
            "The equitable person does not insist rigidly on their legal rights but adjusts to what the situation truly demands."
        ],
        choices: [
            { text: "So equity goes beyond strict justice?", next: 'equity' },
            { text: "Can the law itself be unjust?", next: 'unjust_law' }
        ]
    },
    q_law: {
        text: [
            "Law aims at the *common good*. When it does so properly, obeying the law is just. But laws are general, and life is particular. A law that applies well in most cases may produce unjust results in specific ones.",
            "This is why we need *equity* \u2014 the ability to correct the letter of the law in the spirit of *justice*."
        ],
        choices: [
            { text: "Tell me more about equity", next: 'equity' },
            { text: "What about the two types of justice?", next: 'types' }
        ]
    },
    why_not_equal: {
        text: [
            "Because equal distribution to unequal contributors is itself unjust. If two people build a house and one does three-quarters of the work, giving them equal pay is unfair to the one who worked more.",
            "*Justice* is proportion, not simple equality. But in *corrective* matters \u2014 contracts, injuries \u2014 the prior status of the parties does not matter. The harm itself must be rectified."
        ],
        choices: [
            { text: "Tell me about equity", next: 'equity' }
        ]
    },
    types: {
        text: [
            "*Distributive justice* concerns how goods, honours, and burdens are divided among members of a community \u2014 proportionally, according to merit. *Corrective justice* concerns transactions between individuals \u2014 restoring what was taken, repairing what was damaged.",
            "Both are essential. A just community needs both fair distribution and fair redress."
        ],
        choices: [
            { text: "And equity ties it together?", next: 'equity' }
        ]
    },
    equity: {
        text: [
            "*Equity* is the finest form of justice. It corrects the inevitable shortcomings of general rules. The equitable person bends the rule to fit the case, not out of weakness but out of superior judgment.",
            "Think of it like a flexible ruler used to measure irregular stones \u2014 it adapts its shape to the object. *Equity* adapts *justice* to the particular situation."
        ],
        choices: [
            { text: "Beautiful analogy. Let\u2019s summarize.", next: 'conclusion' }
        ]
    },
    unjust_law: {
        text: [
            "A law that does not aim at the common good, or that systematically advantages one group at the expense of another, falls short of true *justice*. The legislator should aim at the good of the whole community.",
            "And even a well-intentioned law needs *equity* to handle the cases it could not foresee."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Justice* involves both fair distribution (proportional to merit) and fair correction (equal treatment in redressing wrongs). *Equity* perfects justice by adapting general rules to particular cases, like a flexible ruler that measures irregular shapes."
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
    },
    deep_start: {
        text: [
            "You\u2019ve now worked through Aristotle\u2019s account of *justice* \u2014 distributive, corrective, and the crowning concept of *equity*. But Aristotle\u2019s theory of justice has provoked some of the most consequential debates in the history of political philosophy, and it continues to shape live arguments today.",
            "The central tension is this: Aristotle insists that *distributive justice* must be proportional to merit. But who decides what counts as merit, and by what standard? Modern liberal theorists have challenged this idea root and branch, arguing that a just society cannot be built on any single conception of human excellence. Meanwhile, other scholars have found in Aristotle\u2019s account of justice deep resources for *natural law theory* and a richer understanding of legal reasoning than positivism can offer.",
            "Two debates in particular have been enormously productive. One pits Aristotle against the most influential political philosopher of the twentieth century. The other traces Aristotle\u2019s concept of equity into the foundations of modern legal thought."
        ],
        choices: [
            { text: "Aristotle vs. Rawls on distributive justice", next: 'deep_a' },
            { text: "Equity, natural law, and legal philosophy", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "John *Rawls*\u2019s *A Theory of Justice* (1971) is, in many ways, a systematic rejection of the Aristotelian approach to distribution. Where Aristotle asks \u2018what do people deserve?\u2019 and distributes accordingly, Rawls argues that we should design principles of justice from behind a \u2018*veil of ignorance*\u2019 \u2014 without knowing our talents, social position, or conception of the good. The principles we would choose under these conditions, Rawls argues, would guarantee equal basic liberties and permit inequality only when it benefits the least advantaged members of society. This is a radically different starting point from Aristotle\u2019s merit-based proportionality.",
            "The disagreement runs deep. For Aristotle, *justice* is inseparable from a substantive account of *human flourishing*: you cannot distribute justly without knowing what human excellence looks like. For Rawls, this is precisely the problem \u2014 in a pluralistic society, people disagree fundamentally about human excellence, and a just state must remain neutral among competing visions of the good life. Rawls saw Aristotle\u2019s approach as inevitably imposing one group\u2019s values on everyone else.",
            "Fred *Miller*, in *Nature, Justice, and Rights in Aristotle\u2019s Politics* (1995), has offered a sophisticated defence of the Aristotelian position. Miller argues that Aristotle\u2019s account of justice actually contains resources for recognising individual rights \u2014 something often thought to be a purely modern invention. On Miller\u2019s reading, Aristotle\u2019s political community is not a tyranny of enforced virtue but a framework in which individuals can pursue their own flourishing within a shared understanding of the common good. The debate between Aristotelian and Rawlsian justice remains one of the defining fault lines in contemporary political philosophy."
        ],
        choices: [
            { text: "Fascinating \u2014 let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Aristotle\u2019s concept of *epieikeia* \u2014 *equity* \u2014 has had a remarkable afterlife in legal philosophy. The idea that written law is necessarily general and therefore requires a corrective judgment in particular cases has influenced legal traditions from Roman law through the English courts of equity to modern constitutional interpretation. But the most ambitious modern use of Aristotle\u2019s account of justice comes from John *Finnis*\u2019s *Natural Law and Natural Rights* (1980), which revived the natural law tradition by drawing extensively on Aristotelian foundations.",
            "*Finnis* argues that there are basic forms of human good \u2014 life, knowledge, friendship, practical reasonableness, and others \u2014 that are self-evidently valuable and that provide the foundation for principles of justice. Unlike crude versions of natural law theory that try to derive moral rules directly from biological facts, Finnis\u2019s approach is grounded in practical reason: we grasp these goods not by observing nature but by understanding what makes human action intelligible and worthwhile. Justice, for Finnis, is the set of requirements that practical reasonableness imposes on our dealings with others \u2014 a thoroughly Aristotelian idea.",
            "*Finnis*\u2019s work has been enormously influential but also controversial. Critics charge that his \u2018basic goods\u2019 smuggle in substantive moral commitments under the guise of self-evidence. Defenders reply that every theory of justice must start somewhere, and Aristotle\u2019s insight \u2014 that justice cannot be understood apart from human flourishing \u2014 is more honest than the pretence of neutrality. The flexible ruler of equity, it turns out, has bent its way through twenty-four centuries of legal thought and shows no signs of breaking."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "Aristotle\u2019s theory of *justice* has proven to be one of the most fertile grounds for philosophical argument in the entire Western tradition. Whether we are debating the basis of fair distribution, the nature of legal reasoning, or the relationship between justice and human flourishing, we find ourselves returning to questions Aristotle posed in Book V.",
            "The readings below represent three of the most important contributions to these ongoing debates. Each engages seriously with Aristotle while pushing the conversation into new territory."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'John Rawls', title: 'A Theory of Justice', year: '1971' },
            { author: 'John Finnis', title: 'Natural Law and Natural Rights', year: '1980' },
            { author: 'Fred Miller', title: 'Nature, Justice, and Rights in Aristotle\u2019s Politics', year: '1995' }
        ]
    }
},

// ═══ PRACTICAL WISDOM ════════════════════════════════════
phronesis: {
    q_clever: {
        text: [
            "Cleverness is the ability to find effective means to any end \u2014 good or bad. A clever thief uses cleverness, but we would not call them wise. *Practical wisdom* includes cleverness but adds something essential: a correct perception of what is truly good.",
            "The practically wise person not only knows how to achieve their goals but pursues the right goals."
        ],
        choices: [
            { text: "How do they know the right goals?", next: 'right_goals' },
            { text: "Is practical wisdom different from theoretical wisdom?", next: 'vs_theory' }
        ]
    },
    q_without: {
        text: [
            "Strictly speaking, no. The moral virtues tell you what to aim at \u2014 courage aims at what is noble, generosity at proper giving. But without *practical wisdom*, you cannot determine the right action in particular circumstances.",
            "You might have the disposition to be generous but give to the wrong person at the wrong time. *Practical wisdom* is what makes the other virtues effective."
        ],
        choices: [
            { text: "So wisdom coordinates the virtues?", next: 'coordination' },
            { text: "Can you have wisdom without virtue?", next: 'without_virtue' }
        ]
    },
    q_develop: {
        text: [
            "Not through study alone. *Practical wisdom* requires experience \u2014 long experience of life. This is why young people can become brilliant mathematicians but are rarely wise. Mathematics requires no experience of life, but wisdom does.",
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
            "*Practical wisdom* and *moral virtue* are inseparable: virtue provides the right ends, wisdom provides the right means."
        ],
        choices: [
            { text: "So they depend on each other?", next: 'coordination' }
        ]
    },
    vs_theory: {
        text: [
            "Yes. *Theoretical wisdom* (sophia) concerns eternal truths \u2014 mathematics, metaphysics, the nature of the cosmos. *Practical wisdom* (*phronesis*) concerns human affairs \u2014 what is good and bad for human beings in particular situations.",
            "Both are excellences of reason, but they operate in different domains. You can be a brilliant physicist and terrible at managing your own life."
        ],
        choices: [
            { text: "Which matters more?", next: 'coordination' }
        ]
    },
    coordination: {
        text: [
            "*Practical wisdom* is the *master virtue* of practical life. It perceives what each situation demands and orchestrates the other virtues accordingly. Without it, the virtues can misfire \u2014 courage becomes rashness, generosity becomes wastefulness.",
            "And wisdom itself requires virtue: a bad character distorts one\u2019s perception of what is good. They are, in truth, a unity."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    without_virtue: {
        text: [
            "Without virtue, you get *cleverness* \u2014 the ability to achieve ends effectively, but potentially terrible ends. The cunning manipulator is clever but not wise. Wisdom necessarily includes a correct orientation toward genuine human goods."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    not_taught: {
        text: [
            "Because *practical wisdom* concerns particulars, not universals. You can teach general principles, but no principle tells you exactly what to do in this specific situation. That requires judgment \u2014 a kind of perception that comes only from experience.",
            "It is more like a skill than a science."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    experience: {
        text: [
            "Experience teaches you to perceive the salient features of a situation \u2014 what matters, what can be ignored, what the likely consequences of different actions are. A doctor with decades of practice sees things an intern cannot.",
            "The same is true for ethics. The *wise person* has an experienced eye for human situations."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Practical wisdom* is the intellectual virtue that governs ethical life. It perceives what is good in particular situations and finds the right means to achieve it. It requires both good character and long experience, and it is inseparable from moral virtue."
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
    },
    deep_start: {
        text: [
            "You\u2019ve grasped the essentials of *phronesis* \u2014 *practical wisdom* as the master virtue that perceives what each situation demands and coordinates the other virtues in action. But this concept has become one of the most intensely debated ideas in contemporary moral philosophy, precisely because it challenges the dominant assumption that ethics is about following rules.",
            "The central question is this: does the practically wise person act well because they apply general moral principles to particular cases, or because they perceive each situation directly, the way an expert perceives what a novice cannot? If Aristotle means the latter, then *moral knowledge* may be much more like perceptual skill than like a science \u2014 and the entire Enlightenment project of codifying morality into universal rules may be fundamentally misguided.",
            "Three philosophers in particular have drawn out the radical implications of Aristotle\u2019s account of *practical wisdom*, and their work has reshaped how we think about moral reasoning itself."
        ],
        choices: [
            { text: "Moral perception: McDowell and Wiggins", next: 'deep_a' },
            { text: "The particularism debate: can ethics do without principles?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "John *McDowell*\u2019s influential essay \u2018Virtue and Reason\u2019 (1979) argues that the practically wise person does not reason their way to the right action by applying rules. Instead, they literally perceive what the situation requires \u2014 a kind of *moral vision* that is trained by experience and good character. Just as a skilled doctor sees a diagnosis where a layperson sees only symptoms, the phronimos sees the morally salient features of a situation that others miss entirely. On McDowell\u2019s reading, Aristotle\u2019s ethics is fundamentally anti-codificationist: there is no set of rules that could capture what the wise person knows.",
            "David *Wiggins*, in his essay \u2018Deliberation and Practical Reason\u2019 (1975), reached a complementary conclusion by a different route. *Wiggins* argued that practical reasoning cannot be modelled as deduction from fixed premises. When we deliberate about what to do, we are not applying pre-existing principles to cases. We are instead engaged in a process of specification \u2014 progressively making determinate what was initially vague. The good deliberator is sensitive to the particular features of the situation in a way that no algorithm could replicate.",
            "Together, *McDowell* and *Wiggins* mounted a powerful challenge to the Kantian and utilitarian traditions, both of which assume that morality can be systematised into rules. If they are right about Aristotle, then practical wisdom is not a method but a capacity \u2014 more like an artistic sensibility than a decision procedure. This does not make ethics arbitrary, but it does mean that moral expertise cannot be fully taught in a classroom or written in a code."
        ],
        choices: [
            { text: "This is compelling \u2014 let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Jonathan *Dancy*\u2019s *Ethics Without Principles* (2004) pushes the Aristotelian insight about practical wisdom to its most radical conclusion. *Dancy* defends \u2018*moral particularism*\u2019 \u2014 the view that morality operates without general principles at all. A feature that makes an action right in one situation (say, that it would bring someone pleasure) might be completely irrelevant in another, or even count against the action. If this is correct, then there are no exceptionless moral rules, and the dream of a moral theory that tells you what to do in every case is an illusion.",
            "*Dancy*\u2019s view connects directly to Aristotle\u2019s emphasis on *phronesis*. If moral judgment is always about the particular case, then what we need is not a better theory but a better perceiver \u2014 someone with the experience and character to see what this situation, in all its specificity, demands. The generalist opposition \u2014 defended by philosophers like Brad Hooker and Sean McKeever \u2014 insists that without general principles we have no way to explain why certain features are morally relevant, no way to teach ethics, and no way to hold people accountable to shared standards.",
            "The *particularism* debate remains unresolved, but it has clarified something important about Aristotle\u2019s ethics. Whether or not we go all the way with Dancy, Aristotle\u2019s insistence that practical wisdom cannot be reduced to rules \u2014 that the person of good judgment sees more than any principle could specify \u2014 is a permanent challenge to every moral theory that aspires to codification. The wise person, for Aristotle, is not someone who has memorised the right rules but someone who has been shaped, through experience and habituation, into the kind of person who sees clearly."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The scholarly debate over *practical wisdom* goes to the heart of what moral knowledge is and how it works. Is ethics a science with codifiable principles, or a perceptual skill that can only be cultivated through lived experience? Aristotle\u2019s account of *phronesis* stands as a permanent challenge to the assumption that morality can be reduced to rules.",
            "The readings below represent three landmark contributions to this debate. Each takes Aristotle\u2019s emphasis on practical wisdom seriously and draws out consequences that continue to reshape moral philosophy."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'John McDowell', title: 'Virtue and Reason', year: '1979' },
            { author: 'David Wiggins', title: 'Deliberation and Practical Reason', year: '1975' },
            { author: 'Jonathan Dancy', title: 'Ethics Without Principles', year: '2004' }
        ]
    }
},

// ═══ WEAKNESS OF WILL ════════════════════════════════════
akrasia: {
    q_why_fail: {
        text: [
            "This puzzled my teacher *Socrates*, who believed that no one does wrong knowingly. I disagree. It is a plain fact that people act against their own better judgment, overcome by anger, desire, or passion.",
            "The question is: what happens to their knowledge in that moment?"
        ],
        choices: [
            { text: "They forget what they know?", next: 'forget' },
            { text: "They know but don\u2019t really believe it?", next: 'not_believe' }
        ]
    },
    q_vs_vice: {
        text: [
            "An important distinction. The vicious person believes they are pursuing what is good. They have the wrong values. The *weak-willed* person has the right values but fails to act on them.",
            "In a strange way, *weakness of will* is better than vice \u2014 because the weak person\u2019s principles are sound. They just cannot live up to them."
        ],
        choices: [
            { text: "Why is it better?", next: 'better' },
            { text: "Can it be overcome?", next: 'overcoming' }
        ]
    },
    q_overcome: {
        text: [
            "Yes, and this is the good news. *Weakness of will* can be cured because the person\u2019s fundamental orientation is correct. They know what is right \u2014 they lack the strength of character to follow through consistently.",
            "Vice, by contrast, is much harder to cure because the person does not even see their error."
        ],
        choices: [
            { text: "How does one overcome it?", next: 'overcoming' },
            { text: "What exactly happens when will fails?", next: 'mechanism' }
        ]
    },
    forget: {
        text: [
            "In a sense, yes. The knowledge is there in principle, but *passion* pushes it to the background. Think of a person who knows that sweets are bad for them but, in the presence of a cake, the general knowledge recedes and the immediate appetite dominates.",
            "They \u2018have\u2019 the knowledge the way a sleeping person or a drunk has it \u2014 it is present but not active."
        ],
        choices: [
            { text: "How do we keep it active?", next: 'overcoming' }
        ]
    },
    not_believe: {
        text: [
            "Close. I would say they know the universal principle (\u2018excess is harmful\u2019) but fail to apply it to the particular case in front of them. The immediate desire or passion prevents the *practical syllogism* from completing.",
            "The conclusion \u2014 \u2018therefore I should not do this\u2019 \u2014 never forms properly because emotion intervenes."
        ],
        choices: [
            { text: "How do we fix this?", next: 'overcoming' }
        ]
    },
    better: {
        text: [
            "Because the weak-willed person can be saved. Their principles are correct; they need only to strengthen their character. Through practice and *habituation*, they can develop the firmness to act on what they know.",
            "The vicious person is much further from virtue because they must first change their very understanding of what is good."
        ],
        choices: [
            { text: "How does one strengthen their will?", next: 'overcoming' }
        ]
    },
    mechanism: {
        text: [
            "Here is what happens. You know the general rule: \u2018Excess is harmful.\u2019 You also know the particular fact: \u2018This is excessive.\u2019 Normally, these combine to produce action: \u2018Therefore, I should refrain.\u2019",
            "But strong *passion* disrupts the connection. The appetite overwhelms the *practical reasoning*, and you act as if you did not know \u2014 even though, in a calm moment, you clearly do."
        ],
        choices: [
            { text: "How do we overcome this?", next: 'overcoming' }
        ]
    },
    overcoming: {
        text: [
            "Through *habituation*, as with all virtue. By repeatedly choosing to act on principle rather than passion, you strengthen the connection between knowledge and action. The more you practice, the harder it becomes for desire to override reason.",
            "This is also why good surroundings matter. It is easier to resist temptation in a community that supports virtue than in one that celebrates excess."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Weakness of will* is acting against one\u2019s own better judgment, overwhelmed by passion. It differs from vice because the person\u2019s values are correct. It can be overcome through *habituation* \u2014 strengthening the link between knowledge and action."
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
    },
    deep_start: {
        text: [
            "You\u2019ve explored Aristotle\u2019s account of *akrasia* \u2014 how a person can know what is right yet fail to do it, overwhelmed by passion in the moment. This phenomenon has fascinated philosophers for millennia, and the debate over whether *weakness of will* is even possible remains one of the most productive puzzles in the philosophy of action.",
            "The problem is deceptively simple. If you genuinely judge that action A is better than action B, how can you intentionally choose B? Either you did not really judge A better (in which case it is not weakness of will but ignorance), or some force compelled you (in which case the action is not fully voluntary). Aristotle tried to thread this needle by distinguishing between kinds of knowledge \u2014 but has his solution convinced later philosophers?",
            "Two traditions of response have been especially illuminating: one from analytic philosophy of action, and one from contemporary cognitive science."
        ],
        choices: [
            { text: "Davidson and the philosophy of action", next: 'deep_a' },
            { text: "Modern psychology and dual-process theory", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "Donald *Davidson*\u2019s landmark essay \u2018How is Weakness of the Will Possible?\u2019 (1970) reframed the entire debate for analytic philosophy. Davidson argued that we must distinguish between a conditional judgment (\u2018all things considered, A is better\u2019) and an unconditional intention (\u2018I shall do A\u2019). The *akratic* person forms the correct all-things-considered judgment but fails to let that judgment govern their action. Instead, a desire or passion produces an intention that conflicts with their better judgment. Davidson insisted this is genuinely irrational \u2014 not a case of ignorance but of practical reason failing to function as it should.",
            "This was a direct challenge to the Socratic tradition, represented most powerfully in Plato\u2019s Protagoras, where Socrates argues that no one does wrong willingly. If you truly know the good, Socrates claims, you will do it \u2014 apparent weakness of will is always really a failure of knowledge. Aristotle\u2019s response in Book VII is essentially a compromise: he agrees that the akratic person\u2019s knowledge is somehow impaired in the moment, but he insists (against Socrates) that the impairment is caused by passion, not by intellectual error. The knowledge is \u2018had but not used,\u2019 like the knowledge of a drunk.",
            "Alfred *Mele*, in *Irrationality* (1987), developed a more psychologically detailed account. *Mele* argued that *akrasia* involves a failure of executive control: the person\u2019s motivational system overwhelms their evaluative system. This is not a mysterious philosophical puzzle but a recognisable feature of human psychology \u2014 we are beings whose desires do not always obey our judgments. Mele\u2019s work bridges Aristotle\u2019s ancient insight with contemporary research on self-control, showing that the problem of akrasia is as much empirical as conceptual."
        ],
        choices: [
            { text: "Fascinating \u2014 let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Daniel *Kahneman*\u2019s *Thinking, Fast and Slow* (2011) describes the mind as operating through two systems: *System 1*, which is fast, automatic, and emotionally driven, and *System 2*, which is slow, deliberate, and rational. This *dual-process framework* offers a striking contemporary parallel to Aristotle\u2019s analysis of akrasia. When Aristotle says that passion prevents the practical syllogism from completing \u2014 that the person \u2018has\u2019 knowledge but cannot \u2018use\u2019 it \u2014 he is describing something remarkably close to what happens when System 1 overrides System 2.",
            "On this reading, the akratic person\u2019s System 2 has formed the correct judgment: \u2018this is excessive, I should refrain.\u2019 But System 1 \u2014 responding to immediate cues, emotional associations, and ingrained habits \u2014 generates an impulse that bypasses deliberation. The result is action that contradicts the person\u2019s own considered view. Aristotle\u2019s comparison to the drunk or the sleeping person maps neatly onto the idea that System 2 has been temporarily taken offline.",
            "What makes this connection more than a loose analogy is that both Aristotle and modern psychology point to the same remedy: habituation. *Kahneman*\u2019s research shows that deliberate practice can reshape automatic responses \u2014 that System 1 can be trained. Aristotle said the same thing twenty-four centuries earlier: through repeated practice, the right response becomes second nature, and the gap between knowledge and action closes. The practically wise person is not someone who white-knuckles their way past temptation but someone whose trained character makes the right action feel natural. Modern cognitive science, in this respect, has vindicated one of Aristotle\u2019s deepest psychological insights."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The puzzle of *akrasia* \u2014 how we can knowingly act against our own better judgment \u2014 has generated extraordinary philosophical and scientific work from antiquity to the present. Whether approached through the lens of analytic philosophy of action or contemporary cognitive psychology, the question keeps returning to Aristotle\u2019s original insight: the gap between knowing and doing is real, and closing it requires not just better arguments but better character.",
            "The readings below trace this conversation from *Davidson*\u2019s foundational analytic treatment through *Mele*\u2019s psychological deepening to *Kahneman*\u2019s dual-process framework."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'Donald Davidson', title: 'How is Weakness of the Will Possible?', year: '1970' },
            { author: 'Alfred Mele', title: 'Irrationality: An Essay on Akrasia, Self-Deception, and Self-Control', year: '1987' },
            { author: 'Daniel Kahneman', title: 'Thinking, Fast and Slow', year: '2011' }
        ]
    }
},

// ═══ FRIENDSHIP ══════════════════════════════════════════
friendship: {
    q_true_friend: {
        text: [
            "The truest *friendship* exists between people who are good and alike in *virtue*. They wish well to each other for the other\u2019s own sake \u2014 not for any benefit or pleasure they provide, but because of who they are.",
            "Such friendships are rare, take time to develop, and are remarkably stable."
        ],
        choices: [
            { text: "What about friendships based on shared interests?", next: 'pleasure_friendship' },
            { text: "Why are they so rare?", next: 'rare' }
        ]
    },
    q_utility: {
        text: [
            "They are real, but limited. I distinguish three types of *friendship*: those based on utility, those based on pleasure, and those based on *virtue*. Utility-friendships dissolve when the usefulness ends. Pleasure-friendships fade when tastes change.",
            "Both are genuine forms of friendship, but neither is complete."
        ],
        choices: [
            { text: "What makes the highest form different?", next: 'highest' },
            { text: "Are utility friendships bad?", next: 'not_bad' }
        ]
    },
    q_need_friends: {
        text: [
            "Absolutely, yes. Some say the supremely happy person is self-sufficient and needs no one. But I disagree strongly. *Happiness* is an activity, and many of the best activities are shared.",
            "A *virtuous friend* is like a mirror in which we see goodness made real. Through perceiving our friend\u2019s virtuous activity, we deepen our perception of our own."
        ],
        choices: [
            { text: "Why can\u2019t the happy person be self-sufficient?", next: 'not_solitary' },
            { text: "That\u2019s a beautiful idea", next: 'highest' }
        ]
    },
    pleasure_friendship: {
        text: [
            "*Friendships of pleasure* are common among the young, who are guided by emotion. They enjoy each other\u2019s company, share interests, find delight together. But when interests change, the friendship often fades.",
            "This is not a defect \u2014 it is simply the nature of this type of bond. It is good but incomplete."
        ],
        choices: [
            { text: "What is the highest form?", next: 'highest' }
        ]
    },
    not_bad: {
        text: [
            "Not at all. Business partners, professional colleagues, neighbours \u2014 these relationships serve genuine purposes. They just do not reach the depth of *virtue-friendship*. They are friendships of a limited kind, and there is nothing wrong with that.",
            "The problem comes only when we mistake them for the highest kind."
        ],
        choices: [
            { text: "What is the highest kind?", next: 'highest' }
        ]
    },
    rare: {
        text: [
            "Because good people are rare, and because *virtue-friendship* requires time and intimacy. You cannot know a person\u2019s character quickly. Many shared meals, shared trials, shared conversations are needed before such trust develops.",
            "This is also why you can have many acquaintances but few true friends."
        ],
        choices: [
            { text: "Tell me about virtue-friendship", next: 'highest' }
        ]
    },
    not_solitary: {
        text: [
            "Humans are social beings \u2014 *political animals*, as I say. No one would choose to live without friends, even if they had all other goods. Solitary happiness is incomplete.",
            "Moreover, the good person perceives their own existence as good, and this perception is enhanced through sharing life with a virtuous friend."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    highest: {
        text: [
            "The *perfect friendship* is between people who are good and who wish well to each other for the other\u2019s own sake. It includes the goods of the other two types: virtue-friends are also useful and pleasant to each other.",
            "This friendship is stable because genuine goodness does not change easily. And it is one of the greatest goods in a human life."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Friendship* is essential to the good life. The highest form \u2014 between people who are good and wish each other well for the other\u2019s sake \u2014 includes the benefits of utility and pleasure while transcending both. Even the happiest person needs friends for shared virtuous activity."
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
    },
    deep_start: {
        text: [
            "You\u2019ve explored Aristotle\u2019s three types of *friendship* and his remarkable claim that even the happiest person needs friends. But Aristotle devotes more space to friendship than to any other topic in the Ethics \u2014 two full books \u2014 and scholars have found in these chapters some of the most philosophically rich and personally challenging material in the entire work.",
            "The central puzzle is this: Aristotle says the good person loves their friend as a \u2018*second self*.\u2019 But does this mean that friendship is ultimately a form of self-love? If I value my friend because they mirror my own virtue back to me, am I really loving them for their own sake, or am I using them as a flattering reflection? This question \u2014 whether Aristotle\u2019s account of *friendship* is secretly egoistic \u2014 has generated one of the most searching debates in the scholarship.",
            "Two lines of inquiry have been especially fruitful: the structure of Aristotle\u2019s three types and their relationship to self-interest, and the question of what makes a particular friend irreplaceable."
        ],
        choices: [
            { text: "Cooper on the three types and the egoism objection", next: 'deep_a' },
            { text: "Nehamas on individuality and irreplaceability", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "John *Cooper*\u2019s essay \u2018Aristotle on Friendship\u2019 (1980), published in Am\u00e9lie Rorty\u2019s influential collection Essays on Aristotle\u2019s Ethics, remains the starting point for serious scholarly work on this topic. Cooper argued that Aristotle\u2019s three types of friendship \u2014 utility, pleasure, and virtue \u2014 are not merely ranked from worst to best. Rather, they share a common structure: in each case, the friends recognise and respond to something genuinely good in the other. Even utility-friends value each other as sources of real benefit. What distinguishes *virtue-friendship* is that the good recognised in the friend is their character itself, which is both more stable and more central to who they are.",
            "This reading helps answer the egoism objection \u2014 the charge that Aristotle reduces friendship to self-interest. Lorraine *Pangle*, in *Aristotle and the Philosophy of Friendship* (2003), presses this question with particular care. When Aristotle says the friend is a \u2018*second self*,\u2019 *Pangle* argues, he does not mean that we value friends instrumentally, as means to our own flourishing. Rather, the virtuous person\u2019s capacity for self-love \u2014 a deep appreciation of what is good in themselves \u2014 naturally extends to others who share that goodness. The friend\u2019s good becomes genuinely one\u2019s own concern, not because it serves one\u2019s interests but because love of the good is, by its nature, expansive.",
            "The egoism debate matters because it goes to the heart of what Aristotle thinks love is. If friendship is ultimately about self-benefit, then Aristotle\u2019s ethics is more calculating than it appears. But if, as *Cooper* and *Pangle* argue, the virtuous person genuinely delights in another\u2019s goodness for its own sake, then Aristotle has given us one of the most philosophically rigorous accounts of unselfish love in the tradition \u2014 one grounded not in self-sacrifice but in the abundance of a well-formed character."
        ],
        choices: [
            { text: "Compelling \u2014 let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Alexander *Nehamas*\u2019s *On Friendship* (2016) approaches the question from a direction Aristotle himself did not fully explore: what makes a particular friend irreplaceable? Aristotle says that virtue-friends love each other \u2018for their own sake,\u2019 but he also seems to ground friendship in shared virtue \u2014 which raises a problem. If I love my friend because they are virtuous, and someone equally virtuous comes along, should I be equally happy to befriend them instead? Character-based friendship risks treating friends as interchangeable instances of a type.",
            "*Nehamas* argues that genuine *friendship* involves loving the friend in their full, irreducible individuality \u2014 not merely as an exemplar of virtue but as this particular person, with their specific history, sensibility, and way of being in the world. Drawing on a rich tradition that includes Montaigne\u2019s famous account of his friendship with La Bo\u00e9tie (\u2018because it was he, because it was I\u2019), *Nehamas* suggests that the deepest friendships cannot be fully explained by any general quality the friend possesses. There is an aesthetic dimension to friendship: we are drawn to particular people in ways that resist complete rational justification.",
            "This is a genuine challenge to Aristotle, who tends to explain friendship in terms of character and virtue \u2014 general qualities that are, in principle, shareable. If *Nehamas* is right, then Aristotle\u2019s account, powerful as it is, may not fully capture what makes your closest friendships uniquely yours. The question of whether friendship is ultimately about virtue or about individuality \u2014 or whether these can be reconciled \u2014 remains one of the most humanly urgent questions in the philosophy of love."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "Aristotle\u2019s two books on *friendship* constitute the most extended philosophical treatment of love and companionship in the ancient world, and they continue to provoke some of the deepest questions about what it means to care for another person. Whether *friendship* is a form of self-love or a genuine going-out toward the other, and whether friends are loved for their qualities or for their irreplaceable individuality \u2014 these are questions that philosophy has not yet settled.",
            "The readings below represent three of the finest contributions to this conversation. Each treats Aristotle\u2019s account with the seriousness it deserves while pushing beyond it in illuminating ways."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'John Cooper', title: 'Aristotle on Friendship (in Essays on Aristotle\u2019s Ethics, ed. Rorty)', year: '1980' },
            { author: 'Alexander Nehamas', title: 'On Friendship', year: '2016' },
            { author: 'Lorraine Pangle', title: 'Aristotle and the Philosophy of Friendship', year: '2003' }
        ]
    }
},

// ═══ SELF-LOVE ═══════════════════════════════════════════
selflove: {
    q_selfish: {
        text: [
            "Most people think so. But consider: when we condemn \u2018self-lovers,\u2019 we mean people who grasp for more than their share of money, honours, and bodily pleasures. They gratify their *worst parts*.",
            "But the good person who loves what is best in themselves \u2014 their reason, their *virtue* \u2014 is also a *self-lover*, in the truest sense."
        ],
        choices: [
            { text: "So there are two kinds of self-love?", next: 'two_kinds' },
            { text: "That sounds like a paradox", next: 'paradox' }
        ]
    },
    q_connected: {
        text: [
            "Deeply connected. The relationship a person has with their friends mirrors the relationship they have with themselves. The good person\u2019s soul is in *harmony*: they wish themselves well, enjoy their own company, and act consistently.",
            "These are the same qualities we look for in *friendship*. So the good person is first a *friend to themselves*, and this overflows into friendship with others."
        ],
        choices: [
            { text: "What if someone doesn\u2019t like themselves?", next: 'dislike' },
            { text: "That\u2019s really interesting", next: 'two_kinds' }
        ]
    },
    q_healthy: {
        text: [
            "*Healthy self-love* means assigning yourself the noblest actions and gratifying the most authoritative part of your soul \u2014 *reason*. The person who does this is truly a friend to themselves.",
            "Paradoxically, such a person is also the most generous. They willingly give up money, honours, even their life for friends \u2014 choosing what is *noble* over what is materially advantageous."
        ],
        choices: [
            { text: "How can self-love lead to sacrifice?", next: 'sacrifice' },
            { text: "Are there two kinds of self-love?", next: 'two_kinds' }
        ]
    },
    two_kinds: {
        text: [
            "Exactly. *Vulgar self-love* gratifies appetite, vanity, and greed \u2014 rightly condemned. *Noble self-love* means loving what is best in yourself: your capacity for reason, virtue, and noble action.",
            "The good person who acts virtuously is, in the deepest sense, a friend to themselves. Their soul is in *harmony*, not at war."
        ],
        choices: [
            { text: "How does this lead to generosity?", next: 'sacrifice' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    paradox: {
        text: [
            "It does seem paradoxical. But think of it this way: the person who loves their *best self* naturally wants to do what is noble. And *noble action* often means benefiting others, even at a cost to oneself.",
            "True *self-love* and true generosity are not opposed \u2014 they spring from the same source."
        ],
        choices: [
            { text: "Tell me about the sacrifice angle", next: 'sacrifice' }
        ]
    },
    dislike: {
        text: [
            "The bad person is actually at war with themselves. Their soul is *divided*: part wants what reason says is good, part craves what appetite demands. They are dissatisfied with their own company and seek distraction.",
            "This *inner conflict* makes true friendship impossible, because the template for *friendship* is the relationship with oneself."
        ],
        choices: [
            { text: "So inner harmony comes first?", next: 'two_kinds' }
        ]
    },
    sacrifice: {
        text: [
            "The truly self-loving person willingly gives up material goods for their friends \u2014 because they choose the *nobler part*. In giving up money, they gain *nobility*. In risking their life, they choose a brief moment of great beauty over a long stretch of mediocrity.",
            "They \u2018assign themselves the greater good\u2019 \u2014 the *good of the soul*, not of the body or the wallet."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "There are two kinds of *self-love*. *Vulgar self-love* gratifies the worst in us and is rightly condemned. *Noble self-love* means loving our capacity for reason and virtue \u2014 and paradoxically, it produces the most generous and self-sacrificing character."
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
    },
    deep_start: {
        text: [
            "You\u2019ve encountered Aristotle\u2019s striking claim that the good person is the truest *self-lover*. This idea has fascinated modern philosophers because it cuts against one of our deepest moral intuitions \u2014 that *self-love* and moral goodness are opposed. Contemporary scholarship has explored this tension from several angles, revealing just how radical Aristotle\u2019s position really is.",
            "Harry *Frankfurt*, in his influential work on the structure of caring, argues that self-love is not a moral failing but a *precondition of agency* itself. For Frankfurt, to care about anything at all, you must first have a coherent self whose concerns matter to you. This resonates deeply with Aristotle\u2019s insistence that the good person\u2019s soul is in *harmony* \u2014 that inner unity is the foundation of all outward virtue. Without a settled relationship to yourself, you cannot sustain genuine relationships with others.",
            "Meanwhile, Alexander *Nehamas* has explored the other side of this coin: you cannot truly know yourself alone. *Friendship*, on his account, is a kind of mirror \u2014 we come to understand who we are through the eyes of those we love. This creates a productive circle between Aristotle\u2019s account of self-love and his account of friendship."
        ],
        choices: [
            { text: "Tell me more about Frankfurt on caring and self-love", next: 'deep_a' },
            { text: "Explore Nehamas on friendship as self-knowledge", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "Harry Frankfurt\u2019s *The Reasons of Love* (2004) develops a philosophical account of caring that illuminates Aristotle\u2019s position in unexpected ways. *Frankfurt* argues that love is not primarily about the beloved\u2019s qualities \u2014 it is about the structure of the lover\u2019s will. To love something is to identify your own good with its flourishing. *Self-love*, on this account, is not narcissism but the most basic form of caring: it is the will\u2019s commitment to its own coherence and integrity.",
            "This connects powerfully to Aristotle\u2019s distinction between *vulgar* and *noble self-love*. The vulgar self-lover gratifies appetites that fragment the soul \u2014 they are, in Frankfurt\u2019s terms, \u2018wanton,\u2019 driven by whichever desire happens to be strongest. The noble self-lover, by contrast, has achieved what Frankfurt calls \u2018*wholeheartedness*\u2019 \u2014 their desires are unified under the authority of reason. Julia *Annas*, in *The Morality of Happiness*, makes a complementary point: ancient ethics generally treated self-concern as the starting point of moral development, not its enemy. The modern assumption that morality requires suppressing self-interest would have struck Aristotle as deeply confused.",
            "What emerges from this scholarly conversation is a challenge to the *Kantian* and *utilitarian* traditions that dominate modern moral philosophy. If *Frankfurt* and *Annas* are right, Aristotle\u2019s ethics begins from a psychologically realistic foundation: we must learn to love ourselves well before we can love others well. The question is not whether to be a self-lover, but what kind of self-lover to be."
        ],
        choices: [
            { text: "This reframes everything \u2014 show me the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Alexander Nehamas\u2019s *On Friendship* (2016) argues that Aristotle was onto something profound when he tied friendship to *self-knowledge*. *Nehamas* observes that we are often opaque to ourselves \u2014 we cannot see our own character the way others can. A true friend, Nehamas suggests, functions as a kind of moral mirror: through their responses to us, their honest reactions, and the life we build together, we come to understand who we really are. This is why Aristotle insists that the good person needs friends even though they are self-sufficient in other respects.",
            "Nehamas pushes further than Aristotle in one respect. He argues that *friendship* is not just a mirror for a pre-existing self but partly *constitutive* of that self. Who you are is shaped by whom you love. Your friendships don\u2019t merely reflect your character; they form it. This creates an interesting tension with Aristotle\u2019s view that you must first be a friend to yourself before you can be a friend to others. Nehamas suggests the relationship is more circular: *self-knowledge* and friendship develop together, each deepening the other.",
            "The practical implications are significant. If *Nehamas* is right, the modern cult of radical *self-sufficiency* \u2014 the idea that you should \u2018find yourself\u2019 before entering relationships \u2014 gets things backwards. We find ourselves through our deepest relationships, not prior to them. Aristotle\u2019s seemingly paradoxical claim that *self-love* requires friendship starts to look less like a puzzle and more like a keen observation about the social nature of self-understanding."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "Aristotle\u2019s account of *self-love* remains one of the most provocative elements of his ethics. By insisting that the good person is the truest self-lover, he challenges the modern assumption that morality requires self-effacement. Contemporary scholars like *Frankfurt*, *Nehamas*, and *Annas* have shown that this ancient insight opens onto deep questions about the nature of agency, self-knowledge, and the relationship between loving yourself and loving others.",
            "The readings below explore these questions from different but complementary angles. Together they suggest that Aristotle\u2019s radical claim about *self-love* may be more psychologically honest than the alternatives modern philosophy has offered."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'Harry Frankfurt', title: 'The Reasons of Love', year: '2004' },
            { author: 'Alexander Nehamas', title: 'On Friendship', year: '2016' },
            { author: 'Julia Annas', title: 'The Morality of Happiness', year: '1993' }
        ]
    }
},

// ═══ PLEASURE ════════════════════════════════════════════
pleasure: {
    q_good_bad: {
        text: [
            "Some philosophers of my time argued that *pleasure* is the greatest good. Others argued it is entirely bad. I think both are wrong.",
            "Pleasure is a natural accompaniment of *unimpeded activity*. When you exercise your capacities well and without hindrance, pleasure follows. It is like the bloom of youth on a healthy body \u2014 a sign of *flourishing*, not the flourishing itself."
        ],
        choices: [
            { text: "So pleasure is a good sign?", next: 'good_sign' },
            { text: "What about harmful pleasures?", next: 'harmful' }
        ]
    },
    q_equal: {
        text: [
            "Emphatically not. The pleasures of *contemplation* differ from the pleasures of eating, which differ from the pleasures of gambling. They differ not just in intensity but in *kind*.",
            "The pleasures of the *virtuous person* are the truest pleasures. The pleasures of the base person may feel strong but are mixed with *pain* and ultimately unsatisfying."
        ],
        choices: [
            { text: "How do you distinguish good from bad pleasures?", next: 'distinguish' },
            { text: "Why are virtuous pleasures better?", next: 'good_sign' }
        ]
    },
    q_virtue_pleasure: {
        text: [
            "They are intimately connected. The truly *virtuous* person takes pleasure in virtuous action. If you find justice burdensome and generosity painful, you are not yet truly virtuous \u2014 you are merely *continent*.",
            "Pleasure is the *test of character*: what you enjoy reveals who you are."
        ],
        choices: [
            { text: "Pleasure reveals character?", next: 'reveals' },
            { text: "What about people who enjoy bad things?", next: 'harmful' }
        ]
    },
    good_sign: {
        text: [
            "Precisely. Pleasure *completes* good activity the way beauty completes health. When you exercise a capacity excellently, pleasure arises naturally. The mathematician delights in proofs; the musician delights in playing well.",
            "This tells us something important: the *good life* is not grim. The person who truly lives well takes deep pleasure in doing so."
        ],
        choices: [
            { text: "But what about guilty pleasures?", next: 'harmful' },
            { text: "That\u2019s reassuring \u2014 let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    harmful: {
        text: [
            "Some pleasures are indeed *harmful* \u2014 but this shows that not all pleasures are the same kind of thing. The pleasure a sadist takes in cruelty is not the same type of experience as the pleasure a *good person* takes in helping others.",
            "Bad pleasures belong to *corrupted dispositions*. The standard of true pleasure is set by the *good person*."
        ],
        choices: [
            { text: "How do we know which pleasures to trust?", next: 'distinguish' }
        ]
    },
    reveals: {
        text: [
            "Yes. Tell me what you enjoy, and I will tell you what kind of person you are. The *courageous* person finds satisfaction in noble danger. The *just* person takes pleasure in fair dealing. The *intemperate* person craves excess.",
            "*Training in virtue* is, in large part, training your pleasures \u2014 learning to enjoy the right things."
        ],
        choices: [
            { text: "Let\u2019s wrap up", next: 'conclusion' }
        ]
    },
    distinguish: {
        text: [
            "By looking to the *good person* as the standard. The pleasures of the *virtuous person* are the truest pleasures \u2014 they are stable, deep, and unmixed with regret. Other pleasures may feel intense but often leave dissatisfaction in their wake.",
            "The virtuous person is, in a sense, the *measure of pleasure*, just as the healthy palate is the *measure of flavour*."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Pleasure* is neither the highest good nor something to be avoided. It naturally accompanies good activity and *reveals character*. Not all pleasures are equal \u2014 the pleasures of the *virtuous person* are the truest standard. The good life is a deeply pleasant life."
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
    },
    deep_start: {
        text: [
            "You\u2019ve explored Aristotle\u2019s account of pleasure, but there is a puzzle lurking beneath the surface that has occupied scholars for decades. Aristotle discusses pleasure at length in two separate places \u2014 Book VII and Book X \u2014 and the *two treatments* do not obviously say the same thing. In Book VII, pleasure seems to be identified with *unimpeded activity* itself. In Book X, pleasure is described as something that \u2018completes\u2019 or \u2018*supervenes* upon\u2019 activity, like the bloom of youth on a healthy body. Are these the same theory, or did Aristotle change his mind?",
            "This question matters because it touches on a deeper issue: what kind of thing is *pleasure*? Is it a process, a state, an activity, or something that accompanies activity? Aristotle is wrestling with a problem that remains unresolved in *philosophy of mind* today. The way we answer it shapes how we understand the role of pleasure in the good life.",
            "Two major scholarly contributions have defined the terms of this debate. G.E.L. *Owen* argued influentially that the *two accounts* are genuinely different and may reflect different stages of Aristotle\u2019s thinking. *Gosling and Taylor* offered a comprehensive alternative, attempting to show that the accounts can be harmonized."
        ],
        choices: [
            { text: "Tell me about Owen\u2019s argument that the accounts differ", next: 'deep_a' },
            { text: "How do Gosling and Taylor reconcile the two treatments?", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "G.E.L. *Owen*\u2019s \u2018Aristotelian Pleasures\u2019 (1971) is a classic of Aristotelian scholarship that brought the *two-treatments puzzle* into sharp focus. Owen argued that in Book VII, Aristotle treats pleasure as essentially identical with *unimpeded activity* \u2014 the pleasure of seeing just is the activity of seeing well. But in Book X, Aristotle draws a distinction between the activity and the pleasure that accompanies it: pleasure \u2018completes\u2019 the activity as something additional, the way bloom supervenes on youth. These are, Owen insisted, genuinely different philosophical positions.",
            "*Owen* suggested that the discrepancy might reflect different periods of Aristotle\u2019s *philosophical development*. Book VII\u2019s treatment of pleasure may derive from an earlier period, closer to Aristotle\u2019s roots in Plato\u2019s Academy, while Book X represents his mature view. This developmental hypothesis was controversial but illuminating: it reminded scholars that the *Nicomachean Ethics* may not be a seamless treatise but a compilation of lecture notes from different periods, stitched together by later editors.",
            "Dorothea *Frede*, in her important essay \u2018Pleasure and Pain in Aristotle\u2019s Ethics\u2019 (1980), developed Owen\u2019s insights further while resisting the starkest version of his conclusion. *Frede* argued that both treatments share a common core \u2014 the conviction that pleasure is tied to *excellent activity* and varies in kind with the activity it accompanies \u2014 but that Book X introduces a more sophisticated metaphysical framework for understanding how pleasure relates to the activity it perfects. On Frede\u2019s reading, the development is real but more gradual than Owen supposed."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "J.C.B. *Gosling* and C.C.W. *Taylor*\u2019s *The Greeks on Pleasure* (1982) is the most comprehensive study of ancient theories of pleasure ever written, and their treatment of Aristotle is a masterpiece of careful philosophical reconstruction. Against Owen, Gosling and Taylor argue that the Book VII and Book X accounts are not rival theories but *complementary perspectives* on the same phenomenon. The apparent differences, they contend, arise from Aristotle addressing different questions in each context.",
            "In Book VII, Aristotle is primarily responding to *anti-hedonist* arguments \u2014 philosophers who claimed that pleasure is always bad or that it is a mere *process of replenishment* (like the pleasure of eating when hungry). To refute these views, Aristotle emphasizes that the best pleasures are not processes at all but activities: the pleasure of contemplation is not a process of filling a lack but the excellent exercise of a capacity. In Book X, by contrast, Aristotle is giving a more precise positive account of pleasure\u2019s nature, and here he introduces the *supervenience* metaphor to explain how pleasure relates to activity without being identical to it.",
            "*Gosling and Taylor*\u2019s reconciliation has the virtue of taking both texts seriously without forcing us to choose between them or posit a change of mind. It also highlights something important about Aristotle\u2019s method: he often approaches the same topic from different angles depending on his *dialectical context*, and what looks like inconsistency may simply be the philosopher addressing different opponents. Whether this fully resolves the puzzle remains debated, but their work set a new standard for how to read Aristotle on pleasure."
        ],
        choices: [
            { text: "Show me the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The puzzle of Aristotle\u2019s *two treatments of pleasure* is a window into the interpretive challenges of reading a text that may have been assembled from decades of lecture notes. But it is also a window into a genuinely difficult philosophical question: what is the relationship between doing something well and taking *pleasure* in it? The scholars below have shown that Aristotle\u2019s struggle with this question was not a failure but a sign of its depth.",
            "These readings will reward anyone who wants to think more carefully about the nature of pleasure and its place in the *good life*. Together they represent some of the finest work in ancient *philosophy of mind*."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'G.E.L. Owen', title: 'Aristotelian Pleasures', year: '1971' },
            { author: 'J.C.B. Gosling and C.C.W. Taylor', title: 'The Greeks on Pleasure', year: '1982' },
            { author: 'Dorothea Frede', title: 'Pleasure and Pain in Aristotle\u2019s Ethics', year: '1980' }
        ]
    }
},

// ═══ THE CONTEMPLATIVE LIFE ══════════════════════════════
contemplation: {
    q_why_value: {
        text: [
            "Consider: what makes an activity the highest? It must be *continuous*, *pleasant*, *self-sufficient*, pursued for its own sake, and in accordance with our highest capacity.",
            "*Contemplation* meets all these criteria. It is the most continuous \u2014 we can think longer than we can do anything else. It is the most pleasant \u2014 philosophy offers the purest pleasures. It is the most *self-sufficient* \u2014 the thinker needs little external equipment."
        ],
        choices: [
            { text: "But isn\u2019t this impractical?", next: 'impractical' },
            { text: "What about practical virtue?", next: 'practical_too' }
        ]
    },
    q_realistic: {
        text: [
            "I acknowledge it freely: a life of pure *contemplation* is beyond most human beings. We are *composite creatures* \u2014 not pure intellects but embodied souls living among others. We need food, friends, and a functioning community.",
            "But knowing what the summit looks like helps us orient the rest of the climb. The *contemplative ideal* gives direction even if we cannot live there permanently."
        ],
        choices: [
            { text: "So it\u2019s an ideal, not a requirement?", next: 'ideal' },
            { text: "What about the practical virtues?", next: 'practical_too' }
        ]
    },
    q_action: {
        text: [
            "The life of *practical virtue* \u2014 the life of the just, courageous, generous person \u2014 is genuinely happy. I do not dismiss it. It is a *secondary but real* form of happiness.",
            "But practical virtue always needs *external circumstances*: the generous person needs wealth to give, the just person needs others to treat justly. *Contemplation* is more self-contained."
        ],
        choices: [
            { text: "Doesn\u2019t this devalue action?", next: 'impractical' },
            { text: "Can we have both?", next: 'both' }
        ]
    },
    impractical: {
        text: [
            "I am not saying everyone should become a hermit philosopher! We are *social beings*, and the practical virtues are essential to our nature. My point is this: in our best moments \u2014 when we contemplate truth, beauty, the structure of reality \u2014 we touch something *divine*.",
            "This is the peak of human experience, even if we cannot live there permanently."
        ],
        choices: [
            { text: "What about a balanced life?", next: 'both' }
        ]
    },
    ideal: {
        text: [
            "An ideal that is also partially achievable. Every moment of genuine *understanding* \u2014 grasping a proof, seeing how things connect, contemplating something beautiful \u2014 is a taste of the highest *happiness*.",
            "The *practical life* provides the conditions; *contemplation* provides the summit."
        ],
        choices: [
            { text: "How do these relate?", next: 'both' }
        ]
    },
    practical_too: {
        text: [
            "The *practically virtuous life* is happy in a secondary but genuine way. The just, courageous, and generous person lives well. I insist on this. A human life needs both: *practical engagement* and *contemplative insight*.",
            "But if forced to name the single highest activity, I point to *contemplation* \u2014 the activity of our most *divine* part."
        ],
        choices: [
            { text: "Can we combine them?", next: 'both' }
        ]
    },
    both: {
        text: [
            "In a complete human life, both are present. We engage with others through *practical virtue* \u2014 justice, generosity, courage. And we also make time for understanding \u2014 reflection, learning, *contemplation*.",
            "The *best life* weaves both threads together. But we should be honest: the moments of deepest contemplation are the moments closest to the *divine*."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "The *contemplative life* represents the highest form of *happiness* because contemplation is the most continuous, pleasant, and self-sufficient activity of our highest capacity. The *practical virtues* provide a genuine but secondary happiness. The best human life combines both."
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
    },
    deep_start: {
        text: [
            "You\u2019ve encountered what scholars call the \u2018*two lives*\u2019 problem, and it is one of the most debated puzzles in all of Aristotelian scholarship. In Book I, Aristotle seems to define happiness as an *inclusive good* \u2014 an active life in accordance with complete virtue, enriched by friendship, moderate fortune, and practical engagement. But in Book X, he appears to reverse course, declaring that *contemplation* alone is the supreme happiness and that the practical virtues provide only a secondary form of flourishing.",
            "Is Aristotle *contradicting* himself? Did he change his mind between writing these different books? Or is there a way to read the Nicomachean Ethics as a coherent whole? These questions have generated some of the most sophisticated scholarship in ancient philosophy, and the answers have profound implications for how we understand Aristotle\u2019s vision of the *good life*.",
            "Two particularly influential responses have shaped the modern debate. John *Cooper* defends Aristotle\u2019s consistency by carefully distinguishing what Aristotle means by \u2018supreme\u2019 happiness. Gabriel Richardson *Lear* offers a more radical solution, arguing that contemplation does not compete with practical life but rather gives it meaning."
        ],
        choices: [
            { text: "How does Cooper defend Aristotle\u2019s consistency?", next: 'deep_a' },
            { text: "Tell me about Lear\u2019s argument that contemplation completes practical life", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "John *Cooper*\u2019s \u2018Contemplation and Happiness: A Reconsideration\u2019 (1987) is a landmark essay that addresses the apparent contradiction head-on. *Cooper* argues that when Aristotle calls contemplation the \u2018*supreme*\u2019 happiness in Book X, he does not mean it is the only component of happiness. Rather, contemplation holds a special place within a life that also includes the moral virtues, friendship, and civic engagement. The practically virtuous life is genuinely happy, not merely a consolation prize for those who cannot philosophize.",
            "*Cooper*\u2019s key insight is that Aristotle operates with a nuanced *hierarchy*. Contemplation is the highest single activity, but the best human life is not a life of contemplation alone \u2014 it is a life that makes room for contemplation while also exercising the practical virtues. Aristotle himself acknowledges that we are composite beings, not pure intellects. We need food, friends, and a functioning community. A life of pure contemplation would be *divine*, not human. The best human life, then, includes contemplation as its *crowning achievement* within a broader framework of virtuous activity.",
            "C.D.C. *Reeve*, in *Practices of Reason* (1992), develops a similar line of argument but pushes further into the structure of Aristotle\u2019s practical reasoning. *Reeve* argues that *practical wisdom* and *theoretical wisdom* are not competing faculties but complementary ones: practical wisdom organizes our lives so as to create the conditions for contemplation, while contemplation deepens our understanding of the good that practical wisdom aims at. On this reading, the two lives are not really two lives at all but two dimensions of a single, well-integrated human existence."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Gabriel Richardson *Lear*\u2019s *Happy Lives and the Highest Good* (2004) offers perhaps the most elegant solution to the *two lives problem*. Lear argues that we have been asking the wrong question. The issue is not whether contemplation or practical virtue is \u2018the\u2019 happiness, as if they were competing candidates. Instead, *Lear* proposes that contemplation gives meaning and structure to all our other activities. When the virtuous person acts courageously or generously, they are not merely following rules \u2014 they are expressing an understanding of what is fine and good. That understanding is itself a form of contemplation.",
            "On *Lear*\u2019s reading, the *contemplative life* does not stand apart from the practical life but completes it. The person of practical wisdom sees the nobility in just action, the beauty in generous giving, the order in a well-governed community. These perceptions are not distractions from contemplation; they are instances of it. *Contemplation*, understood broadly, is the activity of grasping the *intelligible structure* of things \u2014 and this happens not only in the philosopher\u2019s study but in every moment of genuine moral insight.",
            "This interpretation has the considerable advantage of making Aristotle\u2019s ethics internally *coherent* without forcing us to choose between his Book I and Book X accounts. It also yields a richer picture of the good life: not the life of the ivory-tower intellectual, but the life of someone whose practical engagements are deepened by understanding, and whose understanding is enriched by practical experience. The *philosopher* and the *statesman*, on this view, need not be different people."
        ],
        choices: [
            { text: "Show me the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The \u2018*two lives*\u2019 problem remains one of the great interpretive challenges of the *Nicomachean Ethics*, and the scholarly conversation around it has produced some of the finest work in ancient philosophy. Whether you find *Cooper*\u2019s hierarchical reading or *Lear*\u2019s integrative vision more persuasive, engaging with this debate will deepen your understanding of what Aristotle means when he points us toward the contemplative ideal.",
            "The readings below represent different but complementary approaches to the problem. Together they demonstrate that Aristotle\u2019s exaltation of *contemplation* is not a retreat from practical life but a challenge to think more carefully about the relationship between *understanding* and *action*."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'John Cooper', title: 'Contemplation and Happiness: A Reconsideration', year: '1987' },
            { author: 'Gabriel Richardson Lear', title: 'Happy Lives and the Highest Good', year: '2004' },
            { author: 'C.D.C. Reeve', title: 'Practices of Reason', year: '1992' }
        ]
    }
},

// ═══ ETHICS & POLITICS ═══════════════════════════════════
politics: {
    q_own: {
        text: [
            "Because human beings are, by nature, *political animals*. We are not self-sufficient individuals who happen to live together. We are creatures whose *flourishing* depends on community \u2014 on laws, education, and shared institutions.",
            "Can you imagine becoming virtuous in complete isolation?"
        ],
        choices: [
            { text: "Maybe \u2014 with enough willpower?", next: 'willpower' },
            { text: "I suppose not \u2014 we need others", next: 'need_others' }
        ]
    },
    q_connection: {
        text: [
            "*Ethics* tells us what a good life looks like. *Politics* creates the conditions in which good lives become possible. Without good laws, education, and institutions, most people cannot develop virtue.",
            "This is why my *Ethics* ends by pointing toward my *Politics*. The study of individual virtue is incomplete without the study of community."
        ],
        choices: [
            { text: "What conditions does virtue need?", next: 'conditions' },
            { text: "Can bad laws prevent virtue?", next: 'bad_laws' }
        ]
    },
    q_education: {
        text: [
            "*Education* is absolutely central. Virtue comes through *habituation*, and habituation begins in childhood. Good education trains the emotions before reason is fully developed \u2014 teaching children to take pleasure in the right things and feel pain at the wrong ones.",
            "But who provides this education?"
        ],
        choices: [
            { text: "Parents?", next: 'parents' },
            { text: "The state and its laws?", next: 'law_role' }
        ]
    },
    willpower: {
        text: [
            "Willpower alone is not enough. Where would you learn what *courage* looks like without anyone to model it? How would you practice justice with no one to be just toward? How would you develop *practical wisdom* without the complexity of social life?",
            "We need others not just for help but for the very development of our character."
        ],
        choices: [
            { text: "What role does the community play?", next: 'conditions' }
        ]
    },
    need_others: {
        text: [
            "Precisely. Virtue develops in *community*. We learn from models, we practice with others, we refine our judgment through shared *deliberation*. And the institutions of a community \u2014 its laws, customs, education \u2014 shape the environment in which character forms."
        ],
        choices: [
            { text: "What makes a good political environment?", next: 'conditions' }
        ]
    },
    conditions: {
        text: [
            "Good *laws* that guide behaviour. *Education* that trains character from youth. Enough material prosperity that citizens are not forced into base actions by poverty. Leisure for *contemplation* and civic participation.",
            "The *legislator*\u2019s highest task is to create conditions where virtue can flourish. This is why politics is the *master science* of the good."
        ],
        choices: [
            { text: "Can bad laws ruin people?", next: 'bad_laws' },
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    bad_laws: {
        text: [
            "Absolutely. Bad laws can *habituate* people to *vice* just as surely as good laws habituate them to virtue. A community that rewards greed and punishes honesty will produce greedy, dishonest people. This is why the quality of legislation matters enormously.",
            "Nearly every Greek state neglected this, I observe. The Spartans were almost alone in taking education seriously."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    parents: {
        text: [
            "Parents are the first educators, yes. But parental authority is limited. The *law* has compulsive power that a single father lacks. And laws apply to everyone, creating a shared standard.",
            "The best approach combines parental care with good public *education* and wise *legislation*."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    law_role: {
        text: [
            "The law is a form of *reason without passion*. It guides behaviour consistently, where individual authority often fails. Good laws habituate citizens to virtue by requiring right action until it becomes second nature.",
            "This is why the study of *legislation* is the natural continuation of ethics."
        ],
        choices: [
            { text: "Let\u2019s summarize", next: 'conclusion' }
        ]
    },
    conclusion: {
        text: [
            "*Ethics* and *politics* are two halves of one inquiry. Ethics shows what virtue is; politics creates the conditions for virtue to flourish. Good laws, education, and community are essential because human beings develop character in a social context, not in isolation."
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
    },
    deep_start: {
        text: [
            "You\u2019ve seen how Aristotle treats *ethics* and *politics* as two halves of a single inquiry. This vision \u2014 that individual virtue cannot be separated from communal life \u2014 has had an extraordinary afterlife in modern political philosophy. Two thinkers in particular have drawn on Aristotle to mount powerful critiques of the way we think about morality and politics today.",
            "Alasdair *MacIntyre* argues that modern moral philosophy is in a state of crisis precisely because it abandoned the Aristotelian framework. Without a shared understanding of the human good, our moral debates become interminable shouting matches. Martha *Nussbaum*, by contrast, has used Aristotle\u2019s insights to build a new political philosophy \u2014 the *capabilities approach* \u2014 that asks what people are actually able to do and be, and what conditions a just society must provide.",
            "Both thinkers take Aristotle\u2019s central insight seriously: that *human flourishing* is not a private achievement but depends on the quality of our shared *institutions*. The question they grapple with is whether this ancient vision can speak to the conditions of modern pluralistic democracies."
        ],
        choices: [
            { text: "Tell me about MacIntyre\u2019s critique of modern morality", next: 'deep_a' },
            { text: "Explore Nussbaum\u2019s capabilities approach", next: 'deep_b' }
        ]
    },
    deep_a: {
        text: [
            "Alasdair *MacIntyre*\u2019s *After Virtue* (1981) is one of the most influential works of moral philosophy in the past century. MacIntyre\u2019s central thesis is dramatic: he argues that modern moral philosophy has failed because it inherited fragments of an Aristotelian moral vocabulary \u2014 words like \u2018good,\u2019 \u2018just,\u2019 \u2018virtue\u2019 \u2014 but lost the framework that gave those words meaning. Without a shared conception of the human *telos*, moral debate becomes a clash of incommensurable assertions. We say \u2018justice demands this\u2019 or \u2018rights require that,\u2019 but we have no agreed-upon standard for adjudicating between competing claims.",
            "*MacIntyre*\u2019s solution is a return to what he calls the tradition of the virtues. He argues that virtues make sense only within \u2018*practices*\u2019 \u2014 complex cooperative activities with internal standards of excellence \u2014 and that practices make sense only within the narrative unity of a human life, which in turn makes sense only within a living moral tradition. This is a deeply Aristotelian vision: goodness is not a set of abstract rules but a quality of *character* developed through participation in meaningful communal activities.",
            "Critics have pressed MacIntyre on whether his vision is viable in modern pluralistic societies. If different communities have different conceptions of the good, whose tradition do we follow? *MacIntyre* has responded that the existence of genuine moral disagreement does not mean all positions are equally valid \u2014 traditions can be rationally compared and evaluated. But the question of whether Aristotelian ethics can survive the fact of deep pluralism remains one of the most pressing in contemporary political philosophy. Stephen *Salkever*\u2019s *Finding the Mean* offers one promising response, arguing that Aristotelian political thought is more flexible and open to diversity than its critics assume."
        ],
        choices: [
            { text: "Show me the reading list", next: 'deep_end' }
        ]
    },
    deep_b: {
        text: [
            "Martha *Nussbaum*\u2019s *capabilities approach*, developed across several major works including *Creating Capabilities* (2011), represents perhaps the most ambitious modern application of Aristotelian ethics to political philosophy. Nussbaum asks a fundamentally Aristotelian question: what does a human being need in order to *flourish*? Her answer takes the form of a list of central human capabilities \u2014 including life, bodily health, practical reason, affiliation, and play \u2014 that any just society must secure for all its citizens.",
            "The Aristotelian roots of this project are explicit. Like Aristotle, *Nussbaum* insists that *human flourishing* is not merely subjective satisfaction but involves the actual exercise of characteristically human capacities. A person who has been denied education, political participation, or the opportunity for meaningful relationships is not flourishing, regardless of whether they report being content. This is Aristotle\u2019s *functionalism* translated into the language of political justice: the state\u2019s obligation is not simply to maximize utility or protect rights in the abstract, but to ensure that each person can live a genuinely human life.",
            "*Nussbaum* parts ways with Aristotle on important points. She is far more *egalitarian*, extending the demand for flourishing to women, labourers, and non-citizens whom Aristotle excluded. She also insists on *political liberalism* \u2014 the capabilities approach specifies what people must be able to do, not what they must do, preserving space for individual choice that Aristotle\u2019s more paternalistic politics does not always respect. The result is a political philosophy that is recognizably Aristotelian in spirit but adapted to the moral demands of modern democracy."
        ],
        choices: [
            { text: "Let\u2019s see the reading list", next: 'deep_end' }
        ]
    },
    deep_end: {
        text: [
            "The relationship between Aristotelian ethics and modern political philosophy remains one of the most fertile areas of contemporary thought. *MacIntyre*, *Nussbaum*, and *Salkever* each demonstrate, in different ways, that Aristotle\u2019s insistence on the connection between individual *virtue* and communal life is not merely a historical curiosity but a living challenge to the way we organize our societies.",
            "These readings will take you into the heart of that challenge. They reward careful study and together they show that the final pages of the Nicomachean Ethics \u2014 where Aristotle turns from the individual to the *community* \u2014 may be among the most consequential in the entire work."
        ],
        isDeepEnd: true,
        choices: [],
        readings: [
            { author: 'Alasdair MacIntyre', title: 'After Virtue', year: '1981' },
            { author: 'Martha Nussbaum', title: 'Creating Capabilities', year: '2011' },
            { author: 'Stephen Salkever', title: 'Finding the Mean', year: '1990' }
        ]
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
