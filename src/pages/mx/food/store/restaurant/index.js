import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import RestaurantHero from "../../../../../components/sections/RestaurantHero";
import AboutRestaurantColumns from '../../../../../components/sections/AboutRestaurantColumns'
import FoodCityList from "../../../../../components/sections/FoodCityList";
import RestaurantSocialColumns from '../../../../../components/sections/RestaurantSocialColumns'
import RestaurantTestimonioCTA from '../../../../../components/sections/RestaurantTestimonioCTA'



const Restaurant = ({ data }) => {
  const cities = data.contentfulCountry.city;
  const filteredCities = cities.filter((city) => {
    return city.restaurant != null;
  });
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHero.bgImage";
  })[0];
  const columnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantHomeColumn.image") !== -1;
  });
  const socialImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantSocial.image") !== -1;
  })
  const testimonialImage = images.filter((image) => {
    return image.title === 'mx.DiDiRestaurantTestimonios.image'
  })[0];

  console.log(testimonialImage)

  return (
    <Layout>
      <RestaurantHero bgImage={RestaurantHeroBgImage}></RestaurantHero>
      <AboutRestaurantColumns images={columnsImages.reverse()}></AboutRestaurantColumns>
      <FoodCityList data={filteredCities}></FoodCityList>
      <RestaurantSocialColumns images={socialImages.reverse()}></RestaurantSocialColumns>
      <RestaurantTestimonioCTA image={testimonialImage}></RestaurantTestimonioCTA>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.RestaurantHero.bgImage)|(mx.DiDiRestaurantHomeColumn.image)|(mx.DiDiRestaurantSocial.image)|(mx.DiDiRestaurantTestimonios.image)/"
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
    contentfulCountry(code: { eq: "mx" }) {
      city {
        name
        slug
        image {
          description
          gatsbyImageData(width: 400)
        }
        restaurant {
          name
        }
      }
    }
  }
`;

export default Restaurant;
