import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
 
 const Details = () => {
    const data=useLoaderData();
    console.log(data)
    
    const handleRequest=()=>{
        fetch(`http://localhost:4000/transfer/${data._id}`)
        .then(res=> res.json())
        .then(data=>{console.log(data)
            alert('Food item successfully requested!');
        })
    }
    return (
        <div key={data._id} >
      <img src={data.foodImg} alt="" />
                <h1 className="font-bold text-6xl" >{data.foodName}</h1>
           <button onClick={handleRequest} className="btn">Request food</button>
        </div>
    );
 };
 
 export default Details;