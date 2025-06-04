'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Spray Foam Insulation',
      description: 'Modern website for a professional spray foam insulation company. Features include responsive design, performance optimization, and SEO implementation.',
      image: '/portfolio/sprayfoam.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://sprayfoamsinsulation.com',
      external: true,
      details: [
        'Server-side rendering for optimal performance',
        'Custom animations and transitions',
        'Mobile-first responsive design',
        'SEO optimization with 100/100 PageSpeed score'
      ]
    }
    // Add more projects here as they come
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a192f]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Portfolio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent web development projects, featuring modern technologies and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#112240] rounded-lg overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors flex items-center"
                        >
                          {project.title}
                          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="flex items-center mb-6">
                        <div className="w-32 h-32 relative">
                          <img
                            src="/sprayfoam-performance.png"
                            alt="100/100 Performance Score"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-semibold">Perfect Performance Score</h4>
                          <p className="text-gray-300 text-sm">100/100 on Google PageSpeed Insights</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-gray-300">
                              <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-black/30 text-blue-400 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Have a Project in Mind?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to create something amazing. I'm always excited to take on new challenges.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
            >
              Start a Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 