"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import EarthCanvas from "../canvas/Earth";

export const Contact = () => {
    return (
        <div
            className="xl:mt-12 overflow-hidden flex flex-col md:flex-row gap-10 max-w-7xl mx-auto w-full px-6 py-20 z-[20] relative"
            id="contact"
        >
            <motion.div
                variants={slideInFromLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                className="flex-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm md:h-[550px] h-auto flex flex-col justify-evenly"
            >
                <div>
                    <p className="text-gray-400 font-outfit uppercase tracking-wider text-sm">
                        Get in touch
                    </p>
                    <h3 className="text-white font-orbitron font-black text-[30px] md:text-[40px]">
                        Contact.
                    </h3>
                </div>

                <form className="flex flex-col gap-6">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="What's your name?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="What's your email?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Message</span>
                        <textarea
                            rows={3}
                            name="message"
                            placeholder="What do you want to say?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none text-sm"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-sm"
                    >
                        Send
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.2)}
                initial="hidden"
                whileInView="visible"
                className="flex-1 md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};
