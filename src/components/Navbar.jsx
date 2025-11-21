import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <img src="/logo.png" alt="CortexLayer" className="h-10 w-10" />
                        <span className="text-2xl font-bold tracking-tighter text-white">CortexLayer<sup className="text-sm ml-0.5">™</sup></span>
                    </motion.div>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Services', 'Process', 'Pricing', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.lenis?.scrollTo(`#${item.toLowerCase()}`);
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <Link to="/book-consultation">
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Book Consultation
                    </motion.button>
                </Link>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="md:hidden text-white">
                    Menu
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
