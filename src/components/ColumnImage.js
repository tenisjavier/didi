import React from "react";
import Card from "./Card";

const ColumnImage = (props) => {
  const { columns, bgColor, title, desc, textColor, image, reverse } = props;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex w-full  flex-col justify-center">
        {title && <h2 className="text-center text-3xl">{title}</h2>}
        {desc && <p className="text-center">{desc}</p>}
        <div
          className={`flex w-full ${
            reverse && "flex-row-reverse"
          } flex-wrap justify-center`}
        >
          <div
            className={`mt-10 flex flex-wrap md:grid md:grid-cols-2 justify-around lg:w-3/5 min-w-sm`}
          >
            {columns.map((col, index) => {
              return <Card {...col} key={index}></Card>;
            })}
          </div>
          <div className="max-w-xs">{image}</div>
        </div>
      </div>
    </section>
  );
};

export default ColumnImage;
