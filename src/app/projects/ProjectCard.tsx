interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectProps ) => {

    const content = (

        <div className="bg-card border-1 border-foreground hover-border-secondary p-6 rounded-lg shadow-md flex flex-col justify-between h-full hover:ring-1 hover-ring-accent hover:scale-[1.02] transition-all">
            <div>
                <h2 className="text-xl font-bold text-secondary mb-2">{title}</h2>
                <p className="mb-4 text-muted">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-secondary border border-primary rounded text-sm font-bold tracking-wide">
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