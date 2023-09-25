import React from "react";
import FooterItem, { iconsType } from "../FooterItem";


type FooterColumnItemType = {
  text?: string;
  link?: string;
  icon?: iconsType;
}

interface FooterColumnProps {
  items?: FooterColumnItemType[];
  title?: string;
  isColumn?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ items, title, isColumn = true }) => {
  return (
    <div className={`flex flex-col gap-3`}>
      <h3>{title}</h3>
      <div className={`flex ${isColumn ? 'flex-col' : 'flex-row'} gap-3`}>
        {items?.map((item, index) => (
          <FooterItem key={index} link={item?.link} icon={item?.icon} text={item?.text}></FooterItem>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn;