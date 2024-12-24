import { useLoaderData } from "react-router-dom";

 
 const Details = () => {
    const data=useLoaderData();
    console.log(data)
    
    return (
        <div key={data._id} >
      <img src={data.foodImg} alt="" />
                <h1 className="font-bold text-6xl">{data.foodName}</h1>
          
        </div>
    );
 };
 
 export default Details;