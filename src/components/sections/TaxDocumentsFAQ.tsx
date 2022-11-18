import React from "react";
import AccordionNeutralWithImageSection, {
  AccordionNeutralWithImageProps,
} from "../AccordionNeutralWithImageSection";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";

interface TaxDocumentsFAQProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxDocumentsFAQ = ({ image }: TaxDocumentsFAQProps) => {
  const props: AccordionNeutralWithImageProps = {
    items: t("TaxDocumentsFAQ.items", { returnObjects: true }),
    bgColor: t("TaxDocumentsFAQ.bgColor"),
    bgAccordionColor: t("TaxDocumentsFAQ.bgAccordionColor"),
    title: t("TaxDocumentsFAQ.title"),
    desc: t("TaxDocumentsFAQ.desc"),
    textColor: t("TaxDocumentsFAQ.textColor"),
    textAccordionColor: t("TaxDocumentsFAQ.textAccordionColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-100 rounded-full"
        ></GatsbyImage>
      ),
    }),
    descText: t("TaxDocumentsFAQ.descText"),
    linkURL: t("TaxDocumentsFAQ.linkURL"),
    linkText: t("TaxDocumentsFAQ.linkText"),
    afterText: t("TaxDocumentsFAQ.afterText"),
  };

  return (
    <AccordionNeutralWithImageSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      {...props}
    ></AccordionNeutralWithImageSection>
  );
};

export default TaxDocumentsFAQ;
