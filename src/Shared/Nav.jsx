import { useContext } from "react";
import logo from "../assets/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav = () => {
  const { user, signoutUser } = useContext(AuthContext);

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
            <Link to="/most-popular" className="hover:text-orange-600 transition duration-300">
              MOST POPULAR
            </Link>
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
