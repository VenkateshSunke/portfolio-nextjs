export default function About(props: any) {
    return (
        <section
            id="about"
            className="py-20 bg-white"
            {...props}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="order-2 md:order-1 space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    About Me
                                </h2>
                                <div className="w-24 h-1 bg-[#888888] rounded"></div>
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
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <div className="w-64 h-64 bg-[#F1F1F1] border-4 border-[#888888] rounded-full flex items-center justify-center text-[#888888] text-6xl font-bold">
                                YN
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}