import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-center text-foreground text-center px-4"
        >
            <Image
                src="/images/hero-waves-2560.webp" // You can keep this JPG for now!
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
            />
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