interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectProps ) => {

    const content = (
            
        <div className="bg-card text-foreground border border-border p-6 rounded-lg shadow-md flex flex-col justify-between h-full hover:ring-2 hover:ring-accent/50 hover:scale-[1.02] transition-all">
            <div>
                <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-primary border border-primary rounded text-sm font-medium">
                            {item}
                        </span>
                    ))}
                </div>
                {!link && (
                    <p className="text-sm italic text-muted">Demo not publicly available.</p>
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