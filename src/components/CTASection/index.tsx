import React from "react";
import { BtnProps } from "../Btn";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image, { ImageDataType } from "../../components/Image";
import SectionBtn from "./SectionBtn";
import SectionBullets from "./SectionBullets";
import SectionLink from "./SectionLink";
import SectionForm from "./SectionForm";
import SectionIframe from "./SectionIframe";
import SectionList from "./SectionList";
import SectionBulletsCreditCard, {
  sectionBulletsCreditCardType,
} from "./SectionBulletsCreditCard";

export interface CTAProps extends BtnProps {
  hero: boolean;
  title: string;
  iframe?: string;
  desc?: string;
  link?: string;
  textColor: string;
  bgImage?: ImageDataType;
  bgImageStyle?: string;
  mobileBgImage?: ImageDataType;
  mobileBgImageStyle?: string;
  bgVideo?: React.ReactNode;
  imageRawRender?: React.ReactNode;
  bgColor?: string;
  image?: ImageDataType;
  imageStyle?: string;
  bullets?: string[] | JSX.Element[];
  list?: {
    text: string;
    link: string;
  }[];
  customBulletIcon?: boolean;
  icon?: IconProp;
  btnArray?: {
    link: string;
    text: string;
  }[];
  reverse?: boolean;
  RTL?: boolean;
  descBeforeBullets?: boolean;
  descFooter?: string[] | JSX.Element[];
  bulletsCreditCard?: sectionBulletsCreditCardType[];
  bulletsConfigColumn?: "default" | "singleColumn";
  bgColumTitle?: string;
  borderColor?: string;
}

const CTASection = (props: CTAProps) => {
  const {
    hero,
    title,
    iframe,
    desc,
    link,
    textColor,
    bgImage,
    bgImageStyle,
    mobileBgImage,
    mobileBgImageStyle,
    bgVideo,
    imageRawRender,
    bgColor,
    image,
    imageStyle,
    bullets,
    list,
    customBulletIcon,
    icon,
    btnType,
    btnText,
    btnLink,
    btnMode,
    btnArray,
    reverse,
    btnModeSecondary,
    RTL,
    descBeforeBullets = true,
    descFooter,
    bulletsCreditCard,
    bulletsConfigColumn = "default",
    bgColumTitle,
    borderColor,
  } = props;

  const isRtl = RTL ? "rtl" : "ltr";
  const textDir = RTL ? "text-right" : "text-left";
  const margin = RTL ? "ml-4" : "mr-4";

  const getTitleElement = () => {
    if (hero) {
      return <h1 className="text-4xl font-bold md:text-5xl mt-0">{title}</h1>;
    } else {
      return <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>;
    }
  };

  const renderSectionDesc = () => {
    return (
      desc &&
      desc.split("\n").map((str, index) => (
        <p className={`mb-10 text-lg`} key={index}>
          {str}
        </p>
      ))
    );
  };

  return (
    <section
      style={{ direction: isRtl }}
      className={`relative flex min-h-[40rem] w-full items-center justify-center overflow-hidden ${
        bgColor && bgColor
      } ${borderColor && "border-solid border border-" + borderColor}`}
    >
      <div
        className={`container mx-auto flex w-full flex-wrap items-center justify-center py-12 ${
          reverse ? "flex-row-reverse" : ""
        } ${
          image || imageRawRender || iframe
            ? "xl:justify-between"
            : "xl:justify-start"
        }`}
      >
        {image && <Image imageData={image} imageStyle={imageStyle} />}
        {bullets && bulletsConfigColumn === "singleColumn" && (
          <SectionBullets
            bullets={bullets}
            customBulletIcon={customBulletIcon}
            margin={margin}
            textDir={textDir}
            icon={icon}
          />
        )}

        {bulletsCreditCard && bulletsConfigColumn === "singleColumn" && (
          <SectionBulletsCreditCard
            bullets={bulletsCreditCard}
            customBulletIcon={customBulletIcon}
            margin={margin}
            textDir={textDir}
            icon={icon}
          />
        )}

        {imageRawRender && imageRawRender}

        <div
          className={`w-11/12 lg:mt-16 text-center lg:w-1/2 text-${textColor} ${bgColumTitle} z-10 xl:${textDir}`}
        >
          {getTitleElement()}
          <div
            className={`flex ${
              descBeforeBullets ? "flex-col" : "flex-col-reverse"
            }`}
          >
            {renderSectionDesc()}

            {bullets && bulletsConfigColumn === "default" && (
              <SectionBullets
                bullets={bullets}
                customBulletIcon={customBulletIcon}
                margin={margin}
                textDir={textDir}
                icon={icon}
              />
            )}
            {bulletsCreditCard && bulletsConfigColumn === "default" && (
              <SectionBulletsCreditCard
                bullets={bulletsCreditCard}
                customBulletIcon={customBulletIcon}
                margin={margin}
                textDir={textDir}
                icon={icon}
              />
            )}
            {descFooter && (
              <div className="my-6">
                {descFooter.map((str, index) => (
                  <p key={index} className="p-0 m-0 my-1 text-start">
                    {str}
                  </p>
                ))}
              </div>
            )}
          </div>
          {link && <SectionLink link={link} />}
          {list && <SectionList list={list} />}

          <SectionBtn
            btnType={btnType}
            btnMode={btnMode}
            btnModeSecondary={btnModeSecondary}
            btnLink={btnLink}
            btnText={btnText}
            btnArray={btnArray}
          />
        </div>

        {iframe === "drv" && <SectionIframe />}
      </div>

      {bgImage && <Image imageData={bgImage} imageStyle={bgImageStyle} />}

      {mobileBgImage && (
        <Image imageData={mobileBgImage} imageStyle={mobileBgImageStyle} />
      )}

      {bgVideo && bgVideo}
    </section>
  );
};

export default CTASection;
