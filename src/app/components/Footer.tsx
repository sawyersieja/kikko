const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center p-4 mt-8">
            <p>@ {new Date().getFullYear()} Sawyer Sieja. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="https://github.com/sawyersieja" target="_blank">GitHub</a>
                {/* <a href="mailto:your@email.com">Email</a> */}
            </div>
        </footer>
    );
};

export default Footer;