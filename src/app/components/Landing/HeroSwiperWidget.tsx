"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

const slides = [
    {
        id: 1,
        title: "Find Your Perfect Match",
        subtitle: "Join thousands of singles discovering meaningful connections.",
        image: "./images/lovers-one.jpg",
    },
    {
        id: 2,
        title: "Love Starts Here",
        subtitle: "Swipe, chat, and meet amazing people near you.",
        image: "./images/lovers-two.jpg",
    },
    {
        id: 3,
        title: "Build Real Connections",
        subtitle: "More than just swipes — create lasting relationships.",
        image: "./images/lovers-three.jpg",
    },
];
export default function HeroSwiperWidget() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                effect="fade"
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full rounded-2xl">
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-2xl" />

                            {/* Content */}
                            <div className="relative z-10 flex items-center justify-center w-full h-full pt-[200px]">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <motion.div
                                            key={slide.id}
                                            className="text-center text-white px-4"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-emerald-400">
                                                {slide.title}
                                            </h1>
                                            <p className="mt-4 text-lg md:text-2xl font-light text-emerald-200">
                                                {slide.subtitle}
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="mt-6 px-6 py-3 bg-emerald-800 rounded-full shadow-lg text-lg font-medium hover:bg-emerald-700 transition"
                                            >
                                                Get Started
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
