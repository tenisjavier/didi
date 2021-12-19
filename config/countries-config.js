// @desc: utility library for countries

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

const countryCodes = {
  Panama: "pa",
  CostaRica: "cr",
  Chile: "cl",
  Argentina: "ar",
  Peru: "pe",
  Ecuador: "ec",
  // {Mexico:'mx'},
  Colombia: "co",
};

// @return: array with all countries
const getCountries = () => {
  return countries;
};

// @return: object {country:code}
const getCountryCodes = () => {
  return countryCodes;
};

// @desc: from the current url path it will extract the country code
// @return: countrycode
const getCountryCodeFromUrl = () => {
  return window.location.pathname.split("/")[1];
};

module.exports = { getCountries, getCountryCodes, getCountryCodeFromUrl };
