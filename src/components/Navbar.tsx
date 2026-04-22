import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/constants';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Categories', path: '/categories' },
  { name: 'Deals', path: '/deals' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full md:max-w-[900px] z-50 transition-all duration-500",
      scrolled ? "scale-95" : "scale-100"
    )}>
      <div className="mx-0 md:mx-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-2xl relative">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-orange-600 to-red-500 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0">
            <Utensils className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tighter text-white uppercase ml-1 truncate">LUX DINE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-orange-400" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="hidden md:block bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          Book a Table
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-dark z-[-1] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <div className="absolute top-10 left-10 opacity-20">
             <span className="font-display font-black text-6xl tracking-tighter text-white uppercase italic">LUX DINE</span>
        </div>
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={link.path}
              className="font-display text-3xl tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
}
