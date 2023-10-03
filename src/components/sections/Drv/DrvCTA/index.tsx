import React from "react";
import { t } from "../../../../context/countryContext";
import CTADriverSection, {
  CTADriverSectionProps,
} from "../../../CTADriverSection";

const VehicleSection = () => {
  const props: CTADriverSectionProps = {
    title: t("VehicleSection.title"),
    subTitle: t("VehicleSection.subTitle"),
    vehicles: t("VehicleSection.vehicles"),
    bulletTitle: t("VehicleSection.bulletTitle"),
    bulletDesc: t("VehicleSection.bulletDesc"),
    bulletFooter: t("VehicleSectionbulletFooter"),
    bulletsCar: t("VehicleSection.bulletsCar"),
    bulletsMotorcycle: t("VehicleSection.bulletsMotorcycle"),
    btnMode: t("VehicleSection.btnMode"),
    btnType: t("VehicleSection.btnType"),
  };

  return <CTADriverSection {...props}></CTADriverSection>;
};

export default VehicleSection;
