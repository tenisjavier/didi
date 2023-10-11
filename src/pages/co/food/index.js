import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodHero from "../../../components/sections/FoodHero";
import { ab } from "../../../config/ab";
const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };
  const version = ab(
    "2023-10-FoodHomeCarrousels-t6",
    "2023-10-FoodHomeOriginal-t6",
    "t6"
  );
  const images = data.allContentfulAsset.nodes;

  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("co.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "co.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "co.FoodDeliveryCTA.image";
  })[0];
  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "co.DiDiFoodCarousel.image";
  });

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodHero.bgImage";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "co.FoodHeroMobile.bgImage";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodDeliveryHero.bgImage";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "co.FoodDeliveryHeroMobile.bgImage";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodBusinessHero.bgImage";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "co.FoodBusinessHeroMobile.bgImage";
  })[0];

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
    "KFC",
    "Frisby",
    "Burger King",
    "Subway",
    "MCD",
    "Qbano",
    "Presto",
    "Sandwich Gourmet",
    "MUY",
    "Sarku",
    "Juan Valdez",
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
      {version === "a" && (
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
      {version === "b" && (
        <FoodHero
          bgImage={foodHeroBgImage}
          mobileBgImage={foodHeroBgImageMobile}
          mobileTitlePosition="center"
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
          regex: "/(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)|(co.FoodHero.bgImage)|(co.FoodHeroMobile.bgImage)|(co.FoodDeliveryHero.bgImage)|(co.FoodDeliveryHeroMobile.bgImage)|(co.FoodBusinessHero.bgImage)|(co.FoodBusinessHeroMobile.bgImage)|(co.FoodColumns.image)|(co.FoodBusinessCTA.image)|(co.FoodDeliveryCTA.image)|(co.DiDiFoodCarousel.image)/"
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
