import React from "react";
import Btn, { BtnType, BtnMode } from "../../Btn";
import Image, { ImageDataType } from "../../Image";
import Bullets, { BulletsProps } from "./Bullets";

export interface SectionCardProps {
  image?: ImageDataType,
  imageStyle?: string,
  title?: string,
  subTitle?: string,
  desc?: string,
  btnText?: string,
  btnType?: BtnType,
  btnMode?: BtnMode,
  bgColorCard?: string,
  textColor?: string,
  type?: 'imageCard',
  bullets?: BulletsProps,
  containerImageStyle?: string,
  footerLink?: {
    text: string,
    link: string,
    textColor: string,
  },
  descFooter?: {
    text: string,
    textColor: string,
  },
}

const SectionCard: React.FC<SectionCardProps> = ({
  bgColorCard,
  image,
  title,
  desc,
  textColor,
  type,
  bullets,
  footerLink,
  imageStyle,
  containerImageStyle,
  subTitle,
  descFooter,
}) => {

  return (
    <>
      {image && type === 'imageCard' ? (
        <div className={`flex w-full h-full justify-center items-center ${containerImageStyle}`}>
          <Image imageStyle={`${imageStyle}`} imageData={image} />
        </div>
      ) : (
        <div className={`flex flex-col justify-center items-center ${textColor} ${bgColorCard} px-28 py-16 h-full lg:h-auto`}
        >
          <div className={`flex flex-col font-bold`} >
            <h1 className="lg:text-5xl text-4xl text-left p-0 m-0">{title}</h1>
            <p className="lg:text-5xl text-4xl text-left p-0 m-0 font-normal">{subTitle}</p>
            <p className="lg:text-lg text-left p-0 m-0 mt-12">{desc}</p>
            {bullets && <Bullets {...bullets} />}
            {footerLink && <a className={`lg:text-lg ${footerLink.textColor}`} href={footerLink.link}>{footerLink.text}</a>}
            {descFooter && <p className={`lg:text-lg ${descFooter.textColor}`}>{descFooter.text}</p>}
            {/* <Btn btnTextCenter btnType={btnType} btnMode={btnMode} btnText={btnText}></Btn> */}
            {/* {} */}
          </div>
        </div>
      )}
    </>
  );
}


export default SectionCard;