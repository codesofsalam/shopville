import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Woman's Fashion", hasArrow: true },
    { name: "Men's Fashion", hasArrow: true },
    { name: "Electronics", hasArrow: false },
    { name: "Home & LifeStyle", hasArrow: false },
    { name: "Medicine", hasArrow: false },
    { name: "Sports & Outdoor", hasArrow: false },
    { name: "Baby's & Toys", hasArrow: false },
    { name: "Groceries & Pets", hasArrow: false },
    { name: "Health & Beauty", hasArrow: false },
  ];
  return (
    <aside className="bg-white w-64 ml-28">
      <nav className="py-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-2"
              >
                <span className="text-sm">{item.name}</span>
                {item.hasArrow && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
