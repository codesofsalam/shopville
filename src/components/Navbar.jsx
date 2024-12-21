import {
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isSearchChange, setSearchChange] = useState("");
  const ToggleMenuBtn = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  return (
    <nav className="my-6 mx-24 bg-white">
      {/* Top bar */}
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Title */}
        <div className="text-2xl font-semibold flex-shrink-0">
          <a href="/">SparkBuy</a>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center space-x-12 items-center flex-grow">
          {/* Navigation Links */}
          <a href="#home" className="hover:text-gray-700">Home</a>
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
          <a href="#signup" className="hover:text-gray-700">Sign Up</a>
          </div>
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={isSearchChange}
              onChange={(e) => setSearchChange(e.target.value)}
              className="w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <HeartIcon className="w-6 h-6" />
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
      

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={ToggleMenuBtn}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4">
        {/* Navigation Links */}
        <div
          className={`${isMobMenuOpen ? "block" : "hidden"} mb-4`}
        >
          <a href="#home" className="block py-2">
            Home
          </a>
          <a href="#about" className="block py-2">
            About
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>
          <a href="#signup" className="block py-2">
            SignUp
          </a>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={isSearchChange}
            onChange={(e) => setSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <HeartIcon className="w-6 h-6 text-red-500" />
          <ShoppingCartIcon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
