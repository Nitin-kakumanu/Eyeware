import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";
import Specs from './specs';
import Reviews from './reviews';
import React, { useState } from "react";

function HomePage() {
  // State for hover effects on buttons
  const [hoverStates, setHoverStates] = useState({
    shopNow: false,
    exploreCollection: false,
    viewFrames: false,
    bookAppointment: false,
    learnMore: false
  });

  const [currentDoctor, setCurrentDoctor] = useState(0);
  
  // Doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Optometrist",
      experience: "15+ years experience",
      image: "https://media.istockphoto.com/id/175560165/photo/doctor-with-laptop-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vc-K5oFm0C27p3CctQSFtIuqFTNovW8TUIG4FuvML9w=",
      bio: "Dr. Johnson specializes in pediatric optometry and vision therapy."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Ophthalmologist",
      experience: "12+ years experience",
      image: "https://media.istockphoto.com/id/1297767322/photo/portrait-of-a-doctor-looking-at-medical-charts-on-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lm0VK8Z8k27b5b26LeLSLPFQh8ob4oIavxUqgogSfsQ=",
      bio: "Dr. Chen is an expert in LASIK surgery and corneal treatments."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Optometrist",
      experience: "10+ years experience",
      image: "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHIuJTIwRW1pbHklMjBSb2RyaWd1ZXp8ZW58MHx8MHx8fDA%3D",
      bio: "Dr. Rodriguez focuses on contact lens fittings and dry eye management."
    },
    {
      id: 4,
      name: "Dr. David Lee",
      specialty: "Ophthalmologist",
      experience: "12+ years experience",
      image: "https://media.istockphoto.com/id/185266143/photo/color-image-of-male-doctor-with-laptop-on-white-backgroun.webp?a=1&b=1&s=612x612&w=0&k=20&c=VlfAy-HmVC8OQmD54Eh33nhtkYUYzuH1x7oL9h5M210=",
      bio: "Dr. Lee specializes in cataract surgery, retinal diseases, and laser eye treatments."
    },
    {
      id: 5,
      name: "Dr. Sarah Patel",
      specialty: "Optometrist",
      experience: "8+ years experience",
      image: "https://media.istockphoto.com/id/1301695107/photo/female-doctor-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=Br5lFUOy2zqzs5Oe613HMYvDEICR0QAfk5NXwzRoUKQ=",
      bio: "Dr. Patel is dedicated to providing comprehensive eye exams and managing visual disorders."
    }
  ];

  // Function to navigate carousel
  const navigateDoctor = (direction) => {
    if (direction === 'next') {
      setCurrentDoctor((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentDoctor((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
    }
  }

  // Function to handle button clicks
  const handleButtonClick = (action) => {
    switch(action) {
      case 'shop':
        console.log('Navigate to shop page');
        window.location.href = '/shop';
        break;
      case 'explore':
        console.log('Navigate to collection page');
        window.location.href = '/collection';
        break;
      case 'frames':
        console.log('Navigate to frames page');
        window.location.href = '/frames';
        break;
      case 'appointment':
        console.log('Navigate to appointment page');
        window.location.href = '/appointment';
        break;
      case 'about':
        console.log('Navigate to about page');
        window.location.href = '/about';
        break;
      default:
        break;
    }
  };

  // Function to handle hover state
  const handleHover = (button, isHovered) => {
    setHoverStates(prev => ({
      ...prev,
      [button]: isHovered
    }));
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button style generator
  const getButtonStyle = (isHovered, bgColor, hoverBgColor) => ({
    backgroundColor: isHovered ? hoverBgColor : bgColor,
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative my-24 h-screen flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0 bg-gray-800 opacity-90">
          <img
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg3MnwwfDF8c2VhcmNofDF8fHN1bmdsYXNzZXN8ZW58MHwwfHx8MA&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
              >
                See the World <span className="text-blue-400">Clearly</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
              >
                Discover premium eyewear that combines style, comfort, and perfect vision in one elegant package.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <button
                  style={getButtonStyle(hoverStates.shopNow, '#4A90E2', '#3a7bc8')}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 text-white text-base sm:text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
                  onMouseEnter={() => handleHover('shopNow', true)}
                  onMouseLeave={() => handleHover('shopNow', false)}
                  onClick={() => handleButtonClick('shop')}
                >
                  Shop Now
                </button>
                <button
                  style={getButtonStyle(hoverStates.bookAppointment, 'transparent', 'rgba(255,255,255,0.1)')}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white text-base sm:text-lg font-semibold rounded-lg shadow-md border-2 border-blue-400 transition-all duration-300"
                  onMouseEnter={() => handleHover('bookAppointment', true)}
                  onMouseLeave={() => handleHover('bookAppointment', false)}
                  onClick={() => handleButtonClick('appointment')}
                >
                  Book an Eye Exam
                </button>
              </motion.div>
            </div>
            <motion.div 
              className="flex-1 relative hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {/* Hero image placeholder */}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
          Featured Collections
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Explore our most popular eyewear collections, designed with both style and comfort in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Designer Frames",
              description: "Exclusive frames from top designers, perfect for making a statement.",
              price: "From $129",
              image: "https://images.unsplash.com/photo-1530432999454-016a47c78af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVzaWduZXIlMjBleWV3ZWFyJTIwRnJhbWVzfGVufDB8fDB8fHww",
              link: 'frames'
            },
            {
              title: "Sunglasses",
              description: "Protect your eyes with our stylish and UV-blocking sunglasses.",
              price: "From $99",
              image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
              link: 'frames'
            },
            {
              title: "Reading Glasses",
              description: "Comfortable and stylish reading glasses for everyday use.",
              price: "From $79",
              image: "https://images.unsplash.com/photo-1531053270060-6643c8e70e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVhZGluZyUyMEdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
              link: 'frames'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button 
                  className="absolute bottom-4 left-4 right-4 bg-blue-500 text-white font-semibold py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  onClick={() => handleButtonClick(item.link)}
                >
                  View Collection
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2 mb-3 text-sm sm:text-base">{item.description}</p>
                <p className="text-blue-400 font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <button
            style={getButtonStyle(hoverStates.exploreCollection, '#4A90E2', '#3a7bc8')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all duration-300"
            onMouseEnter={() => handleHover('exploreCollection', true)}
            onMouseLeave={() => handleHover('exploreCollection', false)}
            onClick={() => handleButtonClick('explore')}
          >
            Explore Our Collection
          </button>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="bg-gray-800 py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
            We're committed to providing the best eyewear experience with unmatched quality and service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Wide Selection",
                description: "Over 1,000 styles from top designers, ensuring you'll find the perfect pair for your style."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Affordable Prices",
                description: "Quality eyewear at competitive prices, with options to fit every budget without compromising on quality."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Expert Care",
                description: "Our certified optometrists provide thorough eye exams and personalized recommendations."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-400 text-center text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          We offer comprehensive eyecare services to meet all your vision needs.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://media.istockphoto.com/id/182853013/photo/leaflet-about-our-services-with-ballpoint-pen.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6xF64My5bO_ECKKDz-02sobq5eZ1v6_OhQQ3vtMOpU="
              alt="Our Services"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Comprehensive Eye Exams",
                description: "Our thorough eye exams include vision testing, eye disease screening, and personalized recommendations."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Custom Prescription Lenses",
                description: "We create custom lenses tailored to your vision needs, including progressive, blue light filtering, and transition options."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Frame Adjustments & Repairs",
                description: "Keep your glasses in perfect condition with our quick adjustment, repair, and maintenance services."
              }
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            
            <button
              style={getButtonStyle(hoverStates.learnMore, '#4A90E2', '#3a7bc8')}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base"
              onMouseEnter={() => handleHover('learnMore', true)}
              onMouseLeave={() => handleHover('learnMore', false)}
              onClick={() => handleButtonClick('about')}
            >
              Learn More About Our Services
            </button>
          </motion.div>
        </div>
      </motion.div>

    {/* Reviews Section */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={sectionVariants}
  className="bg-gray-800 py-12 sm:py-16"
>
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
      What Our Customers Say
    </h2>
    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
      Don't just take our word for it - hear from our satisfied customers.
    </p>

    {/* Scrollable container - THIS WILL REMOVE SCROLLBAR */}
    <div className="relative">
      {/* This CSS will be applied globally to hide scrollbars */}
      <style jsx global>{`
        .review-container::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        .review-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="review-container flex overflow-x-auto pb-6">
        <div className="flex gap-6 px-4">
          {[
            {
              name: "Michael Johnson",
              role: "Software Engineer",
              rating: 5,
              review: "The best eyewear I've ever owned. Perfect vision and incredibly stylish frames that get compliments daily.",
              image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Sarah Williams",
              role: "Graphic Designer",
              rating: 5,
              review: "The eye exam was thorough and the staff helped me find frames that perfectly suit my face shape.",
              image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              name: "David Kim",
              role: "Marketing Director",
              rating: 4,
              review: "Great service and selection. My new glasses have made a huge difference in my daily comfort.",
              image: "https://randomuser.me/api/portraits/men/22.jpg"
            },
            {
              name: "Emily Chen",
              role: "Teacher",
              rating: 5,
              review: "I was nervous about getting new glasses but the optometrist made me feel completely at ease.",
              image: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map((review, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-72 sm:w-80 bg-gray-700 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{review.name}</h4>
                  <p className="text-blue-400 text-sm">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <button
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        onClick={() => handleButtonClick('reviews')}
      >
        View All Reviews
      </button>
    </div>
  </div>
</motion.div>

      {/* Call-to-Action Section */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={sectionVariants}
  className="bg-gray-800 py-12 sm:py-16"
>
  <div className="container mx-auto px-4 sm:px-6 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
      Ready to Find Your Perfect Pair?
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
      Visit our store today or shop online to discover our wide selection of eyewear. Your perfect glasses are waiting!
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <button
        className="px-5 py-2.5 sm:px-8 sm:py-4 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        onClick={() => handleButtonClick('shop')}
      >
        Shop Online
      </button>
      <button
        className="px-5 py-2.5 sm:px-8 sm:py-4 bg-transparent text-white border-2 border-blue-400 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-500/10 transition-all duration-300"
        onClick={() => handleButtonClick('appointment')}
      >
        Book an Appointment
      </button>
    </div>
  </div>
</motion.div>

      <Footer />
    </div>
  );
}

export default HomePage;