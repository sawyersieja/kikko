import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="dark:bg-gray-900 dark:text-white p-4">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-md xl:text-lg font-semibold hover:text-blue-400 transition-colors">Home</Link>
                <div className="space-x-4 md:space-x-8">
                    <Link href="/about" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">About</Link>
                    <Link href="/projects" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">Projects</Link>
                    <Link href="/contact" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">Contact</Link>
                    <ThemeToggle />
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;