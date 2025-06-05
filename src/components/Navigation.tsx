'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  return (
    <nav className="fixed w-full bg-[#020817] z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/BuiltByBraxLogoNoTextNoBackground.PNG"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="ml-2 text-white font-semibold">BuiltByBrax</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/portfolio" className="text-white hover:text-[#0ea5e9] font-medium tracking-wide">
              PORTFOLIO
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer text-white hover:text-[#0ea5e9] py-4">
                <span className="font-medium tracking-wide">SERVICES</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Services Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#020817] border border-gray-800 rounded-md shadow-lg">
                <Link href="/services/web-design" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  WEB DESIGN
                </Link>
                <Link href="/services/seo" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  SEO
                </Link>
                <Link href="/services/google-ppc" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  GOOGLE PPC ADS
                </Link>
              </div>
            </div>

            <Link href="/pricing" className="text-white hover:text-[#0ea5e9] font-medium tracking-wide">
              PRICING
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer text-white hover:text-[#0ea5e9] py-4">
                <span className="font-medium tracking-wide">ABOUT US</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* About Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#020817] border border-gray-800 rounded-md shadow-lg">
                <Link href="/about" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  ABOUT US
                </Link>
                <Link href="/faq" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  FAQ
                </Link>
                <Link href="/locations" className="block px-4 py-2.5 text-white hover:bg-gray-800 hover:text-[#0ea5e9] tracking-wide text-sm">
                  LOCATIONS
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-white hover:text-[#0ea5e9] font-medium tracking-wide">
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020817] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/portfolio"
              className={`block px-3 py-2 transition-colors duration-200 ${
                activeItem === 'portfolio' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
              } font-medium tracking-wide rounded-md`}
              onClick={() => {
                setActiveItem('portfolio');
                setTimeout(() => setMobileMenuOpen(false), 200);
              }}
            >
              PORTFOLIO
            </Link>

            {/* Mobile Services Menu */}
            <div>
              <button
                onClick={() => {
                  setMobileServicesOpen(!mobileServicesOpen);
                  setActiveItem(mobileServicesOpen ? '' : 'services');
                }}
                className={`flex items-center justify-between w-full px-3 py-2 transition-colors duration-200 ${
                  activeItem === 'services' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                }`}
              >
                <span className="font-medium tracking-wide">SERVICES</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  <Link 
                    href="/services/web-design" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'web-design' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('web-design');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }, 200);
                    }}
                  >
                    WEB DESIGN
                  </Link>
                  <Link 
                    href="/services/seo" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'seo' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('seo');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }, 200);
                    }}
                  >
                    SEO
                  </Link>
                  <Link 
                    href="/services/google-ppc" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'google-ppc' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('google-ppc');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }, 200);
                    }}
                  >
                    GOOGLE PPC ADS
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={`block px-3 py-2 transition-colors duration-200 ${
                activeItem === 'pricing' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
              } font-medium tracking-wide rounded-md`}
              onClick={() => {
                setActiveItem('pricing');
                setTimeout(() => setMobileMenuOpen(false), 200);
              }}
            >
              PRICING
            </Link>

            {/* Mobile About Menu */}
            <div>
              <button
                onClick={() => {
                  setMobileAboutOpen(!mobileAboutOpen);
                  setActiveItem(mobileAboutOpen ? '' : 'about');
                }}
                className={`flex items-center justify-between w-full px-3 py-2 transition-colors duration-200 ${
                  activeItem === 'about' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                }`}
              >
                <span className="font-medium tracking-wide">ABOUT US</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileAboutOpen && (
                <div className="pl-4 py-2 space-y-1">
                  <Link 
                    href="/about" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'about-us' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('about-us');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileAboutOpen(false);
                      }, 200);
                    }}
                  >
                    ABOUT US
                  </Link>
                  <Link 
                    href="/faq" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'faq' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('faq');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileAboutOpen(false);
                      }, 200);
                    }}
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/locations" 
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeItem === 'locations' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
                    } tracking-wide text-sm rounded-md`}
                    onClick={() => {
                      setActiveItem('locations');
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                        setMobileAboutOpen(false);
                      }, 200);
                    }}
                  >
                    LOCATIONS
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`block px-3 py-2 transition-colors duration-200 ${
                activeItem === 'contact' ? 'text-[#0ea5e9] bg-gray-800' : 'text-white hover:bg-gray-800/50 hover:text-[#0ea5e9]'
              } font-medium tracking-wide rounded-md`}
              onClick={() => {
                setActiveItem('contact');
                setTimeout(() => setMobileMenuOpen(false), 200);
              }}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 