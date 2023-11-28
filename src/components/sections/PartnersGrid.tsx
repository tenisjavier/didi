import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface PartnersGridProps {
  data: {
    name: string;
    desc: string;
    category: string;
    logo: {
      title: string;
      description: string;
      gatsbyImageData: any;
    };
    slug: string;
  }[];
  title: string;
  bgColor: string;
  textColor: string;
  sectionID: string;
}

const PartnersGrid = ({
  data,
  title,
  bgColor,
  textColor,
  sectionID,
}: PartnersGridProps) => {
  const PropColumns = data.map((partner) => {
    const image = partner.logo;

    let link = t("PartnersGrid.linkItem", {
      partnerName: partner.slug,
    });

    if (partner?.category?.includes("creditCard")) {
      link = t("PartnersGrid.linkItem2", {
        partnerName: partner.slug,
      });
    }


    return {
      title: <Link to={link}>{partner.name}</Link>,
      desc: partner.desc,
      height: "48",
      image: (
        <Link to={link}>
          {image && <Image imageData={image} imageStyle="z-10 m-4 max-h-40"></Image>}
        </Link>
      ),
      bgColor: "white",
      textColor: "gray-primary",
    };
  });

  const props: ColumnsSectionProps = {
    title: title || t("PartnersGrid.title"),
    bgColor: bgColor || t("Partners.bgColor"),
    textColor: textColor || t("PartnersGrid.textColor"),
    sectionID: sectionID || t("PartnersGrid.sectionId"),
    columns: PropColumns,
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PartnersGrid;
