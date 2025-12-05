import React from 'react';

export default function Hero({ probat }: { probat?: { trackClick: () => void } }) {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
                            Welcome to my Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Hi, I'm{" "}
                        <span className="text-[#888888]">
                            Your Name
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        A passionate developer creating beautiful and functional web
                        applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}