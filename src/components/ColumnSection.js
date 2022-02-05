import React from "react";
import Card from "./Card";

const ColumnsSection = (props) => {
  const { columns, bgColor, title, textColor } = props;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex flex-col flex-wrap justify-center">
        {title && <h2 className="text-center text-3xl">{title}</h2>}
        <div className={`mt-10 flex flex-wrap justify-around `}>
          {columns.map((col) => {
            return <Card {...col}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
