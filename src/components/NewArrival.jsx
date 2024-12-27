import PropTypes from "prop-types";

const FeaturedCard = ({ title, description, image, size = "small" }) => (
  <div
    className={`relative rounded-xl overflow-hidden group ${
      size === "large" ? "row-span-2 lg:h-[600px]" : "h-[290px]"
    }`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 flex flex-col justify-end hover:from-black/80 transition-all duration-300">
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/90 text-sm mb-4 line-clamp-2">{description}</p>
      <button className="text-white text-sm hover:underline w-fit">
        Shop Now
      </button>
    </div>
  </div>
);

FeaturedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
};

const NewArrival = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <div className="text-red-500 font-medium mb-1">Featured</div>
        <h2 className="text-3xl font-bold text-gray-900">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeaturedCard
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          image="/playstation.jpeg"
          size="large"
        />
        <FeaturedCard
          title="Women's Collections"
          description="Featured woman collections that give you another vibe."
          image="/womencollection.jpeg"
        />
        <FeaturedCard
          title="Perfume"
          description="GUCCI INTENSE OUD EDP"
          image="/perfume.jpeg"
        />
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
  );
};

export default NewArrival;
