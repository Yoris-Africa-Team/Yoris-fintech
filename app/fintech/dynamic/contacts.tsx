import React from "react";
import { User, MoreHorizontal, Plus, Search } from "lucide-react";

const Contacts = () => {
  // Sample contact data
  const contacts = [
    { id: 1, name: "Kwame", phone: "+233 2471 72 944" },
    { id: 2, name: "Collins Aibangbee", phone: "+233 2471 72 944" },
    { id: 3, name: "Victor Yaya Isireh", phone: "+233 2471 72 944" },
    { id: 4, name: "Collins Aibangbee", phone: "+233 2471 72 944" },
  ];

  return (
    <section className="bg-[#100F0D] flex flex-col rounded-2xl border border-[#C3AD60] p-6 w-full mx-auto relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-white">My Contacts</h2>
        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          <User className="text-black w-5 h-5" />
        </div>
      </div>

      {/* Search Bar */}
      <div className=" text-white bg-[#1A1917] w-full text-sm px-4 py-4 rounded-lg  flex items-center gap-3 mb-6">
      <Search className=" text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or number"
          className="w-full bg-inherit focus:outline-none "
        />
        
      </div>

      {/* Recents Section */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-3">Recents</h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                  <User className="text-black w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-sm">{contact.name}</p>
                  <p className="text-gray-400 text-xs">{contact.phone}</p>
                </div>
              </div>
              <MoreHorizontal className="text-gray-400 w-7 h-7 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-sm text-gray-400 mb-3">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                  <User className="text-black w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-sm">{contact.name}</p>
                  <p className="text-gray-400 text-xs">{contact.phone}</p>
                </div>
              </div>
              <MoreHorizontal className="text-gray-400 w-7 h-7 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="absolute bottom-6 right-6 bg-[#C3AD60] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
        <Plus className="text-black w-6 h-6" />
      </button>
    </section>
  );
};

export default Contacts;
