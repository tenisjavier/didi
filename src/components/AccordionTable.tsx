import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

export interface TableCities {
  city: string;
  address: string;
}

export interface AccordionTable {
  title: string;
  content: string;
  bgColor: string;
  textColor: string;
  table: TableCities[];
}

const AccordionTable = ({
  title,
  content,
  bgColor,
  textColor,
  table,
}: AccordionTable) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const content1: any = useRef(null);

  const closeClass =
    "text-lg bg-gray-200 text-gray-primary py-0 w-full px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-primary w-full py-5 px-20 transition-all duration-700 text-lg overflow-hidden`;
  const toggtle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
  };
  return (
    <>
      <div
        aria-hidden="true"
        className={`mt-6 flex w-full cursor-pointer items-center justify-between rounded px-10 lg:px-20 ${
          isOpen ? "bg-white" : bgColor
        }`}
        onClick={() => toggtle()}
      >
        <h3 className={`text-${textColor} text-md md:text-2xl`}>{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faMinusSquare : faPlusSquare}
          className={`text-${textColor} text-xl`}
        />
      </div>
      <div
        className={`accordionTable ${isOpen ? openClass : closeClass}`}
        //dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxHeight: height }}
        ref={content1}
      >
        {content && content.split("\n").map((str) => <p>{str}</p>)}
        <table style={{ borderCollapse: "collapse" }}>
          {table?.map((tbl) => {
            return (
              <tr style={{ border: "1px solid #eee" }}>
                <td style={{ borderRight: "1px solid #eee" }} className="p-3">
                  {tbl.city}
                </td>
                <td className="p-3">
                  {tbl.address.split("\n").map((str, index) => (
                    <p className="mb-2" key={index}>
                      {str}
                    </p>
                  ))}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default AccordionTable;
