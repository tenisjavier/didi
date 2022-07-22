import React from "react";

export interface ContactsInfo {
  label: string;
  info: string;
  infoColor?: {};
}

export interface ContactBlockProps {
  title: string;
  desc: string;
  contacts: ContactsInfo[];
}

const ContactBlock = (props: ContactBlockProps) => {
  const { title, desc, contacts } = props;

  return (
    <div>
      <div className="mb-4">
        <h3 className={`mb-4 text-xl font-bold `}>{title}</h3>
        <p className={"text-lg"}>{desc}</p>
        {contacts?.map((item, index) => {
          return (
            <p key={index}>
              {item.label}: <span style={item.infoColor}>{item.info}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ContactBlock;
