import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface VikingFooterProps {
  text: string;
}

const VikingFooter: React.FC<VikingFooterProps> = ({ text }) => {
  return (
    <div
      className="col-span-2 flex items-center justify-center w-full h-full lg:h-auto p-8 lg:p-0 flex-wrap"
      style={{
        background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
      }}
    >
      <p className="lg:text-5xl text-3xl text-center p-0 m-0 text-white">{text}</p>
      <StaticImage src={"../../../images/didi-logo.png"} alt={"DiDi Logo"} className="lg:w-64 w-36" />
    </div>
  );
}

export default VikingFooter;