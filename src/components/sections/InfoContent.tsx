import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ContentRTL, { ContentProps } from "../ContentRTL";

const InfoContent = () => {
  const { t } = useTranslation();
  const props: ContentProps = {
    content: t("InfoContent.contents", { returnObjects: true }),
  };
  return <ContentRTL {...props}></ContentRTL>;
};

export default InfoContent;
