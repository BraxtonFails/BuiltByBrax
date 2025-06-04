'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-2xl font-bold">BuiltByBrax</Link>
            <p className="mt-4 text-gray-400">
              Creating exceptional digital experiences through modern web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: braxtonfails86@gmail.com</li>
              <li>Phone: (903) 975-4258</li>
              <li>Location: United States</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com/BraxtonFails" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} BuiltByBrax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 