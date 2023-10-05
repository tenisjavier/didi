import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiFoodHeroCarousel from "../../../components/sections/Food/DiDiFoodHeroCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";


const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

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
    return image.title === "pe.DiDiFood-bgImage.image";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.DiDiFood-bgImage-mobile.image";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "pe.DiDiRepartidores-bgImage.image";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.DiDiRepartidores-bgImage-mobile.image";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "pe.DiDiRestaurant-bgImage.image";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "pe.DiDiRestaurant-bgImage-mobile.image";
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
        <DiDiFoodCarousel
          images={DiDiFoodCarouselImagesSorted}
        ></DiDiFoodCarousel>
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
          regex: "/(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)|(pe.DiDiRestaurant-bgImage-mobile.image)|(pe.DiDiFood-bgImage-mobile.image)|(pe.DiDiRepartidores-bgImage-mobile.image)|(pe.DiDiRestaurant-bgImage.image)|(pe.DiDiFood-bgImage.image)|(pe.DiDiRepartidores-bgImage.image)|(pe.FoodHero.bgImage)|(pe.FoodHeroMobile.bgImage)|(pe.FoodColumns.image)|(pe.FoodBusinessCTA.image)|(pe.FoodDeliveryCTA.image)|(pe.DiDiFoodCarousel.image)/"
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
