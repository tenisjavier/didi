export interface FooterLinks {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: FooterLinks[];
}

const footerLinks: AllFooterInterface = {
  int: [],
  cl: [
    { text: "Pasajero", link: "/cl/pasajero/" },
    { text: "Socio Conductor", link: "/cl/driver/" },
    { text: "Lugares", link: "/cl/lugares/" },
    { text: "DiDi Taxi", link: "/cl/taxi/" },
    { text: "Seguridad", link: "/cl/seguridad/" },
    { text: "Legal", link: "/cl/legal/" },
  ],
  ar: [
    { text: "Pasajero", link: "/ar/pasajero/" },
    { text: "Socio Conductor", link: "/ar/driver/" },
    { text: "Lugares", link: "/ar/lugares/" },
    { text: "DiDi Taxi", link: "/ar/taxi/" },
    { text: "Seguridad", link: "/ar/seguridad/" },
    { text: "Legal", link: "/ar/legal/" },
  ],
  pe: [
    { text: "Pasajero", link: "/pe/pasajero/" },
    { text: "Socio Conductor", link: "/pe/driver/" },
    { text: "Lugares", link: "/pe/lugares/" },
    { text: "Seguridad", link: "/pe/seguridad/" },
    { text: "Legal", link: "/pe/legal/" },
  ],
  co: [
    { text: "Pasajero", link: "/co/pasajero/" },
    { text: "Socio Conductor", link: "/co/driver/" },
    { text: "Lugares", link: "/co/lugares/" },
    { text: "DiDi Taxi", link: "/co/taxi/" },
    { text: "Seguridad", link: "/co/seguridad/" },
    { text: "Legal", link: "/co/legal/" },
  ],
  au: [
    { text: "DiDi Rider", link: "/au/rider/" },
    { text: "DiDi Driver", link: "/au/driver/" },
    { text: "DiDi Delivery", link: "/au/delivery/" },
    { text: "Places", link: "/au/places/" },
    { text: "Safety", link: "/au/safety/" },
    { text: "Legal", link: "/au/legal/" },
  ],
  pa: [],
};

const getFooterLinks = (countryCode: string): FooterLinks[] => {
  return footerLinks[countryCode];
};

export { getFooterLinks };
