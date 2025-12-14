import { motion, Variants } from "framer-motion"; // <-- IMPORT VARIANTS HERE

// Container variant definition (if you have one)
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05 // Example stagger
        }
    }
};

// Child variant definition (THIS IS WHERE THE ERROR IS)
const child: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        // REMOVE THE NESTED TRANSITION HERE TO AVOID CONFLICTS
        // transition: { type: "spring", damping: 12, stiffness: 100 } 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", // Now, this transition works for the 'show' state
            damping: 12,
            stiffness: 100
        }
    }
};

// ... The component logic
export default function AnimatedText({ text }: { text: string }) {
    // ...
    return (
        <motion.div variants={container} initial="hidden" animate="show">
            {letters.map((letter, index) => (
                // The transition for 'child' is now applied from the 'show' state, not the parent object.
                <motion.span variants={child} key={index}> 
                    {/* ... */}
                </motion.span>
            ))}
        </motion.div>
    );
}