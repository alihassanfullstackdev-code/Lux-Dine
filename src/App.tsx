import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import Contact from './pages/Contact';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-dark overflow-hidden">
        {/* Global Mesh Blurs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
