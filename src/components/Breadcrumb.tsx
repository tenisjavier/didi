import React from "react";
import { useCountry } from "../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const Breadcrumb = () => {
  const countryCode = useCountry().code;
  const { pathname } = useLocation();

  const directories = pathname.split("/").filter((item) => {
    return item !== "";
  });

  return (
    <nav className="bg-grey-light absolute top-24 z-10 hidden w-full  text-white justify-center rounded-md md:flex  md:justify-between px-6 py-4">
      <ol className="flex list-none p-0 m-0">
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
          } else if (countryCode == "hk") {
            var itemPath;
            switch (decodeURI(dir)) {
              case "ride":
                itemPath = "騎";
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
      {pathname.includes("/thejourney/") && (
        <ol className="flex list-none p-0 m-0">
          <li>
            <Link to="/thejourney/"> EN </Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/es/thejourney/"> ES </Link>
          </li>
        </ol>
      )}
    </nav>
  );
};

export default Breadcrumb;
