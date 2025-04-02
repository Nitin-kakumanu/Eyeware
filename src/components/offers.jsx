

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import { FiClock, FiTag, FiTruck, FiGift, FiEye, FiShoppingCart } from 'react-icons/fi';

function Offers() {
  const [activeTab, setActiveTab] = useState('all');
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handlePopupToggle = (offer = null) => {
    setSelectedOffer(offer);
    setPopupVisible(!popupVisible);
  };

  const goToShopPage = () => {
    navigate('/shop');
  };

  const offers = [
    {
      id: 1,
      title: "20% Off on All Eyewear",
      description: "Save 20% on all eyewear styles. Hurry, limited time only!",
      image: "https://media.istockphoto.com/id/471473187/photo/christmas-sale-20-off.webp?a=1&b=1&s=612x612&w=0&k=20&c=wfGQpwqxLDGK9R83FNb76C76o_Tbxqii4UtieqP3WxM=",
      type: "discount",
      expiry: "2025-09-31",
      code: "EYE20"
    },
    {
      id: 2,
      title: "Buy One, Get One Free",
      description: "Buy one pair of glasses, and get another one for free. Select styles only.",
      image: "https://media.istockphoto.com/id/1718343949/photo/buy-one-get-one-free.webp?a=1&b=1&s=612x612&w=0&k=20&c=J4yDg49sfSwgvHIBGYV2F7cuO36_x4cFp-9fkfTYz1U=",
      type: "bogo",
      expiry: "2025-10-30",
      code: "BOGOFREE"
    },
    {
      id: 3,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $50. No hidden fees!",
      image: "https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlZSUyMFNoaXBwaW5nfGVufDB8fDB8fHww",
      type: "shipping",
      expiry: "2025-12-31",
      code: "FREESHIP"
    },
    {
      id: 4,
      title: "30% Off Premium Collection",
      description: "Get 30% off on our premium eyewear collection. Limited stock!",
      image: "https://images.unsplash.com/photo-1532920092365-f0ba59b286e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEV5ZXdlYXIlMjBGZWF0dXJlZHxlbnwwfHwwfHx8MA%3D%3D",
      type: "discount",
      expiry: "2025-11-15",
      code: "PREMIUM30"
    },
    {
      id: 5,
      title: "Student Discount - 15% Off",
      description: "Exclusive 15% discount for students with valid ID.",
      image: "data:image/jpeg;base64,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",
      type: "student",
      expiry: "2025-07-31",
      code: "STUDENT15"
    }
  ];

  const filteredOffers = activeTab === 'all' 
    ? offers 
    : offers.filter(offer => offer.type === activeTab);

  return (
    <div className="min-h-screen my-36 bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Eyewear Offers</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Unbelievable savings and amazing deals just for you. Don't miss out!
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <button 
            onClick={goToShopPage}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Offer Categories */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-medium ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            All Offers
          </button>
          <button
            onClick={() => setActiveTab('discount')}
            className={`px-4 py-2 rounded-full font-medium flex items-center ${activeTab === 'discount' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            <FiTag className="mr-2" /> Discounts
          </button>
          <button
            onClick={() => setActiveTab('bogo')}
            className={`px-4 py-2 rounded-full font-medium flex items-center ${activeTab === 'bogo' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            <FiGift className="mr-2" /> BOGO
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-4 py-2 rounded-full font-medium flex items-center ${activeTab === 'shipping' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            <FiTruck className="mr-2" /> Free Shipping
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={`px-4 py-2 rounded-full font-medium flex items-center ${activeTab === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            <FiEye className="mr-2" /> Student Deals
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOffers.map(offer => (
            <div key={offer.id} className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                {offer.type === 'discount' && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </div>
                )}
                {offer.type === 'bogo' && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BOGO
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <FiClock className="mr-1" />
                    <span>Expires: {offer.expiry}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-bold">{offer.code}</span>
                  <button 
                    onClick={() => handlePopupToggle(offer)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FiShoppingCart className="mr-2" /> Get Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">How Our Offers Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTag className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Find Your Offer</h3>
              <p className="text-gray-300">Browse through our exclusive offers and select the one that suits you best.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShoppingCart className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Add to Cart</h3>
              <p className="text-gray-300">Add your favorite eyewear to cart and apply the offer code at checkout.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Enjoy Savings</h3>
              <p className="text-gray-300">Receive your order with amazing savings and look your best!</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want More Exclusive Offers?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, special promotions, and exclusive discounts.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg text-gray-800 flex-grow"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {popupVisible && selectedOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedOffer.title}</h3>
                <button 
                  onClick={() => handlePopupToggle()}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedOffer.image} 
                  alt={selectedOffer.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <p className="text-gray-300 mb-4">{selectedOffer.description}</p>
              
              <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg mb-6">
                <div className="font-semibold text-blue-300 mb-2">Your Offer Code:</div>
                <div className="text-2xl font-bold text-blue-400">{selectedOffer.code}</div>
                <div className="text-sm text-gray-400 mt-2">Expires: {selectedOffer.expiry}</div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={goToShopPage}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2" /> Shop Now
                </button>
                <button 
                  onClick={() => navigator.clipboard.writeText(selectedOffer.code)}
                  className="px-4 py-3 bg-gray-700 border border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Offers;