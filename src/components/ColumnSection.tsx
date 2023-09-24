import React from "react";
import Card, { CardProps } from "./Card";

export interface ColumnsSectionProps {
  columns: CardProps[];
  gridCols?: string;
  title?: string;
  desc?: string;
  small?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  width?: string;
  RTL?: boolean;
  hasGrid?: boolean;
}

const ColumnsSection = ({
  columns,
  gridCols,
  title,
  desc,
  small,
  bgColor,
  textColor,
  sectionID,
  RTL,
  hasGrid,
}: ColumnsSectionProps) => {
  let dir: any = "ltr";

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
              <h2 className="text-left lg:text-center text-4xl">{str}</h2>
            ))}
        {desc &&
          desc
            .split("\n")
            .map((str) => (
              <p className="text-left lg:text-center text-lg">{str}</p>
            ))}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            hasGrid ? "grid-cols-2 gap-10" : "lg:flex lg:flex-wrap gap-2"
          } mt-10  lg:justify-around `}
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
    </section>
  );
};

export default ColumnsSection;
