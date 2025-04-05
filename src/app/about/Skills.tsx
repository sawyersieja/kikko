const Skills = () => {

    const skills: { confident: string[], familiar: string[], improving: string[] } = {
        confident: ["C++", "Java", "HTML", "CSS", "JavaScript", "Git"],
        familiar: ["TypeScript", "Solidity", "React", "Next.js", "Tailwind", "PHP", "MySQL"],
        improving: ["Python", "Rust", "Node.js"]
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>

            <h3 className="text-xl font-medium mb-4 !text-green-400">Confident:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.confident.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-transparent text-green-400 font-medium border border-green-500 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-6 mb-4 !text-teal-300">Familiar:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.familiar.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-transparent text-teal-300 font-medium border border-teal-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-6 mb-4 !text-blue-300">Improving:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {skills.improving.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-transparent text-blue-300 font-medium border border-blue-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>
                   
        </section>
    );
};

export default Skills;