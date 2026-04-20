// --- 1. CONFIGURATION & MOCK DATA ---
const ROADMAP_DATA = {
    "Fullstack Engineer": [
        { title: "Advanced Next.js", desc: "SSR, ISR, and Middleware", status: "active" },
        { title: "PostgreSQL & Prisma", desc: "Database Modeling", status: "locked" },
        { title: "System Design", desc: "Scaling to 1M users", status: "locked" }
    ],
    "AI Researcher": [
        { title: "Linear Algebra Refresher", desc: "Matrices & Tensors", status: "active" },
        { title: "PyTorch Deep Learning", desc: "Building Neural Nets", status: "locked" },
        { title: "LLM Fine-tuning", desc: "LoRA & QLoRA techniques", status: "locked" }
    ],
    "Cyber Architect": [
        { title: "Network Security", desc: "Zero Trust Architecture", status: "active" },
        { title: "Penetration Testing", desc: "Advanced Exploit Dev", status: "locked" },
        { title: "Cloud Security", desc: "Hardening AWS/Azure", status: "locked" }
    ],
    "Product Designer": [
        { title: "Design Systems", desc: "Atomic Design Principles", status: "active" },
        { title: "Advanced Prototyping", desc: "Variables & Expressions", status: "locked" },
        { title: "User Research", desc: "Quantitative Data Analysis", status: "locked" }
    ]
};

const QUIZ_PROGRESS_STORAGE_KEY = "pathfinderQuizProgress";

function getStageProgressPercent(stage) {
    if (stage === 'checkbox') return 100;
    if (stage === 'document') return 90;
    return 30;
}

function getStageSummaryText(stage) {
    if (stage === 'checkbox') return 'Roadmap complete. 100% progress reached.';
    if (stage === 'document') return 'Study content opened. 90% progress reached.';
    return 'Quiz complete. 30% progress reached.';
}

// --- 2. CORE FUNCTIONS ---

function toggleQuiz() {
    const modal = document.getElementById('quizModal');
    if (!modal) return;
    
    const isHidden = modal.style.display === 'none' || modal.style.display === '';
    modal.style.display = isHidden ? 'flex' : 'none';
}

function generateRoadmap() {
    const role = document.getElementById('targetRole').value;
    const skillLevel = document.getElementById('skillLevel').value;
    const quizContent = document.getElementById('quizContent');
    const loadingState = document.getElementById('loadingState');
    const generatingFor = document.getElementById('generatingFor');

    // UI State Transition
    quizContent.style.display = 'none';
    loadingState.style.display = 'block';
    generatingFor.innerText = role;

    // Simulate AI Latency
    setTimeout(() => {
        updateDashboard(role, skillLevel);
        toggleQuiz();
        
        // Reset Modal for next use
        quizContent.style.display = 'block';
        loadingState.style.display = 'none';
    }, 2500);
}

// --- 3. DYNAMIC UI UPDATER ---

function updateDashboard(role, skill) {
    // 1. Update Header Info
    const welcomeTitle = document.querySelector('.user-welcome h1');
    const currentPathText = document.querySelector('.card-footer-text');
    const progressFill = document.querySelector('.progress-fill');
    const progressPerc = document.querySelector('.percentage');

    welcomeTitle.innerText = "Target: " + role;
    currentPathText.innerHTML = `Current Path: <strong>${role}</strong> (Level ${skill}/10)`;
    
    // 2. Reset Progress
    progressFill.style.width = '0%';
    progressPerc.innerText = '0%';

    // 3. Rebuild Roadmap List Dynamically
    const roadmapContainer = document.querySelector('.roadmap-list');
    roadmapContainer.innerHTML = ''; // Clear existing

    const newSteps = ROADMAP_DATA[role] || [];

    newSteps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = `roadmap-step-clean ${step.status}`;
        
        // Add connecting line except for the last item
        const line = index !== newSteps.length - 1 ? '<div class="step-line"></div>' : '';
        
        const icon = step.status === 'active' ? '⚡' : '🔒';

        stepDiv.innerHTML = `
            ${line}
            <div class="step-check">${icon}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
                ${step.status === 'active' ? '<button class="cta-button small">Start Learning</button>' : ''}
            </div>
        `;
        roadmapContainer.appendChild(stepDiv);
    });
}

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Attach Event Listeners
    const triggerBtn = document.querySelector('.signup-btn');
    if (triggerBtn) triggerBtn.addEventListener('click', toggleQuiz);
    loadDashboardProgress();
});

function loadDashboardProgress() {
    if (!window || !window.localStorage) return;
    const raw = localStorage.getItem(QUIZ_PROGRESS_STORAGE_KEY);
    if (!raw) return;

    try {
        const saved = JSON.parse(raw);
        if (!saved || typeof saved !== 'object') return;

        const stage = saved.progressStage || (saved.checkedSteps > 0 ? 'checkbox' : 'quiz');
        const progressPercent = saved.progressPercent ?? getStageProgressPercent(stage);
        const progressFill = document.querySelector('.progress-fill');
        const progressPerc = document.querySelector('.percentage');
        const welcomeTitle = document.querySelector('.user-welcome h1');
        const currentPathText = document.querySelector('.card-footer-text');
        const welcomeMessage = document.querySelector('.user-welcome p');

        if (progressFill) progressFill.style.width = `${progressPercent}%`;
        if (progressPerc) progressPerc.innerText = `${progressPercent}%`;
        if (welcomeTitle) welcomeTitle.innerText = saved.levelName ? `${saved.levelName} Progress` : 'Dashboard';
        if (currentPathText) {
            currentPathText.innerHTML = `Current Path: <strong>${saved.category || 'Career Quiz'}</strong> • ${progressPercent}% Complete`;
        }
        if (welcomeMessage) {
            welcomeMessage.innerHTML = getStageSummaryText(stage);
        }
    } catch (error) {
        console.error('Failed to load dashboard progress:', error);
    }
}

// --- COMMUNITY LIVE UPDATES ---
const MOCK_USERS = ["Alex_Dev", "CyberKnight", "DevSarah", "NeuralNinja", "QuantumCode"];
const MOCK_ACTIONS = ["started", "completed", "forked", "unlocked"];
const MOCK_PATHS = ["Fullstack", "AI Path", "Cyber Security", "Data Science"];

function addLiveActivity() {
    const list = document.getElementById('liveActivityList');
    if (!list) return;

    // Create random activity data
    const user = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];
    const action = MOCK_ACTIONS[Math.floor(Math.random() * MOCK_ACTIONS.length)];
    const path = MOCK_PATHS[Math.floor(Math.random() * MOCK_PATHS.length)];

    const item = document.createElement('div');
    item.className = 'activity-item';
    item.style.opacity = '0'; // For fade-in effect
    
    item.innerHTML = `
        <span class="pulse-icon"></span>
        <p><strong>${user}</strong> ${action} <em>${path}</em></p>
    `;

    // Add to top of list
    list.prepend(item);
    
    // Animate In
    setTimeout(() => { item.style.opacity = '1'; item.style.transition = '0.5s'; }, 10);

    // Keep only last 5 items
    if (list.children.length > 5) {
        list.removeChild(list.lastChild);
    }
}

// Initialize Live Simulation
if (document.getElementById('liveActivityList')) {
    setInterval(addLiveActivity, 8000); // New activity every 8 seconds
}

// 1. Leaderboard Data
const leaderboardData = [
    { rank: "#1", name: "Neural_King", level: "42", points: "12,450", color: "gold" },
    { rank: "#2", name: "Byte_Knight", level: "38", points: "11,200", color: "#e5e7eb" },
    { rank: "#3", name: "Cyber_Sora", level: "37", points: "10,840", color: "#cd7f32" },
    { rank: "#4", name: "Dev_Sarah", level: "35", points: "9,100", color: "white" }
];

// 2. Initialize Leaderboard
function renderLeaderboard() {
    const container = document.getElementById('leaderboardBody');
    if (!container) return;

    container.innerHTML = leaderboardData.map(user => `
        <tr>
            <td style="color: ${user.color}; font-weight: 800;">${user.rank}</td>
            <td><strong>${user.name}</strong></td>
            <td>Level ${user.level}</td>
            <td style="color: var(--cyan); font-weight: 700;">${user.points}</td>
        </tr>
    `).join('');
}

// 3. Live Activity Simulator
const USERS = ["Alex_Dev", "QuantumCode", "Sudo_Dan", "Bit_Wizard"];
const ACTIONS = ["completed", "started", "unlocked", "forked"];
const TOPICS = ["Next.js API", "Rust Foundations", "Deep Learning", "Ethical Hacking"];

function simulateActivity() {
    const list = document.getElementById('liveActivityList');
    if (!list) return;

    const user = USERS[Math.floor(Math.random() * USERS.length)];
    const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `
        <span class="pulse-icon"></span>
        <p><strong>${user}</strong> ${action} <em>${topic}</em></p>
    `;

    list.prepend(div);
    if (list.children.length > 5) list.removeChild(list.lastChild);
}

// 4. Global Init
document.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
    setInterval(simulateActivity, 7000); // New activity every 7 seconds
});

function calculateResult() {
    // Guard: If scores is not defined, exit early
    if (typeof scores === 'undefined') return;
    
    // Find category with highest score
    const highest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    const resultsMap = {
        web: { title: "Web Architect", desc: "You are the backbone of the internet, balancing data and design." },
        data: { title: "Data Scientist", desc: "You find the hidden stories in numbers and predict the future." },
        uiux: { title: "Experience Designer", desc: "You see the world through the user's eyes and make it beautiful." },
        aiml: { title: "AI/ML Engineer", desc: "You build the neural networks that define the next generation of tech." },
        cyber: { title: "Cyber Security Expert", desc: "You are the digital guardian, protecting the world from threats." },
        mobile: { title: "Mobile Innovator", desc: "You create the pocket-sized experiences that billions rely on." },
        cloud: { title: "Cloud Architect", desc: "You build the invisible infrastructure that never sleeps." },
        strategy: { title: "Digital Strategist", desc: "You bridge the gap between technical power and business success." }
    };

    document.getElementById('matchTitle').innerText = resultsMap[highest].title;
    document.getElementById('matchDesc').innerText = resultsMap[highest].desc;
}

// --- 1. Spec Generator ---
function generateSpec() {
    const stack = document.getElementById('stackInput').value;
    const out = document.getElementById('specOutput');
    if (!stack) return;
    out.innerHTML = "<p style='color:var(--cyan)'>Drafting technical documentation...</p>";
    setTimeout(() => {
        out.innerHTML = `
            <div style="background:#ffffff05; padding:15px; border-radius:6px; font-size:0.8rem;">
                <h4 style="color:white">Project: Secure-Vault API</h4>
                <p style="margin:5px 0;"><strong>Stack:</strong> ${stack}</p>
                <p style="color:var(--cyan)">- Feature: Rate-limiting middleware</p>
                <p style="color:var(--cyan)">- Feature: Health-check endpoints</p>
                <p style="color:var(--cyan)">- Feature: Automated unit test suite</p>
            </div>`;
    }, 600);
}

// --- 2. Infrastructure Mapper ---
function mapInfra() {
    const idea = document.getElementById('appIdea').value;
    const out = document.getElementById('infraOutput');
    if (!idea) return;
    out.innerHTML = `
        <div style="font-family:monospace; font-size:0.8rem; color:#a855f7; border:1px solid #a855f7; padding:10px; background:#a855f70a;">
            <p>[User] -> [CloudFront CDN]</p>
            <p>[ELB Load Balancer] -> [ECS Containers]</p>
            <p>[Primary DB: PostgreSQL] | [Cache: Redis]</p>
            <p>[Queue: SQS] -> [Lambda Workers]</p>
        </div>
        <p style="font-size:0.7rem; color:var(--text-dim); margin-top:5px;">Standard architecture for scalable ${idea} systems.</p>`;
}

// --- 3. ATS Skill Scanner ---
function checkATS() {
    const desc = document.getElementById('jobDesc').value;
    const out = document.getElementById('atsOutput');
    if (!desc) return;
    out.innerHTML = `
        <div style="border:1px solid #ffcc00; padding:10px; font-size:0.85rem;">
            <p style="color:#ffcc00"><strong>Missing Hard Skills:</strong></p>
            <p>Docker, CI/CD, Unit Testing, AWS S3.</p>
            <p style="margin-top:10px; font-weight:bold;">ATS Match: <span style="color:#ff4d4d">Low (58%)</span></p>
        </div>`;
}

// --- 4. Logic Refiner ---
function refineLogic() {
    const code = document.getElementById('codeInput').value;
    const out = document.getElementById('logicOutput');
    if (!code) return;
    out.innerHTML = `
        <div style="background:#00ff8810; border-left:3px solid #00ff88; padding:12px; font-size:0.8rem;">
            <h4 style="color:#00ff88; margin-bottom:5px;">Efficiency Report:</h4>
            <p><strong>Complexity:</strong> O(n) Linear</p>
            <p><strong>Suggestion:</strong> Logic is efficient, but ensure <strong>Error Boundaries</strong> are implemented to prevent crash loops.</p>
        </div>`;
}

function generateDomainCode() {
    const domain = document.getElementById('domainSelect').value;
    const title = document.getElementById('projectTitle').value || "Project-Alpha";
    const display = document.getElementById('codeDisplay');
    const container = document.getElementById('codeGeneratorOutput');

    container.style.display = 'block';
    display.innerText = ">> Initiating Neural Synthesis for " + domain.toUpperCase() + "...";

    const snippets = {
        web: `/* ${title} - Frontend Structure */\nindex.html\nstyles.css\napp.js\n\n// Basic App Setup\nconst app = document.querySelector('#app');\napp.innerHTML = '<h1>Hello World</h1>';`,
        
        backend: `/* ${title} - Express Server */\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('API Active'));\napp.listen(3000, () => console.log('Server running...'));`,
        
        aiml: `# ${title} - ML Model\nimport pandas as pd\nimport sklearn\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\nprint("Model Accuracy: 94.2%")`,
        
        data: `# ${title} - Data Analysis\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\ndf = pd.read_csv('data.csv')\nsns.heatmap(df.corr(), annot=True)\nplt.show()`,
        
        mobile: `/* ${title} - React Native Component */\nimport { View, Text } from 'react-native';\n\nexport default function App() {\n  return (\n    <View><Text>Mobile Interface Active</Text></View>\n  );\n}`,
        
        cyber: `# ${title} - Port Scanner Script\nimport socket\n\nfor port in range(1, 1024):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    # Logic to check open ports...`,
        
        cloud: `# ${title} - Terraform Infrastructure\nresource "aws_instance" "web_server" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n}`,
        
        game: `// ${title} - Unity Player Controller\nusing UnityEngine;\n\npublic class Player : MonoBehaviour {\n    void Update() {\n        float move = Input.GetAxis("Horizontal");\n        transform.Translate(move * Time.deltaTime, 0, 0);\n    }\n}`
    };

    setTimeout(() => {
        display.innerText = snippets[domain];
    }, 1000);
}

// AI CHATBOT LOGIC

// SIMULATE LIVE MARKET DATA UPDATES
function updateTickerData() {
    const tickers = document.querySelectorAll('.ticker-item');
    tickers.forEach(item => {
        // 30% chance to update a value slightly
        if (Math.random() > 0.7) {
            const currentText = item.innerHTML;
            if (currentText.includes('%')) {
                const newVal = Math.floor(Math.random() * 30) + 5;
                const trend = Math.random() > 0.2 ? '▲' : '▼';
                const color = trend === '▲' ? 'trend-up' : 'trend-down';
                
                // Update the percentage part of the string
                const role = currentText.split(':')[0].split('>')[2]; 
                item.innerHTML = `<span class="${color}">${trend}</span> ${role}: +${newVal}% Demand`;
            }
        }
    });
}

// Update every 5 seconds
setInterval(updateTickerData, 5000);// FAQ Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('.icon');
        const isActive = item.classList.contains('active');
        
        // Close all items first (for true active behavior)
        document.querySelectorAll('.accordion-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.icon').innerText = '+';
        });

        // If it wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
            icon.innerText = '-';
        }
    });
});// PROACTIVE AI CHATBOT ENGINE

function toggleChat() {
    const chat = document.getElementById('aiChatbot');
    chat.style.display = chat.style.display === 'none' ? 'flex' : 'none';
}

function handleKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    appendMessage('user', text);
    input.value = '';

    setTimeout(() => {
        appendMessage('ai', generateStudyResponse(text));
    }, 700);
}

function generateStudyResponse(text) {
    const msg = text.toLowerCase();

    if (msg.includes('study') || msg.includes('learn') || msg.includes('prepare') || msg.includes('practice') || msg.includes('understand')) {
        if (msg.includes('python')) {
            return "To study Python effectively, start with the basics of syntax, variables, and functions. Then build small projects like a data parser or a web scraper. Next, learn libraries such as pandas and Flask, and finally practice by solving problems on sites like LeetCode and building a portfolio project.";
        }
        if (msg.includes('react') || msg.includes('javascript')) {
            return "For React, begin with modern JavaScript (ES6+) and component patterns. Build one small app, then add routing, state management, and API calls. Use Next.js for production-ready pages, and review hooks, context, and best practices for maintainable projects.";
        }
        if (msg.includes('machine learning') || msg.includes('ml') || msg.includes('ai')) {
            return "Start with Python fundamentals, then learn NumPy, pandas, and data visualization. Study supervised learning algorithms, train models with scikit-learn, and explore neural networks with TensorFlow or PyTorch. Finish with a project like image classification or a small recommendation engine.";
        }
        if (msg.includes('data') || msg.includes('datascience') || msg.includes('sql')) {
            return "Begin with data exploration using Python and SQL. Learn how to clean data, write queries, and visualize results. Then practice with real datasets, build dashboards, and apply statistical models. A strong portfolio with analytics projects will help you stand out.";
        }
        if (msg.includes('cloud') || msg.includes('aws') || msg.includes('azure') || msg.includes('gcp')) {
            return "Learn the fundamentals of cloud services, networking, and deployment. Start with one provider, complete a certification path, and build projects using containers, managed databases, and serverless functions. This gives you both theory and real infrastructure experience.";
        }
        if (msg.includes('cyber') || msg.includes('security')) {
            return "Focus on core security topics like network defense, threat modeling, and incident response. Practice with labs, capture-the-flag challenges, and secure coding exercises. Then learn tools such as Wireshark, Metasploit, and cloud security controls.";
        }

        return "A strong study plan begins with a clear goal. Break your topic into fundamentals, practice with real projects, and review regularly. Ask me a more specific question like 'How should I study Python for data science?' or 'What is the best way to learn React?'";
    }

    if (msg.includes('roadmap') || msg.includes('path') || msg.includes('plan')) {
        return "A study roadmap usually includes: 1) core fundamentals, 2) hands-on practice, 3) project work, and 4) interview preparation. Tell me your area of interest and I will give you a step-by-step plan.";
    }

    if (msg.includes('salary') || msg.includes('job') || msg.includes('career') || msg.includes('interview')) {
        return "For career-focused answers, I recommend building a strong portfolio in your chosen domain, preparing for technical interviews, and using the 'Job Readiness' score section to identify gaps. Ask me for specific role advice like 'How do I become a data scientist?'";
    }

    if (msg.includes('explain') || msg.includes('what is') || msg.includes('define') || msg.includes('difference')) {
        if (msg.includes('ai') && msg.includes('ml')) {
            return "AI is a broad field focused on machines solving tasks that normally require human intelligence. Machine Learning is a subset of AI that teaches systems to learn from data.";
        }
        if (msg.includes('react')) {
            return "React is a JavaScript library for building user interfaces using reusable components and state management. It is very popular for modern frontend work.";
        }
        if (msg.includes('python')) {
            return "Python is a versatile programming language used for web development, data science, automation, and machine learning. It's beginner-friendly and has a strong library ecosystem.";
        }
    }

    if (msg.includes('help') || msg.includes('suggest')) {
        return "I can help with study plans, topic summaries, and career guidance. Try asking a focused question like 'How do I learn React in 30 days?' or 'What should I study for an AI job?'";
    }

    return "I am your Pathfinder study assistant. Ask me about learning plans, roadmaps, or career preparation, and I will answer with practical steps and recommendations.";
}

function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerText = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- 2. INSTANT ROADMAP GENERATOR (THE BUTTON FIX) ---
function generateInstantRoadmap() {
    const domain = document.getElementById('domainSelect').value;
    const exp = document.getElementById('expSelect').value;
    const btn = document.querySelector('.generate-btn-large');

    // Visual Feedback
    btn.innerText = "⚡ SYNCING NEURAL PATHS...";
    btn.disabled = true;

    setTimeout(() => {
        alert(`Success! We've architected a ${exp} roadmap for ${domain}. Check your Dashboard to view the full file.`);
        btn.innerText = "GENERATE NEURAL ROADMAP →";
        btn.disabled = false;
    }, 2000);
}

// --- 3. JOB READINESS ANALYZER ---
function calculateReadiness() {
    const input = document.getElementById('readinessInput').value.toLowerCase();
    const resultDiv = document.getElementById('readinessResult');
    const scoreText = document.getElementById('scorePercent');
    const scoreBar = document.getElementById('scoreBar');
    const feedback = document.getElementById('readinessFeedback');

    if (!input) return alert("Please enter your skills!");

    resultDiv.style.display = 'block';
    let score = 30; // Base score

    if (input.includes('react') || input.includes('next')) score += 20;
    if (input.includes('sql') || input.includes('mysql')) score += 15;
    if (input.includes('node') || input.includes('python')) score += 20;
    if (input.includes('aws') || input.includes('docker')) score += 15;
    
    if (score > 100) score = 100;

    scoreBar.style.width = score + "%";
    scoreText.innerText = score + "%";
    feedback.innerText = score > 70 ? "🔥 Market Ready. Proceed to job applications." : "⚠️ Solid foundation. Bridge your cloud and database gaps.";
}

// --- 4. FAQ ACCORDION ---
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        const icon = header.querySelector('.icon');
        icon.innerText = item.classList.contains('active') ? '-' : '+';
    });
});

// --- 5. CLEAR INPUTS ---
function clearInputs() {
    document.getElementById('interestsInput').value = '';
    document.getElementById('skillsInput').value = '';
}

let selectedDomain = "";

// Selection logic
function setDomain(name) {
    selectedDomain = name;
    const badge = document.getElementById('activeDomainBadge');
    badge.innerText = "TARGET: " + name.toUpperCase();
    badge.style.display = "inline-block";
    
    // Scroll user to the input area
    document.getElementById('userSkillInput').focus();
    
    // Highlight selected card
    document.querySelectorAll('.d-card').forEach(card => {
        card.style.borderColor = card.innerText.includes(name) ? "var(--cyan)" : "#30363d";
    });
}

// Generation logic
function masterGenerate() {
    const skills = document.getElementById('userSkillInput').value;
    const btn = document.getElementById('finalGenBtn');
    const resultArea = document.getElementById('finalResultArea');

    if (!selectedDomain) {
        alert("Please select one of the 8 domains first!");
        return;
    }
    if (skills.length < 10) {
        alert("Please tell the AI more about your skills first.");
        return;
    }

    // Animation
    btn.innerText = "⌛ ANALYZING MARKET DATA...";
    btn.disabled = true;

    setTimeout(() => {
        // Data for the 8 domains
        const intelligence = {
            "Web Development": "Focus: Next.js, TypeScript, and Tailwind. Role: Full Stack Engineer.",
            "AI Engineering": "Focus: PyTorch, LLMs, and Vector DBs. Role: AI Solutions Architect.",
            "Cybersecurity": "Focus: Ethcial Hacking, SOC, and Zero Trust. Role: Security Analyst.",
            "Data Science": "Focus: R/Python, Tableau, and BigQuery. Role: Data Strategist.",
            "Cloud Systems": "Focus: AWS/Azure, Docker, and Kubernetes. Role: DevOps Lead.",
            "UI/UX Design": "Focus: Figma, Design Systems, and User Research. Role: Product Designer.",
            "Mobile Dev": "Focus: Flutter, Swift, and Mobile UX. Role: App Architect.",
            "Blockchain": "Focus: Solidity, Web3.js, and Smart Contracts. Role: DApp Developer."
        };

        // Show result
        resultArea.style.display = "block";
        document.getElementById('resHeader').innerText = "Personal Roadmap: " + selectedDomain;
        document.getElementById('resMetadata').innerHTML = `<span>📅 Market Data: 2026</span> <span>🔥 Demand: Very High</span>`;
        document.getElementById('resRoadmap').innerHTML = `
            <strong>AI Career Analysis:</strong> Based on your input: "${skills}", we recommend the following path:<br><br>
            <strong>1. Skill Foundation:</strong> ${intelligence[selectedDomain]}<br>
            <strong>2. Project Phase:</strong> Build 3 production-ready apps using ${selectedDomain} tools.<br>
            <strong>3. Deployment:</strong> Focus on building a portfolio that highlights problem-solving.<br><br>
            <em>Your market readiness score is currently being calculated in the dashboard.</em>
        `;

        btn.innerText = "🤖 Generate Roadmap";
        btn.disabled = false;
        resultArea.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

let currentSelected = "";

// 1. Selection Logic
function selectDomain(domain) {
    currentSelected = domain;
    // Visual feedback for selected card
    document.querySelectorAll('.domain-card').forEach(card => {
        card.style.borderColor = card.innerText.includes(domain) ? "#00d4ff" : "#30363d";
    });
}

// 2. Generation Logic with Unique Roadmaps
function generateSpecificRoadmap() {
    const resultDiv = document.getElementById('roadmapResult');
    const title = document.getElementById('resTitle');
    const body = document.getElementById('resBody');
    const meter = document.getElementById('meterFill');

    if (!currentSelected) {
        alert("Please select a domain icon first!");
        return;
    }

    // UNIQUE DATA FOR EACH DOMAIN
    const domainData = {
        "Web Dev": { steps: "1. HTML/CSS Mastery > 2. JS Logic > 3. React/Next.js > 4. Backend SQL", demand: "95%" },
        "AI & ML": { steps: "1. Python & Math > 2. Data Libraries > 3. Neural Networks > 4. LLM Fine-tuning", demand: "98%" },
        "Security": { steps: "1. Networking > 2. Linux Mastery > 3. Pen-Testing > 4. Incident Response", demand: "92%" },
        "Data Science": { steps: "1. Statistics > 2. SQL/NoSQL > 3. Machine Learning > 4. PowerBI/Tableau", demand: "88%" },
        "Cloud": { steps: "1. Virtualization > 2. AWS/Azure > 3. Docker/K8s > 4. Terraform/IAC", demand: "94%" },
        "Design": { steps: "1. UI Principles > 2. Figma Prototyping > 3. UX Research > 4. Design Systems", demand: "85%" },
        "Mobile": { steps: "1. Swift/Kotlin > 2. Mobile UI > 3. State Management > 4. App Store Deployment", demand: "87%" },
        "Blockchain": { steps: "1. Cryptography > 2. Solidity/Rust > 3. Smart Contracts > 4. DApp Security", demand: "82%" }
    };

    // MAKE IT APPEAR
    resultDiv.style.display = "block"; 
    
    // FILL THE DATA
    const data = domainData[currentSelected];
    title.innerText = currentSelected + " Success Path";
    meter.style.width = data.demand;
    
    // Formatting the steps into a list
    const stepList = data.steps.split(' > ').map(step => `<li>${step}</li>`).join('');
    body.innerHTML = `<ul>${stepList}</ul>`;

    // Scroll to the roadmap
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

const googleLoginBtn = document.getElementById("googleLoginBtn");
if (googleLoginBtn) {
  (async () => {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getAuth, GoogleAuthProvider, signInWithPopup } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_DOMAIN",
      projectId: "pathfinder-75cdc",
      storageBucket: "pathfinder-75cdc.appspot.com",
      messagingSenderId: "623565291331",
      appId: "1:623565291331:web:6b18e017a86884c573b9f6"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    googleLoginBtn.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        alert("Login Success ✅");
        console.log(user);
        window.location.href = "dashboard.html";
      } catch (error) {
        console.log(error.message);
      }
    });
  })();
}

// Expose functions used by inline HTML handlers when this file is loaded as a module.
Object.assign(window, {
    toggleChat,
    handleKeyPress,
    sendMessage,
    calculateReadiness,
    selectDomain,
    generateSpecificRoadmap
});

