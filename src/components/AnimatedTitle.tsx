import { motion, Variants, Transition } from "framer-motion"; 
import React from 'react';

// --- INTERFACE FIX: Added 'delay' to resolve Vercel build error ---
interface AnimatedTitleProps {
    /** The string of text to be animated. */
    text: string;
    /** The size of the text (e.g., "text-4xl", "text-xl"). */
    className?: string;
    /** Optional delay before the animation starts (in seconds). */
    delay?: number; 
}


// --- TRANSITION DEFINITION FIX ---
// Define the spring transition object separately with the explicit Transition type.
const springTransition: Transition = {
    type: "spring",
    damping: 12, 
    stiffness: 100, 
};

// --- CONTAINER VARIANT ---
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, 
        }
    }
};

// --- CHILD VARIANT (Per Letter) FIX ---
const child: Variants = {
    // Start state
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    // End state
    show: {
        opacity: 1,
        y: 0,
        // Apply the correctly typed transition here
        transition: springTransition,
    }
};

/**
 * Animates a string of text, making each letter appear with a subtle spring effect.
 */
export default function AnimatedTitle({ text, className = "text-5xl", delay = 0 }: AnimatedTitleProps) {
    // Convert the string into an array of characters
    const letters = Array.from(text);

    return (
        <motion.div 
            // Use the container variant on the wrapper element
            variants={container} 
            initial="hidden" 
            animate="show"
            
            // --- USAGE FIX: Apply the delay prop here ---
            // Spread the container transition settings (like staggerChildren)
            transition={{ delay: delay, ...container.show?.transition }} 
            
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