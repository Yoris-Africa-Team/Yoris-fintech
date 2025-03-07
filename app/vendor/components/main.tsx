'use client'
import Header from "@/constant/Header";
import ProfileSection from "./profileSection";
import Catalogue from "./catalogue";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const VendorProfile = () => {
    const router = useRouter();
    return (
        <div className="relative min-h-screen">
            <Header />
            <ProfileSection />
            <Catalogue />

            {/* Floating Plus Button */}
            <button className="fixed bottom-6 right-6 bg-[#C3AD60] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition" onClick={() => router.push("/vendor/add_product")}>
                <Plus size={24} />
            </button>
        </div>
    );
}

export default VendorProfile;
