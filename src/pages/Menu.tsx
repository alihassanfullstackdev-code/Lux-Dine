import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';
import { FOOD_ITEMS } from '@/src/lib/constants';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function Menu() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle 
          subtitle="The Library" 
          title="Eternal Flavors" 
          align="center"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {['All', 'Main Course', 'Seafood', 'Appetizers', 'Desserts', 'Wine'].map((cat, i) => (
            <button key={i} className="px-6 py-2 border border-white/10 hover:border-orange-500 rounded-full transition-colors text-[10px] tracking-widest uppercase font-bold bg-white/5 backdrop-blur-md">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOOD_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden m-4 rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 pt-4 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] tracking-widest text-orange-400 uppercase font-bold">{item.category}</span>
                  <span className="font-display font-black text-2xl text-white">{item.price}</span>
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight group-hover:text-orange-400 transition-colors">{item.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{item.description}</p>
                
                <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-[10px] tracking-widest uppercase font-black bg-white text-black px-6 py-2 rounded-lg shadow-lg">Order Now</button>
                  <button className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg">
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
