import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnImage from "../ColumnImage";

const ContactBenefits = ({ image, icons }) => {
  const props = {
    title: t("ContactBenefits.title"),
    bgColor: t("ContactBenefits.bgColor"),
    textColor: t("ContactBenefits.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 mt-8 lg:mt-48 lg:w-80"
      ></GatsbyImage>
    ),
    columns: t("ContactBenefits.columns", { returnObjects: true }),
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

export default ContactBenefits;
