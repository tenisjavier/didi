import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import RestaurantHeroKitDigital from "../../../../../components/sections/RestaurantHeroKitDigital";
import ManualSocialColumns from "../../../../../components/sections/ManualSocialColumns";
import TemplatePostSocialCTA from "../../../../../components/sections/TemplatePostSocialCTA";
import TemplateStorieSocialCTA from "../../../../../components/sections/TemplateStorieSocialCTA";
import TemplatePostColumns from "../../../../../components/sections/TemplatePostColumns";
import TemplateStorieColumns from "../../../../../components/sections/TemplateStorieColumns";
import TemplateColumns from "../../../../../components/sections/TemplateColumns";

const Restaurant = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroKitDigital.bgImage";
  })[0];
  const RestaurantTemplateImage = images.filter((image) => {
    return image.title === "mx.DiDiRestaurantTemplatePostCTA.image";
  })[0];
  const manualSocialColumnImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantManualSocial.image") !== -1;
  });
  const templateColumnImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantTemplateColumns.image") !== -1;
  });

  return (
    <Layout>
      <RestaurantHeroKitDigital
        bgImage={RestaurantHeroBgImage}
      ></RestaurantHeroKitDigital>
      <ManualSocialColumns
        images={manualSocialColumnImages}
      ></ManualSocialColumns>
      <TemplatePostSocialCTA
        image={RestaurantTemplateImage}
      ></TemplatePostSocialCTA>
      <TemplatePostColumns></TemplatePostColumns>
      <TemplateStorieSocialCTA
        image={RestaurantTemplateImage}
      ></TemplateStorieSocialCTA>
      <TemplateStorieColumns></TemplateStorieColumns>
      <TemplateColumns images={templateColumnImages}></TemplateColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.RestaurantHeroKitDigital.bgImage)|(mx.DiDiRestaurantManualSocial.image)|(mx.DiDiRestaurantTemplatePostCTA.image)|(mx.DiDiRestaurantTemplateColumns.image)/"
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;

export default Restaurant;
