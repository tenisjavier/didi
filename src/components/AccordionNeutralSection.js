import React from "react";
import AccordionNeutral from "./AccordionNeutral";

const AccordionNeutralSection = (props) => {
  const {
    items,
    bgColor,
    bgAccordionColor,
    title,
    desc,
    textColor,
    textAccordionColor,
  } = props;
  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex flex-col justify-center">
        {title && (
          <h2 className="text-center text-3xl md:text-left">{title}</h2>
        )}
        <p className="text-center md:text-left">{desc}</p>
        <div className={`flex flex-wrap justify-around `}>
          {items.map((item, index) => {
            return (
              <AccordionNeutral
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
              ></AccordionNeutral>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionNeutralSection;
