import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white overflow-hidden transition duration-200 hover:shadow-xl",
        className
      )}
    >
      {/* Image/Header container with controlled dimensions */}
      {header && (
        <div className="w-full h-48 flex-shrink-0 overflow-hidden rounded-t-xl">
          <div className="w-full h-full object-contain">{header}</div>
        </div>
      )}

      {/* Content container with padding */}
      <div className="px-2 py-2 flex-1 flex flex-col justify-center">
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {title && (
            <div className="mb-2 font-sans font-bold text-neutral-600">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-xs font-normal text-neutral-600">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
