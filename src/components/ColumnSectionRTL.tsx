import React from "react";
import Card, { CardProps } from "./CardRTL";

export interface ColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
}

const ColumnsSectionRTL = ({
  columns,
  title,
  desc,
  bgColor,
  textColor,
}: ColumnsSectionProps) => {
  return (
    <section className={`${bgColor} text-${textColor} py-12`} style={{direction: "rtl"}}>
      <div className="container mx-auto flex  flex-col flex-wrap justify-right">
        {title && <h2 className="text-right text-3xl">{title}</h2>}
        {desc && <p className="text-right">{desc}</p>}
        <div className={`mt-10 flex flex-wrap justify-around `}>
          {columns.map((col, index) => {
            return <Card {...col} key={index} index={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSectionRTL;
