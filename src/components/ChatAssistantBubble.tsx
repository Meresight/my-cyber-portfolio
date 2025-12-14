// src/components/ChatAssistantBubble.tsx

'use client'; // <-- THIS IS CRUCIAL AND MUST BE AT THE TOP

import dynamic from 'next/dynamic';
import React from 'react';

// Read variables from the environment
const FLOWISE_HOST = process.env.NEXT_PUBLIC_FLOWISE_HOST;
const CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;

// Use dynamic import to disable SSR, which is necessary for the flowise-embed-react library
const DynamicBubbleChat = dynamic(
    // Reverted the cast on the imported module
    () => import('flowise-embed-react').then((mod) => mod.BubbleChat), 
    { 
        ssr: false, 
        loading: () => <div style={{width: 50, height: 50, borderRadius: '50%', background: '#FF0077', position: 'fixed', bottom: 30, right: 30, opacity: 0.5, animation: 'pulse 1s infinite'}}></div> 
    }
);

export default function ChatAssistantBubble() {
    // Safety Check: Render nothing if variables are missing
    if (!FLOWISE_HOST || !CHATFLOW_ID) {
        if (process.env.NODE_ENV === 'development') {
             console.warn("Flowise assistant disabled: NEXT_PUBLIC_FLOWISE_HOST or NEXT_PUBLIC_CHATFLOW_ID is missing from .env.local.");
        }
        return null; 
    }

    // --- FINAL BUILD FIX: CAST THE PROPS OBJECT TO 'any' ---
    // This resolves the TypeScript error while keeping the functionally required 'scriptHost' prop.
    const bubbleProps = {
        chatflowid: CHATFLOW_ID,
        apiHost: FLOWISE_HOST,
        scriptHost: FLOWISE_HOST, // Functional fix for 404 runtime error
        theme: {
            button: {
                backgroundColor: "#FF0077", // Neon Pink/Magenta
                right: 30, 
                bottom: 30,
                size: "medium",
            },
            chatWindow: {
                welcomeMessage: "Hello! I'm Stefan's AI Portfolio Assistant. Ask me about his projects, skills, or experience!",
            }
        }
    };

    return (
        <DynamicBubbleChat
            {...(bubbleProps as any)} // Spread the props object after casting it
        />
    );
};