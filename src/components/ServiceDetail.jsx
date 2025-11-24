import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, MessageCircle, BarChart3, Mail, Send, Zap, Users, Globe, Shield, Check } from 'lucide-react';

const pricingPlans = [
    {
        name: "Starter",
        setupPrice: "$399",
        monthlyPrice: "$79",
        description: "Perfect for small businesses getting started with AI support",
        features: [
            "Web chatbot",
            "10 documents",
            "1,000 conversations/month",
            "Basic analytics",
            "Email fallback"
        ],
        highlight: false,
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
    },
    {
        name: "Growth",
        setupPrice: "$899",
        monthlyPrice: "$199",
        description: "Advanced features for scaling support operations",
        features: [
            "WhatsApp integration",
            "50 docs",
            "5,000 conversations/month",
            "Advanced analytics",
            "Human handoff",
            "Custom branding"
        ],
        highlight: true,
        borderColor: "border-indigo-500",
        glowColor: "shadow-indigo-500/50"
    },
    {
        name: "Scale",
        setupPrice: "$1,499",
        monthlyPrice: "$349",
        description: "Enterprise-grade support automation",
        features: [
            "CRM integration",
            "Unlimited docs",
            "API keys",
            "Multilingual",
            "SLA 99.5%",
            "Dedicated success manager"
        ],
        highlight: false,
        borderColor: "border-purple-500",
        glowColor: "shadow-purple-500/50"
    }
];

const howItWorksSteps = [
    {
        number: "01",
        title: "Upload data",
        description: "Share your knowledge base, FAQs, and support documentation",
        icon: FileText
    },
    {
        number: "02",
        title: "We index & build",
        description: "Our AI processes and structures your data for optimal responses",
        icon: Zap
    },
    {
        number: "03",
        title: "Deploy in 7 days",
        description: "Your custom AI support bot goes live on your channels",
        icon: Send
    },
    {
        number: "04",
        title: "Scale & optimize",
        description: "Continuous learning and improvement based on real conversations",
        icon: BarChart3
    }
];

const keyFeatures = [
    {
        icon: Bot,
        title: "RAG-Powered Intelligence",
        description: "Retrieval-Augmented Generation ensures accurate, context-aware responses from your data"
    },
    {
        icon: MessageCircle,
        title: "Multi-Channel Support",
        description: "Deploy across web, WhatsApp, email, and integrate with your existing platforms"
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Track performance, conversation quality, and customer satisfaction in real-time"
    },
    {
        icon: Users,
        title: "Human Handoff",
        description: "Seamlessly transfer complex queries to your support team when needed"
    },
    {
        icon: Globe,
        title: "Multilingual Support",
        description: "Serve customers in their preferred language with automatic translation"
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC2 compliant with end-to-end encryption and GDPR compliance"
    }
];

const ServiceDetail = () => {
    const [selectedPlan, setSelectedPlan] = useState(1); // Default to Growth

    return (
        <section id="service-detail" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-green-400 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Active Service</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        AI Support & Knowledge Bot
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Transform your customer support with AI-powered automation. Deploy a custom chatbot trained on your business data in under 7 days.
                    </p>
                </motion.div>

                {/* Key Features Grid */}
                <div className="mb-32">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center"
                    >
                        Key Features
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* How It Works */}
                <div className="mb-32">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center"
                    >
                        How It Works
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-white/5 mb-4">{step.number}</div>
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 flex items-center justify-center mb-4">
                                    <step.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                {index < howItWorksSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent -translate-x-6" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pricing Plans */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                            Pricing Plans
                        </h3>
                        <p className="text-xl text-gray-400">
                            One-time setup fee + monthly subscription. No hidden costs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => {
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
                                        <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                                        <div className="mb-4">
                                            <div className="text-4xl font-bold mb-1">
                                                {plan.setupPrice} <span className="text-lg text-gray-400">setup</span>
                                            </div>
                                            <div className="text-2xl font-bold text-gray-300">
                                                {plan.monthlyPrice} <span className="text-sm text-gray-500">/month</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm">{plan.description}</p>
                                    </div>

                                    <div className="flex-grow space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                                <Check className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-green-400' : 'text-gray-500'
                                                    }`} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${isSelected
                                                ? "bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black hover:shadow-lg"
                                                : plan.highlight
                                                    ? "bg-white text-black hover:bg-gray-200"
                                                    : "bg-white/10 text-white hover:bg-white/20"
                                            }`}
                                    >
                                        {isSelected ? 'Get Started' : 'Select Plan'}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
