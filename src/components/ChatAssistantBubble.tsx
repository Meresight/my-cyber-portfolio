// src/components/ChatAssistantBubble.tsx

'use client'; 

import React from 'react';
import dynamic from 'next/dynamic';

// Read all environment variables
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

// 1. DYNAMIC IMPORT FIX: Load the component only on the client-side (ssr: false) to prevent the "window is not defined" error.
// 2. TYPESCRIPT/PROPS FIX: We explicitly extract the 'BubbleChat' named export, 
//    which tells the strict Vercel build exactly which component is being used and what props it accepts.
const BubbleChatDynamic = dynamic(
    () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
    { ssr: false }
);

export default function ChatAssistantBubble() {
    // 3. SAFETY CHECK: Returns null if any environment variable is missing (e.g., if not set on Vercel).
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables (HOST, ID, or API Key) are missing from the configuration.");
        }
        return null; 
    }

    return (
        // 4. FINAL COMPONENT: Uses the dynamically loaded <BubbleChatDynamic> component.
        // This component correctly uses the apiKey prop to send the required 'Authorization: Bearer' header,
        // resolving the original 401 Unauthorized error.
        <BubbleChatDynamic
            chatflowid={CHATFLOW_ID}
            apiHost={FLOWISE_HOST}
            apiKey={FLOWISE_API_KEY} 
            theme={{
                button: {
                    backgroundColor: "#FF0077",
                    right: 30, 
                    bottom: 30,
                    size: "medium",
                },
                chatWindow: {
                    welcomeMessage: "Hello! I'm Stefan's AI Portfolio Assistant. Ask me about his projects, skills, or experience!",
                }
            }}
        />
    );
};