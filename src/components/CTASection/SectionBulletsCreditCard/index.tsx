import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../../Image";

type IconType = {
  id: string;
  title: string;
  description: string;
  gatsbyImageData: any;
};

export type sectionBulletsCreditCardType = {
  percentOfCash?: string;
  icon?: string;
  text: string;
}

interface SectionBulletsCreditCardProps {
  bullets?: sectionBulletsCreditCardType[];
  textDir: string;
  margin: string;
  customBulletIcon?: boolean;
  icon?: IconProp;
}

const SectionBulletsCreditCard = ({
  bullets,
  textDir,
}: SectionBulletsCreditCardProps) => {
  return (
    <ul
      className={`mt-12 mb-6 list-none ${textDir} text-xl flex flex-col gap-3`}
    >
      {bullets?.map((item, index) => (
        <li key={index} className="flex">
          {item.text}
          {/* <Image imageData={item.icon?.gatsbyImageData} /> */}
        </li>
      ))}
    </ul>
  );
};

export default SectionBulletsCreditCard;

