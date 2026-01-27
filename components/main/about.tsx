"use client";

import React from "react";
import { FaBrain, FaCode, FaServer, FaCloud } from "react-icons/fa";



const ServiceCard = ({
    title,
    icon: Icon,
}: {
    title: string;
    icon: React.ElementType;
}) => {
    return (
        <div className="w-full  p-[1px] rounded-[20px] bg-gradient-to-r from-purple-500 to-cyan-500 shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-[#110C2A]">
                <Icon className="w-16 h-16 text-white object-contain mb-4" />
                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export const About = () => {
    const services = [
        {
            title: "AI/ML Engineer",
            icon: FaBrain,
        },
        {
            title: "Web Developer",
            icon: FaCode,
        },
        {
            title: "Generative AI Engineer",
            icon: FaServer,
        },
        {
            title: "DevOps Engineer",
            icon: FaCloud,
        },
    ];

    return (
        <section
            id="about-me"
            className="max-w-7xl mx-auto relative z-0 py-20 px-6 sm:px-16"
        >
            <div className="flex flex-col items-start justify-start w-full">
                <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-outfit">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-orbitron mb-4">
                    Overview.
                </h2>

                <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px] font-outfit font-light">
                    I&apos;m a skilled software developer with experience in TypeScript and
                    JavaScript, and expertise in frameworks like React, Node.js, and
                    custom AI solutions. I&apos;m a quick learner and collaborate closely
                    with clients to create efficient, scalable, and user-friendly
                    solutions that solve real-world problems. Let&apos;s work together to
                    bring your ideas to life!
                </p>
            </div>



            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
};
