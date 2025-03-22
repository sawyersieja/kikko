import ProjectCard from "./ProjectCard";

const projects = [
    { title: "Portfolio Website", description: "A personal portfolio built with Next.js.", link: "https://example.com" },
    { title: "Cool Web App", description: "An interactive app showcasing my skills.", link: "https://example.com" },
];

const Projects = () => {
    return(
        <main className="p-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="grid gap-4 mt-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;