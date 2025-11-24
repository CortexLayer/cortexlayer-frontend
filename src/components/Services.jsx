import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: "AI Support & Knowledge Bot",
        description: "Automate customer support using your own business data. 24/7 instant responses.",
        tech: ["RAG", "Vector DB", "LLM"],
        icon: Bot,
        colSpan: "col-span-1 lg:col-span-1",
        status: "active"
    },
    {
        title: "AI Lead & Meeting Agent",
        description: "Instantly reply to leads, qualify them, and auto-book calls on your calendar. Never miss an opportunity.",
        tech: ["Auto-Reply", "Calendar Sync", "CRM Integration"],
        icon: MessageSquare,
        colSpan: "col-span-1 lg:col-span-1",
        status: "coming-soon"
    },
    {
        title: "AI Product Tagging & Content AI",
        description: "Auto-tag product images and generate SEO descriptions at scale. Perfect for e-commerce.",
        tech: ["Computer Vision", "SEO Gen", "Bulk Processing"],
        icon: Tag,
        colSpan: "col-span-1 lg:col-span-1",
        status: "coming-soon"
    }
];

const Services = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/learn-more');
    };

    const handleTryDemo = () => {
        navigate('/try-demo');
    };

    return (
        <section id="services" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Intelligent Solutions
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Scalable AI infrastructure designed for real-world business impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const isActive = service.status === 'active';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 transition-all overflow-hidden ${service.colSpan} ${isActive
                                    ? 'hover:bg-white/10 cursor-pointer'
                                    : 'opacity-50 cursor-not-allowed'
                                    }`}
                            >
                                {/* Coming Soon Overlay */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl">
                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 rounded-full">
                                                <Sparkles className="w-5 h-5 text-indigo-400" />
                                                <span className="text-lg font-bold text-white">COMING SOON</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Active Badge */}
                                {isActive && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs font-bold text-green-400">Active</span>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 transform duration-500">
                                    <service.icon className="w-24 h-24" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                                        <service.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons - Only for Active Service */}
                                    {isActive && (
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={handleLearnMore}
                                                className="flex-1 px-6 py-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black font-bold rounded-lg hover:scale-105 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                                            >
                                                Learn More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={handleTryDemo}
                                                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                Try Demo
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
