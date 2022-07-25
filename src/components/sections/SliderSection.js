import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Slider from "../Slider";

const SilderSection = ({ data, title }) => {
  const { t } = useTranslation();

  const props = {
    title: title || t("SliderSection.title"),
    items: data,
  };

  return <Slider {...props}></Slider>;
};

export default SilderSection;
