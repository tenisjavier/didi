// @desc: utility library for ctaButtons and oneLinks

interface SingleBtnInterface {
  drvLink: string;
  paxLink: string;
  drvText: string;
  paxText: string;
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
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://page.xiaojukeji.com/active/ddpage_0seSZl6c.html",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/",
    foodEaterText: "Descarga DiDi Food",
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
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  au: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
  rd: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/rddriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
  cr: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  pa: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
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
