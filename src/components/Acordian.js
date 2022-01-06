import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
const Acordian = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const content1 = useRef(null);
  const closetitle =
    "flex h-20 bg-gray-300 items-center justify-between px-10 lg:px-20 cursor-pointer mt-6";
  const opentitle =
    "flex h-20 bg-white items-center justify-between px-10 lg:px-20 cursor-pointer mt-6";
  const closeClass =
    "text-lg bg-gray-200 text-gray-800 py-0 px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-800 py-5 px-20 transition-all duration-700 text-lg overflow-hidden`;
  const toggtle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
    console.log(content1.current.scrollHeight);
  };
  return (
    <div>
      <div
        aria-hidden="true"
        className={isOpen ? opentitle : closetitle}
        onClick={() => toggtle()}
      >
        <h2 className="text-orange-primary text-2xl">{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faMinusSquare : faPlusSquare}
          className="text-orange-primary text-2xl"
        />
      </div>
      <div
        className={isOpen ? openClass : closeClass}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxHeight: height }}
        ref={content1}
      ></div>
    </div>
  );
};

export default Acordian;
