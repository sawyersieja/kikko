const CTA = () => {
    return(
        <div className="mt-6 text-center">
            <h2 className="text-2xl text-foreground font-semibold mb-2">Interested in my work?</h2>
            <p className="text-base text-muted mb-10">
                Check out my{" "}
                <a href="/projects" className="text-primary hover-text-accent hover:underline">projects</a> or <a href="/contact" className="text-primary hover-text-accent hover:underline">reach out</a>!</p>
        </div>
    );
};

export default CTA;