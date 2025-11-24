export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST APIs"],
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Figma", "Agile", "CI/CD"],
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

