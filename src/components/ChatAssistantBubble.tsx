// src/components/ChatAssistantBubble.tsx

'use client'; 

import React from 'react';
import dynamic from 'next/dynamic'; // 1. Import dynamic

// Read environment variables
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

// 2. Dynamically import the BubbleChat component
// The ssr: false option tells Next.js to only load this component on the client-side,
// bypassing the 'window is not defined' error.
const BubbleChat = dynamic(
    () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
    { ssr: false }
);

export default function ChatAssistantBubble() {
    // 1. Safety Check
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables are missing.");
        }
        return null; 
    }

    return (
        // Use the dynamically loaded BubbleChat component
        <BubbleChat
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