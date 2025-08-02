import { ThreeDMarquee } from "../reusables/Marquee3D";

const images = [
  "/apple.svg",
  "/lenovo.png",
  "/dell.png",
  "/fortinet.png",
  "/windows.png",
  "/samsung.png",
  "/acer.png",
  "/hp.png",
  "/kaspersky.png",
  "/apple.svg",
  "/windows.png",
  "/dell.png",
  "/fortinet.png",
  "/samsung.png",
  "/acer.png",
  "/hp.png",
  "/kaspersky.png",
];
const Partners = () => {
  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Trusted by Leading{" "}
        <span className="relative z-20 inline-block rounded-xl bg-black/80 px-4 py-1 text-white underline decoration-gray-900 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Brands
        </span>
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-100 md:text-base">
        At Al Shamali Computers, we partner with leading brands to bring you
        top-quality IT products and solutions. Our carefully selected brands
        ensure you receive the best in technology and performance. HP, Dell,
        Lenovo, Kaspersky, Microsoft Office, Windows, Fortinet, and many more.
        Discover our range of products from these trusted brands and experience
        technology like never before.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Join the club
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
};

export default Partners;
