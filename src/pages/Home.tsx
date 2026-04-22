import Hero from '@/src/components/Hero';
import HorizontalScrollGallery from '@/src/components/HorizontalScrollGallery';
import SmoothCategories from '@/src/components/SmoothCategories';
import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';
import { FOOD_ITEMS } from '@/src/lib/constants';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <Hero />
      
      <SectionWrapper>
        <SectionTitle 
          subtitle="The Philosophy" 
          title="Street Soul, Kitchen Precision" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { tag: '01', title: 'Spice Alchemy', desc: 'Hand-picked spices from the heart of Pakistan & India, ground daily for peak aroma.' },
            { tag: '02', title: 'The Crunch Secret', desc: 'A proprietary breading technique that keeps our chicken legendary and crispy.' },
            { tag: '03', title: 'Desi Roots', desc: 'Grandmother’s recipes meets modern speed. The perfect fusion of time and taste.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6 group"
            >
              <span className="text-3xl font-display text-primary/30 group-hover:text-primary transition-colors">{item.tag}</span>
              <h3 className="text-2xl font-display uppercase">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <HorizontalScrollGallery />

      <SectionWrapper id="categories" className="bg-dark">
        <SectionTitle 
          subtitle="The Anthology" 
          title="Culinary Kingdoms" 
          align="center"
        />
        <SmoothCategories />
      </SectionWrapper>
      
      <SectionWrapper className="bg-surface relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef at work"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/20 p-4 backdrop-blur-3xl hidden md:block">
              <div className="w-full h-full bg-dark flex flex-col items-center justify-center text-center p-6 border border-white/5">
                <span className="text-primary font-display text-4xl mb-2">3 Michelin</span>
                <p className="text-[10px] tracking-widest text-muted uppercase">Global Standard Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-primary font-display tracking-[0.4em] uppercase text-sm block">The Flavor Architect</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase">
              Chef <br /> <span className="italic font-serif normal-case text-muted">Ali Hassan</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed italic">
              "Fast food doesn't have to be flavorless. I spent years in Lahore mastering the tandoor before bringing that intensity to the burger world. We're here to spice up your life, one bite at a time."
            </p>
            <div className="pt-8">
              <button className="px-10 py-4 border border-white/10 hover:border-primary transition-colors font-display tracking-widest uppercase text-xs">
                Read Biography
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
