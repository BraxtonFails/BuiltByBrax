'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WebDesign() {
  const features = [
    {
      title: "Custom Website Development",
      description: "Tailored websites built from scratch to match your brand and business needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your site looks great on all devices.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Modern UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimized user experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen pt-24 px-4 bg-[#020817]">
      {/* Background bubbles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] rounded-full bg-[#0f172a]/80 blur-3xl transform -translate-x-1/2" />
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[#1e293b]/50 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0f172a]/60 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold text-white">Web Design & Development</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating stunning, modern websites that drive results. From concept to launch, 
            we build custom web solutions that help your business stand out.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative backdrop-blur-lg bg-[#0f172a]/80 border border-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative backdrop-blur-lg bg-[#0f172a]/80 border border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Development Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Discovery & Planning</h3>
                <p className="mt-2 text-gray-300">We start by understanding your business goals, target audience, and project requirements to create a comprehensive development plan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Design & Prototyping</h3>
                <p className="mt-2 text-gray-300">Our team creates wireframes and interactive prototypes to visualize the user experience and interface design.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Development & Testing</h3>
                <p className="mt-2 text-gray-300">We build your website using modern technologies and best practices, with thorough testing throughout the development process.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Launch & Support</h3>
                <p className="mt-2 text-gray-300">After final testing and approval, we launch your website and provide ongoing support and maintenance as needed.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300">
            Let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
} 