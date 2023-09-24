import React from "react";
import Card from "./Card";

interface ColumnImageProps {
  columns: any[];
  bgColor?: string;
  title: string;
  desc?: string;
  textColor?: string;
  image?: any;
  imageAlignment?: string;
}

const ColumnImage = ({
  columns,
  bgColor,
  title,
  desc,
  textColor,
  image,
  imageAlignment,
}: ColumnImageProps) => {
  let indexImage = 2;
  if (imageAlignment === "left") indexImage = 0;
  if (imageAlignment === "center") indexImage = 1;
  if (imageAlignment === "right") indexImage = 2;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex w-full  flex-col justify-center">
        {title && <h2 className="text-3xl lg:text-4xl text-left">{title}</h2>}
        {desc && <p className="text-center">{desc}</p>}

        <div
          className={`mt-10 grid-cols-1 gap-2 md:grid md:grid-cols-3 align-center justify-center `}
        >
          {columns.map((col, index) => {
            if (index === 0)
              return (
                <>
                  <div className=" row-span-2 text-center mb-20 block lg:hidden">
                    {image}
                  </div>
                  <Card {...col} key={index}></Card>
                </>
              );
            if (index === indexImage)
              return (
                <>
                  <div className=" row-span-2 text-center mb-20 hidden lg:block">
                    {image}
                  </div>
                  <Card {...col} key={index}></Card>
                </>
              );
            return <Card {...col} key={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnImage;
