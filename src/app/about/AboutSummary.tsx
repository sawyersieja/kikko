const AboutSummary = () => {
    return(
        <section>
            <h2 className="text-2xl text-foreground font-semibold mb-2">Who I am</h2>
            <p className="text-base sm:text-lg text-muted mb-6">My name is Sawyer, and I&apos;m a rising senior in <strong>Software Engineering</strong> at Cal State San Marcos. I helped run CSUSM&apos;s ACM and Cybersecurity Club, learned a ton, met great people, and picked up a few wins at hackathons and competitions.</p>
            <p className="text-base sm:text-lg text-muted mb-6">I build practical, secure products with the end user in mind. My current interests include <strong>Full-stack Development</strong>, <strong>Artificial Intelligence</strong>, and <strong>Blockchain</strong>.</p>
            <p className="text-base sm:text-lg text-muted mb-6">A recent highlight: at an AWS-hosted DxHub AI Camp at Cal Poly SLO, my team built a procurement-evaluation app in two days using AWS Bedrock (Anthropic&apos;s Claude 3.5 Sonnet) and Cursor. Work that used to take weeks of reading vendor bids dropped to minutes. I used to be skeptical about AI; now I treat it like any other tool—use it when it improves quality and speed, skip it when it doesn&apos;t. My goal is simple: ship reliable software, securely and responsibly, and in a way that makes people&apos;s lives better.</p>
        </section>
    );
};

export default AboutSummary;