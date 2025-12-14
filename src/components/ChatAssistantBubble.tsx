// src/components/ChatAssistantBubble.tsx

'use client'; 

import React, { useEffect } from 'react';

// Read variables from the environment
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;

export default function ChatAssistantBubble() {
    // Safety Check: Render nothing if variables are missing
    if (!FLOWISE_HOST || !CHATFLOW_ID) {
        // You can check the browser console in development mode if this message appears
        return null; 
    }

    // --- FINAL DEFINITIVE FIX: MANUALLY INJECT THE SCRIPT ---
    useEffect(() => {
        const scriptId = 'flowise-chat-script';
        
        // Prevent script from being loaded multiple times
        if (document.getElementById(scriptId)) {
            return;
        }

        // Construct the full script URL using the environment variables
        // This is the correct, direct URL for the Flowise bubble script
        const scriptUrl = `${FLOWISE_HOST}/api/v1/embedded-chat/${CHATFLOW_ID}`;

        // 1. Create the script element
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptUrl;
        script.async = true;
        script.type = 'module';
        
        // 2. Set the data attributes for theme/styling
        script.dataset.chatflowid = CHATFLOW_ID;
        script.dataset.apiHost = FLOWISE_HOST;
        
        // Note: The theme is passed as a JSON string
        script.dataset.theme = JSON.stringify({
            button: {
                backgroundColor: "#FF0077",
                right: 30, 
                bottom: 30,
                size: "medium",
            },
            chatWindow: {
                welcomeMessage: "Hello! I'm Stefan's AI Portfolio Assistant. Ask me about his projects, skills, or experience!",
            }
        });

        // 3. Append the script to the document body
        document.body.appendChild(script);

        // 4. Cleanup function: remove the script on component unmount
        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []); 

    // The component returns null, as the useEffect hook handles rendering the bubble globally
    return null;
};