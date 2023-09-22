import React from "react"
import Card, { SectionCardProps } from "./SectionCard"
import SectionTitle from "./SectionTitle";
import Image, { ImageDataType } from "../Image";

export type ColumType = SectionCardProps;

export interface CTAFullSectionProps {
  colOne: SectionCardProps,
  colTwo?: SectionCardProps,
  bgSection?: string,
  isFullScreen?: boolean,
  maxWidthSection?: string,
  titleSection?: string,
  hasDivider?: boolean,
  bgImage?: ImageDataType,
  bgImageStyle?: string,
  subTitleSection?: string,
  textColorSection?: string,
}

const CTAFullSection = ({
  colOne,
  colTwo,
  bgSection,
  isFullScreen,
  maxWidthSection,
  titleSection,
  hasDivider,
  bgImage,
  bgImageStyle,
  subTitleSection,
  textColorSection,
}: CTAFullSectionProps) => {

  return (
    <div
      className={`relative flex flex-col justify-center items-center  ${isFullScreen && 'lg:h-screen h-full'} ${maxWidthSection}  ${bgSection}`}
    >
      {titleSection && <SectionTitle title={titleSection} textColor={textColorSection} subTitle={subTitleSection} />}
      <div className={`relative lg:grid ${colTwo ? "lg:grid-cols-2" : "lg:grid-cols-1"} flex flex-col justify-center ${isFullScreen ? 'lg:h-screen' : 'min-h-[40rem] flex flex-wrap'} lg:w-screen  w-full h-full`}>
        <Card
          image={colOne?.image}
          title={colOne?.title}
          desc={colOne?.desc}
          btnText={colOne?.btnText}
          bgColorCard={colOne?.bgColorCard}
          textColor={colOne?.textColor}
          btnType={colOne?.btnType}
          btnMode={colOne?.btnMode}
          type={colOne?.type}
          bullets={colOne?.bullets}
          footerLink={colOne?.footerLink}
          containerImageStyle={colOne?.containerImageStyle}
          imageStyle={colOne?.imageStyle}
          {...colOne}
        />
        {hasDivider && <div className="bg-orange-primary absolute h-[128px] w-[2px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>}
        {bgImage && (
          <Image imageData={bgImage} imageStyle={`${bgImageStyle} !absolute md:block top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`} />
        )}
        {colTwo && (
          <Card
            image={colTwo?.image}
            title={colTwo?.title}
            desc={colTwo?.desc}
            btnText={colTwo?.btnText}
            bgColorCard={colTwo?.bgColorCard}
            textColor={colTwo?.textColor}
            btnType={colTwo?.btnType}
            btnMode={colTwo?.btnMode}
            type={colTwo?.type}
            bullets={colTwo?.bullets}
            footerLink={colTwo?.footerLink}
            containerImageStyle={colTwo?.containerImageStyle}
            imageStyle={colOne?.imageStyle}
            {...colTwo}
          />
        )}
        {/* <VikingFooter text={textFooter} /> */}
      </div>
    </div>
  )
}


export default CTAFullSection