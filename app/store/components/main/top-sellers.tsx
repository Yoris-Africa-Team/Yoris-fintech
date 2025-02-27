'use client'
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

interface TopSeller {
  brandLogo: string;
  name: string;
  type: string;
}

const topSellers: TopSeller[] = [
  {
    brandLogo: "/images/shopee.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/nike.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/sprite.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/amazon.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/apple.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/danstudio.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
  {
    brandLogo: "/images/niche.png",
    name: "Sadad Uisanicskdjskcmlds",
    type: "Business",
  },
];

const TopSellers: React.FC = () => {
  const router = useRouter();
  return (
    <section className="p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-yellow-300 text-lg font-semibold">
          Top Sellers / Brands
        </h1>
        <button onClick={() => router.push('/store/brands') }>
        <MdKeyboardArrowRight className="h-6 w-6 cursor-pointer text-yellow-300" />

        </button>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {topSellers.map((seller, index) => (
          <div
            key={index}
            className="bg-[#BCBCBC33] p-6 relative rounded-lg shadow-md flex items-center gap-4"
          >
            {/* Brand Logo */}
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden">
              {seller.brandLogo ? (
                <img
                  src={seller.brandLogo}
                  alt={seller.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="bg-gray-500 w-full h-full"></div>
              )}
            </div>

            {/* Seller Info */}
            <div className="flex flex-col">
              <h3 className="text-white text-sm font-semibold">
                {seller.name}
              </h3>
              <p className="text-gray-400 text-xs">{seller.type}</p>
            </div>

            {/* Free Badge */}
            <span className="absolute bottom-2 right-2 text-xs bg-gray-700 px-2 py-1 rounded-md text-gray-300">
              Free
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
