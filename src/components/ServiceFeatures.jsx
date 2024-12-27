
import PropTypes from 'prop-types';  // Import PropTypes
import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-gray-200 p-4 rounded-full mb-4">
      <div className="bg-black p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,        // Icon should be a React element
  title: PropTypes.string.isRequired,        // Title should be a string
  description: PropTypes.string.isRequired,  // Description should be a string
};

const ServiceFeatures = () => {
  const services = [
    {
      icon: <Truck size={24} className="text-white" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: <Headphones size={24} className="text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: <ShieldCheck size={24} className="text-white" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];

  return (
    <div className="mx-auto p-8 md:px-24 ml-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
