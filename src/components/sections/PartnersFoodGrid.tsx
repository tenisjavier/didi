import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import slugify from "react-slugify";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface PartnersGridProps {
  data: {
    name: string;
    desc: string;
    logo: {
      title: string;
      description: string;
      gatsbyImageData: any;
    };
  }[];
  title: string;
  bgColor: string;
  textColor: string;
  sectionID: string;
}

const PartnersFoodGrid = ({ data, title, bgColor, textColor, sectionID }: PartnersGridProps) => {
  const PropColumns = data.map((partner) => {
    const image = partner.logo;
    const link = t("PartnersFoodGrid.linkItem", {
      partnerName: slugify(partner.name),
    });
    return {
      title: <Link to={link}>{partner.name}</Link>,
      desc: partner.desc,
      image: (
        <Link to={link}>
          <Image imageData={image} imageStyle="z-10 m-4"></Image>
        </Link>
      ),
      bgColor: "white",
      textColor: "gray-primary"
    };
  });
  
  const props: ColumnsSectionProps = {
    title: title || t("PartnersFoodGrid.title"),
    bgColor: bgColor || t("PartnersFoodGrid.bgColor"),
    textColor: textColor || t("PartnersFoodGrid.textColor"),
    sectionID: sectionID || t("PartnersFoodGrid.sectionId"),
    columns: PropColumns
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PartnersFoodGrid;
