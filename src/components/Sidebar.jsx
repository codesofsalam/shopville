import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import IphoneBanner1 from "../assets/iphone-16-family.jpg";
import IphoneBanner2 from "../assets/iphone16-banner.webp";
import IphoneBanner3 from "../assets/Pre-register-banner.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sidebar = () => {
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
    <div className="flex h-screen overflow-hidden">
      <aside className="bg-white w-64 overflow-y-auto hidden lg:block ml-28">
        <nav className="py-4">
          <ul className="space-y-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center justify-between px-6 py-2"
                >
                  <span className="text-sm">{item.name}</span>
                  {item.hasArrow && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="w-px bg-gray-300 hidden lg:block"></div>
      <div className="flex-1 overflow-y-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mt-4"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={IphoneBanner1}
                alt="iPhone Banner 1"
                className="max-h-[60vh] w-full object-contain md:max-h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={IphoneBanner2}
                alt="iPhone Banner 2"
                className="max-h-[90vh]  object-contain md:max-h-[70vh] md:max-w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={IphoneBanner3}
                alt="iPhone Banner 3"
                className="max-h-[60vh] w-full object-contain md:max-h-[50vh]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sidebar;
