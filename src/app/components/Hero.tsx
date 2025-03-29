const Hero = () => {
    return (
        <section className="flex-1 flex flex-col justify-center bg-gray-800 text-white text-center px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    I&apos;m Sawyer, a Software Engineer
                </h1>
                <p className="mt-4 text-base sm:text-xl text-gray-300">
                    I build practical software that solves real problems - clean, secure, and user-focused.
                </p>
                <a href="/projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-medium animate-pulse">
                    See My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;