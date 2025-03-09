import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Plus, ArrowRight } from "lucide-react";

interface Review {
  id: number;
  user: string;
  profilePic: string;
  rating: number;
  reviewText: string;
}

const reviews: Review[] = [
  {
    id: 1,
    user: "Customer’s name",
    profilePic: "/assets/profile.png",
    rating: 5,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    user: "Customer’s name",
    profilePic: "/assets/profile.png",
    rating: 4,
    reviewText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    user: "Customer’s name",
    profilePic: "/assets/profile.png",
    rating: 3,
    reviewText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    user: "Customer’s name",
    profilePic: "/assets/profile.png",
    rating: 5,
    reviewText:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    user: "Customer’s name",
    profilePic: "/assets/profile.png",
    rating: 4,
    reviewText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

// Function to render star ratings
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? "text-yellow-400" : "text-gray-500"}
    >
      ★
    </span>
  ));
};

const CatalogueReviews = () => {
  return (
    <div className="w-full max-w-full mx-auto  text-white p-6 rounded-lg shadow-lg">
      {/* Overall Rating */}
      <div className="text-center flex justify-between p-6 mb-6 bg-[linear-gradient(355.13deg,rgba(35,31,17,0)_-11.65%,rgba(137,121,67,0.24)_277.19%)]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-medium">3.0</h2>
          <p className="text-gray-400">Host Helpful Reviews</p>
        </div>
        <div className="flex flex-col gap-2 justify-center  text-yellow-400 mt-1">
          <div>{renderStars(3)}</div>
          <h1 className="text-gray-400 text-sm">543 Ratings</h1>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-start gap-4 border-b border-[#1C1C1C] p-4 rounded-lg"
          >
            <Image
              src={review.profilePic}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-400 text-sm max-w-[60%] text-wrap text-start">
                {review.reviewText}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-end justify-center">
              <div className="flex items-center gap-1 text-gold mt-1">
                {renderStars(review.rating)}
              </div>

              <ChevronRight className="text-gray-400 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CatalogueReviews;
