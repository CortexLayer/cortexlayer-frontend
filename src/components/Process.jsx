import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Cloud } from 'lucide-react';

const steps = [
    {
        icon: Zap,
        title: "Stage 1: AI Services",
        desc: "Launch with 3 fixed AI automation services. Clear deliverables, transparent pricing, and quick client results in under a week.",
        badge: "Current"
    },
    {
        icon: Wrench,
        title: "Stage 2: Custom AI Solutions",
        desc: "Handle deeper ML, computer vision, and predictive AI projects with ongoing maintenance and higher-tier support.",
        badge: "Coming Soon"
    },
    {
        icon: Cloud,
        title: "Stage 3: SaaS Platform",
        desc: "Convert best-selling services into self-serve SaaS with API-based pricing and automated deployment.",
        badge: "Future"
    }
];

const Process = () => {
    return (
        <section id="process" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Our Evolution
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From productized AI services to a scalable SaaS platform — built lean, remote-first, and profitable.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 group"
                            >
                                <div className="bg-black border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors h-full flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-gray-400 border border-black">
                                        0{index + 1}
                                    </div>

                                    {/* Badge */}
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${step.badge === 'Current'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                            : step.badge === 'Coming Soon'
                                                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                                                : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                                        }`}>
                                        {step.badge}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
