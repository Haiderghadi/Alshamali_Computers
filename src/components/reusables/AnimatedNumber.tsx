import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  target: number;
  duration?: number;
  suffix?: string;
  shouldStart?: boolean;
  decimals?: number;
  prefix?: string;
  className?: string;
}

const AnimatedNumber = ({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  shouldStart = false,
  decimals = 0,
  className = "",
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = progress * target;
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, shouldStart]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };

  const formatted = prefix + formatNumber(count) + suffix;

  return <span className={className}>{formatted}</span>;
};

export default AnimatedNumber;
