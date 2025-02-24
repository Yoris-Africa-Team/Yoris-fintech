import Layout from "@/store/components/layout";
import Header from "@/constant/Header";
import { div } from "framer-motion/client";
import TopSellers from "@/store/components/main/top-sellers";
import Grocery from "@/store/components/main/grocery";
import Games from "@/store/components/main/games";

const ForYouSection = () => {
    return (
        <div>
           <Header />
            <Layout>
                <TopSellers />
                <Grocery />
                <Games />
            </Layout> 
        </div>
    )
}

export default ForYouSection;