import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Grocery from "@/store/components/main/grocery";

import { FaCrown } from "react-icons/fa"; 

const products = [
  { id: 1, name: "CURAME" },
  { id: 2, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 3, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 4, name: "BAJSKDADAKJSANAS SDBJS" },
  { id: 5, name: "BAJSKDADAKJSANAS SDBJS" },
  

];

const PremiumSection = () => {
    const router = useRouter();
    return(
        <div>
            <div className="p-4  flex items-center justify-between">
                <div className="flex flex-1 justify-center">
                <input
                    type="text"
                    placeholder="Search Product, Brand, Grocery and more"
                    className="ring-2 ring-yellow-500 bg-transparent focus:bg-transparent text-white p-2 rounded w-full max-w-xl"
                />
                </div>
                <button
                className="ml-4 flex-shrink-0 text-yellow-500 text-2xl"
                onClick={() => router.push("/store/cart")}
                >
                <FaShoppingCart />
                </button>
            </div>

            <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="relative min-w-[250px] h-[300px] bg-[#BCBCBC33] rounded-lg overflow-hidden shadow-lg"
                    >
                    {/* Placeholder image */}
                    <div className="h-full w-full bg-gray-500 animate-pulse"></div>

                    {/* Crown Icon */}
                    <div className="absolute top-2 right-2 text-yellow-400 text-xl">
                        <FaCrown />
                    </div>

                    {/* Product Name & Free Badge */}
                    <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white text-sm flex justify-between items-center">
                        <span className="font-semibold">{product.name}</span>
                        <span className="bg-gray-700 px-2 py-1 text-xs rounded-md">
                        Free
                        </span>
                    </div>
                    </div>
                ))}
            </div>

            <Grocery />
            <Grocery />
        </div>
    )
}


export default PremiumSection;