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
  do: [
    { text: "Pasajero", link: "/do/pasajero/" },
    { text: "Socio Conductor", link: "/do/driver/" },
    { text: "Lugares", link: "/do/lugares/" },
    { text: "DiDi Moto", link: "/do/driver/moto/" },
    { text: "Seguridad", link: "/do/seguridad/" },
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
    { text: "Blog", link: "/au/blog/" },
    { text: "Career", link: "/au/career/" },
    { text: "Offers", link: "/au/offers/" },
    { text: "Legal", link: "/au/legal/" },
  ],
};

const getFooterLinks = (countryCode: string): FooterLinks[] => {
  return footerLinks[countryCode];
};

export { getFooterLinks };
