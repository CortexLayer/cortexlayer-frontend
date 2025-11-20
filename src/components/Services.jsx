import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Tag } from 'lucide-react';

const services = [
    {
        title: "AI Support & Knowledge Bot",
        description: "Automate customer support using your own business data. 24/7 instant responses.",
        tech: ["RAG", "Vector DB", "LLM"],
        icon: Bot,
        colSpan: "col-span-1 lg:col-span-1"
    },
    {
        title: "AI Lead & Meeting Agent",
        description: "Instantly reply to leads, qualify them, and auto-book calls on your calendar. Never miss an opportunity.",
        tech: ["Auto-Reply", "Calendar Sync", "CRM Integration"],
        icon: MessageSquare,
        colSpan: "col-span-1 lg:col-span-1"
    },
    {
        title: "Product Tagging & Content",
        description: "Auto-tag product images and generate SEO descriptions at scale. Perfect for e-commerce.",
        tech: ["Computer Vision", "SEO Gen", "Bulk Processing"],
        icon: Tag,
        colSpan: "col-span-1 lg:col-span-1"
    }
];

const Services = () => {
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden ${service.colSpan}`}
                        >
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

                                <div className="flex flex-wrap gap-2">
                                    {service.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
