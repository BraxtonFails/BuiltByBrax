'use client';

import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-flex items-center rounded-lg bg-gray-100 dark:bg-[#112240] p-0.5">
      <motion.div
        className="absolute h-full w-9 rounded-md bg-white dark:bg-[#1a2942]"
        initial={false}
        animate={{ 
          x: theme === 'light' ? 0 : theme === 'dark' ? 36 : 72 
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      
      <button
        onClick={() => setTheme('light')}
        className={`relative z-10 p-2 rounded-md transition-colors duration-200 ${
          theme === 'light'
            ? 'text-yellow-500'
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        }`}
        aria-label="Light mode"
      >
        <SunIcon className="w-5 h-5" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`relative z-10 p-2 rounded-md transition-colors duration-200 ${
          theme === 'dark'
            ? 'text-blue-500'
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-5 h-5" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`relative z-10 p-2 rounded-md transition-colors duration-200 ${
          theme === 'system'
            ? 'text-purple-500'
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        }`}
        aria-label="System theme"
      >
        <ComputerDesktopIcon className="w-5 h-5" />
      </button>
    </div>
  );
} 