import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CarouselControl = ({ type, title, handleClick, disabled }) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
        !disabled ? "active:scale-95" : ""
      }`}
      title={title}
      onClick={handleClick}
      disabled={disabled}
    >
      {type === "previous" ? (
        <FaArrowLeftLong className="text-gray-600 w-6 h-6" />
      ) : (
        <FaArrowRightLong className="text-gray-600 w-6 h-6" />
      )}
    </button>
  );
};

export default CarouselControl;
