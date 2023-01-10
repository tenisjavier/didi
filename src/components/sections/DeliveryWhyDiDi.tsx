import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryWhyDiDi = ({ image }: DeliveryWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryWhyDiDi.title"),
    desc: t("DeliveryWhyDiDi.desc"),
    textColor: t("DeliveryWhyDiDi.textColor"),
    bgColor: t("DeliveryWhyDiDi.bgColor"),
    image: image,
    bgImage: "z-10 m-4 w-100 rounded-full",
    btnMode: t("DeliveryWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryWhyDiDi;
