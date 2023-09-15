export interface FooterLinks {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: FooterLinks[];
}

const footerLinks: AllFooterInterface = {
  es: [],
  en: [],
  cl: [
    { text: "Socio Conductor", link: "/cl/conductor/" },
    { text: "Pasajero", link: "/cl/pasajero/" },
    { text: "Lugares", link: "/cl/lugares/" },
    { text: "Seguridad", link: "/cl/seguridad/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/cl/legal/" },
    { text: "Newsroom", link: "/cl/newsroom/" },
    { text: "Trabaja en DiDi", link: "#" },
  ],
  mx: [
    { text: "Socio Conductor", link: "/mx/conductor/" },
    { text: "Pasajero", link: "/mx/pasajero/" },
    { text: "DiDi Fleet", link: "/mx/didi-fleet/" },
    { text: "DiDi Pay", link: "/mx/didipay/" },
    { text: "Legal", link: "/mx/legal/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Newsroom", link: "/mx/newsroom/" },
  ],
  do: [
    { text: "Socio Conductor", link: "/do/conductor/" },
    { text: "Pasajero", link: "/do/pasajero/" },
    { text: "DiDi Moto", link: "/do/conductor/moto/" },
    { text: "Promociones", link: "/do/promociones/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/do/legal/" },
    { text: "Newsroom", link: "/do/newsroom/" },
  ],
  ec: [
    { text: "Socio Conductor", link: "/ec/conductor/" },
    { text: "Pasajero", link: "/ec/pasajero/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/ec/legal/" },
    { text: "Newsroom", link: "/ec/newsroom/" },
  ],
  ar: [
    { text: "Pasajero", link: "/ar/pasajero/" },
    { text: "Socio Conductor", link: "/ar/conductor/" },
    { text: "Lugares", link: "/ar/lugares/" },
    { text: "DiDi Taxi", link: "/ar/taxi/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/ar/legal/" },
    { text: "Newsroom", link: "/ar/newsroom/" },
  ],
  pe: [
    { text: "Socio Conductor", link: "/pe/conductor/" },
    { text: "Pasajero", link: "/pe/pasajero/" },
    { text: "Lugares", link: "/pe/lugares/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/pe/legal/" },
    { text: "Newsroom", link: "/pe/newsroom/" },
  ],
  co: [
    { text: "DiDi Pasajero", link: "/co/pasajero/" },
    { text: "DiDi Conductor", link: "/co/conductor/" },
    { text: "DiDi Taxi", link: "/co/taxi/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/co/legal/" },
    { text: "Newsroom", link: "/co/newsroom/" },
  ],
  au: [
    { text: "DiDi Driver", link: "/au/driver/" },
    { text: "DiDi Rider", link: "/au/rider/" },
    { text: "Blog", link: "/au/blog/" },
    { text: "Offers", link: "/au/offers/" },
    { text: "Careers", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/au/legal/" },
    { text: "Contact", link: "/au/contact/" },
  ],
  eg: [
    { text: "السائق", link: "/eg/driver/" },
    { text: "الراكب", link: "/eg/rider/" },
  ],
  pa: [
    { text: "Conductor", link: "/pa/conductor/" },
    { text: "Pasajero", link: "/pa/pasajero/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/pa/legal/" },
    { text: "Newsroom", link: "/pa/newsroom/" },
  ],
  cr: [
    { text: "Conductor", link: "/cr/conductor/" },
    { text: "Usuario", link: "/cr/pasajero/" },
    { text: "Carreras", link: "https://careers.didiglobal.com/" },
    { text: "Legal", link: "/cr/legal/" },
    { text: "Newsroom", link: "/cr/newsroom/" },
  ],
  nz: [
    { text: "DiDi Driver", link: "/nz/driver/" },
    { text: "DiDi Rider", link: "/nz/rider/" },
    { text: "Blog", link: "/nz/blog/" },
    { text: "Careers", link: "https://careers.didiglobal.com/" },
    { text: "Offers", link: "/nz/offers/" },
    { text: "Legal", link: "/nz/legal/" },
  ],
};

const getFooterLinks = (countryCode: string): FooterLinks[] => {
  return footerLinks[countryCode];
};

export { getFooterLinks };
