import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Btn, { BtnProps } from "./Btn";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/'dark'/'primary | btnLink customLink| reverse "false" "true"
// @props for images: bgImage (optional) | bgMobileImage (optional)| image - if you want an image next to the text

export interface TopStoryProps extends BtnProps {
  hero: boolean;
  title: string;
  desc?: string;
  textColor: string;
  bgImage?: React.ReactNode;
  bgMobileImage?: React.ReactNode;
  bgColor?: string;
  image?: React.ReactNode;
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
}

const TopStory = (props: TopStoryProps) => {
  const {
    hero,
    title,
    desc,
    textColor,
    bgImage,
    bgMobileImage,
    bgColor,
    image,
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

  return (
    <section
      className={`relative flex min-h-[20rem] w-full  items-center justify-center overflow-hidden
    ${bgColor && bgColor}`}
    >
      <div
        className={`container mx-auto flex w-full   flex-wrap items-center justify-center py-5 xl:justify-start`}>
        {image}

        <div
          className={`w-11/12   text-center lg:w-1/4 text-${textColor} z-10 xl:text-left`}
        >
          {hero ? (
            <h1 className="text-3xl font-bold md:text-3xl">{title}</h1>
          ) : (
            <h2 className="text-3xl font-bold md:text-3xl">{title}</h2>
          )}
          {desc &&
            desc.split("\n").map((str, index) => (
              <p className="mb-5 text-base" key={index}>
                {str}
              </p>
            ))}
          {sectionBtn}
        </div>
      </div>
      {bgImage}
      {bgMobileImage}
    </section>
  );
};

export default TopStory;
