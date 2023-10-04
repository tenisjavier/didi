import React, {useState} from "react";
import { useLocation } from "@reach/router";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodHero from "../../../components/sections/FoodHero";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";


const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFood-bgImage.image";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFood-bgImage.image";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiRepartidores-bgImage.image";
  })[0];
  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiRestaurant-bgImage.image";
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
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

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
          <FoodHero
          bgImage={foodHeroBgImage}
          mobileBgImage={foodHeroMobileBgImage}
        ></FoodHero>
        </div>
        <div className={`${activeHero !== 1 && "hidden"} `}>
          <FoodDeliveryHero bgImage={repartidoresHeroBgImage}></FoodDeliveryHero>
        </div>
        <div className={`${activeHero !== 2 && "hidden"} `}>
          <FoodBusinessHero
            bgImage={restaurantHeroBgImage}
          ></FoodBusinessHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
          position="onHero"          
        ></HeroCarrousel>
      </>

      {/* {useLocation().search === "?test=day" && (
        <DiDiFoodCarousel
          images={DiDiFoodCarouselImagesSorted}
        ></DiDiFoodCarousel>
       )} */}
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
          regex: "/(mx.DiDiRestaurant-bgImage.image)|(mx.DiDiFood-bgImage.image)|(mx.DiDiRepartidores-bgImage.image)|(mx.FoodDeliveryHero.bgImage)|(mx.FoodBusinessHero.bgImage)|(mx.FoodHero.bgImage)|(mx.FoodHeroMobile.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.DiDiFoodCarousel.image)|(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)/"
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
