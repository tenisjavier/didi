import React from "react";
import { t } from "../../context/countryContext";
import Slider, { SliderProps } from "../Slider";

interface PaySliderProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: any;
  }[];
}

const DiDiPaySilderSection = ({ images }: PaySliderProps) => {
  const props:SliderProps = {
    title: t("DiDiPaySilderSection.title"),
    items: t("DiDiPaySilderSection.items", { returnObjects: true }),
  };

  props.items.map((col, index) => {
    col.image = images[index];
  });

  return <Slider {...props}></Slider>;
};

export default DiDiPaySilderSection;
