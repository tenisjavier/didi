import React, { ReactNode } from "react";
import reactMarkdown from "react-markdown";
import Btn, { BtnProps } from "./Btn";
import Truncate from "react-truncate";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface CardProps extends BtnProps {
  title: ReactNode | string;
  desc?: string;
  bgColor: string;
  textColor: string;
  image: React.ReactNode;
  height?: string;
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
    width,
    btnLink,
    btnMode,
    btnText,
    btnType,
    index,
  } = props;

  return (
    <div
      style={{direction: "rtl"}}
      className={` max-w-xs ${width}  rounded ${bgColor} text-${textColor} my-3 text-right lg:mx-12 card-${index}`}
    >
      <div className="mb-5">{image}</div>

      <div
        className={`flex ${height} flex-col items-right justify-between px-6 py-4 text-right`}
      >
        <div className="mb-4 h-64 overflow-hidden">
          <h4 className={`mb-4 text-xl font-bold `}>{title}</h4>
          <p className={"text-lg"}></p>
          <Truncate lines={6} ellipsis={<span>...</span>}>
            {desc}
          </Truncate>
        </div>
        <div className="flex justify-right">
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