const Skills = () => {

    const skills: { confident: string[], familiar: string[], improving: string[] } = {
        confident: [
            "C++",
            "Java",
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git/Github",
            "Node.js",
            "AWS",
            "Amazon Bedrock",

        ],
        familiar: [
            "TypeScript",
            "Solidity",
            "Foundry",
            "Next.js",
            "Tailwind",
            "PHP",
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "Supabase",
            "Vercel",
            "Azure",
            "GCP",
            "Tableau",

        ],
        improving: [
            "Rust",
            "Go",
        ]
    };

    return (
        <section>
            <h2 className="text-2xl text-foreground font-semibold mb-2">Technical Skills</h2>

            <h3 className="text-xl font-bold mb-4 !text-green-500">Confident:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.confident.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-card text-green-500 font-bold border border-green-500 rounded text-sm drop-shadow-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4 !text-teal-400">Familiar:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.familiar.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-card text-teal-400 font-bold border border-teal-400 rounded text-sm drop-shadow-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4 !text-blue-400">Dabbling:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {skills.improving.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-card text-blue-400 font-bold border border-blue-400 rounded text-sm drop-shadow-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>
                   
        </section>
    );
};

export default Skills;