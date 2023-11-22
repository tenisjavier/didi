import React from "react";
import { t } from "../../../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../../../ColumnSection";
import Image, { ImageDataType } from "../../../Image";
import { Link } from "gatsby";

interface DiDiCreditBeneficiosColumnsProps {
  imagesdata: ImageDataType[]
}

const DiDiCreditBeneficiosColumns = ({ imagesdata }: DiDiCreditBeneficiosColumnsProps) => {

  const partners = t('DiDiCreditBeneficiosColumns.columns', { returnObjects: true });

  const PropColumns = partners.map((partner: any) => {

    const image = imagesdata.find((image) => partner.imageName ? image.title.includes(partner.imageName) : 'image');

    return {
      title: <Link to={partner.linkItem}>{partner.title}</Link>,
      desc: partner.desc,
      height: "48",
      bgColor: "white",
      textColor: "gray-primary",
      hasTextHighlighterDesc: true,
      hasTextHighlighterDescStyle: "font-bold",
      imageStyle: "z-10 m-4 w-36",
      titleStyles: "h-16",
      image: (
        <Link to={partner?.linkItem}>
          {image && <Image imageData={image} imageStyle="z-10 m-4 max-h-40"></Image>}
        </Link>
      ),
    };
  });


  const props: ColumnsSectionProps = {
    title: t('DiDiCreditBeneficiosColumns.title'),
    bgColor: "",
    textColor: "",
    hasTextHighlight: true,
    gridConfig: "flex flex-wrap justify-center gap-4",
    columns: PropColumns,
    desc: t('DiDiCreditBeneficiosColumns.desc'),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditBeneficiosColumns;