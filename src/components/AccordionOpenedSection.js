import React from "react";
import AccordionOpened from "./AccordionOpened";

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
      <div className="container mx-auto flex flex-col justify-center">
        {title && (
          <h2 className="text-center text-3xl md:text-left">{title}</h2>
        )}
        {
          desc && desc.split("\n").map((str) => <p className="text-center md:text-left">{str}</p>)
        }
        <div className={`flex flex-wrap justify-around `}>
          {items.map((item, index) => {
            return (
              <AccordionOpened
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
              ></AccordionOpened>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
