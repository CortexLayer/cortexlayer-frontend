import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TryDemo = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white">
                <section className="py-32">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8">
                                <Sparkles className="w-10 h-10 text-indigo-400" />
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                                Live Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">(Coming Soon)</span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                                The demo feature will be activated once backend deployment is complete.
                            </p>

                            {/* Additional Info */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-12">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                <span>In Development</span>
                            </div>

                            {/* CTA */}
                            <div className="space-y-4">
                                <p className="text-gray-500">Want to learn more about our AI Support Bot?</p>
                                <button
                                    onClick={() => navigate('/learn-more')}
                                    className="px-8 py-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black font-bold rounded-lg hover:scale-105 transition-all hover:shadow-lg"
                                >
                                    Explore Features & Pricing
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default TryDemo;
