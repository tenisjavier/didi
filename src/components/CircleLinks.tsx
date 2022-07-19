import React from "react";
import { Link } from "gatsby";

export interface CircleLinksProps {
  title: string;
  desc?: string;
  textColor?: string;
  bgColor?: string;
  items: {
    image?: React.ReactNode;
    title: string;
    link: string;
  }[];
}

const CircleLinks = ({
  title,
  desc,
  textColor,
  bgColor,
  items,
}: CircleLinksProps) => {
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="text-center">
        <h2 className="text-3xl">{title}</h2>
        <p className="mb-5 text-lg">{desc}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="mx-10 mt-4 flex flex-col items-center justify-center
          "
          >
            <span className="p-4">
              <Link to={item.link}>{item.image}</Link>
            </span>
            <span className="p-4 text-xl">
              <Link to={item.link}>{item.title}</Link>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CircleLinks;
