import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import RichContent from "./RichContent";
import slugify from "react-slugify";

interface Accordion {
  title: string;
  content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  normalText?: string;
  bgColor: string;
  textColor: string;
  isClosed?: boolean;
}

const Accordion = ({
  title,
  content,
  bgColor,
  textColor,
  normalText,
  isClosed,
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
    <section id={slugify(title)} className="w-full">
      <div
        aria-hidden="true"
        className={`mt-6 flex w-full cursor-pointer items-center justify-between rounded  border-solid border-gray-light px-10 lg:px-20 ${
          isOpen ? "bg-white border-none" : bgColor
        }`}
        onClick={() => toggtle()}
      >
        <h3 className={`text-${textColor} text-md md:text-2xl`}>{title}</h3>
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
        {content && <RichContent richContent={content}></RichContent>}
        {normalText &&
          normalText.split("\n").map((str, index) => (
            <p className="mb-5 text-lg" key={index}>
              {str}
            </p>
          ))}
      </div>
    </section>
  );
};

export default Accordion;
