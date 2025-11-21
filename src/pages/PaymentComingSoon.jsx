import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Mail, Calendar } from 'lucide-react';

const PaymentComingSoon = () => {
    const location = useLocation();
    const plan = location.state?.plan;

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="CortexLayer" className="h-10 w-10" />
                        <span className="text-2xl font-bold tracking-tighter text-white">CortexLayer<sup className="text-sm ml-0.5">™</sup></span>
                    </Link>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Icon */}
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <Clock className="w-12 h-12 text-indigo-400" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Payment Portal
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Coming Soon
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We're putting the finishing touches on our secure payment infrastructure.
                        Our team will reach out to you shortly to complete your {plan?.name || 'selected'} plan enrollment.
                    </p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-left"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <Mail className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">We'll Contact You</h3>
                                    <p className="text-sm text-gray-400">
                                        Our team will email you within 24 hours with next steps and payment details.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-left"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <Calendar className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Schedule a Call</h3>
                                    <p className="text-sm text-gray-400">
                                        Book a consultation to discuss your requirements and timeline in detail.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Return to Home
                        </Link>
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Consultation
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-500 mt-12">
                        Questions? Email us at <a href="mailto:contact@cortexlayer.com" className="text-indigo-400 hover:text-indigo-300 underline">contact@cortexlayer.com</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PaymentComingSoon;
