import React from "react";
import { BtnType, BtnMode } from "../../Btn";
import Image, { ImageDataType } from "../../Image";
import Bullets, { BulletsProps } from "./Bullets";
import textHighlighter from "../../../util/textHighlighter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    hasIcon?: boolean,
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
        <div className={`w-full h-full flex justify-center items-center ${containerImageStyle}`}>
          <Image imageStyle={`${imageStyle} `} imageData={image} />
        </div>
      ) : (
        <div className={`flex flex-col justify-center items-center ${textColor} ${bgColorCard} px-4 py-4 lg:px-28 lg:py-16 h-full lg:h-auto`}
        >
          <div className={`flex flex-col font-bold`} >
            <h1 className="lg:text-5xl text-4xl text-left p-0 m-0">{textHighlighter(title)}</h1>
            <p className="lg:text-5xl text-4xl text-left p-0 m-0 font-normal">{textHighlighter(subTitle)}</p>
            <p className="lg:text-lg text-left p-0 m-0 mt-12">{textHighlighter(desc)}</p>
            {bullets && <Bullets {...bullets} />}
            {footerLink && (
              <a
                className={`lg:text-lg underline underline-offset-8 ${footerLink.textColor}`}
                href={footerLink.link}>
                {footerLink.text}
                {footerLink.hasIcon && <Image imageData={{
                  title: 'arrow',
                  description: 'arrow',
                }}
                  src="/icon/icon-arrow-up-right.svg" imageStyle="w-6" />}
              </a>
            )}
            {descFooter && <p className={`lg:text-lg ${descFooter.textColor}`}>{descFooter.text}</p>}
          </div>
        </div>
      )}
    </>
  );
}


export default SectionCard;