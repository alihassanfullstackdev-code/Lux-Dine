import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <SectionTitle 
              subtitle="Reservation" 
              title="Secure Your Table" 
            />
            <p className="text-muted text-lg leading-relaxed max-w-md">
              Due to high demand, we recommend booking at least two weeks in advance. For parties larger than 8, please contact our concierge directly.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Address', detail: '124 Culinary Heights, NY 10001, USA' },
                { icon: Phone, title: 'Phone', detail: '+1 (234) 567-890' },
                { icon: Mail, title: 'Email', detail: 'concierge@luxbites.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-surface border border-white/5 flex items-center justify-center rounded-sm text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm tracking-widest uppercase text-white mb-1">{item.title}</h4>
                    <p className="text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface p-12 md:p-16 border border-white/5 rounded-sm relative overflow-hidden"
          >
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Full Name" type="text" placeholder="John Doe" />
                <InputGroup label="Email Address" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Guests" type="number" placeholder="2" />
                <InputGroup label="Date" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted font-bold block">Special Requirements</label>
                <textarea 
                  className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors min-h-[150px]"
                  placeholder="Allergies, celebrations, or specific table requests..."
                />
              </div>
              <button className="w-full py-5 bg-primary text-dark font-display font-bold tracking-[0.3em] uppercase text-xs hover:bg-white transition-all duration-500 flex items-center justify-center gap-3">
                Request Reservation <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
      
      {/* Map Placeholder */}
      <div className="h-[500px] bg-surface w-full grayscale opacity-50 relative border-t border-white/5">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xs tracking-widest uppercase text-muted">Interactive Map System Loading...</span>
        </div>
      </div>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  type: string;
  placeholder?: string;
}

function InputGroup({ label, type, placeholder }: InputGroupProps) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] tracking-[0.2em] uppercase text-muted font-bold block">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
