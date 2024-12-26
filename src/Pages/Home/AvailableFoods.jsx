import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]); // State to store fetched food data
  const [sorted, setSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const { email } = useParams();

  // Fetch data based on sorting and email
  useEffect(() => {
    const fetchFoods = async () => {
      const endpoint = email
        ? `http://localhost:4000/featured/${email}?sortBy=${sorted ? "expireDate" : ""}`
        : `http://localhost:4000/featured?sortBy=${sorted ? "expireDate" : ""}`;

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setFoods(data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching foods:", err);
      }
    };

    fetchFoods();
  }, [email, sorted]); // Trigger fetch on email or sorted change

  // Toggle sorting state
  const handleSorted = () => setSorted((prev) => !prev);
  const [isGrid, setIsGrid] = useState(true); // Initial state is grid

  const toggleLayout = () => {
    setIsGrid((prev) => !prev); // Toggle between true and false
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  // Filter foods based on search query
  const filteredFoods = foods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="py-16 bg-gray-100">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-12">
          Featured Foods
        </h1>

        {/* Search Field */}
        <div className="text-center mb-8">
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Sort Button */}
          <button className="btn ml-4" onClick={handleSorted}>
            {sorted ? "Unsort" : "Sort by Expire Date"}
          </button>

          {/* Layout Toggle Button */}
          <button
            onClick={toggleLayout}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Toggle to {isGrid ? "List" : "Grid"} Layout
          </button>
        </div>

        {/* Food Cards */}
        <div
          className={`${
            isGrid
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          } container mx-auto`}
        >
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
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
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    {food.foodName}
                  </h2>
                  <p className="text-gray-600 text-lg mb-2">
                    Expire Date: {food.expireDate}
                  </p>
                  <p className="text-gray-600 text-lg mb-2">
                    Status: {food.foodStatus}
                  </p>
                  <p className="text-gray-600 text-lg mb-2">
                    Quantity: {food.foodQuantity}
                  </p>
                  <p className="text-gray-600 text-lg mb-2">
                    Location: {food.pickupLocation}
                  </p>
                  <p className="text-gray-600 text-lg mb-4">
                    Price: ${food.price}
                  </p>
                  <p className="text-gray-600 text-lg mb-4">
                    Restaurant: {food.restaurantName}
                  </p>

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
