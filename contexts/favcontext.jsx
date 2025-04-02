import { useLocation } from 'react-router-dom';

function FavoritesPage() {
  const { state } = useLocation();
  const { favorites } = state || { favorites: [] };  // default to empty favorites if no data

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div>
          {favorites.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button 
                onClick={() => {
                  // logic to remove item from favorites
                }}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
