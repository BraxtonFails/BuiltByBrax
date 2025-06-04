'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navigation from '@/components/Navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        {children}
      </div>
    </ThemeProvider>
  );
} 