const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
    return (
        <div className="border p-4 rounded-lg bg-gray-100 shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <a href={link} target="_blank" className="text-blue-600 mt-2 inline-block">View Project →</a>
        </div>
    );
};

export default ProjectCard;