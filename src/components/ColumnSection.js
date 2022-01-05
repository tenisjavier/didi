import React from "react";
import Card from "./Card";

const ColumnsSection = (props) => {
  const { columns, bgColor, title, textColor } = props;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="flex flex-col justify-center flex-wrap container mx-auto">
        {title && <h2 className="text-3xl">{title}</h2>}
        <div className={`flex justify-around flex-wrap `}>
          {columns.map((col) => {
            return <Card {...col}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
