import React, { useState } from "react";
import { useCountry } from "../context/countryContext";
import { getBtnLinks } from "../config/btn-config";
import gtmEvent from "../config/gtm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { ab } from "../config/ab";

// @desc: Pax and Driver CTA buttons.  If not btnType is passed it will be a normal btn.
// @props: btnType drv/pax/none | btnLink (normal btn) "url" | btnMode light/none | children: normal btn text

export type BtnType =
  | "both"
  | "drv"
  | "drvWhatsapp"
  | "pax"
  | "fleet"
  | "payment"
  | "paymentBusiness"
  | "foodBusiness"
  | "foodDelivery"
  | "foodEater"
  | "foodEaterOnline"
  | "custom"
  | "bothFood"
  | "bothFoodEn"
  | "foodEaterOnlineEn"
  | "foodEaterEn"
  | "foodBusinessEn"
  | "foodDeliveryEn"
  | "foodBusinessHeroEn"
  | "foodDeliveryHeroEn"
  | "prestamosPax"
  | "prestamosDrv"
  | "bothPrestamos"
  | "entrega"
  | "entregaBusiness"
  | "en"
  | "card"
  | undefined;

export type BtnMode =
  | "primary"
  | "dark"
  | "light"
  | "green"
  | "hidden"
  | "whatsapp"
  | "static";

export interface BtnProps {
  btnType?: BtnType;
  btnText2?: string;
  btnLink2?: string;
  btnMode?: BtnMode;
  btnModeSecondary?: BtnMode;
  btnLink?: string;
  btnText?: string;
  notRedirectOutPage?: boolean;
  download?: boolean;
  btnTextCenter?: boolean;
}
const Btn = ({
  btnType,
  btnMode,
  btnLink,
  btnText,
  btnModeSecondary,
  btnText2,
  btnLink2,
  notRedirectOutPage,
  download,
  btnTextCenter,
}: BtnProps) => {
  const countryCode = useCountry().code;
  const btnData = getBtnLinks(countryCode);

  const [isLoading, setIsLoading] = useState(false);

  // const version = ab("2023-05-h5-vs-ws-a-t2", "2023-05-h5-vs-ws-b-t2", "t2");
  if (btnType === "drv") {
    btnLink = btnData.drvLink;
    btnText = btnText || btnData.drvText;
  } else if (btnType === "drvWhatsapp") {
    btnLink = btnData.drvWhatsappLink;
    btnText = btnText || btnData.drvWhatsappText;
  } else if (btnType === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnText || btnData.paxText;
  } else if (btnType === "fleet") {
    btnLink = btnData.fleetLink;
    btnText = btnText || btnData.fleetText;
  } else if (btnType === "payment") {
    btnLink = btnData.paymentLink;
    btnText = btnText || btnData.paymentText;
  } else if (btnType === "paymentBusiness") {
    btnLink = btnData.paymentBusinessLink;
    btnText = btnText || btnData.paymentBusinessText;
  } else if (btnType === "foodBusiness") {
    btnLink = btnLink || btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  } else if (btnType === "foodDelivery") {
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  } else if (btnType === "foodEater") {
    btnLink = btnData.foodEaterLink;
    btnText = btnText || btnData.foodEaterText;
  } else if (btnType === "foodEaterOnline") {
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnText || btnData.foodEaterOnlineText;
  } else if (btnType === "bothFoodEn") {
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnData.foodEaterOnlineText;
    btnLink2 = btnData.foodEaterLink;
    btnText2 = btnData.foodEaterText;
  } else if (btnType === "foodDeliveryHeroEn") {
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  } else if (btnType === "foodBusinessHeroEn") {
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  } else if (btnType === "foodDeliveryEn") {
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  } else if (btnType === "foodBusinessEn") {
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  } else if (btnType === "foodEaterEn") {
    btnLink = btnData.foodEaterLink;
    btnText = btnText || btnData.foodEaterText;
  } else if (btnType === "foodEaterOnlineEn") {
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnText || btnData.foodEaterOnlineText;
  } else if (btnType === "prestamosPax") {
    btnLink = btnData.prestamosPaxLink;
    btnText = btnText || btnData.prestamosPaxText;
  } else if (btnType === "prestamosDrv") {
    btnLink = btnData.prestamosDrvLink;
    btnText = btnText || btnData.prestamosDrvText;
  } else if (btnType === "entrega") {
    btnLink = btnData.entregaLink;
    btnText = btnText || btnData.entregaText;
  } else if (btnType === "en") {
    btnLink = btnData.paxLink;
    btnText = btnText || btnData.paxText;
  } else if (btnType === "card") {
    btnText = btnText || btnData.creditText;
    btnLink = btnLink || btnData.creditLink;
  }

  const handleClick = (e: any) => {
    if (btnMode === "static") return;
    if (notRedirectOutPage) {
      if (download) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
      return;
    }
    e.preventDefault();
    const link = e.target.href;
    let form;
    const url = new URL(link);
    let version = url.searchParams.get("ad_group_id")?.toString();
    if (url.searchParams.get("c")?.toString().includes("/food"))
      version = localStorage.getItem("t7")?.toString();
    if (btnType === "drv")
      form = link.includes("quickbolt") ? "quickbolt" : "h5";

    let firstVisitedPage;
    if (typeof window !== "undefined") {
      firstVisitedPage = window.localStorage.getItem("firstVisitedPage");
    }
    gtmEvent(`click-btn`, {
      btnType: btnType,
      btnLink: link,
      form: form,
      versionName: version,
      btnText: e.target.innerText,
      countryCode: countryCode,
      firstVisitedPage: firstVisitedPage || undefined,
    });
    window.location.href = link;
  };

  return (
    <>
      {/* {version === "b" &&
      btnType === "drv" &&
      window.innerWidth < 640 &&
      ["mx", "co", "cl", "pe", "ec", "ar", "pa", "do", "cr"].includes(
        countryCode
      ) ? (
        <div
          tabIndex={0}
          role="button"
          className={`text-md md:text-base my-2 btn-whatsapp`}
        >
          <a
            onClick={(e) => handleClick(e)}
            className="block"
            href={btnLink || btnLink2}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="mx-2 lg:mr-2 inline"
            ></FontAwesomeIcon>{" "}
            {btnText || btnText2}
          </a>
        </div>
      ) : ( */}
      <div
        tabIndex={0}
        role="button"
        className={`${btnTextCenter ? "text-center" : ""
          } p-0 text-lg md:text-base my-2 btn-${btnMode} btn-${btnModeSecondary}`}
      >
        {isLoading ? (
          <FontAwesomeIcon
            className="animate-spin px-8 py-3.5"
            icon={faSpinner}
          />
        ) : (
          <a
            onClick={(e) => handleClick(e)}
            className={`block px-8 py-3 ${isLoading && ""} `}
            href={btnLink || btnLink2}
            target={`${notRedirectOutPage ? "_blank" : ""}`}
            download={download}
          >
            {btnText || btnText2}
          </a>
        )}
      </div>
    </>
  );
};

export default Btn;
