const Footer = () => {
    return (
        <footer className="bg-footer text-foreground text-center p-4">
            <p>{new Date().getFullYear()} Sawyer Sieja. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a 
                    className="hover-text-accent transition-colors font-semibold"
                    href="https://github.com/sawyersieja"
                    target="_blank"
                >
                    GitHub
                </a>

                <a
                    className="hover-text-accent transition-colors font-semibold"
                    href="/contact"
                >
                    Email
                </a>

            </div>
        </footer>
    );
};

export default Footer;