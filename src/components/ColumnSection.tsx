import React from "react";
import Card, { CardProps } from "./Card";
import textHighlighter from "../util/textHighlighter";
import Btn, { BtnMode, BtnType } from "./Btn";

export interface ColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  small?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  width?: string;
  RTL?: boolean;
  hasGrid?: boolean;
  hasTextHighlight?: boolean;
  textHighlightStyles?: string;
  gridCols?: string;
  gridConfig?: string;
  btnMode?: BtnMode;
  btnType?: BtnType;
  btnLink?: string | undefined;
  btnText?: string | undefined;
}

const ColumnsSection = ({
  columns,
  title,
  desc,
  small,
  bgColor,
  textColor,
  sectionID,
  RTL,
  hasGrid,
  hasTextHighlight,
  textHighlightStyles,
  gridConfig,
  btnMode,
  btnType,
  btnLink,
  btnText,
}: ColumnsSectionProps) => {
  let dir: any = "ltr";

  const grid = gridConfig || `grid grid-cols-1 md:grid-cols-2 ${hasGrid ? "lg:grid-cols-2 gap-10" : "lg:flex lg:flex-wrap gap-2"}`

  if (RTL) {
    dir = "rtl";
  }

  return (
    <section
      style={{ direction: dir }}
      id={sectionID}
      className={`${bgColor} text-${textColor} py-12`}
    >
      <div className="container mx-auto flex flex-col flex-wrap justify-center md:justify-around">
        {title &&
          title
            .split("\n")
            .map((str) => (
              <h2 className="text-left lg:text-center text-4xl">{hasTextHighlight ? textHighlighter(str, textHighlightStyles) : str}</h2>
            ))}
        {desc &&
          desc
            .split("\n")
            .map((str) => (
              <p className="text-left lg:text-center text-lg">{str}</p>
            ))}

        <div
          className={`${gridConfig || grid} mt-10  lg:justify-around `}
        >

          {columns &&
            columns.map((col, index) => {
              return <Card {...col} key={index}></Card>;
            })}
        </div>
        {small &&
          small
            .split("\n")
            .map((str) => <small className="text-center">{str}</small>)}
      </div>
      <span
        className={`flex justify-center ${btnText != "VideoSection.btnText" ? "" : "hidden"
          }`}
      >
        <Btn
          btnType={btnType}
          btnLink={btnLink}
          btnMode={btnMode}
          btnText={btnText}
        ></Btn>
      </span>
    </section>
  );
};

export default ColumnsSection;
