'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ImageComponent from './ImageComponent';

const Header = () => {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-md'
            : 'bg-gray-900/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex items-center"
              >
                <ImageComponent
                  src="/images/logo.jpg" 
                  alt="Cnwhyte Logo"
                  width={120} 
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer transition-colors relative font-medium ${
                      pathname === item.path
                        ? 'text-[#00c4e6]'
                        : 'text-gray-300 hover:text-[#00c4e6]'
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-300 z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* <div className="mb-8">
                  <ImageComponent
                    src="/images/logo.jpg" 
                    alt="Cnwhyte Logo"
                    width={100} 
                    height={35}
                    className="h-7 w-auto object-contain"
                  />
                </div> */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.path}>
                        <div
                          className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                            pathname === item.path
                              ? 'bg-[#00c4e6] text-white shadow-lg shadow-[#00c4e6]/30'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-[#00c4e6]'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="py-6 border-t border-gray-800">
                  <p className="text-gray-500 text-sm text-center">
                    &copy; {currentYear} Cnwhyte
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;