'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'builtbybrax';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ubw6gqw';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-5MxkDW-aW-wBUkXi';

// Initialize EmailJS once
try {
  emailjs.init(PUBLIC_KEY);
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'braxtonfails86@gmail.com',
      href: 'mailto:braxtonfails86@gmail.com'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '(903) 975-4258',
      href: 'tel:+19039754258'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'Serving Nacogdoches, Winnsboro, and surrounding areas',
      href: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const form = e.currentTarget;
      const formData = {
        from_name: form.from_name.value,
        reply_to: form.reply_to.value,
        message: form.message.value,
      };

      console.log('Sending email with data:', formData);

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      let errorMsg = 'Failed to send message';
      if (error instanceof Error) {
        errorMsg += `: ${error.message}`;
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Let&apos;s Create Something Amazing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Whether you need a custom website, web application, or digital solution, 
              I&apos;m here to help bring your vision to life.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#112240] rounded-lg p-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Build Something Great</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="John Smith"
                    className="w-full px-4 py-2 rounded-md bg-[#0a192f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-md bg-[#0a192f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me what you're looking for — a new site, a redesign, or updates?"
                    className="w-full px-4 py-2 rounded-md bg-[#0a192f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting ? '🔄 Sending...' : '🚀 Let\'s Build It'}
                  </span>
                </button>
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-400 text-center">
                    {errorMessage || 'Failed to send message. Please try again.'}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#112240] rounded-lg p-6"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="text-blue-400">{method.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                        {method.href ? (
                          <a 
                            href={method.href} 
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{method.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#112240] rounded-lg p-6"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Response Time</h2>
                <p className="text-gray-300">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  please feel free to call me directly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#112240] rounded-lg p-6"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
                <a
                  href="/pricing"
                  className="inline-block bg-blue-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Your Free Quote
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 