import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';

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
    <div className="mx-auto p-8 ml-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Browse By Category</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className={`flex flex-col items-center justify-center p-4 border hover:shadow-md transition-shadow
            ${category.label === 'Camera' ? 'bg-red-500 text-white' : 'bg-white'}`}>
            {category.icon}
            <span className="mt-2 text-sm">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;