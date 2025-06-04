import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const baseSlides = [
  {
    image: '/portfolio/sprayfoam.png',
    type: 'image'
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    type: 'template',
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

// Generate shuffled slides for both halves
const generateShuffledSlides = (count: number) => {
  const slides = [];
  for (let i = 0; i < count; i++) {
    slides.push(...shuffleArray(baseSlides));
  }
  return slides.slice(0, 24); // Limit to exactly 24 tiles
};

export default function BackgroundSlideshow() {
  const controls = useAnimationControls();
  const firstHalfSlides = useRef(generateShuffledSlides(6));
  const secondHalfSlides = useRef(generateShuffledSlides(6));

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, '-50%'],
        transition: {
          duration: 180,
          ease: "linear",
          repeat: Infinity,
        }
      });
    };
    animate();
  }, [controls]);

  const renderTile = (slide: typeof baseSlides[0], index: number, keyPrefix: string) => {
    return (
      <div
        key={`${keyPrefix}-${index}`}
        className="relative rounded-md overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-500"
      >
        {slide.type === 'image' ? (
          <>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            {slide.icon}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="absolute top-20 bottom-3 left-0 right-0 overflow-hidden bg-black">
      <motion.div 
        className="grid grid-cols-8 gap-3 absolute inset-3 h-[calc(100%+1.5rem)]"
        style={{ 
          width: '200%',
          gridTemplateRows: 'repeat(3, 1fr)',
          gridAutoRows: 0,
          gridAutoFlow: 'row dense'
        }}
        animate={controls}
        initial={{ x: 0 }}
      >
        {firstHalfSlides.current.map((slide, index) => renderTile(slide, index, 'tile'))}
        {secondHalfSlides.current.map((slide, index) => renderTile(slide, index, 'tile-second'))}
      </motion.div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
} 