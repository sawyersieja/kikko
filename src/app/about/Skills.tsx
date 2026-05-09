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

            <h3 className="text-xl font-bold mb-4 text-success">Confident:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.confident.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-surface text-success font-semibold border border-success rounded-md text-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4 text-info">Familiar:</h3>
            <div className="flex flex-wrap gap-2">
                {skills.familiar.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-surface text-info font-semibold border border-info rounded-md text-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4 text-brand">Dabbling:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {skills.improving.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-surface text-brand font-semibold border border-brand rounded-md text-sm tracking-wide">
                        {skill}
                    </span>
                ))}
            </div>
                   
        </section>
    );
};

export default Skills;
