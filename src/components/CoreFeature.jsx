import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Server, Share2, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Server,
        title: "Hosted Infrastructure",
        desc: "Fully managed GPU clusters & API gateways.",
        bgColor: "from-blue-500/20 to-indigo-500/20",
        stats: [
            { label: "GPU Clusters", val: "8", color: "text-blue-400" },
            { label: "API Calls/s", val: "12k", color: "text-indigo-400" },
            { label: "Latency", val: "12ms", color: "text-cyan-400" }
        ]
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        desc: "SOC2 compliant data handling & encryption.",
        bgColor: "from-green-500/20 to-emerald-500/20",
        stats: [
            { label: "Encrypted", val: "100%", color: "text-green-400" },
            { label: "SOC2", val: "✓", color: "text-emerald-400" },
            { label: "Audits", val: "24/7", color: "text-teal-400" }
        ]
    },
    {
        icon: Share2,
        title: "Seamless Integration",
        desc: "Connects with your existing tech stack instantly.",
        bgColor: "from-purple-500/20 to-pink-500/20",
        stats: [
            { label: "Integrations", val: "50+", color: "text-purple-400" },
            { label: "APIs", val: "REST", color: "text-pink-400" },
            { label: "Webhooks", val: "✓", color: "text-fuchsia-400" }
        ]
    }
];

const CoreFeature = () => {
    const containerRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                pin: true,
                pinSpacing: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (progress < 0.33) {
                        setActiveFeature(0);
                    } else if (progress < 0.66) {
                        setActiveFeature(1);
                    } else {
                        setActiveFeature(2);
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-black text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">

                    {/* Left Content - All Features Visible */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400 mb-6 w-fit">
                            <Zap className="w-3 h-3" />
                            <span>Production Ready</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                            The CortexLayer<sup className="text-3xl ml-1">™</sup> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                Engine
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
                            We are not freelancers. We are your AI implementation partner. We deliver hosted, maintained, and supported AI systems in under a week.
                        </p>

                        {/* Features List - All Visible with Scroll Transitions */}
                        <div className="space-y-6">
                            {features.map((item, i) => {
                                const Icon = item.icon;
                                const isActive = activeFeature === i;
                                const isPast = activeFeature > i;

                                return (
                                    <div
                                        key={i}
                                        className={`flex items-start gap-4 transition-all duration-700 ease-out ${isActive
                                            ? 'opacity-100 translate-y-0 scale-100'
                                            : isPast
                                                ? 'opacity-30 -translate-y-4 scale-95'
                                                : 'opacity-30 translate-y-4 scale-95'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-xl bg-white/5 border transition-all duration-500 ${isActive ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' : 'border-white/10'
                                            }`}>
                                            <Icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-indigo-400' : 'text-gray-400'
                                                }`} />
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-semibold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'
                                                }`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-sm transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-600'
                                                }`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex gap-2 mt-8">
                            {features.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 rounded-full transition-all duration-500 ${activeFeature === i ? 'w-12 bg-indigo-500' : 'w-8 bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Single Dashboard with Changing Colors */}
                    <div className="relative perspective-1000">
                        <div className="relative z-20 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 transition-all duration-700">
                            {/* Animated Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].bgColor} transition-all duration-1000`} />

                            {/* Window Header */}
                            <div className="relative h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between backdrop-blur-sm">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> cortex_engine_v2.0.exe
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="relative p-6 space-y-6 backdrop-blur-sm">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {features[activeFeature].stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="p-3 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm transition-all duration-500"
                                        >
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                                {stat.label}
                                            </div>
                                            <div className={`text-xl font-mono font-bold ${stat.color} transition-colors duration-500`}>
                                                {stat.val}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Visual Area */}
                                <div className="bg-black/40 rounded-lg border border-white/10 p-4 backdrop-blur-sm h-48 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className={`text-6xl font-bold mb-2 transition-colors duration-500 ${features[activeFeature].stats[0].color}`}>
                                            {features[activeFeature].stats[0].val}
                                        </div>
                                        <div className="text-sm text-gray-400 font-mono">
                                            {features[activeFeature].title}
                                        </div>
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className="flex items-center justify-between text-xs font-mono text-gray-400 bg-black/40 rounded-lg border border-white/10 p-3 backdrop-blur-sm">
                                    <span>Status: Active</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-green-400">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${features[activeFeature].bgColor} rounded-xl opacity-30 blur-xl -z-10 transition-all duration-1000`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreFeature;
