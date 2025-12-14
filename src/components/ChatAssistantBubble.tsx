// src/components/ChatAssistantBubble.tsx

'use client'; 

import React, { useEffect } from 'react';

// Read variables from the environment
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;

export default function ChatAssistantBubble() {
    // Safety Check: Render nothing if variables are missing
    if (!FLOWISE_HOST || !CHATFLOW_ID) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables are missing.");
        }
        return null; 
    }

    // --- FINAL, GUARANTEED FIX: MANUALLY INJECT THE SCRIPT ---
    useEffect(() => {
        // Construct the full script URL using the environment variables
        const scriptUrl = `${FLOWISE_HOST}/api/v1/embedded-chat/${CHATFLOW_ID}`;

        // 1. Create the script element
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.type = 'module';
        
        // 2. Set the data attributes for theme/styling
        script.dataset.chatflowid = CHATFLOW_ID;
        script.dataset.apiHost = FLOWISE_HOST;
        script.dataset.theme = JSON.stringify({
            button: {
                backgroundColor: "#FF0077", // Neon Pink/Magenta
                right: 30, 
                bottom: 30,
                size: "medium",
            },
            chatWindow: {
                welcomeMessage: "Hello! I'm Stefan's AI Portfolio Assistant. Ask me about his projects, skills, or experience!",
            }
        });

        // 3. Append the script to the document body to load it
        document.body.appendChild(script);

        // 4. Cleanup function: remove the script when the component unmounts (optional but good practice)
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures it runs once on mount

    // The component itself renders nothing, as the script loads the chat bubble globally
    return null;
};