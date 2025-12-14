// src/components/ChatAssistantBubble.tsx

'use client'; 

import React, { useEffect } from 'react';

// Read all environment variables set on Vercel and in your .env.local file.
// The NEXT_PUBLIC_ prefix makes them accessible on the client side.
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

export default function ChatAssistantBubble() {
    // 1. Safety Check: If any critical variable is missing, the component renders nothing (returns null).
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: One or more environment variables (HOST, ID, or API Key) are missing from the configuration.");
        }
        return null; 
    }

    // 2. Use the useEffect hook to handle client-side script injection.
    useEffect(() => {
        const scriptId = 'flowise-chat-script';
        
        // Prevent script from being loaded multiple times (e.g., during React re-renders)
        if (document.getElementById(scriptId)) {
            return;
        }

        // Construct the full URL for the Flowise bubble script
        const scriptUrl = `${FLOWISE_HOST}/api/v1/embedded-chat/${CHATFLOW_ID}`;

        // Create the script element
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptUrl;
        script.async = true;
        script.type = 'module';
        
        // Set the required data attributes for configuration and authentication
        script.dataset.chatflowid = CHATFLOW_ID;
        script.dataset.apiHost = FLOWISE_HOST;
        
        // CRITICAL FIX for 401 Unauthorized: Include the API Key
        script.dataset.apiKey = FLOWISE_API_KEY; 
        
        // Set the theme and styling options
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

        // Append the script to the document body to load the chat bubble globally
        document.body.appendChild(script);

        // Cleanup function: remove the script on component unmount (optional but good practice)
        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, [FLOWISE_API_KEY]); // Dependency array includes the key to re-run if it somehow changed

    // 3. The React component returns null because the script handles rendering the chat bubble globally.
    return null;
};