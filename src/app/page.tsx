'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import BackgroundSlideshow from '@/components/BackgroundSlideshow'
import ImageSlideshow from '@/components/ImageSlideshow'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FaCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  const [servicesRef, isServicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [portfolioRef, isPortfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [aboutRef, isAboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [contactRef, isContactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of your fixed header if you have one
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const contactMethods = [
    {
      title: 'Email',
      value: 'braxtonfails86@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '(903) 975-4258',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'Winnsboro, Texas',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const services = [
    {
      title: 'Modern Development',
      description: 'Using the latest technologies like React, Next.js, and TypeScript to build fast, scalable applications that grow with your business.',
      icon: '🚀'
    },
    {
      title: 'Performance First',
      description: 'Hand-coded solutions that achieve perfect Google PageSpeed scores, ensuring lightning-fast load times and optimal user experience.',
      icon: '⚡'
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end development from database design to beautiful front-end interfaces, creating seamless and powerful applications.',
      icon: '💻'
    },
    {
      title: 'AI Integration',
      description: 'Leveraging cutting-edge AI technologies to create smarter, more responsive applications that provide enhanced user experiences.',
      icon: '🤖'
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center bg-white dark:bg-[#020817]">
        <BackgroundSlideshow />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">Custom Designs, Custom Coded</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
              Helping Small Businesses
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">Thrive Online</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Affordable, professional web solutions crafted for your local business. Stand out online and reach more customers with a website that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-block bg-transparent border-2 border-gray-900 dark:border-white hover:bg-gray-900/10 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                About Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gap div */}
      <div className="h-3 bg-gray-100 dark:bg-[#0a192f]"></div>

      {/* Services Section */}
      <section 
        id="services" 
        ref={servicesRef}
        className="relative bg-white dark:bg-[#0a192f]"
      >
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={sectionVariants}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">Never Worry About Your Website Again</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
              I specialize in building modern, high-performance websites that help businesses succeed online. 
              Every line of code is written by hand to ensure the best performance and make Google happy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-lg bg-gray-50 dark:bg-[#112240] hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio" 
        ref={portfolioRef}
        className="py-20 bg-gray-50 dark:bg-[#112240]"
      >
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={sectionVariants}
          initial="hidden"
          animate={isPortfolioInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Spray Foam Insulation',
                description: 'Modern website for a professional spray foam insulation company.',
                images: [
                  '/portfolio/sprayfoam/sprayfoam.png',
                  '/portfolio/sprayfoam/SprayFoamPhoto2.png',
                  '/portfolio/sprayfoam/SprayFoamPhoto3.png'
                ],
                tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
                link: 'https://sprayfoamsinsulation.com',
                external: true
              },
              {
                title: '4Man Tree Services',
                description: 'Professional website for 4Man Tree Service. Modern, responsive, and optimized for performance.',
                images: ['/4ManTreeServiceWebsite.png'],
                tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
                link: 'https://4mantreeservices.com',
                external: true
              },
              {
                title: 'Google Ads Management',
                description: 'Expert PPC campaign management to drive targeted traffic and maximize ROI for businesses.',
                images: ['/googleads.png'],
                tags: ['Google Ads', 'PPC', 'Analytics'],
                link: '/services/google-ppc',
                external: false
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-[#1E293B] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Link href="/portfolio" className="block">
                  <div className="relative h-48 overflow-hidden group">
                    <div className="absolute inset-0 w-full h-full">
                      <div className="w-full h-full transform transition-transform duration-300 group-hover:scale-110">
                        <ImageSlideshow images={project.images} />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <a 
                      href={project.link}
                      target={project.external ? "_blank" : "_self"}
                      rel={project.external ? "noopener noreferrer" : ""}
                      className="hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {project.title}
                      {project.external && (
                        <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </h3>
                  <Link href="/portfolio" className="block">
                    <p className="text-gray-300 mb-6 hover:text-gray-100 transition-colors">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm text-blue-400 bg-blue-400/10 rounded-full transition-colors hover:bg-blue-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className="py-20 bg-white dark:bg-[#0a192f]"
      >
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={sectionVariants}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hi, I'm Braxton Fails, a passionate web developer and Computer Science student at SFA. 
                Based in Winnsboro & Nacogdoches, TX, I combine modern web technologies with a keen eye for design 
                to deliver solutions that not only look great but also perform exceptionally.
              </p>
              <div className="flex gap-4 mt-6 mb-8">
                <a
                  href="/about"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
                >
                  Read More About Me
                  <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group"
            >
              <Image
                src="/BraxAndBrook.JPG"
                alt="Braxton and Brook"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 dark:bg-black/20 dark:group-hover:bg-black/30 transition-colors duration-500" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={contactRef}
        className="py-20 bg-gray-50 dark:bg-[#112240]"
      >
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={sectionVariants}
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Let's work together to create something amazing. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Start a Conversation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
