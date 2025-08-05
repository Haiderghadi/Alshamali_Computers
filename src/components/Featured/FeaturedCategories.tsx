import { featuredCategories } from "../../constants";
import SimpleGrid from "../reusables/SimpleGrid";

const FeaturedCategories = () => {
  return (
    <div className=" bg-background p-8 max-w-[1440px] mx-auto">
      <SimpleGrid products={featuredCategories} catergoryGrid />
    </div>
  );
};

export default FeaturedCategories;
