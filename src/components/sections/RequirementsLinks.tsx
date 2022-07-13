// @desc Guides Grid used for navigation
import React from "react";
import { useLocation } from "@reach/router";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CircleLinks, { CircleLinksProps } from "../CircleLinks";

interface RequirementsLinksProps {
  requirements: {
    name: string;
    slug: string;
    image: {
      description: string;
      gatsbyImageData: IGatsbyImageData;
    };
  }[];
}

const RequirementsLinks = ({ requirements }: RequirementsLinksProps) => {
  const { t, i18n } = useTranslation();
  const countryCode = i18n.language;
  const { host, protocol } = useLocation();
  console.log(protocol);
  const items = requirements.map((req) => ({
    title: req.name,
    link: `${protocol}//${host}/${countryCode}/driver/requirements-${req.slug}/`,
    image: (
      <GatsbyImage
        image={req.image.gatsbyImageData}
        alt={req.image.description}
        className="h-32 w-32 rounded-full"
      ></GatsbyImage>
    ),
  }));

  const props: CircleLinksProps = {
    title: t("RequirementsLinks.title"),
    desc: t("RequirementsLinks.desc"),
    bgColor: t("RequirementsLinks.bgColor"),
    textColor: t("RequirementsLinks.textColor"),
    items: items,
  };

  return <CircleLinks {...props}></CircleLinks>;
};

export default RequirementsLinks;
