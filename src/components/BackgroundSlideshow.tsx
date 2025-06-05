'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageSlide = {
  type: 'image';
  image: string;
};

type TemplateSlide = {
  type: 'template';
  icon: React.ReactElement<{
    children: React.ReactElement<{
      d: string;
    }>;
  }>;
};

type Slide = ImageSlide | TemplateSlide;

const baseSlides: Slide[] = [
  {
    image: '/portfolio/sprayfoam/sprayfoam.png',
    type: 'image'
  },
  {
    image: '/portfolio/sprayfoam/SprayFoamPhoto2.png',
    type: 'image'
  },
  {
    image: '/portfolio/sprayfoam/SprayFoamPhoto3.png',
    type: 'image'
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  }
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Check if a slide is too close to its duplicates
const isDuplicateTooClose = (
  slides: Slide[],
  currentIndex: number,
  slide: Slide,
  minDistance: number
): boolean => {
  const start = Math.max(0, currentIndex - minDistance);
  const end = Math.min(slides.length, currentIndex + minDistance);
  
  for (let i = start; i < end; i++) {
    if (i === currentIndex) continue;
    const compareSlide = slides[i];
    if (!compareSlide) continue;

    if (slide.type === 'image' && compareSlide.type === 'image') {
      if (slide.image === compareSlide.image) return true;
    } else if (slide.type === 'template' && compareSlide.type === 'template') {
      const currentPath = slide.icon.props.children.props.d;
      const comparePath = compareSlide.icon.props.children.props.d;
      if (currentPath === comparePath) return true;
    }
  }
  return false;
};

// Generate shuffled slides with spacing constraint
const generateShuffledSlides = (count: number): Slide[] => {
  const slides: Slide[] = [];
  const minDistance = 3;
  
  // For 3 rows × 8 columns = 24 total slots (12 per half)
  while (slides.length < 12) {
    const shuffled = shuffleArray(baseSlides);
    
    for (const slide of shuffled) {
      if (!isDuplicateTooClose(slides, slides.length, slide, minDistance)) {
        slides.push(slide);
        if (slides.length >= 12) break;
      }
    }
  }
  
  return slides;
};

export default function BackgroundSlideshow() {
  const [isClient, setIsClient] = useState(false);
  const [slides, setSlides] = useState<{
    firstHalf: Slide[];
    secondHalf: Slide[];
  }>({ firstHalf: [], secondHalf: [] });

  useEffect(() => {
    setIsClient(true);
    // Each half gets 12 slides (3 rows × 4 columns)
    setSlides({
      firstHalf: generateShuffledSlides(12),
      secondHalf: generateShuffledSlides(12)
    });
  }, []);

  const renderTile = (slide: Slide, index: number, keyPrefix: string) => {
    return (
      <div
        key={`${keyPrefix}-${index}`}
        className="relative rounded-md overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-500"
      >
        {slide.type === 'image' ? (
          <>
            <div className="relative w-full h-full min-h-[120px] md:min-h-[150px]">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index < 4}
                loading={index < 4 ? 'eager' : 'lazy'}
                onError={(e) => {
                  console.error('Error loading image:', slide.image);
                }}
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <div className="w-full h-full min-h-[120px] md:min-h-[150px] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            {slide.icon}
          </div>
        )}
      </div>
    );
  };

  if (!isClient) {
    return (
      <div className="absolute top-20 bottom-0 left-0 right-0 overflow-hidden bg-white dark:bg-[#020817]">
        <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[2px]" />
      </div>
    );
  }

  return (
    <div className="absolute top-20 bottom-0 left-0 right-0 overflow-hidden bg-white dark:bg-[#020817]">
      <motion.div 
        className="grid grid-cols-4 md:grid-cols-8 gap-3 absolute inset-6"
        style={{ 
          width: '200%',
          gridTemplateRows: 'repeat(3, minmax(120px, 1fr))',
          gridAutoRows: 0,
          gridAutoFlow: 'dense'
        }}
        animate={{ 
          x: [0, '-50%']
        }}
        transition={{
          duration: 180,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {slides.firstHalf.map((slide, index) => renderTile(slide, index, 'tile'))}
        {slides.secondHalf.map((slide, index) => renderTile(slide, index, 'tile-second'))}
      </motion.div>
      <div className="absolute inset-0 bg-white/90 dark:bg-[#020817]/90 backdrop-blur-[1px]" />
    </div>
  );
} 