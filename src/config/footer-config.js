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
    { title: "Legal", link: "/ar/legal/" },
  ],
  pe: [
    { title: "Pasajero", link: "/pe/pasajero/" },
    { title: "Socio Conductor", link: "/pe/driver/" },
    { title: "Lugares", link: "/pe/lugares/" },
    { title: "Seguridad", link: "/pe/seguridad/" },
    { title: "Legal", link: "/pe/legal/" },
  ],
};

const getFooterLinks = (country) => {
  return footerLinks[country];
};

export { getFooterLinks };
