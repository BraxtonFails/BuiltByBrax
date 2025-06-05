'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const LocationsPage = () => {
  const locations = [
    {
      city: "Raleigh",
      state: "North Carolina",
      address: "123 Innovation Drive",
      zip: "27601",
      phone: "(919) 555-0123",
      email: "raleigh@builtbybrax.com",
      description: "Our headquarters, serving the Triangle area and beyond with cutting-edge web development solutions.",
      services: ["Web Design", "SEO", "Google PPC", "Digital Marketing"]
    },
    {
      city: "Charlotte",
      state: "North Carolina",
      address: "456 Tech Boulevard",
      zip: "28202",
      phone: "(704) 555-0123",
      email: "charlotte@builtbybrax.com",
      description: "Serving Charlotte's growing tech scene with innovative digital solutions and local expertise.",
      services: ["Web Development", "E-commerce", "SEO", "Digital Strategy"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Locations
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Serving North Carolina with professional web development and digital marketing services
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {location.city}, {location.state}
              </h2>
              <p className="text-gray-400 mb-6">{location.description}</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-6 h-6 text-[#0ea5e9] flex-shrink-0" />
                  <div>
                    <p className="text-white">{location.address}</p>
                    <p className="text-white">{location.city}, {location.state} {location.zip}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-[#0ea5e9]" />
                  <a href={`tel:${location.phone}`} className="text-white hover:text-[#0ea5e9] transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-[#0ea5e9]" />
                  <a href={`mailto:${location.email}`} className="text-white hover:text-[#0ea5e9] transition-colors">
                    {location.email}
                  </a>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Ready to start your project? We're here to help!
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

export default LocationsPage; 