
import PropTypes from 'prop-types';

const FeaturedCard = ({ title, description, image, size = 'small' }) => (
  <div className={`relative rounded-lg overflow-hidden ${size === 'large' ? 'row-span-2' : ''}`}>
    <img 
      src={image} 
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-white text-sm mb-4 opacity-90">{description}</p>
      <button className="text-white text-sm hover:underline">
        Shop Now
      </button>
    </div>
  </div>
);

FeaturedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']) // Validates that 'size' is either 'small' or 'large'
};

const NewArrival = () => {
  return (
    <div className="mx-auto p-8 md:px-24 ml-10">
      <div className="mb-6">
        <div className="text-red-500 text-sm mb-1">Featured</div>
        <h2 className="text-xl font-bold">New Arrival</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        <FeaturedCard 
         
          title="PlayStation 5" 
          description="Black and White version of the PS5 coming out on sale."
          image="/playstation.jpeg"
        />
        <div className="grid grid-cols-1 gap-4">
          <FeaturedCard 
            title="Women's Collections" 
            description="Featured woman collections that give you another vibe."
            image="/womencollection.jpeg"
          />
          <div className="grid grid-cols-1 gap-4">
            <FeaturedCard 
              title="Perfume" 
              description="GUCCI INTENSE OUD EDP"
              image="/perfume.jpeg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <FeaturedCard 
            title="Smartwatch" 
            description="Next-gen smartwatch with advanced features."
            image="/smartwatch.jpeg"
          />
          <FeaturedCard 
            title="Gaming Chair" 
            description="Ergonomic gaming chair for ultimate comfort."
            image="/gamingchair.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
