// src/components/Reviews.jsx
import React from 'react';

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'This is the best product I have ever bought! Highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Great quality, but the shipping was a little slow. Overall, I am happy with my purchase.',
  },
  {
    name: 'Michael Lee',
    rating: 5,
    comment: 'Fantastic! The product exceeded my expectations. Will definitely buy again.',
  },
  {
    name: 'Emily Johnson',
    rating: 3,
    comment: 'The product is good, but I think it could be a little more affordable.',
  },
  {
    name: 'Anna W.',
    rating: 4,
    comment: 'I love the design, and it works great for what I need. A bit more attention to detail would make it perfect.',
  },
  {
    name: 'Chris B.',
    rating: 5,
    comment: 'Absolutely love it! The performance is top-notch, and it looks amazing.',
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 w-320 py-10 mx-2 flex- justify-center my-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Customer Reviews</h2>
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                {/* Rating */}
                <div className="ml-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
              </div>
              {/* Comment */}
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
