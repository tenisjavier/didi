import React from "react"
import Card, { SectionCardProps } from "./SectionCard"
import SectionTitle from "./SectionTitle";
import Image, { ImageDataType } from "../Image";
import SectionDivider from "./SectionDivider";

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
    <section
      className={`relative flex flex-col justify-center items-center  ${isFullScreen && 'lg:h-screen h-full'} ${maxWidthSection}  ${bgSection}`}
    >
      {titleSection && <SectionTitle title={titleSection} textColor={textColorSection} subTitle={subTitleSection} />}
      <div className={`relative lg:grid ${colTwo ? "lg:grid-cols-2" : "lg:grid-cols-1"} flex flex-col justify-center ${isFullScreen ? 'lg:h-screen' : 'min-h-[40rem] flex flex-wrap'} lg:w-screen  w-full h-full`}>
        {colOne && <Card {...colOne} />}
        {colTwo && <Card {...colTwo} />}

        {bgImage && (
          <Image imageData={bgImage} imageStyle={`${bgImageStyle} !absolute md:block top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`} />
        )}
        {hasDivider && <SectionDivider />}
      </div>
    </section>
  )
}


export default CTAFullSection