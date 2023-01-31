import React, { ReactNode } from "react";
import reactMarkdown from "react-markdown";
import Btn, { BtnProps } from "./Btn";
import Truncate from "react-truncate";
import AnimatedNumber from "../components/AnimatedNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock
} from "@fortawesome/free-solid-svg-icons";

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
  btnText2?: string;
  btnLink2?: string;
  offer?: boolean;
  offerTextBefore?: string;
  offerText?: string;
  offerTextAfter?: string;
  small?: string;
  animatedNumber?: boolean;
  numberTitle?: number;
  afterTitle?: string;
  timeToRead?: string;
  RTL?: boolean;
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
    btnText2,
    btnLink2,
    index,
    offer,
    offerTextBefore,
    offerText,
    offerTextAfter,
    small,
    animatedNumber,
    numberTitle,
    afterTitle,
    timeToRead,
    RTL
  } = props;

  let min = "";
  if(timeToRead) {
      min = "min";
    if(Number(timeToRead) > 1) {
      min = "mins";
    }
  }

  let dir : any = "ltr";

  if(RTL) {
    dir = "rtl";
  }

  return (
    <div style={{direction: dir}}
      className={` max-w-xs   rounded ${bgColor} text-${textColor} my-3 text-center lg:mx-4 card-${index}`}
    >
      <div className="mb-5">{image}</div>

      <div
        className={`flex ${height} flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div className={`mb-4 ${insideHeight} `}>
          {animatedNumber && (
            <AnimatedNumber
              number={0}
              maxNumber={numberTitle}
              titleAfter={afterTitle}
              identifier={"value-" + numberTitle}
            ></AnimatedNumber>
          )}
          {title && !animatedNumber && (
            <h4 className={`mb-4 text-xl font-bold `}>{title}</h4>
          )}
          <p className={"text-lg"}></p>
          {desc && (
            <Truncate lines={8} ellipsis={<span>...</span>}>
              {desc}
            </Truncate>
          )}
          {offer && (
            <p className="block">
              <span className="inline-block align-top">{offerTextBefore}</span>
              <span className="inline-block text-7xl text-orange-primary">
                {offerText}
              </span>
              <span className="inline-block align-baseline">
                {offerTextAfter}
              </span>
            </p>
          )}
          {small &&
            small.split("\n").map((str) => <p className="text-start">{str}</p>)}
        </div>
        {timeToRead && (
          <p><FontAwesomeIcon icon={faClock} className="w-3" /> <span>{timeToRead} {min}</span> </p>
        )}
        
        <div className="flex justify-center flex-col">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
          {btnText2 && (
            <Btn
              btnType={btnType}
              btnLink={btnLink2}
              btnMode={btnMode}
              btnText={btnText2}
            ></Btn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;