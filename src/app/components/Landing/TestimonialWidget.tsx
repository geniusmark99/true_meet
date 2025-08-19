"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";


type Testimonial = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
};


const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "Hannah Met Her Now-Husband on True meet.",
        subtitle: "A Few Months Later, She Met One of Her Bridesmaids There, Too",
        image: "/images/landing-section-2.webp",
    },
    {
        id: 2,
        title: "Mark Found His Business Partner on True meet Bizz.",
        subtitle: "Together They Launched a Startup That Raised Seed Funding.",
        image: "/images/hero-bg-image.jpg",
    },
    {
        id: 3,
        title: "Sophie Met Her Best Friend on True meet For Friends.",
        subtitle: "They Now Travel The World Together.",
        image: "/images/landing-section.webp",
    },
];


const TestimonialWidget = () => {
    return <>
        <section className="w-full bg-white py-12 px-4 md:px-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-5xl font-extrabold text-center text-black mb-8 uppercase"
            >
                If it worked for them, <br /> it could work for you
            </motion.h2>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                className="max-w-5xl mx-auto rounded-2xl"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row bg-green-500  rounded-2xl shadow-lg overflow-hidden"
                        >
                            {/* Left Image */}
                            <div className="w-full md:w-1/2 relative h-72 md:h-72">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-bold text-green-100 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-green-100 text-sm md:text-base">
                                    {item.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </>
}

export default TestimonialWidget;