import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const topLayerRef = useRef(null);
    const bottomLayerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const letters = textRef.current.querySelectorAll('.footer-letter');

            // Animate 'E' (index 4)
            gsap.to(letters[4], {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });

            // Animate 'X' (index 5) - less than E
            gsap.to(letters[5], {
                y: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });

            // Animate top LAYER line - scroll left
            gsap.to(topLayerRef.current, {
                x: -200,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });

            // Animate bottom LAYER line - scroll right
            gsap.to(bottomLayerRef.current, {
                x: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const letters = "CORTEX™".split("");

    return (
        <footer ref={containerRef} className="bg-black text-white pt-32 pb-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Ready to automate your business? Let's build something extraordinary together.
                        </p>
                        <a href="mailto:contact@cortexlayer.com" className="text-lg hover:text-gray-300 transition-colors underline underline-offset-4">
                            contact@cortexlayer.com
                        </a>
                    </div>
                    <div className="flex flex-col md:items-end justify-between">
                        <div className="flex gap-8 mb-8">
                            <a href="#" className="relative group text-gray-400 hover:text-white transition-colors">
                                Twitter
                                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                            <a href="#" className="relative group text-gray-400 hover:text-white transition-colors">
                                LinkedIn
                                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                            <a href="#" className="relative group text-gray-400 hover:text-white transition-colors">
                                GitHub
                                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Massive Typography */}
                <div className="border-t border-white/10 pt-[10vh] flex flex-col items-center">
                    {/* Top Layer Line */}
                    <div ref={topLayerRef} className="w-full overflow-hidden whitespace-nowrap text-xs md:text-sm font-thin tracking-[0.2em] text-gray-600 select-none mb-4">
                        {Array(50).fill("LAYER").join(" ")}
                    </div>

                    <h1 ref={textRef} className="text-[13vw] leading-none font-bold tracking-tighter text-center opacity-20 select-none flex justify-center">
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className="footer-letter inline-block"
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>

                    {/* Bottom Layer Line */}
                    <div ref={bottomLayerRef} className="w-full overflow-hidden whitespace-nowrap text-xs md:text-sm font-thin tracking-[0.2em] text-gray-600 select-none mt-4">
                        {Array(50).fill("LAYER").join(" ")}
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center justify-between mt-16 text-sm text-gray-500">
                        <p>© 2025 CortexLayer<sup className="text-[8px]">™</sup> Technologies Pvt Ltd</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
