// ===================================
// CYCLING BROWSER TAB TITLE
// ===================================
const titles = ['AKMAL SHAIKH', 'o_O', 'AKMAL SHAIKH o_O'];
let titleIndex = 0;

setInterval(() => {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}, 2000); // Change every 2 seconds

// ===================================
// PROJECTS DATA
// Add new projects to the END of this array
// Featured Projects will automatically show the 3 most recent (excluding Meme Tracker)
// ===================================
const projects = [
    {
        title: "Meme Tracker",
        tags: ["Computer Vision", "Python", "OpenCV"],
        description: "Real-time pose detection system that maps different body poses to meme images. Uses camera feed and computer vision to detect poses and display corresponding meme images alongside the live video feed.",
        codeLink: "https://github.com/Akmals/MemeTracker",
        excludeFromFeatured: true  // This won't show in Featured Projects
    },
    {
        title: "Link Converter",
        tags: ["Docker", "Railway", "API", "Python"],
        description: "Download media from YouTube, Instagram, and Twitter as MP4 or MP3 files. Built with Docker for easy deployment and integrated with various media APIs. Currently in active development.",
        codeLink: "https://github.com/Akmals/LinkConverter",
        liveLink: "https://linkconverter-production.up.railway.app/"
    },
    {
        title: "Graphical Fractals",
        tags: ["Python", "Parallel Processing", "Graphics", "CUDA (Coming Soon)"],
        description: "High-performance fractal rendering engine using parallel processing techniques. Generates complex mathematical visualizations including Mandelbrot and Julia sets. Currently in Python, being optimized for CUDA to leverage GPU acceleration on RTX 4060 Ti.",
        codeLink: "https://github.com/Akmals/GraphicalFractals",
        liveLink: "https://web-zeta-jet-29.vercel.app/"
    },
    {
        title: "Machine Learning Classification",
        tags: ["Python", "ML", "Data Science"],
        description: "Built and trained classification models achieving 91% accuracy through feature engineering and hyperparameter optimization.",
        codeLink: "https://github.com/Akmals/AI-HAR/blob/main/HAR_Activity_Classification.ipynb"
    }
    // Add new projects here - they'll automatically appear in Featured Projects
];

// ===================================
// RENDER PROJECTS
// ===================================
function renderProjects() {
    // For Featured Projects on home page (last 3 projects, excluding those marked excludeFromFeatured)
    const featuredContainer = document.getElementById('featured-projects');
    if (featuredContainer) {
        const featuredProjects = projects
            .filter(p => !p.excludeFromFeatured)
            .slice(-3)
            .reverse(); // Get last 3, newest first
        featuredContainer.innerHTML = featuredProjects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <p class="project-description">
                    ${project.description}
                </p>
                <div class="project-footer">
                    <a href="${project.codeLink}" target="_blank" class="project-link">View Code →</a>
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="project-link live-link">View Project →</a>` : ''}
                </div>
            </div>
        `).join('');
    }
    
    // For All Projects page
    const allProjectsContainer = document.getElementById('all-projects');
    if (allProjectsContainer) {
        allProjectsContainer.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <p class="project-description">
                    ${project.description}
                </p>
                <div class="project-footer">
                    <a href="${project.codeLink}" target="_blank" class="project-link">View Code →</a>
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="project-link live-link">View Project →</a>` : ''}
                </div>
            </div>
        `).join('');
    }
}

// Run on page load
window.addEventListener('DOMContentLoaded', renderProjects);

// ===================================
// RANDOM MEME + QUOTE ON PAGE LOAD
// ===================================
const memes = [
    'memes/meme1.jpg',
    'memes/meme2.jpg',
    'memes/meme3.jpg',
    'memes/meme4.jpg',
    'memes/meme5.jpg',
    'memes/meme6.jpg',
    'memes/meme7.jpg',
    'memes/meme8.jpg',
    'memes/meme9.jpg',
    'memes/meme10.jpg'
];

const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Verily, with hardship comes ease. - Quran 94:6",
    "Do not be sad, Allah is with us. - Quran 9:40",
    "The wound is the place where the Light enters you. - Rumi",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
    "What you seek is seeking you. - Rumi",
    "The cave you fear to enter holds the treasure you seek. - Joseph Campbell",
    "Allah does not burden a soul beyond that it can bear. - Quran 2:286",
    "Be like a tree and let the dead leaves drop. - Rumi"
];

function randomMemeQuote() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const memeImg = document.getElementById('randomMeme');
    const quoteText = document.getElementById('randomQuote');
    
    if (memeImg) memeImg.src = randomMeme;
    if (quoteText) quoteText.textContent = randomQuote;
}

// Run on page load
window.addEventListener('DOMContentLoaded', randomMemeQuote);

// ===================================
// CONTACT FORM - DISCORD WEBHOOK
// ===================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');
const submitBtn = contactForm.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1473459894932733964/5M0Z8L8qaiLmw8IK4Fp0L85xCU88gDNYS889Pu-649eQaABJFJ3_QaPd660jrfsp5Vmo';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;
    
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    formStatus.style.display = 'none';
    
    const discordMessage = {
        embeds: [{
            title: "📨 New Website Contact",
            color: 0x00ffaa,
            fields: [
                {
                    name: "👤 Name",
                    value: name,
                    inline: false
                },
                {
                    name: "📞 Contact Info",
                    value: contact || "Not provided",
                    inline: false
                },
                {
                    name: "💬 Message",
                    value: message,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "akmal.fyi contact form"
            }
        }]
    };
    
    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discordMessage)
        });
        
        if (response.ok) {
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        formStatus.textContent = '✗ Failed to send message. Please try again.';
        formStatus.className = 'form-status error';
        console.error('Error:', error);
    } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
});
