import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router";

import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="h-6 w-50">
            <h1 className="text-3xl font-bold text-white hover:text-green-100 transition-colors duration-200">Elan</h1>
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <ul className="flex flex-row gap-3">
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-white bg-green-600/70 hover:bg-green-700/80 focus:ring-4 focus:outline-none focus:ring-green-300 backdrop-blur-sm rounded-lg text-sm px-4 py-2 transition-all duration-200 flex items-center justify-center gap-1 shadow-md hover:shadow-lg w-24"
                  >
                    Shop
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-green-200 z-50">
                      <div className="py-1">
                        <Link
                          to="/explore"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-emerald-600 transition-colors duration-200"
                        >
                          Explore
                        </Link>
                        <Link
                          to="/lift"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-emerald-600 transition-colors duration-200"
                        >
                          Lift
                        </Link>
                        <Link
                          to="/vault"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-emerald-600 transition-colors duration-200"
                        >
                          The Vault
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-white bg-green-600/70 hover:bg-green-700/80 focus:ring-4 focus:outline-none focus:ring-green-300 backdrop-blur-sm rounded-lg text-sm px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg w-24 flex items-center justify-center"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/basket" 
                    className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg w-24 flex items-center justify-center"
                  >
                    Basket
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleSignOut}
                    className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg w-24"
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
                  className="text-white bg-green-600/70 hover:bg-green-700/80 focus:ring-4 focus:outline-none focus:ring-green-300 backdrop-blur-sm rounded-lg text-sm px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg w-24 flex items-center justify-center"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link 
                  to="/sign-up" 
                  className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg w-24 flex items-center justify-center"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;