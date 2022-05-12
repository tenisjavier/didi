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
    { title: "Artículos", link: "/ar/articulos/" },
  ],
  pe: [
    { title: "Pasajero", link: "/pe/pasajero/" },
    { title: "Socio Conductor", link: "/pe/driver/" },
    { title: "Lugares", link: "/pe/lugares/" },
    { title: "DiDi Taxi", link: "/pe/taxi/" },
    { title: "Seguridad", link: "/pe/seguridad/" },
    { title: "Artículos", link: "/pe/articulos/" },
  ],
};

const getFooterLinks = (country) => {
  return footerLinks[country];
};

export { getFooterLinks };
