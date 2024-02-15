import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBusinessHero from "../../../../components/sections/FoodBusinessHero";
import FoodBusinessFollowingStepsCTA from "../../../../components/sections/FoodBusinessFollowingStepsCTA";
import FoodBusinessBenefitsColumns from "../../../../components/sections/FoodBusinessBenefitsColumns";
import FoodCityList from "../../../../components/sections/FoodCityList";
import RestaurantSocialColumns from "../../../../components/sections/RestaurantSocialColumns";
import FoodBusinessRequirementsColumns from "../../../../components/sections/FoodBusinessRequirementsColumns";
import FoodBusinessFaqs from "../../../../components/sections/FoodBusinessFAQ";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodBusinessHero.bgImage";
  })[0];
  const foodHeroBgMobileImage = images.filter((image) => {
    return image.title === "co.FoodBusinessHeroMobile.bgImage";
  })[0];

  const faqRestaurantApp = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Restaurant APP"
  );

  const foodFollowingStepsImage = images.filter((image) => {
    return image.title === "co.followingSteps.image";
  })[0];

  const foodBusinessRequirementsColumnsImages = images.filter((image) => {
    return (
      image.title === "restaurant-icon" ||
      image.title === "id-card-icon-orange" ||
      image.title === "check-list-icon" ||
      image.title === "menu-food-phone-icon"
    );
  });

  const foodBusinessBenefitsColumnsImages = images.filter((image) => {
    return (
      image.title === "graph-icon" ||
      image.title === "money-card-icon" ||
      image.title === "funny-icon" ||
      image.title === "delivery-icon" ||
      image.title === "wifi-icon"
    );
  });

  const socialImages = images.filter((image) => {
    return image.title.indexOf("co.DiDiRestaurantSocial.image") !== -1;
  });

  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <FoodBusinessHero
        bgImage={foodHeroBgImage}
        mobileBgImage={foodHeroBgMobileImage}
      ></FoodBusinessHero>
      <FoodBusinessBenefitsColumns
        images={foodBusinessBenefitsColumnsImages}
      ></FoodBusinessBenefitsColumns>
      <FoodBusinessFollowingStepsCTA
        image={foodFollowingStepsImage}
      ></FoodBusinessFollowingStepsCTA>
      <FoodBusinessRequirementsColumns
        images={foodBusinessRequirementsColumnsImages}
      ></FoodBusinessRequirementsColumns>
      <FoodBusinessFaqs
        title={`Preguntas Frecuentes`}
        desc=" "
        data={faqRestaurantApp[0]}
      ></FoodBusinessFaqs>
      <FoodCityList data={cities}></FoodCityList>
      <RestaurantSocialColumns
        images={socialImages.reverse()}
      ></RestaurantSocialColumns>
    </Layout>
  );
};

export default FoodBusiness;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(restaurant-icon)|(id-card-icon-orange)|(check-list-icon)|(menu-food-phone-icon)|(co.followingSteps.image)|(graph-icon)|(money-card-icon)|(funny-icon)|(delivery-icon)|(wifi-icon)|(co.FoodBusinessHero.bgImage)|(co.FoodBusinessHeroMobile.bgImage)|(co.FoodBusinessColumns.image)|(co.DiDiRestaurantSocial.image)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }

    allContentfulCity(
      filter: {
        country: { code: { eq: "co" } }
        product: { elemMatch: { category: { eq: "food" } } }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
        restaurant {
          name
        }
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "co" } } }
        category: { eq: "food" }
        name: { eq: "DiDi Restaurant APP" }
      }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
