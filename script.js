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
