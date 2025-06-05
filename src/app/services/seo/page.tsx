'use client';

import { motion } from 'framer-motion';

export default function SEO() {
  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine visibility.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "On-Page SEO",
      description: "Optimize your content, meta tags, and internal linking for maximum search visibility.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Content Strategy",
      description: "Develop engaging, keyword-optimized content that ranks and converts.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Local SEO",
      description: "Improve your local search presence and attract more customers in your area.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Increased Organic Traffic",
      description: "Drive more qualified visitors to your website through improved search rankings."
    },
    {
      title: "Better ROI",
      description: "Generate long-term value and sustainable traffic without paying for each click."
    },
    {
      title: "Enhanced Brand Visibility",
      description: "Build authority and trust by appearing at the top of search results."
    },
    {
      title: "Targeted Audience",
      description: "Reach users actively searching for your products or services."
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
          <h1 className="text-5xl font-bold text-white">Search Engine Optimization</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Drive organic traffic and grow your online presence with our comprehensive 
            SEO services. We help you rank higher and attract more qualified leads.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative backdrop-blur-lg bg-[#0f172a]/80 border border-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative backdrop-blur-lg bg-[#0f172a]/80 border border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Why Invest in SEO?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative backdrop-blur-lg bg-[#0f172a]/80 border border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our SEO Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white">SEO Audit & Analysis</h3>
                <p className="mt-2 text-gray-300">Comprehensive analysis of your website's current SEO performance and competitive landscape.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Strategy Development</h3>
                <p className="mt-2 text-gray-300">Create a customized SEO strategy based on your goals and target audience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Implementation</h3>
                <p className="mt-2 text-gray-300">Execute on-page and technical SEO optimizations while developing high-quality content.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Monitoring & Optimization</h3>
                <p className="mt-2 text-gray-300">Continuous tracking of performance metrics and refinement of strategies for optimal results.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">Ready to Improve Your Search Rankings?</h2>
          <p className="text-xl text-gray-300">
            Let's develop an SEO strategy that drives results for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </main>
  );
} 