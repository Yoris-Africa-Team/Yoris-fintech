import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface GroceryItem {
   id: number
  brandLogo: string;
  name: string;
  type: string;
}

const groceryItems: GroceryItem[] = [
  {
   id: 1,
    brandLogo: "/images/mcdonalds.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 2,
    brandLogo: "/images/milo.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 3,
    brandLogo: "/images/mcdonalds.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    id: 4,
    brandLogo: "/images/peanuts.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 5,
    brandLogo: "/images/burger-king.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 6,
    brandLogo: "/images/peanuts.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 7,
    brandLogo: "/images/kfc.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
   id: 8,
    brandLogo: "/images/mcdonalds.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
];

const Grocery: React.FC = () => {
  return (
    <section className="p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-yellow-300 text-lg font-semibold">Grocery</h1>
        <MdKeyboardArrowRight className="h-6 w-6 cursor-pointer text-yellow-300" />
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#BCBCBC33] p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            {/* Brand Logo */}
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden">
              {item.brandLogo ? (
                <img
                  src={item.brandLogo}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="bg-gray-500 w-full h-full"></div>
              )}
            </div>

            {/* Item Info */}
            <div className="flex flex-col">
              <h3 className="text-white text-sm font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-xs">{item.type}</p>
            </div>

            {/* Free Badge */}
            <span className="ml-auto text-xs bg-gray-700 px-2 py-1 rounded-md text-gray-300">
              Free
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grocery;
