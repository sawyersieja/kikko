import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="bg-navbar text-foreground py-3 shadow">
            <Container className="flex flex-wrap items-center justify-between gap-3">
                <Link
                    href="/"
                    className="text-base md:text-lg font-semibold hover-text-accent transition-colors"
                >
                    Home
                </Link>

                <div className="flex flex-1 items-center justify-end gap-3 sm:gap-5 md:gap-7 min-w-0">
                    <ThemeToggle />

                    <Link
                        href="/about"
                        className="text-sm sm:text-base lg:text-lg font-semibold hover-text-accent transition-colors whitespace-nowrap"
                    >
                        About
                    </Link>

                    <Link
                        href="/projects"
                        className="text-sm sm:text-base lg:text-lg font-semibold hover-text-accent transition-colors whitespace-nowrap"
                    >
                        Projects
                    </Link>

                    <Link
                        href="/contact"
                        className="text-sm sm:text-base lg:text-lg font-semibold hover-text-accent transition-colors whitespace-nowrap"
                    >
                        Contact
                    </Link>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
