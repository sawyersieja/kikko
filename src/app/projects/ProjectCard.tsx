interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectProps ) => {
    return (
        <div className="border p-4 rounded-lg bg-gray-900 shadow-md">
            <h2 className="text-xl pb-4 font-bold !text-blue-300">{title}</h2>
            <p className="text-gray-100 pb-6">{description}</p>
            <div className="text-gray-800">
                {tech.map((item, index) => (
                    <span key={index} className="mr-2 last:mr-0 px-2 py-1 bg-transparent text-blue-300 border border-blue-300 rounded text-xs">
                        {item}
                    </span>
                ))}
            </div>
            <a href={link} target="_blank" className="text-blue-300 mt-6 mb-4 inline-block">View Project →</a>
        </div>
    );
};

export default ProjectCard;