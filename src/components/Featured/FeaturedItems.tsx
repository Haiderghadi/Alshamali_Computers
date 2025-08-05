import { featuredProducts } from "../../constants";
import SimpleGrid from "../reusables/SimpleGrid";

const FeaturedItems = () => {
  return (
    <div className=" bg-background p-8 max-w-[1440px] mx-auto">
      <SimpleGrid products={featuredProducts} productGrid />
    </div>
  );
};

export default FeaturedItems;
