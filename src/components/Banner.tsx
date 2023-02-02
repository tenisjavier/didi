import React from "react";
import Btn, { BtnProps } from "./Btn";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface BannerProps extends BtnProps {
  title: string;
  desc?: string;
  descText?: string;
  bgColor: string;
  textColor: string;
  height?: string;
  alignItems?: string;
  image?: React.ReactNode;
  flexWrap?: string;
  reverse?: boolean;
}

const Banner = ({
  title,
  desc,
  descText,
  bgColor,
  textColor,
  image,
  height,
  alignItems,
  btnLink,
  btnMode,
  btnType,
  btnText,
  flexWrap,
  reverse,
}: BannerProps) => {
  return (
    <div
      className={`${flexWrap ? flexWrap : ""} flex w-full ${
        alignItems ? alignItems : "items-center"
      } justify-center rounded py-4 ${bgColor && bgColor} text-${textColor} ${
        height && height
      }`}
    >
      {reverse ? "" : <div className="mb-5 max-w-6xl text-center">{image}</div>}

      <div className="container mx-auto flex max-w-6xl flex-col py-4  text-center">
        <h3 className={`mb-2 text-4xl font-bold `}>{title}</h3>

        {descText &&
          descText.split("\n").map((str) => <p className="text-base">{str}</p>)}
        <br />
        <p className="text-base">{desc}</p>
        <span
          className={`flex justify-center ${
            btnText != "VideoSection.btnText" ? "" : "hidden"
          }`}
        >
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </span>
      </div>

      {reverse ? <div className="mb-5 max-w-6xl text-center">{image}</div> : ""}
    </div>
  );
};

export default Banner;
