import React from "react";
import Btn, { BtnProps } from "./Btn";
import Image from "../components/Image";
// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface BannerProps extends BtnProps {
  title: string;
  desc?: string | React.ReactNode;
  descText?: string;
  bgColor: string;
  textColor: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  image?: React.ReactNode;
  reverse?: boolean;
  isRounded?: boolean;
  borderColor?: string;
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
  justifyContent,
  btnLink,
  btnMode,
  btnType,
  btnText,
  reverse,
  isRounded,
  borderColor,
}: BannerProps) => {
  let rounded = "rounded";

  if (!isRounded) rounded = "";
  return (
    <div
      className={`${rounded} py-0 lg:py-4 ${
        bgColor && bgColor
      } text-${textColor} ${height && height} ${
        borderColor && "border-solid border border-" + borderColor
      }`}
    >
      <div
        className={`container mx-auto flex flex-wrap ${
          reverse ? "flex-row-reverse" : ""
        } w-full ${alignItems ? alignItems : "items-center"} ${
          justifyContent ? justifyContent : "justify-center"
        }`}
      >
        <div
          className={`flex  flex-col py-4  px-4 lg:px-0  ${
            image ? "text-left" : "text-center"
          }`}
        >
          <h3
            className={`mb-2 text-3xl lg:text-4xl text-left lg:text-center font-bold `}
          >
            {title}
          </h3>

          {descText &&
            descText
              .split("\n")
              .map((str) => <p className=" text-lg">{str}</p>)}

          {desc && <p className="text-lg text-left lg:text-center">{desc}</p>}
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

        {image ? <div className="mb-5 max-w-6xl text-center">{image}</div> : ""}
      </div>
    </div>
  );
};

export default Banner;
