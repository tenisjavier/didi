import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../components/CTASection";
import ContactColumnPart from "../components/ContactColumnPart";

const Index = ({ data }) => {
  const countries = data.allContentfulCountry.nodes;
  const images = data.allContentfulAsset.nodes;

  const ContactUsHeroBgImage = images.filter((image) => {
    return image.title === "int.ContactUsHero.bgImage";
  })[0];

  const CTAProps = {
    hero: true,
    title: "Contact DiDi Global",
    desc: "",
    textColor: "white",
    bgColor: "bg-gray-primary",
    bgImage: (
      <GatsbyImage
        image={ContactUsHeroBgImage.gatsbyImageData}
        alt={ContactUsHeroBgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-50"
      ></GatsbyImage>
    ),
  };


  const ContactColumnPartProps = {
    contacts: [
      {
        title: "Beijing Headquarters",
        desc: "Building B1&B2, Digital Valley, Zhongguancun Software Park Compound 8, Dongbeiwang Road, Haidian District Beijing 100000 P.R.China"
      },
      {
        title: "Business Partnership",
        desc: "bd@didiglobal.com"
      },
      {
        title: "Brand Cooperation",
        desc: "shichanghezuo@didiglobal.com"
      },
      {
        title: "Advertising",
        desc: "ad@didiglobal.com"
      },
      {
        title: "Media contact",
        desc: "globalpr@didiglobal.com"
      },
      {
        title: "Open Platform",
        desc: "api@didiglobal.com"
      },
      {
        title: "DiDi Labs in Mountain View",
        desc: "450 National Ave., Mountain View, CA 94043"
      },
      {
        title: "Customer Service Hotline",
        desc: "support@didiglobal.com"
      }
    ]
  };

  return (
    <>
      <Seo></Seo>
      <nav className="fixed z-30 h-20 w-full bg-gray-primary bg-opacity-80">
        <div className="flex h-full items-center justify-between">
          <Link className="" to={`/`}>
            <StaticImage
              src={`../images/didi-logo.png`}
              alt="DiDi"
              className=""
              width={100}
            />
          </Link>
        </div>
      </nav>
      <CTASection {...CTAProps}></CTASection>
      <ContactColumnPart {...ContactColumnPartProps}></ContactColumnPart>
      <footer>
        <div className="h-96 bg-gray-primary lg:h-80">
          <div className="container mx-auto flex h-full flex-wrap">
            <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
              <Link to="/">
                <StaticImage
                  src="../images/didi-logo.png"
                  alt="DiDi"
                  width={180}
                />
              </Link>

              <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
                {countries.map((c, index) => {
                  if (index === 0) {
                    return (
                      <a
                        href={c.hostname}
                        key={index}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {c.name}
                      </a>
                    );
                  } else {
                    return (
                      <span key={index} className="text-white">
                        {" "}
                        •{" "}
                        <a
                          href={c.hostname}
                          className="text-sm text-yellow-500 hover:text-yellow-300"
                        >
                          {c.name}
                        </a>
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

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
    allContentfulCountry {
      nodes {
        name
        hostname
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "int.ContactUsHero.bgImage"
          ]
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
  }
`;
