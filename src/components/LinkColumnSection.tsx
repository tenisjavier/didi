import React from "react";
import { Link } from "gatsby";
import Card, { CardProps } from "./Card";

export interface ColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  categoriesID: any[];
}

const ColumnsSection = ({
  columns,
  title,
  desc,
  bgColor,
  textColor,
  sectionID,
  categoriesID
}: ColumnsSectionProps) => {
  return (
    <section id={sectionID} className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex  flex-col flex-wrap justify-center">
        {title && <h2 className="text-center text-3xl">{title}</h2>}
        {desc && <p className="text-center">{desc}</p>}
        <div className={`mt-10 flex flex-wrap justify-around `}>
          {columns.map((col, index) => {
            return <Link to={"#"+categoriesID[index]}><Card {...col} key={index} index={index}></Card></Link>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
