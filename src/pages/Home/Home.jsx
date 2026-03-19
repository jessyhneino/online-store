import Categories from "./components/Categories";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";
import Sellers from "./components/Sellers";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Sellers />
      <Experience />
      <NewsLetter />
    </>
  );
};

export default Home;
