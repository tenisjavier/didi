import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const Breadcrumb = () => {
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
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
          if (countryCode == "eg") {
            var itemPath;
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

                  {itemPath}
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
                  to={"/" + directories.slice(0, index + 1).join("/") + "/"}
                  className=" hover:text-blue-700"
                >
                  {itemPath}
                </Link>
              </li>
            );
          } else if (countryCode == "ru") {
            var itemPath;
            switch (decodeURI(dir)) {
              case "about-didi":
                itemPath = "О нас";
                break;
              case "rider":
                itemPath = "Пассажир";
                break;
              case "driver":
                itemPath = "Водитель";
                break;
              case "driver-partner":
                itemPath = "Водитель-партнер";
                break;
              case "safety":
                itemPath = "Безопасность";
                break;
              case "taxi":
                itemPath = "Водитель таксопарка";
                break;
              case "fleet":
                itemPath = "Владельцам таксопарков";
                break;
              case "legal":
                itemPath = "Круто";
                break;
              case "newsroom":
                itemPath = "отдел новостей";
                break;
              default:
                itemPath = decodeURI(dir);
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

                  {itemPath}
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
                  to={"/" + directories.slice(0, index + 1).join("/") + "/"}
                  className=" hover:text-blue-700"
                >
                  {itemPath}
                </Link>
              </li>
            );
          } else {
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
                  to={"/" + directories.slice(0, index + 1).join("/") + "/"}
                  className=" hover:text-blue-700"
                >
                  {dir.replace(/(-)|(_.*)/g, " ")}
                </Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
