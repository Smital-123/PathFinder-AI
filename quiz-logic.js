/**
 * PATHFINDER NEURAL ENGINE - FINAL FULL VERSION
 * Domains: Web, AI, Cyber, Mobile, UI/UX, Cloud, Data, Marketing
 */

const questionBank = [
    // --- 1. WEB DEVELOPMENT (20 Questions) ---
    { q: "Do you prefer visual layouts (CSS) or data structures (JSON)?", cat: "web", options: ["Visual Layouts", "Data Structures", "Both equally"] },
    { q: "Does the idea of 'State Management' (Redux) excite you?", cat: "web", options: ["Excites me", "Exhausts me", "Never heard of it"] },
    { q: "Would you rather debug a complex SQL join or CSS Flexbox?", cat: "web", options: ["CSS Alignment", "SQL Join", "Neither"] },
    { q: "How do you feel about 'JavaScript is everywhere'?", cat: "web", options: ["It's a superpower", "It's a nightmare", "It's just a tool"] },
    { q: "When a site loads slowly, do you check the 'Network' tab?", cat: "web", options: ["Always", "Sometimes", "Never"] },
    { q: "Do you prefer building a custom API or a Navigation Bar?", cat: "web", options: ["Navigation Bar", "Custom API", "Both"] },
    { q: "Is 'Semantic HTML' crucial for you?", cat: "web", options: ["Crucial", "Just a suggestion", "Don't care"] },
    { q: "Do you enjoy making sites responsive for mobile?", cat: "web", options: ["Yes, love it", "No, too much work", "Desktop only"] },
    { q: "Framework (React/Next) or Vanilla JS?", cat: "web", options: ["Frameworks", "Vanilla JS", "No preference"] },
    { q: "Does 'Hot Module Replacement' make you smile?", cat: "web", options: ["Yes", "No", "What is that?"] },
    { q: "IDE Mode: Light or Dark?", cat: "web", options: ["Dark Mode", "Light Mode", "High Contrast"] },
    { q: "Is 'Fullstack' a goal or a burden?", cat: "web", options: ["A Goal", "A Burden", "Frontend only"] },
    { q: "NPM or Yarn?", cat: "web", options: ["NPM", "Yarn", "Don't care"] },
    { q: "CSS Preprocessors (Sass/Tailwind) or Plain CSS?", cat: "web", options: ["Essential", "Unnecessary", "Plain CSS"] },
    { q: "Build a Blog or an E-commerce Dashboard?", cat: "web", options: ["E-commerce", "Blog", "Social Media"] },
    { q: "TypeScript or JavaScript?", cat: "web", options: ["TypeScript", "JavaScript", "Both"] },
    { q: "Does the 'V8 Engine' fascinate you?", cat: "web", options: ["Fascinating", "Just tech", "No"] },
    { q: "SPA or Multi-Page Apps?", cat: "web", options: ["SPA", "MPA", "Static Sites"] },
    { q: "Is Accessibility (A11y) important?", cat: "web", options: ["Yes, from start", "No, at the end", "If asked"] },
    { q: "Client-Side or Server-Side logic?", cat: "web", options: ["Client-Side", "Server-Side", "Both"] },

    // --- 2. DATA SCIENCE (20 Questions) ---
    { q: "Does a 1GB CSV file make you nervous or curious?", cat: "data", options: ["Curious", "Nervous", "Bored"] },
    { q: "Do you prefer clean data or raw noisy data?", cat: "data", options: ["Clean Data", "Raw Data", "Doesn't matter"] },
    { q: "Is 'Statistics' a tool or a chore?", cat: "data", options: ["Essential Tool", "Chore", "Mystery"] },
    { q: "Dashboard or Predictive Model?", cat: "data", options: ["Predictive Model", "Dashboard", "Report"] },
    { q: "Python or R?", cat: "data", options: ["Python", "R", "Excel"] },
    { q: "Correlation vs Causation - do you know the difference?", cat: "data", options: ["Yes", "Maybe", "No"] },
    { q: "Do you enjoy Data Wrangling?", cat: "data", options: ["It's therapeutic", "I hate it", "Necessary"] },
    { q: "Scatter Plots or Bar Charts?", cat: "data", options: ["Scatter Plots", "Bar Charts", "Pie Charts"] },
    { q: "Is 'Big Data' a reality or a buzzword?", cat: "data", options: ["Reality", "Buzzword", "Future Goal"] },
    { q: "SQL or NoSQL?", cat: "data", options: ["SQL", "NoSQL", "Neither"] },
    { q: "Is Linear Regression second nature?", cat: "data", options: ["Yes", "Learning", "No"] },
    { q: "Accuracy or Interpretability?", cat: "data", options: ["Interpretability", "Accuracy", "Speed"] },
    { q: "Jupyter Notebooks or Script Editors?", cat: "data", options: ["Jupyter", "Script Editor", "PyCharm"] },
    { q: "Probability Theory: Easy or Hard?", cat: "data", options: ["Very Intuitive", "Vaguely", "Not at all"] },
    { q: "Tableau or PowerBI?", cat: "data", options: ["Fun Tool", "Just software", "Never used"] },
    { q: "Supervised or Unsupervised Learning?", cat: "data", options: ["Supervised", "Unsupervised", "Reinforcement"] },
    { q: "Does Data Ethics worry you?", cat: "data", options: ["Always", "Sometimes", "Not really"] },
    { q: "FinTech or BioTech?", cat: "data", options: ["FinTech", "BioTech", "Retail"] },
    { q: "Is Feature Engineering important?", cat: "data", options: ["Yes", "No", "Data Cleaning is"] },
    { q: "Explaining stats to non-tech people?", cat: "data", options: ["Love it", "Hard", "If I have to"] },



    // --- UI/UX DESIGN (20 Questions) ---
{ q: "Do you focus more on aesthetics or usability?", cat: "uiux", options: ["Aesthetics", "Usability", "Both equally"] },
{ q: "Do you enjoy creating wireframes before design?",cat: "uiux", options: ["Always", "Sometimes", "Never"] },
{ q: "Figma or Adobe XD?", cat: "uiux", options: ["Figma", "Adobe XD", "Other"] },
{ q: "User research is important?", cat: "uiux", options: ["Very important", "Somewhat", "Not needed"] },
{ q: "Do you test your designs with real users?",cat: "uiux", options: ["Always", "Sometimes", "Never"] },
{ q: "Typography matters in design?", cat: "uiux", options: ["Very important", "Somewhat", "Not really"] },
{ q: "Color theory knowledge?",cat: "uiux", options: ["Strong", "Basic", "None"] },
{ q: "Minimal design or complex design?", cat: "uiux", options: ["Minimal", "Complex", "Depends"] },
{ q: "Do you follow design systems?", cat: "uiux", options: ["Always", "Sometimes", "Never"] },
{ q: "User journey mapping?",cat: "uiux", options: ["Important", "Okay", "Not needed"] },
{ q: "Mobile-first design?", cat: "uiux", options: ["Yes", "No", "Depends"] },
{ q: "Do you enjoy prototyping?", cat: "uiux", options: ["Yes", "Sometimes", "No"] },
{ q: "Animations in UI?", cat: "uiux", options: ["Enhance UX", "Unnecessary", "Depends"] },
{ q: "Accessibility (A11y) important?", cat: "uiux", options: ["Yes", "Somewhat", "No"] },
{ q: "Do you analyze competitor designs?", cat: "uiux", options: ["Always", "Sometimes", "Never"] },
{ q: "Grid systems help design?", cat: "uiux", options: ["Yes", "Sometimes", "No"] },
{ q: "UX writing (microcopy) important?", cat: "uiux", options: ["Very important", "Somewhat", "Not needed"] },
{ q: "User feedback is useful?", cat: "uiux", options: ["Very useful", "Sometimes", "Ignore"] },
{ q: "Do you prefer research or visual design?", cat: "uiux", options: ["Research", "Visual Design", "Both"] },
{ q: "Do you iterate designs frequently?", cat: "uiux", options: ["Always", "Sometimes", "Rarely"] },





// --- AI & MACHINE LEARNING (20 Questions) ---
{ q: "Do you enjoy solving problems using logic and algorithms?", cat: "aiml", options: ["Yes, always", "Sometimes", "Not really"] },
{ q: "How comfortable are you with Mathematics (Linear Algebra, Probability)?", cat: "aiml", options: ["Very comfortable", "Average", "Not comfortable"] },
{ q: "Do you like working with data (datasets, CSV files)?", cat: "aiml", options: ["Love it", "Okay", "Hate it"] },
{ q: "Python programming interest level?", cat: "aiml", options: ["High", "Medium", "Low"] },
{ q: "Do you understand basic statistics?", cat: "aiml", options: ["Yes", "Little bit", "No"] },
{ q: "What excites you more?", cat: "aiml", options: ["Building AI models", "Analyzing data", "Designing UI"] },
{ q: "Do you like experimenting with different outputs?", cat: "aiml", options: ["Yes", "Sometimes", "No"] },
{ q: "How do you feel about debugging ML models?", cat: "aiml", options: ["Interesting", "Confusing", "Frustrating"] },
{ q: "Do you enjoy learning new technologies frequently?", cat: "aiml", options: ["Yes", "Sometimes", "No"] },
{ q: "Which one sounds more interesting?", cat: "aiml", options: ["Neural Networks", "Web Design", "Database"] },
{ q: "Do you like automation (chatbots, recommendation systems)?", cat: "aiml", options: ["Love it", "Okay", "Not interested"] },
{ q: "How do you handle complex problems?", cat: "aiml", options: ["Break into parts", "Try randomly", "Avoid"] },
{ q: "Do you enjoy working with APIs (OpenAI, etc)?", cat: "aiml", options: ["Yes", "Little", "No"] },
{ q: "Do you prefer theory or practical work?", cat: "aiml", options: ["Practical", "Theory", "Both"] },
{ q: "Are you interested in Deep Learning?", cat: "aiml", options: ["Yes", "Maybe", "No"] },
{ q: "How patient are you while training models?", cat: "aiml", options: ["Very patient", "Normal", "Not patient"] },
{ q: "Do you like analyzing patterns in data?", cat: "aiml", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you know about Machine Learning algorithms?", cat: "aiml", options: ["Yes", "Basic idea", "No"] },
{ q: "Which tool would you prefer?", cat: "aiml", options: ["Jupyter Notebook", "VS Code", "Don't know"] },
{ q: "Your goal with AI?", cat: "aiml", options: ["Build intelligent systems", "Get job", "Just exploring"] },


// --- CYBERSECURITY (20 Questions) ---
{ q: "Do you enjoy finding vulnerabilities in systems?", cat: "cyber", options: ["Yes, exciting", "Sometimes", "Not interested"] },
{ q: "How familiar are you with networking concepts (IP, DNS, HTTP)?", cat: "cyber", options: ["Very familiar", "Basic knowledge", "No idea"] },
{ q: "Do you know what 'Ethical Hacking' is?", cat: "cyber", options: ["Yes", "Heard of it", "No"] },
{ q: "What would you do if you find a bug in a system?", cat: "cyber", options: ["Report it responsibly", "Ignore it", "Exploit it"] },
{ q: "Do you enjoy solving security challenges (CTFs)?", cat: "cyber", options: ["Love it", "Sometimes", "No"] },
{ q: "How comfortable are you with Linux?", cat: "cyber", options: ["Very comfortable", "Basic", "Not at all"] },
{ q: "Do you know what a firewall does?", cat: "cyber", options: ["Yes clearly", "Somewhat", "No"] },
{ q: "Which sounds more interesting?", cat: "cyber", options: ["Penetration Testing", "Web Development", "UI Design"] },
{ q: "Do you understand what 'encryption' means?", cat: "cyber", options: ["Yes", "Little bit", "No"] },
{ q: "How do you react to a hacking attempt?", cat: "cyber", options: ["Investigate", "Ignore", "Panic"] },
{ q: "Do you know common attacks like SQL Injection or XSS?", cat: "cyber", options: ["Yes", "Heard of them", "No"] },
{ q: "Do you like analyzing logs and system activity?", cat: "cyber", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you prefer offensive (hacking) or defensive (security) work?", cat: "cyber", options: ["Offensive", "Defensive", "Both"] },
{ q: "How important is password security to you?", cat: "cyber", options: ["Very important", "Moderate", "Not important"] },
{ q: "Do you know what phishing is?", cat: "cyber", options: ["Yes", "Maybe", "No"] },
{ q: "Do you enjoy investigating cyber crimes?", cat: "cyber", options: ["Yes", "Sometimes", "No"] },
{ q: "Are you interested in learning hacking tools (Kali Linux, Metasploit)?", cat: "cyber", options: ["Yes", "Maybe", "No"] },
{ q: "Do you understand how websites can be hacked?", cat: "cyber", options: ["Yes", "Basic idea", "No"] },
{ q: "Do you follow cybersecurity news or updates?", cat: "cyber", options: ["Regularly", "Sometimes", "Never"] },
{ q: "What is your goal in cybersecurity?", cat: "cyber", options: ["Become ethical hacker", "Secure systems", "Just exploring"] },

// --- MOBILE DEVELOPMENT (20 Questions) ---
{ q: "Do you enjoy building apps for smartphones?", cat: "mobile", options: ["Yes, love it", "Sometimes", "Not really"] },
{ q: "Android or iOS development interest?", cat: "mobile", options: ["Android", "iOS", "Both"] },
{ q: "Do you like designing mobile UI screens?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Have you used any mobile frameworks (Flutter/React Native)?", cat: "mobile", options: ["Yes", "Heard of them", "No"] },
{ q: "Do you understand how mobile apps connect to APIs?", cat: "mobile", options: ["Yes", "Basic idea", "No"] },
{ q: "Do you prefer coding logic or UI design?", cat: "mobile", options: ["Logic", "UI Design", "Both"] },
{ q: "Do you like working with animations in apps?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you enjoy debugging app crashes?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Which excites you more?", cat: "mobile", options: ["Building apps", "Websites", "Games"] },
{ q: "Do you know Java/Kotlin or Swift?", cat: "mobile", options: ["Yes", "Basic", "No"] },
{ q: "Do you enjoy optimizing app performance?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Have you ever published an app?", cat: "mobile", options: ["Yes", "Planning to", "No"] },
{ q: "Do you like integrating features like camera/GPS?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you understand mobile app lifecycle?", cat: "mobile", options: ["Yes", "Basic idea", "No"] },
{ q: "Native development or cross-platform?", cat: "mobile", options: ["Native", "Cross-platform", "Both"] },
{ q: "Do you like testing apps on real devices?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "How do you feel about app store guidelines?", cat: "mobile", options: ["Important", "Annoying", "Don't care"] },
{ q: "Do you enjoy learning new mobile tools?", cat: "mobile", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you like building real-world apps (banking, chat apps)?", cat: "mobile", options: ["Yes", "Maybe", "No"] },
{ q: "What is your goal in mobile development?", cat: "mobile", options: ["Build apps", "Get job", "Just exploring"] },


// --- CLOUD SYSTEMS (20 Questions) ---
{ q: "Do you understand what cloud computing is?", cat: "cloud", options: ["Yes clearly", "Basic idea", "No"] },
{ q: "Which cloud platform interests you more?", cat: "cloud", options: ["AWS", "Azure", "Google Cloud"] },
{ q: "Do you enjoy working with servers and deployment?", cat: "cloud", options: ["Yes", "Sometimes", "No"] },
{ q: "Have you used any cloud service before?", cat: "cloud", options: ["Yes", "Heard of it", "No"] },
{ q: "Do you know what virtualization is?", cat: "cloud", options: ["Yes", "Little bit", "No"] },
{ q: "Linux knowledge level?", cat: "cloud", options: ["Strong", "Basic", "None"] },
{ q: "Do you like automating tasks (CI/CD)?", cat: "cloud", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you know Docker or containers?", cat: "cloud", options: ["Yes", "Basic idea", "No"] },
{ q: "Do you understand cloud storage systems?", cat: "cloud", options: ["Yes", "Somewhat", "No"] },
{ q: "Which sounds more interesting?", cat: "cloud", options: ["Deploying apps", "Designing UI", "Writing algorithms"] },
{ q: "Do you know about serverless computing?", cat: "cloud", options: ["Yes", "Heard of it", "No"] },
{ q: "Do you enjoy troubleshooting system issues?", cat: "cloud", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you understand networking concepts?", cat: "cloud", options: ["Strong", "Basic", "No"] },
{ q: "Do you like working with APIs and backend services?", cat: "cloud", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you know about load balancing?", cat: "cloud", options: ["Yes", "Little bit", "No"] },
{ q: "Do you enjoy learning DevOps tools?", cat: "cloud", options: ["Yes", "Maybe", "No"] },
{ q: "Do you know Kubernetes?", cat: "cloud", options: ["Yes", "Heard of it", "No"] },
{ q: "How comfortable are you with command line?", cat: "cloud", options: ["Very comfortable", "Basic", "Not at all"] },
{ q: "Do you like managing large-scale systems?", cat: "cloud", options: ["Yes", "Sometimes", "No"] },
{ q: "What is your goal in cloud computing?", cat: "cloud", options: ["DevOps Engineer", "Cloud Architect", "Just exploring"] },


// --- DIGITAL STRATEGY (20 Questions) ---
{ q: "Do you enjoy planning business growth strategies?", cat: "strategy", options: ["Yes", "Sometimes", "Not really"] },
{ q: "Are you interested in marketing and branding?", cat: "strategy", options: ["Very interested", "Somewhat", "Not interested"] },
{ q: "Do you understand what SEO is?", cat: "strategy", options: ["Yes", "Heard of it", "No"] },
{ q: "Do you like analyzing website traffic (analytics)?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you follow trends on social media?", cat: "strategy", options: ["Regularly", "Sometimes", "Never"] },
{ q: "Which excites you more?", cat: "strategy", options: ["Marketing campaigns", "Coding apps", "Designing UI"] },
{ q: "Do you know about digital ads (Google Ads, Facebook Ads)?", cat: "strategy", options: ["Yes", "Basic idea", "No"] },
{ q: "Do you enjoy content creation (blogs, reels, posts)?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you understand customer behavior?", cat: "strategy", options: ["Yes", "Somewhat", "No"] },
{ q: "Do you like working with data to improve business?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you know what conversion rate means?", cat: "strategy", options: ["Yes", "Heard of it", "No"] },
{ q: "Do you enjoy planning product launches?", cat: "strategy", options: ["Yes", "Maybe", "No"] },
{ q: "Do you like studying competitors?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you understand branding concepts?", cat: "strategy", options: ["Yes", "Basic", "No"] },
{ q: "Do you enjoy creating marketing funnels?", cat: "strategy", options: ["Yes", "Somewhat", "No"] },
{ q: "Do you know tools like Google Analytics?", cat: "strategy", options: ["Yes", "Heard of it", "No"] },
{ q: "Do you like experimenting with growth strategies?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "Do you prefer creative work or analytical work?", cat: "strategy", options: ["Creative", "Analytical", "Both"] },
{ q: "Do you enjoy solving business problems?", cat: "strategy", options: ["Yes", "Sometimes", "No"] },
{ q: "What is your goal in digital strategy?", cat: "strategy", options: ["Growth marketer", "Product strategist", "Just exploring"] }

];

// --- AUTO-GENERATING QUESTIONS FOR OTHER DOMAINS TO PREVENT ERRORS ---
const otherCats = ["ai", "cyber", "mobile", "uiux", "cloud", "marketing"];
otherCats.forEach(cat => {
    for(let i=0; i<20; i++) {
        questionBank.push({
            q: `Question ${i+1}: Do you enjoy solving complex problems in ${cat.toUpperCase()}?`,
            cat: cat,
            options: ["Yes, absolutely", "Sometimes", "Not really"]
        });
    }
});

const QUIZ_PROGRESS_STORAGE_KEY = "pathfinderQuizProgress";
let selectedCategory = "";
let currentQuestionIndex = 0;
let userScore = 0;
let domainQuestions = [];

function saveQuizProgress(data) {
    if (!window || !window.localStorage) return;
    try {
        localStorage.setItem(QUIZ_PROGRESS_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save quiz progress:", error);
    }
}

function getStageProgressPercent(stage) {
    if (stage === 'checkbox') return 100;
    if (stage === 'document') return 90;
    return 30;
}

function getStageStatusText(stage) {
    if (stage === 'checkbox') return 'Progress: 100% — Roadmap completed.';
    if (stage === 'document') return 'Progress: 90% — Document opened. Tick a checkbox to finish.';
    return 'Progress: 30% — Quiz complete. Open a study link to reach 90%.';
}

function updateSavedProgressStage(savedQuizProgress, stage) {
    if (!savedQuizProgress) return;

    const priorities = { quiz: 1, document: 2, checkbox: 3 };
    const currentStage = savedQuizProgress.progressStage || 'quiz';
    if (priorities[stage] <= priorities[currentStage]) return;

    savedQuizProgress.progressStage = stage;
    savedQuizProgress.progressPercent = getStageProgressPercent(stage);
    saveQuizProgress(savedQuizProgress);
}

function selectDomain(category) {
    selectedCategory = category;
    domainQuestions = questionBank.filter(q => q.cat === category);
    
    if(domainQuestions.length === 0) {
        alert("Domain Not Found!");
        return;
    }

    document.getElementById('domainSelection').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    currentQuestionIndex = 0;
    userScore = 0;
    renderQuestion();
}

function renderQuestion() {
    const q = domainQuestions[currentQuestionIndex];
    document.getElementById('questionText').innerText = q.q;
    document.getElementById('questionCounter').innerText = `ANALYSIS: ${currentQuestionIndex + 1} / 20`;
    
    const progress = (currentQuestionIndex / 20) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(i);
        container.appendChild(btn);
    });
}

function handleAnswer(optionIndex) {
    if (optionIndex === 0) userScore += 1;
    else if (optionIndex === 1) userScore += 0.5;

    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
        renderQuestion();
    } else {
        finalizeAnalysis();
    }
}

function finalizeAnalysis() {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizLoading').style.display = 'block';

    const roadmapData = {
        web: {
            low: [{ icon: "🌐", title: "HTML/CSS Basics", desc: "Start with W3Schools.", link: "https://www.w3schools.com/html/" }],
            mid: [{ icon: "⚛️", title: "React JS", desc: "Master modern frameworks.", link: "https://www.w3schools.com/react/" }],
            high: [{ icon: "🏗️", title: "Node.js Fullstack", desc: "Build enterprise apps.", link: "https://www.w3schools.com/nodejs/" }]
        },
        data: {
            low: [{ icon: "📊", title: "Excel & SQL", desc: "Basic querying.", link: "https://www.w3schools.com/sql/" }],
            mid: [{ icon: "🐍", title: "Python Data", desc: "Pandas/NumPy.", link: "https://www.w3schools.com/python/python_ml_getting_started.asp" }],
            high: [{ icon: "🧠", title: "Machine Learning", desc: "AI models.", link: "https://www.w3schools.com/ai/" }]
        },
        ai: {
            low: [{ icon: "🤖", title: "AI Basics", desc: "Intro to AI.", link: "https://www.w3schools.com/ai/" }],
            mid: [{ icon: "🐍", title: "ML Steps", desc: "Python ML.", link: "https://www.w3schools.com/python/python_ml_getting_started.asp" }],
            high: [{ icon: "🧠", title: "Neural Nets", desc: "Advanced AI.", link: "https://www.w3schools.com/ai/ai_neural_networks.asp" }]
        },
        cyber: {
            low: [{ icon: "🛡️", title: "Cyber Basics", desc: "Protocols.", link: "https://www.w3schools.com/cybersecurity/" }],
            mid: [{ icon: "🔐", title: "Hacking", desc: "Ethical steps.", link: "https://www.w3schools.com/cybersecurity/cybersecurity_vulnerabilities.php" }],
            high: [{ icon: "🌐", title: "Networks", desc: "Security.", link: "https://www.w3schools.com/cybersecurity/cybersecurity_networks.php" }]
        },
        uiux: {
            low: [{ icon: "🎨", title: "Design", desc: "Typography.", link: "https://www.w3schools.com/graphics/canvas_intro.asp" }],
            mid: [{ icon: "📱", title: "Responsive", desc: "W3.CSS.", link: "https://www.w3schools.com/w3css/" }],
            high: [{ icon: "✨", title: "CSS3", desc: "Animations.", link: "https://www.w3schools.com/css/css3_animations.asp" }]
        },
        mobile: {
            low: [{ icon: "📱", title: "JS Logic", desc: "App code.", link: "https://www.w3schools.com/js/" }],
            mid: [{ icon: "⚛️", title: "React Native", desc: "Mobile Dev.", link: "https://www.w3schools.com/react/react_native.asp" }],
            high: [{ icon: "🚀", title: "Deployment", desc: "Publish apps.", link: "https://www.w3schools.com/react/react_native.asp" }]
        },
        cloud: {
            low: [{ icon: "☁️", title: "Cloud Basics", desc: "AWS Intro.", link: "https://www.w3schools.com/aws/" }],
            mid: [{ icon: "⚙️", title: "Servers", desc: "Node JS.", link: "https://www.w3schools.com/nodejs/" }],
            high: [{ icon: "🛡️", title: "Security", desc: "Cloud Sec.", link: "https://www.w3schools.com/cybersecurity/cybersecurity_cloud.php" }]
        },
        marketing: {
            low: [{ icon: "📣", title: "SEO", desc: "Ranking.", link: "https://www.w3schools.com/tags/tag_meta.asp" }],
            mid: [{ icon: "📈", title: "Ads API", desc: "Analytics.", link: "https://www.w3schools.com/aws/index.php" }],
            high: [{ icon: "🚀", title: "Growth", desc: "Scale.", link: "https://www.w3schools.com/howto/howto_google_maps.asp" }]
        }
    };

    setTimeout(() => {
        document.getElementById('quizLoading').style.display = 'none';
        document.getElementById('quizResult').style.display = 'block';
        
        let levelKey = userScore >= 15 ? "high" : userScore >= 8 ? "mid" : "low";
        let levelName = userScore >= 15 ? "Senior Architect" : userScore >= 8 ? "Professional" : "Rising Talent";

        document.getElementById('matchTitle').innerText = `${levelName} in ${selectedCategory.toUpperCase()}`;
        document.getElementById('matchDesc').innerText = `Your Score: ${userScore}/20. Tick roadmap steps to save progress in your dashboard.`;

        const roadContainer = document.getElementById('roadmapContainer');
        roadContainer.innerHTML = ''; 

        const selectedPath = roadmapData[selectedCategory] ? roadmapData[selectedCategory][levelKey] : roadmapData['web']['low'];
        const progressStatus = document.createElement('p');
        progressStatus.id = 'roadmapProgressStatus';
        progressStatus.style = 'margin-bottom: 16px; color: #8b949e; font-size: 0.95rem;';
        progressStatus.innerText = getStageStatusText('quiz');
        roadContainer.parentNode.insertBefore(progressStatus, roadContainer);

        const progressWrapper = document.createElement('div');
        progressWrapper.style = 'margin-top: 20px;';
        progressWrapper.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); border-radius: 999px; height: 12px; overflow: hidden; margin-bottom: 10px;">
                <div id="skillRoadmapFill" style="width: ${getStageProgressPercent('quiz')}%; height: 100%; background: var(--accent); transition: width 0.4s ease;"></div>
            </div>
            <div id="skillRoadmapLabel" style="color: #8b949e; font-size: 0.95rem;">${getStageProgressPercent('quiz')}% Completed</div>
        `;
        roadContainer.parentNode.insertBefore(progressWrapper, roadContainer.nextSibling);

        const savedQuizProgress = {
            category: selectedCategory,
            quizScore: userScore,
            maxScore: 20,
            levelKey,
            levelName,
            progressStage: 'quiz',
            progressPercent: getStageProgressPercent('quiz'),
            checkedSteps: 0,
            totalSteps: selectedPath.length,
            generatedAt: Date.now()
        };
        saveQuizProgress(savedQuizProgress);

        const updateRoadmapQuizStage = (stage) => {
            updateSavedProgressStage(savedQuizProgress, stage);
            progressStatus.innerText = getStageStatusText(savedQuizProgress.progressStage);
            const fill = document.getElementById('skillRoadmapFill');
            const label = document.getElementById('skillRoadmapLabel');
            if (fill) fill.style.width = `${getStageProgressPercent(savedQuizProgress.progressStage)}%`;
            if (label) label.innerText = `${getStageProgressPercent(savedQuizProgress.progressStage)}% Completed`;
        };

        selectedPath.forEach((step) => {
            const item = document.createElement('div');
            item.className = 'roadmap-item';
            item.style = "display: flex; align-items: center; gap: 20px; background: #1c2128; padding: 20px; border-radius: 12px; margin-bottom: 12px; border: 1px solid #30363d;";
            
            item.innerHTML = `
                <div style="font-size: 2rem;">${step.icon}</div>
                <div style="flex-grow: 1;">
                    <h4 style="margin: 0; color: white;">${step.title}</h4>
                    <p style="margin: 4px 0 10px; font-size: 0.85rem; color: #8b949e;">${step.desc}</p>
                    <a href="${step.link}" target="_blank" style="display: inline-block; padding: 8px 16px; background: #00d2ff; color: black; border-radius: 6px; font-size: 0.8rem; text-decoration: none; font-weight: bold;">STUDY NOW →</a>
                </div>
                <div>
                    <input type="checkbox" style="width: 22px; height: 22px; accent-color: #00d2ff;">
                </div>
            `;
            roadContainer.appendChild(item);
            const link = item.querySelector('a');
            if (link) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    if (savedQuizProgress.progressStage !== 'checkbox') {
                        updateRoadmapQuizStage('document');
                    }
                    window.open(step.link, '_blank');
                });
            }

            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        savedQuizProgress.checkedSteps += 1;
                        updateRoadmapQuizStage('checkbox');
                    } else {
                        savedQuizProgress.checkedSteps = Math.max(0, savedQuizProgress.checkedSteps - 1);
                        if (savedQuizProgress.progressStage === 'checkbox') {
                            updateRoadmapQuizStage('document');
                        }
                    }
                    saveQuizProgress(savedQuizProgress);
                });
            }
        });
    }, 2500);
}