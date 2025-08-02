import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive grid columns and chunk size
  const getGridConfig = () => {
    if (isMobile) return { cols: 3, chunks: 3 };
    if (isTablet) return { cols: 3, chunks: 3 };
    return { cols: 4, chunks: 4 };
  };

  const { cols, chunks: numChunks } = getGridConfig();

  // Split the images array into responsive chunks
  const chunkSize = Math.ceil(images.length / numChunks);
  const chunks = Array.from({ length: numChunks }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block overflow-hidden rounded-2xl",
        // Responsive heights
        "h-[300px] sm:h-[200px] md:h-[600px] lg:h-[800px]",
        // Responsive padding
        "px-2 sm:px-4 md:px-6 lg:px-8",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="w-full h-full max-w-8xl relative">
          <div
            style={{
              // Responsive 3D transforms
              transform: isMobile
                ? "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
                : isTablet
                ? "rotateX(50deg) rotateY(0deg) rotateZ(-35deg)"
                : "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "relative grid size-full origin-top-left gap-2 sm:gap-4 md:gap-6 lg:gap-8 transform-3d",
              // Responsive positioning
              "top-32 -right-[10%] sm:top-48 sm:right-[10%] md:top-64 md:right-[15%] lg:top-96 lg:right-[20%]",
              // Responsive grid columns
              cols === 2
                ? "grid-cols-2"
                : cols === 3
                ? "grid-cols-3"
                : "grid-cols-4"
            )}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{
                  y:
                    colIndex % 2 === 0
                      ? isMobile
                        ? 50
                        : isTablet
                        ? 75
                        : 100
                      : isMobile
                      ? -50
                      : isTablet
                      ? -75
                      : -100,
                }}
                transition={{
                  duration:
                    colIndex % 2 === 0
                      ? isMobile
                        ? 8
                        : isTablet
                        ? 9
                        : 10
                      : isMobile
                      ? 12
                      : isTablet
                      ? 13
                      : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8"
              >
                <GridLineVertical
                  className="-left-2 sm:-left-3 md:-left-4"
                  offset={isMobile ? "40px" : isTablet ? "60px" : "80px"}
                />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal
                      className="-top-2 sm:-top-3 md:-top-4"
                      offset={isMobile ? "10px" : isTablet ? "15px" : "20px"}
                    />
                    <motion.img
                      whileHover={{
                        y: isMobile ? -5 : isTablet ? -7 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className={cn(
                        "rounded-lg object-contain ring ring-gray-950/5 hover:shadow-2xl",
                        // Responsive image sizes
                        "w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96"
                      )}
                      width={isMobile ? 96 : isTablet ? 192 : 400}
                      height={isMobile ? 96 : isTablet ? 192 : 400}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
