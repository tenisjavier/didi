import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface RequirementHeroProps {
  title: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const RequirementHero = ({ title, bgImage }: RequirementHeroProps) => {
  const { t } = useTranslation();

  const props: CTAProps = {
    hero: true,
    title: title,
    textColor: t("RequirementHero.textColor"),
    btnMode: t("RequirementHero.btnMode"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block "
      ></GatsbyImage>
    ),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default RequirementHero;
