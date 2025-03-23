const Skills = () => {

    const skills: { frequent: string[], improving: string[] } = {
        frequent: ["C++", "Java", "HTML", "CSS", "JavaScript"],
        improving: ["TypeScript", "Rust", "Solidity", "React", "Next.js", "Tailwind"]
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold">Technical Skills</h2>

            <h3 className="text-xl font-medium mt-4">Frequently Used & Competent With</h3>
            <div className="flex flex-wrap gap-2">
                {skills.frequent.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-4">Working With & Improving</h3>
            <div className="flex flex-wrap gap-2">
                {skills.improving.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-400 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-medium mt-4">Additional Exposure</h3>
            <p>Some experience with Web3 technologies, UI/UX, and minimal cloud development.</p>  
                   
        </section>
    );
};

export default Skills;