import React from "react";
import { t } from "../../context/countryContext";
import Slider, { SliderProps } from "../Slider";

interface SliderSectionProps {
  data: {
    name: string;
    description: string;
    descriptionForPax: string;
    des2: string;
    image: {
      title: string;
      description: string;
      gatsbyImageData: any;
    },
    imageForPax: {
      title: string;
      description: string;
      gatsbyImageData: any;
    }
  }[];
  title: string;
}

const SilderSection = ({ data, title }: SliderSectionProps) => {
  const props: SliderProps = {
    title: title || t("SliderSection.title"),
    items: data,
  };

  return <Slider {...props}></Slider>;
};

export default SilderSection;
