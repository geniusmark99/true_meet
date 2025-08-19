"use client";

import Image from "next/image";
import React from "react";

const FeatureWidget = () => {
    return (
        <section className="w-full bg-linear-120 from-emerald-400 to-green-500 py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        BRING YOUR <br /> BAR BACK <br /> UP TO WHERE <br /> IT BELONGS
                    </h2>
                    <p className="mt-4 text-lg text-gray-800">
                        You deserve better, so we&apos;ve designed great ways for you to
                        date more and stress less.
                    </p>
                    <button className="mt-6 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800">
                        See what&apos;s new
                    </button>
                </div>

                <div className="md:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/landing-section.webp"
                            alt="Happy user"
                            width={600}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureWidget;


