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
    // These strings are used in the Contact section and for the copy buttons.
    email: "business@darkplayz.com",
    discordUsername: "DARKPLAYZ#1337",
    instagramUsername: "@darkplayzofficial",
    
    // --- 3. THEME & STYLING ---
    // These colors are defined in style.css, but this object shows what the theme is built around.
    theme: {
        darkBackground: "#0A0A10", // Primary dark background
        accentPrimary: "#8A2BE2",  // Electric Purple (used for primary highlights, buttons)
        accentSecondary: "#00FFFF", // Neon Aqua/Cyan (used for secondary glow, status pulses)
        textLight: "#FFFFFF",
        textMuted: "#A0A0A0"
    },

    // --- 4. SOCIAL CONNECTIONS ---
    // Add or remove objects to update the Social section cards.
    // 'icon' uses Font Awesome classes (e.g., 'fab fa-youtube').
    socials: [
        { 
            name: "YouTube", 
            icon: "fab fa-youtube", 
            link: "https://youtube.com/darkplayz" 
        },
        { 
            name: "Instagram", 
            icon: "fab fa-instagram", 
            link: "https://instagram.com/darkplayzofficial" 
        },
        { 
            name: "Telegram", 
            icon: "fab fa-telegram-plane", 
            link: "https://t.me/darkplayzchannel" 
        },
        { 
            name: "Discord", 
            icon: "fab fa-discord", 
            link: "https://discord.gg/darkplayzcommunity" 
        }
    ],

    // --- 5. GAMES/PORTFOLIO ---
    // Add, remove, or edit game cards here.
    // Ensure the 'image' path matches the file name in your 'images/' folder.
    games: [
        { 
            title: "Minecraft", 
            status: "Playing Now", // Change this to reflect current activity (e.g., "Season 3 Highlights")
            image: "images/minecraft.jpg", 
            link: "#" // Link to a playlist, channel, or stream archive
        },
        { 
            title: "Call of Duty", 
            status: "Upcoming Live Stream", 
            image: "images/cod.jpg", 
            link: "#" 
        }
        // Example of adding a third game:
        /*
        { 
            title: "Valorant", 
            status: "Competitive VODs", 
            image: "images/valorant.jpg", // Needs a valorant.jpg file
            link: "https://youtube.com/darkplayz/valorant" 
        }
        */
    ]
};