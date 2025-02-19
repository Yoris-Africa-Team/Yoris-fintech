import React, { useState } from "react";
import { MdRadioButtonUnchecked, MdRadioButtonChecked, MdAddCard } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import { useDashboard } from "@/fintech/context/DashboardContext";
import { IoIosArrowBack } from "react-icons/io";

interface CardInfo {
  id: string;
  type: "mastercard" | "visa";
  number: string;
  selected: boolean;
}

// Sample card data
const initialCards: CardInfo[] = [
  { id: "1", type: "mastercard", number: "45567******0266", selected: true },
  { id: "2", type: "mastercard", number: "97327******1154", selected: false },
  { id: "3", type: "visa", number: "97327******1154", selected: false },
];

const AccountInfo = () => {
  const [cards, setCards] = useState<CardInfo[]>(initialCards);

  // Handle card selection
  const handleSelectCard = (id: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        selected: card.id === id,
      }))
    );
  };

  const {setActiveComponent} = useDashboard();

  return (
    <div className="bg-[#100F0D] flex flex-col rounded-2xl border border-[#C3AD60] p-6 text-center w-full mx-auto">
      {/* Header with Back Icon */}
        <div className="flex justify-start items-center ">
         <div className='flex flex-1 justify-between'>
         <IoIosArrowBack className="text-[#C3AD60] cursor-pointer flex-shrink-0" 
           onClick={() => setActiveComponent('firstView')}       
          />
          <h2 className="text-lg text-white font-medium flex-grow justify-center flex">Cards</h2>
         </div>
          
        </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4 w-full md:w-[60%] py-12 mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-3 p-4 bg-[#181818] hover:bg-[#2b2424] rounded-md cursor-pointer"
            onClick={() => handleSelectCard(card.id)}
          >
            {/* Selection Indicator */}
            {card.selected ? (
              <MdRadioButtonChecked className="text-gold text-xl" />
            ) : (
              <MdRadioButtonUnchecked className="text-gray-500 text-xl" />
            )}

            {/* Card Icon & Number */}
            <div className="flex items-center gap-2">
              <Image
                height={30}
                width={30}
                alt={card.type}
                src={card.type === "mastercard" ? "/assets/mastercard.svg" : "/assets/visa.svg"}
              />
              <span className="text-sm md:text-base">{card.number}</span>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <button className="flex items-center gap-3 p-4 bg-[#181818] hover:bg-[#2b2424] rounded-md cursor-pointer w-full"
        onClick={() => setActiveComponent('addNewCard')}
        >
          <MdAddCard className="text-gold text-xl" />
          <span className="text-sm md:text-base">Add a new card</span>
        </button>

        <button className="flex items-center gap-3 p-4 bg-[#181818] hover:bg-[#2b2424] rounded-md cursor-pointer w-full"
        onClick={() => setActiveComponent('addNewAcct')}
        >
          <MdAddCard className="text-gold text-xl" />
          <span className="text-sm md:text-base">Add account number</span>
        </button>

        <button className="flex items-center gap-3 p-4 bg-[#181818] hover:bg-[#2b2424] rounded-md cursor-pointer w-full" 
        onClick={() => setActiveComponent('addMomo')}
        >
          <MdAddCard className="text-gold text-xl" />
          <span className="text-sm md:text-base">Add MOMO phone number</span>
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
