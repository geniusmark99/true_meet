"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type AnimationType =
    | "scale"
    | "rotate"
    | "translateX+"
    | "translateX-"
    | "translateY+"
    | "translateY-";

interface Props {
    children: React.ReactNode;
    className?: string;
    animationType?: AnimationType;
    duration?: number;
    delay?: number;
}

export default function AnimatedWidget({
    children,
    className,
    animationType = "scale",
    duration = 0.8,
    delay = 0,
}: Props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // animate in and out
        threshold: 0.2,
    });

    // Define animation variants
    const variants: Record<AnimationType, Variants> = {
        scale: {
            hidden: { opacity: 0, scale: 0.8, y: 50 },
            visible: { opacity: 1, scale: 1, y: 0 },
        },
        rotate: {
            hidden: { opacity: 0, rotate: -15, y: 50 },
            visible: { opacity: 1, rotate: 0, y: 0 },
        },
        "translateX+": {
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
        },
        "translateX-": {
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
        },
        "translateY+": {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
        },
        "translateY-": {
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
        },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            variants={variants[animationType]}
            initial="hidden"
            animate={controls}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
