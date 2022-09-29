import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Slider from "../Slider";

const DiDiPaySilderSection = ({ images }) => {
  const { t } = useTranslation();

  const props = {
    title: t("DiDiPaySilderSection.title"),
    items: t("DiDiPaySilderSection.items", { returnObjects: true }),
  };

  props.items.forEach((col, index) => {
    console.log(images[index]);
    col.image = images[index];
  });

  return <Slider {...props}></Slider>;
};

export default DiDiPaySilderSection;
