import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface EntregaBusinessDeliveryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const EntregaBusinessDeliveryCTA = ({
  image,
}: EntregaBusinessDeliveryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("EntregaBusinessDeliveryCTA.title"),
    desc: t("EntregaBusinessDeliveryCTA.desc"),
    bullets: t("EntregaBusinessDeliveryCTA.bullets", { returnObjects: true }),
    textColor: t("EntregaBusinessDeliveryCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("EntregaBusinessDeliveryCTA.btnMode"),
    btnType: "foodDelivery",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default EntregaBusinessDeliveryCTA;
