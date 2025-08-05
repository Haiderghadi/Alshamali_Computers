import { heroAboutitems } from "../../constants";
import { BentoGrid, BentoGridItem } from "../reusables/BentoGrid";

export function AboutGrid() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {heroAboutitems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<ImageComponent src={item.header} />}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const ImageComponent = ({ src }: { src: string }) => (
  <img src={src} alt="About Us" className="w-full h-full object-cover "></img>
);

export default AboutGrid;
