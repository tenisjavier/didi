import React from "react"
import { ImageDataType } from "../Image"
import Card from "./VikingCard"
import VikingFooter from "./VikingFooter"
import { BtnMode, BtnType } from "../Btn"

type ColumType = {
  image: ImageDataType,
  title: string,
  subTitle: string,
  btnText: string,
  btnLink: string,
  bgColorCard: string,
  textColor: string,
  btnType: BtnType,
  btnMode: BtnMode,
}

export interface VikingSectionProps {
  colOne: ColumType,
  colTwo: ColumType,
  textFooter: string,
  hasTwoColumns?: boolean,
}

const VikingSection = ({
  colOne,
  colTwo,
  textFooter,
  hasTwoColumns = true
}: VikingSectionProps) => {

  return (
    <div
      className="flex justify-center items-center h-full lg:h-screen bg-orange-primary"
      style={{
        background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
      }}
    >
      <div className={`lg:grid ${hasTwoColumns ? "lg:grid-cols-2" : "lg:grid-cols-1"} flex flex-col justify-center lg:h-screen lg:w-screen w-full h-full mt-8`}>
        <Card
          image={colOne.image}
          title={colOne.title}
          subTitle={colOne.subTitle}
          btnText={colOne.btnText}
          bgColorCard={colOne.bgColorCard}
          textColor={colOne.textColor}
          btnType={colOne.btnType}
          btnMode={colOne.btnMode}
        />
        {hasTwoColumns && (
          <Card
            image={colTwo.image}
            title={colTwo.title}
            subTitle={colTwo.subTitle}
            btnText={colTwo.btnText}
            bgColorCard={colTwo.bgColorCard}
            textColor={colTwo.textColor}
            btnType={colTwo.btnType}
            btnMode={colTwo.btnMode}
          />
        )}
        <VikingFooter text={textFooter} />
      </div>
    </div>
  )
}


export default VikingSection