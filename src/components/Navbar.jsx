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
      <nav className="py-8 px-8 bg-white">
        <div className="flex items-center justify-between md:px-24">
          <div className="text-2xl font-semibold">
            <a href="/">SparkBuy</a>
          </div>

          <div className="hidden md:flex items-center justify-center flex-grow space-x-12">
            <a
              href="#home"
              className="text-black hover:text-gray-700 border-b-2 border-[#CFCFCF]"
            >
              Home
            </a>
            <a href="#about" className="text-black hover:text-gray-700">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-700">
              Contact
            </a>
            <a href="#signup" className="text-black hover:text-gray-700">
              Sign Up
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                style={{ paddingLeft: "14px", backgroundColor: "#F5F5F5" }}
                placeholder="What are you looking for?"
                value={isSearchChange}
                onChange={(e) => setSearchChange(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="flex space-x-4">
              <Heart className="w-6 h-6" />
              <ShoppingCart className="w-6 h-6" />
            </div>
          </div>

          <button className="md:hidden" onClick={ToggleMenuBtn}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="md:hidden mt-4">
          {isMobMenuOpen && (
            <div className="mb-4">
              <a href="#home" className="block py-2 text-black">
                Home
              </a>
              <a href="#about" className="block py-2 text-black">
                About
              </a>
              <a href="#contact" className="block py-2 text-black">
                Contact
              </a>
              <a href="#signup" className="block py-2 text-black">
                Sign Up
              </a>
            </div>
          )}

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={isSearchChange}
              style={{ backgroundColor: "#F5F5F5" }}
              onChange={(e) => setSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <Heart className="w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </nav>

      <hr className="border-t border-gray-300 w-full -mt-4" />
    </>
  );
};

export default Navbar;
