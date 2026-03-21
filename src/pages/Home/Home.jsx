import React from "react";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Sellers from "./components/Sellers";
import Experience from "./components/Experience";
import NewsLetter from "./components/NewsLetter";

const Home = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <HeroSection />
      <Categories />
      <Sellers />
      <Experience />
      <NewsLetter />
    </div>
  );
};

export default Home;
