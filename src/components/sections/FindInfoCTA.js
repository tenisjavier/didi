import React from "react";
import AccordionTableSection from "../AccordionTableSection";
import { useTranslation } from "gatsby-plugin-react-i18next";

const FindInfoCTA = () => {
  const { t } = useTranslation();
  const data = t("FindInfoCTA.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      content: con.content,
      table: con.table
    });
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
