import React from "react";
import Btn, { BtnProps } from "./Btn";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface BannerProps extends BtnProps {
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  height?: string;
  alignItems?: string;
  image?: React.ReactNode;
}

const Banner = ({
  title,
  desc,
  bgColor,
  textColor,
  image,
  height,
  alignItems,
  btnLink,
  btnMode,
  btnType,
  btnText,
}: BannerProps) => {
  return (
    <div
      className={`flex w-full ${
        alignItems ? alignItems : "items-center"
      } justify-center rounded py-4 ${bgColor && bgColor} text-${textColor} ${
        height && height
      }`}
    >
      <div className="mb-5 max-w-6xl text-center">{image}</div>

      <div className="container mx-auto flex max-w-6xl flex-col py-4  text-center">
        <h3 className={`mb-2 text-4xl font-bold `}>{title}</h3>
        <p className="h-16 text-base">{desc}</p>
        <span className="flex justify-center">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </span>
      </div>
    </div>
  );
};

export default Banner;