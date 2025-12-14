// app.js (FINAL CODE WITH GAME CARD LINK FIX)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Content Injection & Setup
    
    // Inject Tagline (Home)
    document.querySelector('.tagline').textContent = SITE_CONFIG.tagline;
    
    // Inject Social Cards
    const socialGrid = document.querySelector('.social-grid');
    SITE_CONFIG.socials.forEach(social => {
        const card = document.createElement('a');
        card.href = social.link;
        card.target = "_blank";
        card.classList.add('social-card');
        card.innerHTML = `
            <i class="${social.icon}"></i>
            <h3>${social.name}</h3>
        `;
        socialGrid.appendChild(card);
    });

    // Inject Game Cards (FIXED LOGIC)
    const gameCardsContainer = document.querySelector('.game-cards-container');
    SITE_CONFIG.games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        
        // --- FIX: Create an explicit anchor tag for the external link ---
        const linkElement = document.createElement('a');
        linkElement.href = game.link; // Use the actual link from config.js
        linkElement.target = '_blank'; // Opens in a new tab
        
        // Move all visual content inside the anchor tag
        linkElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-img">
            <div class="game-card-overlay">
                <span class="game-card-status">${game.status}</span>
                <h3 class="game-card-title">${game.title}</h3>
            </div>
        `;

        card.appendChild(linkElement);
        // --- END FIX ---
        
        gameCardsContainer.appendChild(card);
    });

    // Inject Contact Info
    document.querySelector('[data-info="email"]').textContent = SITE_CONFIG.email;
    document.querySelector('[data-info="discord"]').textContent = SITE_CONFIG.discordUsername;
    document.querySelector('[data-info="instagram"]').textContent = SITE_CONFIG.instagramUsername;

    // Set the external Minecraft link
    const minecraftLink = document.getElementById('minecraft-link');
    if (minecraftLink) {
        minecraftLink.href = SITE_CONFIG.externalLinks.minecraftPage;
    }


    // 2. SPA Navigation & Animation Handler
    const navLinks = document.querySelectorAll('.nav-links a[data-section]'); // Only target internal links
    const pageSections = document.querySelectorAll('.page-section');
    let currentSection = 'home'; // Start on home

    function changeSection(newSectionId) {
        if (newSectionId === currentSection) return;

        const currentSectionEl = document.getElementById(currentSection);
        const newSectionEl = document.getElementById(newSectionId);
        
        // 1. Deactivate Current Section (Exit Animation)
        if (currentSectionEl) {
            currentSectionEl.classList.remove('active');
            setTimeout(() => {
                currentSectionEl.classList.add('hidden');
            }, 500); 
        }

        // 2. Activate New Section (Entrance Animation)
        if (newSectionEl) {
            newSectionEl.classList.remove('hidden');
            setTimeout(() => {
                newSectionEl.classList.add('active');
            }, 50); 
            
            currentSection = newSectionId;
        }

        // 3. Update Navigation Active State
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === newSectionId) {
                link.classList.add('active');
            }
        });
        
        // Ensure external links do not get 'active' class (only internal SPA links)
        minecraftLink.classList.remove('active');
    }

    // Set up click handlers for internal navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            changeSection(targetSection);
        });
    });

    // CTA button handler (e.g., Explore My World -> Games section)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            changeSection('games');
        });
    }


    // 3. Copy/Link Functionality (Contact Section)
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-copy-target');
            let contentToCopy;
            let successMessage;

            if (target === 'email') {
                contentToCopy = SITE_CONFIG.email;
                successMessage = 'Email Copied!';
            } else if (target === 'discord') {
                contentToCopy = SITE_CONFIG.discordUsername;
                successMessage = 'Discord Username Copied!';
            } else if (target === 'instagram') {
                window.open(`https://instagram.com/${SITE_CONFIG.instagramUsername.substring(1)}`, '_blank');
                return; 
            }

            navigator.clipboard.writeText(contentToCopy).then(() => {
                const originalText = button.textContent;
                button.textContent = successMessage;
                setTimeout(() => {
                    button.textContent = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy. Please manually select and copy the text.');
            });
        });
    });
    
    // Initialize the first section visibility
    changeSection(currentSection);
});
