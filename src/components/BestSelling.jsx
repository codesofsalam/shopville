
import PropTypes from 'prop-types';
import { Star, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="relative">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
          <Eye className="w-5 h-5" />
        </button>
      </div>
    </div>

    <h3 className="text-sm font-medium mb-2 text-gray-800">{product.name}</h3>

    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-500 font-semibold">${product.salePrice}</span>
      {product.originalPrice > 0 && (
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
      )}
    </div>

    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className="w-4 h-4"
          fill="#FBBF24"
          color="#FBBF24"
        />
      ))}
      <span className="text-gray-400 text-sm">({product.reviews})</span>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    reviews: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const BestSelling = () => {
    const products = [
      {
        name: 'Space Tee',
        salePrice: 260,
        originalPrice: 350,
        reviews: 65,
        imageUrl: '/tee.jpeg',
      },
      {
        name: 'Gucci duffle bag',
        salePrice: 960,
        originalPrice: 1160,
        reviews: 65,
        imageUrl: '/guccibag.jpeg',
      },
      {
        name: 'RGB liquid CPU Cooler',
        salePrice: 160,
        originalPrice: 170,
        reviews: 65,
        imageUrl: '/cpucooler.png',
      },
      {
        name: 'Small BookSelf',
        salePrice: 360,
        originalPrice: 0,
        reviews: 65,
        imageUrl: '/bookshelf.jpeg',
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-red-500 font-medium mb-1">This Month</div>
            <h2 className="text-2xl font-bold text-gray-900">Best Selling Products</h2>
          </div>
          <button className="px-6 py-2.5 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            View All
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
  
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/banner.png"
            alt="Banner"
            className="w-full object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default BestSelling;