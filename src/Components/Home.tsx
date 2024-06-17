"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Feature from "./Features/Feature";
import PopularBurger from "./PopularBurger/PopularBurger";
import Delivery from "./Delivery/Delivery";
import Team from "./Team/Team";
import Reservation from "./Resarvation/Reservation";
import Subcribe from "./Subcribe/Subcribe";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      });
    };
    initAOS();
  }, []);

  return (
    <div className=" overflow-hidden bg-custom-bgcolor ">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Subcribe />
      <Footer />
    </div>
  );
};

export default Home;
