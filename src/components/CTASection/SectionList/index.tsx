import React from "react";

interface SectionListProps {
  list:
    | {
        text: string;
        link: string;
      }[]
    | undefined;
}

const SectionList = ({ list }: SectionListProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 text-orange-primary mb-8">
      {list?.map((item, index) => (
        <a href={item.link} key={index}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default SectionList;
