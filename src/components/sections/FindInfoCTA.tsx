import React from "react";
import AccordionTableSection from "../AccordionTableSection";
import { t } from "../../context/countryContext";

interface TableProps {
  data: {
    title: string;
    content: string;
    table: {
      city: string;
      address: string;
    }[];
  }[];
}

const FindInfoCTA = ({ data }: TableProps) => {
  data = t("FindInfoCTA.items", { returnObjects: true });
  let items = data.map((con) => {
    return {
      title: con.title,
      content: con.content,
      table: con.table,
    };
  });

  const title = t("FindInfoCTA.title");
  const desc = t("FindInfoCTA.desc");

  return (
    <AccordionTableSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      desc={desc}
      items={items}
    ></AccordionTableSection>
  );
};

export default FindInfoCTA;
