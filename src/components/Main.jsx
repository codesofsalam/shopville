import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heart, Eye } from "lucide-react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "./Main.css";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4.8,
    reviews: 88,
    image: "/remoteplayer.png",
  },
  {
    id: 2,
    name: "Wireless Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4.5,
    reviews: 75,
    image: "/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.9,
    reviews: 99,
    image: "/lcd.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.7,
    reviews: 99,
    image: "/chair.png",
  },
  {
    id: 5,
    name: "iPhone 16",
    price: 799,
    originalPrice: 900,
    discount: 25,
    rating: 4.7,
    reviews: 99,
    image: "/iphone16.png",
  },
];

const ProductCard = ({ product }) => (
  <div className="group">
    <div className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full z-10">
        -{product.discount}%
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 hover:text-blue-500 transition-colors">
          <Eye className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4 relative group-hover:scale-105 transition-transform duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg"
        />
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-bold text-lg">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${product.originalPrice}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-gray-500 text-sm">({product.reviews})</span>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="bg-gray-900 text-white rounded-xl px-4 py-2 min-w-[70px]">
      <span className="text-2xl font-bold">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-sm text-gray-600 mt-1 block">{label}</span>
  </div>
);

TimeUnit.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const Main = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = "March, 31, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="space-y-2">
          <h5 className="text-red-500 font-medium text-lg">Today&apos;s</h5>
          <h1 className="text-3xl font-bold text-gray-900">Flash Sales</h1>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <TimeUnit value={days} label="Days" />
            <span className="text-2xl font-bold self-start mt-2">:</span>
            <TimeUnit value={hours} label="Hours" />
            <span className="text-2xl font-bold self-start mt-2">:</span>
            <TimeUnit value={mins} label="Minutes" />
            <span className="text-2xl font-bold self-start mt-2">:</span>
            <TimeUnit value={secs} label="Seconds" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        className="pb-12"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-8">
        <button className="px-12 py-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors duration-300 shadow-sm hover:shadow-md">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Main;
