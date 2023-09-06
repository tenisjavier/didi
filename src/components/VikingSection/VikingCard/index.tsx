import React from "react";
import Btn, { BtnType, BtnMode } from "../../Btn";
import Image, { ImageDataType } from "../../Image";

interface VikingCardProps {
  image: ImageDataType,
  title: string,
  subTitle: string,
  btnText: string,
  btnType: BtnType,
  btnMode: BtnMode,
  bgColorCard: string,
  textColor: string,
}

const VikingCard: React.FC<VikingCardProps> = ({
  btnText,
  btnType,
  bgColorCard,
  image,
  title,
  subTitle,
  textColor,
  btnMode
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${textColor} ${bgColorCard} px-8 py-16 h-full lg:h-auto`}>
      <div className="flex flex-col font-bold">
        <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0">{title} <Image imageStyle="lg:w-[120px] w-[90px]" imageData={image} /></p>
        <p className="font-GorutsXbold lg:text-9xl text-8xl text-left p-0 m-0 ">{subTitle}</p>
        <Btn btnTextCenter btnType={btnType} btnMode={btnMode} btnText={btnText}></Btn>
      </div>
    </div>
  );
}


export default VikingCard;