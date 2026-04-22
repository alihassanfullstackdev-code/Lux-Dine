import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FOOD_ITEMS } from '@/src/lib/constants';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const pin = gsap.fromTo(
      containerRef.current,
      { x: 0 },
      {
        x: '-200vw',
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=3000', // Scroll distance
          invalidateOnRefresh: true,
        },
      }
    );
    return () => pin.kill();
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="overflow-hidden bg-surface">
      <div className="h-screen flex items-center justify-start relative">
        <div ref={containerRef} className="flex h-screen w-[300vw] items-center">
          {/* Intro Slide */}
          <div className="w-screen h-full flex items-center px-8 md:px-24">
            <div className="max-w-4xl">
              <span className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm mb-4 md:mb-6 block italic">Curated Selection</span>
              <h2 className="text-5xl md:text-9xl font-display font-bold leading-none uppercase mb-6 md:mb-8 tracking-tighter text-white">
                Chef's <br className="hidden md:block" /> <span className="text-gradient">Masterpieces</span>
              </h2>
              <p className="text-white/40 text-sm md:text-xl max-w-sm md:max-w-xl leading-relaxed font-light">
                Scroll horizontally to explore our signature creations, where every ingredient tells a legendary story.
              </p>
            </div>
          </div>

          {/* Food Slides */}
          {FOOD_ITEMS.slice(0, 4).map((item, index) => (
            <div key={item.id} className="w-[50vw] h-full flex flex-col items-center justify-center px-12 relative group">
              <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 overflow-hidden h-[60%] rounded-3xl border border-white/10 glass">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out opacity-20 group-hover:opacity-40"
                />
              </div>
              
              <div className="relative z-10 text-center space-y-4 pt-20">
                <span className="text-5xl md:text-7xl font-display font-black text-orange-600/50 group-hover:text-orange-400 transition-colors duration-500">0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter">{item.name}</h3>
                <p className="text-white/40 max-w-xs mx-auto italic font-light">{item.description}</p>
                <div className="pt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-3 rounded-xl uppercase tracking-widest text-[10px] font-bold shadow-xl">
                    Order Selection <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="w-[50vw] h-full" /> {/* Spacer */}
        </div>
      </div>
    </section>
  );
}
