import React from "react";
import Image from "../components/Image";
import Btn from "./Btn";

interface GuideListProps {
  text?: string;
  secondText?: string;
  link?: string;
  image?: any;
}

const GuideListItem = ({ text, link, image }: GuideListProps) => {
  const item = link ? (
    <div className="items-center justify-between px-4">
      <Image imageData={image} imageStyle={"z-10 m-4 max-h-26"}></Image>
      <p className="mb-4 text-xl font-bold text-orange-primary">{text}</p>
      <Btn
        btnLink={link}
        btnMode={"primary"}
        btnText={"Conoce más"}
      ></Btn>
    </div>
  ) : (
    <p>{text}</p>
  );
  return <li className={`relative w-100`}>{item}</li>;
};

export default GuideListItem;
