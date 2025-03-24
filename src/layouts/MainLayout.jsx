import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { LifeLine } from "react-loading-indicators";
// import Hero from "../components/Hero/Hero";
// import wave from "../assets/wave.svg";
const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="sticky top-0 z-50  backdrop-blur-3xl shadow-sm">
        <Header></Header>
      </header>

      <section className="grow  my-6">
        {navigation.state === "loading" ? (
          <LifeLine
            color="#3eba3e"
            size="large"
            text="Loading"
            textColor="#b41a1a"
          />
        ) : (
          <Outlet></Outlet>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
