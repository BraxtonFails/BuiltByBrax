'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import BackgroundSlideshow from '@/components/BackgroundSlideshow';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 flex items-center justify-center bg-black">
          <BackgroundSlideshow />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl text-blue-400 font-medium mb-4">Custom Designs, Custom Coded</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Full Stack Web Developer
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Crafting modern, hand-coded websites with superior performance and beautiful design. Specializing in React, Next.js, and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
                >
                  About Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gap div */}
        <div className="h-3 bg-[#0a192f]"></div>

        {/* Services Section */}
        <section id="services" className="relative bg-[#0a192f] dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Never Worry About Your Website Again</h2>
              <p className="text-gray-300 text-lg">
                I specialize in building modern, high-performance websites that help businesses succeed online. Every line of code is written by hand to ensure the best performance and make Google happy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Modern Development',
                  description: 'Using the latest technologies like React, Next.js, and TypeScript to build fast, scalable applications.',
                  icon: '🚀'
                },
                {
                  title: 'Performance First',
                  description: 'Hand-coded solutions that achieve perfect Google PageSpeed scores and lightning-fast load times.',
                  icon: '⚡'
                },
                {
                  title: 'Full Stack Solutions',
                  description: 'End-to-end development from database design to beautiful front-end interfaces.',
                  icon: '💻'
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-8 rounded-lg bg-[#112240] dark:bg-gray-800 hover:transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Spray Foam Insulation',
                  description: 'Modern website for a professional spray foam insulation company.',
                  image: '/portfolio/sprayfoam.png',
                  tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
                  link: 'https://sprayfoamsinsulation.com',
                  external: true
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.link ? (
                        <a 
                          href={project.link} 
                          className="hover:text-blue-600 transition-colors flex items-center"
                          target={project.external ? "_blank" : undefined}
                          rel={project.external ? "noopener noreferrer" : undefined}
                        >
                          {project.title}
                          {project.external && (
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hi, I'm Braxton Fails, a passionate web developer dedicated to creating beautiful,
                  functional websites that help businesses succeed online.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With expertise in modern web technologies and a keen eye for design,
                  I deliver solutions that not only look great but also perform exceptionally.
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                {/* Placeholder for about image */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
