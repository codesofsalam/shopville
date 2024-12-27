import React from "react";
import { ChevronRight } from "lucide-react";

// Import images
import ShoppingBanner1 from "../assets/shopping.jpg";
import ShoppingBanner2 from "../assets/shopping2.jpg";
import ShoppingBanner3 from "../assets/shopping3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const menuItems = [
    { name: "Woman's Fashion", hasArrow: true },
    { name: "Men's Fashion", hasArrow: true },
    { name: "Electronics", hasArrow: false },
    { name: "Home & LifeStyle", hasArrow: false },
    { name: "Medicine", hasArrow: false },
    { name: "Sports & Outdoor", hasArrow: false },
    { name: "Baby's & Toys", hasArrow: false },
    { name: "Groceries & Pets", hasArrow: false },
    { name: "Health & Beauty", hasArrow: false },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      alt: "iPhone Banner 1",
      imageUrl: ShoppingBanner1, // Using imported image
    },
    {
      id: 2,
      alt: "iPhone Banner 2",
      imageUrl: ShoppingBanner2, // Using imported image
    },
    {
      id: 3,
      alt: "iPhone Banner 3",
      imageUrl: ShoppingBanner3, // Using imported image
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden bg-gray-50">
      <aside className="bg-white w-full lg:w-64 overflow-y-auto lg:block lg:ml-14 border-b lg:border-b-0 shadow-sm">
        <nav className="py-2 lg:py-4">
          <h2 className="px-3 lg:px-6 text-lg font-semibold text-gray-800 mb-2 hidden lg:block">
            Categories
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1 lg:space-y-1.5">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center justify-between px-3 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg group"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasArrow && (
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="hidden lg:block w-px h-96 bg-gray-200 self-center" />

      <div className="flex-1 overflow-y-auto px-4 lg:px-8">
        <div className="relative mt-2 lg:mt-4 rounded-xl overflow-hidden shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full">
                <div className="flex justify-center bg-white">
                  <img
                    src={slide.imageUrl} // Using the imported image path
                    alt={slide.alt}
                    className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSlide === index ? "bg-blue-600" : "bg-gray-300"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
