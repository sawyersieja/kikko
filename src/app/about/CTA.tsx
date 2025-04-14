const CTA = () => {
    return(
        <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold mb-2 text-primary">Interested in my work?</h2>
            <p className="text-base text-muted mb-10">
                Check out my{" "}
                <a href="/projects" className="text-accent hover:underline">projects</a> or <a href="/contact" className="text-accent hover:underline">reach out</a>!</p>
        </div>
    );
};

export default CTA;