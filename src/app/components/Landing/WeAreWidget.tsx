"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        title: "Meet someone with true meet Date",
        desc: "Find someone you actually want to date, then go ahead and Make the First Move. Make genuine connections, vibe over what you both love, and most importantly, have fun.",
        img: "/images/landing-section-2.webp",

    },
    {
        title: "Find new friends on true meet For Friends",
        desc: "Meet someone like you. Or unlike you. Make new friends and find new things to do together — whether you’re home or away.",
        img: "/images/landing-section.webp",


    },
    {
        title: "Make career moves with true meet Bizz",
        desc: "Find friends with work benefits. Connect with other business professionals to find your next job, a mentor or even a whole new career.",
        img: "/images/landing-section-2.webp",
    },
];


const WeAreWidget = () => {
    return <>
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl text-emerald-950 font-extrabold text-center mb-12"
            >
                WE&apos;RE NOT JUST FOR DATING
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-20 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="w-full h-64 md:h-56 overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg text-emerald-900 md:text-xl font-semibold">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-emerald-800 text-sm md:text-base">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    </>
}

export default WeAreWidget; 