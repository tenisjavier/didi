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
  return countryCode;
};

module.exports = {
  getCountries,
  getCountryCodes,
  getCountryFromUrl,
  getCountryCodeFromUrl,
};
