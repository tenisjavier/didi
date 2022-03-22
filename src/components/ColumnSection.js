import React from "react";
import Card from "./Card";

const ColumnsSection = (props) => {
  const { columns, bgColor, title, desc, textColor } = props;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex  flex-col flex-wrap justify-center">
        {title && <h2 className="text-center text-3xl">{title}</h2>}
        {desc && <p className="text-center">{desc}</p>}
        <div className={`mt-10 flex flex-wrap justify-around `}>
          {columns.map((col, index) => {
            return <Card {...col} key={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
