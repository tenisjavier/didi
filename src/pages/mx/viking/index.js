import React from "react"
import { graphql } from "gatsby";

import VikingHero from "../../../components/sections/Viking/VikingHero"
import TranslationFile from "../../../../locales/mx/translation.json"

const Viking = ({ data }) => {
  console.log(data)
  const images = data.allContentfulAsset.nodes

  const palImageSteeringWheel = images.filter((image) => {
    return image.title === "mx.pal.frontSteeringWheel";
  })[0];

  const palImageHandbag = images.filter((image) => {
    return image.title === "mx.pal.handbag";
  })[0];

  return (
    <div
      className="flex justify-center items-center h-full lg:h-screen bg-orange-primary"
      style={{
        background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
      }}
    >
      <VikingHero
        imageOne={palImageSteeringWheel}
        imageTwo={palImageHandbag}
        titleOne={TranslationFile.VikingSection.vikingColOne.title}
        titleTwo={TranslationFile.VikingSection.vikingColTwo.title}
        subTitleOne={TranslationFile.VikingSection.vikingColOne.subTitle}
        subTitleTwo={TranslationFile.VikingSection.vikingColTwo.subTitle}
        btnLinkOne={TranslationFile.VikingSection.vikingColOne.btnLink}
        btnLinkTwo={TranslationFile.VikingSection.vikingColTwo.btnLink}
        btnTextOne={TranslationFile.VikingSection.vikingColOne.btnText}
        btnTextTwo={TranslationFile.VikingSection.vikingColTwo.btnText}
        bgColOne={TranslationFile.VikingSection.vikingColOne.bgColor}
        bgColTwo={TranslationFile.VikingSection.vikingColTwo.bgColor}
        textColorColOne={TranslationFile.VikingSection.vikingColOne.textColor}
        textColorColTwo={TranslationFile.VikingSection.vikingColTwo.textColor}
        textFooter={TranslationFile.VikingSection.vikingFooter.text}
      />
    </div>
  )
}

export default Viking

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.pal.frontSteeringWheel"
            "mx.pal.handbag"
            # "mx.pal.yellowHandbag"
            # "mx.pal.wallet"
            # "mx.pal.frontHandbag"
            # "mx.pal.hat"
            # "mx.pal.card"
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
