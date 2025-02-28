import React from "react";
import Header from "@/constant/Header";
import Layout from "../components/layout";
import ProfileSection from "./components/profileSection";

const Profile = () => {
  return (
    <>
      <Header />
      <Layout>
        <ProfileSection/>
      </Layout>
    </>
  );
};

export default Profile;
