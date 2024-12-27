import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isSearchChange, setSearchChange] = useState("");

  const ToggleMenuBtn = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 px-4 md:px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                  SparkBuy
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
                <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b-2 border-blue-600 transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-all">
                  About
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-all">
                  Contact
                </a>
                <a href="#signup" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-all">
                  Sign Up
                </a>
              </div>

              {/* Desktop Search and Icons */}
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

            {/* Mobile Menu */}
            <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMobMenuOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <div className="space-y-2 pb-4">
                <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  Home
                </a>
                <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  About
                </a>
                <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  Contact
                </a>
                <a href="#signup" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  Sign Up
                </a>
              </div>

              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={isSearchChange}
                  onChange={(e) => setSearchChange(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex justify-center space-x-6 mt-4">
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
          </div>
        </div>
      </nav>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </>
  );
};

export default Navbar;