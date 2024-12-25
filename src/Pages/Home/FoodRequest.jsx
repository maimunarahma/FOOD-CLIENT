import { useState } from "react";


const FoodRequest = () => {
    const [reqFood,setReqFood]=useState([]);

    fetch('http://localhost:4000/myRequests')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setReqFood(data)
    })
    return (
        <div>
            {reqFood.map(food=>(<div key={food._id}>
<img src={food.foodImg} alt="" />
<h1>{food.foodName}</h1>
            </div>))}
        </div>
    );
};

export default FoodRequest;