import React from "react";
import Image from "../Image";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ColumnImage from "../ColumnImage";

interface ContactBenefitsProps {
  image: any;
  icons: IconProp[];
}

const ContactBenefits = ({ image, icons }: ContactBenefitsProps) => {
  const props = {
    title: t("ContactBenefits.title"),
    bgColor: t("ContactBenefits.bgColor"),
    textColor: t("ContactBenefits.textColor"),
    image: (
      <Image imageData={image} imageStyle={"z-10 m-4 mt-8 lg:mt-48 w-80"}></Image>
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
