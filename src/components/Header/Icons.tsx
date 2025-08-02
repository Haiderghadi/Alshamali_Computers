import { MdPerson, MdSearch, MdShoppingCart } from "react-icons/md";

const Icons = () => {
  return (
    <div className="flex items-center flex-row gap-4">
      <span className="ml-2">
        <MdSearch size={20} />
      </span>
      <span className="ml-2">
        <MdShoppingCart size={20} />
      </span>
      <span className="ml-2">
        <MdPerson size={20} />
      </span>
    </div>
  );
};

export default Icons;
