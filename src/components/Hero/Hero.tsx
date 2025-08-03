import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../reusables/ContainerTextFlip";
import { Carousel } from "./Carousol";
import { motion } from "motion/react";

const slideData = [
  {
    title: "Dell",
    button: "Shop Now",
    src: "./dellcpu.jpeg",
  },
  {
    title: "macbook pro",
    button: "Shop Now",
    src: "./macbook.jpg",
  },
  {
    title: "macbook air",
    button: "Learn More",
    src: "./macbookair.webp",
  },
  {
    title: "Dell XPS",
    button: "Discover",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const words = ["Business", "Office", "Project", "Workspace"];

// Hero Component using the Carousel
const Hero = () => {
  return (
    <div className=" bg-neutral-200 pb-16 flex flex-col lg:flex-row">
      {/* Left Side - Hero Content */}
      <div className="flex-1 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-8 py-8 lg:py-0 order-1 lg:order-1">
        <div className="text-gray-900 w-full max-w-none lg:max-w-2xl">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className={cn(
              "relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 w-full text-left sm:text-center lg:text-left leading-tight sm:leading-normal tracking-tight text-gray-900"
            )}
            layout
          >
            <div className="inline-block">
              Reliable IT Solutions for Every{" "}
              <ContainerTextFlip words={words} />
            </div>
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 text-left sm:text-center lg:text-left">
            Since 1995, delivering cutting-edge IT solutions, hardware,
            software, and unmatched support to empower your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-start sm:justify-center lg:justify-start">
            <button className="bg-blue-500 text-neutral-200 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-300 hover:text-gray-900 transition duration-200 flex-1 sm:flex-none">
              Explore Our Services
            </button>
            <button className="text-gray-600 px-6 sm:px-8 py-3 border border-gray-300 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition duration-200 flex-1 sm:flex-none">
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
