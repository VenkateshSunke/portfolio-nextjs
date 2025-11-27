export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                            Welcome to my Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
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
                            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}