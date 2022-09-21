import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface TaxRequiredProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxRequired = ({ bgImage }: TaxRequiredProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("TaxRequired.title"),
    desc: t("TaxRequired.desc"),
    textColor: t("TaxRequired.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("TaxRequired.btnMode"),
    btnText: t("TaxRequired.btnText"),
    btnLink: t("TaxRequired.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxRequired;
