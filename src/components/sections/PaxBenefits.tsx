import React from "react";
import Image from "../Image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnImage from "../ColumnImage";

interface BenefitsProps {
  image: any;
  icons: IconProp[];
}

const PaxBenefits = ({ image, icons }: BenefitsProps) => {
  const props = {
    title: t("PaxBenefits.title"),
    desc: t("PaxBenefits.desc"),
    bgColor: t("PaxBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <Image imageData={image} imageStyle={"z-10 m-4 mt-8 lg:w-80"}></Image>
    ),
    columns: t("PaxBenefits.columns", { returnObjects: true }),
    reverse: false,
  };

  icons.forEach((icon, index) => {
    props.columns[index].image = (
      <FontAwesomeIcon
        icon={icon}
        size="4x"
        className="text-orange-primary w-16"
      />
    );
  });

  return <ColumnImage {...props}></ColumnImage>;
};

export default PaxBenefits;
