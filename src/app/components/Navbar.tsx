import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="bg-navbar text-foreground p-4 shadow">
            <Container className="flex justify-between items-center">
                <Link 
                    href="/"
                    className="text-md xl:text-lg font-semibold hover-text-accent transition-colors"
                >
                    Home
                </Link>

                <div className="space-x-4 md:space-x-8">
                    <ThemeToggle />
                    
                    <Link 
                        href="/about"
                        className="text-md lg:text-lg font-semibold hover-text-accent transition-colors"
                    >
                        About
                    </Link>
                    
                    <Link
                        href="/projects"
                        className="text-md lg:text-lg font-semibold hover-text-accent transition-colors"
                    >
                        Projects
                    </Link>

                    <Link
                        href="/contact"
                        className="text-md lg:text-lg font-semibold hover-text-accent transition-colors"
                    >
                        Contact
                    </Link>

                </div>
            </Container>
        </nav>
    );
};

export default Navbar;