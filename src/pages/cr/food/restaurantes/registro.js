import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import RestaurantHeroRegistro from "../../../../components/sections/RestaurantHeroRegistro";
import RestaurantBenefitsColumns from "../../../../components/sections/RestaurantBenefitsColumns";
import RestaurantBenefitsUnirColumns from "../../../../components/sections/RestaurantBenefitsUnirColumns";
import RestaurantBenefitsBanner from "../../../../components/sections/RestaurantBenefitsBanner";

const Restaurant = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroRegistro.bgImage";
  })[0];
  const BenefitsColumnImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantBenefitsColumn.image") !== -1;
  });

  return (
    <Layout>
      <RestaurantHeroRegistro
        bgImage={RestaurantHeroBgImage}
      ></RestaurantHeroRegistro>
      <RestaurantBenefitsColumns></RestaurantBenefitsColumns>
      <RestaurantBenefitsUnirColumns
        images={BenefitsColumnImages}
      ></RestaurantBenefitsUnirColumns>
      <RestaurantBenefitsBanner></RestaurantBenefitsBanner>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.RestaurantHeroRegistro.bgImage)|(mx.DiDiRestaurantBenefitsColumn.image)/"
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
