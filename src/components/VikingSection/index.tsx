import React from "react"
import Btn from "../Btn"
import Image, { ImageDataType } from "../Image"
import { StaticImage } from "gatsby-plugin-image"

export interface VikingSectionProps {
  imageOne: ImageDataType,
  imageTwo: ImageDataType,
  didiLogo?: ImageDataType,
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

const VikingSection = ({
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
}: VikingSectionProps) => {
  return (
    <div
      className="flex justify-center items-center h-full lg:h-screen bg-orange-primary"
      style={{
        background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
      }}
    >
      <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center lg:h-screen lg:w-screen w-full h-full mt-8">
        <div className={`flex flex-col items-center justify-center ${textColorColOne} ${bgColOne} px-8 py-16 h-full lg:h-auto`}>
          <div className="flex flex-col font-bold">
            <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0">{titleOne} <Image imageStyle="lg:w-[120px] w-[90px]" imageData={imageOne} /></p>
            <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0 ">{subTitleOne}</p>
            <Btn btnTextCenter btnType="pax" btnMode="light" btnText={btnTextOne}></Btn>
          </div>
        </div>
        <div className={`flex flex-col justify-center items-center ${textColorColTwo} ${bgColTwo} px-8 py-16  h-full lg:h-auto`}>
          <div className="flex flex-col font-bold">
            <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0">{titleTwo} <Image imageStyle="lg:w-[120px] w-[90px]" imageData={imageTwo} /></p>
            <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0 ">{subTitleTwo}</p>
            <Btn btnTextCenter btnType="foodEater" btnMode="light" btnText={btnTextTwo}></Btn>
          </div>
        </div>
        <div
          className="col-span-2 flex items-center justify-center w-full h-full lg:h-auto p-8 lg:p-0 flex-wrap"
          style={{
            background: "linear-gradient(135deg, rgba(255,165,84,1) 0%, rgba(255,97,38,1) 100%)"
          }}
        >
          <p className="lg:text-5xl text-3xl text-center p-0 m-0 text-white">{textFooter}</p>
          <StaticImage src={"../../images/didi-logo.png"} alt={"DiDi Logo"} className="lg:w-64 w-36" />
        </div>
      </div>
    </div>
  )
}


export default VikingSection