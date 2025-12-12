export default function About({ probat }: { probat?: { trackClick: () => void } }) {
    return (
        <section
            id="about"
            className="py-20 bg-[#F1F1F1]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-[#888888] mx-auto rounded"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-64 h-64 mx-auto bg-[#888888] rounded-full flex items-center justify-center text-white text-6xl font-bold">
                                YN
                            </div>
                        </div>
                        <div className="space-y-4 text-lg text-gray-700">
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
}