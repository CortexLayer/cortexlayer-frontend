import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const DemoPlaceholder = () => {
    return (
        <section id="demo-section" className="py-32 bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Sparkles className="w-10 h-10 text-indigo-400" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Live Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">(Coming Soon)</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        The demo feature will be activated once backend deployment is complete.
                    </p>

                    {/* Additional Info */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <span>In Development</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoPlaceholder;
