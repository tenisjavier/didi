import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Btn, { BtnProps } from "./Btn";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "../components/Image";
// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/'dark'/'primary | btnLink customLink| reverse "false" "true"
// @props for images: bgImage (optional) | image - if you want an image next to the text

export interface CTAProps extends BtnProps {
  hero: boolean;
  title: string;
  desc?: string;
  link?: string;
  textColor: string;
  bgImage?: any;
  bgImageStyle?: string;
  bgVideo?: any;
  imageRawRender?: any;
  bgColor?: string;
  image?: any;
  imageStyle?: string;
  bullets?: string[]; // bullets can be jsx in place map
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
}

const CTASection = (props: CTAProps) => {
  const {
    hero,
    title,
    desc,
    link,
    textColor,
    bgImage,
    bgImageStyle,
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
  } = props;

  let sectionBtn = (
    <Btn
      btnType={btnType}
      btnLink={btnLink}
      btnMode={btnMode}
      btnText={btnText}
      btnModeSecondary={btnModeSecondary}
    ></Btn>
  );

  // if btnType is both will print pax first and drv second
  if (btnType === "both") {
    sectionBtn = (
      <>
        <Btn btnType="pax" btnMode={btnMode}></Btn>
        <br></br>
        <Btn btnType="drv" btnMode={btnMode}></Btn>
      </>
    );
  }
  if (btnType === "bothFood") {
    sectionBtn = (
      <>
        <Btn
          btnType="foodEaterOnline"
          btnModeSecondary={btnModeSecondary}
        ></Btn>
        <br></br>
        <Btn btnType="foodEater" btnMode={btnMode}></Btn>
      </>
    );
  }
  if (btnType === "bothPrestamos") {
    sectionBtn = (
      <>
        <Btn btnType="prestamosPax" btnMode={btnMode}></Btn>
        <br></br>
        <Btn btnType="prestamosDrv" btnMode={btnMode}></Btn>
      </>
    );
  }
  if (btnArray && btnType == "custom") {
    sectionBtn = (
      <>
        {btnArray.map((btn, index) => {
          return (
            <>
              <Btn
                btnText={btn.text}
                btnLink={btn.link}
                btnMode={btnMode}
                key={index}
              ></Btn>
              <br></br>
            </>
          );
        })}
      </>
    );
  }
  if (btnType === "bothFoodEn") {
    sectionBtn = (
      <>
        <Btn btnType="foodEaterOnlineEn" btnMode={btnMode}></Btn>
        <br></br>
        <Btn btnType="foodEaterEn" btnModeSecondary={btnModeSecondary}></Btn>
      </>
    );
  }

  let dir: any = "ltr";
  let textDir: any = "text-left";
  let margin: any = "mr-4";

  if (RTL) {
    dir = "rtl";
    textDir = "text-right";
    margin = "ml-4";
  }

  return (
    <section
      style={{ direction: dir }}
      className={`relative flex min-h-[40rem] w-full  items-center justify-center overflow-hidden
    ${bgColor && bgColor}`}
    >
      <div
        className={`container mx-auto flex w-full   flex-wrap items-center justify-center py-8 
 ${reverse && "flex-row-reverse"} ${
          image || imageRawRender ? "xl:justify-between" : "xl:justify-start"
        }`}
      >
        {image && <Image imageData={image} imageStyle={imageStyle}></Image>}
        {imageRawRender && imageRawRender}
        <div
          className={`w-11/12   text-center lg:w-1/2 text-${textColor} z-10 xl:${textDir}`}
        >
          {hero ? (
            <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          ) : (
            <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>
          )}
          {bullets && (
            <>
              <ul className={`mt-12 mb-2 list-none ${textDir} text-xl`}>
                {bullets.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className="flex">
                        {!customBulletIcon ? (
                          <FontAwesomeIcon
                            icon={faCarSide}
                            className={`mt-1 ${margin} text-orange-primary w-6`}
                            size="sm"
                          />
                        ) : (
                          icon && (
                            <FontAwesomeIcon
                              icon={icon}
                              className={`${margin} text-orange-primary w-6`}
                              size="sm"
                            />
                          )
                        )}
                        <div className="inline-block">
                          {typeof item === "string"
                            ? item.split("\n").map((str, index) => (
                                <p className="mt-0 mb-5 text-xl" key={index}>
                                  {str}
                                </p>
                              ))
                            : item}
                        </div>
                      </li>
                      <br></br>
                    </div>
                  );
                })}
              </ul>
              <br></br>
            </>
          )}
          {desc &&
            desc.split("\n").map((str, index) => (
              <p className="mb-10 text-lg" key={index}>
                {str}
              </p>
            ))}
          {link && (
            <p>
              <a className="mb-5 text-lg" href={"tel:" + link}>
                {link}
              </a>
            </p>
          )}
          {list && (
            <div className="grid grid-cols-2 lg:grid-cols-3 text-orange-primary mb-8">
              {list.map((item, index) => (
                <a href={item.link} key={index}>
                  {item.text}
                </a>
              ))}
            </div>
          )}
          {sectionBtn}
        </div>
      </div>
      {bgImage && <Image imageData={bgImage} imageStyle={bgImageStyle}></Image>}
      {bgVideo && bgVideo}
    </section>
  );
};

export default CTASection;
