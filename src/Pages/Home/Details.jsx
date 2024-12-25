import { useState } from "react";
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
    const[toggole,setToggole]=useState(true)
    const handleToggole=()=>{
       console.log('clicked toggole',toggole)
        if(toggole){
            document.getElementById('my_modal_5').showModal() 
            
        }
        setToggole(!toggole);
        }
    return (
        <div key={data._id} >
      <img src={data.foodImg} alt="" />
                <h1 className="font-bold text-6xl" >{data.foodName}</h1>
         <button onClick={handleToggole}>Request</button>
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <img src={data.foodImg} alt="" />
    <h3 className="font-bold text-lg">{data.foodName}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={()=>setToggole(true)}>Close</button>
      </form>
    </div>
  </div>
</dialog>
           <button onClick={handleRequest} className="btn">Request food</button>
        </div>
    );
 };
 
 export default Details;