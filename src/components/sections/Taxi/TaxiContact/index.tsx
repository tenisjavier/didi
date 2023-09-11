import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface TaxiRegisterProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxiContact = ({ image }: TaxiRegisterProps) => {

  const props: CTAProps = {
    hero: false,
    title: t("TaxiContact.title"),
    desc: t("TaxiContact.desc"),
    bullets: t("TaxiContact.bullets", { returnObjects: true }),
    textColor: t("TaxiContact.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
    descFooter: t("TaxiContact.descFooter", { returnObjects: true }),
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiContact;
