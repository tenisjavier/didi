import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import CTASection from "../../../components/CTASection";
import ColumnsSection from "../../../components/ColumnSection";

const DiDiSal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const didisalHeroImage = images.filter((image) => {
    return image.title === "au.AppFeaturesHero.image";
  })[0];
  const didisalFeaturesImage = images.filter((image) => {
    return image.title === "au.AppFeaturesWhyDiDiSal.image";
  })[0];
  const safetyGridPaxImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridPax.image") !== -1;
  });

  const heroProps = {
    title: "Meet DiDi Sal",
    desc: "Find out more about DiDi Sal below.",
    bgColor: "bg-blue-primary",
    textColor: "white",
    btnType: "pax",
    btnMode: "light",
    image: didisalHeroImage,
    imageStyle: "z-10 m-4 w-80",
    reverse: true,
  };
  const featuresProps = {
    title: "Stay safe with Sal, your in-trip pal",
    desc: "We’re constantly working hard to improve the safety of our users. That’s why we’re introducing ‘DiDi Sal’, a new in-trip safety assistant that works together with existing safety features to help keep you safe. While DiDi Sal is only available in Brisbane for now, we’re looking forward to introducing it to the rest of Australia soon.",
    bgColor: "bg-white",
    textColor: "gray-primary",
    btnType: "pax",
    btnMode: "light",
    image: didisalFeaturesImage,
    imageStyle: "z-10 m-4 w-80",
    reverse: true,
  };

  const didiSalColumnsProps = {
    title: "What DiDi Sal Can Do:",
    bgColor: "bg-gray-light",
    textColor: "gray-primary",
    columns: [
      {
        title: "SOS Button",
        desc: "With the tap of a button, you can contact law enforcement and emergency services. Your location details will also be shown in-app for easy reference.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[0])}
            alt={safetyGridPaxImages[0].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Unmatch drivers",
        desc: "If you think that any of your drivers were not up to standard you can now unmatch with them so your trip requests are never dispatched to them again. Please remember if there was a serious incident to report it to us.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[1])}
            alt={safetyGridPaxImages[1].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Share trip",
        desc: "Our live GPS tracking allows you to share your trip with your Trusted Contacts. This can be found in the Safety Toolkit.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[2])}
            alt={safetyGridPaxImages[2].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Private Numbers",
        desc: "When a rider and driver contact each other regarding a trip, whether that be before or after, both phone numbers will be anonymised.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[3])}
            alt={safetyGridPaxImages[3].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Hidden Addresses",
        desc: "To protect your personal information, your specific pick up and drop off addresses are hidden after the trip finishes.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[4])}
            alt={safetyGridPaxImages[4].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Driver Screening",
        desc: "To ensure all DiDi driver-partners are of the highest quality, they’re required to pass a series of safety verifications and background checks prior to driving.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[5])}
            alt={safetyGridPaxImages[5].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "Facial Verification",
        desc: "Facial verification matches a picture of your driver against the approved profile picture to make sure that it is not someone else driving.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[6])}
            alt={safetyGridPaxImages[6].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
      {
        title: "TripCheck",
        desc: "If anything unusual is detected during your trip you will receive a notification. If there is a problem our safety toolkit and SOS button will be made available to you.",
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        image: (
          <GatsbyImage
            image={getImage(safetyGridPaxImages[7])}
            alt={safetyGridPaxImages[7].description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        ),
      },
    ],
  };

  return (
    <Layout>
      <CTASection {...heroProps}></CTASection>
      <CTASection {...featuresProps}></CTASection>
      <ColumnsSection {...didiSalColumnsProps}></ColumnsSection>
    </Layout>
  );
};

export default DiDiSal;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.AppFeaturesHero.image)|(au.AppFeaturesWhyDiDiSal.image)|(au.SafetyGridPax)/"
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
