const path = require(`path`);
const fetch = require(`node-fetch`);
const { getCountries, getCountryCodes } = require("../config/countries-config");

const countryCodes = getCountryCodes();

// @desc: Create Routes from API for all countries and pass pageContext to template
// @return: null
const apiRoutesInit = async (graphql, createPage) => {
  const templatePath = path.resolve(`./src/templates/api-city.js`);
  const response = await fetch("https://countriesnow.space/api/v0.1/countries");
  const json = await response.json();
  const { data = [] } = json;

  for (const node of data) {
    const countryCode = countryCodes[node.country];

    if (countryCode) {
      for (const city of node.cities) {
        createPage({
          path: "/" + countryCode + "/driver/" + city.toLowerCase(),
          component: templatePath,
          context: {
            id: city,
            city: city,
          },
        });
      }
    }
  }
};

module.exports.init = apiRoutesInit;
