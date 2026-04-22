import { cn } from '@/src/lib/constants';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export default function SectionWrapper({ children, className, id, containerClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 relative overflow-hidden", className)}>
      <div className={cn("container mx-auto px-6 relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle, align = 'left' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <div className={cn("mb-12 md:mb-16 space-y-3 md:space-y-4", align === 'center' ? 'text-center' : 'text-left')}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-display text-[10px] md:text-sm tracking-[0.3em] uppercase italic"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-display font-black leading-tight tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
}
