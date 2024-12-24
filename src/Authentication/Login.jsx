import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {loginUser}= useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        loginUser(email,pass)
        .then(data=> console.log(data))
        .then(err=> console.log(err))

    }
    return (
        <div className="bg-red-500 my-20">
           <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
      <form className="" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email:</span>
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
          <h1>New to website?<Link to='/register'>Register</Link></h1>
        </div>
      </form>
    </div>  
        </div>
    );
};

export default Login;