import React from "react";
import Image from "../Image";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ColumnImage from "../ColumnImage";

interface BenefitsProps {
  image: any;
  icons: IconProp[];
}

const DiDiCreditBenefits = ({ image, icons }: BenefitsProps) => {
  const props = {
    title: t("DiDiCreditBenefits.title"),
    desc: t("DiDiCreditBenefits.desc"),
    bgColor: t("DiDiCreditBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <Image imageData={image} imageStyle={"z-10 m-4 mt-8 lg:w-80"}></Image>
    ),
    columns: t("DiDiCreditBenefits.columns", { returnObjects: true }),
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

export default DiDiCreditBenefits;
