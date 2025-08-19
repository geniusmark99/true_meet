"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Icons";

const navItems = [
    "Home",
    "Features",
    "The Buzz",
    "About",
    "Sign In",
];

const HeaderWidget = () => {

    const [isOpen, setIsOpen] = useState(false);
    return <>
        <nav
            // className="w-full fixed top-0 left-0 z-50 bg-linear-120 from-emerald-500 to-green-600 shadow-md"
            className="w-full fixed top-0 left-0 z-50 bg-emerald-600
            bg-[url('/images/pattern.svg')] bg-[length:40px_40px]
             shadow-md"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <Logo className="fill-emerald-100 size-10" />
                        <span className="text-xl font-bold text-emerald-100">True meet</span>
                    </div>
                </Link>



                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6 text-lg text-white">
                    {navItems.map((item) => (
                        <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} key={item} className="relative group">
                            <span className="hover:text-emerald-900 cursor-pointer">{item}</span>

                            <div className="absolute -top-2 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0  right-0  group-hover:block">
                                <svg className="size-3 transition scale-95 group-hover:scale-105 fill-emerald-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                </svg>
                            </div>

                            <div className="absolute -bottom-1 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0 -left-1 group-hover:block">
                                <svg className="size-2 transition scale-95 group-hover:scale-105 fill-emerald-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
                </button>

            </div>



            {/* <AnimatePresence> */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-white w-full px-6 py-4 space-y-4  text-lg"
                >
                    {navItems.map((item) => (
                        <Link
                            href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                            key={item}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="block py-2 hover:bg-emerald-500 px-2 rounded-lg transition hover:text-white cursor-pointer">
                                {item}
                            </span>
                        </Link>
                    ))}


                    {/* Social Icons */}
                    {/* <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                            {[
                                "facebook",
                                "linkedin",
                                "instagram",
                                "x",
                                "pinterest",
                                "youtube",
                                "tiktok",
                            ].map((icon) => (
                                <Image
                                    key={icon}
                                    src={`/${icon}.svg`}
                                    alt={`${icon} icon`}
                                    width={24}
                                    height={24}
                                    className="cursor-pointer hover:opacity-70"
                                />
                            ))}
                        </div> */}


                    {/* App Downloads */}
                    <div className="pt-6 mt-5 flex flex-col gap-3">


                        <Link
                            href="#"
                        >
                            <span className="block py-2 hover:bg-emerald-500 px-2 rounded-lg transition hover:text-white cursor-pointer">
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </motion.div>
            )}
            {/* </AnimatePresence> */}
        </nav>
    </>;
}

export default HeaderWidget;