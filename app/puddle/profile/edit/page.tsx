import React from "react";
import Header from "@/constant/Header";
import Layout from "@/puddle/components/layout";
import EditProfile from "./editProfile";

const Edit = () => {
  return (
    <>
      <Header />
      <Layout>
        <EditProfile />
      </Layout>
    </>
  );
};

export default Edit;
