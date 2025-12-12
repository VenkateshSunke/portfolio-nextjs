"use client";

import React from "react";
import { withExperiment } from "@probat/react";

const __PROBAT_COMPONENT_PATH__ = "app/components/About.tsx";

interface AboutProps {
    probat?: { trackClick: () => void };
}

const AboutComponent: React.FC<AboutProps> = ({ probat }) => {
    return (
        <section
            id="about"
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                                YN
                            </div>
                        </div>
                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                I'm a passionate full-stack developer with a love for creating
                                beautiful and functional web applications. I enjoy turning complex
                                problems into simple, elegant solutions.
                            </p>
                            <p>
                                With experience in modern web technologies, I specialize in
                                building responsive, performant applications that provide great
                                user experiences.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open source projects, or sharing knowledge with the
                                developer community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withExperiment<any>(AboutComponent as any, {
    componentPath: __PROBAT_COMPONENT_PATH__
} as any);
