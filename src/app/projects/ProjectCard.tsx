const ProjectCard = ({ title, description, tech, link }: { title: string; description: string; tech: string[], link: string }) => {
    return (
        <div className="border p-4 rounded-lg bg-gray-100 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="text-gray-700">
                {tech.map((item, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded text-xs">
                        {item}
                    </span>
                ))}
            </div>
            <a href={link} target="_blank" className="text-blue-600 mt-2 inline-block">View Project →</a>
        </div>
    );
};

export default ProjectCard;