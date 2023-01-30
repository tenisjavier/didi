import React from "react";
import { t } from "../../context/countryContext";
import Slider from "../Slider";

const SilderSectionCity = ({ data, title, city }) => {
  const props = {
    title: title || t("SliderSectionCity.title", { city: city }),
    items: data,
  };

  return <Slider {...props}></Slider>;
};

export default SilderSectionCity;
