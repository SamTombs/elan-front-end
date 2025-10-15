import { useContext } from "react";
import { Link } from "react-router";

import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav
      className="flex justify-between h-20 items-center px-4"
    >
      <Link to="/" className="h-6 w-50">
        <h1>Elan</h1>
      </Link>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-300 text-sm">
            Welcome, {user.first_name || user.username}!
          </span>
          <ul className="flex flex-row gap-3">
            <li>
              <Link 
                to="/" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/explore" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link 
                to="/lift" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                Lift
              </Link>
            </li>
            <li>
              <Link 
                to="/the-vault" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                The Vault
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/basket" 
                className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                Basket
              </Link>
            </li>
            <li>
              <button 
                onClick={handleSignOut}
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="flex flex-row gap-3">
          <li>
            <Link 
              to="/sign-in" 
              className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link 
              to="/sign-up" 
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;