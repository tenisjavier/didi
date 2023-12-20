import React, { useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../../components/Layout";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
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
    "2023-11-FoodHomeOriginal-t7",
    "2023-11-FoodHomeCarrousels-t7",
    "t7"
  );
  const images = data.allContentfulAsset.nodes;

  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("pe.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "pe.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "pe.FoodDeliveryCTA.image";
  })[0];
  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "pe.DiDiFoodCarousel.image";
  });

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "pe.FoodHero.bgImage";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.FoodHeroMobile.bgImage";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "pe.FoodDeliveryHero.bgImage";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.FoodDeliveryHeroMobile.bgImage";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "pe.FoodBusinessHero.bgImage";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.FoodBusinessHeroMobile.bgImage";
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
    "Papa Johns",
    "Little Caesars",
    "Subway",
    "Mc Donalds",
    "Dunkin Donuts",
    "Popeyes",
    "chinawok",
    "Norkys",
    "Mr. Sushi",
    "Bembos",
    "ROKYS",
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
      <div className="carousel-section">
        <div
          className={`${activeHero !== 0 && "hidden"} carousel-section-item`}
        >
          <FoodHero
            desc=" "
            bgImage={foodHeroBgImage}
            mobileBgImage={foodHeroBgImageMobile}
            mobileTitlePosition="top"
          ></FoodHero>
        </div>
        <div
          className={`${activeHero !== 1 && "hidden"} carousel-section-item`}
        >
          <FoodDeliveryHero
            desc=" "
            bgImage={repartidoresHeroBgImage}
            mobileBgImage={repartidoresHeroBgImageMobile}
            mobileTitlePosition="top"
          ></FoodDeliveryHero>
        </div>
        <div
          className={`${activeHero !== 2 && "hidden"} carousel-section-item`}
        >
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
        {version === "b" && (
          <DiDiFoodCarousel
            images={DiDiFoodCarouselImagesSorted}
          ></DiDiFoodCarousel>
        )}
      </div>

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
          regex: "/(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)|(pe.FoodHero.bgImage)|(pe.FoodHeroMobile.bgImage)|(pe.FoodDeliveryHero.bgImage)|(pe.FoodDeliveryHeroMobile.bgImage)|(pe.FoodBusinessHero.bgImage)|(pe.FoodBusinessHeroMobile.bgImage)|(pe.FoodColumns.image)|(pe.FoodBusinessCTA.image)|(pe.FoodDeliveryCTA.image)|(pe.DiDiFoodCarousel.image)/"
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
