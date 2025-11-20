import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out"
            });

            gsap.from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Simple Particle Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-24">
                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 leading-tight">
                    Deploy AI That Saves Time <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        and Prints Revenue.
                    </span>
                </h1>

                <p className="hero-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    We build intelligent automation and data-driven solutions so you don't need an in-house AI team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="hero-btn group relative px-8 py-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 flex items-center gap-2">
                            View Our Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="hero-btn px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all font-medium flex items-center gap-2 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-2">
                            Learn More <ChevronRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Abstract Mesh Gradient Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Hero;
