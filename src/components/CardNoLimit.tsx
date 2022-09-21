import React, { ReactNode } from "react";
import reactMarkdown from "react-markdown";
import Btn, { BtnProps } from "./Btn";
import Truncate from "react-truncate";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface CardProps extends BtnProps {
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
  image: React.ReactNode;
  height?: string;
  insideHeight?: string;
  width?: string;
  index?: number;
}

const Card = (props: CardProps) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    height,
    insideHeight,
    width,
    btnLink,
    btnMode,
    btnText,
    btnType,
    index,
  } = props;

  return (
    <div
      className={` max-w-xs ${width}  rounded ${bgColor} text-${textColor} my-3 text-center lg:mx-12 card-${index}`}
    >
      <div className="mb-5">{image}</div>

      <div
        className={`flex flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div className={`mb-4 ${insideHeight} overflow-hidden`}>
          {title && title.split("\n").map((str) => <h4 className="mb-4 text-xl font-bold">{str}</h4>)}
          {desc && desc.split("\n").map((str) => <p className="text-center md:text-left">{str}</p>)}
        </div>
        <div className="flex justify-center">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </div>
      </div>
    </div>
  );
};

export default Card;
