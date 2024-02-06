import React, { ReactNode } from "react";
import Btn, { BtnProps } from "./Btn";
import Truncate from "react-truncate";
import AnimatedNumber from "../components/AnimatedNumber";
import Image from "../components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import textHighlighter from "../util/textHighlighter";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface CardProps extends BtnProps {
  title: ReactNode | string;
  desc?: string;
  bgColor: string;
  textColor: string;
  image: any;
  imageStyle?: string;
  isImage?: boolean;
  height?: string;
  insideHeight?: string;
  truncate?: boolean;
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
  rounded?: string;
  customWidth?: string;
  reverse?: boolean;
  hasTextHighlighter?: boolean;
  textHighlighterStyle?: string;
  titleStyles?: string;
  imageName?: string;
  hasTextHighlighterDesc?: boolean;
  hasTextHighlighterDescStyle?: string;
  titlePosition?: "beforeImage" | "afterImage";
  descPosition?: "beforeBtn" | "afterBtn";
  iconTop?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    imageStyle,
    isImage,
    height,
    insideHeight,
    truncate,
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
    RTL,
    rounded,
    customWidth,
    reverse,
    hasTextHighlighter,
    textHighlighterStyle,
    titleStyles,
    hasTextHighlighterDesc,
    hasTextHighlighterDescStyle,
    titlePosition = "afterImage",
    descPosition = "beforeBtn",
    iconTop,
  } = props;

  let min = "";
  if (timeToRead) {
    min = "min";
    if (Number(timeToRead) > 1) {
      min = "mins";
    }
  }

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  let isTruncate = (
    <Truncate lines={8} ellipsis={<span>...</span>}>
      {desc}
    </Truncate>
  );

  if (!truncate && desc) {
    isTruncate = (
      <>
        {desc.split("\n").map((str) => (
          <p className="text-center  p-0 m-0">
            {hasTextHighlighterDesc
              ? textHighlighter(str, hasTextHighlighterDescStyle)
              : str}
          </p>
        ))}
      </>
    );
  }

  return (
    <div
      style={{ direction: dir }}
      className={`${
        customWidth ? customWidth : "max-w-xs"
      }  ${rounded} rounded ${bgColor} ${
        reverse ? "flex flex-col-reverse justify-between" : ""
      }  text-${textColor} my-3 text-center lg:mx-4 card-${index} relative`}
    >
      {iconTop}
      {titlePosition === "beforeImage" && title && (
        <h4 className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}>
          {hasTextHighlighter
            ? textHighlighter(title as string, textHighlighterStyle)
            : title}
        </h4>
      )}
      <div className="mb-5">
        {isImage && <Image imageData={image} imageStyle={imageStyle}></Image>}
        {!isImage && image}
      </div>

      <div
        className={`flex ${height} ${width} flex-col items-center justify-between px-6 py-4 text-center`}
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
          {titlePosition === "afterImage" && title && !animatedNumber && (
            <h4
              className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}
            >
              {hasTextHighlighter
                ? textHighlighter(title as string, textHighlighterStyle)
                : title}
            </h4>
          )}
          <p className={"text-lg"}></p>
          {descPosition === "beforeBtn" && desc && isTruncate}

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
          <p>
            <FontAwesomeIcon icon={faClock} className="w-3" />{" "}
            <span>
              {timeToRead} {min}
            </span>{" "}
          </p>
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
        {descPosition === "afterBtn" && desc && isTruncate}
      </div>
    </div>
  );
};

export default Card;
