// @desc: build the configuration for all the countries
// @return: array of configs objects

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const countries = [
  "Panama",
  "CostaRica",
  "Chile",
  "Argentina",
  "Peru",
  "Ecuador",
  // 'Mexico',
  "Colombia",
];

let wpConfig = [];
let getConfig = () => {
  countries.forEach((country) => {
    const typeName = "WP" + country.toUpperCase();
    const fieldName = "wp" + country;
    const url =
      "https://" + country.toLowerCase() + "." + process.env.WP_GRAPHQL_URL;

    wpConfig.push({
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName,
        // This is the field under which it's accessible
        fieldName,
        // URL to query from
        url,
      },
    });
  });

  return wpConfig;
};

module.exports.get = getConfig;
