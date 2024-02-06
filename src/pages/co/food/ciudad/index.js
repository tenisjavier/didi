import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodHero from "../../../../components/sections/FoodHero";
import FoodCityList from "../../../../components/sections/FoodCityList";
import FoodBusinessCTA from "../../../../components/sections/FoodBusinessCTA";
import FoodDeliveryCTA from "../../../../components/sections/FoodDeliveryCTA";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";
import FoodAppDownloads from "../../../../components/sections/FoodAppDownloads";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodHero.bgImage";
  })[0];
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "co.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "co.FoodDeliveryCTA.image";
  })[0];
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("co.FoodBusinessDownloads.image") !== -1;
  });
  const cities = data.allContentfulCity.nodes;

  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("co.FoodDeliveryDownloads.image") !== -1;
  });

  return (
    <Layout>
      <FoodHero bgImage={drvHeroBgImage}></FoodHero>
      <FoodCityList data={cities}></FoodCityList>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(co.FoodHero.bgImage)|(co.FoodBusinessCTA.image)|(co.FoodDeliveryCTA.image)|(co.FoodBusinessDownloads.image)|(co.FoodDeliveryDownloads.image)/"
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
  }
`;

export default Ciudades;
