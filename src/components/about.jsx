import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen my-24 bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eyewear Studio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where vision meets style, and quality craftsmanship meets innovative design
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Eyewear craftsmanship"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[#4A90E2] font-semibold tracking-wider">OUR STORY</span>
              <h2 className="text-3xl font-bold">Redefining Eyewear Since 2010</h2>
              <div className="w-20 h-1 bg-[#4A90E2] mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                What began as a small boutique optical shop in downtown Seattle has grown into an internationally 
                recognized eyewear brand. Our founders, Dr. Sarah Chen and Marco Rodriguez, combined their expertise 
                in optometry and fashion design to create frames that are as precise as they are stylish.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we operate 12 flagship stores across North America and Europe, while maintaining our 
                commitment to handcrafted quality and personalized service.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="text-center mb-20">
            <span className="text-[#4A90E2] font-semibold tracking-wider">OUR VALUES</span>
            <h2 className="text-3xl font-bold mt-3 mb-12">What Guides Our Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-400">
                  We push boundaries with advanced materials and patented hinge technologies for unmatched comfort.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-400">
                  Each frame undergoes 47 quality checks before leaving our workshop in Milan.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-400">
                  We've reduced our carbon footprint by 62% through renewable energy and recycled materials.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#4A90E2] font-semibold tracking-wider">OUR TEAM</span>
              <h2 className="text-3xl font-bold mt-3 mb-4">Meet The Visionaries</h2>
              <div className="w-20 h-1 bg-[#4A90E2] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Co-Founder & Optometrist",
                  image: "https://randomuser.me/api/portraits/women/65.jpg",
                  bio: "Harvard-trained optometrist with 15 years experience in vision correction."
                },
                {
                  name: "Marco Rodriguez",
                  role: "Co-Founder & Designer",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  bio: "Former Gucci accessories designer bringing luxury aesthetics to eyewear."
                },
                {
                  name: "James Wilson",
                  role: "Head of Manufacturing",
                  image: "https://randomuser.me/api/portraits/men/75.jpg",
                  bio: "30 years experience in precision engineering and materials science."
                },
                {
                  name: "Priya Patel",
                  role: "Customer Experience",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  bio: "Ensuring every customer finds their perfect frame with personalized service."
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#4A90E2] mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Find Your Perfect Frames?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Visit one of our stores for a personalized fitting or browse our curated collections online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('/shop')}
                className="px-8 py-3 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;