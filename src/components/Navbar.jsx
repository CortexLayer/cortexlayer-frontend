import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = () => {
        if (location.pathname === '/') {
            // Already on homepage, just scroll
            window.lenis?.scrollTo('#contact');
        } else {
            // Navigate to homepage first, then scroll
            navigate('/');
            setTimeout(() => {
                window.lenis?.scrollTo('#contact');
            }, 100);
        }
    };

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
                        <img src="/cortexlayer.png" alt="CortexLayer" className="h-10 w-10" />
                        <span className="text-2xl font-bold tracking-tighter text-white">CortexLayer<sup className="text-sm ml-0.5">™</sup></span>
                    </motion.div>
                </Link>

                {/* CTA */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleContactClick}
                    className="px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
                >
                    Contact Us
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
