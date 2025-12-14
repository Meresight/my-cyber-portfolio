// src/components/ChatAssistantBubble.tsx

'use client'; 

import React from 'react';
import dynamic from 'next/dynamic'; // Required to prevent 'window is not defined' on the server

// Read all environment variables
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

// 1. DYNAMIC IMPORT FIX: Load the component only on the client-side (ssr: false).
// 2. COMPONENT NAME FIX: Use 'mod.Chatbot' as it is the component that accepts the 'apiKey' prop.
const Chatbot = dynamic(
    () => import('flowise-embed-react').then((mod: any) => mod.Chatbot),
    { ssr: false }
);

export default function ChatAssistantBubble() {
    // 3. SAFETY CHECK: Returns null if any variable is missing (e.g., if Vercel variables are not set).
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables (HOST, ID, or API Key) are missing from the configuration.");
        }
        return null; 
    }

    return (
        // 4. FINAL COMPONENT: Uses the dynamically loaded <Chatbot> component 
        // which correctly handles the Authorization: Bearer header.
        <Chatbot
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