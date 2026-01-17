import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ variant = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isDark = variant === 'dark';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={
        `fixed top-0 left-0 right-0 z-50 border-b ${
          isDark ? 'bg-black text-white border-stone-800' : 'bg-white/90 backdrop-blur-sm text-stone-800 border-stone-200'
        }`
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${
              isDark 
                ? 'bg-gradient-to-r from-amber-300 via-orange-200 to-stone-300 text-transparent bg-clip-text' 
                : 'bg-gradient-to-r from-amber-800 via-orange-700 to-stone-700 text-transparent bg-clip-text'
            }`}
          >
            Longhorn Film Productions
          </motion.div>

          <nav className={`hidden md:flex space-x-8 ${isDark ? 'uppercase tracking-widest' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isDark 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-stone-700 hover:text-stone-900'
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${isDark ? 'border-stone-800' : 'border-stone-200'} border-t`}
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 ${
                    isDark 
                      ? 'text-white/90 hover:text-white hover:bg-stone-900' 
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                  } transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
