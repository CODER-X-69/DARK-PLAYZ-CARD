// config.js

/**
 * =================================================================
 * DARK PLAYZ Website Configuration
 * Easily update content, links, and themes here.
 * =================================================================
 */

const SITE_CONFIG = {
    // --- 1. CORE CREATOR INFO ---
    creatorName: "DARK PLAYZ",
    tagline: "Unleashing the Night: Competitive Gaming & Creative Content.", // Displayed under the name on the Home page
    
    // --- 2. CONTACT INFORMATION ---
    email: "Coming Soon",
    discordUsername: "Coming Soon",
    instagramUsername: "Coming soon",
    
    // --- 3. THEME & STYLING ---
    theme: {
        darkBackground: "#0A0A10", // Primary dark background
        accentPrimary: "#8A2BE2",  // Electric Purple (used for primary highlights, buttons)
        accentSecondary: "#00FFFF", // Neon Aqua/Cyan (used for secondary glow, status pulses)
        textLight: "#FFFFFF",
        textMuted: "#A0A0A0"
    },
    
    // --- 4. NEW: EXTERNAL LINKS ---
    externalLinks: {
        // This link will be used when clicking the new 'Minecraft' navigation link
        minecraftPage: "https://coder-x-69.github.io/Coming-Soon/" 
    },

    // --- 5. SOCIAL CONNECTIONS ---
    socials: [
        { 
            name: "YouTube", 
            icon: "fab fa-youtube", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        },
        { 
            name: "Instagram", 
            icon: "fab fa-instagram", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        },
        { 
            name: "Telegram", 
            icon: "fab fa-telegram-plane", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        },
        { 
            name: "Discord", 
            icon: "fab fa-discord", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        }
    ],

    // --- 6. GAMES/PORTFOLIO ---
    games: [
        { 
            title: "Minecraft", 
            status: "Playing Now", 
            image: "images/minecraft.jpg", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        },
        { 
            title: "Call of Duty", 
            status: "Upcoming Live Stream", 
            image: "images/cod.jpg", 
            link: "https://coder-x-69.github.io/Coming-Soon/" 
        }
    ]
};
