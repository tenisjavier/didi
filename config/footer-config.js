const footerLinks = {
  int: [],
  cl: [
    { title: "Pasajero", link: "/cl/pasajero/" },
    { title: "Socio Conductor", link: "/cl/driver/" },
    { title: "Lugares", link: "/cl/lugares/" },
    { title: "DiDi Taxi", link: "/cl/taxi/" },
    { title: "Seguridad", link: "/cl/seguridad/" },
    { title: "Legal", link: "/cl/legal/" },
  ],
  ar: [
    { title: "Pasajero", link: "/ar/pasajero/" },
    { title: "Socio Conductor", link: "/ar/driver/" },
    { title: "Lugares", link: "/ar/lugares/" },
    { title: "DiDi Taxi", link: "/ar/taxi/" },
    { title: "Seguridad", link: "/ar/seguridad/" },
    { title: "Guias", link: "/ar/guias/" },
    { title: "Artículos", link: "/ar/articulos/" },
  ],
};

const countries = [
  { name: "Argentina", link: "https://argentina.didiglobal.com/" },
  { name: "Australia", link: "https://australia.didiglobal.com/" },
  { name: "Brazil", link: "https://99app.com/" },
  { name: "Chile", link: "/cl/" },
  { name: "China", link: "https://www.didiglobal.com/" },
  { name: "Colombia", link: "https://colombia.didiglobal.com/" },
  { name: "Costa Rica", link: "https://costarica.didiglobal.com/" },
  { name: "Ecuador", link: "https://ecuador.didiglobal.com/" },
  { name: "Egypt", link: "https://egypt.didiglobal.com/" },
  { name: "Japan", link: "https://chile.didiglobal.com/" },
  { name: "Panama", link: "https://panama.didiglobal.com/" },
  { name: "Peru", link: "https://peru.didiglobal.com/" },
  { name: "Russia", link: "https://russia.didiglobal.com/" },
  { name: "Mexico", link: "https://mexico.didiglobal.com/" },
  { name: "New Zealand", link: "https://newzealand.didiglobal.com/" },
];

const getFooterLinks = (country) => {
  return footerLinks[country];
};

const getCountriesLinks = () => {
  return countries;
};

export { getFooterLinks, getCountriesLinks };
