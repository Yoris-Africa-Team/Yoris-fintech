import React from "react";
import Header from "@/constant/Header";
import Layout from "../components/layout";
import CartSection from "./components/cartSection";

const Cart = () => {
  return (
    <>
      <Header />
      <Layout>
       <CartSection />
      </Layout>
    </>
  );
};

export default Cart;
