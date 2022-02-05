import React from "react";
import ListItem from "./ListItem";

const ListSection = (props) => {
  const { title, desc, items, bgColor, textColor } = props;
  return (
    <section className={`text-${textColor} ${bgColor} py-12 text-center`}>
      <h2 className="text-3xl ">{title}</h2>
      <p>{desc}</p>
      <ul
        className={`flex list-none flex-wrap items-center justify-center p-2`}
      >
        {items.map((item, index) => {
          return <ListItem {...item} key={index}></ListItem>;
        })}
      </ul>
    </section>
  );
};

export default ListSection;
