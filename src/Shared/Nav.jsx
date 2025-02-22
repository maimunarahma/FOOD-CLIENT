import { useContext, useEffect, useState } from "react";
import logo from "../assets/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav = () => {
  const { user, signoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save preference
  }, [theme]);
  const handleSignOut = () => {
    signoutUser();
  };

  return (
    <nav className="navbar bg-gradient-to-r from-orange-100 via-red-50 to-yellow-100 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-10">
      {/* Navbar Start: Logo */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-3 px-4">
          <img src={logo} alt="Food Teddy Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold text-orange-600">Food Teddy</span>
        </Link>
      </div>

      {/* Navbar Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-orange-600 transition duration-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to={user?.email ? `/availableFoods/${user.email}` : '/availableFoods'} className="hover:text-orange-600 transition duration-300">
              AVAILABLE FOODS
            </Link>
          </li>
          <li>
           
          </li>
          {user && (
            <>
              <li>
                <Link to="/addFood" className="hover:text-orange-600 transition duration-300">
                  ADD FOODS
                </Link>
              </li>
              <li>
                <Link  to={`/myRequests/${user.email}`}  className="hover:text-orange-600 transition duration-300">
                  MY FOOD REQUEST
                </Link>
              </li>
              <li>
                <Link to={`/manageFood/${user.email}`} className="hover:text-orange-600 transition duration-300">
                  MANAGE MY FOODS
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End: User Actions */}
      <div className="navbar-end flex items-center gap-4 px-4">
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-orange-400 shadow-md"
            />
            <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
 
  <div
        onClick={() => setDarkMode(!darkMode)}
        className="swap swap-rotate"
      >
         <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
      </div>
  {/* moon icon */}

</label>
            <button
              onClick={handleSignOut}
              className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
            >
              SIGN OUT
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
          >
            LOG IN
          </Link>
        )}
      </div>

      {/* Responsive Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to={user?.email ? `/availableFoods/${user.email}` : '/availableFoods'} >AVAILABLE FOODS</Link>
            </li>
            <li>
              <Link to="/most-popular">MOST POPULAR</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/addFood">ADD FOODS</Link>
                </li>
                <li>
                  <Link  to={`/myRequests/${user.email}`}>MY FOOD REQUEST</Link>
                </li>
                <li>
                  <Link to={`/manageFood/${user.email}`} >MANAGE MY FOODS</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
