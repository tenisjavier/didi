import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerHeroProps {
  title: string;
  desc: string;
  image: any;
}

const PartnerHero = ({ title, desc, image }: PartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: "white",
    bgColor: "bg-orange-primary",
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: "light",
    btnType: "drv",
    reverse: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerHero;
