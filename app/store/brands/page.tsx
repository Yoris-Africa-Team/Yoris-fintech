import React from "react";
import Header from "@/constant/Header";
import Layout from "../components/layout";
import ProfileSection from "./components/profileSection";
import Catalogue from "./components/catalogue";

const Brands = () => {
  return (
    <>
      <Header />
      <Layout>
         <ProfileSection/>
         <Catalogue/>
      </Layout>
    </>
  );
};

export default Brands;
