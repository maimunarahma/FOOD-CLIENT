import { useContext } from "react";
import logo from "../assets/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Nav = () => {
    const {user, signoutUser}= useContext(AuthContext)
    console.log(user)
    const handleSignOut=()=>{
        signoutUser()
    }
    return (
        <div>
     <div className="navbar bg-base-100  bg-transparent fixed top-0 left-0 w-full z-10 backdrop-blur-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>Item 1</li>
        <li>
          Parent
          <ul className="p-2">
            <li>Submenu 1</li>
            <li>Submenu 2</li>
          </ul>
        </li>
        <li>Item 3</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl flex items-center gap-3"><img src={logo} alt="" className="w-15 h-10"/><h1>Food Teddy</h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
     <Link to='/'><li>HOME</li></Link>
      <li>
        
      AVAILABLE FOODS
      </li>
      <li>MOST POPULAR</li>
    {user && 
    <>
     <li><Link to='/addFood'>ADD FOODS</Link></li>
     <li><Link to='/manageFood'>MY FOOD REQUEST</Link></li>
     <li><Link to='/reqFood'>MANAGE MY FOODS</Link></li>
    </>
   }
    </ul>
  </div>
  <div className="navbar-end">
  {user? 
  <>
  <img src={user.photoURL} alt="" className="w-15 h-10 border-2 border-orange-300 rounded-full "/>
   <Link onClick={handleSignOut}> <a className="btn">SIGN OUT</a></Link>
  </>
 :
  <Link to='/login'> <a className="btn">LOG IN</a></Link>
}  
   
  </div>
</div>
        </div>
    );
};

export default Nav;