import React from "react";

interface SectionDividerProps { }

const SectionDivider: React.FC<SectionDividerProps> = () => {
  return (
    <div
      className="hidden lg:block bg-orange-primary absolute h-[2px] w-[128px] sm:h-[128px] sm:w-[2px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
    ></div>
  );
}

export default SectionDivider;
