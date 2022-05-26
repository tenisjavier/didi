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
  co: [
    { title: "Pasajero", link: "/co/pasajero/" },
    { title: "Socio Conductor", link: "/co/driver/" },
    { title: "Lugares", link: "/co/lugares/" },
    { title: "DiDi Taxi", link: "/co/taxi/" },
    { title: "Seguridad", link: "/co/seguridad/" },
    { title: "Legal", link: "/co/legal/" },
  ],
  au: [
    { title: "DiDi Rider", link: "/au/rider/" },
    { title: "DiDi Driver", link: "/au/driver/" },
    { title: "DiDi Delivery", link: "/au/delivery/" },
    { title: "Places", link: "/au/places/" },
    { title: "Safety", link: "/au/safety/" },
    { title: "Legal", link: "/au/legal/" },
  ],
};

const getFooterLinks = (country) => {
  return footerLinks[country];
};

export { getFooterLinks };
