import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnImage from "../ColumnImage";

const DiDiPrestamosBenefits = ({ image, icons }) => {
  const props = {
    title: t("DiDiPrestamosBenefits.title"),
    desc: t("DiDiPrestamosBenefits.desc"),
    bgColor: t("DiDiPrestamosBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 mt-8 w-80"
      ></GatsbyImage>
    ),
    columns: t("DiDiPrestamosBenefits.columns", { returnObjects: true }),
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

export default DiDiPrestamosBenefits;
