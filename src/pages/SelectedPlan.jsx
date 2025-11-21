import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft, Zap, Shield, Headphones } from 'lucide-react';

const SelectedPlan = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const plan = location.state?.plan;

    // If no plan is selected, redirect to home
    if (!plan) {
        navigate('/');
        return null;
    }

    const handleProceed = () => {
        navigate('/payment-coming-soon', { state: { plan } });
    };

    const benefits = [
        { icon: Zap, title: "Fast Delivery", desc: "Implementation in under 7 days" },
        { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant infrastructure" },
        { icon: Headphones, title: "Dedicated Support", desc: "Direct access to our team" }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/cortexlayer.png" alt="CortexLayer" className="h-10 w-10" />
                        <span className="text-2xl font-bold tracking-tighter text-white">CortexLayer<sup className="text-sm ml-0.5">™</sup></span>
                    </Link>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-400 mb-6">
                            <Check className="w-4 h-4" />
                            <span>Plan Selected</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            {plan.name} Plan
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {plan.desc}
                        </p>
                    </motion.div>

                    {/* Plan Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Left: Pricing & Features */}
                            <div>
                                <div className="mb-8">
                                    <div className="text-sm text-gray-400 mb-2">Investment</div>
                                    <div className="text-5xl font-bold mb-2">{plan.price}</div>
                                    <div className="text-sm text-gray-400">One-time setup fee</div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold mb-4">What's Included</h3>
                                    {plan.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Benefits */}
                            <div>
                                <h3 className="text-xl font-bold mb-6">Why Choose This Plan?</h3>
                                <div className="space-y-6">
                                    {benefits.map((benefit, i) => {
                                        const Icon = benefit.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <Icon className="w-5 h-5 text-indigo-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                                                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                    <p className="text-sm text-indigo-300">
                                        <strong>Next Steps:</strong> Proceed to complete your plan selection.
                                        Our secure payment portal will guide you through the final steps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            You've selected the <strong>{plan.name}</strong> plan. Click below to proceed to the next step
                            and begin your AI automation journey with CortexLayer<sup className="text-sm ml-0.5">™</sup>.
                        </p>

                        <button
                            onClick={handleProceed}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                        >
                            Proceed to Payment <ArrowRight className="w-5 h-5" />
                        </button>

                        <p className="text-xs text-gray-500 mt-6">
                            Secure checkout powered by industry-leading payment processors
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SelectedPlan;
