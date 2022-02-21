import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const Breadcrumb = () => {
  const { pathname } = useLocation();
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
                <Link to="/cl/" className="hover:text-blue-700">
                  <FontAwesomeIcon
                    size="1x"
                    className="mr-2"
                    icon={faHome}
                  ></FontAwesomeIcon>
                  home
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
