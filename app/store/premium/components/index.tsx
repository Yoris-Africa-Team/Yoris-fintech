"use client";
import Layout from "@/store/components/layout";
import Header from "@/constant/Header";
import PremiumSection from "./main";


const Main = () => {
    
  return (
    <>
        <Header />
        <Layout>
            <PremiumSection />  
        </Layout>
    </>
    
   
  );
}

export default Main;