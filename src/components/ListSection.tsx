import React from "react";
import ListItem from "./ListItem";

export interface ListSectionProps {
  title: string;
  desc?: string;
  items?: {
    text?: string;
    secondText?: string;
    link?: string;
    image?: any;
  }[];
  bgColor?: string;
  textColor?: string;
};

const ListSection = ({ title, desc, items, bgColor, textColor }: ListSectionProps) => {
  return (
    <section className={`text-${textColor} ${bgColor} py-12 text-center`}>
      <h2 className="text-3xl ">{title}</h2>
      <p>{desc}</p>
      <ul
        className={`flex list-none flex-wrap items-center justify-center p-2`}
      >
        {items && items.map((item, index) => {
          return <ListItem {...item} key={index}></ListItem>;
        })}
      </ul>
    </section>
  );
};

export default ListSection;
