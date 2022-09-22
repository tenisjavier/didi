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
      className={` max-w-xs   rounded ${bgColor} text-${textColor} my-3 text-center lg:mx-4 card-${index}`}
    >
      <div className="mb-5">{image}</div>

      <div
        className={`flex ${height} flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div className={`mb-4 ${insideHeight} overflow-hidden`}>
          <h4 className={`mb-4 text-xl font-bold `}>{title}</h4>
          <p className={"text-lg"}></p>
          <Truncate lines={6} ellipsis={<span>...</span>}>
            {desc}
          </Truncate>
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
