"use client";

import { motion } from "framer-motion";

export default function ComingSoonWidget() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Animated gradient background shapes */}
            <motion.div
                className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
                animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                animate={{ x: [50, -50, 100, 50], y: [0, 80, -80, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Content */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold tracking-wide text-center drop-shadow-lg"
            >
                Coming Soon
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-lg"
            >
                True meet dating platform is still under development.
                Stay tuned for a beautiful way to connect, chat & meet amazing people.
            </motion.p>

            {/* Subscribe Input */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 flex items-center bg-white/10 backdrop-blur-md rounded-full p-1.5 md:p-2 w-[90%] max-w-md"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 md:px-4 px-1.5 md:py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="px-5 text-xs sm:text-sm py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium">
                    Notify Me
                </button>
            </motion.div>

            {/* Footer */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 text-sm text-gray-400"
            >
                © {new Date().getFullYear()} TrueMeet · All Rights Reserved
            </motion.p>
        </div>
    );
}
