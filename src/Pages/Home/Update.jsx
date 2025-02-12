import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loaderData = useLoaderData();
    console.log(loaderData)
    const [data, setData] = useState(loaderData);
    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const food = { name, location, quantity, date };

        console.log(loaderData._id)

        fetch(`http://localhost:4000/details/${(loaderData._id)}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                      });
                    console.log(data)
                    setData((prev) => ({
                        ...prev,
                        foodName: name,
                        foodQuantity: quantity,
                        pickupLocation: location,
                        expireDate: date,
                    }));
                }
            }
            )

    }

    return (
        <div className="mt-20">
            <h1 className="text-center font-bold text-red-500 text-4xl">Update</h1>
            <form onSubmit={handleForm} className="w-[60%] mx-auto p-5">
                <div className="flex justify-between items-center gap-5">
                    <div className="flex flex-col w-1/2">

                    <label htmlFor="">
                        <h1 className="text-red-500">Food Name</h1>
                    </label>
                    <input type="text" defaultValue={loaderData?.foodName} required name='name' className="w-full rounded-lg border-2 p-3 " />
                    </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <label htmlFor="">
                        <h1 className="text-red-500">Food Quantity</h1>
                    </label>
                    <input type="text" defaultValue={loaderData?.foodQuantity} required name='quantity' className="w-full rounded-lg border-2 p-3 " />
             </div>
                </div>
                <div className="flex justify-between items-center gap-5 my-3">
                    <div className="flex flex-col w-1/2">
                    <label htmlFor="">
                        <h1 className="text-red-500">Pickup Point</h1>
                    </label>
                    <input type="text" defaultValue={loaderData?.pickupLocation} required name='location' className="w-full rounded-lg border-2 p-3 " />
                    </div>
           <div  className="flex flex-col w-1/2">
           <label htmlFor="">
                        <h1 className="text-red-500">Expire Date</h1>
                    </label>
                    <input type="text" defaultValue={loaderData?.expireDate} required name='date' className="w-full rounded-lg border-2 p-3 " />
           </div>
                   

                </div>

                <button className="w-full btn bg-red-500">submit</button>
            </form>
        </div>
    );
};

export default Update;