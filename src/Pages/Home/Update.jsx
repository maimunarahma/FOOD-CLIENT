import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderData = useLoaderData();
    console.log(loaderData)
    const [data, setData] = useState({});
    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const food = { name, location, quantity, date };

        console.log(loaderData._id)

        fetch(`http://localhost:4000/update/${(loaderData._id)}`, {
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
                    alert('updated successfully')
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
            <h1>Update</h1>
            <form onSubmit={handleForm} className="w-[60%] mx-auto p-5">
                <div className="flex justify-between items-center gap-5">
                    <input type="text" defaultValue={loaderData?.foodName} required name='name' className="w-1/2 rounded-lg border-2 p-3 " />
                    <input type="text" defaultValue={loaderData?.foodQuantity} required name='quantity' className="w-1/2 rounded-lg border-2 p-3 " />
                </div>
                <div className="flex justify-between items-center gap-5 my-3">
                    <input type="text" defaultValue={loaderData?.pickupLocation} required name='location' className="w-1/2 rounded-lg border-2 p-3 " />
                    <input type="text" defaultValue={loaderData?.expireDate} required name='date' className="w-1/2 rounded-lg border-2 p-3 " />

                </div>

                <button className="w-full btn">submit</button>
            </form>
        </div>
    );
};

export default Update;