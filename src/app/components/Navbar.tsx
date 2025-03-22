import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/" className="text-lg font-bold">Home</Link>
                <div className="space-x-4">
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;