'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SplashScreen({
    onComplete,
    name,
}: {
    onComplete: () => void;
    name: string;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeInOut',
            }}
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                }}
                className="text-4xl md:text-5xl font-extralight uppercase text-white text-center tracking-[0.4em]"
            >
                Portfolio {name}
            </motion.h1>
        </motion.div>
    );
}