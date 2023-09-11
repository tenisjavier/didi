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
  smsFormTitle?: string;
  smsFormNote?: string;
  descBeforeBullets?: boolean;
  FoodSmsCTA?: string;
  RidesSmsCTA?: string;
  qr?: React.ReactNode;
  descFooter?: string[] | JSX.Element[];
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
    smsFormTitle,
    descBeforeBullets = true,
    qr,
    descFooter,
  } = props;


  const isRtl = RTL ? "rtl" : "ltr";
  const textDir = RTL ? "text-right" : "text-left";
  const margin = RTL ? "ml-4" : "mr-4";

  const getTitleElement = () => {
    if (hero) {
      return <h1 className="text-4xl font-bold md:text-5xl mt-0">{title}</h1>;
    } else if (btnType === "FoodSmsCTA" || btnType === "RidesSmsCTA") {
      return <h3 className="font-bold text-3xl md:text-4xl">{title}</h3>;
    } else {
      return <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>;
    }
  };

  const renderSectionDesc = () => {
    return (
      desc &&
      desc.split("\n").map((str, index) => (
        <p
          className={`mb-10 text-lg ${btnType !== "FoodSmsCTA" && btnType !== "RidesSmsCTA"
            ? ""
            : "font-bold"
            }`}
          key={index}
        >
          {str}
        </p>
      ))
    );
  };

  return (
    <section
      style={{ direction: isRtl }}
      className={`relative flex min-h-[40rem] w-full items-center justify-center overflow-hidden ${bgColor && bgColor
        }`}
    >
      <div
        className={`container mx-auto flex w-full flex-wrap items-center justify-center py-12 ${reverse ? "flex-row-reverse" : ""
          } ${image || imageRawRender || iframe
            ? "xl:justify-between"
            : "xl:justify-start"
          }`}
      >
        {image && <Image imageData={image} imageStyle={imageStyle} />}
        {imageRawRender && imageRawRender}

        <div
          className={`w-11/12 lg:mt-16 text-center lg:w-1/2 text-${textColor} z-10 xl:${textDir}`}
        >
          {getTitleElement()}
          <div
            className={`flex ${descBeforeBullets ? "flex-col" : "flex-col-reverse"
              }`}
          >
            {renderSectionDesc()}

            {bullets && (
              <SectionBullets
                bullets={bullets}
                customBulletIcon={customBulletIcon}
                margin={margin}
                textDir={textDir}
                icon={icon}
              />
            )}
            {descFooter && (
              <>
                {descFooter.map((str, index) => (
                  <p key={index} className="p-0 m-0 text-start">{str}</p>
                ))}
              </>
            )}
          </div>
          {link && <SectionLink link={link} />}
          {list && <SectionList list={list} />}
          {btnType === "FoodSmsCTA" || btnType === "RidesSmsCTA" ? (
            <div className="bg-red-400">
              <SectionForm
                btnType={btnType}
                qr={qr}
                smsFormTitle={smsFormTitle}
              />
            </div>
          ) : (
            <SectionBtn
              btnType={btnType}
              btnMode={btnMode}
              btnModeSecondary={btnModeSecondary}
              btnLink={btnLink}
              btnText={btnText}
              btnArray={btnArray}
            />
          )}
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
