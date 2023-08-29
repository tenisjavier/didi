import React from "react"
import Btn from "../../../Btn"
import Image, { ImageDataType } from "../../../Image"
import { StaticImage } from "gatsby-plugin-image"

interface VikingHeroProps {
  imageOne: ImageDataType,
  imageTwo: ImageDataType,
  didiLogo: ImageDataType,
  titleOne: string,
  titleTwo: string,
  subTitleOne: string,
  subTitleTwo: string,
  btnTextOne: string,
  btnTextTwo: string,
  btnLinkOne: string,
  btnLinkTwo: string,
  bgColOne: string,
  bgColTwo: string,
  textColorColOne: string,
  textColorColTwo: string,
  textFooter: string,
}

const VikingHero = ({
  imageOne,
  imageTwo,
  titleOne,
  titleTwo,
  subTitleOne,
  subTitleTwo,
  btnTextOne,
  btnTextTwo,
  btnLinkOne,
  btnLinkTwo,
  bgColOne,
  bgColTwo,
  textColorColOne,
  textColorColTwo,
  textFooter
}: VikingHeroProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center lg:h-screen lg:w-screen w-full h-full">
      <div className={`flex flex-col items-center justify-center ${textColorColOne} ${bgColOne} px-8 py-16 h-full lg:h-auto`}>
        <div className="flex flex-col font-bold">
          <p className="lg:text-9xl text-8xl text-left p-0 m-0">{titleOne} <Image imageStyle="lg:w-[120px] w-[90px]" imageData={imageOne} /></p>
          <p className="lg:text-9xl text-8xl text-left p-0 m-0 mb-8">{subTitleOne}</p>
          <Btn btnTextCenter btnMode="light" btnLink={btnLinkOne} btnText={btnTextOne}></Btn>
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center ${textColorColTwo} ${bgColTwo} px-8 py-16  h-full lg:h-auto`}>
        <div className="flex flex-col font-bold">
          <p className="lg:text-9xl text-8xl text-left p-0 m-0">{titleTwo} <Image imageStyle="lg:w-[120px] w-[90px]" imageData={imageTwo} /></p>
          <p className="lg:text-9xl text-8xl text-left p-0 m-0 mb-8">{subTitleTwo}</p>
          <Btn btnTextCenter btnMode="light" btnLink={btnLinkTwo} btnText={btnTextTwo}></Btn>
        </div>
      </div>
      <div
        className="col-span-2 flex items-center justify-center w-full h-full lg:h-auto pb-8"
        style={{
          background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
        }}
      >
        <p className="lg:text-5xl text-3xl text-left p-0 m-0 text-white">{textFooter}</p>
        <StaticImage src={"../../../../images/didi-logo.png"} alt={"DiDi Logo"} className="lg:w-64 w-36" />
      </div>
    </div>
  )
}


export default VikingHero