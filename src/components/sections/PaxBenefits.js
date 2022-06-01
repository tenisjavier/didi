import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faClock,
  faUserShield,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ColumnImage from "../ColumnImage";

const PaxBenefits = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PaxBenefits.title"),
    bgColor: t("PaxBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 mt-8 w-80 rounded-full"
      ></GatsbyImage>
    ),
    columns: t("PaxBenefits.columns", { returnObjects: true }),
    reverse: false,
  };

  props.columns[0].image = (
    <FontAwesomeIcon
      icon={faCircleDollarToSlot}
      size="4x"
      className="text-orange-primary"
    />
  );

  props.columns[1].image = (
    <FontAwesomeIcon icon={faClock} size="3x" className="text-orange-primary" />
  );

  props.columns[2].image = (
    <FontAwesomeIcon
      icon={faUserShield}
      size="3x"
      className="text-orange-primary"
    />
  );

  props.columns[3].image = (
    <FontAwesomeIcon
      icon={faThumbsUp}
      size="3x"
      className="text-orange-primary"
    />
  );

  return <ColumnImage {...props}></ColumnImage>;
};

export default PaxBenefits;
