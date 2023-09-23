import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface DiDiCreditWhyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiCreditWhy = ({ image }: DiDiCreditWhyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiCreditWhy.title"),
    desc: t("DiDiCreditWhy.desc"),
    bullets: t("DiDiCreditWhy.bullets", { returnObjects: true }),
    textColor: t("DiDiCreditWhy.textColor"),
    bgColor: t("DiDiCreditWhy.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110",
    reverse: true,
    icon: faArrowRight,
    customBulletIcon: true,
    borderColor: "orange-primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditWhy;
