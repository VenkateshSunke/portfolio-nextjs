"use client";

import React from "react";
import { withExperiment } from "@probat/react";

const __PROBAT_COMPONENT_PATH__ = "app/components/Hero.tsx";

const HeroComponent = ({ probat }: { probat?: { trackClick: () => void } }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            Welcome to my Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Your Name
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        A passionate developer creating beautiful and functional web
                        applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            data-probat-conversion="true"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                            data-probat-conversion="true"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withExperiment<any>(HeroComponent as any, {
    componentPath: __PROBAT_COMPONENT_PATH__
} as any);
