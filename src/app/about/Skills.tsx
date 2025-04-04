const Skills = () => {

    const skills: { frequent: string[], improving: string[] } = {
        frequent: ["C++", "Java", "HTML", "CSS", "JavaScript"],
        improving: ["TypeScript", "Rust", "Solidity", "React", "Next.js", "Tailwind"]
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>

            <h3 className="text-xl font-medium mb-4 !text-blue-300">Competent</h3>
            <div className="flex flex-wrap gap-2">
                {skills.frequent.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-transparent text-blue-300 border border-blue-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-6 mb-4 !text-teal-300">Improving</h3>
            <div className="flex flex-wrap gap-2">
                {skills.improving.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-transparent text-teal-300 border border-teal-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-6 mb-2">Additional Exposure</h3>
            <p className="mb-6">Some experience with Web3 technologies, UI/UX, and minimal cloud development.</p>  
                   
        </section>
    );
};

export default Skills;