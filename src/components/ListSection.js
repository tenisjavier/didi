import React from "react";
import ListItem from "./ListItem";

const ListSection = (props) => {
  const { title, desc, items, bgColor, textColor } = props;
  return (
    <section className={`text-${textColor} ${bgColor} text-center py-12`}>
      <h2 className="text-3xl ">{title}</h2>
      <p>{desc}</p>
      <ul className="list-none columns-2 md:columns-3 lg:columns-4">
        {items.map((item, index) => {
          return <ListItem {...item} key={index}></ListItem>;
        })}
      </ul>
    </section>
  );
};

export default ListSection;
