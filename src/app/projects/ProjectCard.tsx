interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectProps ) => {

    const content = (
            
        <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-md flex flex-col justify-between h-full hover:ring-2 hover:ring-blue-400/50 hover:scale-[1.02] transition-all">
            <div>
                <h2 className="text-xl font-bold !text-blue-300 mb-2">{title}</h2>
                <p className="text-gray-100 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-transparent font-medium text-blue-300 border border-blue-300 rounded text-sm">
                            {item}
                        </span>
                    ))}
                </div>
                {!link && (
                    <p className="text-sm italic text-gray-500">Demo not publicly available.</p>
                )}
            </div>
        </div>
    );

    return link ? (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
        >
            {content}
        </a>
    ) : (
        content
    );
};

export default ProjectCard;