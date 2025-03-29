import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {   
        title: "Portfolio Website",
        description: "A personal portfolio project built with Next.js.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind"],
        link: "https://sawyersieja.com",
    },
    {   
        title: "eSDee",
        description: "Created a San Diego tourism and social media web application for a group project in my Web Programming class. ",
        tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
        link: "",
    },
    {
        title: "Coin Flip",
        description: "A project that simulates a coin flip, exploring attack vectors and consequences of pseudo-randomness.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js"],
        link: "https://github.com/sawyersieja/coinflip",
    },
    {
        title: "Fluther",
        description: "Created a Web3 Automated Payments Solution for the 2023 Consensys NAVH hackathon. Winner for Infura integration. Utilized particles.js to create animated background visuals.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js", "particles.js"],
        link: "https://github.com/kitfud/Fluther",
    },
    {
        title: "Elastic",
        description: "An NFT Rental Marketplace that enables leasing and borrowing of NFTs, utilizing smart contracts to set customizable and enforceable agreements.",
        tech: ["React", "JavaScript", "Solidity", "ethers.js"],
        link: "https://github.com/EWCunha/EthGlobal-nftRent-elastic",
    },
    {
        title: "Candy Lamps",
        description: "A Blockchain IoT Interface. Enables managing and modifying a colorful lighting system, payments, and associated funds. ",
        tech: ["React", "JavaScript", "Solidity", "C++", "ethers.js"],
        link: "https://github.com/kitfud/Fluther",
    },
    {
        title: "CSUSM Cybersecurity Club",
        description: "A static webpage made for the CSUSM Cybersecurity Club to display general information and resources.",
        tech: ["HTML", "Tailwind", "JavaScript"],
        link: "https://csusmcsc.github.io",
    },
];

const Projects = () => {
    return(
        <>
            <h1 className="text-4xl font-bold pb-6">Projects</h1>
            <p className="text-gray-300">Here are some of the projects I&apos;ve worked on.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div> 
        </>
    );
};

export default Projects;