import React from "react";
import Btn from "../../../../Btn";
import { t } from "../../../../../context/countryContext";
import { ColumnsSectionProps } from "../../../../ColumnSection";

interface MidiaKitColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const MidiaKitColumns = ({ images }: MidiaKitColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("MidiaKitColumns.bgColor"),
    textColor: t("MidiaKitColumns.textColor"),
    columns: t("MidiaKitColumns.columns", { returnObjects: true }),
  };

  return (
    <div className={`${props.bgColor} text-${props.textColor} py-12 h-full`}>
      <div
        className={`container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full gap-0.5`}
      >
        {props?.columns?.map((col, index) => {
          const hasBorder = (index + 1) % 3 === 2;

          return (
            <div
              key={index}
              className={`text-center grid grid-cols-1 ${
                hasBorder && "lg:border-x-2 lg:border-y-0 lg:border-dotted"
              } lg:px-6 lg:py-8 lg:my-3 px-4 py-6 h-full gap-4 lg:gap-0 items-center`}
            >
              <h4 className="text-start col-span-1 p-0 m-0 my-4 lg:text-xl text-lg font-extrabold lg:h-12 md:h-4 h-auto">
                {col.title}
              </h4>
              <p className="font-semibold text-start lg:h-28 md:h-20 h-auto">
                {col.desc}
              </p>
              <Btn
                btnType={col.btnType}
                btnLink={col.btnLink}
                btnMode={col.btnMode}
                btnText={col.btnText}
                notRedirectOutPage
                download
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MidiaKitColumns;
