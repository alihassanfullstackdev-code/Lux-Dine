import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Mesh Gradient Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-dark/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale"
          alt="Hero background"
        />
      </div>

      <div className="container mx-auto px-12 relative z-20 flex pt-20">
        <div className="w-full lg:w-7/12 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-500/20 px-3 py-1 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Fresh Batch: Zinger Fire Now Ready</span>
            </div>

            <h1 className="text-5xl md:text-[8vw] font-display font-black leading-[0.9] md:leading-[0.9] tracking-tighter uppercase shrink-0">
              DESI SOUL <br/>
              <span className="text-gradient">FAST VIBES</span>
            </h1>
            
            <p className="text-white/40 text-base md:text-xl max-w-sm leading-relaxed font-light">
              Where aromatic Desi spices collide with the crunch of modern fast food. Authentic, bold, and served fresh.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
                Explore Menu
              </button>
              <div className="flex -space-x-3 items-center">
                <div className="w-10 h-10 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center text-[10px] font-bold">4.9</div>
                <div className="w-10 h-10 rounded-full border-2 border-dark bg-orange-600 flex items-center justify-center text-[10px]">★</div>
                <span className="pl-5 text-xs text-white/50 tracking-wide uppercase font-medium">Trusted by 12k+ Foodies</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid Element (Placeholder for Bento feel) */}
        <div className="hidden lg:flex w-5/12 items-center justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="w-full aspect-square glass rounded-3xl relative overflow-hidden p-8 flex flex-col justify-end"
            >
               <img 
                 src="/images/chef.jpg" 
                 alt="Chef's Recommendation" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold">Fire Zinger</h3>
                 <p className="text-white/60 text-xs tracking-widest uppercase mt-2">Extra Crunch. Secret Spices.</p>
               </div>
            </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.5em] uppercase text-muted font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
}
