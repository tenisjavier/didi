import React from "react";
import Accordion from "./Accordion";

const AccordionSection = (props) => {
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
      <div className="flex flex-col justify-center container mx-auto">
        {title && (
          <h2 className="text-3xl text-center md:text-left">{title}</h2>
        )}
        <p className="text-center md:text-left">{desc}</p>
        <div className={`flex justify-around flex-wrap `}>
          {items.map((item, index) => {
            return (
              <Accordion
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
