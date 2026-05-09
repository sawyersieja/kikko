import Link from "next/link";

const specialtyChips = ["Full-Stack", "Cloud", "AI", "Blockchain"];
const supportingChips = ["Cybersecurity", "Networking"];

const Hero = () => {
  return (
    <section className="relative flex-1 py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent" />

      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-2xl border border-border bg-card/90 p-8 shadow-lg backdrop-blur-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Hello, I&apos;m</p>

          <h1 className="mt-3 text-5xl font-black leading-tight text-foreground sm:text-6xl md:text-7xl">
            Sawyer
          </h1>

          <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">Software Engineer</p>

          <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
            I build practical software that helps people and teams solve real problems, with a focus on full-stack development and modern platforms. I&apos;m also experienced in cybersecurity and networking, which helps me design systems that are reliable, secure, and ready for production.
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Core Focus</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {specialtyChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Also Experienced In</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {supportingChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

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
      </div>
    </section>
  );
};

export default Hero;
