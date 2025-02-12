import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ClipLoader from "react-spinners/ClipLoader";

const FoodRequest = () => {
  const [reqFood, setReqFood] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/myRequests/${user.email}`, { withCredentials: true })
      .then((data) => {
        console.log(data.data);
        setReqFood(data.data);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-20 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Food Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {reqFood.length>0 ? reqFood.map((food) => (
          <div
            key={food._id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={food.foodImg}
              alt={food.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{food.foodName}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {food.additionalNotes ? food.additionalNotes : "No additional notes"}
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
              <div className="text-white opacity-0 hover:opacity-100 text-center px-4">
                <h3 className="text-lg font-bold">{food.foodName}</h3>
                <p className="text-sm">{food.pickupLocation}</p>
                <p className="text-sm">{new Date(food.expireDate).toDateString()}</p>
              </div>
            </div>
          </div>
        )): 
        <div className="text-center text-red-600 col-span-full">
        <ClipLoader/>
        </div>}
      </div>
    </div>
  );
};

export default FoodRequest;
