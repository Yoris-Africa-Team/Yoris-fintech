"use client";

import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  distance: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/candles.png" },
  { id: 2, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/candles.png" },
  { id: 3, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/candles.png" },
  { id: 4, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/candles.png" },
  { id: 5, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/shirts.png" },
  { id: 6, name: "Product Name", price: "₦5,000.00", distance: "4.6 km", image: "/assets/shoes.png" },
];

const CatalogueProducts = () => {
  return (
    <div className="p-4 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative w-full h-[250px] md:h-[350px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
             {/* Product Details */}
             <div className="mt-3 px-4 py-3">
               <div className="w-full flex justify-between items-center">
               <p className="text-lg font-semibold text-black">{product.name}</p>
               <p className="text-base font-normal text-[#636363]">{product.distance}</p>
               </div>
              
             <div className="flex w-full justify-between items-center">
             <span className="text-gold font-semibold">{product.price}</span>
             <button className="mt-3 px-3 bg-gold text-black py-2 text-base hover:bg-hovergold duration-150 rounded-md font-semibold">
                Buy
              </button>
             </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CatalogueProducts;
