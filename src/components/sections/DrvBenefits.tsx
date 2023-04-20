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

const DrvBenefits = ({ image, icons }: BenefitsProps) => {
  const props = {
    title: t("DrvBenefits.title"),
    bgColor: t("DrvBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <Image imageData={image} imageStyle={"z-10 m-4 mt-8 lg:w-80"}></Image>
    ),
    columns: t("DrvBenefits.columns", { returnObjects: true }),
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

export default DrvBenefits;
