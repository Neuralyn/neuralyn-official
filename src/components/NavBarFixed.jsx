import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'mission', label: 'Mission', path: '/mission' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'healmind', label: 'HealMind_AI', path: '/healmind' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      {/* Brand on top left */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-6 left-8 z-50"
      >
        <Link to="/" className="font-semibold text-xl tracking-widest text-white select-none" style={{ textShadow: '0 2px 12px #1e293b33, 0 1px 0 #fff2' }}>
          Neuralyn
        </Link>
      </motion.div>

      {/* Nav links on top right */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 right-0 z-50 p-6"
      >
        <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3 flex items-center justify-end w-full max-w-4xl">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar; 