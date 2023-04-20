import React from "react";
import GuideListItem from "./GuideListItem";

export interface GuideListSectionProps {
  title: string;
  desc: string;
  items?: any[];
  bgColor: string;
  textColor : string;
}

const ListSection = ({ title, desc, items, bgColor, textColor }: GuideListSectionProps) => {
  return (
    <section className={`text-${textColor} ${bgColor} py-12 text-center`}>
      <h2 className="text-3xl ">{title}</h2>
      <p>{desc}</p>
      <ul
        className={`flex list-none flex-wrap items-center justify-center p-2`}
      >
        {items && items.map((item, index) => {
          return <GuideListItem {...item} key={index}></GuideListItem>;
        })}
      </ul>
    </section>
  );
};

export default ListSection;
