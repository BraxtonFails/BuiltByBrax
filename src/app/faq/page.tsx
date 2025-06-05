'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in web design, SEO optimization, and Google PPC advertising. Our services are tailored to help businesses establish a strong online presence and drive growth through digital channels."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies depending on the project scope. A basic website typically takes 2-4 weeks, while more complex projects with custom features may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing website maintenance?",
      answer: "Yes, we offer comprehensive website maintenance packages that include regular updates, security monitoring, performance optimization, and content updates to keep your site running smoothly."
    },
    {
      question: "What is your approach to SEO?",
      answer: "Our SEO strategy combines technical optimization, quality content creation, and strategic link building. We focus on sustainable, white-hat techniques that improve your search rankings while providing value to your audience."
    },
    {
      question: "How do you handle website hosting?",
      answer: "We partner with industry-leading hosting providers to ensure optimal performance, security, and reliability for your website. Our hosting solutions include regular backups, SSL certificates, and 24/7 monitoring."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific needs. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your requirements."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] pt-24 pb-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg"
          >
            Find answers to common questions about our services and process
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#0ea5e9] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0ea5e9]/90 transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQPage; 