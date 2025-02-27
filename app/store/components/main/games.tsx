import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Game {
  id: number;
  name: string;
  type: "free" | "paid";
  image: string;
  price?: number;
}

const redDeadImage =
  "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg";

const games: Game[] = [
  { id: 1, name: "Far Cry 4", type: "free", image: redDeadImage },
  { id: 2, name: "The Last of Us", type: "paid", price: 5.99, image: redDeadImage },
  { id: 3, name: "Minecraft", type: "free", image: redDeadImage },
  { id: 4, name: "Tomb Raider", type: "paid", price: 3.99, image: redDeadImage },
  { id: 5, name: "Red Dead Redemption 2", type: "free", image: redDeadImage },
];

const Games: React.FC = () => {
  return (
    <section className="p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-yellow-300 text-lg font-semibold">Games</h1>
        <MdKeyboardArrowRight className="h-6 w-6 cursor-pointer text-yellow-300" />
      </div>

      {/* Horizontal Scrollable Games List */}
      <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative min-w-[200px] md:min-w-[250px] h-[320px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt={game.name}
              className="h-full w-full object-cover"
            />

            {/* Name & Tag with Backdrop Blur */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-3 flex justify-between items-center">
              {/* Game Name */}
              <span className="text-white text-sm">{game.name}</span>

              {/* Price Tag */}
              {game.type === "free" ? (
                <span className="bg-gray-700 px-2 py-1 text-xs rounded-md text-gray-300">
                  Free
                </span>
              ) : (
                <div className="flex items-center gap-1 bg-gray-700 px-2 py-1 text-xs rounded-md text-yellow-300">
                  ${game.price} <FaCrown />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
