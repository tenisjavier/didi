import React from "react";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const DrvCityList = ({ data, title, desc }) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: "/cl/driver/conductor-en-" + slugify(city.name),
    };
  });

  const props = {
    title: title,
    desc: desc,
    bgColor: "bg-white",
    textColor: "gray-primary",
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default DrvCityList;
