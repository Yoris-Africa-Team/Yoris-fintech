import Header from "@/constant/Header";
import { div } from "framer-motion/client";

const BranchesPage = () => {
    const branches = [
      {
        id: 1,
        name: "Kingsley Ayeni",
        company: "Barifimart Inc. - Okata, Lagos",
        management: "Post, Messaging, Order Management",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
      },
      {
        id: 2,
        name: "Kingsley Ayeni",
        company: "Barifimart Inc. - Okata, Lagos",
        management: "AI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/McDonald%27s_Golden_Arches.svg",
      },
    ];
  
    return (
    <div>
        <Header />
        <div className="min-h-screen bg-black text-white px-6 pt-20 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-[#C3AD60] text-xl font-semibold mb-2">Branches</h1>
          <p className="text-gray-400 mb-4">
            The affiliated branches of <span className="font-semibold text-white">barifimart Inc.</span> are listed below.
          </p>
  
          {/* Add Branch Button */}
          <button className="flex items-center text-[#C3AD60] space-x-2 mb-4">
            <span className="text-xl">➕</span>
            <span className="underline">add new Branch</span>
          </button>
  
          {/* Branch List */}
          <div className="space-y-4">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="flex items-center bg-[#1A1A1A] p-4 rounded-lg shadow-md"
              >
                {/* Logo */}
                <img src={branch.icon} alt="Logo" className="w-10 h-10 rounded-lg mr-4" />
  
                {/* Details */}
                <div className="flex-1">
                  <h2 className="font-semibold text-white">{branch.name}</h2>
                  <p className="text-gray-400 text-sm">{branch.company}</p>
                  <p className="text-gray-500 text-xs">Management - {branch.management}</p>
                </div>
  
                {/* Settings Icon */}
                <button className="text-gray-400 hover:text-white">
                  ⚙️
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
          );
  };
  
  export default BranchesPage;
  