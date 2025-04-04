const Hero = () => {
    return (
        <section 
        className="relative bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/images/hero-mountain.jpg')"}}
        >
            <div className="absolute backdrop-blur-xs inset-0 bg-black/30 z-0" />

            <div className="relative z-10 backdrop-blur-md bg-white/20 rounded-xl p-10 max-w-3xl mx-auto text-white shadow-xl">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    I&apos;m Sawyer, a Software Engineer
                </h1>
                <p className="mt-4 text-base sm:text-xl text-gray-300">
                    I build practical software that solves real problems - clean, secure, and user-focused.
                </p>
                <a href="/projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-medium animate-pulse hover:animate-none">
                    See My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;