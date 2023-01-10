import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CareerWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const CareerWhyDiDi = ({ image }: CareerWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CareerWhyDiDi.title"),
    bullets: t("CareerWhyDiDi.bullets", { returnObjects: true }),
    textColor: "gray-primary",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
  };
  return <CTASection {...props}></CTASection>;
};

export default CareerWhyDiDi;
