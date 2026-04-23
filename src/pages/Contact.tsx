import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="pt-24">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <SectionTitle 
              subtitle="Location & Contact" 
              title="Get In Touch" 
            />
            <p className="text-on-surface-variant/60 text-lg leading-relaxed max-w-md">
              Visit our headquarters in Faisalabad or reach out via our concierge for priority support and business inquiries.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Address', detail: 'Kohinoor City, Jaranwala Road, Faisalabad' },
                { icon: Phone, title: 'Phone', detail: '+92 (300) 123-4567' },
                { icon: Mail, title: 'Email', detail: 'hello@tracks.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-surface-high border border-white/5 flex items-center justify-center rounded-xl text-primary group-hover:border-primary/30 transition-all shadow-lg">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs tracking-widest uppercase text-on-surface mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant/60">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 border border-white/5 rounded-[2rem] relative overflow-hidden shadow-2xl"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" type="text" placeholder="Ali Hassan" />
                <InputGroup label="Email Address" type="email" placeholder="ali@example.com" />
              </div>
              <InputGroup label="Subject" type="text" placeholder="Project Inquiry" />
              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 font-bold block ml-2">Message</label>
                <textarea 
                  className="w-full bg-surface border border-white/5 p-5 text-on-surface rounded-2xl focus:outline-none focus:border-primary/40 transition-all min-h-[150px] placeholder:text-white/10"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="w-full py-5 bg-primary text-surface font-black tracking-[0.3em] uppercase text-[11px] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
      
      {/* Real Interactive Map */}
      <div className="h-[500px] w-full relative border-t border-white/5 mt-20">
        <iframe 
          title="Faisalabad Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54483.99222457819!2d73.079148!3d31.4117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk" 
          className="w-full h-full grayscale invert brightness-50 contrast-125 transition-all hover:grayscale-0 hover:brightness-100"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Overlay to match your dark theme */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_100px_40px_rgba(var(--surface-rgb),1)]"></div>
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
    <div className="space-y-3">
      <label className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 font-bold block ml-2">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-surface border border-white/5 p-5 text-on-surface rounded-2xl focus:outline-none focus:border-primary/40 transition-all placeholder:text-white/10"
      />
    </div>
  );
}