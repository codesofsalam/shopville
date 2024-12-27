
import PropTypes from 'prop-types';
import { Star, Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCard = ({ product }) => (
  <div className="bg-gray-50 rounded-lg">
   <div className="relative p-4">
  <img 
    src={product.image} 
    alt={product.name}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
  {product.new && (
    <span className="absolute top-6 left-6 bg-green-400 text-white text-xs px-2 py-1 rounded">
      NEW
    </span>
  )}
  <div className="absolute top-2 right-2 flex flex-col gap-2">
    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
      <Heart className="w-5 h-5" />
    </button>
    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
      <Eye className="w-5 h-5" />
    </button>
  </div>
</div>

    
    <div className="p-4">
      <h3 className="text-sm font-medium mb-2">{product.name}</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500">${product.price}</span>
      </div>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-gray-400 text-sm">({product.reviews})</span>
      </div>
      {product.colors && (
        <div className="flex gap-2">
          {product.colors.map((color, i) => (
            <div key={i} className={`w-4 h-4 rounded-full border bg-${color}-500`} />
          ))}
        </div>
      )}
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
    { name: "Breed Dry Dog Food", price: 100, reviews: 35, image: "/breeddog.png" },
    { name: "CANON EOS DSLR Camera", price: 360, reviews: 95, addToCart: true, image: "/dslr.png" },
    { name: "ASUS FHD Gaming Laptop", price: 700, reviews: 325, image: "/laptop.png" },
    { name: "Curology Product Set", price: 500, reviews: 145, image: "/product.png" },
    { name: "Kids Electric Car", price: 960, reviews: 65, new: true, colors: ['red', 'gray'], image: "/car.png" },
    { name: "Jr. Zoom Soccer Cleats", price: 1160, reviews: 35, colors: ['yellow', 'black'], image: "/shoes.png" },
    { name: "GP11 Shooter USB Gamepad", price: 660, reviews: 55, new: true, colors: ['red', 'black'], image: "/gamepad.png" },
    { name: "Quilted Satin Jacket", price: 660, reviews: 55, colors: ['green', 'red'], image: "/satinjacket.png" }
  ];

  return (
    <div className="mx-auto p-8 ml-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-red-500 text-sm mb-1">Our Products</div>
          <h2 className="text-xl font-bold">Explore Our Products</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-2 bg-red-500 text-white rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
