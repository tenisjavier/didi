import React from "react";
import Image from "../Image";
import { t } from "../../context/countryContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ColumnImage from "../ColumnImage";

interface BenefitsProps {
  image: any;
  images?: any;
  icons: IconProp[];
}

const DiDiCreditBenefits = ({ image, images }: BenefitsProps) => {
  const props = {
    title: t("DiDiCreditBenefits.title"),
    desc: t("DiDiCreditBenefits.desc"),
    bgColor: t("DiDiCreditBenefits.bgColor"),
    textColor: t("DiDiCreditBenefits.textColor"),
    image: <Image imageData={image} imageStyle={"z-10 mt-8 "}></Image>,
    columns: t("DiDiCreditBenefits.columns", { returnObjects: true }),
    imageAlignment: "center",
  };

  if (images) {
    props.columns.forEach((col: any, index: string) => {
      col.image = images[index];
      col.imageStyle = "w-8";
      col.isImage = true;
    });
  }

  return <ColumnImage {...props}></ColumnImage>;
};

export default DiDiCreditBenefits;
