import { Star, Heart, Eye } from 'lucide-react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="relative">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="absolute top-2 right-2 flex flex-col gap-2">
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
        <Heart className="w-5 h-5" />
      </button>
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
        <Eye className="w-5 h-5" />
      </button>
    </div>
    </div>
    
    <h3 className="text-sm font-medium mb-2">{product.name}</h3>
    
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-500">${product.salePrice}</span>
      {product.originalPrice > 0 && (
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
      )}
    </div>
    
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
      name: 'The north coat',
      salePrice: 260,
      originalPrice: 350,
      reviews: 65,
      imageUrl: '/northcoat.png',
    },
    {
      name: 'Gucci duffle bag',
      salePrice: 960,
      originalPrice: 1160,
      reviews: 65,
      imageUrl: '/guccibag.png',
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
      imageUrl: '/bookshelf.png',
    },
  ];

  return (
    <div className="mx-auto p-8 ml-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-red-500 text-sm mb-1">This Month</div>
          <h2 className="text-xl font-bold">Best Selling Products</h2>
        </div>
        <button className="px-4 py-2 text-white bg-red-500 rounded">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="mb-2 mt-12">
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
