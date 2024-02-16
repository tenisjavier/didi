// @desc: utility library for menu Links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItem {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
  icon?: any;
  src?: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItem[];
}

const menuLinks: AllMenuInterface = {
  es: [
    {
      text: "About DiDi",
      url: "#",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Contact Us",
          url: "/contact/",
        },
        {
          text: "Suppliers",
          url: "/suppliers/",
        },
        {
          text: "Carreras",
          url: "https://careers.didiglobal.com/",
        },
      ],
    },
    {
      text: "Entra a tu País",
      url: "#",
      dropMenu: [
        {
          text: "Argentina",
          url: "/ar/",
        },
        {
          text: "Australia",
          url: "/au/",
        },
        {
          text: "Brasil",
          url: "https://99app.com/",
        },
        {
          text: "Chile",
          url: "/cl/",
        },
        {
          text: "Colombia",
          url: "/co/",
        },
        {
          text: "Costa Rica",
          url: "/cr/",
        },
        {
          text: "República Dominicana",
          url: "/do/",
        },
        {
          text: "Ecuador",
          url: "/ec/",
        },
        {
          text: "Egipto",
          url: "/eg/",
        },
        {
          text: "Japón",
          url: "https://didimobility.co.jp/",
        },
        {
          text: "México",
          url: "/mx/",
        },
        {
          text: "Nueva Zelanda",
          url: "/nz/",
        },
        {
          text: "Panamá",
          url: "/pa/",
        },
        {
          text: "Perú",
          url: "/pe/",
        },
      ],
    },
  ],
  en: [
    {
      text: "About DiDi",
      url: "#",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Contact Us",
          url: "/contact/",
        },
        {
          text: "Suppliers",
          url: "/suppliers/",
        },
        {
          text: "Careers",
          url: "https://careers.didiglobal.com/",
        },
      ],
    },
    {
      text: "Select your Country",
      url: "#",
      dropMenu: [
        {
          text: "Argentina",
          url: "/ar/",
        },
        {
          text: "Australia",
          url: "/au/",
        },
        {
          text: "Brazil",
          url: "https://99app.com/",
        },
        {
          text: "Chile",
          url: "/cl/",
        },
        {
          text: "Colombia",
          url: "/co/",
        },
        {
          text: "Costa Rica",
          url: "/cr/",
        },
        {
          text: "Dominican Republic",
          url: "/do/",
        },
        {
          text: "Ecuador",
          url: "/ec/",
        },
        {
          text: "Egypt",
          url: "/eg/",
        },
        {
          text: "Japan",
          url: "https://didimobility.co.jp/",
        },
        {
          text: "Mexico",
          url: "/mx/",
        },
        {
          text: "New Zealand",
          url: "/nz/",
        },
        {
          text: "Panama",
          url: "/pa/",
        },
        {
          text: "Peru",
          url: "/pe/",
        },
      ],
    },
  ],
  cl: [
    {
      text: "DiDi Conductor",
      url: "/cl/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/cl/conductor/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/cl/conductor/requisitos-para-conducir/",
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
      text: "DiDi Pasajero",
      url: "/cl/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/cl/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/cl/taxi/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Taxi",
          url: "/cl/taxi/",
        },
      ],
    },
    {
      text: "DiDi Entrega",
      url: "/cl/entrega/",
      icon: "menu-delivery-box",
      dropMenu: [
        {
          text: "DiDi Entrega",
          url: "/cl/entrega/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/cl/sobre-didi/",
      icon: "menu-help",
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
      icon: "menu-about",
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

  mx: [
    {
      text: "DiDi Conductor",
      url: "/mx/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/mx/conductor/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
        },
        {
          text: "Requisitos para Conductores",
          url: "/mx/conductor/requisitos-para-conducir/",
        },
        {
          text: "Gananciar en DiDi",
          url: "/mx/conductor/calcula-tus-ganancias/",
        },
        {
          text: "DiDi Fleet",
          url: "/mx/didi-fleet/",
        },
        {
          text: "DiDi Pon tu Precio",
          url: "/mx/conductor/didi-pontuprecio/",
        },
        {
          text: "DiDiMás+",
          url: "/mx/didimas/",
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
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/mx/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "Servicios Financieros",
      url: "/mx/servicios-financieros/",
      icon: "menu-financial-service",
      dropMenu: [
        {
          text: "DiDi Card",
          url: "/mx/tarjeta-de-credito/",
        },
        {
          text: "DiDi Pay",
          url: "/mx/didipay/",
        },
        {
          text: "DiDi Préstamos",
          url: "/mx/prestamos/",
        },
      ],
    },
    {
      text: "DiDi Food",
      url: "/mx/food/",
      icon: "menu-food",
      dropMenu: [
        {
          text: "DiDi Food",
          url: "/mx/food/",
        },
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
      text: "DiDi Entrega",
      url: "/mx/entrega/",
      icon: "menu-delivery-box",
      dropMenu: [
        {
          text: "DiDi Entrega",
          url: "/mx/entrega/",
        },
        {
          text: "DiDi Entrega Business",
          url: "https://didi-food.com/es-MX/entrega-business/home",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/mx/nosotros/",
      icon: "menu-help",
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
      icon: "menu-about",
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
      text: "DiDi Conductor",
      url: "/ar/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/ar/conductor/",
        },
        {
          text: "DiDi Moto",
          url: "/ar/conductor/moto/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/ar/conductor/requisitos-para-conducir/",
        },
        {
          text: "DiDi Amigo",
          url: "/ar/conductor/didi-amigo/",
        },
        {
          text: "Ciudades Operativas",
          url: "/ar/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/ar/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/ar/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Fleet",
      url: "/ar/didi-fleet/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Fleet",
          url: "/ar/didi-fleet/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/ar/taxi/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Taxi",
          url: "/ar/taxi/",
        },
      ],
    },
    {
      text: "DiDi Moto",
      url: "/ar/conductor/moto/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "DiDi Moto",
          url: "/ar/conductor/moto/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/ar/sobre-didi/",
      icon: "menu-help",
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
      icon: "menu-about",
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
      text: "DiDi Conductor",
      url: "/pe/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/pe/conductor/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/pe/conductor/requisitos-para-conducir/",
        },
        {
          text: "DiDi Pon tu Precio",
          url: "/pe/conductor/didi-pontuprecio/",
        },
        {
          text: "Ciudades Operativas",
          url: "/pe/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/pe/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/pe/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Food",
      url: "/pe/food/",
      icon: "menu-food",
      dropMenu: [
        {
          text: "DiDi Food",
          url: "/pe/food/",
        },
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
      icon: "menu-help",
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
      icon: "menu-about",
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
      text: "DiDi Conductor",
      url: "/co/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/co/conductor/",
        },
        {
          text: "DiDi Moto",
          url: "/co/conductor/moto/",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/co/conductor/requisitos-para-conducir/",
        },
        {
          text: "DiDi Confort",
          url: "/co/conductor/didi-confort/",
        },
        {
          text: "DiDi Pon tu Precio",
          url: "/co/conductor/didi-pontuprecio/",
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
          url: "/co/conductor/historias-de-exito/",
        },
        {
          text: "DiDi Amigo",
          url: "/co/conductor/didi-amigo/",
        }
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/co/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/co/pasajero/",
        },
        {
          text: "DiDi Moto",
          url: "/co/pasajero/moto/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/co/taxi/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Taxi",
          url: "/co/taxi/",
        },
      ],
    },
    {
      text: "DiDi Fleet",
      url: "/co/didi-fleet/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Fleet",
          url: "/co/didi-fleet/",
        },
      ],
    },
    {
      text: "DiDi Food",
      url: "/co/food/",
      icon: "menu-food",
      dropMenu: [
        {
          text: "DiDi Food",
          url: "/co/food/",
        },
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
      text: "DiDi Entrega",
      url: "/co/entrega/",
      icon: "menu-delivery-box",
      dropMenu: [
        {
          text: "DiDi Entrega",
          url: "/co/entrega/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/co/sobre-didi/",
      icon: "menu-help",
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
  ],
  au: [
    {
      text: "DiDi Rider",
      url: "/au/rider/",
      icon: "menu-pax",
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
      icon: "menu-drv",
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
      icon: "menu-pax",
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
      icon: "menu-about",
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
          url: "/au/safety/fatigue-prevention-feature/",
        },
        {
          text: "Law Enforcement Portal",
          url: "/au/safety/law-enforcement-portal/",
        },
      ],
    },
    {
      text: "About DiDi",
      url: "/au/about-us/",
      icon: "menu-help",
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
      icon: "menu-help",
    },
    {
      text: "الراكب",
      url: "/eg/rider/",
      icon: "menu-pax",
    },
    {
      text: "السائق",
      url: "/eg/driver/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "السائق",
          url: "/eg/driver/",
        },
        {
          text: "دليل بدء شريك",
          url: "/eg/driver/driver-starter-manual",
        },
      ],
    },
    {
      text: "مساعدة الشريك السائق",
      url: "/eg/help-center/",
      icon: "menu-about",
    },
  ],
  pa: [
    {
      text: "DiDi Conductor",
      url: "/pa/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/pa/conductor/",
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
      icon: "menu-pax",
    },
    {
      text: "Acerca de DiDi",
      url: "/pa/sobre-didi/",
      icon: "menu-help",
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
  ],
  cr: [
    {
      text: "DiDi Conductor",
      url: "/cr/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/cr/conductor/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/cr/conductor/requisitos-para-conducir/",
        },
        {
          text: "Ciudades Operativas",
          url: "/cr/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/cr/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/cr/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/cr/taxi/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Taxi",
          url: "/cr/taxi/",
        },
      ],
    },
    {
      text: "DiDi Fleet",
      url: "/cr/didi-fleet/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Fleet",
          url: "/cr/didi-fleet/",
        },
      ],
    },
    {
      text: "DiDi Food",
      url: "/cr/food/",
      icon: "menu-food",
      dropMenu: [
        {
          text: "DiDi Food",
          url: "/cr/food/",
        },
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
      icon: "menu-help",
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
  ],
  do: [
    {
      text: "DiDi Conductor",
      url: "/do/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/do/conductor/",
        },
        {
          text: "DiDi Moto",
          url: "/do/conductor/moto/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/do/conductor/requisitos-para-conducir/",
        },
        {
          text: "Ciudades Operativas",
          url: "/do/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/do/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/do/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "DiDi Moto",
      url: "/do/conductor/moto/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "DiDi Moto",
          url: "/do/conductor/moto/",
        },
      ],
    },
    {
      text: "Acerca de DiDi",
      url: "/do/sobre-didi/",
      icon: "menu-help",
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
  ],
  ec: [
    {
      text: "DiDi Conductor",
      url: "/ec/conductor/",
      icon: "menu-drv",
      dropMenu: [
        {
          text: "DiDi Conductor",
          url: "/ec/conductor/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
        },
        {
          text: "Requisitos Para Conducir",
          url: "/ec/conductor/requisitos-para-conducir/",
        },
        {
          text: "Ciudades Operativas",
          url: "/ec/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Pasajero",
      url: "/ec/pasajero/",
      icon: "menu-pax",
      dropMenu: [
        {
          text: "DiDi Pasajero",
          url: "/ec/pasajero/",
        },
        {
          text: "Descarga la App",
          url: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
        },
      ],
    },
    {
      text: "Acerca de DiDi",
      url: "/ec/sobre-didi/",
      icon: "menu-help",
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
  ],
  nz: [
    {
      text: "DiDi Rider",
      url: "/nz/rider/",
      icon: "menu-pax",
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
      icon: "menu-drv",
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
      icon: "menu-about",
      dropMenu: [
        {
          text: "Driver Safety",
          url: "/nz/safety/driver-safety",
        },
        {
          text: "Rider Safety",
          url: "/nz/safety/rider-safety/",
        },
        {
          text: "Law Enforcement Portal",
          url: "/nz/safety/law-enforcement-portal/",
        },
      ],
    },
    {
      text: "About DiDi",
      url: "/nz/about-us/",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Help Center",
          url: "/nz/help-center/",
        },
        {
          text: "Contact",
          url: "/nz/contact/",
        },
      ],
    },
  ],
};

const getMenuLinks = (countryCode: string) => {
  return menuLinks[countryCode] || [];
};

export { getMenuLinks };

export const menuFlagsCountry = [
  {
    text: "AR",
    url: "/ar/",
    icon: "/flagsCountry/ar.png",
  },
  {
    text: "CL",
    url: "/cl/",
    icon: "/flagsCountry/cl.png",
  },
  {
    text: "CO",
    url: "/co/",
    icon: "/flagsCountry/co.png",
  },
  {
    text: "CR",
    url: "/cr/",
    icon: "/flagsCountry/cr.png",
  },
  {
    text: "DO",
    url: "/do/",
    icon: "/flagsCountry/do.png",
  },
  {
    text: "EC",
    url: "/ec/",
    icon: "/flagsCountry/ec.png",
  },
  {
    text: "MX",
    url: "/mx/",
    icon: "/flagsCountry/mx.png",
  },
  {
    text: "PA",
    url: "/pa/",
    icon: "/flagsCountry/pa.png",
  },
  {
    text: "PE",
    url: "/pe/",
    icon: "/flagsCountry/pe.png",
  },
];
