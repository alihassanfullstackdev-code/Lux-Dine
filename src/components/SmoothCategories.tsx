import React from 'react';
import { CATEGORIES } from '@/src/lib/constants';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function SmoothCategories() {
  return (
    <div className="container mx-auto px-6 py-24 pb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, i) => (
          <SmoothCard key={cat.id} {...cat} index={i} />
        ))}
      </div>
    </div>
  );
}

interface SmoothCardProps {
  title: string;
  desc: string;
  color: string;
  index: number;
}

function SmoothCard({ title, desc, color, index }: SmoothCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse move for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        perspective: 1000,
      }}
      className="relative aspect-[3/4] rounded-[32px] overflow-hidden glass group cursor-pointer border-white/5 bg-white/[0.02]"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? 'blur(0px)' : 'blur(5px) grayscale(1)' 
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700"
      >
        <img 
          src={`https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=800&sig=${index + 10}`} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Surface Gradient */}
      <div 
        className="absolute inset-0 z-10 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent)` }}
      />
      
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <motion.span 
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.4 }}
            className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-bold block"
          >
            Category {index + 1}
          </motion.span>
          <motion.h3 
             animate={{ x: isHovered ? 10 : 0 }}
             className="text-3xl font-display font-black leading-tight tracking-tighter uppercase whitespace-pre-line"
          >
            {title.split(' ')[0]} <br />
            <span className="text-gradient italic">{title.split(' ').slice(1).join(' ')}</span>
          </motion.h3>
        </div>

        <div className="space-y-6">
          <motion.p 
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-white/60 leading-relaxed font-light"
          >
            {desc}
          </motion.p>
          <motion.button 
            animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
            className="w-full py-4 bg-white text-dark font-display font-black tracking-widest uppercase text-[10px] rounded-xl hover:bg-orange-500 hover:text-white transition-colors"
          >
            Browse Collection
          </motion.button>
        </div>
      </div>

      {/* Decorative Border Glow */}
      <motion.div 
        animate={{ 
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${springX.get() * 100 + 50}% ${springY.get() * 100 + 50}%, ${color}11, transparent)` 
        }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
}
