"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from "react-icons/fa";

export default function FooterWidget() {
    return (
        <footer className="w-full border-t border-gray-200 bg-emerald-950 px-6 py-10 z-[50]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row">

                {/* Left Section */}
                <div className="flex flex-col items-center gap-4 lg:items-start">
                    <div className="flex items-center gap-3">
                        <select
                            className="rounded-full border bg-emerald-900 text-emerald-400 border-emerald-300 px-4 py-2 text-sm focus:outline-none"
                            defaultValue="en-UK"
                        >
                            <option value="en-UK" className="text-emerald-100">English (United Kingdom)</option>
                            <option value="en-US" className="text-emerald-100">English (United States)</option>
                            <option value="fr" className="text-emerald-100">Français</option>
                            <option value="de" className="text-emerald-100">Deutsch</option>
                        </select>
                        <button className="rounded-full bg-emerald-800 hover:bg-emerald-700 cursor-pointer px-6 py-2 text-sm font-semibold text-white transition ">
                            Sign in
                        </button>
                    </div>

                    {/* App Store Links */}
                    {/* <div className="flex items-center gap-3">
                        <a href="#" className="h-10">
                            <img
                                src="/appstore.png"
                                alt="Download on App Store"
                                className="h-10"
                            />
                        </a>
                        <a href="#" className="h-10">
                            <img
                                src="/googleplay.png"
                                alt="Get it on Google Play"
                                className="h-10"
                            />
                        </a>
                    </div> */}
                </div>

                {/* Center Links */}
                <div className="flex flex-col items-center gap-3 text-center text-sm text-gray-100 lg:flex-row lg:gap-6">
                    <a href="#" className="hover:text-emerald-500">FAQ</a>
                    <a href="#" className="hover:text-emerald-500">Events</a>
                    <a href="#" className="hover:text-emerald-500">Contact us</a>
                    <a href="#" className="hover:text-emerald-500">Guidelines</a>
                </div>

                {/* Right Socials */}
                <div className="flex gap-4 text-gray-200">
                    <FaFacebookF className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                    <FaLinkedinIn className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                    <FaInstagram className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                    {/* <FaXTwitter className="h-5 w-5 cursor-pointer hover:text-black" /> */}
                    <FaPinterestP className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                    <FaYoutube className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                    <FaTiktok className="h-5 w-5 cursor-pointer hover:text-emerald-600" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200 pt-6 text-center text-xs text-emerald-200 lg:text-left">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a href="#" className="hover:underline">Modern Slavery Act Statement</a>
                        <a href="#" className="hover:underline">Notice At Collection</a>
                        <a href="#" className="hover:underline">Accessibility at True meet</a>
                        <a href="#" className="hover:underline">Terms and conditions</a>
                        <a href="#" className="hover:underline">Privacy policy</a>
                        <a href="#" className="hover:underline">Manage cookies</a>
                        <a href="#" className="hover:underline">Washington Consumer Health Data Privacy Policy</a>
                        <a href="#" className="hover:underline">Careers</a>
                        <a href="#" className="hover:underline">Investors</a>
                        <a href="#" className="hover:underline">Seasonal Dating Guides</a>
                    </div>
                    <p className="mt-4 lg:mt-0">© 2025 - present. True meet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
