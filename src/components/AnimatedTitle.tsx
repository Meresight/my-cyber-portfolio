import { motion, Variants, Transition } from "framer-motion";
import React from 'react';

// --- TRANSITION DEFINITION FIX ---
// Define the spring transition object separately with the explicit Transition type.
// This resolves the TypeScript error during the Vercel build process.
const springTransition: Transition = {
    type: "spring",
    damping: 12, // Lower value for more oscillation
    stiffness: 100, // Controls the speed of the animation
};

// --- CONTAINER VARIANT ---
// This variant controls the animation of the whole line of text.
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Staggers the animation of each letter
        }
    }
};

// --- CHILD VARIANT (Per Letter) FIX ---
// This variant controls the animation of each individual letter (the motion.span).
const child: Variants = {
    // Start state
    hidden: { 
        opacity: 0, 
        y: 20 // Starts 20px below its final position
        // NOTE: We MUST NOT include the transition block here to prevent the build error.
    },
    // End state
    show: {
        opacity: 1,
        y: 0,
        // Apply the correctly typed transition here
        transition: springTransition,
    }
};

interface AnimatedTextProps {
    /** The string of text to be animated. */
    text: string;
    /** The size of the text (e.g., "text-4xl", "text-xl"). */
    className?: string;
}

/**
 * Animates a string of text, making each letter appear with a subtle spring effect.
 * This is perfect for headings, titles, or welcome messages.
 */
export default function AnimatedText({ text, className = "text-5xl" }: AnimatedTextProps) {
    // Convert the string into an array of characters
    const letters = Array.from(text);

    return (
        <motion.div 
            // Use the container variant on the wrapper element
            variants={container} 
            initial="hidden" 
            animate="show"
            className={`font-bold tracking-tight ${className}`}
            // Essential styles for the stagger effect to work correctly
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} 
        >
            {letters.map((letter, index) => (
                <motion.span 
                    // Apply the child variant to each letter
                    variants={child} 
                    key={index}
                    // Ensures letters don't wrap to the next line mid-word
                    style={{ display: "inline-block" }}
                >
                    {/* Replaces a space character with a non-breaking space for layout */}
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
}