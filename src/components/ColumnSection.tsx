import React from "react";
import Card, { CardProps } from "./Card";

export interface ColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  width?: string;
}

const ColumnsSection = ({
  columns,
  title,
  desc,
  bgColor,
  textColor,
  sectionID
}: ColumnsSectionProps) => {
  return (
    <section id={sectionID} className={`${bgColor} text-${textColor} py-12`}>

      <div className="container mx-auto flex flex-col flex-wrap justify-center md:justify-around">
        {title && title.split("\n").map((str) => <h2 className="text-center text-3xl">{str}</h2>)}
        {desc && desc.split("\n").map((str) => <p className="text-center">{str}</p>)}

        <div className={`mt-10 flex flex-wrap justify-around`}>
          {columns.map((col, index) => {
            return <Card {...col} key={index} index={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
