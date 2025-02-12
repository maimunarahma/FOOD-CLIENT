import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerTestimonials from "./CustomerTestimonial";
// import ThemedSection from "./ThemeSection";
import { ThemeContext } from "./ThemeProvider";

const Featured = () => {
  const {darkMode}=useContext(ThemeContext)
  console.log(darkMode)
  const [foods,setFoods]=useState([])
  console.log(foods)
  useEffect(() => {
  axios.get("http://localhost:4000/featured?limit=6")

      .then((res) => {
        setFoods(res.data);
      })
      .catch((error) => {
        console.error("Error fetching featured foods:", error);
      });
  }, []);
    return (
  <div >

<div className="py-12 dark:bg-gray-500 bg-gradient-to-br from-gray-800 to-gray-600">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-8">Featured Foods</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
            {foods.map((food) => (
                <div
                    key={food._id}
                    className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={food.foodImg}
                        alt={food.foodName}
                        className="w-full h-64 object-cover object-center"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {food.foodName}
                        </h2>
                        <p className="text-lg font-bold text-orange-600">${food.price}</p>
                        <p className="text-lg font-medium text-yellow-500">{'⭐ ' + food.rating}</p>
                        <p className="text-gray-600 mb-4">Quantity: {food.foodQuantity}</p>
                        <Link to={`/details/${food._id}`}>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                            Order Now
                        </button>
                        </Link>
                       
                    </div>
                </div>
            ))}
        </div>
      <Link to='/availableFoods/:email?'><button className="btn bg-orange-600 text-white">SHOW ALL</button></Link>  
    </div>
     <CustomerTestimonials></CustomerTestimonials>
  </div>
     
     
    
    );
};

export default Featured;