import React from "react";
import Card, { CardProps } from "./Card";
import Btn, { BtnProps } from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock
} from "@fortawesome/free-solid-svg-icons";

export interface TopStoryProps extends BtnProps {
  columns: CardProps[];
  title?: string;
  desc?: string;
  small?: string;
  bgColor: string;
  textColor: string;
  sectionID?: string;
  width?: string;
  timeToRead?: string;
}

const TopStory = ({
  columns,
  title,
  desc,
  small,
  bgColor,
  textColor,
  sectionID,
  timeToRead
}: TopStoryProps) => {
  let min = "min";
  if(Number(columns[0].timeToRead) > 1) {
    min = "mins";
  }
  return (
    <>
      <section
        className={`relative flex min-h-[20rem] w-full pt-16 items-center justify-center overflow-hidden md:pt-0 xl:pt-16
      ${bgColor && bgColor}`}
      >
        <div className={`container mx-auto flex w-full flex-wrap items-center justify-center py-5 xl:justify-start bg-gray-200`}>
          {columns[0].image}

          <div className={`w-11/12 text-center lg:w-1/4 text-${textColor} z-10 xl:text-left`}>
              <p className="text-5xl font-bold md:text-4xl text-orange-400">Top Stories</p>
              <h2 className="text-3xl font-bold md:text-3xl">{columns[0].title}</h2>
            {columns[0].desc &&
              columns[0].desc.split("\n").map((str, index) => (
                <p className="mb-5 text-base" key={index}>
                  {str}
                </p>
              ))}
              <p><FontAwesomeIcon icon={faClock} className="w-3" /> <span>{columns[0].timeToRead} {min}</span></p>
              <Btn
                btnType={columns[0].btnType}
                btnLink={columns[0].btnLink}
                btnMode={columns[0].btnMode}
                btnText={columns[0].btnText}
              ></Btn> 
          </div>
        </div>
      </section>
      <section
          className={`relative flex min-h-[20rem] w-full  items-center justify-center overflow-hidden
        ${bgColor && bgColor}`}
        >
        <div className={`container mx-auto flex w-full flex-wrap items-center justify-center py-1 xl:justify-center`}>
          <div className={`mt-10 flex flex-wrap justify-around`}>
            {columns.map((col, index) => {
              if(index > 0 && index <= 3) {
                return <Card {...col} key={index} index={index}></Card>;
              }
            })}
          </div>
        </div>
        {small && small.split("\n").map((str) => <small className="text-center">{str}</small>)}
      </section>
    </>
  );
};

export default TopStory;
