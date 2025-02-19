import React from "react";
import Layout from "../layout";
import Products from "./products";

const Hero: React.FC = () => {
  return (
    <Layout>
      <div className="p-4 w-full max-w-full overflow-x-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-1">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-48 bg-gray-700 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>

        {/* Indicator boxes */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-500 rounded-full"></div>
          ))}
        </div>
      </div>
      <Products/>
    </Layout>
  );
};

export default Hero;
