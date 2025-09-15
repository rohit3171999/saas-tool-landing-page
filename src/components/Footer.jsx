/*
* Description: Bottom section with legal links and optional social icons.
* Purpose: Provides additional navigation, compliance info, and branding consistency.
*/

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Footer Links */}
                    <nav className="flex flex-wrap justify-center md:justify-start space-x-6 mb-6 md:mb-0">
                        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
                        <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6">
                        {/* Twitter Icon */}
                        <a href="https://twitter.com" className="hover:text-white transition-colors duration-300">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."></path>
                            </svg>
                        </a>

                        {/* GitHub Icon */}
                        <a href="https://github.com" className="hover:text-white transition-colors duration-300">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477..."></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} SaaS Tool. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
