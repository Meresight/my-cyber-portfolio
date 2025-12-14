// src/components/ChatAssistantBubble.tsx

'use client'; 

import React from 'react';
import dynamic from 'next/dynamic';

// Read all environment variables
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
const FLOWISE_API_KEY = process.env.NEXT_PUBLIC_FLOWISE_API_KEY; 

// 1. Define a type that includes all the props we KNOW the component accepts at runtime.
interface FlowiseChatProps {
    chatflowid: string;
    apiHost: string;
    apiKey: string;
    theme: any; 
}

// 2. DYNAMIC IMPORT FIX: Use the component name that works in the browser (BubbleChat).
// 3. TYPESCRIPT BYPASS: Cast the imported component to our custom interface 
//    to force the build to ignore the library's incorrect type definition.
const ChatbotDynamic = dynamic(
    () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
    { ssr: false }
) as React.ComponentType<FlowiseChatProps>; // <-- THE CRITICAL TYPE CAST FIX

export default function ChatAssistantBubble() {
    // Safety Check
    if (!FLOWISE_HOST || !CHATFLOW_ID || !FLOWISE_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: Environment variables are missing.");
        }
        return null; 
    }

    return (
        // Use the dynamically casted component with all necessary props.
        <ChatbotDynamic
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