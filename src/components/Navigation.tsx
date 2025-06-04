'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateClockwise, setRotateClockwise] = useState(true);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-[#020817]/90 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative w-8 h-8 overflow-hidden">
                <Image
                  src="/BuiltByBraxLogoNoTextNoBackground.PNG"
                  alt="BuiltByBrax Logo"
                  width={32}
                  height={32}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-[360deg] group-hover:brightness-125"
                />
              </div>
              <div className="ml-3">
                <span className="text-lg font-semibold text-white">
                  BuiltByBrax
                </span>
                <span className="block text-xs text-gray-400">Web Development</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] px-3 py-1 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white transition-all duration-300 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#020817]/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 