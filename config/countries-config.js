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

const getCountries = () => {
  return countries;
};

const getCountryCodes = () => {
  return countryCodes;
};

module.exports = { getCountries, getCountryCodes };
