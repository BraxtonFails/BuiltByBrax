'use client';

import { useTheme } from '../context/ThemeContext';
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
    <div className="relative inline-flex items-center rounded-lg bg-slate-100 dark:bg-[#112240] p-0.5 shadow-sm">
      <motion.div
        className="absolute h-full w-9 rounded-md bg-white dark:bg-[#1a2942] shadow-sm"
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
            ? 'text-blue-500'
            : 'text-slate-400 hover:text-blue-500 dark:hover:text-slate-200'
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
            : 'text-slate-400 hover:text-blue-500 dark:hover:text-slate-200'
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-5 h-5" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`relative z-10 p-2 rounded-md transition-colors duration-200 ${
          theme === 'system'
            ? 'text-blue-500'
            : 'text-slate-400 hover:text-blue-500 dark:hover:text-slate-200'
        }`}
        aria-label="System theme"
      >
        <ComputerDesktopIcon className="w-5 h-5" />
      </button>
    </div>
  );
} 