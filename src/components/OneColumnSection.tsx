import React from "react";
import LargeCard, { CardProps } from "./LargeCard";

export interface OneColumnsSectionProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  width?: string;
}

const OneColumnsSection = ({
  columns,
  title,
  desc,
  bgColor,
  textColor,
  sectionID
}: OneColumnsSectionProps) => {
  return (
    <section id={sectionID} className={`${bgColor} text-${textColor} py-12`}>

      <div className="container mx-auto flex flex-col flex-wrap justify-center md:justify-around">
        {title && title.split("\n").map((str) => <h2 className="text-center text-3xl">{str}</h2>)}
        {desc && desc.split("\n").map((str) => <p className="text-center">{str}</p>)}

        <div className={`mt-10 mx-auto flex flex-col`}>
          {columns.map((col, index) => {
            return <LargeCard {...col} key={index} index={index}></LargeCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default OneColumnsSection;
