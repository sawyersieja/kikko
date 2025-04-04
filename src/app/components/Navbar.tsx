import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">Home</Link>
                <div className="space-x-4">
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;