import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const { userData } = location.state || {};
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-800 text-white fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold">
                Brand
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a onClick={() => navigate('/')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Home
              </a>
              <a onClick={() => navigate('/games', {state: {userData}})} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Games
              </a>
              <a onClick={() => navigate('/quiz', {state: {userData}})} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Quiz
              </a>
              <a onClick={() => navigate('/register')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Register
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a onClick={() => navigate('/')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                Home
              </a>
              <a onClick={() => navigate('/games', {state: {userData}})} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Games
              </a>
              <a onClick={() => navigate('/quiz', {state: {userData}})} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                Quiz
              </a>
              <a onClick={() => navigate('/register')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                Profile
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  };

export default Navbar;