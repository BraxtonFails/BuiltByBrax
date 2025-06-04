'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    {
      category: 'Frontend Development',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
    },
    {
      category: 'Backend Development',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'API Integration']
    },
    {
      category: 'Additional Skills',
      technologies: ['Git/GitHub', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'UI/UX Design', 'Web Security']
    }
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Computer Science Student at SFA',
      description: 'Currently pursuing a degree in Computer Science at Stephen F. Austin State University, focusing on software development and web technologies.'
    },
    {
      year: '2023',
      title: 'Launched BuiltByBrax',
      description: 'Founded BuiltByBrax, offering web development services and creating custom solutions for clients while continuing my education.'
    },
    {
      year: '2022',
      title: 'Started Web Development',
      description: 'Began my journey in web development, learning modern technologies and building projects to enhance my skills.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a192f]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                20-year-old Computer Science student and web developer from Winnsboro, Texas, 
                passionate about creating modern digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#112240] p-8 rounded-lg mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                    <Image
                      src="/BraxAndBrook.JPG"
                      alt="Braxton and Brook"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <p className="text-gray-300">
                    Hey there! I'm Braxton Fails, a 20-year-old Computer Science student at Stephen F. Austin 
                    State University. Born and raised in Winnsboro, Texas, I've always had a natural curiosity 
                    for technology and problem-solving, which led me to pursue both formal education in Computer 
                    Science and hands-on experience in web development.
                  </p>
                  <p className="text-gray-300">
                    At SFA, I'm not just focused on academics - I believe in maintaining a well-rounded life. 
                    When I'm not diving into code or attending classes, you'll find me participating in 
                    recreational sports and exploring the beautiful East Texas nature around campus. These 
                    activities help me stay energized and bring fresh perspectives to my development work.
                  </p>
                  <p className="text-gray-300">
                    Through BuiltByBrax, I've found a way to put my passion into practice, creating modern 
                    websites and applications while continuing my education. I take pride in delivering 
                    high-quality web solutions that combine my academic knowledge with practical development 
                    experience.
                  </p>
                  <p className="text-gray-300">
                    Balance is key in everything I do. Whether it's managing my studies, running my web 
                    development business, staying active outdoors, or nurturing my relationship of nearly 
                    two years with my girlfriend, I've learned the importance of dedication, growth, and 
                    maintaining strong connections while pursuing professional excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Education & Experience</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-[#112240] p-6 rounded-lg flex items-start gap-6"
                  >
                    <div className="text-blue-400 font-bold text-lg min-w-[80px]">{item.year}</div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#112240] p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {tech}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Let's Build Something Amazing Together</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Looking for a developer who combines academic knowledge with practical experience? 
                Let's collaborate on your next web project.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg transform hover:scale-105"
              >
                Start a Project
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 