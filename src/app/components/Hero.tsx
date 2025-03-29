const Hero = () => {
    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">I&apos;m Sawyer, a Software Engineer</h1>
                <p className="mt-4 text-base sm:text-lg text-gray-300">I create practical, impactful software with an eye for clean solutions and long-term value.</p>
                <a href="/projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-medium">
                    See My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;