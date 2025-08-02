import AboutGrid from "./AboutGrid";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  return (
    <div className="max-w-8xl flex flex-col lg:flex-row items-center justify-between my-4 lg:my-16 py-8 px-4 lg:px-16 gap-0">
      <AboutGrid />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
