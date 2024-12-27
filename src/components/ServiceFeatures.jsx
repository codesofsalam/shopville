import PropTypes from "prop-types";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="bg-gray-100 p-4 rounded-full mb-6 group-hover:bg-gray-50 transition-colors duration-300">
      <div className="bg-black p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ServiceFeatures = () => {
  const services = [
    {
      icon: <Truck size={24} className="text-white" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones size={24} className="text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={24} className="text-white" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
