import React from "react";
import AccordionNeutralWithImageSection, { AccordionNeutralWithImageProps } from "../AccordionNeutralWithImageSection";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";


interface DigitalStampsFAQProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DigitalStampsFAQ = ({ image }: DigitalStampsFAQProps) => {
  const { t } = useTranslation();
  const props: AccordionNeutralWithImageProps = {
    items: t("DigitalStampsFAQ.items", { returnObjects: true }),
    bgColor: t("DigitalStampsFAQ.bgColor"),
    bgAccordionColor: t("DigitalStampsFAQ.bgAccordionColor"),
    title: t("DigitalStampsFAQ.title"),
    desc: t("DigitalStampsFAQ.desc"),
    textColor: t("DigitalStampsFAQ.textColor"),
    textAccordionColor: t("DigitalStampsFAQ.textAccordionColor"),
    btnType: t("DigitalStampsFAQ.btnType"),
    btnText: t("DigitalStampsFAQ.btnText"),
    btnLink: t("DigitalStampsFAQ.btnLink"),
    btnMode: t("DigitalStampsFAQ.btnMode"),
    ...(image && {
        image: (
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.description}
            className="z-10 m-4 w-100 rounded-full"
          ></GatsbyImage>
        ),
      }),
    descText: t("DigitalStampsFAQ.descText"),
    linkURL: t("DigitalStampsFAQ.linkURL"),
    linkText: t("DigitalStampsFAQ.linkText"),
    afterText: t("DigitalStampsFAQ.afterText"),
    };


  return (
    <AccordionNeutralWithImageSection bgColor="bg-white"
    textColor="gray-primary"
    textAccordionColor="orange-primary"
    bgAccordionColor="bg-gray-light" {...props}></AccordionNeutralWithImageSection>
  );
};

export default DigitalStampsFAQ;
