import React, { ReactNode } from "react";

export interface ContactColumnPart {
    contacts: [];
}

const ContactColumnPart = (props: ContactColumnPart) => {
  const {contacts} = props;
  return (
    <section className={"py-12"}>
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between py-8">
        {contacts.map((item, index) => {
            return <div className="lg:w-1/3 border-solid border-b-2 border-gray-primary border-x-0 border-t-0 m-1">
                    <p className="text-gray-primary text-2xl mb-1">{item['title']}</p>
                    <p className="text-gray-primary mt-1">{item['desc']}</p>
                    </div>;
        })}
      </div>
    </section>
  );
};

export default ContactColumnPart;
