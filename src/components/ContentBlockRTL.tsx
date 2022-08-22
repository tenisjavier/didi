import React from "react";

export interface InfoContent {
  label: string;
  info: string;
  infoColor?: {};
}

export interface ContentBlockProps {
  title: string;
  desc: string;
  contacts: InfoContent[];
}

const ContentBlock = (props: ContentBlockProps) => {
  const { title, desc, contacts } = props;

  return (
    <div style={{direction: 'rtl'}}>
      <div className="mb-4">
        <h3 className={`mb-4 text-xl font-bold `} style={{color: "#ff6600"}}>{title}</h3>
        <p className={"text-lg"}>{desc}</p>
        {contacts?.map((item, index) => {
          return (
            <p key={index} className="text-right">
              {item.label}: <span style={item.infoColor}>{item.info}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBlock;
