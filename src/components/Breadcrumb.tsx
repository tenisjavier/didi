import React from "react";
import { useCountry } from "../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

export interface BreadcrumbProps {
  customBreadcrumb?: {
    link: string;
    text: string;
  }[];
}

const Breadcrumb = ({ customBreadcrumb }: BreadcrumbProps) => {
  const countryCode = useCountry().code;
  const { pathname } = useLocation();

  const directories = pathname.split("/").filter((item) => {
    return item !== "";
  });

  const isNotLink = ["features"];

  //* if cb is passed through Layout will replace actual pathname breadcrumb
  if (customBreadcrumb)
    return (
      <nav className="bg-grey-light absolute top-24 z-10 hidden w-full  text-white justify-center rounded-md md:flex  md:justify-between px-6 py-4">
        <ol className="flex list-none p-0 m-0">
          <li>
            <Link to={`/${countryCode}/`} className="hover:text-blue-700">
              <FontAwesomeIcon
                size="1x"
                className="mr-2 w-4"
                icon={faHome}
              ></FontAwesomeIcon>
              {"DiDi"}
            </Link>
          </li>
          {customBreadcrumb.map((item, index) => (
            <li key={index}>
              <>
                <span className="mx-2 ">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    size="1x"
                    className="w-2"
                  ></FontAwesomeIcon>
                </span>

                {index !== directories.length - 1 ? (
                  <Link to={item.link} className=" hover:text-blue-700">
                    {item.text}
                  </Link>
                ) : (
                  item.text
                )}
              </>
            </li>
          ))}
        </ol>
      </nav>
    );

  //* if custom breadcrumb is not passed then pathname breadcrumb take place
  //* special rules for RU, EG
  return (
    <nav className="bg-grey-light absolute top-24 z-10 hidden w-full  text-white justify-center rounded-md md:flex  md:justify-between px-6 py-4">
      <ol className="flex list-none p-0 m-0">
        {directories.map((dir, index) => {
          let itemPath = dir.replace(/(-)|(_.*)/g, " ");
          if (countryCode == "eg") {
            switch (dir) {
              case "about-us":
                itemPath = "نبذة عنا";
                break;
              case "help-center":
                itemPath = "مركز المساعدة";
                break;
              case "rider":
                itemPath = "الراكب";
                break;
              case "driver":
                itemPath = "السائق";
                break;
              case "driver-starter-manual":
                itemPath = "دليل بدء شريك";
                break;
              default:
                itemPath = dir;
            }
          }

          if (index === 0) {
            return (
              <li key={index}>
                <Link to={`/${countryCode}/`} className="hover:text-blue-700">
                  <FontAwesomeIcon
                    size="1x"
                    className="mr-2 w-4"
                    icon={faHome}
                  ></FontAwesomeIcon>
                  {"DiDi"}
                </Link>
              </li>
            );
          }

          return (
            <li key={index}>
              <>
                <span className="mx-2 ">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    size="1x"
                    className="w-2"
                  ></FontAwesomeIcon>
                </span>

                {index !== directories.length - 1 &&
                !isNotLink.includes(dir) ? (
                  <Link
                    to={"/" + directories.slice(0, index + 1).join("/") + "/"}
                    className=" hover:text-blue-700"
                  >
                    {itemPath}
                  </Link>
                ) : (
                  itemPath
                )}
              </>
            </li>
          );
        })}
      </ol>
      {/* {pathname.includes("/mx/food/") &&
        !pathname.includes("/mx/food/ciudad/") &&
        !pathname.includes("/mx/food/colonia/") &&
        !pathname.includes("/mx/food/blog/") &&
        !pathname.includes("/mx/food/clubdidi/") &&
        !pathname.includes("/mx/food/privacidad/") &&
        !pathname.includes("/mx/food/renta-de-equipo/") &&
        !pathname.includes("/mx/food/terminos-y-condiciones/") &&
        !pathname.includes("/mx/food/store-food-app/") &&
        !pathname.includes("/mx/food/preguntas-frecuentes/") && (
          <ol className="flex list-none p-0 m-0">
            <li>
              <Link to="/mx/food/en/"> EN </Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/mx/food/"> ES </Link>
            </li>
          </ol>
        )} */}
    </nav>
  );
};

export default Breadcrumb;
