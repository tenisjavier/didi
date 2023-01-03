import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TestimonialsHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TestimonialsHero = ({ bgImage }: TestimonialsHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TestimonialsHero.title"),
    desc: t("TestimonialsHero.desc"),
    textColor: t("TestimonialsHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block !object-top"
      ></GatsbyImage>
    ),
    btnMode: t("TestimonialsHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TestimonialsHero;
