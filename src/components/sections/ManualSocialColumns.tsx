import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface ManualSocialColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const ManualSocialColumns = ({images}: ManualSocialColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("ManualSocialColumns.bgColor"),
    textColor: t("ManualSocialColumns.textColor"),
    columns: t("ManualSocialColumns.columns", { returnObjects: true }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-full"
        ></GatsbyImage>
      );
    });
  }

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ManualSocialColumns;
