import React, { useEffect } from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import Card, { CardProps } from "./Card";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAnglesLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  postsPerPage: number;
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        excerpt: string;
        featuredImage: ImageDataLike;
      }[];
    };
  };
}

const Pagination = ({ data, postsPerPage }: PaginationProps) => {
  const articles = data.allContentfulArticle.nodes;
  const perPage = postsPerPage;
  const numberPages = Math.ceil(articles.length / perPage);
  const pageLinks = [];
  const currentURL = window.location.origin + window.location.pathname;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlPage = Number(urlParams.get("page"));
  
  var currentPage = 1;
  if(urlParams.get("page") != null && Number(urlParams.get("page")) <= numberPages) {
    currentPage = urlPage;
  }

  function goToPage(toPage: number) {
    articles.map((card, index) => {
      const articleCard = document.getElementsByClassName("card-" + index);
      Array.prototype.forEach.call(articleCard, function (element) {
        element.classList.add("hidden");
      });
    });

    Array.from(document.querySelectorAll('.page-item.active')).forEach((el) => el.classList.remove('active'));
    currentPage = toPage;
    document.getElementById("page-item-" + currentPage + "")?.classList.add("active");

    const end = toPage * postsPerPage;
    const start = end - postsPerPage;

    articles.map((card, index) => {
      if (index >= start && index < end) {
        const articleCard = document.getElementsByClassName("card-" + index);
        Array.prototype.forEach.call(articleCard, function (element) {
          element.classList.remove("hidden");
        });
      }
    });

    return true;
  }

  useEffect(() => {
    goToPage(currentPage);
  });

  for (let i = 0; i < numberPages; i++) {
    pageLinks.push(i + 1);
  }
  return (
    <ul className="pagination">
      <Link to={currentURL+"?page="+1}>
        <li key={1500} className="page-item">
          <FontAwesomeIcon icon={faAnglesLeft} className="w-3" />
        </li>
      </Link>
      <Link to={currentURL+"?page="+(currentPage - 1 == 0 ? 1 : currentPage - 1)}>
        <li
          key={1501}
          className="page-item"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="w-3" />
        </li>
      </Link>
      {pageLinks.map((links, index) => {
        return (
          <Link to={currentURL+"?page="+(Number(index) + 1)}>
            <li
              key={index}
              className="page-item"
              id={`page-item-${index + 1}`}
            >
              {index + 1}
          </li>
          </Link>
        );
      })}
      <Link to={currentURL+"?page="+(currentPage + 1 > pageLinks.length ? pageLinks.length : currentPage + 1)}>
        <li
          key={1502}
          className="page-item"
        >
          <FontAwesomeIcon icon={faAngleRight} className="w-3" />
        </li>
      </Link>
      <Link to={currentURL+"?page="+pageLinks.length}>
        <li
          key={1503}
          className="page-item"
        >
          <FontAwesomeIcon icon={faAnglesRight} className="w-3" />
        </li>
      </Link>
    </ul>
  );
};

export default Pagination;
