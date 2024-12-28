import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isSearchChange, setSearchChange] = useState("");
  const location = useLocation();

  const ToggleMenuBtn = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="py-6 px-4 md:px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
              >
                ShopVille
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
              <Link
                to="/"
                className={`text-gray-800 font-medium py-2 border-b-2 transition-colors ${
                  isActive("/") ? "border-blue-600" : "border-transparent hover:border-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-600 font-medium py-2 border-b-2 transition-colors ${
                  isActive("/about") ? "border-blue-600" : "border-transparent hover:border-blue-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-gray-600 font-medium py-2 border-b-2 transition-colors ${
                  isActive("/contact") ? "border-blue-600" : "border-transparent hover:border-blue-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/signup"
                className={`text-gray-600 font-medium py-2 border-b-2 transition-colors ${
                  isActive("/signup") ? "border-blue-600" : "border-transparent hover:border-blue-600"
                }`}
              >
                Sign Up
              </Link>
            </div>

            {/* Search Bar and Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={isSearchChange}
                  onChange={(e) => setSearchChange(e.target.value)}
                  className="w-64 pl-4 pr-10 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group">
                  <Heart className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group">
                  <ShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={ToggleMenuBtn}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
              isMobMenuOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="space-y-2 pb-4">
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive("/") ? "bg-gray-100 text-blue-600" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive("/about") ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive("/contact") ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/signup"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive("/signup") ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
