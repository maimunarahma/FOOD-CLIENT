import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";


const ManageFood = () => {
    const data = useLoaderData();
    const navigate = useNavigate();


    const [foods, setFoods] = useState([]);
    useEffect(() => {
        setFoods(data)
    }, [data])
    
    
    useEffect(() => {
        if (data && data.email) {
            axios
                .get(`http://localhost:4000/featured/${data.email}`)
                .then((res) => {
                    setFoods(res.data);
                    // setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching foods:", error);
                    // setLoading(false);
                });
        }
    }, [data]);
    
    
    console.log(foods)

  
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete the food item from the server using axios
                axios.delete(`http://localhost:4000/details/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {

                            setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
                            // setLoading(true);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting food:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the item.",
                            icon: "error",
                        });
                    })
                    navigate('/');
            }
        });
    };

    return (
        <div className="bg-gradient-to-br mt-20 from-gray-50 to-gray-200 min-h-screen p-12">
            <h1 className="text-5xl font-extrabold text-center text-red-500 mb-10">Manage Foods</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {foods.map((food) => (
                    <div
                        key={food._id}
                        className="rounded-xl shadow-xl bg-white overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={food.foodImg}
                            alt={food.foodName}
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{food.foodName}</h2>
                            <p className="text-lg text-gray-700">
                                <span className="font-bold">Price:</span> ${food.price}
                            </p>
                            <p className="text-lg text-gray-700 mt-2">
                                <span className="font-bold">Quantity:</span> {food.foodQuantity}
                            </p>
                            <p className="text-lg text-gray-700 mt-2">
                                <span className="font-bold">Pickup Location:</span> {food.pickupLocation}
                            </p>
                            <p className="text-lg text-gray-700 mt-2">
                                <span className="font-bold">Expires On:</span> {food.expireDate}
                            </p>
                            <p className="text-lg text-gray-700 mt-2 italic">{food.additionalNotes}</p>

                            <div className="mt-6 space-x-4 flex justify-between">
                                <Link to={`/update/${food._id}`}>
                                    <button className=" py-3 px-6 border-2 btn-outline btn-error bg-orange-100 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200">
                                        Edit Food
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(food._id)}
                                    className="w-1/2 py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
                                >
                                    Delete
                                </button>
                             
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ManageFood;
