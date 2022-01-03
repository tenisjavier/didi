import React from "react";
import Card from "./Card";

const ColumnsSection = (props) => {
  const { columns, bgColor } = props;
  return (
    <section className={`flex justify-around flex-wrap ${bgColor} p-24`}>
      {columns.map((col) => {
        return <Card {...col}></Card>;
      })}
    </section>
  );
};

export default ColumnsSection;
