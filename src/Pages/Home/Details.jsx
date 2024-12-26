import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user);

  const [modalOpen, setModalOpen] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleRequest = (e) => {
    e.preventDefault(); // Prevent form submission
    const requestData = {
      foodId: data._id,
      foodName: data.foodName,
      foodImg: data.foodImg,
      donorEmail: user?.email,
      donorName: user?.displayName,
      pickupLocation: data.pickupLocation,
      expireDate: data.expireDate,
      additionalNotes: additionalNotes, // From the state
    };
    console.log(document.querySelector('form')); // Check if the form is present

    fetch(`http://localhost:4000/myRequests/${user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Food item successfully requested!");
        } 
        alert("Food item successfully requested!");
      });
  };

  return (
    <div key={data._id} className="w-1/2 mx-auto my-16 flex flex-col justify-center items-center  border-2 p-5 py-8 rounded-lg">
      <img src={data.foodImg} alt="" className="w-1/2 rounded"/>
      <h1 className="font-bold text-6xl">{data.foodName}</h1>
      <button onClick={() => setModalOpen(true)} className="bg-red-500 text-white btn mt-3">Request</button>

      {modalOpen && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <img src={data.foodImg} alt="" />
            <h3 className="font-bold text-lg">{data.foodName}</h3>
            <form className="card-body" onSubmit={handleRequest} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input className="input input-bordered" readOnly value={data.foodName} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Id</span>
                </label>
                <input value={data._id} className="input input-bordered" readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Donor Email</span>
                </label>
                <input className="input input-bordered" readOnly value={user?.email} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Donor Name</span>
                </label>
                <input className="input input-bordered" readOnly value={user?.displayName} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input className="input input-bordered" readOnly value={data.pickupLocation} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input className="input input-bordered" readOnly value={data.expireDate} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn bg-orange-500 text-white">
                Request food
              </button>
              <button className="btn" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Details;
