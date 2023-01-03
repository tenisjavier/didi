// @desc: utility library for menu Links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItem {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItem[];
}

const menuLinks: AllMenuInterface = {
  es: [
    {
      text: "About DiDi",
      url: "#",
      dropMenu: [
        {
          text: "Contact Us",
          url: "/contact/",
        },
        {
          text: "Suppliers",
          url: "/suppliers/",
        },
      ],
    },
  ],
  en: [
    {
      text: "About DiDi",
      url: "#",
      dropMenu: [
        {
          text: "Contact Us",
          url: "/contact/",
        },
        {
          text: "Suppliers",
          url: "/suppliers/",
        },
      ],
    },
  ],
  cl: [
    {
      text: "DiDi Pasajero",
      url: "/cl/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/cl/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/cl/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
        },
        {
          text: "Club DiDiMás+",
          url: "/cl/didimas/",
        },
        {
          text: "Ciudades Operativas",
          url: "/cl/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/cl/taxi/",
    },
    {
      text: "DiDi Food",
      url: "/cl/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/cl/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/cl/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/cl/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/cl/food/contacto/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/cl/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/cl/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/cl/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/cl/guias/",
        },
        {
          text: "Artículos",
          url: "/cl/articulos/",
        },
      ],
    },
  ],
  hk: [
    {
      text: "乘搭",
      url: "/hk/",
      dropMenu: [
        {
          text: "的士服務",
          url: "/hk/ride/的士服務",
        },
        {
          text: "粵港跨境專車服務",
          url: "/hk/ride/粵港跨境專車服務",
        },
      ]
    },
    {
      text: "成為司機夥伴",
      url: "/hk/taxi-driver/",
    },
    {
      text: "防疫措施",
      url: "/hk/coronavirus/",
    },
    {
      text: "最新優惠",
      url: "",
      dropMenu: [
        {
          text: "遠DD, call DiDi! 程程85折!",
          url: "/hk/遠dd-call-didi-程程85折"
        }
      ]
    }
  ],
  mx: [
    {
      text: "DiDi Conductor",
      url: "/mx/conductor/",
      dropMenu: [
        {
          text: "Requisitos para Conductores",
          url: "/mx/conductor/requisitos-para-conducir/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
        },
        {
          text: "Gananciar en DiDi",
          url: "/mx/conductor/calcula-tus-ganancias/",
        },
        {
          text: "DiDi Flex",
          url: "/mx/conductor/didi-flex/",
        },
        {
          text: "Club DiDi",
          url: "/mx/clubdidi/",
        },
        {
          text: "DiDi Amigo",
          url: "/mx/conductor/didi-amigo/",
        },
        {
          text: "Ciudades Disponibles",
          url: "/mx/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/mx/pasajero/",
    },
    {
      text: "DiDi Fleet",
      url: "/mx/didi-fleet/",
    },
    {
      text: "DiDi Pay",
      url: "/mx/didipay/",
      dropMenu: [
        {
          text: "DiDi Pay Usuarios",
          url: "/mx/didipay/",
        },
        {
          text: "Preguntas Frecuentes",
          url: "/mx/didipay-preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "DiDi Préstamos",
      url: "https://prestamos.didiglobal.com",
    },
    {
      text: "DiDi Food",
      url: "/mx/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/mx/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/mx/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/mx/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/mx/food/contacto/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/mx/nosotros/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/mx/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/mx/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/mx/guias/",
        },
        {
          text: "Artículos",
          url: "/mx/articulos/",
        },
      ],
    },
  ],
  ar: [
    {
      text: "DiDi Pasajero",
      url: "/ar/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/ar/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/ar/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/ar/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Fleet",
      url: "/ar/didi-fleet/",
    },
    {
      text: "DiDi Taxi",
      url: "/ar/taxi/",
    },
    {
      text: "DiDi Moto",
      url: "/ar/driver/moto/",
    },
    {
      text: "Sobre DiDi",
      url: "/ar/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/ar/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/ar/centro-de-ayuda/",
        },
        {
          text: "Contacto",
          url: "/ar/contacto/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/ar/guias/",
        },
        {
          text: "Artículos",
          url: "/ar/articulos/",
        },
      ],
    },
  ],
  pe: [
    {
      text: "DiDi Pasajero",
      url: "/pe/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/pe/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/pe/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/pe/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Food",
      url: "/pe/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/pe/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/pe/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/pe/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/pe/food/contacto/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/pe/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/pe/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/pe/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/pe/guias/",
        },
        {
          text: "Artículos",
          url: "/pe/articulos/",
        },
      ],
    },
  ],
  co: [
    {
      text: "DiDi Pasajero",
      url: "/co/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/co/driver/",
      dropMenu: [
        {
          text: "Arrendador",
          url: "/co/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
        {
          text: "DiDiMás+",
          url: "/co/didimas/",
        },
        {
          text: "Ciudades Disponibles",
          url: "/co/ciudades/",
        },
        {
          text: "Historias de Éxito",
          url: "/co/driver/historias-de-exito/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/co/taxi/",
    },
    {
      text: "DiDi Fleet",
      url: "/co/didi-fleet/",
    },
    {
      text: "DiDi Food",
      url: "/co/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/co/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/co/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/co/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/co/food/contacto/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/co/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/co/seguridad/",
        },
        {
          text: "Seguridad para Mujeres",
          url: "/co/seguridad-para-mujeres/",
        },
        {
          text: "Centro de Ayuda",
          url: "/co/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/co/guias/",
        },
        {
          text: "Artículos",
          url: "/co/articulos/",
        },
      ],
    },
  ],
  au: [
    {
      text: "DiDi Rider",
      url: "/au/rider/",
      dropMenu: [
        {
          text: "Rider",
          url: "/au/rider/",
        },
        {
          text: "Rider Help",
          url: "/au/rider/help/",
        },
      ],
    },
    {
      text: "DiDi Driver",
      url: "/au/driver/",
      dropMenu: [
        {
          text: "Driver",
          url: "/au/driver/",
        },
        {
          text: "Sign Up",
          url: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
        },
        {
          text: "DiDi Advance",
          url: "/au/didi-advance/",
        },
        {
          text: "Driver Help",
          url: "/au/driver/help/",
        },
        {
          text: "Cities",
          url: "/au/cities/",
        },
      ],
    },
    {
      text: "DiDi Delivery",
      url: "/au/delivery/",
      dropMenu: [
        {
          text: "Personal",
          url: "/au/delivery/personal/",
        },
        {
          text: "Business",
          url: "/au/delivery/business/",
        },
        {
          text: "Delivery for Drivers",
          url: "/au/driver/didi-delivery-australia/",
        },
        {
          text: "Delivery Help",
          url: "/au/delivery/help/",
        },
      ],
    },
    {
      text: "Safety",
      url: "/au/safety/",
      dropMenu: [
        {
          text: "Driver Safety",
          url: "/au/safety/driver-safety/",
        },
        {
          text: "Rider Safety",
          url: "/au/safety/rider-safety/",
        },
        {
          text: "DiDi Sal Rider",
          url: "/au/features/didisal/",
        },
        {
          text: "Fatigue Prevention Driver",
          url: "/au/features/fatigue-prevention-feature/",
        },
      ],
    },
    {
      text: "About DiDi",
      url: "/au/about-us/",
      dropMenu: [
        {
          text: "Help Center",
          url: "/au/help-center/",
        },
        {
          text: "Contact",
          url: "/au/contact/",
        },
      ],
    },
  ],
  eg: [
    {
      text: "نبذة عنا",
      url: "/eg/about-us/",
    },
    {
      text: "الراكب",
      url: "/eg/rider/",
    },
    {
      text: "السائق",
      url: "/eg/driver/",
      dropMenu: [
        {
          text: "دليل بدء شريك",
          url: "/eg/driver/driver-starter-manual",
        },
        {
          text: "مساعدة الشريك السائق",
          url: "/eg/driver/driver-help/",
        },
      ],
    },
  ],
  pa: [
    {
      text: "DiDi Conductor",
      url: "/pa/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/pa/driver",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/pa/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/pa/pasajero/",
    },
    {
      text: "Acerca de DiDi",
      url: "/pa/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/pa/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/pa/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/pa/guias/",
        },
        {
          text: "Artículos",
          url: "/pa/articulos/",
        },
      ],
    },
  ],
  cr: [
    {
      text: "DiDi Pasajero",
      url: "/cr/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/cr/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/cr/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/cr/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Fleet",
      url: "/cr/didi-fleet/",
    },
    {
      text: "DiDi Food",
      url: "/cr/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/cr/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/cr/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/cr/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/cr/food/contacto/",
        },
      ],
    },
    {
      text: "Acerca de DiDi",
      url: "/cr/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/cr/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/cr/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Leones al Volante",
      url: "/cr/leones/",
    },
  ],
  do: [
    {
      text: "DiDi Pasajero",
      url: "/do/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/do/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/do/driver/",
        },
        {
          text: "Socio Conductor Moto",
          url: "/do/driver/moto/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/do/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Moto",
      url: "/do/driver/moto/",
    },
    {
      text: "DiDi Food",
      url: "/do/food/",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/do/food/restaurantes/",
        },
        {
          text: "Socio Repartidor",
          url: "/do/food/repartidores/",
        },
        {
          text: "Acerca",
          url: "/do/food/acerca-didi-food/",
        },
        {
          text: "Contacto",
          url: "/do/food/contacto/",
        },
      ],
    },
    {
      text: "Acerca de DiDi",
      url: "/do/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/do/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/do/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/do/guias/",
        },
        {
          text: "Artículos",
          url: "/do/articulos/",
        },
      ],
    },
  ],
  ec: [
    {
      text: "DiDi Pasajero",
      url: "/ec/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/ec/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/ec/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/ec/ciudades/",
        },
      ],
    },
    {
      text: "Acerca de DiDi",
      url: "/ec/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/ec/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/ec/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/ec/guias/",
        },
        {
          text: "Artículos",
          url: "/ec/articulos/",
        },
      ],
    },
  ],
  nz: [
    {
      text: "DiDi Rider",
      url: "/nz/rider/",
      dropMenu: [
        {
          text: "Rider",
          url: "/nz/rider/",
        },
      ],
    },
    {
      text: "DiDi Driver",
      url: "/nz/driver/",
      dropMenu: [
        {
          text: "Driver",
          url: "/nz/driver/",
        },
        {
          text: "Sign Up",
          url: "https://anz-rides-driver.onelink.me/ixFb/nzdriverhero",
        },
        {
          text: "Driver Help",
          url: "/nz/driver/help/",
        },
        {
          text: "DiDi Advance",
          url: "/nz/didi-advance/",
        },
        {
          text: "Cities",
          url: "/nz/cities/",
        },
      ],
    },
    {
      text: "Safety",
      url: "/nz/safety/",
      dropMenu: [
        {
          text: "Driver Safety",
          url: "/nz/safety/driver-safety",
        },
        {
          text: "Rider Safety",
          url: "/nz/safety/rider-safety/",
        },
      ],
    },
    {
      text: "About DiDi",
      url: "/nz/about-us/",
      dropMenu: [
        {
          text: "Driver Help",
          url: "/nz/driver/help/",
        },
        {
          text: "Contact",
          url: "/nz/contact/",
        },
      ],
    },
  ],
  ru: [
    {
      text: "Водителям",
      url: "/ru/driver/",
      dropMenu: [
        {
          text: "Водителям таксопарков",
          url: "/ru/taxi",
        },
        {
          text: "Водитель-партнер в статусе ИП",
          url: "/ru/driver-partner",
        },
      ],
    },
    {
      text: "Пассажирам",
      url: "/ru/rider/",
    },
    {
      text: "Владельцам таксопарков",
      url: "/ru/fleet/",
    },
    {
      text: "Безопасность",
      url: "/ru/safety/",
    },
    {
      text: "О нас",
      url: "/ru/about-didi/",
    },
  ],
};

const getMenuLinks = (countryCode: string) => {
  return menuLinks[countryCode] || [];
};

export { getMenuLinks };
