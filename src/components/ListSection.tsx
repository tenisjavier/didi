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
    contentful_id?: string;
  }[];
  bgColor?: string;
  textColor?: string;
  contentful_id?: string;
}

const ListSection = ({
  title,
  desc,
  items,
  bgColor,
  textColor,
  contentful_id,
}: ListSectionProps) => {
  return (
    <section
      className={`list-section id-${contentful_id} container text-${textColor} ${bgColor} py-12 text-left w-full mx-auto`}
    >
      <h2 className="text-3xl list-section-title">{title}</h2>
      <p className="list-section-desc">{desc}</p>
      <ul
        className={`list-item-container m-0 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 w-full mx-auto items-center justify-center`}
      >
        {items &&
          items.map((item, index) => {
            return <ListItem {...item} key={index}></ListItem>;
          })}
      </ul>
    </section>
  );
};

export default ListSection;
