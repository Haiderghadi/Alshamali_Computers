import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import MegaMenu from "./MegaMenu";

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

export const CustomNavItems = ({
  items,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setIsShopMenuOpen(false);
      }}
      className={cn(
        "absolute bg-neutral-300 rounded-2xl inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => {
            setHovered(idx);
            if (item.name === "Shop") {
              setIsShopMenuOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (item.name === "Shop") {
              setIsShopMenuOpen(false);
            }
          }}
        >
          <a
            onClick={onItemClick}
            className="relative px-4 py-2 text-neutral-600 block"
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100"
              />
            )}
            <span className="relative z-20 flex items-center">
              {item.name}
              {item.name === "Shop" && (
                <svg
                  className="ml-1 w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </a>

          {/* MegaMenu for Shop */}
          {item.name === "Shop" && (
            <MegaMenu
              isOpen={isShopMenuOpen}
              onClose={() => setIsShopMenuOpen(false)}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default CustomNavItems;
