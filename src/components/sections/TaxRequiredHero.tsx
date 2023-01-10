import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxRequiredProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TaxRequired = ({ bgImage }: TaxRequiredProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TaxRequired.title"),
    desc: t("TaxRequired.desc"),
    textColor: t("TaxRequired.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("TaxRequired.btnMode"),
    btnText: t("TaxRequired.btnText"),
    btnLink: t("TaxRequired.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxRequired;
