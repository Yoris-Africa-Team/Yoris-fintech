import React, { useState } from "react";
// import clsx from "clsx";
import { useDashboard } from "@/(fintech)/context/DashboardContext";
import { IoIosArrowBack } from "react-icons/io";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

const AddNewCard = () => {
  const { setActiveComponent } = useDashboard();
  const [isCardSaved, setIsCardSaved] = useState(false); // Toggle state

  return (
    <section className="bg-[#100F0D] flex flex-col rounded-2xl border border-[#C3AD60] p-6 text-center w-full mx-auto">
      {/* Header with Back Icon */}
      <div className="flex justify-start items-center ">
        <div className="flex flex-1 justify-between">
          <IoIosArrowBack
            className="text-[#C3AD60] cursor-pointer flex-shrink-0"
            onClick={() => setActiveComponent("acctInfo")}
          />
          <h2 className="text-lg text-white font-medium flex-grow justify-center flex">
            Add Card
          </h2>
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-5 w-full md:w-[60%] text-white py-14 mx-auto">
          <input
            type="number"
            id="card-number"
            placeholder="Card Number"
            className="outline-none border border-gold bg-inherit  rounded-md p-3 w-full"
          />
          <input
            type="text"
            id="card-name"
            placeholder="Card Name"
            className="outline-none border border-gold bg-inherit  rounded-md p-3 w-full"
          />
          <div className="w-full flex gap-3 justify-between">
            <input
              type="number"
              id="expiry-date"
              placeholder="MM/YY"
              className="outline-none border border-gold bg-inherit  rounded-md p-3 w-full"
            />
            <input
              type="number"
              id="cvv"
              placeholder="CVV"
              className="outline-none border border-gold bg-inherit  rounded-md p-3 w-full"
            />
          </div>

          {/* Toggle Save Card */}
          <div className="flex justify-between w-full cursor-pointer" onClick={() => setIsCardSaved(!isCardSaved)}>
            <h1 className=" text-base font-normal md:text-xl ">Save card details</h1>
            {isCardSaved ? (
              <BsToggle2On className="h-6 w-6 text-gold" />
            ) : (
              <BsToggle2Off className="h-6 w-6 text-gold" />
            )}
          </div>

          <div className="">
            <button
              className="bg-gold w-full font-semibold text-base mx-auto md:w-[70%] rounded-md py-2 px-4 text-black"
              
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewCard;
