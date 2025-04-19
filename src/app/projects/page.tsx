import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

const projects: Project[] = [
    {   
        title: "Portfolio Website",
        description: "A modern personal portfolio built with Next.js and TypeScript to showcase my work, skills, and experience. Focused on clean UI, responsive design, and maintainable code.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind"],
        link: "https://sawyersieja.com",
    },
    {   
        title: "eSDee",
        description: "A San Diego tourism web app developed as a group project. I built the frontend and implemented a MySQL/PHP backend. This project involved building location-based features and a content-sharing system.",
        tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    },
    {
        title: "Coin Flip",
        description: "A Web3 coin flipping game exploring randomness and smart contract predictability. This project highlights common vulnerabilities in Solidity-based psuedo-random systems.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js"],
        link: "https://github.com/sawyersieja/coinflip",
    },
    {
        title: "Fluther",
        description: "A Web3 automated payments system built for the Consensys NAVH 2023 hackathon. Integrated animated background with particles.js and won for best Infura integration.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js", "particles.js"],
        link: "https://github.com/kitfud/Fluther",
    },
    {
        title: "Elastic",
        description: "An NFT rental marketplace enabling secure lending and borrowing of NFTs via custom smart contracts. Built for HackFS 2022, where our team was offered a grant for further development.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js"],
        link: "https://github.com/EWCunha/EthGlobal-nftRent-elastic",
    },
    {
        title: "Candy Lamps",
        description: "A Blockchain-IoT hybrid project controlling a colorful lamp system via smart contracts. Users could remotely trigger lighting changes and manage funds through an Ethereum-based UI.",
        tech: ["React", "JavaScript", "Solidity", "C++", "ethers.js"],
        link: "https://github.com/kitfud/Fluther",
    },
    
];

const Projects = () => {
    return(
        <>
            <h1 className="text-4xl text-foreground font-bold mt-10 mb-6">Projects</h1>
            <p className="text-muted font-medium mb-6">Here are some of the projects I&apos;ve worked on.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div> 
        </>
    );
};

export default Projects;