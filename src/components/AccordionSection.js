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
    isClosed,
    RTL,
    type,
  } = props;

  let dir = "ltr";
  let textDir = "text-left";

  if (RTL) {
    dir = "rtl";
    textDir = "text-right";
  }
  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-12`}
    >
      <div className="container mx-auto flex flex-col justify-center">
        {title && (
          <h2 className={`text-center text-3xl md:${textDir}`}>{title}</h2>
        )}
        {desc &&
          desc
            .split("\n")
            .map((str) => <p className={`text-center md:${textDir}`}>{str}</p>)}
        <div className={`flex flex-wrap justify-around `}>
          {items.map((item, index) => {
            return (
              <Accordion
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
                isClosed={isClosed}
                type={type}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
