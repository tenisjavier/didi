import React from "react";
import { t } from "../../context/countryContext";
import Slider from "../Slider";

const SilderSection = ({ data, title }) => {
  const props = {
    title: title || t("SliderSection.title"),
    items: data,
  };

  return <Slider {...props}></Slider>;
};

export default SilderSection;
