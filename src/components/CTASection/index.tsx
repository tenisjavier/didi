import React, { Fragment } from "react";
import { BtnProps } from "../Btn";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image, { ImageDataType } from "../../components/Image";
import SectionBtn from "./SectionBtn";
import SectionBullets from "./SectionBullets";
import SectionLink from "./SectionLink";
import SectionList from "./SectionList";
import SectionCreditCardCashBackBullets, {
  SectionCreditCardCashBackBulletsProps,
} from "./SectionCreditCardCashBackBullets";
import textHighlighter from "../../util/textHighlighter";

export interface CTAProps extends BtnProps {
  hero: boolean;
  title: string;
  desc?: string;
  link?: string;
  textColor: string;
  bgImage?: ImageDataType;
  bgImageStyle?: string;
  mobileBgImage?: ImageDataType;
  mobileBgImageStyle?: string;
  bgVideo?: React.ReactNode;
  imageRawRender?: React.ReactNode;
  bgColor?: string;
  image?: ImageDataType;
  imageStyle?: string;
  bullets?: string[] | JSX.Element[];
  list?: {
    text: string;
    link: string;
  }[];
  customBulletIcon?: boolean;
  icon?: IconProp;
  btnArray?: {
    link: string;
    text: string;
  }[];
  reverse?: boolean;
  RTL?: boolean;
  descBeforeBullets?: boolean;
  bulletsCreditCard?: SectionCreditCardCashBackBulletsProps;
  bulletsConfigColumn?: "default" | "singleColumn";
  bgColumTitle?: string;
  borderColor?: string;
  hasTextHighlighterBullets?: boolean;
  textHighlighterConfig?: {
    hasTextHighlighter: boolean;
    style?: string;
  };
  whiteRight?: boolean;
  mobileTitlePosition?: string;
  centralized?: boolean;
  containerDisabled?: boolean;
  alignRight?: boolean;
  contactButtons?: {
    phoneNumber: string;
    whatsapp: string;
  };
}

const CTASection = (props: CTAProps) => {
  const {
    hero,
    title,
    desc,
    link,
    textColor,
    bgImage,
    bgImageStyle,
    mobileBgImage,
    mobileBgImageStyle,
    bgVideo,
    imageRawRender,
    bgColor,
    image,
    imageStyle,
    bullets,
    list,
    customBulletIcon,
    icon,
    btnType,
    btnText,
    btnLink,
    btnMode,
    btnArray,
    reverse,
    btnModeSecondary,
    RTL,
    descBeforeBullets = true,
    bulletsCreditCard,
    bulletsConfigColumn = "default",
    bgColumTitle,
    borderColor,
    textHighlighterConfig,
    hasTextHighlighterBullets,
    whiteRight,
    mobileTitlePosition,
    centralized,
    containerDisabled,
    alignRight,
    contactButtons,
  } = props;

  const isRtl = RTL ? "rtl" : "ltr";
  const textDir = RTL ? "text-right" : "text-left";
  const margin = RTL ? "ml-4" : "mr-4";

  const getTitleElement = () => {
    if (hero) {
      return (
        <h1 className={`text-4xl font-bold md:text-5xl mt-0 ${alignRight ? 'text-center lg:text-right' : ''}`}>
          {title &&
            title.split("\n").map((str, index) => (
              <Fragment key={index}>
                {textHighlighterConfig?.hasTextHighlighter
                  ? textHighlighter(str, textHighlighterConfig.style)
                  : str}
                <br />
              </Fragment>
            ))}
        </h1>
      );
    } else {
      return (
        <h2 className="font-bold text-3xl md:text-4xl">
          {title &&
            title.split("\n").map((str, index) => (
              <Fragment key={index}>
                {textHighlighterConfig?.hasTextHighlighter
                  ? textHighlighter(str, textHighlighterConfig.style)
                  : str}
                <br />
              </Fragment>
            ))}
        </h2>
      );
    }
  };

  const renderSectionDesc = () => {
    return (
      <p className={`mb-10 text-lg ${alignRight ? 'text-center lg:text-right' : 'text-left'}`}>
        {desc &&
          desc.split("\n").map((str, index) => (
            <Fragment key={index}>
              {textHighlighterConfig?.hasTextHighlighter
                ? textHighlighter(str, textHighlighterConfig.style)
                : str}
              <br />
            </Fragment>
          ))}
      </p>
    );
  };

  return (
    <section
      style={{ direction: isRtl }}
      className={`relative flex min-h-[40rem] w-full items-center justify-center overflow-hidden ${bgColor && bgColor
        } ${borderColor && "border-solid border border-" + borderColor}`}
    >
      <div
        className={`${whiteRight ? "white-right" : containerDisabled ? "lg:px-40 " : "container"
          }  mx-auto flex w-full lg:flex-nowrap items-center ${alignRight ? '' : 'justify-center'}  py-12 ${reverse && hero
            ? "flex-row-reverse flex-wrap-reverse pt-28 lg:pt-12 "
            : "flex-wrap "
          } ${reverse ? "flex-row-reverse" : ""} 
          ${centralized ? "xl:justify-center" : ""}
        ${image || imageRawRender || bulletsConfigColumn === "singleColumn"
            ? whiteRight
              ? "xl:justify-center"
              : "xl:justify-between"
            : "xl:justify-start"
          }`}
      >
        {image && <Image imageData={image} imageStyle={imageStyle} />}
        {bullets && bulletsConfigColumn === "singleColumn" && (
          <SectionBullets
            bullets={bullets}
            customBulletIcon={customBulletIcon}
            margin={margin}
            textDir={textDir}
            icon={icon}
            hasTextHighlighter={hasTextHighlighterBullets}
          />
        )}

        {bulletsCreditCard && bulletsConfigColumn === "singleColumn" && (
          <SectionCreditCardCashBackBullets
            creditCardCashBackBullets={
              bulletsCreditCard.creditCardCashBackBullets
            }
          />
        )}

        {imageRawRender && imageRawRender}

        <div
          className={`${mobileTitlePosition === "top" ? "absolute top-24 md:static" : ""
            } w-11/12 mb-8  lg:mt-16 lg:w-1/2 text-${textColor} ${bgColumTitle} z-10 lg:${textDir}`}
        >
          {getTitleElement()}
          <div
            className={`flex ${descBeforeBullets ? "flex-col" : "flex-col-reverse"
              }`}
          >
            {desc && renderSectionDesc()}

            {bullets && bulletsConfigColumn === "default" && (
              <SectionBullets
                bullets={bullets}
                customBulletIcon={customBulletIcon}
                margin={margin}
                textDir={textDir}
                icon={icon}
                hasTextHighlighter={hasTextHighlighterBullets}
              />
            )}
            {bulletsCreditCard && bulletsConfigColumn === "default" && (
              <SectionCreditCardCashBackBullets
                creditCardCashBackBullets={
                  bulletsCreditCard.creditCardCashBackBullets
                }
              />
            )}
          </div>
          {link && <SectionLink link={link} />}
          {list && <SectionList list={list} />}
          <div className={`text-center ${alignRight ? 'lg:text-right' : 'lg:text-left'}`}>
            <SectionBtn
              btnType={btnType}
              btnMode={btnMode}
              btnModeSecondary={btnModeSecondary}
              btnLink={btnLink}
              btnText={btnText}
              btnArray={btnArray}
            />
            {contactButtons && (
              <div className={`mt-10 flex items-center gap-7 justify-center lg:pl-4 pl-0 ${alignRight ? 'lg:justify-end' : 'lg:justify-start'}`}>
                {contactButtons.phoneNumber ? (
                  <a href={contactButtons.phoneNumber}>
                    <Image
                      imageData={{
                        title: "Phone Number",
                        description: "Phone Number"
                      }}
                      imageStyle="w-9 h-9"
                      src="/icon/phone.png"
                    />
                  </a>
                ) : (
                  <></>
                )}

                {contactButtons.whatsapp ? (
                  <a href={contactButtons.whatsapp}>
                    <Image
                      imageData={{
                        title: "WhatsApp Number",
                        description: "WhatsApp Number"
                      }}
                      imageStyle="w-9 h-9"
                      src="/icon/whatsapp.png"
                    />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {bgImage && <Image imageData={bgImage} imageStyle={bgImageStyle} />}

      {mobileBgImage && (
        <Image imageData={mobileBgImage} imageStyle={mobileBgImageStyle} />
      )}

      {bgVideo && bgVideo}
    </section>
  );
};

export default CTASection;
