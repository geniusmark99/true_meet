"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ComingSoonWidget } from "./components";

export default function NotFound() {
    return <>
        {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl md:text-9xl font-extrabold text-emerald-500 drop-shadow-lg"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-lg md:text-2xl text-gray-300"
            >
                Oops! The page you’re looking for doesn’t exist.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
            >
                <Link
                    href="/"
                    className="px-6 py-3 bg-emerald-600 rounded-full font-medium shadow-lg hover:bg-emerald-700 transition"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div> */}
        <ComingSoonWidget />

    </>

}
