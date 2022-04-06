import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const DrvVideoGrid = () => {
  const { t } = useTranslation();
  const columns = t("DrvVideoGrid.columns", { returnObjects: true });
  const videosColumns = columns.map((col) => {
    return {
      title: col.title,
      bgColor: col.bgColor,
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
  const props = {
    bgColor: t("DrvVideoGrid.bgColor"),
    title: t("DrvVideoGrid.title"),
    textColor: t("DrvVideoGrid.textColor"),
    columns: videosColumns,
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DrvVideoGrid;
