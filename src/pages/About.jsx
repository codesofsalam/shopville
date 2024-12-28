
import PropTypes from 'prop-types';
import { Users, ShoppingBag, Globe, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <div className="bg-red-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-red-500" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{number}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // A React component (like an icon)
  number: PropTypes.string.isRequired,   // A string (e.g., "15k+")
  label: PropTypes.string.isRequired,    // A string (e.g., "Happy Customers")
};

const TeamMember = ({ name, role }) => (
  <div className="text-center">
    <div className="mb-4">
      <img
        src="/api/placeholder/200/200"
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />
    </div>
    <h3 className="font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired, // A string (e.g., "John Smith")
  role: PropTypes.string.isRequired, // A string (e.g., "CEO & Founder")
};

const About = () => {
  const stats = [
    { icon: Users, number: '15k+', label: 'Happy Customers' },
    { icon: ShoppingBag, number: '150k+', label: 'Products Available' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Award, number: '25+', label: 'Industry Awards' }
  ];

 

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-black">
        <img
          src="/api/placeholder/1920/600"
          alt="About Us Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              Creating exceptional shopping experiences since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At ShopVille, we&apos;re passionate about revolutionizing the online shopping experience.
                Our mission is to provide customers with high-quality products, exceptional service,
                and a seamless shopping journey.
              </p>
              <p className="text-gray-600">
                We believe in sustainable practices, ethical sourcing, and building lasting
                relationships with our customers and partners around the globe.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/api/placeholder/600/400"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of our products and services.'
              },
              {
                title: 'Customer-Centric',
                description: 'Every decision we make puts our customers needs at the forefront.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve and adapt to provide the best shopping experience.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        
      </div>
    </div>
  );
};

export default About;
