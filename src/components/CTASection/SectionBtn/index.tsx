import React from "react";
import Btn, { BtnProps } from "../../Btn";

type SectionsBtnType = {
  default: BtnProps[];
  both: BtnProps[];
  bothFood: BtnProps[];
  bothPrestamos: BtnProps[];
  custom: BtnProps[];
  bothFoodEn: BtnProps[];
};

type sectionType =
  | "default"
  | "both"
  | "bothFood"
  | "bothPrestamos"
  | "custom"
  | "bothFoodEn";

interface SectionsBtnProps extends BtnProps {
  btnArray?: {
    link: string;
    text: string;
  }[];
}

const SectionBtn = ({
  btnMode,
  btnType,
  btnModeSecondary,
  btnArray,
  btnLink,
}: SectionsBtnProps) => {
  const sectionsBtnConfig: SectionsBtnType = {
    default: [
      {
        btnType,
        btnMode,
        btnModeSecondary,
        btnLink,
      },
    ],
    both: [
      {
        btnType: "pax",
        btnMode: btnMode,
      },
      {
        btnType: "drv",
        btnMode: btnMode,
      },
    ],
    bothFood: [
      {
        btnType: "foodEaterOnline",
        btnModeSecondary: btnModeSecondary,
      },
      {
        btnType: "foodEater",
        btnMode: btnMode,
      },
    ],
    bothPrestamos: [
      {
        btnType: "prestamosPax",
        btnMode: btnMode,
      },
      {
        btnType: "prestamosDrv",
        btnMode: btnMode,
      },
    ],
    custom:
      btnArray?.map((item) => {
        return {
          btnText: item.text,
          btnLink: item.link,
          btnMode: btnMode,
        };
      }) || [],
    bothFoodEn: [
      {
        btnType: "foodEaterOnlineEn",
        btnMode: btnMode,
      },
      {
        btnType: "foodEaterEn",
        btnModeSecondary: btnModeSecondary,
      },
    ],
  };

  const GroupBtnType: BtnProps[] = btnType
    ? sectionsBtnConfig[btnType as sectionType] || sectionsBtnConfig["default"]
    : [];

  return (
    <>
      {GroupBtnType?.map(
        ({ btnType, btnMode, btnModeSecondary, btnLink, btnText }) => (
          <>
            <Btn
              btnType={btnType}
              btnMode={btnMode}
              btnModeSecondary={btnModeSecondary}
              btnLink={btnLink}
              btnText={btnText}
              key={btnText}
              {...GroupBtnType}
            />
            <br></br>
          </>
        )
      )}
    </>
  );
};

export default SectionBtn;
