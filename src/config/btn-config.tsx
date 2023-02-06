// @desc: utility library for ctaButtons and oneLinks

interface SingleBtnInterface {
  drvLink: string;
  paxLink: string;
  drvText: string;
  paxText: string;
  fleetLink?: string;
  fleetText?: string;
  paymentLink?: string;
  paymentText?: string;
  paymentBusinessLink?: string;
  paymentBusinessText?: string;
  foodDeliveryLink?: string;
  foodDeliveryText?: string;
  foodBusinessLink?: string;
  foodBusinessText?: string;
  foodEaterLink?: string;
  foodEaterText?: string;
  foodEaterOnlineLink?: string;
  foodEaterOnlineText?: string;
  prestamosPaxLink?: string;
  prestamosPaxText?: string;
  prestamosDrvLink?: string;
  prestamosDrvText?: string;
}

interface AllBtnInterface {
  [countryCode: string]: SingleBtnInterface;
}

const btnLinks: AllBtnInterface = {
  en: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Download",
    paxText: "Download",
  },
  es: {
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
    foodDeliveryText: "Empieza a Repartir con DiDi Food",
    foodBusinessLink: "https://www.didi-food.com/es-CL/store",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida Ya → Descarga la App",
  },
  hk: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/hkdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "註冊成為司機",
    paxText: "下載滴滴客運",
  },
  pe: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/pedriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empieza a Repartir con DiDi Food",
    foodBusinessLink: "https://www.didi-food.com/es-PE/store",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida Ya → Descarga la App",
  },
  ar: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Registrate como Conductor",
    paxText: "Descargá DiDi Pasajero",
    fleetText: "Descargá DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
  },
  co: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/codriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    paxText: "Descarga DiDi Pasajero",
    fleetText: "Regístrate en DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empieza a Repartir con DiDi Food",
    foodBusinessLink: "https://www.didi-food.com/es-CO/store",
    foodBusinessText: "Regístrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida Ya → Descarga la App",
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
    drvText: "Regístrate como Socio Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empieza a Repartir con DiDi Food",
    foodBusinessLink: "https://www.didi-food.com/es-DO/store",
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
    drvText: "Registrate como Socio Conductor",
    paxText: "Descargá DiDi Pasajero",
    fleetText: "Registrate en DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Empezá a Repartir con DiDi Food",
    foodBusinessLink: "https://www.didi-food.com/es-CR/store",
    foodBusinessText: "Registrate como Comercio",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pedí Comida Ya → Descargá la App",
    foodEaterOnlineText: "Pide Comida, sin instalar la App → ",
    foodEaterOnlineLink: "https://www.didi-food.com/es-CR/food/address/",
  },
  pa: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Socio Conductor",
    paxText: "Descarga DiDi Pasajero",
  },
  mx: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodEaterText: "Pide Comida Ya → Descarga la App",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterOnlineText: "Pide Comida, sin instalar la App → ",
    foodEaterOnlineLink: "https://www.didi-food.com/es-MX/food/feed/",
    foodDeliveryLink:
      "https://www.didi-food.com/es-MX/mobile-delivery?clientType=102&country=MX&utm_source=(direct)&utm_medium=(none)&utm_campaign=none",
    foodDeliveryText: "Empezá a Repartir con DiDi Food",
    foodBusinessLink:
      "https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=%2F%2Fcrm.didi-food.com%2Fcrm%2FselfEntry%2Fpassport%2FsetCookie%3FjumpPage%3Dhttps%253A%252F%252Fwww.didi-food.com%252Fes-MX%252Fstore%252Fself-onboarding%252Flist#",
    foodBusinessText: "Regístrate como Comercio",
    fleetText: "Descarga DiDi Fleet",
    fleetLink: "https://fleet.onelink.me/jjQA/okks91lv",
    paymentText: "Descarga DiDi Pay",
    paymentLink: "https://didi.onelink.me/Zkxc/didipaymx/",
    paymentBusinessLink:
      "https://page.didiglobal.com/public-biz/pc-login/3.0.7/index.html?lang=es-MX&role=5001&source=70001&appid=200026&redirectUrl=https%3A%2F%2Fdidipay.didiglobal.com%2Fmerchant%2Fapi%2Fouter%2Fuser%2Flogin%3FredirectUrl%3Dhttps%3A%2F%2Fdidipay.didiglobal.com#/",
    paymentBusinessText: "Iniciar Sesión",
    prestamosPaxText: "Solicitar como Pasajero",
    prestamosPaxLink:
      "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    prestamosDrvText: "Solicitar como Conductor",
    prestamosDrvLink:
      "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
  },
  mxen: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodEaterText: "Order Now → Download App",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterOnlineText: "Order Now Without Downloading the App →",
    foodEaterOnlineLink: "https://www.didi-food.com/es-MX/food/feed/",
    foodDeliveryLink:
      "https://www.didi-food.com/es-MX/mobile-delivery?clientType=102&country=MX&utm_source=(direct)&utm_medium=(none)&utm_campaign=none",
    foodDeliveryText: "Learn More",
    foodBusinessLink:
      "https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=%2F%2Fcrm.didi-food.com%2Fcrm%2FselfEntry%2Fpassport%2FsetCookie%3FjumpPage%3Dhttps%253A%252F%252Fwww.didi-food.com%252Fes-MX%252Fstore%252Fself-onboarding%252Flist#",
    foodBusinessText: "Learn More",
    fleetText: "Descarga DiDi Fleet",
    fleetLink: "https://fleet.onelink.me/jjQA/okks91lv",
    paymentText: "Descarga DiDi Pay",
    paymentLink: "https://didi.onelink.me/Zkxc/didipaymx/",
    paymentBusinessLink:
      "https://page.didiglobal.com/public-biz/pc-login/3.0.7/index.html?lang=es-MX&role=5001&source=70001&appid=200026&redirectUrl=https%3A%2F%2Fdidipay.didiglobal.com%2Fmerchant%2Fapi%2Fouter%2Fuser%2Flogin%3FredirectUrl%3Dhttps%3A%2F%2Fdidipay.didiglobal.com#/",
    paymentBusinessText: "Iniciar Sesión",
  },
  nz: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/nzdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
  ru: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/rudriverhero",
    paxLink: "https://russia-rides-driver.onelink.me/o97G/ruhomepage",
    drvText: "Зарегистрироваться как водитель",
    paxText: "Зарегистрироваться как пассажир",
  },
};

const getBtnLinks = (countryCode: string): SingleBtnInterface => {
  let links = btnLinks[countryCode];
  return links;
};

export { getBtnLinks };
