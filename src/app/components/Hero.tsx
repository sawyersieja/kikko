import Link from "next/link";

const keywords = ["Software Engineer", "Full-Stack", "Cloud", "AI", "Blockchain", "Cybersecurity", "Networking"];

const Hero = () => {
  return (
    <section className="relative flex-1 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent" />

      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg backdrop-blur-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Hi, I'm Sawyer</p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Software Engineer
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            I build practical, secure software across full-stack, cloud, AI, and blockchain domains with hands-on cybersecurity and networking experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-transform hover-bg-accent hover:scale-[1.02]"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
