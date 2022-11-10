import React from "react";
import CardNoLimit, { CardProps } from "./CardNoLimit";

export interface ColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
}

const ColumnsSection = ({
  columns,
  title,
  desc,
  bgColor,
  textColor,
  sectionID,
}: ColumnsSectionProps) => {
  return (
    <section id={sectionID} className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex flex-col flex-wrap justify-center">
        {title && title.split("\n").map((str) => <h2 className="text-center text-3xl">{str}</h2>)}
        {desc && desc.split("\n").map((str) => <p className="text-center">{str}</p>)}
        <div className={`mt-10 w-full flex justify-around flex-wrap md:flex-nowrap`}>
          {columns.map((col, index) => {
            return <CardNoLimit {...col} key={index} index={index}></CardNoLimit>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
