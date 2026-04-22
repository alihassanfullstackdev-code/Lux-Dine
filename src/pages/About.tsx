import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
                <SectionTitle 
                subtitle="Our Story" 
                title="The Heritage of Heat" 
                />
                <p className="text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-primary first-letter:font-display">
                Born in the bustling streets of Gawalmandi and refined in the modern culinary hubs, Lux dine represents a new benchmark in fusion dining.
                </p>
                <p className="text-muted leading-relaxed">
                We believe that authentic Desi food deserves the same precision and presentation as fine dining, while the convenience of fast food shouldn't mean sacrificing the soul of the ingredients.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                        <span className="text-5xl font-display text-primary block mb-2">20k+</span>
                        <span className="text-[10px] tracking-widest text-muted uppercase">Happy Foodies</span>
                    </div>
                    <div>
                        <span className="text-5xl font-display text-primary block mb-2">35</span>
                        <span className="text-[10px] tracking-widest text-muted uppercase">Secret Spices</span>
                    </div>
                </div>
            </div>
            
            <div className="relative">
                <div className="aspect-square overflow-hidden rounded-full border-[20px] border-surface">
                    <img 
                        src="https://images.unsplash.com/photo-1550966841-3ee5f6176378?auto=format&fit=crop&q=80&w=1000" 
                        alt="Restaurant interior"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                {/* Decorative floaters */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-10 -right-10 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl" 
                />
            </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-surface">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <h3 className="text-4xl md:text-6xl font-display uppercase tracking-tight">"A plate is more than a meal. It is a dialogue between the land and the soul."</h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="font-serif italic text-xl">The Collective of Chefs</span>
                <div className="w-12 h-[1px] bg-primary" />
            </div>
          </div>
      </SectionWrapper>
    </div>
  );
}
