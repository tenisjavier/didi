// @desc Guides Grid used for navigation
import React from "react";
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
  const { t } = useTranslation();

  const items = requirements.map((req) => {
    const link = t("RequirementsLinks.linkItem", {
      requirement: req.slug,
    });
    return {
      title: req.name,
      link: link,
      image: (
        <GatsbyImage
          image={req.image.gatsbyImageData}
          alt={req.image.description}
          className="h-36 w-36 rounded-full"
        ></GatsbyImage>
      ),
    };
  });

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
