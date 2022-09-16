import React, { useEffect } from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import Card, { CardProps } from "./Card";
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

  var currentPage = 1;

  function goToPage(toPage: number) {
    articles.map((card, index) => {
      const articleCard = document.getElementsByClassName("card-" + index);
      Array.prototype.forEach.call(articleCard, function (element) {
        element.classList.add("hidden");
      });
    });

    document
      .getElementById("page-item-" + currentPage + "")
      ?.classList.remove("active");
    currentPage = toPage;
    document
      .getElementById("page-item-" + currentPage + "")
      ?.classList.add("active");

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
    goToPage(1);
  });

  for (let i = 0; i < numberPages; i++) {
    pageLinks.push(i + 1);
  }
  return (
    <ul className="pagination">
      <li key={1500} className="page-item" onClick={(e) => goToPage(1)}>
        <FontAwesomeIcon icon={faAnglesLeft} className="w-3" />
      </li>
      <li
        key={1501}
        className="page-item"
        onClick={(e) => goToPage(currentPage - 1 == 0 ? 1 : currentPage - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="w-3" />
      </li>
      {pageLinks.map((links, index) => {
        return (
          <li
            key={index}
            className="page-item"
            id={`page-item-${index + 1}`}
            onClick={(e) => goToPage(index + 1)}
          >
            {index + 1}
          </li>
        );
      })}
      <li
        key={1502}
        className="page-item"
        onClick={(e) =>
          goToPage(
            currentPage + 1 > pageLinks.length
              ? pageLinks.length
              : currentPage + 1
          )
        }
      >
        <FontAwesomeIcon icon={faAngleRight} className="w-3" />
      </li>
      <li
        key={1503}
        className="page-item"
        onClick={(e) => goToPage(pageLinks.length)}
      >
        <FontAwesomeIcon icon={faAnglesRight} className="w-3" />
      </li>
    </ul>
  );
};

export default Pagination;
