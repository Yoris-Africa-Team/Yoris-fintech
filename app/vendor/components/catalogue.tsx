'use client'
import React, { useState } from "react";
import CatalogueProducts from "./catalogueProducts";
import CataloguePosts from "./cataloguePosts";
import CatalogueReviews from "./catalogueReviews";

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <section className="mx-auto max-w-[95%] w-full mt-12">
      {/* Navigation Tabs */}
      <div className="flex justify-around gap-16 p-3 w-full border-b border-[#1C1C1C]">
        {["Products", "Posts", "Reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-gray-300 text-sm font-semibold transition ${
              activeTab === tab ? "text-[#C2A85E]" : "text-gray-500"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#C2A85E] rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Component Rendering Based on Active Tab */}
      <div className="w-full mx-auto p-2">
        {activeTab === "Products" && <CatalogueProducts />}
        {activeTab === "Posts" && <CataloguePosts />}
        {activeTab === "Reviews" && <CatalogueReviews />}
      </div>
    </section>
  );
};

export default Catalogue;
