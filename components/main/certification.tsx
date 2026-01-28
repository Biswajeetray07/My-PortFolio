"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        title: "IBM AI Engineering Professional Certificate",
        provider: "Coursera",
        period: "Sep 2024 - Jan 2025",
        description: "Mastered machine learning, deep learning, and AI engineering concepts.",
        iconColor: "bg-purple-500"
    },
    {
        title: "Cloud Computing",
        provider: "NPTEL",
        period: "Oct 2024 - Dec 2024",
        description: "Gained in-depth knowledge of cloud infrastructure and services.",
        iconColor: "bg-pink-500"
    },
    {
        title: "GenAI for Everyone",
        provider: "Coursera",
        period: "Feb 2024 - Mar 2024",
        description: "Explored generative AI applications and prompt engineering strategies.",
        iconColor: "bg-blue-500"
    },
    {
        title: "Prompt Engineering for ChatGPT",
        provider: "Coursera",
        period: "Jan 2024 - Mar 2024",
        description: "Developed skills in crafting effective prompts for LLMs.",
        iconColor: "bg-cyan-500"
    }
];

export const Certification = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate timeline line
            gsap.fromTo(".timeline-line",
                { scaleY: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: 1
                    },
                    scaleY: 1,
                    transformOrigin: "top center",
                    ease: "none"
                });

            // Animate cards
            gsap.fromTo(".cert-card",
                { x: (index) => index % 2 === 0 ? -50 : 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out"
                });

            // Animate timeline dots
            gsap.fromTo(".timeline-dot",
                { scale: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    scale: 1,
                    stagger: 0.2,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="certifications" className="py-24 px-6 relative overflow-hidden" ref={containerRef}>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4" style={{
                        letterSpacing: '-0.02em',
                        textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
                    }}>
                        My{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">Professional achievements and qualifications</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
                        <div className="timeline-line absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" style={{
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                        }}></div>
                    </div>

                    {/* Certification Cards */}
                    <div className="space-y-12">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Card */}
                                <div className={`cert-card w-full md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div
                                        className="relative bg-gradient-to-br from-[#1a0b38]/95 via-[#0F0529]/95 to-[#1a0b38]/95 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border-2 border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group"
                                        style={{
                                            boxShadow: `
                                                0 0 0 1px rgba(168, 85, 247, 0.2),
                                                0 20px 40px -10px rgba(0, 0, 0, 0.6),
                                                inset 0 2px 0 rgba(255, 255, 255, 0.1)
                                            `
                                        }}
                                    >
                                        {/* Top Accent */}
                                        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-2xl ${cert.iconColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`} style={{
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                            }}>
                                                {cert.title[0]}
                                            </div>
                                            <span className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1.5 rounded-full bg-black/30">
                                                {cert.period}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors" style={{
                                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                                        }}>
                                            {cert.title}
                                        </h3>
                                        <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                                            {cert.provider}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            {cert.description}
                                        </p>

                                        {/* Decorative Accents */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl"></div>
                                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-xl"></div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-[#0a0320] hidden md:block" style={{
                                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.4)'
                                }}></div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
