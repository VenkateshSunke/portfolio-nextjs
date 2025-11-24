export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            image: "🛒",
            link: "#",
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
            tech: ["React", "Node.js", "WebSocket", "MongoDB"],
            image: "📋",
            link: "#",
        },
        {
            title: "Weather Dashboard",
            description:
                "A beautiful weather dashboard that displays current conditions, forecasts, and weather maps with location search.",
            tech: ["Next.js", "API Integration", "Charts.js", "Tailwind CSS"],
            image: "☁️",
            link: "#",
        },
        {
            title: "Social Media Analytics",
            description:
                "Analytics dashboard for social media metrics with data visualization, insights, and reporting features.",
            tech: ["React", "Python", "FastAPI", "Chart.js"],
            image: "📊",
            link: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-6xl mb-4">{project.image}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

