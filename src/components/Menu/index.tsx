import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { useCountry } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMenuLinks, SingleMenuItem } from "../../config/menu-config";
import { getMenuLinksFood } from "../../config/menu-food-config";
import { getMenuLinksPay } from "../../config/menu-pay-config";
import NavList from "./NavList";
import { graphql, useStaticQuery } from "gatsby";
import { getMenuLinksCard } from "../../config/menu-card-config";
import useScreenSize from "../../hooks/useScreenSize";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const screenSize = useScreenSize();
  const countryCode = useCountry().code;
  const menuLinks: SingleMenuItem[] = getMenuLinks(countryCode);
  const menuLinksFood: SingleMenuItem[] = getMenuLinksFood(countryCode);
  const menuLinksPay: SingleMenuItem[] = getMenuLinksPay(countryCode);
  const menuLinksCard: SingleMenuItem[] = getMenuLinksCard(countryCode);
  const { pathname } = useLocation();

  let links = menuLinks;
  if (pathname.includes("food")) links = menuLinksFood;
  if (pathname.includes("/didipay/")) links = menuLinksPay;
  if (pathname.includes("tarjeta-de-credito")) links = menuLinksCard;

  useEffect(() => {
    if (screenSize > 1024) {
      setMenuOpen(false);
    }
  }, [screenSize]);

  return (
    <div className="flex h-full items-center">
      <FontAwesomeIcon
        icon={faBars}
        className="m-4 cursor-pointer text-gray-primary lg:hidden w-5 "
        size="lg"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />
      <div
        className={
          "w-full h-auto lg:h-full " +
          (menuOpen
            ? "fixed left-0 top-14 right-0 bottom-0 overflow-y-scroll lg:absolute  bg-white "
            : "hidden ") +
          "lg:block"
        }
      >
        <ul
          className={`${menuOpen ? "min-h-[100vh] pb-20" : ""
            } m-0 p-0 flex flex-col items-center border-x-0 border-b-0  border-t border-solid border-orange-primary xl:bg-white bg-[#F2F2F2] lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:px-5 gap-4`}
        >
          <NavListQuery pathName={pathname} links={links} countryCode={countryCode} />
        </ul>
      </div>
    </div>
  );
};

export default Menu;

type IconType = {
  id: string;
  title: string;
  description: string;
  gatsbyImageData: any;
};

function NavListQuery({
  links,
  countryCode,
  pathName
}: {
  links: SingleMenuItem[];
  countryCode: string;
  pathName?: string;
}) {
  const data = useStaticQuery(graphql`
    query allContentfulAsset {
      allContentfulAsset(
        filter: {
          title: {
            in: [
              "menu-drv"
              "menu-financial-service"
              "menu-about"
              "menu-food"
              "menu-help"
              "menu-pax"
              "menu-delivery"
              "menu-gift-card"
              "menu-pay"
              "menu-delivery-box"
              "menu-restaurant"
              "menu-contact"
              "menu-blog"
              "menu-more"
              "menu-phone-recharge"
            ]
          }
        }
      ) {
        nodes {
          id
          title
          description
          gatsbyImageData
        }
      }
    }
  `);

  const iconsData = data?.allContentfulAsset?.nodes as IconType[];

  const formatLinks = links?.map((item) => {
    const icon = iconsData.find((icon) => icon.title === item.icon);
    return {
      dropMenu: item.dropMenu,
      url: item.url,
      text: item.text,
      icon: icon,
    };
  });

  return <NavList pathName={pathName} links={formatLinks} countryCode={countryCode} />;
}
