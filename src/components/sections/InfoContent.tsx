import React from "react";
import { t } from "../../context/countryContext";
import ContentRTL, { ContentProps } from "../ContentRTL";

const InfoContent = () => {
  const props: ContentProps = {
    content: t("InfoContent.contents", { returnObjects: true }),
  };
  return <ContentRTL {...props}></ContentRTL>;
};

export default InfoContent;
