import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import IphoneBanner1 from "../assets/iphone-16-family.jpg";
import IphoneBanner2 from "../assets/iphone16-banner.webp";
import IphoneBanner3 from "../assets/Pre-register-banner.webp";
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

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden bg-gray-50">
      <aside className="bg-white w-full lg:w-64 overflow-y-auto lg:block lg:ml-28 border-b lg:border-b-0 shadow-sm">
        <nav className="py-2 lg:py-4">
          <h2 className="px-3 lg:px-6 text-lg font-semibold text-gray-800 mb-2 hidden lg:block">
            Categories
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1 lg:space-y-1.5">
            {menuItems.map((item, index) => (
              <li key={index}>
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

      <div className="hidden lg:block w-px h-96 bg-gray-200 self-center"></div>

      <div className="flex-1 overflow-y-auto px-4 lg:px-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600'
          }}
          className="mt-2 lg:mt-4 rounded-xl overflow-hidden shadow-lg"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex justify-center bg-white">
              <img
                src={IphoneBanner1}
                alt="iPhone Banner 1"
                className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:max-h-[60vh] w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center bg-white">
              <img
                src={IphoneBanner2}
                alt="iPhone Banner 2"
                className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:max-h-[70vh] w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center bg-white">
              <img
                src={IphoneBanner3}
                alt="iPhone Banner 3"
                className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:max-h-[60vh] w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;