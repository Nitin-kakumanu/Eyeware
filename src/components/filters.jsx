// import { useState, useEffect } from 'react';
// import Navbar from "./navbar";
// import Footer from "./footer";
// import { motion } from 'framer-motion';

// function Favorites() {
//   const [favorites, setFavorites] = useState([]);
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

//   useEffect(() => {
//     // Load favorites from local storage when component mounts
//     const storedFavorites = JSON.parse(localStorage.getItem('eyewearFavorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   const handleRemoveFromFavorites = (productId) => {
//     const updatedFavorites = favorites.filter(item => item.id !== productId);
//     setFavorites(updatedFavorites);
    
//     // Update local storage
//     localStorage.setItem('eyewearFavorites', JSON.stringify(updatedFavorites));
//   };

//   const handleAddToCart = (product) => {
//     // Get current cart from local storage
//     const currentCart = JSON.parse(localStorage.getItem('eyewearCart')) || [];
    
//     // Check if product is already in cart
//     const existingProduct = currentCart.find(item => item.id === product.id);
    
//     if (existingProduct) {
//       // If already in cart, increase quantity
//       const updatedCart = currentCart.map(item => 
//         item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//       );
//       localStorage.setItem('eyewearCart', JSON.stringify(updatedCart));
//     } else {
//       // Add new product to cart
//       const updatedCart = [...currentCart, { ...product, quantity: 1 }];
//       localStorage.setItem('eyewearCart', JSON.stringify(updatedCart));
//     }
    
//     alert(`${product.name} has been added to your cart!`);
//   };

//   const handleClearFavorites = () => {
//     setFavorites([]);
//     localStorage.setItem('eyewearFavorites', JSON.stringify([]));
//   };

//   if (favorites.length === 0) {
//     return (
//       <div className="min-h-screen my-10 bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Navbar */}
//       <Navbar />
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md min-h-screen">
//         <h2 className="text-2xl font-bold text-blue-600 mb-6">Your Favorites</h2>
//         <div className="bg-white p-8 rounded-lg shadow text-center">
//           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" className="mx-auto mb-4">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//           </svg>
//           <p className="text-lg text-gray-600 mb-4">You haven't added any favorites yet</p>
//           <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//             Explore Products
//           </a>
//         </div>
//         {/* Footer */}
//       <Footer />
//       </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen my-10 bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Navbar */}
//       <Navbar />
//     <div className="bg-gray-50  p-6 rounded-lg shadow-md min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-blue-600">Your Favorites</h2>
//         <div className="flex gap-4">
//           <div className="flex items-center">
//             <button 
//               onClick={() => setViewMode('grid')}
//               className={`p-2 rounded-l-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//             >
//               Grid
//             </button>
//             <button 
//               onClick={() => setViewMode('list')}
//               className={`p-2 rounded-r-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//             >
//               List
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <a 
//               href="/"
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
//             >
//               Continue Shopping
//             </a>
//             <button 
//               onClick={handleClearFavorites}
//               className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//             >
//               Clear Favorites
//             </button>
//           </div>
//         </div>
//       </div>

//       {viewMode === 'grid' ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {favorites.map((item) => (
//             <motion.div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={item.imageUrl} 
//                   alt={item.name} 
//                   className="w-full h-full object-cover"
//                 />
//                 <div 
//                   className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md cursor-pointer"
//                   onClick={() => handleRemoveFromFavorites(item.id)}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF4136" stroke="#FF4136" strokeWidth="2">
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-xl font-bold text-blue-600">${item.price}</p>
//                   <div className="flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F0B429" stroke="#F0B429" strokeWidth="1">
//                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                     </svg>
//                     <span className="ml-1 text-sm text-gray-700">{item.rating.toFixed(1)}</span>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.brand}</span>
//                   <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.category}</span>
//                 </div>
//                 <button
//                   onClick={() => handleAddToCart(item)}
//                   className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="flex flex-col gap-4">
//           {favorites.map((item) => (
//             <motion.div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/4 h-48 md:h-auto">
//                   <img 
//                     src={item.imageUrl} 
//                     alt={item.name} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-grow p-4">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                     <div className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F0B429" stroke="#F0B429" strokeWidth="1">
//                         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                       </svg>
//                       <span className="ml-1 text-sm text-gray-700">{item.rating.toFixed(1)}</span>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.brand}</span>
//                     <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.category}</span>
//                   </div>
//                 </div>
//                 <div className="md:w-1/4 p-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100">
//                   <p className="text-xl font-bold text-blue-600">${item.price}</p>
//                   <div className="flex gap-2 mt-4">
//                     <button
//                       onClick={() => handleAddToCart(item)}
//                       className="flex-grow py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                     >
//                       Add to Cart
//                     </button>
//                     <button 
//                       onClick={() => handleRemoveFromFavorites(item.id)}
//                       className="p-2 rounded-md bg-pink-500 text-white"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
//                         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//       {/* Footer */}
//       <Footer />
//     </div>
//     </div>
//   );
// }

// export default Favorites; 