import PropTypes from "prop-types";
import { Star, Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard = ({ product }) => (
  <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="relative p-6">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.new && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            NEW
          </span>
        )}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 hover:text-blue-500 transition-colors">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-red-500 font-bold text-lg">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-gray-400 text-sm ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
        {product.colors && (
          <div className="flex gap-2 pt-2">
            {product.colors.map((color, i) => (
              <button
                key={i}
                className={`w-6 h-6 rounded-full border-2 border-white ring-2 ring-${color}-500 bg-${color}-500 transition-transform hover:scale-110`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    new: PropTypes.bool,
    addToCart: PropTypes.bool,
    colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const ProductGrid = () => {
  const products = [
    {
      name: "Breed Dry Dog Food",
      price: 100,
      reviews: 35,
      image: "/breeddog.png",
    },
    {
      name: "CANON EOS DSLR Camera",
      price: 360,
      reviews: 95,
      addToCart: true,
      image: "/dslr.png",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      reviews: 325,
      image: "/laptop.jpeg",
    },
    {
      name: "Curology Product Set",
      price: 500,
      reviews: 145,
      image: "/curology.jpeg",
    },
    {
      name: "Kids Electric Car",
      price: 960,
      reviews: 65,
      new: true,
      colors: ["red", "gray"],
      image: "/car.png",
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      reviews: 35,
      colors: ["yellow", "black"],
      image: "/shoes.jpeg",
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      reviews: 55,
      new: true,
      colors: ["red", "black"],
      image: "/gamepad.jpeg",
    },
    {
      name: "Quilted Satin Jacket",
      price: 660,
      reviews: 55,
      colors: ["green", "red"],
      image: "/satinjacket.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="space-y-2">
          <p className="text-red-500 font-medium">Our Products</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Products
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-colors group">
            <ChevronLeft
              size={20}
              className="text-gray-600 group-hover:text-gray-900"
            />
          </button>
          <button className="p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-colors group">
            <ChevronRight
              size={20}
              className="text-gray-600 group-hover:text-gray-900"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="text-center">
        <button className="px-12 py-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors duration-300 shadow-sm hover:shadow-md">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
