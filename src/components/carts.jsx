import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen my-24 bg-gray-900 text-gray-100"> {/* Dark gray background */}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-white">Your Cart ({cart.length})</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Your cart is empty</p>
            <Link 
              to="/specs" 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {cart.map(item => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                />
                
                <div className="flex-grow">
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <p className="text-gray-400">{item.brand}</p>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-white">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <p className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
            
            <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Subtotal</h3>
                <p className="text-xl font-bold text-blue-400">${totalPrice.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <Link 
                  to="/specs" 
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link 
                  to="/checkout" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}