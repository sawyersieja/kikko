import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-md xl:text-lg font-semibold hover:text-blue-400 transition-colors">Home</Link>
                <div className="space-x-4 md:space-x-8">
                    <Link href="/about" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">About</Link>
                    <Link href="/projects" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">Projects</Link>
                    <Link href="/contact" className="text-md lg:text-lg font-semibold hover:text-blue-400 transition-colors">Contact</Link>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;