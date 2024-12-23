import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heart, Eye } from "lucide-react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "./main.css";

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
    name: "AK-900 Wired Keyboard",
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
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.7,
    reviews: 99,
    image: "/chair.png",
  },
];

const ProductCard = ({ product }) => (
  <div className="relative group bg-white p-4 rounded-lg shadow hover:shadow-lg">
    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
      -{product.discount}%
    </div>
    <div className="absolute top-2 right-2 flex flex-col gap-2">
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
        <Heart className="w-5 h-5" />
      </button>
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
        <Eye className="w-5 h-5" />
      </button>
    </div>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="font-medium mb-2">{product.name}</h3>
    <div className="flex gap-2 mb-2">
      <span className="text-red-500 font-bold">${product.price}</span>
      <span className="text-gray-500 line-through">
        ${product.originalPrice}
      </span>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400">
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
      </div>
      <span className="text-gray-500">({product.reviews})</span>
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

const Main = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

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
    <div className=" mx-auto p-8 ml-24">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h5 className="text-red-500 mb-1">Today&apos;s</h5>
          <h1 className="text-2xl font-bold">Flash Sales</h1>
        </div>

        <div className="flex items-center gap-8 mr-96">
          <div className="flex gap-6">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: mins },
              { label: "Seconds", value: secs },
            ].map(({ label, value }, index) => (
              <div key={label} className="text-center">
                <span className="text-sm text-gray-600 block mb-1">
                  {label}
                </span>
                <div className="text-2xl font-bold flex items-center">
                  {value < 10 ? `0${value}` : value}
                  {index < 3 && <span className="mx-2">:</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        className="relative"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-8">
        <button className="px-12 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Main;
