'use client';

import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter Site",
      price: "$450",
      subPrice: "one-time",
      description: "For pop-up shops and small solo vendors",
      features: [
        "One-Time Price: $450",
        "1-2 Page Website",
        "Mobile Responsive Design",
        "Hosting: 3 months included",
        "Edits: 1 free in first 30 days",
        "Contract: None",
        "Optional Hosting: $10/mo after 3 months",
        "Additional Edits: $40/hr"
      ],
      highlighted: false,
      isStarter: true,
    },
    {
      name: "Basic",
      price: "$75/mo",
      description: "For static sites with light updates",
      features: [
        "Monthly Price: $75",
        "Hosting: Included",
        "Edits: 2 per month",
        "SEO: Basic",
        "Support: Email",
        "Contract: 12 months",
        "Additional Edits: $40/hr"
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$150/mo",
      description: "For growing businesses that need regular changes",
      features: [
        "Monthly Price: $150",
        "Hosting: Included",
        "Edits: Unlimited",
        "SEO: Advanced",
        "Support: 24/7",
        "Contract: 6 months",
        "Priority Updates",
        "Google Business Profile"
      ],
      highlighted: true,
      isBestValue: true,
    },
    {
      name: "One-Time",
      price: "$1,450",
      subPrice: "+$25/mo hosting",
      description: "For those who prefer a single payment",
      features: [
        "One-Time Price: $1,450",
        "Hosting: $25/mo",
        "Edits: $40/hr",
        "SEO: Advanced",
        "Support: Email",
        "Contract: None",
        "Minimum Edit: 1 hour",
        "5-Page Website"
      ],
      highlighted: false,
    },
    {
      name: "Custom",
      price: "Custom",
      description: "For advanced, unique builds",
      features: [
        "Custom Pricing",
        "Hosting: Included",
        "Edits: Unlimited",
        "SEO: Tailored",
        "Support: Priority",
        "Contract: Flexible",
        "Custom Features",
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
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex flex-col h-full rounded-2xl p-6 relative ${
                    tier.highlighted
                      ? 'bg-[#112240] border-2 border-[#0ea5e9] transform scale-105'
                      : tier.isStarter
                      ? 'bg-[#1a2942] border-2 border-[#0ea5e9]'
                      : 'bg-[#1a2942] border border-gray-700'
                  } transition-all duration-200 hover:shadow-xl`}
                >
                  {tier.isBestValue && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-md z-10">
                      Best Value
                    </div>
                  )}
                  {tier.isStarter && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0ea5e9] text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      Most Affordable
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{tier.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                    {tier.subPrice && (
                      <div className="text-sm text-gray-400">{tier.subPrice}</div>
                    )}
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                        <FaCheck className="text-[#0ea5e9] mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 text-center">
                    <a
                      href="/contact"
                      className={`inline-block w-full px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                        tier.highlighted || tier.isStarter
                          ? 'bg-[#0ea5e9] text-white hover:bg-[#0284c7] transform hover:scale-105'
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
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Plan to Choose?</h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s discuss your project requirements and find the perfect solution for your business
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0ea5e9] text-white rounded-full font-semibold hover:bg-[#0284c7] transition-all duration-200 transform hover:scale-105"
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