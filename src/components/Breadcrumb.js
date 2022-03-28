import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { getCountryCodeFromUrl } from "../../config/countries-config";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const countryCode = getCountryCodeFromUrl(pathname);
  const directories = pathname.split("/").filter((item) => {
    return item !== "";
  });

  return (
    <nav className="bg-grey-light absolute top-24 z-10 hidden w-full justify-center rounded-md md:flex  md:justify-start">
      <ol className="flex list-none text-white">
        {directories.map((dir, index) => {
          if (index === 0) {
            return (
              <li key={index}>
                <Link to={`/${countryCode}/`} className="hover:text-blue-700">
                  <FontAwesomeIcon
                    size="1x"
                    className="mr-2 w-4"
                    icon={faHome}
                  ></FontAwesomeIcon>
                  {"Inicio"}
                </Link>
              </li>
            );
          }

          if (index === directories.length - 1) {
            return (
              <li key={index}>
                <span className="mx-2">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    size="1x"
                    className="w-2"
                  ></FontAwesomeIcon>
                </span>

                {dir.replace(/(-)|(_.*)/g, " ")}
              </li>
            );
          }
          return (
            <li key={index}>
              <span className="mx-2 ">
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  size="1x"
                  className="w-2"
                ></FontAwesomeIcon>
              </span>

              <Link
                to={"../".repeat(directories.length - 1 - index)}
                className=" hover:text-blue-700"
              >
                {dir.replace(/(-)|(_.*)/g, " ")}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
