import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';
import React from 'react';
const CategoryNav = () => {
  const categories = [
    { icon: <Smartphone size={24} />, label: 'Phones' },
    { icon: <Monitor size={24} />, label: 'Computers' },
    { icon: <Watch size={24} />, label: 'SmartWatch' },
    { icon: <Camera size={24} />, label: 'Camera' },
    { icon: <Headphones size={24} />, label: 'HeadPhones' },
    { icon: <Gamepad size={24} />, label: 'Gaming' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">Browse By Category</h2>
          <p className="text-gray-500 text-sm">Find your favorite products by category</p>
        </div>
        
        <div className="flex gap-3">
          <button className="p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-colors group">
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-gray-900" />
          </button>
          <button className="p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-colors group">
            <ChevronRight size={20} className="text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`
              relative group cursor-pointer overflow-hidden rounded-2xl
              ${category.label === 'Camera' 
                ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg' 
                : 'bg-white hover:border-blue-500 border border-gray-200'
              }
            `}
          >
            <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <div className={`
                p-3 rounded-xl mb-3 transition-colors duration-300
                ${category.label === 'Camera'
                  ? 'bg-white/20'
                  : 'bg-gray-100 group-hover:bg-blue-50'
                }
              `}>
                {React.cloneElement(category.icon, {
                  className: `${category.label === 'Camera' ? 'text-white' : 'text-gray-700 group-hover:text-blue-600'}`
                })}
              </div>
              <span className={`
                font-medium transition-colors duration-300
                ${category.label === 'Camera'
                  ? 'text-white'
                  : 'text-gray-700 group-hover:text-blue-600'
                }
              `}>
                {category.label}
              </span>
            </div>
            
            {category.label !== 'Camera' && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;