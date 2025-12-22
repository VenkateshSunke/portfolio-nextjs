import React from 'react';

export default function Hero({ probat }: { probat?: { trackClick: () => void } }) {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-[#F1F1F1]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium shadow-sm">
                            Welcome to my Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text text-transparent">
                            Your Name
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
                        A passionate developer creating beautiful and functional web
                        applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-transparent text-gray-600 border-2 border-gray-400 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}