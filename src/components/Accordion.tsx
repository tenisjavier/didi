import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import RichContent from "./RichContent";
import slugify from "react-slugify";
import ConditionalWrapper from "./ConditionalWrapper";

interface Accordion {
  title: string;
  content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  normalText?: string;
  bgColor?: string;
  textColor?: string;
  isClosed?: boolean;
  type?: string;
  contentful_id?: string;
}

const Accordion = ({
  title,
  content,
  bgColor,
  textColor,
  normalText,
  isClosed,
  type,
  contentful_id
}: Accordion) => {
  var [isOpen, setIsOpen] = useState(false);
  var [height, setHeight] = useState("0px");
  const content1: any = useRef(null);

  if (isClosed === false) {
    [isOpen, setIsOpen] = useState(true);
    [height, setHeight] = useState("50");
  }

  const closeClass =
    "text-lg bg-gray-200 text-gray-primary py-0 w-full px-4 md:px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-primary w-full py-5 px-4 md:px-20 transition-all duration-700 text-lg overflow-hidden border-none`;
  const toggtle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
  };
  return (
    <section id={slugify(title)} className={`accordion-item id-${contentful_id} accordion w-full`}>
      <ConditionalWrapper
        condition={type === "faq"}
        wrapper={(children) => (
          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {children}
          </div>
        )}
      >
        <>
          <div
            aria-hidden="true"
            className={`accordion-item-container mt-6 flex w-full cursor-pointer items-center justify-between rounded  border-solid border-gray-light px-10 lg:px-20 ${isOpen ? "bg-white border-none" : bgColor
              }`}
            onClick={() => toggtle()}
          >
            <h3
              className={`accordion-item-title text-${textColor} text-md md:text-2xl`}
              itemProp="name"
            >
              {title}
            </h3>
            <FontAwesomeIcon
              icon={isOpen ? faMinusCircle : faPlusCircle}
              className={`text-${textColor} text-xl w-6`}
            />
          </div>
          <div
            className={`accordion ${isOpen ? openClass : closeClass}`}
            style={{ maxHeight: height }}
            ref={content1}
          >
            <ConditionalWrapper
              condition={type === "faq"}
              wrapper={(children) => (
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="accordion-faq text">{children}</div>
                </div>
              )}
            >
              <>
                <div className="accordion-rich-content">
                  {content && <RichContent richContent={content}></RichContent>}
                </div>
                {normalText &&
                  normalText.split("\n").map((str, index) => (
                    <p className="accordion-item-str mb-5 text-lg" key={index}>
                      {str}
                    </p>
                  ))}
              </>
            </ConditionalWrapper>
          </div>
        </>
      </ConditionalWrapper>
    </section>
  );
};

export default Accordion;
