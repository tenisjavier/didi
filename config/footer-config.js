const footerLinks = {
  cl: [
    { title: "Pasajero", link: "/cl/pasajero/" },
    { title: "Socio Conductor", link: "/cl/driver/" },
    { title: "Lugares", link: "/cl/lugares/" },
    { title: "DiDi Taxi", link: "/cl/taxi/" },
    { title: "Seguridad", link: "/cl/seguridad/" },
    { title: "Guías", link: "/cl/guias/" },
    { title: "Artículos", link: "/cl/articulos/" },
  ],
};

const countries = [
  { name: "Argentina", link: "https://argentina.didiglobal.com/" },
  { name: "Australia", link: "https://australia.didiglobal.com/" },
  { name: "Brazil", link: "https://99app.com/" },
  { name: "Chile", link: "https://web.didiglobal.com/cl" },
  { name: "Colombia", link: "https://colombia.didiglobal.com/" },
  { name: "Ecuador", link: "https://ecuador.didiglobal.com/" },
  { name: "Panama", link: "https://panama.didiglobal.com/" },
  { name: "Costa Rica", link: "https://costarica.didiglobal.com/" },
  { name: "Japan", link: "https://chile.didiglobal.com/" },
  { name: "Egypt", link: "https://egypt.didiglobal.com/" },
  { name: "South Africa", link: "https://za.didiglobal.com/" },
  { name: "China", link: "https://www.didiglobal.com/" },
  { name: "New Zealand", link: "https://newzealand.didiglobal.com/" },
];

const getFooterLinks = (country) => {
  return footerLinks[country];
};

const getCountriesLinks = () => {
  return countries;
};

export { getFooterLinks, getCountriesLinks };
