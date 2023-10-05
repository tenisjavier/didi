import React, {useState} from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../../components/Layout";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import DiDiFoodHeroCarousel from "../../../components/sections/Food/DiDiFoodHeroCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";

const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

  const images = data.allContentfulAsset.nodes;

  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "cr.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "cr.FoodDeliveryCTA.image";
  })[0];
  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "cr.DiDiFoodCarousel.image";
  });

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "cr.DiDiFood-bgImage.image";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.DiDiFood-bgImage-mobile.image";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "cr.DiDiRepartidores-bgImage.image";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.DiDiRepartidores-bgImage-mobile.image";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "cr.DiDiRestaurant-bgImage.image";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.DiDiRestaurant-bgImage-mobile.image";
  })[0];

  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carousel_food_icon"
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carousel_courier_icon"
  })[0];
  const carrouselIcons2 = images.filter((image) => {
    return image.title === "carousel_restaurant_icon"
  })[0];

  const carrouselIcons = [
    carrouselIcons0,
    carrouselIcons1,
    carrouselIcons2,
  ];

  //Set the order of the carousel's brands.
  const order = [
    "MCD",
    "Tacobell",
    "Little Caesars",
    "Burger King",
    "Pizza Hut",
    "Ready Pizza",
    "Starbucks",
    "Domino's",
    "Carl's Jr",
    "Nacion Sushi",
    "Pops",
    "Juan Valdez",
    "Papa Johns",
    "Johnny Rockets",
    "Tico Burguesas",
    "Spoon",
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
    <Layout>
        <>
        <div className={`${activeHero !== 0 && "hidden"} `}>
          <DiDiFoodHeroCarousel
          bgImage={foodHeroBgImage}
          mobileBgImage={foodHeroBgImageMobile}
          type="food"
        ></DiDiFoodHeroCarousel>
        </div>
        <div className={`${activeHero !== 1 && "hidden"} `}>
          <DiDiFoodHeroCarousel 
          bgImage={repartidoresHeroBgImage}
          mobileBgImage={repartidoresHeroBgImageMobile}
          type="repartidor"
          ></DiDiFoodHeroCarousel>
        </div>
        <div className={`${activeHero !== 2 && "hidden"} `}>
          <DiDiFoodHeroCarousel
            bgImage={restaurantHeroBgImage}
            mobileBgImage={restaurantHeroBgImageMobile}
            type="restaurant"
          ></DiDiFoodHeroCarousel>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
          position="onHero"          
        ></HeroCarrousel>
      </>
      {useLocation().search === "?test=day" && (
        <DiDiFoodCarousel
          images={DiDiFoodCarouselImagesSorted}
        ></DiDiFoodCarousel>
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
          regex: "/(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)|(cr.DiDiRestaurant-bgImage-mobile.image)|(cr.DiDiFood-bgImage-mobile.image)|(cr.DiDiRepartidores-bgImage-mobile.image)|(cr.DiDiRestaurant-bgImage.image)|(cr.DiDiFood-bgImage.image)|(cr.DiDiRepartidores-bgImage.image)|(cr.FoodHero.bgImage)|(cr.FoodHeroMobile.bgImage)|(cr.FoodColumns.image)|(cr.FoodBusinessCTA.image)|(cr.FoodDeliveryCTA.image)|(cr.DiDiFoodCarousel.image)/"
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
