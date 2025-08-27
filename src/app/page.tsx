"use client";

import React from "react";
import { motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HeaderWidget, FooterWidget, AnimatedWidget } from "./components";
import { FeatureWidget, WeAreWidget, TestimonialWidget, HeroSwiperWidget } from "./components/Landing";


export default function SmoothScrollShowcase() {
    // const containerRef = useRef<HTMLDivElement | null>(null);
    // const locoRef = useRef<any>(null);

    // useEffect(() => {
    //     let ctx: gsap.Context | undefined;
    //     let Scroll: any;

    //     const init = async () => {
    //         const LocomotiveScroll = (await import("locomotive-scroll")).default as any;

    //         gsap.registerPlugin(ScrollTrigger);

    //         Scroll = new LocomotiveScroll({
    //             el: containerRef.current,
    //             smooth: true,
    //             multiplier: 1,
    //             lerp: 0.08,
    //             smartphone: { smooth: true },
    //             tablet: { smooth: true },
    //         });

    //         locoRef.current = Scroll;

    //         ScrollTrigger.scrollerProxy(containerRef.current!, {
    //             scrollTop(value) {
    //                 if (arguments.length) {
    //                     Scroll.scrollTo(value, { duration: 0, disableLerp: true });
    //                 }
    //                 return Scroll.scroll.instance.scroll.y;
    //             },
    //             getBoundingClientRect() {
    //                 return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //             },
    //             pinType: containerRef.current!.style.transform ? "transform" : "fixed",
    //         });

    //         // Refresh Locomotive on ScrollTrigger update
    //         Scroll.on("scroll", ScrollTrigger.update);

    //         ctx = gsap.context(() => {
    //             // Hero heading subtle scale on scroll
    //             gsap.to("#heroTitle", {
    //                 scale: 1.1,
    //                 yPercent: -5,
    //                 ease: "none",
    //                 scrollTrigger: {
    //                     trigger: "#hero",
    //                     start: "top top",
    //                     end: "+=60%",
    //                     scrub: true,
    //                     scroller: containerRef.current!,
    //                 },
    //             });

    //             // Stagger in reveal cards
    //             gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, i) => {
    //                 gsap.fromTo(
    //                     el,
    //                     { y: 60, opacity: 0, scale: 0.95 },
    //                     {
    //                         y: 0,
    //                         opacity: 1,
    //                         scale: 1,
    //                         duration: 0.8,
    //                         ease: "power3.out",
    //                         scrollTrigger: {
    //                             trigger: el,
    //                             start: "top 85%",
    //                             end: "top 40%",
    //                             scrub: false,
    //                             scroller: containerRef.current!,
    //                         },
    //                     }
    //                 );
    //             });

    //             // Parallax images using translateY
    //             gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    //                 gsap.fromTo(
    //                     el,
    //                     { yPercent: -10 },
    //                     {
    //                         yPercent: 10,
    //                         ease: "none",
    //                         scrollTrigger: {
    //                             trigger: el.parentElement as Element,
    //                             start: "top bottom",
    //                             end: "bottom top",
    //                             scrub: true,
    //                             scroller: containerRef.current!,
    //                         },
    //                     }
    //                 );
    //             });
    //         }, containerRef);

    //         // After everything is set, refresh
    //         ScrollTrigger.addEventListener("refresh", () => Scroll.update());
    //         ScrollTrigger.refresh();
    //     };

    //     init();

    //     return () => {
    //         ctx?.revert();
    //         ScrollTrigger.killAll(false);
    //         if (locoRef.current) {
    //             try { locoRef.current.destroy(); } catch (e) { }
    //             locoRef.current = null;
    //         }
    //     };
    // }, []);



    return <>
        <HeaderWidget />
        <div className="relative bg-emerald-950 ">
            {/* <div className="absolute top-10">
                <div className="rounded-full size-20 bg-red-900"></div>
            </div> */}
            <div className="">
                {/* ref={containerRef} data-scroll-container */}
                <section
                    id="hero"
                    className="relative h-auto lg:h-[100vh] pt-[100px] lg:pt-[150px] flex items-center overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row lg:px-20 gap-y-10 w-full">

                        <motion.div
                            className="container mx-auto px-4 md:px-8 md:w-6/12 flex justify-center items-center flex-col lg:items-start"
                            initial="initial"
                            animate="animate"
                        >
                            <p className="uppercase hidden lg:block tracking-widest text-xs md:text-sm text-neutral-200 mb-4">
                                Chat • Date • Love
                            </p>
                            <h1
                                id="heroTitle"
                                className="text-4xl text-neutral-100 max-w-xl lg:max-w-2xl md:text-5xl lg:text-5xl text-center md:text-left font-black leading-tight tracking-tight"
                            >
                                Welcome to <span className="bg-linear-120 text-transparent bg-clip-text from-emerald-500 to-emerald-100">true meet</span>, Ready to go on a date?
                            </h1>
                            <p className="mt-6 max-w-xl text-center lg:text-left text-neutral-300  md:text-base lg:text-2xl">
                                You deserve better, so we&apos;ve designed great ways for you to date more and stress less.
                            </p>
                            <div className="mt-8 flex gap-3 justify-center md:justify-start">
                                <Link
                                    href="#section-1"
                                    data-scroll-to
                                    className="rounded-2xl text-neutral-100 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur transition border border-white/10"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href="#credits"
                                    data-scroll-to
                                    className="rounded-2xl text-neutral-100 px-5 py-3 border border-white/20 hover:border-white/50 transition"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </motion.div>


                        <div className="relative border rounded-2xl border-white/10 md:w-6/12 lg:p-10">
                            <HeroSwiperWidget />
                        </div>


                    </div>


                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-24 top-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-indigo-500/20 blur-3xl" data-parallax />
                        <div className="absolute -left-24 bottom-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-fuchsia-500/20 blur-3xl" data-parallax />
                    </div>
                </section>


                <AnimatedWidget
                    animationType="scale"
                >
                    <FeatureWidget />
                </AnimatedWidget>

                <AnimatedWidget
                    animationType="translateY+"
                >
                    <WeAreWidget />
                </AnimatedWidget>

                <div className="flex flex-col gap-y-10 mt-[100px] lg:flex-row w-full lg:p-10 h-auto lg:h-screen justify-center items-center">
                    <AnimatedWidget
                        animationType="translateX+"
                        className="md:w-1/2 text-center md:text-left lg:w-6/12">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-emerald-600 leading-tight">
                            MAKE THE<br /> FIRST MOVE<br />
                        </h2>
                        <p className="mt-4 text-lg text-emerald-500 lg:max-w-lg">
                            We&apos;re the only dating platform that makes dating better by putting women&aposs experiences first. Because when things are better for women, they&apos;re better for everyone
                        </p>
                        <button className="mt-6 bg-emerald-800 text-white px-6 py-2 lg:py-5 rounded-full font-semibold hover:bg-emerald-500 transition">
                            About True meet
                        </button>
                    </AnimatedWidget>
                    <AnimatedWidget className="w-full lg:w-6/12"
                        animationType="translateX-">

                        <div className="rounded-2xl overflow-hidden shadow-lg lg:size-[700px]">
                            <Image
                                src="/images/landing-section-2.webp"
                                alt="Happy user"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </AnimatedWidget>

                </div>

                <AnimatedWidget
                    animationType="translateY+"
                >
                    <section className="py-24 md:py-36 bg-emerald-800">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <AnimatedWidget

                                    className="relative overflow-hidden rounded-3xl border-0 border-white/10">

                                    <div className="rounded-2xl overflow-hidden shadow-lg lg:size-[700px]">
                                        <Image
                                            src="/images/lovers-one.jpg"
                                            alt="Happy user"
                                            width={600}
                                            height={600}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    {/* <div className="aspect-[4/3] w-full bg-neutral-900">
                                        <div className="h-full w-full" data-parallax>
                                            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.2),transparent_60%)]" />
                                        </div>
                                    </div> */}
                                </AnimatedWidget>
                                <AnimatedWidget
                                    animationType="translateX+"
                                    className="text-center md:text-left lg:w-full">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-950 leading-tight">
                                        BRING YOUR
                                        BAR BACK
                                        UP TO WHERE
                                        IT BELONGS
                                    </h2>
                                    <AnimatedWidget
                                        animationType="translateX+">

                                        <p className="mt-4 text-lg lg:text-2xl text-emerald-200 lg:max-w-2xl">
                                            We&apos;re the only dating platform that makes dating better by putting women&aposs experiences first. Because when things are better for women, they&apos;re better for everyone
                                        </p>
                                    </AnimatedWidget>


                                </AnimatedWidget>
                            </div>
                        </div>
                    </section>
                </AnimatedWidget>

            </div>

            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)]" />


        </div>

        <AnimatedWidget animationType="translateX+" className="h-screen flex justify-center items-center">
            <TestimonialWidget />

        </AnimatedWidget>

        <FooterWidget />


    </>


}
