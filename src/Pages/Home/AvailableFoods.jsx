<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
const AvailableFoods = () => {
    // const data=useLoaderData()
    const [foods, setFoods] = useState([]);
    const [sorted,setSorted]=useState(false)
  useEffect(()=>{
    fetch( `http://localhost:4000/featured?sortBy=${sorted?"expireDate":""}`)
    .then(res=> res.json())
    .then(data=> {
      
      console.log(foods)
      setFoods(data)})
  })
    
    const handlesorted=()=>{
    setSorted(!sorted);

    }
=======
import { useLoaderData } from "react-router-dom";


const AvailableFoods = () => {
    const data=useLoaderData()
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52
    return (
        <div>
            <div className="py-16 bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-12">Featured Foods</h1>
<<<<<<< HEAD
      <button className="btn" onClick={handlesorted}> {sorted? "unsort":"sort by expire date"}</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto">
        {foods.map((food) => (
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto">
        {data.map((food) => (
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52
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

<<<<<<< HEAD
             
             <Link to={`/details/${food._id}`}> <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300">
                Order Now
              </button></Link>
=======
              <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300">
                Order Now
              </button>
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default AvailableFoods;