'use client';

import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const tiers = [
    {
      name: "Basic Monthly",
      price: "$75/mo",
      description: "Essential website maintenance and support",
      features: [
        "$0 Down Payment",
        "Custom Website Design",
        "Basic Edits (2/mo)",
        "Email Support",
        "Hosting Included",
        "Basic SEO",
        "12-Month Minimum Contract"
      ],
      highlighted: false,
    },
    {
      name: "Pro Monthly",
      price: "$150/mo",
      description: "Perfect for businesses who want ongoing support",
      features: [
        "$0 Down Payment",
        "Custom Website Design",
        "Unlimited Edits",
        "24/7 Support",
        "Hosting Included",
        "Google Business Profile Help",
        "Analytics & Reports",
        "Lifetime Updates",
        "6-Month Minimum Contract"
      ],
      highlighted: true,
    },
    {
      name: "Lump Sum",
      price: "$3,000",
      subPrice: "+$25/mo hosting",
      description: "Perfect for businesses who prefer a single payment",
      features: [
        "Custom Website Design",
        "5-Page Website",
        "Mobile Responsive",
        "SEO Optimization",
        "Contact Form",
        "$25/mo Hosting",
        "Edits at $40/hr",
        "1-Hour Minimum for Edits",
        "One-Time Payment"
      ],
      highlighted: false,
    },
    {
      name: "Custom Solution",
      price: "Custom",
      description: "For projects with unique requirements",
      features: [
        "Custom Feature Development",
        "Advanced Functionality",
        "Custom Integrations",
        "Priority Support",
        "Tailored Solutions",
        "Project-Based Pricing",
        "Flexible Timeline",
        "Dedicated Support",
        "Personalized Strategy"
      ],
      highlighted: false,
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a192f]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300">
                Choose the plan that works best for your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`rounded-2xl p-8 ${
                    tier.highlighted
                      ? 'bg-[#112240] border-2 border-blue-500 transform scale-105'
                      : 'bg-[#1a2942] border border-gray-700'
                  } transition-all duration-200 hover:shadow-xl`}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                    {tier.subPrice && (
                      <div className="text-sm text-gray-400 mb-8">{tier.subPrice}</div>
                    )}
                    {!tier.subPrice && <div className="mb-8" />}
                  </div>

                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-center">
                    <a
                      href="/contact"
                      className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                        tier.highlighted
                          ? 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
                          : 'bg-gray-700 text-white hover:bg-gray-600 transform hover:scale-105'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solution Section */}
        <section className="pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Plan to Choose?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your project requirements and find the perfect solution for your business
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 