import { useLoaderData } from "react-router-dom";

 
 const Details = () => {
    const data=useLoaderData(data);
    console.log(data)
    console.log(id)
    return (
        <div>
            {data.map((food=>
                <h1>{food.foodName}</h1>
            ))}
        </div>
    );
 };
 
 export default Details;