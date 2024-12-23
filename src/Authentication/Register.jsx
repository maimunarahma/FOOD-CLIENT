import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {  updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";


const Register = () => {
    const {registerUser,user,setUser}= useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        const name=e.target.name.value;
        const pic=e.target.pic.value;
        registerUser(email,pass)
        .then(data=>{
            setUser(data.user)
         updateProfile(data.user, { displayName: name, photoURL: pic });
             console.log(user)
      
    })
    .catch(err=> console.log(err))

    }
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl">Register Now</h1>
      <form className="card-body" onSubmit={handleRegister}>
      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="" placeholder="photo URL" name='pic' className="input input-bordered" required />
          </div>
        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>  
        </div>
    );
};

export default Register;