import React, { ReactNode } from "react";
import ContactCard, { ContactBlockProps, ContactsInfo } from "./ContactBlock";

export interface ContactProps {
  contact: ContactBlockProps[];
}

const ContactSection = ({ contact }: ContactProps) => {
  console.log(contact);
  return (
    <section className={"py-12"}>
      <div className="container mx-auto flex  flex-col flex-wrap justify-center">
        {contact.map((item, index) => {
          return <ContactCard {...item} key={index}></ContactCard>;
        })}
      </div>
    </section>
  );
};

export default ContactSection;
