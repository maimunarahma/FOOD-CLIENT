import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sorted, setSorted] = useState(false);

  // Fetch data based on sorting state
  useEffect(() => {
    fetch(`http://localhost:4000/featured?sortBy=${sorted ? "expireDate" : ""}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [sorted]);

  // Toggle sorting state
  const handleSorted = () => {
    setSorted((prev) => !prev);
  };

  return (
    <div>
      <div className="py-16 bg-gray-100">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-12">Featured Foods</h1>

        {/* Sort Button */}
        <div className="text-center mb-8">
          <button className="btn" onClick={handleSorted}>
            {sorted ? "Unsort" : "Sort by Expire Date"}
          </button>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div
                key={food._id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={food.foodImg}
                  alt={food.foodName}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">{food.foodName}</h2>
                  <p className="text-gray-600 text-lg mb-2">Expire Date: {food.expireDate}</p>
                  <p className="text-gray-600 text-lg mb-2">Status: {food.foodStatus}</p>
                  <p className="text-gray-600 text-lg mb-2">Quantity: {food.foodQuantity}</p>
                  <p className="text-gray-600 text-lg mb-2">Location: {food.pickupLocation}</p>
                  <p className="text-gray-600 text-lg mb-4">Price: ${food.price}</p>
                  <p className="text-gray-600 text-lg mb-4">Restaurant: {food.restaurantName}</p>

                  {/* Order Now Button */}
                  <Link to={`/details/${food._id}`}>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No foods available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
