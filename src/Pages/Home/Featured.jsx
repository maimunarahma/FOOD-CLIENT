import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const [foods,setFoods]=useState([])
  useEffect(() => {
    // Fetch data only once when the component mounts
<<<<<<< HEAD
    axios.get("http://localhost:4000/featured?limit=6",foods)
=======
    axios.get("http://localhost:4000/featured?limit=6")
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52
      .then((res) => {
        setFoods(res.data);
      })
      .catch((error) => {
        console.error("Error fetching featured foods:", error);
      });
  }, []);
    return (

     
        <div className="py-12 bg-gray-300">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-8">Featured Foods</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
            {foods.map((food) => (
                <div
                    key={food._id}
                    className="flex flex-col justify-between items-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={food.foodImg}
                        alt={food.foodName}
                        className="h-56 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {food.foodName}
                        </h2>
                        <p className="text-gray-600 mb-4">Quantity: {food.foodQuantity}</p>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
      <Link><button className="btn bg-red-600 text-white">SHOW ALL</button></Link>  
    </div>
    
    );
};

export default Featured;