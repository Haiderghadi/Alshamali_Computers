import { useNavigate } from "react-router-dom";
import {
  logoImages,
  partnerDescription,
  partnerHeading,
  partnerHighlightedHeading,
} from "../../constants";
import { ThreeDMarquee } from "../reusables/Marquee3D";

const Partners = () => {
  const navigate = useNavigate();
  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        {partnerHeading}{" "}
        <span className="relative z-20 inline-block rounded-xl bg-black/80 px-4 py-1 text-white underline decoration-gray-900 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          {partnerHighlightedHeading}
        </span>
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-100 md:text-base">
        {partnerDescription}
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => (navigate("/contact"), window.scrollTo(0, 0))}
          className="rounded-md bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:ring-1 focus:ring-red-500 focus:outline-none"
        >
          Join the club
        </button>
        <button
          onClick={() => (navigate("/partners"), window.scrollTo(0, 0))}
          className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Read more
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={logoImages}
      />
    </div>
  );
};

export default Partners;
