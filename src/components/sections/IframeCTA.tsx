import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { BtnProps } from "../Btn";

interface IframeCTAProps extends BtnProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  title?: string;
}

const IframeCTA = ({ bgImage, mobileBgImage, title }: IframeCTAProps) => {
  //? if there is a mobile image use that one
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full md:block brightness"
    : "!absolute z-0 h-full w-full md:block ";
  const props: CTAProps = {
    hero: true,
    title: title || t("IframeCTA.title"),
    desc: t("IframeCTA.desc"),
    bullets: t("IframeCTA.bullets", { returnObjects: true }),
    iframe: "drv",
    textColor: t("IframeCTA.textColor"),
    bgColor: t("IframeCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden ",
  };
  return <CTASection {...props}></CTASection>;
};

export default IframeCTA;
