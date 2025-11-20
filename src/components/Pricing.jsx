import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        desc: "Perfect for small businesses starting their automation journey.",
        features: [
            "Custom AI Chatbot",
            "Knowledge Base Integration",
            "Email Support Automation",
            "Weekly Performance Reports"
        ],
        highlight: false,
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
    },
    {
        name: "Growth",
        price: "$5,000",
        desc: "End-to-end automation for scaling teams.",
        features: [
            "Everything in Starter",
            "Multi-Agent Workflows",
            "CRM & Calendar Integration",
            "Lead Qualification Agent",
            "Priority Support"
        ],
        highlight: true,
        borderColor: "border-indigo-500",
        glowColor: "shadow-indigo-500/50"
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Bespoke AI infrastructure for large organizations.",
        features: [
            "Full Custom Development",
            "Private LLM Hosting",
            "SLA & 24/7 Support",
            "On-premise Deployment Options",
            "Dedicated Account Manager"
        ],
        highlight: false,
        borderColor: "border-purple-500",
        glowColor: "shadow-purple-500/50"
    }
];

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(1); // Default to Growth plan

    return (
        <section id="pricing" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        One-time setup fees. Optional monthly maintenance. No hidden costs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        const isSelected = selectedPlan === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-8 rounded-2xl border-2 flex flex-col cursor-pointer transition-all duration-500 ${isSelected
                                        ? `${plan.borderColor} bg-white/10 shadow-2xl ${plan.glowColor} scale-105`
                                        : plan.highlight
                                            ? "bg-white/5 border-white/20 hover:border-white/40"
                                            : "bg-black border-white/10 hover:border-white/20"
                                    }`}
                                whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Animated Background Glow for Selected Card */}
                                {isSelected && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-blue-500/20 to-cyan-500/20' :
                                                index === 1 ? 'from-indigo-500/20 to-purple-500/20' :
                                                    'from-purple-500/20 to-pink-500/20'
                                            } -z-10 blur-xl`}
                                    />
                                )}

                                {/* Most Popular Badge */}
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                {/* Selection Indicator */}
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        <Check className="w-5 h-5 text-white" />
                                    </motion.div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-200'
                                        }`}>
                                        {plan.name}
                                    </h3>
                                    <div className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-100'
                                        }`}>
                                        {plan.price}
                                    </div>
                                    <p className="text-gray-400 text-sm">{plan.desc}</p>
                                </div>

                                <div className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            className="flex items-center gap-3 text-sm text-gray-300"
                                        >
                                            <Check className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-green-400' : 'text-gray-500'
                                                }`} />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${isSelected
                                            ? "bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black hover:shadow-lg"
                                            : plan.highlight
                                                ? "bg-white text-black hover:bg-gray-200"
                                                : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    {isSelected ? 'Selected Plan' : 'Get Started'}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
