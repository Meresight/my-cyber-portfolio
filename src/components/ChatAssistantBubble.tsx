// src/components/ChatAssistantBubble.tsx

'use client'; 

import React from 'react';
import dynamic from 'next/dynamic';

// Read environment variables
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

// DYNAMIC IMPORT FIX: Load the component only on the client-side (ssr: false).
// We simplify the import statement to help TypeScript retain the component's type definition.
const ChatbotDynamic = dynamic(
    () => import('flowise-embed-react'),
    { ssr: false }
);

export default function ChatAssistantBubble() {
    // Safety Check
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables are missing.");
        }
        return null; 
    }

    // We check if the component is ready before rendering its props
    // This wrapper ensures the component is available before we pass it props.
    return (
        <ChatbotDynamic
            chatflowid={CHATFLOW_ID}
            apiHost={FLOWISE_HOST}
            apiKey={FLOWISE_API_KEY} 
            theme={{
                button: {
                    backgroundColor: "#FF0077",
                    right: 30, 
                    bottom: 30,
                    size: "medium", // Changed back to string type to match Flowise spec
                },
                chatWindow: {
                    welcomeMessage: "Hello! I'm Stefan's AI Portfolio Assistant. Ask me about his projects, skills, or experience!",
                }
            }}
        />
    );
};