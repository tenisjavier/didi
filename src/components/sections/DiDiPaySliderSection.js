import React from "react";
import { t } from "../../context/countryContext";
import Slider from "../Slider";

const DiDiPaySilderSection = ({ images }) => {
  const props = {
    title: t("DiDiPaySilderSection.title"),
    items: t("DiDiPaySilderSection.items", { returnObjects: true }),
  };

  props.items.forEach((col, index) => {
    col.image = images[index];
  });

  return <Slider {...props}></Slider>;
};

export default DiDiPaySilderSection;
