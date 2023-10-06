import React, { useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../../components/Layout";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodHero from "../../../components/sections/FoodHero";

const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.FoodHeroMobile.bgImage";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHeroMobile.bgImage";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessHero.bgImage";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.FoodBusinessHeroMobile.bgImage";
  })[0];

  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];

  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiFoodCarousel.image";
  });

  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carousel_food_icon";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carousel_courier_icon";
  })[0];
  const carrouselIcons2 = images.filter((image) => {
    return image.title === "carousel_restaurant_icon";
  })[0];

  const carrouselIcons = [carrouselIcons0, carrouselIcons1, carrouselIcons2];

  //Set the order of the carousel's brands.
  const order = [
    "Little Caesars",
    "Cinepolis",
    "KFC",
    "Starbucks",
    "Burger King",
    "Domino's",
    "Mc Delivery",
    "Sushi Roll",
    "Pizza Hut",
    "Lucky Sushi",
    "FreshSalads",
    "Cassava Roots",
    "Alitas",
    "Okuma Sushi",
    "Las Quekas Factory",
    "Santa Alitas",
    "Pizza Maestra",
    "Sticks",
    "Tlaquepaque",
    "Pizza Deprizza",
    "Los Tarascos",
    "Lecaroz",
    "Don Pancho",
  ];

  const DiDiFoodCarouselImagesSorted = DiDiFoodCarouselImages.sort((a, b) => {
    const indexA = order.indexOf(a.description);
    const indexB = order.indexOf(b.description);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) {
      return -1;
    } else if (indexB !== -1) {
      return 1;
    }

    return 0;
  });

  return (
    <Layout sb={false}>
      {useLocation().search === "?test=day" && (
        <>
          <div className={`${activeHero !== 0 && "hidden"} `}>
            <FoodHero
              desc=" "
              bgImage={foodHeroBgImage}
              mobileBgImage={foodHeroBgImageMobile}
              mobileTitlePosition="top"
            ></FoodHero>
          </div>
          <div className={`${activeHero !== 1 && "hidden"} `}>
            <FoodDeliveryHero
              desc=" "
              bgImage={repartidoresHeroBgImage}
              mobileBgImage={repartidoresHeroBgImageMobile}
              mobileTitlePosition="top"
            ></FoodDeliveryHero>
          </div>
          <div className={`${activeHero !== 2 && "hidden"} `}>
            <FoodBusinessHero
              desc=" "
              bgImage={restaurantHeroBgImage}
              mobileBgImage={restaurantHeroBgImageMobile}
              mobileTitlePosition="top"
            ></FoodBusinessHero>
          </div>
          <HeroCarrousel
            images={carrouselIcons}
            updateHero={updateHero}
            position="onHero"
          ></HeroCarrousel>

          <DiDiFoodCarousel
            images={DiDiFoodCarouselImagesSorted}
          ></DiDiFoodCarousel>
        </>
      )}
      {useLocation().search !== "?test=day" && (
        <FoodHero
          desc=" "
          bgImage={foodHeroBgImage}
          mobileBgImage={foodHeroBgImageMobile}
          mobileTitlePosition="top"
        ></FoodHero>
      )}
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodBusinessHero.bgImage)|(mx.FoodBusinessHeroMobile.bgImage)|(mx.FoodBusinessHero.bgImage)|(mx.FoodHero.bgImage)|(mx.FoodHeroMobile.bgImage)|(mx.FoodDeliveryHero.bgImage)|(mx.FoodDeliveryHeroMobile.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.DiDiFoodCarousel.image)|(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)/"
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
  }
`;
