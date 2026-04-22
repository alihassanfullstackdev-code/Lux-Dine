import HorizontalScrollGallery from '@/src/components/HorizontalScrollGallery';
import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';

export default function Deals() {
  return (
    <div className="pt-24 bg-surface">
      <SectionWrapper className="pb-0">
        <SectionTitle 
          subtitle="Exclusive" 
          title="Limited Engagements" 
          align="center"
        />
      </SectionWrapper>
      <HorizontalScrollGallery />
      
      <SectionWrapper>
        <div className="max-w-4xl mx-auto border border-primary/20 p-12 text-center space-y-8 bg-dark/50">
          <h3 className="text-3xl font-display uppercase tracking-widest text-primary">Join the Inner Circle</h3>
          <p className="text-muted leading-relaxed">
            Members of our monthly tasting series receive prioritized bookings and access to ultra-limited seasonal items before they reach the main menu.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-dark border border-white/10 px-8 py-4 focus:outline-none focus:border-primary w-full md:w-80"
            />
            <button className="px-10 py-4 bg-primary text-dark font-display font-bold tracking-widest uppercase text-xs">Authorize</button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
