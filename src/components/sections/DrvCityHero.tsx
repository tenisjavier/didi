import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import Image, { ImageDataType } from "../Image";

interface DrvCityHeroProps {
  data: {
    name: string;
    image?: ImageDataType;
  };
  isRTL?: boolean;
}

const DrvCityHero = ({ data, isRTL }: DrvCityHeroProps) => {
  console.log(data);
  const {
    name,
    image,
  } = data;

  const props: CTAProps = {
    hero: true,
    title: t("DrvCityHero.title", { city: `${name}` }),
    desc: t("DrvCityHero.desc", { city: `${name}` }),
    textColor: t("DrvCityHero.textColor"),
    bgColor: t("DrvCityHero.bgColor"),
    imageRawRender: (
      <>
        {image && <Image imageData={image} imageStyle="!z-10 m-4 w-100 h-100" />}
      </>
    ),
    btnMode: t("DrvCityHero.btnMode"),
    btnType: "drv",
    reverse: true,
    RTL: isRTL || false
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCityHero;