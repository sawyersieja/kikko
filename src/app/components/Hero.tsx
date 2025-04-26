import Link from "next/link";

const Hero = () => {
    return (
        <section 
            className="relative bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-center text-foreground text-center px-4"
            style={{ backgroundImage: "url('/images/hero-waves.jpg')"}}
        >
            <div className="absolute inset-0 z-0 bg-white/60 dark:bg-black/30" />

            <div className="relative z-10 bg-gray-700/40 backdrop-blur-xs rounded-xl p-10 max-w-3xl mx-auto shadow-xl">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white drop-shadow-md">
                    I&apos;m Sawyer, a Software Engineer
                </h1>
                <p className="mt-4 text-base sm:text-xl text-white drop-shadow-sm">
                    I build reliable, scalable, and secure software - always with the end user in mind.
                </p>
                <Link 
                    href="/projects"
                    className="mt-6 inline-block px-6 py-3 bg-primary hover-bg-accent hover:scale-[1.02] transition-all rounded-lg font-medium text-white shadow-md"
                >
                    See My Work
                </Link>
            </div>
        </section>
    );
};

export default Hero;