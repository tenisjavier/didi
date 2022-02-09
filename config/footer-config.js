const footerLinks = {
  cl: [
    { title: "Passajero", link: "/cl/pasajero/" },
    { title: "Socio Conductor", link: "/cl/driver/" },
    { title: "Lugares", link: "/cl/direcciones/" },
    { title: "DIDI Taxi", link: "/cl/taxi/" },
    { title: "Seguridad", link: "/cl/seguridad/" },
    { title: "Guías", link: "/cl/guias" },
  ],
};

const countries = [
  { name: "Argentina", link: "https://chile.didiglobal.com/" },
  { name: "Australia", link: "https://chile.didiglobal.com/" },
  { name: "Brasil", link: "https://chile.didiglobal.com/" },
  { name: "Chile", link: "https://chile.didiglobal.com/" },
  { name: "Columbia", link: "https://chile.didiglobal.com/" },
  { name: "Ecuador", link: "https://chile.didiglobal.com/" },
  { name: "Japon", link: "https://chile.didiglobal.com/" },
  { name: "Ecuador", link: "https://chile.didiglobal.com/" },
  { name: "Ecuador", link: "https://chile.didiglobal.com/" },
  { name: "Ecuador", link: "https://chile.didiglobal.com/" },
  { name: "Ecuador", link: "https://chile.didiglobal.com/" },
];

const getFooterLinks = (country) => {
  return footerLinks[country];
};

const getCountriesLinks = () => {
  return countries;
};

export { getFooterLinks, getCountriesLinks };
