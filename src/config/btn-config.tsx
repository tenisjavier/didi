// @desc: utility library for ctaButtons and oneLinks

interface SingleBtnInterface {
  drvLink: string;
  paxLink: string;
  drvText: string;
  paxText: string;
  fleetLink?: string;
  fleetText?: string;
  foodDeliveryLink?: string;
  foodDeliveryText?: string;
  foodBusinessLink?: string;
  foodBusinessText?: string;
  foodEaterLink?: string;
  foodEaterText?: string;
}

interface AllBtnInterface {
  [countryCode: string]: SingleBtnInterface;
}

const btnLinks: AllBtnInterface = {
  int: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://www.didi-food.com/es-419/mobile-delivery/guide",
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://page.xiaojukeji.com/active/ddpage_0seSZl6c.html",
    foodBusinessText: "Regístrate como Comercio",
  },
  cl: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empieza a Repartir con DiDi Food App",
    foodBusinessLink: "https://page.xiaojukeji.com/active/ddpage_0seSZl6c.html",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida Ya → Descarga la App",
  },
  pe: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/pedriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga Didi Pasajero",
  },
  ar: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Registrate como Conductor",
    paxText: "Descargá Didi Pasajero",
  },
  co: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/codriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga Didi Pasajero",
  },
  au: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
  eg: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/egdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "انضم لكباتن دي دي",
    paxText: "احجز مشوارك مع دي دي",
  },
  do: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empieza a Repartir con DiDi Food App",
    foodBusinessLink: "https://page.xiaojukeji.com/active/ddpage_0seSZl6c.html",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida Ya → Descarga la App",
  },
  ec: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ecdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
  },
  cr: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Registrate como Conductor",
    paxText: "Descargá DiDi Pasajero",
    fleetText: "Registrate en DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empezá a Repartir con DiDi Food App",
    foodBusinessLink: "https://page.xiaojukeji.com/active/ddpage_0seSZl6c.html",
    foodBusinessText: "Registrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pedí Comida Ya → Descargá la App",
  },
  pa: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga Didi Pasajero",
  },
  mx: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
};

const getBtnLinks = (countryCode: string): SingleBtnInterface => {
  let links = btnLinks[countryCode];
  return links;
};

export { getBtnLinks };
