import { BentoGrid, BentoGridItem } from "../reusables/BentoGrid";

export function AboutGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item?.icon}
        />
      ))}
    </BentoGrid>
  );
}

const ImageComponent = ({ src }: { src: string }) => (
  <img src={src} alt="About Us" className="w-full h-full object-cover "></img>
);

const items = [
  {
    title: "Enterprise Hardware Solutions",
    header: <ImageComponent src="/image4.jpg" />,
    description:
      "Power your business with high-performance PCs, laptops, and servers tailored for scalability.",
    className: "md:col-span-2",
  },
  {
    title: "Advanced Networking & Security",
    header: <ImageComponent src="/image2.jpg" />,
    description:
      "Stay connected and secure with reliable networking hardware and enterprise-grade security systems.",
    className: "md:col-span-1",
  },
  {
    title: "Cloud & Licensing Services",
    header: <ImageComponent src="/image3.webp" />,
    description:
      "Streamline your operations with cloud integration and licensed software solutions built for business.",
    className: "md:col-span-1",
  },
  {
    title: "24/7 IT Support & Maintenance",
    header: <ImageComponent src="/image1.webp" />,
    description:
      "Get consistent, expert-backed support through annual maintenance contracts and responsive service.",
    className: "md:col-span-2",
  },
];

export default AboutGrid;
