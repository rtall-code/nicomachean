// ─── State ───────────────────────────────────────────────
let currentMode = 'navigation'; // 'navigation' or 'instruction'
let currentTopic = null;        // topic id for Learn mode
let currentNode = null;
let completedTopics = new Set();
let unlockedConcepts = new Set();
let isTyping = false;
let skipTyping = false;
let displayedTopicIds = [];     // currently shown 4 topic ids

// Reader state
let readerBook = null;
let readerChapter = 0;
let searchMatches = [];
let searchMatchIndex = -1;

// ─── DOM References ──────────────────────────────────────
const $ = id => document.getElementById(id);
const introScreen = $('introScreen');
const hubScreen = $('hubScreen');
const questionScreen = $('questionScreen');
const dialogueScreen = $('dialogueScreen');
const readerScreen = $('readerScreen');
const endScreen = $('endScreen');
const dialogueText = $('dialogueText');
const choicesContainer = $('choicesContainer');
const progressFill = $('progressFill');
const dialogueHeaderTitle = $('dialogueHeaderTitle');
const skipHint = $('skipHint');
const sidebar = $('sidebar');
const overlay = $('overlay');
const conceptMapSvg = $('conceptMapSvg');

// Reader DOM
const readerHeaderTitle = $('readerHeaderTitle');
const chapterNav = $('chapterNav');
const readerChapterTitle = $('readerChapterTitle');
const readerContent = $('readerContent');
const readerSearchInput = $('readerSearchInput');
const searchCount = $('searchCount');

// ─── Utility ─────────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms));

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function loadState() {
    try {
        const saved = localStorage.getItem('nicomachean_state_v2');
        if (saved) {
            const data = JSON.parse(saved);
            completedTopics = new Set(data.completedTopics || []);
            unlockedConcepts = new Set(data.unlockedConcepts || []);
            if (data.currentMode) currentMode = data.currentMode;
        }
    } catch(e) {}
}

function saveState() {
    try {
        localStorage.setItem('nicomachean_state_v2', JSON.stringify({
            completedTopics: [...completedTopics],
            unlockedConcepts: [...unlockedConcepts],
            currentMode
        }));
    } catch(e) {}
}

// ─── Screens ─────────────────────────────────────────────
const allScreens = () => [introScreen, hubScreen, questionScreen, dialogueScreen, readerScreen, endScreen];

function showScreen(screen) {
    allScreens().forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function updateProgress() {
    const pct = (completedTopics.size / topics.length) * 100;
    progressFill.style.width = pct + '%';
    const count = $('completedCount');
    if (count) count.textContent = completedTopics.size;
}

// ─── Mode Switching ──────────────────────────────────────
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    const hubProgress = $('hubProgress');
    const hubSubtitle = $('hubSubtitle');
    const bookList = $('bookList');
    const topicSection = $('topicSection');

    if (mode === 'instruction') {
        hubProgress.style.display = '';
        hubSubtitle.textContent = 'Choose a topic to explore with Aristotle';
        bookList.style.display = 'none';
        topicSection.style.display = '';
        renderTopicGrid();
    } else {
        hubProgress.style.display = 'none';
        hubSubtitle.textContent = 'Choose a book to read';
        bookList.style.display = '';
        topicSection.style.display = 'none';
        renderBookList();
    }

    updateProgress();
    showScreen(hubScreen);
    saveState();
}

// ─── Hub: Book List (Read mode) ──────────────────────────
function renderBookList() {
    const list = $('bookList');
    list.innerHTML = '';
    books.forEach(book => {
        const item = document.createElement('div');
        item.className = 'book-item';
        item.innerHTML = `
            <div class="book-numeral">${book.numeral}</div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-desc">${book.desc}</div>
            </div>
            <div class="book-status">Read &rarr;</div>
        `;
        item.addEventListener('click', () => openReader(book.id));
        list.appendChild(item);
    });
}

// ─── Hub: Topic Grid (Learn mode) ────────────────────────
function pickFourTopics() {
    // Pick 4 random topics, preferring ones not yet completed
    const incomplete = topics.filter(t => !completedTopics.has(t.id));
    const pool = incomplete.length >= 4 ? incomplete : topics;
    const shuffled = shuffle(pool);
    displayedTopicIds = shuffled.slice(0, 4).map(t => t.id);
}

function renderTopicGrid() {
    if (displayedTopicIds.length === 0) pickFourTopics();

    const grid = $('topicGrid');
    grid.innerHTML = '';
    displayedTopicIds.forEach(id => {
        const topic = topics.find(t => t.id === id);
        if (!topic) return;
        const done = completedTopics.has(topic.id);
        const card = document.createElement('div');
        card.className = 'topic-card' + (done ? ' completed' : '');
        card.innerHTML = `
            <div class="topic-card-title">${topic.title}</div>
            <div class="topic-card-subtitle">${topic.subtitle}</div>
        `;
        card.addEventListener('click', () => openTopicQuestions(topic.id));
        grid.appendChild(card);
    });
}

function shuffleTopics() {
    pickFourTopics();
    renderTopicGrid();
}

// ─── Question Selection Screen ───────────────────────────
function openTopicQuestions(topicId) {
    currentTopic = topicId;
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return;

    $('questionTopicTitle').textContent = topic.title;
    $('questionTopicSubtitle').textContent = topic.subtitle;

    const list = $('questionList');
    list.innerHTML = '';
    topic.questions.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.textContent = q.text;
        btn.addEventListener('click', () => startDialogue(topicId, q.next));
        list.appendChild(btn);
    });

    showScreen(questionScreen);
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION MODE (Reader)
// ═══════════════════════════════════════════════════════════

function openReader(bookId) {
    readerBook = bookId;
    readerChapter = 0;
    const book = books.find(b => b.id === bookId);
    const data = sourceText[bookId];
    if (!data) return;

    readerHeaderTitle.textContent = `Book ${book.numeral}: ${book.title}`;

    chapterNav.innerHTML = '';
    data.chapters.forEach((ch, i) => {
        const pill = document.createElement('button');
        pill.className = 'chapter-pill' + (i === 0 ? ' active' : '');
        pill.textContent = `Ch. ${ch.numeral}`;
        pill.addEventListener('click', () => loadChapter(i));
        chapterNav.appendChild(pill);
    });

    loadChapter(0);
    showScreen(readerScreen);
    clearSearch();
}

function loadChapter(index) {
    const data = sourceText[readerBook];
    if (!data || !data.chapters[index]) return;

    readerChapter = index;
    const ch = data.chapters[index];

    chapterNav.querySelectorAll('.chapter-pill').forEach((pill, i) => {
        pill.classList.toggle('active', i === index);
    });

    readerChapterTitle.textContent = `Chapter ${ch.numeral}`;

    readerContent.innerHTML = '';
    ch.paragraphs.forEach((text, pi) => {
        const p = document.createElement('p');
        p.className = 'reader-paragraph';
        p.dataset.index = pi;
        p.textContent = text;
        readerContent.appendChild(p);
    });

    $('prevChapterBtn').style.visibility = index > 0 ? 'visible' : 'hidden';
    $('nextChapterBtn').style.visibility = index < data.chapters.length - 1 ? 'visible' : 'hidden';

    if (readerSearchInput.value.trim()) {
        applySearch(readerSearchInput.value.trim());
    }

    window.scrollTo(0, 0);
}

// ─── Search in Reader ────────────────────────────────────
function clearSearch() {
    readerSearchInput.value = '';
    searchCount.textContent = '';
    searchMatches = [];
    searchMatchIndex = -1;
    readerContent.querySelectorAll('.reader-paragraph').forEach(p => {
        p.classList.remove('highlighted');
        if (p.querySelector('mark')) {
            p.textContent = p.textContent;
        }
    });
}

function applySearch(query) {
    searchMatches = [];
    searchMatchIndex = -1;
    const paragraphs = readerContent.querySelectorAll('.reader-paragraph');
    const lowerQuery = query.toLowerCase();

    paragraphs.forEach((p, i) => {
        const text = p.textContent;
        const lowerText = text.toLowerCase();
        p.classList.remove('highlighted');

        if (lowerText.includes(lowerQuery)) {
            searchMatches.push(i);
            const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
            p.innerHTML = text.replace(regex, '<mark>$1</mark>');
            p.classList.add('highlighted');
        } else {
            p.innerHTML = text;
        }
    });

    if (searchMatches.length > 0) {
        searchMatchIndex = 0;
        searchCount.textContent = `${searchMatches.length} match${searchMatches.length > 1 ? 'es' : ''}`;
        scrollToMatch(0);
    } else if (query) {
        searchCount.textContent = 'No matches';
    } else {
        searchCount.textContent = '';
    }
}

function scrollToMatch(index) {
    if (index < 0 || index >= searchMatches.length) return;
    searchMatchIndex = index;
    const pi = searchMatches[index];
    const el = readerContent.querySelectorAll('.reader-paragraph')[pi];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

readerSearchInput.addEventListener('input', () => {
    const q = readerSearchInput.value.trim();
    if (q.length >= 2) {
        applySearch(q);
    } else {
        clearSearch();
        if (q.length > 0) readerSearchInput.value = q;
    }
});

$('searchPrevBtn').addEventListener('click', () => {
    if (searchMatches.length === 0) return;
    scrollToMatch((searchMatchIndex - 1 + searchMatches.length) % searchMatches.length);
});

$('searchNextBtn').addEventListener('click', () => {
    if (searchMatches.length === 0) return;
    scrollToMatch((searchMatchIndex + 1) % searchMatches.length);
});

$('readerBackBtn').addEventListener('click', () => setMode('navigation'));

$('prevChapterBtn').addEventListener('click', () => {
    if (readerChapter > 0) loadChapter(readerChapter - 1);
});

$('nextChapterBtn').addEventListener('click', () => {
    const data = sourceText[readerBook];
    if (data && readerChapter < data.chapters.length - 1) {
        loadChapter(readerChapter + 1);
    }
});

// ═══════════════════════════════════════════════════════════
// LEARN MODE (Topic-based Socratic Dialogue)
// ═══════════════════════════════════════════════════════════

function startDialogue(topicId, startNode) {
    currentTopic = topicId;
    const topic = topics.find(t => t.id === topicId);
    dialogueHeaderTitle.textContent = topic.title;
    // Start with card hidden, then fade in
    const card = $('dialogueCard');
    card.classList.add('entering');
    showScreen(dialogueScreen);
    requestAnimationFrame(() => {
        card.classList.remove('entering');
    });
    renderNode(startNode);
}

async function renderNode(nodeId) {
    currentNode = nodeId;
    const tree = topicDialogues[currentTopic];
    const node = tree[nodeId];
    if (!node) return;

    // Clear
    dialogueText.innerHTML = '';
    choicesContainer.innerHTML = '';
    skipHint.classList.remove('visible');
    skipTyping = false;
    isTyping = true;

    setTimeout(() => {
        if (isTyping) skipHint.classList.add('visible');
    }, 1500);

    // Type paragraphs
    for (let i = 0; i < node.text.length; i++) {
        const p = document.createElement('p');
        dialogueText.appendChild(p);
        await typeText(p, node.text[i]);
        if (i < node.text.length - 1) await sleep(skipTyping ? 50 : 250);
    }

    isTyping = false;
    skipHint.classList.remove('visible');

    if (node.isEnd) {
        await sleep(300);
        showTopicEnd(node);
    } else {
        await sleep(200);
        showChoices(node.choices);
    }
}

async function typeText(element, text) {
    element.textContent = '';
    element.classList.add('typing-cursor');
    for (let i = 0; i < text.length; i++) {
        if (skipTyping) {
            element.textContent = text;
            break;
        }
        element.textContent += text[i];
        let delay = 18 + Math.random() * 8;
        if ('.!?'.includes(text[i]) && i < text.length - 1) delay += 120;
        else if (',;:'.includes(text[i])) delay += 60;
        else if (text[i] === '\u2014') delay += 80;
        await sleep(delay);
    }
    element.classList.remove('typing-cursor');
}

function showChoices(choices) {
    choicesContainer.innerHTML = '';
    choices.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.text;
        choicesContainer.appendChild(btn);
        setTimeout(() => btn.classList.add('visible'), i * 100 + 50);
        btn.addEventListener('click', () => selectChoice(choice, btn));
    });
}

async function selectChoice(choice, clickedBtn) {
    const buttons = choicesContainer.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn !== clickedBtn) btn.classList.add('dimmed');
        else btn.classList.add('selected');
    });

    await sleep(500);

    const card = $('dialogueCard');
    card.classList.add('exiting');
    await sleep(400);

    card.classList.remove('exiting');
    card.classList.add('entering');
    renderNode(choice.next);
    await sleep(50);
    card.classList.remove('entering');
}

function showTopicEnd(node) {
    completedTopics.add(currentTopic);
    saveState();
    updateProgress();

    const summaryHTML = `
        <div class="summary-card">
            <h3>Key Insights</h3>
            <ol>${node.summary.map(s => `<li>${s}</li>`).join('')}</ol>
        </div>
    `;

    const quoteHTML = node.quote ? `
        <div class="end-quote" style="margin-top: 1.5rem;">
            <p>\u201C${node.quote.text}\u201D</p>
            <cite>\u2014 ${node.quote.cite}</cite>
        </div>
    ` : '';

    const btns = `
        <div style="display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap;">
            <button class="btn-primary" onclick="setMode('instruction')">Back to Topics</button>
            <button class="btn-outline" onclick="toggleSidebar()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                Concept Map
            </button>
            <button class="btn-ghost" onclick="openTopicQuestions(currentTopic)">Try Another Question</button>
        </div>
    `;

    const container = document.createElement('div');
    container.innerHTML = summaryHTML + quoteHTML + btns;
    container.style.opacity = '0';
    container.style.transform = 'translateY(12px)';
    container.style.transition = 'opacity 600ms ease, transform 600ms ease';
    choicesContainer.appendChild(container);
    requestAnimationFrame(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    });
}

// ─── Concept Map ─────────────────────────────────────────
function buildConceptMap() {
    const svg = conceptMapSvg;
    svg.innerHTML = '';

    conceptMapEdges.forEach(([fromId, toId]) => {
        const from = conceptMapNodes.find(n => n.id === fromId);
        const to = conceptMapNodes.find(n => n.id === toId);
        if (!from || !to) return;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', from.x);
        line.setAttribute('y1', from.y);
        line.setAttribute('x2', to.x);
        line.setAttribute('y2', to.y);
        line.setAttribute('class', 'concept-edge');
        line.id = `edge-${fromId}-${toId}`;
        svg.appendChild(line);
    });

    conceptMapNodes.forEach(node => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'concept-node');
        g.id = `concept-${node.id}`;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', node.isBook ? 14 : 8);
        g.appendChild(circle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + (node.isBook ? 28 : 20));
        text.setAttribute('text-anchor', 'middle');
        if (node.isBook) text.setAttribute('class', 'concept-book-label');
        text.textContent = node.label;
        g.appendChild(text);

        svg.appendChild(g);
    });

    updateConceptMap();
}

function updateConceptMap() {
    conceptMapNodes.forEach(node => {
        const el = document.getElementById(`concept-${node.id}`);
        if (!el) return;
        el.classList.toggle('unlocked', unlockedConcepts.has(node.id));
    });

    conceptMapEdges.forEach(([fromId, toId]) => {
        const el = document.getElementById(`edge-${fromId}-${toId}`);
        if (!el) return;
        el.classList.toggle('active', unlockedConcepts.has(fromId) && unlockedConcepts.has(toId));
    });
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
}

// ─── Event Listeners ─────────────────────────────────────
$('beginBtn').addEventListener('click', () => setMode(currentMode));
$('backBtn').addEventListener('click', () => setMode('instruction'));
$('questionBackBtn').addEventListener('click', () => setMode('instruction'));
$('mapBtn').addEventListener('click', toggleSidebar);
$('closeMapBtn').addEventListener('click', toggleSidebar);
$('overlay').addEventListener('click', toggleSidebar);
$('shuffleBtn').addEventListener('click', shuffleTopics);

// Mode switcher
$('modeNavBtn').addEventListener('click', () => setMode('navigation'));
$('modeInsBtn').addEventListener('click', () => setMode('instruction'));

// Skip typing on click
document.addEventListener('click', (e) => {
    if (isTyping &&
        !e.target.closest('.choice-btn') &&
        !e.target.closest('.btn-outline') &&
        !e.target.closest('.btn-ghost') &&
        !e.target.closest('.btn-primary') &&
        !e.target.closest('.btn-close') &&
        !e.target.closest('.sidebar') &&
        !e.target.closest('.dialogue-header')) {
        skipTyping = true;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
});

// ─── Init ────────────────────────────────────────────────
loadState();
buildConceptMap();
updateProgress();

// Set mode button UI without navigating
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === currentMode);
});

// If already visited, skip intro
if (completedTopics.size > 0) {
    setMode(currentMode);
}
