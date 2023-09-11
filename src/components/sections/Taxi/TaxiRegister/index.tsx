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

const TaxiRegister = ({ image }: TaxiRegisterProps) => {

  const props: CTAProps = {
    hero: false,
    title: t("TaxiRegister.title"),
    desc: t("TaxiRegister.desc"),
    bullets: t("TaxiRegister.bullets", { returnObjects: true }),
    textColor: t("TaxiRegister.textColor"),
    customBulletIcon: true,
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
    descFooter: t("TaxiRegister.descFooter", { returnObjects: true }),
    btnMode: t("Taxi.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiRegister;
