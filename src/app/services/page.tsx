'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a192f]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From modern web applications to full-stack solutions, I deliver high-quality development services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Frontend Development',
                  description: 'Building responsive, modern user interfaces with React, Next.js, and TypeScript. Focus on performance and user experience.',
                  features: [
                    'React & Next.js Applications',
                    'Responsive Design',
                    'Performance Optimization',
                    'Modern UI/UX Implementation'
                  ]
                },
                {
                  title: 'Backend Development',
                  description: 'Creating robust server-side solutions with Node.js and modern databases. API development and system architecture.',
                  features: [
                    'Node.js & Express',
                    'Database Design',
                    'API Development',
                    'Server Architecture'
                  ]
                },
                {
                  title: 'Full Stack Solutions',
                  description: 'End-to-end development from database to frontend. Complete web applications with seamless integration.',
                  features: [
                    'Full Application Development',
                    'System Integration',
                    'Database Management',
                    'Deployment & DevOps'
                  ]
                },
                {
                  title: 'Performance & SEO',
                  description: 'Optimizing websites for speed and search engines. Ensuring your site ranks well and loads fast.',
                  features: [
                    'Page Speed Optimization',
                    'SEO Best Practices',
                    'Core Web Vitals',
                    'Analytics Integration'
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#112240] p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how I can help bring your vision to life with modern web development solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 