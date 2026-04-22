import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 overflow-hidden border-t border-white/10 bg-dark relative">
      {/* Mesh Background for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-black tracking-tighter uppercase">LUX DINE</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              Where aromatic Desi spices collide with the crunch of modern fast food. Authentic, bold, and served fresh.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-display text-sm tracking-widest text-primary uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Deals', 'About', 'Reservation'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-muted hover:text-white transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-display text-sm tracking-widest text-primary uppercase">Working Hours</h4>
            <div className="space-y-4 text-muted">
              <div>
                <p className="text-white font-medium">Mon - Fri</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Sat - Sun</p>
                <p>10:00 AM - 01:00 AM</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-display text-sm tracking-widest text-primary uppercase">Location</h4>
            <div className="space-y-4 text-muted">
              <p>124 Culinary Heights,<br />Gastronomy District,<br />NY 10001, USA</p>
              <a href="tel:+1234567890" className="block text-white hover:text-primary transition-colors underline underline-offset-4">+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest text-muted uppercase">
          <p>© 2026 LUX Bites. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
