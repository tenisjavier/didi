import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
import { CardProps } from "../Card";

const LeonesVideoGrid = () => {
  const columns: object[] = t("DrvVideoGrid.columns", { returnObjects: true });
  const videosColumns = columns.map((col: any): CardProps => {
    return {
      title: col.title,
      desc: col.desc,
      bgColor: col.bgColor,
      textColor: "gray",
      image: (
        <iframe
          className="h-56 w-full"
          src={col.videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    };
  });
  const props: ColumnsSectionProps = {
    bgColor: t("DrvVideoGrid.bgColor"),
    title: t("DrvVideoGrid.title"),
    textColor: t("DrvVideoGrid.textColor"),
    columns: videosColumns,
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LeonesVideoGrid;
