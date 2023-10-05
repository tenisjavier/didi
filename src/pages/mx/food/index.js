import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import DiDiFoodHeroCarousel from "../../../components/sections/Food/DiDiFoodHeroCarousel";


const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFood-bgImage.image";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.DiDiFood-bgImage-mobile.image";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiRepartidores-bgImage.image";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.DiDiRepartidores-bgImage-mobile.image";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiRestaurant-bgImage.image";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.DiDiRestaurant-bgImage-mobile.image";
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
          regex: "/(mx.DiDiRestaurant-bgImage-mobile.image)|(mx.DiDiFood-bgImage-mobile.image)|(mx.DiDiRepartidores-bgImage-mobile.image)|(mx.DiDiRestaurant-bgImage.image)|(mx.DiDiFood-bgImage.image)|(mx.DiDiRepartidores-bgImage.image)|(mx.FoodDeliveryHero.bgImage)|(mx.FoodBusinessHero.bgImage)|(mx.FoodHero.bgImage)|(mx.FoodHeroMobile.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.DiDiFoodCarousel.image)|(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)/"
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
