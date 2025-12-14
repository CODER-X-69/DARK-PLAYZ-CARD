// app.js

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

    // Inject Game Cards
    const gameCardsContainer = document.querySelector('.game-cards-container');
    SITE_CONFIG.games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.onclick = () => window.open(game.link, '_blank'); // Example action
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-img">
            <div class="game-card-overlay">
                <span class="game-card-status">${game.status}</span>
                <h3 class="game-card-title">${game.title}</h3>
            </div>
        `;
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
    
    
    // ==========================================================
    // 4. NEW: PARTICLE ANIMATION FOR SMOOTH GAMING AESTHETIC
    // ==========================================================
    const particleCount = 50; 
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    document.body.appendChild(particleContainer);

    let particles = [];

    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random initial position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = Math.random() * 0.5 + 0.1; 
            
            // Store properties for smooth, stable movement
            particle.speedX = (Math.random() - 0.5) * 0.2; 
            particle.speedY = (Math.random() - 0.5) * 0.2; 
            particle.size = Math.random() * 2 + 1; 

            particle.currentX = parseFloat(particle.style.left) / 100 * window.innerWidth;
            particle.currentY = parseFloat(particle.style.top) / 100 * window.innerHeight;

            particle.style.width = `${particle.size}px`;
            particle.style.height = `${particle.size}px`;

            particles.push(particle);
            particleContainer.appendChild(particle);
        }
    }

    function animateParticles() {
        // RequestAnimationFrame ensures smooth, browser-synced animation
        requestAnimationFrame(animateParticles);

        particles.forEach(p => {
            // Update position
            p.currentX += p.speedX;
            p.currentY += p.speedY;

            // Boundary checks (wrap around the screen for continuous effect)
            if (p.currentX > window.innerWidth) p.currentX = 0;
            if (p.currentX < 0) p.currentX = window.innerWidth;
            if (p.currentY > window.innerHeight) p.currentY = 0;
            if (p.currentY < 0) p.currentY = window.innerHeight;

            // Apply transformation for performance (hardware acceleration)
            p.style.transform = `translate(${p.currentX}px, ${p.currentY}px)`;
        });
    }

    createParticles();
    animateParticles();
    // End of New Particle Animation
    
    // Initialize the first section visibility
    changeSection(currentSection);
});
