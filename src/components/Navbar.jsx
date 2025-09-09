/*
* Top navigation bar containing logo and links for quick access.
* Provides easy navigation across sections of the landing page.
* */
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="#">SaaS Tool</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
                    <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Pricing</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (conditionally rendered) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Home</a>
                        <a href="#features" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Features</a>
                        <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Pricing</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;