import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/app/client-layout';
import { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme') || 'system';
                let isDark = theme === 'dark';
                
                if (theme === 'system') {
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }

                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(isDark ? 'dark' : 'light');
              } catch (e) {
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
