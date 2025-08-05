import { useNavigate } from "react-router-dom";
import {
  HeroDescription,
  HeroHeadline,
  slideData,
  words,
} from "../../constants";
import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../reusables/ContainerTextFlip";
import { Carousel } from "./Carousol";
import { motion } from "motion/react";

// Hero Component using the Carousel
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-background pb-16 flex flex-col lg:flex-row max-w-[1440px] mx-auto">
      {/* Left Side - Hero Content */}
      <div className="flex-1 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-8 py-8 lg:py-0 order-1 lg:order-1">
        <div className="text-heading w-full max-w-none lg:max-w-2xl">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className={cn(
              "relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 w-full text-left sm:text-center lg:text-left leading-tight sm:leading-normal tracking-tight text-heading"
            )}
            layout
          >
            <div className="inline-block">
              {HeroHeadline} <ContainerTextFlip words={words} />
            </div>
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 text-left sm:text-center lg:text-left">
            {HeroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-start sm:justify-center lg:justify-start">
            <button
              onClick={() => (navigate("/services"), window.scrollTo(0, 0))}
              className="bg-red-500 text-neutral-100 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-600 transition duration-200 flex-1 sm:flex-none"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => (navigate("/contact"), window.scrollTo(0, 0))}
              className="text-lightDescription bg-neutral-300 px-6 sm:px-8 py-3 border border-gray-300 rounded-lg font-semibold text-base sm:text-lg hover:text-white hover:bg-gray-400 transition duration-200 flex-1 sm:flex-none"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="flex-1 flex items-center lg:pt-8 pt-0 justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-0 order-2 lg:order-2">
        <div className="w-full h-full max-w-lg lg:max-w-none">
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
