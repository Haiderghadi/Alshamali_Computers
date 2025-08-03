import { cn } from "../../lib/utils";
import { CardStack } from "../reusables/CardStack";

export function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-cneter items-center mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center items-center max-w-4xl order-2 lg:order-2">
        <CardStack items={CARDS} />
      </div>
      <div className="order-1 lg:order-1 flex flex-col lg:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 mb-4 w-full max-w-4xl">
        <img
          className="order-2 lg:order-2 w-15 h-15 sm:w-15 rotate-[45deg] lg:rotate-[120deg] sm:h-15 md:w-20 md:h-20 lg:w-40 lg:h-40"
          src="./arrow6.svg"
          alt="arrow"
        />
        <div className="order-1 lg:order-1 flex flex-col items-center justify-center relative mt-4 sm:mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl lg:text-center sm:text-left sm:pl-4 md:pl-8 lg:pl-10 xl:pl-12 z-10 font-bold text-gray-800 mb-0 sm:mb-6 px-4 sm:px-0 lg:leading-20">
            What Our Clients Say !
          </h2>
          <div className="absolute z-0 inset-0 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full blur-sm sm:blur-md lg:blur-lg opacity-20 scale-75 sm:scale-90 lg:scale-100"></div>
        </div>
      </div>
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 px-1 py-0.5 text-sm sm:text-base rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Mohammad Al-Kandari",
    designation: "IT Director, Kuwait Oil Company",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Al Shamali has been our tech partner for over a decade. Their{" "}
        <Highlight>hardware reliability</Highlight> and{" "}
        <Highlight>response time</Highlight> make them our first choice for all
        infrastructure upgrades.
      </p>
    ),
  },
  {
    id: 1,
    name: "Fatima Hussain",
    designation: "Procurement Lead, National Bank of Kuwait",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Whether it's laptops, networking, or cloud services,{" "}
        <Highlight>Al Shamali always delivers</Highlight> with professionalism
        and precision. <Highlight>Highly recommended</Highlight> for corporate
        IT needs.
      </p>
    ),
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    designation: "CTO, Gulf Telecom",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Their end-to-end service — from product sourcing to annual maintenance —
        is <Highlight>exceptionally dependable</Highlight>.{" "}
        <Highlight>We trust them</Highlight> with our entire IT backbone.
      </p>
    ),
  },
];

export default Testimonials;
