import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Add Food</h1>
      <form onSubmit={handleAddFood} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Food Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter food name"
            name="name"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Food Image URL</span>
          </label>
          <input
            type="url"
            placeholder="Enter image URL"
            name="pic"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Food Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Enter quantity"
            name="quantity"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Pickup Location</span>
          </label>
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Expire Date</span>
          </label>
          <input
            type="date"
            name="exp"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Additional Notes</span>
          </label>
          <textarea
            placeholder="Add any additional information"
            name="notes"
            className="textarea textarea-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-purple-700">Food Status</span>
          </label>
          <input
            type="text"
            value="Available"
            className="input input-bordered w-full border-purple-400 focus:ring-2 focus:ring-purple-600"
            readOnly
          />
        </div>

        {user && (
          <div className="text-center mt-6">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold text-purple-800 mt-2">{user.displayName}</h2>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFood;
