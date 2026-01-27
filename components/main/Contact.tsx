"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import EarthCanvas from "../canvas/Earth";
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/biswajeetray077@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    _subject: "New Contact Form Submission from Portfolio"
                })
            });

            if (response.ok) {
                toast.success('Message sent successfully! I\'ll get back to you soon.', {
                    duration: 4000,
                    style: {
                        background: '#10b981',
                        color: '#fff',
                    },
                });
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again or email me directly.', {
                duration: 4000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="xl:mt-12 overflow-hidden flex flex-col md:flex-row gap-10 max-w-7xl mx-auto w-full px-6 py-20 z-[20] relative"
            id="contact"
        >
            <Toaster
                position="top-center"
                toastOptions={{
                    className: '',
                    style: {
                        zIndex: 9999,
                    },
                }}
                containerStyle={{
                    zIndex: 9999,
                }}
            />

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

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="What's your name?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="What's your email?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm">Your Message</span>
                        <textarea
                            rows={3}
                            name="message"
                            required
                            placeholder="What do you want to say?"
                            className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none text-sm"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
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
