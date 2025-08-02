import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import FeaturedCategories from "../components/Featured/FeaturedCategories";
import FeaturedItems from "../components/Featured/FeaturedItems";
import Partners from "../components/Featured/Partners";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedItems />
      <Partners />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
