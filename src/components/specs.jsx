// import { useState } from 'react';
import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Navbar from "./navbar";
import Footer from "./footer";

const specsList = [
  { 
    id: 1, 
    name: 'Aviator Sunglasses', 
    description: 'Classic aviator sunglasses for a timeless look.', 
    price: 129, 
    imageUrl: 'https://media.istockphoto.com/id/157404280/photo/isolated-shot-of-sunglasses-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DMMefZkUhK7uk4ADcW_97U4g3mxoOb0crCa_AadFRhQ=', 
    brand: 'Ray-Ban', 
    category: 'Sunglasses', 
    rating: 4.6 
  },
  { 
    id: 2, 
    name: 'Cat Eye Glasses', 
    description: 'Stylish cat-eye glasses perfect for fashion-forward individuals.', 
    price: 99, 
    imageUrl: 'https://media.istockphoto.com/id/2196597589/photo/stylish-purple-sunglasses-from-chanel-esign-62.webp?a=1&b=1&s=612x612&w=0&k=20&c=9N5QBxFX7ZVqyqHN4TeIToORbBRD1wofYkZj32ZWYuM=', 
    brand: 'Chanel', 
    category: 'Glasses', 
    rating: 4.5 
  },
  { 
    id: 3, 
    name: 'Wayfarer Glasses', 
    description: 'Trendy square frames with a timeless appeal.', 
    price: 149, 
    imageUrl: 'https://plus.unsplash.com/premium_photo-1734664184720-386b74d23c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2F5ZmFyZXIlMjBHbGFzc2VzfGVufDB8fDB8fHww', 
    brand: 'Ray-Ban', 
    category: 'Sunglasses', 
    rating: 4.7 
  },
  { 
    id: 4, 
    name: 'Round Frames', 
    description: 'Elegant round frames with a modern twist.', 
    price: 120, 
    imageUrl: 'https://images.unsplash.com/photo-1641048927024-0e801784b4f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um91bmQlMjBGcmFtZXN8ZW58MHx8MHx8fDA%3D', 
    brand: 'Fossil', 
    category: 'Glasses', 
    rating: 4.4 
  },
  { 
    id: 5, 
    name: 'Square Glasses', 
    description: 'Sharp square frames for a sleek look.', 
    price: 110, 
    imageUrl: 'https://plus.unsplash.com/premium_photo-1733749585385-f09c117dc87a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3F1YXJlJTIwR2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D', 
    brand: 'Oakley', 
    category: 'Glasses', 
    rating: 4.2 
  },
  { 
    id: 6, 
    name: 'Sports Sunglasses', 
    description: 'Durable sports sunglasses with UV protection for outdoor activities.', 
    price: 180, 
    imageUrl: 'https://media.istockphoto.com/id/173552297/photo/sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=0vbX3_ssE7AnOgbc5RmnmJdvCOlhWXhuKyt5Rvtz4bg=', 
    brand: 'Nike', 
    category: 'Sunglasses', 
    rating: 4.8 
  },
  { 
    id: 7, 
    name: 'Prescription Glasses', 
    description: 'Comfortable prescription glasses for daily use with stylish frames.', 
    price: 75, 
    imageUrl: 'https://media.istockphoto.com/id/1321452985/photo/woman-holding-glasses-against-eye-chart-on-blue-background-closeup-ophthalmologist.webp?a=1&b=1&s=612x612&w=0&k=20&c=S6M1P_Fb6HfFHunpcq0zXQ-Yz2VNoVfqaT-rpMnf-Vc=', 
    brand: 'Ray-Ban', 
    category: 'Glasses', 
    rating: 4.3 
  },
  { 
    id: 8, 
    name: 'Oversized Frames', 
    description: 'Fashionable oversized frames for a bold statement.', 
    price: 130, 
    imageUrl: 'https://images.unsplash.com/photo-1511499602539-b3f6b9b79014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3ZlcnNpemVkJTIwRnJhbWVzfGVufDB8fDB8fHww', 
    brand: 'Prada', 
    category: 'Sunglasses', 
    rating: 4.6 
  },
  { 
    id: 9, 
    name: 'Chic Eyeglasses', 
    description: 'Chic and modern eyeglasses for a sophisticated look.', 
    price: 160, 
    imageUrl: 'https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENoaWMlMjBFeWVnbGFzc2VzfGVufDB8fDB8fHww', 
    brand: 'Chanel', 
    category: 'Glasses', 
    rating: 4.7 
  },
    { 
      "id": 10, 
      "name": "Metal Glasses", 
      "description": "Sleek and lightweight metal frames for a modern look.", 
      "price": 140, 
      "imageUrl": "https://media.istockphoto.com/id/185238571/photo/round-spectacles.webp?a=1&b=1&s=612x612&w=0&k=20&c=zZG3yZN8rmX_xh8lPh11MuWo8kYyXYjEyDM97vWzdSI=", 
      "brand": "Oakley", 
      "category": "Glasses", 
      "rating": 4.5
    },
    { 
      "id": 11, 
      "name": "Vintage Glasses", 
      "description": "Retro-inspired vintage glasses with a unique design.", 
      "price": 115, 
      "imageUrl": "https://media.istockphoto.com/id/1047544590/photo/vintage-circular-eyeglasses-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=PwVd0YxQJzZBdbfPEeuRwv-d0R6nOo-8bqaiZ1duKlo=", 
      "brand": "Fossil", 
      "category": "Glasses", 
      "rating": 4.4
    },
    { 
      "id": 12, 
      "name": "Minimalist Eyewear", 
      "description": "Simple and minimalist eyewear for a clean and refined look.", 
      "price": 105, 
      "imageUrl": "https://images.unsplash.com/photo-1641977994880-60ed652cdd66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluaW1hbGlzdCUyMEV5ZXdlYXJ8ZW58MHx8MHx8fDA%3D", 
      "brand": "Ray-Ban", 
      "category": "Glasses", 
      "rating": 4.6
    },
    { 
      "id": 13, 
      "name": "Geek Eyeglasses", 
      "description": "Bold geek style eyeglasses with a vintage appeal.", 
      "price": 99, 
      "imageUrl": "https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdlZWslMjBHbGFzc2VzJTIwd2VhcmVkJTIwYnklMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D", 
      "brand": "Oakley", 
      "category": "Glasses", 
      "rating": 4.2
    },
    { 
      "id": 14, 
      "name": "Bifocal Glasses", 
      "description": "Elegant bifocal glasses that combine style and functionality.", 
      "price": 140, 
      "imageUrl": "https://media.istockphoto.com/id/1913903061/photo/sunglass-the-glasses-glasses-and-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=2TCPVBtv453k8aoiGR78lAwG3c-yyQ0w8Epk-2rJlgA=", 
      "brand": "Ray-Ban", 
      "category": "Glasses", 
      "rating": 4.6
    },
    { 
      "id": 15, 
      "name": "Luxury Glasses", 
      "description": "High-end luxury glasses for a sophisticated look.", 
      "price": 250, 
      "imageUrl": "https://images.unsplash.com/photo-1567333126229-db29200c25f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwR2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D", 
      "brand": "Gucci", 
      "category": "Glasses", 
      "rating": 4.9
    },

    { 
      "id": 16, 
      "name": "Gucci Designer Eyeglasses", 
      "description": "Premium designer eyeglasses with a luxurious touch for an elegant appearance.", 
      "price": 350, 
      "imageUrl": "https://plus.unsplash.com/premium_photo-1692809752539-fc7e9c347b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3VjY2klMjBnbGFzc2VzfGVufDB8fDB8fHww", 
      "brand": "Gucci", 
      "category": "Glasses", 
      "rating": 4.8
    }
];

function Specs() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filteredSpecs, setFilteredSpecs] = useState(specsList);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(300);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOrder, setSortOrder] = useState('price');
  const [viewMode, setViewMode] = useState('grid');
  const [quickView, setQuickView] = useState(null);

  // Get unique brands and categories
  const uniqueBrands = [...new Set(specsList.map(spec => spec.brand))];
  const uniqueCategories = [...new Set(specsList.map(spec => spec.category))];

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
  
    if (existingItem) {
      // If item already exists in cart, increase quantity
      updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      // If item doesn't exist in cart, add it with quantity 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    alert(`Proceeding to checkout with ${product.name}`);
  };

  const handleAddToFavorites = (product) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
    let updatedFavorites;
    
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }
    
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const applyFilters = () => {
    let filtered = [...specsList];

    // Apply the price filter first
    filtered = filtered.filter(spec => spec.price <= selectedPriceRange);

    // Apply the category filter if selected
    if (selectedCategory) {
        filtered = filtered.filter(spec => spec.category === selectedCategory);
    }

    // Apply the brand filter if selected
    if (selectedBrand) {
        filtered = filtered.filter(spec => spec.brand === selectedBrand);
    }

    // Apply the search term filter if entered
    if (searchTerm) {
        filtered = filtered.filter(spec => 
            spec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            spec.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            spec.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Apply sorting based on the selected order
    if (sortOrder === 'price') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update the filtered specs state
    setFilteredSpecs(filtered);
};

// Add useEffect to call applyFilters whenever filter states change
useEffect(() => {
    applyFilters();
}, [searchTerm, selectedPriceRange, selectedCategory, selectedBrand, sortOrder]);

const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);  // Update the search term
};

const resetFilters = () => {
    setSelectedPriceRange(300);
    setSelectedCategory('');
    setSelectedBrand('');
    setSortOrder('price');
    setSearchTerm('');
};

const maxPrice = Math.max(...specsList.map(spec => spec.price));


  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen my-24 bg-gray-900 text-gray-100">
      <Navbar />
      
      {/* Quick View Modal - Updated with dark theme */}
      {quickView && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <img 
                  src={quickView.imageUrl} 
                  alt={quickView.name} 
                  className="w-full h-64 md:h-96 object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{quickView.name}</h2>
                    <p className="text-gray-400">{quickView.brand}</p>
                  </div>
                  <button 
                    onClick={() => setQuickView(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {renderRatingStars(quickView.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">{quickView.rating.toFixed(1)}</span>
                </div>
                
                <p className="mt-4 text-gray-300">{quickView.description}</p>
                
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full mr-2">
                    {quickView.category}
                  </span>
                </div>
                
                <div className="mt-6">
                  <p className="text-3xl font-bold text-blue-400">${quickView.price}</p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(quickView);
                      setQuickView(null);
                    }}
                    className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleBuyNow(quickView);
                      setQuickView(null);
                    }}
                    className="flex-1 py-3 px-6 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
                
                <button
                  onClick={() => handleAddToFavorites(quickView)}
                  className={`mt-4 w-full py-2 rounded-lg flex items-center justify-center gap-2 ${
                    favorites.some(fav => fav.id === quickView.id) 
                      ? 'bg-pink-900/30 text-pink-400' 
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  } transition-colors`}
                >
                  {favorites.some(fav => fav.id === quickView.id) ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      Remove from Favorites
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Add to Favorites
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Discover Premium Eyewear</h1>
            <p className="text-gray-400">Find the perfect glasses or sunglasses to match your style</p>
          </div>
          
          {/* Search and Filters - Updated with dark theme */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, brand or description..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                  <div className="absolute left-3 top-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    applyFilters();
                  }}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                >
                  <option value="">All Brands</option>
                  {uniqueBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    applyFilters();
                  }}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Sort By</label>
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    applyFilters();
                  }}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                >
                  <option value="price">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Price Range: <span className="font-semibold text-blue-400">${selectedPriceRange}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={selectedPriceRange}
                  onChange={(e) => {
                    setSelectedPriceRange(parseInt(e.target.value));
                    applyFilters();
                  }}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$0</span>
                  <span>$300</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-gray-400">
                Showing <span className="font-semibold text-white">{filteredSpecs.length}</span> {filteredSpecs.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="flex gap-2">
                <button 
                  onClick={applyFilters}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Apply Filters
                </button>
                <button 
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          
          {/* Products - Updated with dark theme */}
          {filteredSpecs.length === 0 ? (
            <div className="bg-gray-700 p-8 rounded-lg text-center border border-gray-600">
              <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-white">No products found</h3>
              <p className="mt-1 text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={resetFilters}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpecs.map((spec) => (
                <motion.div
                  key={spec.id}
                  className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={spec.imageUrl} 
                      alt={spec.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button 
                        onClick={() => setQuickView(spec)}
                        className="w-full py-2 bg-white/90 text-gray-800 rounded-md font-medium hover:bg-white transition-colors"
                      >
                        Quick View
                      </button>
                    </div>
                    <div 
                      className="absolute top-3 right-3 p-2 rounded-full bg-gray-900/80 shadow-md cursor-pointer hover:bg-gray-900 text-pink-400 hover:text-pink-300 transition-colors"
                      onClick={() => handleAddToFavorites(spec)}
                    >
                      {favorites.some(fav => fav.id === spec.id) ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4 4 0 000 6.364L12 20.364l7.682-7.682a4 4 0 00-6.364-6.364L12 7.636l-1.318-1.318a4 4 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white line-clamp-1">{spec.name}</h3>
                        <p className="text-sm text-gray-400">{spec.brand}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-400 rounded-full">
                        {spec.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {renderRatingStars(spec.rating)}
                      </div>
                      <span className="ml-1 text-sm text-gray-400">{spec.rating.toFixed(1)}</span>
                    </div>
                    
                    <p className="mt-2 text-gray-400 text-sm line-clamp-2">{spec.description}</p>
                    
                    <div className="mt-4">
                      <p className="text-xl font-bold text-blue-400 mb-3">${spec.price}</p>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAddToCart(spec)}
                          className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleBuyNow(spec)}
                          className="flex-1 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSpecs.map((spec) => (
                <motion.div
                  key={spec.id}
                  className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-48 md:h-auto relative group">
                      <img 
                        src={spec.imageUrl} 
                        alt={spec.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={() => setQuickView(spec)}
                          className="px-4 py-2 bg-white/90 text-gray-800 rounded-md font-medium hover:bg-white transition-colors"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-grow p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{spec.name}</h3>
                          <p className="text-sm text-gray-400">{spec.brand}</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-400 rounded-full">
                          {spec.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {renderRatingStars(spec.rating)}
                        </div>
                        <span className="ml-1 text-sm text-gray-400">{spec.rating.toFixed(1)}</span>
                      </div>
                      
                      <p className="mt-2 text-gray-300">{spec.description}</p>
                    </div>
                    
                    <div className="md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-700 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-xl font-bold text-blue-400">${spec.price}</p>
                        <button 
                          onClick={() => handleAddToFavorites(spec)}
                          className="p-2 rounded-lg hover:bg-gray-700 text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          {favorites.some(fav => fav.id === spec.id) ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4 4 0 000 6.364L12 20.364l7.682-7.682a4 4 0 00-6.364-6.364L12 7.636l-1.318-1.318a4 4 0 00-6.364 0z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleAddToCart(spec)}
                          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleBuyNow(spec)}
                          className="w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Specs;