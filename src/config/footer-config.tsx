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
    { text: "DiDi Moto", link: "/do/driver/moto/" },
    { text: "Seguridad", link: "/do/seguridad/" },
    { text: "Legal", link: "/do/legal/" },
  ],
  ec: [
    { text: "Pasajero", link: "/ec/pasajero/" },
    { text: "Socio Conductor", link: "/ec/driver/" },
    { text: "Seguridad", link: "/ec/seguridad/" },
    { text: "Legal", link: "/ec/legal/" },
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
  eg: [
    { text: "DiDi Rider", link: "/eg/rider/" },
    { text: "DiDi Driver", link: "/eg/driver/" },
  ],
  pa: [
    { text: "Conductor", link: "/pa/driver/" },
    { text: "Pasajero", link: "/cl/pasajero/" },
    { text: "Seguridad", link: "/pa/seguridad/" },
    { text: "Acerca de nosotros", link: "/pa/sobre-didi/" },
    { text: "Legal", link: "/pa/legal/" },
  ],
  cr: [
    { text: "Conductor", link: "/cr/driver/" },
    { text: "Usuario", link: "/cr/pasajero/" },
    { text: "Seguridad", link: "/cr/seguridad/" },
    { text: "Centro de ayuda", link: "/pa/centro-de-ayuda/" },
    { text: "Legal", link: "/cr/legal/" },
  ],
};

const getFooterLinks = (countryCode: string): FooterLinks[] => {
  return footerLinks[countryCode];
};

export { getFooterLinks };
