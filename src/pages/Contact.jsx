import PropTypes from 'prop-types';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, details }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-center">
    <div className="bg-red-50 p-3 rounded-full mb-4">
      <Icon className="w-6 h-6 text-red-500" />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm whitespace-pre-wrap">{details}</p>
  </div>
);

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensure it's a valid React component
  title: PropTypes.string.isRequired,    // Title should be a string
  details: PropTypes.string.isRequired,  // Details should be a string
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@shopville.com\nsales@shopville.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+923300000000"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Karachi"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM"
    }
  ];

  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in original packaging."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number provided in your shipping confirmation email."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs vary by location."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 bg-black">
        <img
          src="/api/placeholder/1920/400"
          alt="Contact Us"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              We&apos;re here to help and answer any questions you might have
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Have a question or feedback? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all resize-none"
              ></textarea>
              <button className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-red-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
