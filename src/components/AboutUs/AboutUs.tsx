import AboutGrid from "./AboutGrid";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  return (
    <div className="max-w-8xl flex flex-col lg:flex-col items-center justify-between gap-5 lg:gap-20 my-4 lg:my-16 py-8 px-4 lg:px-16">
      <AboutGrid />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
