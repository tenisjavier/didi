import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryPersonalWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryPersonalWhyDiDi = ({ image }: DeliveryPersonalWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryPersonalWhyDiDi.title"),
    desc: t("DeliveryPersonalWhyDiDi.desc"),
    textColor: t("DeliveryPersonalWhyDiDi.textColor"),
    bgColor: t("DeliveryPersonalWhyDiDi.bgColor"),
    image: image,
    bgImage: "z-10 m-4 w-100 rounded-full",
    btnMode: t("DeliveryPersonalWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalWhyDiDi;
