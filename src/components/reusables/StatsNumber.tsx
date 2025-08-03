import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({
  target,
  duration = 2000,
  suffix = "",
  shouldStart = false,
}: {
  target: number;
  duration?: number;
  suffix?: string;
  shouldStart?: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, shouldStart]);

  const formatted = count.toLocaleString() + suffix;
  return <>{formatted}</>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 25,
      suffix: "+",
      label: "premium partners",
    },
    {
      number: 900,
      suffix: "+",
      label: "projects completed",
    },
    {
      number: 1500,
      suffix: "+",
      label: "satisfied customers",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <section ref={sectionRef} className="bg-neutral-300 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg p-6 text-center border border-neutral-200"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber
                  target={stat.number}
                  suffix={stat.suffix}
                  shouldStart={isVisible}
                />
              </h3>
              <p className="text-gray-600 text-sm font-semibold tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
