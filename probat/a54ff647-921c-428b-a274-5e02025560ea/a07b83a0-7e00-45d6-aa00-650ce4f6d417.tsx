import React from 'react';

interface HeroProps {
  label?: string;
  onClick?: () => void;
  probat?: { trackClick: () => void };
}

export default function Hero({ probat }: HeroProps) {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                            Welcome to my Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                            Your Name
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                        A passionate developer creating beautiful and functional web
                        applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            data-probat-conversion="true"
                            className="px-8 py-3 bg-white text-slate-700 border-2 border-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}