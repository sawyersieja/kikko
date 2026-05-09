import Link from "next/link";

const focusAreas = [
  {
    title: "Software Engineering",
    description: "Building maintainable applications with clean architecture and dependable delivery.",
  },
  {
    title: "Cybersecurity",
    description: "Designing systems with secure defaults, practical threat awareness, and resilient controls.",
  },
  {
    title: "Networking",
    description: "Connecting services and infrastructure with performance, observability, and reliability in mind.",
  },
];

const Hero = () => {
  return (
    <section className="relative flex-1 py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent" />

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="rounded-2xl border border-border bg-card/85 p-8 shadow-lg backdrop-blur-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Hello, I&apos;m Sawyer
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            I build secure, reliable technology that solves real problems.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
            I&apos;m a software engineer focused on practical systems design, cybersecurity, and networking. This site is where I share projects, experience, and the work I&apos;m most proud of.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-transform hover-bg-accent hover:scale-[1.02]"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover-border-accent"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
