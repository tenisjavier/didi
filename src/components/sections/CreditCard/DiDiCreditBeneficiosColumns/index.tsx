import React from "react";
import { t } from "../../../../context/countryContext";
import ColumnsSection, {ColumnsSectionProps} from "../../../ColumnSection";
import { ImageDataType } from "../../../Image";

interface DiDiCreditBeneficiosColumnsProps {
  imagesdata: ImageDataType[]
}

const DiDiCreditBeneficiosColumns = ({ imagesdata }: DiDiCreditBeneficiosColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t('DiDiCreditBeneficiosColumns.title'),
    bgColor: "",
    textColor: "",
    hasTextHighlight: true,
    gridConfig: "flex flex-wrap justify-center gap-4",
    columns: t('DiDiCreditBeneficiosColumns.columns', {returnObjects: true}),
    desc: t('DiDiCreditBeneficiosColumns.desc'),
  };

  console.log(imagesdata)
  props.columns.forEach((col) => {
    col.hasTextHighlighter = true;
    col.hasTextHighlighterDesc = true;
    col.hasTextHighlighterDescStyle = "font-bold"
    col.isImage = true;
    col.imageStyle = "z-10 m-4 w-36";
    col.titleStyles = "h-16";
    col.image = imagesdata.find((image) => col.imageName ? image.title.includes(col.imageName) : 'image');
  })
  
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditBeneficiosColumns;