import { Metadata } from 'next'
import Link from 'next/link'
import ImageSlideshow from '@/components/ImageSlideshow'

export const metadata: Metadata = {
  title: 'Spray Foam Insulation - Portfolio Project',
  description: 'A showcase of my spray foam insulation website project.',
}

export default function SprayFoamPage() {
  const projectImages = [
    '/portfolio/sprayfoam/sprayfoam.png',
    '/portfolio/sprayfoam/SprayFoamPhoto2.png',
    '/portfolio/sprayfoam/SprayFoamPhoto3.png'
  ];

  return (
    <div className="min-h-screen bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Portfolio
          </Link>
        </div>
        
        <div className="bg-[#112240] rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Spray Foam Insulation Website</h1>
          <p className="text-gray-300 mb-8">A modern, responsive website built for a spray foam insulation company.</p>
          
          <div className="mb-8">
            <ImageSlideshow images={projectImages} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              This website was designed and developed to showcase professional spray foam insulation services,
              helping potential customers learn about the benefits of spray foam insulation and request quotes.
            </p>
            <div className="bg-[#1E293B] p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Technologies Used:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Responsive design for all devices</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Modern UI/UX with Tailwind CSS</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">SEO optimized content structure</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <a 
              href="https://github.com/BraxtonFails/sprayfoamsinsulation.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Project on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 