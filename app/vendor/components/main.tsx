import Header from "@/constant/Header";
import ProfileSection from "./profileSection";
import Catalogue from "./catalogue";
import { Plus } from "lucide-react";

const VendorProfile = () => {
    return (
        <div className="relative min-h-screen">
            <Header />
            <ProfileSection />
            <Catalogue />

            {/* Floating Plus Button */}
            <button className="fixed bottom-6 right-6 bg-yellow-400 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
                <Plus size={24} />
            </button>
        </div>
    );
}

export default VendorProfile;
