// @desc: utility library for countries
const countries = [
  "Argentina",
  "Australia",
  "Brazil",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "CostaRica",
  "Ecuador",
  "Egypt",
  "Japan",
  "Panama",
  "Peru",
  "Mexico",
  "New Zealand",
  "South Africa",
];

const countryCodes = {
  Argentina: "ar",
  Australia: "au",
  Brazil: "br",
  Chile: "cl",
  China: "cn",
  Colombia: "co",
  CostaRica: "cr",
  Ecuador: "ec",
  Egypt: "eg",
  Japan: "jp",
  Panama: "pa",
  Peru: "pe",
  Mexico: "mx",
  NewZealand: "nz",
  SouthAfrica: "za",
};

// @return: array with all countries
const getCountries = () => {
  return countries;
};

// @return: object {country:code}
const getCountryCodes = () => {
  return countryCodes;
};

// @desc: from the current url path it will extract the country
// @return: country name
const getCountryFromUrl = (path) => {
  const countryCode = path.split("/")[1];
  return (
    Object.keys(countryCodes).find(
      (key) => countryCodes[key] === countryCode
    ) || "Global"
  );
};

// @desc: from the current url path it will extract the country code
// @return: countrycode
const getCountryCodeFromUrl = (path) => {
  const countryCode = path.split("/")[1];
  return countryCode ? countryCode : "int";
};

module.exports = {
  getCountries,
  getCountryCodes,
  getCountryFromUrl,
  getCountryCodeFromUrl,
};
