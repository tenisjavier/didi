import React from "react";
import Accordion from "./Accordion";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface AccordionSectionProps {
  items: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    normalText?: string;
    bgColor?: string;
    textColor?: string;
    isClosed?: boolean;
    type?: string;
    contentful_id?: string;
  }[];
  bgColor: string;
  bgAccordionColor: string;
  title: string;
  desc?: string;
  textColor: string;
  textAccordionColor: string;
  isClosed?: boolean;
  RTL?: boolean;
  type?: string;
  contentful_id?: string;
}

const AccordionSection = ({
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
  contentful_id,
}: AccordionSectionProps) => {
  let dir: any = "ltr";
  let textDir = "text-left";

  if (RTL) {
    dir = "rtl";
    textDir = "text-right";
  }
  const directionStyle: React.CSSProperties = {
    direction: dir,
  };
  return (
    <section
      style={directionStyle}
      className={`id-${contentful_id} accordion-section ${bgColor} text-${textColor} py-12`}
    >
      <div className="container mx-auto flex flex-col justify-center">
        {title && (
          <h2 className={`accordion-section-title text-4xl md:${textDir} text-left`}>{title}</h2>
        )}
        {desc &&
          desc
            .split("\n")
            .map((str) => <p className={`accordion-section-desc text-center md:${textDir}`}>{str}</p>)}
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
