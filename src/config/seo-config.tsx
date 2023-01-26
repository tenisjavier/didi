// @desc SEO meta definition per path

interface SEOMetaItemInterface {
  title: string;
  desc: string;
}

interface SingleSEOMetaInterface {
  [path: string]: SEOMetaItemInterface;
}

interface AllSEOMetaInterface {
  [countryCode: string]: SingleSEOMetaInterface;
}

const seoMeta: AllSEOMetaInterface = {
  en: {
    "/": {
      title: "DiDi Global - The World's Leader in Mobility Technology",
      desc: "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.",
    },
    "/contact/": {
      title: "Contact Us | DiDi Global",
      desc: "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.",
    },
  },
  es: {
    "/": {
      title: "DiDi Global - El Líder en Mobilidad y Tecnología",
      desc: "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.",
    },
    "/contact/": {
      title: "Contact Us | DiDi Global",
      desc: "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.",
    },
  },
  ru: {
    "/": {
      title: "Переходи на DiDi",
      desc: "DiDi Россия — ведущая в мире мобильная транспортная платформа, предлагающая пользователям по всему миру полный спектр услуг на основе приложений.",
    },
    "/rider/": {
      title: "Поездки с DiDi ",
      desc: "Совершайте поездки с DiDi, международной технологической платформой, которая предоставляет сервис сотням миллионов пассажиров благодаря передовым технологиям и инновациям.",
    },
    "/driver/": {
      title: "DiDi прибывает в Россию - езжайте прямо сейчас",
      desc: "DiDi прибывает в Россию, становится водителем-партнером Didi и ездит с самой низкой комиссией с транспортным приложением номер 1 в мире",
    },
    "/driver-partner/": {
      title: "DiDi прибывает в Россию - езжайте прямо сейчас",
      desc: "DiDi прибывает в Россию, становится водителем-партнером Didi и ездит с самой низкой комиссией с транспортным приложением номер 1 в мире",
    },
    "/fleet/": {
      title: "DiDi для таксопарков",
      desc: "DiDi Global — ведущая в мире мобильная транспортная платформа, предлагающая пользователям по всему миру полный спектр услуг на основе приложений.",
    },
    "/about-us/": {
      title: "О нас",
      desc: "Мы — DiDi, глобальная технологическая платформа.",
    },
    "/newsroom/": {
      title: "Новости",
      desc: "Раздел новостей о DiDi в России. Узнайте обо всех новостях в этом разделе.",
    },
    "/legal/": {
      title: "Юридический",
      desc: "Это наш раздел наших условий и положений, созданных юридической сферой DiDi.",
    },
  },
  cl: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en Chile. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
    },
    "/didimas/": {
      title: "Club de Beneficios DiDiMás+ para Conductores",
      desc: "Beneficios para Conductores DiDiMás+. DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
    },
    "/didimas/copec/": {
      title: "Copec y DiDi - Beneficios para Conductores",
      desc: "Todos los socios conductores y taxistas inscritos en DiDi, que hayan realizado al menos 1 viaje en los últimos 6 meses, podrán acceder al siguiente descuento.",
    },
    "/didimas/carglass/": {
      title: "Carglass y DiDi - Beneficios para Conductores",
      desc: "Carglass es una empresa que se dedica a la reparación y sustitución de vidrios automotrices. Cuenta además con técnicos especializados y una flota para atender tus necesidades a domicilio.",
    },
    "/didimas/autofin/": {
      title: "Autofin y DiDi - Beneficios para Conductores",
      desc: "Autofin es una empresa que se especializa en crédito automotriz y además te asesora en la compra de tu próximo vehículo.",
    },
    "/didimas/movistar/": {
      title: "Movistar y DiDi - Beneficios para Conductores",
      desc: "Contrata por solo $7.990, un plan de telefonía móvil exclusivo que incluye el uso libre de la app DiDi Conductor, sin consumir tus gigas!",
    },
    "/taxi/": {
      title: "DiDi Taxi - Genera Ingresos Extra con DiDi",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribe tu Comercio en DiDi Food",
      desc: "Inscribe tu Comercio en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Chile",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  hk: {
    "/": {
      title: "網上call的士及粵港車 - DiDi 香港",
      desc: "網上call的士及粵港車 - DiDi 香港",
    },
    "/ride/": {
      title: "的士服務 - DiDi 香港",
      desc: "的士服務 - DiDi 香港",
    },
    "/driver/": {
      title: "成為司機夥伴 - DiDi 香港",
      desc: "成為司機夥伴 - DiDi 香港",
    },
    "/taxi/": {
      title: "成為司機夥伴 - DiDi 香港",
      desc: "成為司機夥伴 - DiDi 香港",
    },
    "/coronavirus/": {
      title: "同心抗疫 滴滴守護你的出行安全",
      desc: "香港第五波疫情嚴峻，牽動著社會各界的心。滴滴香港積極推出線上及線下各項防疫措施，竭力爲司機夥伴和乘客的出行安全保駕護航",
    },
    "/ride/滴滴的士服務/": {
      title: "的士服務 - DiDi 香港",
      desc: "",
    },
    "/ride/粵港跨境專車服務/": {
      title: "粵港跨境專車服務 - DiDi 香港",
      desc: "",
    },
    "/點call-didi香港-didi-app-alipay-wechat-小程序/": {
      title: "點call DiDi ? - DiDi 香港",
      desc: "",
    },
    "/taxi-driver/": {
      title: "成為司機夥伴 - DiDi 香港",
      desc: "",
    },
    "/遠dd-call-didi-程程85折/": {
      title: "遠DD, call DiDi! 程程85折! - DiDi 香港",
      desc: "",
    },
    "/about-us/": {
      title: "About us - DiDi 香港",
      desc: "",
    },
    "/blog/": {
      title: "Blog - DiDi 香港",
      desc: "",
    },
  },
  mx: {
    "/": {
      title: "DiDi México: Regístrate como Socio Conductor DiDi",
      desc: "DiDi en México, regístrate como socio conductor en las categorías express, taxi y entrega y economy. Gana más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi, DiDi Delivery y DiDi Economy están activos en México. Elige la mejor opción.",
    },
    "/didi-fleet/": {
      title: "DiDi Fleet - Genera Dinero Rentando tus Autos",
      desc: "DiDi Fleet. Si tienes uno o más autos que quieras rentabilizar, súbelos a la app de DiDi Fleet y podrás asociar conductores a tus autos. Gana dinero de manera pasiva con DiDi Fleet.",
    },
    "/conductor/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
    },
    "/conductor/requisitos-para-conducir/": {
      title: "Requisitos para Conducir o Convertirse en Socio",
      desc: "Requisitos para Conducir en DiDi. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
    },
    "/conductor/requisitos-fiscales/": {
      title: "Requisitos Fiscales para Conductores de DiDi en México",
      desc: "Requisitos Fiscales para Conductores de DiDi México. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
    },
    "/conductor/calcula-tus-ganancias/": {
      title: "¿Cuánto dinero pueden ganar los conductores a través de DiDi?",
      desc: "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi México. Considerando retenciones de impuestos como ISR e IVA",
    },
    "/conductor/didi-flex/": {
      title: "DiDi Flex: Negocia tu precio sin afectar tu seguridad",
      desc: "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi Flex México. Considerando retenciones de impuestos como ISR e IVA.",
    },
    "/conductor/didi-amigo/": {
      title: "DiDi Amigo: Regístrate, refiere posibles conductores y gana.",
      desc: "Con nuestro programa de referidos DiDi Amigos puedes referir personas que les gustaría conducir con DiDi y ganas dinero si lo hacen.",
    },
    "/clubdidi/": {
      title: "Club DiDi: La comunidad que te da beneficios exclusivos",
      desc: "Descubre las ventajas de ser un conductor DiDi. Todos los descuentos y beneficios para conductores los encontraras aqui.",
    },
    "/conductor/mujeres-en-didi/": {
      title: "Mujeres en DiDi",
      desc: "Mujeres en DiDi. Descubre las ventajas de ser un conductor DiDi. Todos los descuentos y beneficios para conductores los encontraras aqui.",
    },
    "/didipay/": {
      title: "DiDi Pay - Baja la App y asocia tu tarjeta.",
      desc: "DiDi Pay México. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
    },
    "/servicios-financieros/": {
      title: "DiDi Servicios Financieros",
      desc: "DiDi Servicios Financieros. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
    },
    "/didipay-negocios/": {
      title: "DiDi Pay Negocios - Aumenta tus ventas",
      desc: "DiDi Pay para Negocios en México. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
    },
    "/didipay-preguntas-frecuentes/": {
      title: "Preguntas Frecuentes sobre DiDi Pay.",
      desc: "Revisa nuestras preguntas frecuentes sobre DiDi Pay. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
    },
    "/didipay/blog/": {
      title: "Blog DiDi Pay: Consejos Financieros para ti.",
      desc: "Blog DiDi Pay. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
    },
    "/didimas/": {
      title: "Club de Beneficios DiDiMás+ para Conductores",
      desc: "Beneficios para Conductores DiDiMás+. DiDi en México, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
    },
    "/didimas/copec/": {
      title: "Copec y DiDi - Beneficios para Conductores",
      desc: "Todos los socios conductores y taxistas inscritos en DiDi, que hayan realizado al menos 1 viaje en los últimos 6 meses, podrán acceder al siguiente descuento.",
    },
    "/didimas/carglass/": {
      title: "Carglass y DiDi - Beneficios para Conductores",
      desc: "Carglass es una empresa que se dedica a la reparación y sustitución de vidrios automotrices. Cuenta además con técnicos especializados y una flota para atender tus necesidades a domicilio.",
    },
    "/didimas/autofin/": {
      title: "Autofin y DiDi - Beneficios para Conductores",
      desc: "Autofin es una empresa que se especializa en crédito automotriz y además te asesora en la compra de tu próximo vehículo.",
    },
    "/didimas/movistar/": {
      title: "Movistar y DiDi - Beneficios para Conductores",
      desc: "Contrata por solo $7.990, un plan de telefonía móvil exclusivo que incluye el uso libre de la app DiDi Conductor, sin consumir tus gigas!",
    },
    "/taxi/": {
      title: "DiDi Taxi - Genera Ingresos Extra con DiDi",
      desc: "DiDi en México, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/newsroom/": {
      title: "DiDi Noticias - Aquí te contamos de novedades sobre DiDi",
      desc: "DiDi Noticias en México, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribe tu Restaurante en DiDi Food",
      desc: "Inscribe tu Restaurante en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/ciudad/": {
      title: "Pide Comida a Domicilio con DiDi Food Mexico",
      desc: "¿Qué comida se te antoja en este momento? DiDi Food te entrega Comida a Domicilio de tus restaurantes favoritos en todas estas ciudades... y en minutos",
    },
    "/food/colonia/": {
      title: "Encuentra Comida a Domicilio en tu Colonia con DiDi Food Mexico",
      desc: "¿Qué comida se te antoja en este momento? DiDi Food te entrega Comida a Domicilio de tus restaurantes favoritos en todas estas colonias... y en minutos",
    },
    "/food/blog/": {
      title:
        "Blog DiDi Food: Temas de Comida, Restaurantes y Gastronomía Mexicana",
      desc: "En el blog de DiDi Food encontrarás recomendaciones sobre restaurantes de moda, platillos, rutas gastronómicas y tendencias del sector. Descubrenos",
    },
    "/food/restaurantes/registro/": {
      title: "Restaurantes - Registro",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/food/restaurantes/impuestos/": {
      title: "Restaurantes - Impuestos",
      desc: "Restaurantes - Impuestos. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/food/restaurantes/guias-educacionales/": {
      title: "Restaurantes - Guías Educacionales",
      desc: "Restaurantes - Guías Educacionales. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/food/restaurantes/promociones-y-campanas/": {
      title: "Restaurantes - Promociones y Campañas",
      desc: "Restaurantes - Promociones y Campañas. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/food/restaurantes/preguntas-frecuentes/": {
      title: "Restaurantes - Preguntas Frecuentes",
      desc: "Restaurantes - Preguntas Frecuentes. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/seguridad/conductores/": {
      title: "Seguridad para Conductores en DiDi",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que puedas manejar con DiDi de manera segura y confiable.",
    },
    "/seguridad/pasajeros/": {
      title: "Seguridad para Pasajeros en DiDi",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que puedas vivir la experiencia de viajar en DiDi de manera segura y confiable.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda para Socios Conductores y Pasajeros",
      desc: "Conoce aquí las preguntas frecuentes de conductores y pasajeros, funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de México",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  do: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en República Dominicana, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en República Dominicana. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Conduce y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
    },
    "/driver/moto/": {
      title: "DiDi Moto - Conduce y Genera Dinero",
      desc: "DiDi en República Dominicana, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribe tu Comercio en DiDi Food",
      desc: "Inscribe tu Comercio en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
  },
  ec: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Ecuador, regístrate como socio conductor y comienza a generar ganancias. Maneja tu propio horario.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. Somos la App nº1 en movilidad del mundo. Ya nos encontramos en Ecuador.",
    },
    "/driver/": {
      title: "DiDi Conductor - Conduce y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en la categoría express y empieza a ganar más y manejando menos.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
  },
  ar: {
    "/": {
      title: "Registrate como Socio Conductor DiDi",
      desc: "DiDi en Argentina, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
    },
    "/pasajero/": {
      title: "Pedí un DiDi y Viajá Seguro",
      desc: "DiDi Pasajero. DiDi en Argentina, viajá seguro, barato y rápido. DiDi Express y DiDi Taxi están activos en Argentina. Elegí la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Manejá y Generá Dinero",
      desc: "DiDi Conductor, registrate como socio conductor en la categoría de express o taxi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
    },
    "/didi-fleet/": {
      title: "DiDi Fleet - Alquilá tus autos y generá ganancias",
      desc: "Si tenés uno o más autos que quieras poner en alquiler, subilos a la app de DiDi Fleet y podrás asociar conductores a tus autos. Generá ganancias de manera pasiva alquilando tus autos con DiDi Fleet.",
    },
    "/taxi/": {
      title: "DiDi Taxi - Generá Ingresos Extra con DiDi",
      desc: "DiDi Taxi. Revisá los requisitos y registrate como socio taxista DiDi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
    },
    "/driver/moto/": {
      title: "DiDi Moto - Generá Ingresos Extra con DiDi",
      desc: "DiDi Moto en Argentina. Registrate en DiDi Moto en nuestra web y comenzá ya a generar ganancias cuando más te convenga.",
    },
    "/sobre-didi/": {
      title: "Tenés Preguntas sobre DiDi? Revisá las Respuestas",
      desc: "Tanto si sos conductor o usuario de DiDi revisá las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conocé más acá",
      desc: "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutés al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Argentina",
      desc: "Conocé aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Enterate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que podés ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Leé sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conocé que servicios DiDi se encuentran en tu ciudad. Si querés ser socio conductor revisá los requisitos.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conocé nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  pe: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Perú, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Bája la App y Viaja Seguro",
      desc: "Pasajero. DiDi en Perú, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor en Perú. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
    },

    "/sobre-didi/": {
      title: "Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/food/": {
      title: "DiDi Food Perú: Pide comida a Domicilio",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribe tu Restaurante en DiDi Food",
      desc: "Inscribe tu Restaurante en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Perú",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Viaja a distintos puntos de la ciudad con DiDi. DiDi es la manera más rápida y segura de viajar. Baja la aplicación ya.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  co: {
    "/": {
      title: "Regístrate en  Conductor DiDi",
      desc: "DiDi Colombia: Regístrate como arrendador / socio taxista en las categorías express, taxi y fleet ganando más y manejando menos. Genera ingresos extra con DiDi Conductor",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Muévete por tu Ciudad",
      desc: "Pasajero. DiDi en Colombia, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Ingresos Extra",
      desc: "DiDi Conductor en Colombia. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
    },
    "/didimas/": {
      title: "Promociones DiDiMás+ para Conductores",
      desc: "Beneficios para Conductores DiDiMás+. DiDi en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
    },
    "/driver/historias-de-exito/": {
      title: "Historias de Éxito de Socios Arrendadores",
      desc: "Detrás de cada logro, hay una historia de éxito que contar. Conoce las historias que hoy nos quieren contar algunos socios arrendadores. ¿y tú qué esperas?",
    },
    "/taxi/": {
      title: "DiDi Taxi - Genera Ingresos Extra con DiDi",
      desc: "DiDi Taxi en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/didi-fleet/": {
      title: "DiDi Fleet - Haz Dinero Hasta Durmiendo",
      desc: "DiDi Fleet en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/sobre-didi/": {
      title: "Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Colombia",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Viaja a distintos puntos de la ciudad con DiDi. DiDi es la manera más rápida y segura de viajar. Baja la aplicación ya.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribe tu Restaurante en DiDi Food",
      desc: "Inscribe tu Restaurante en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
  },
  pa: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Panamá, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express y DiDi Moto están activos en Panamá. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
    },
    "/moto/": {
      title: "DiDi Moto - Maneja y Genera Dinero",
      desc: "DiDi en Panamá, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  au: {
    "/": {
      title: "DiDi Australia - Ride Hailing & Delivery",
      desc: "DiDi Australia offers a full range of app-based transportation services to users across Australia and New Zealand.",
    },
    "/rider/": {
      title: "Ride with DiDi",
      desc: "Get safe, fast and affordable rides with DiDi.",
    },
    "/rider/help/": {
      title: "Ride Help & DiDi FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/rider/didi-share-for-driver/": {
      title: "DiDi Share for Riders",
      desc: "DiDi Share for Riders. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },
    "/driver/": {
      title: "DiDi Driver - Drive and earn with DiDi",
      desc: "Start earning today as a driver-partner with industry-leading safety features and low service fees.",
    },
    "/driver/help/": {
      title: "Driver Help & FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/delivery/help/": {
      title: "DiDi Delivery Help & FAQs",
      desc: "DiDi Delivery Help. Need help? Have questions? We're here to assist you!",
    },
    "/didi-advance/": {
      title: "DiDi Advance Driver Program",
      desc: "Learn more about our DiDi Advance earnings program for driver-partners.",
    },
    "/delivery/": {
      title: "DiDi Delivery",
      desc: "Power your business with instant and affordable delivery services.",
    },
    "/delivery/personal/": {
      title: "DiDi Delivery - Personal",
      desc: "DiDi Delivery is an on-demand delivery service allowing Australians to send and receive parcels – all delivered by DiDi drivers.",
    },
    "/delivery/business/": {
      title: "DiDi Delivery - Business",
      desc: "Power your business with instant and affordable delivery services powered by DiDi drivers.",
    },
    "/driver/didi-delivery-australia/": {
      title: "DiDi Delivery for Drivers - Next Steps",
      desc: "Earn money delivering goods for stores and people around your city.",
    },
    "/driver/didi-share-for-driver/": {
      title: "DiDi Share for Drivers",
      desc: "DiDi Share for Drivers. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },
    "/features/didisal/": {
      title: "Stay safe with DiDi Sal, your in-trip pal",
      desc: "DiDi Sal sends helpful safety messages and alerts during your trip to check if everything’s A-OK.",
    },
    "/features/fatigue-prevention-feature/": {
      title: "DiDi Fatigue Feature for Drivers",
      desc: "It is recommended that you have frequent breaks throughout the day. Just remember to tap “Go Offline” when you do. ",
    },

    "/about-us/": {
      title: "About Us",
      desc: "Learn more about DiDi, the world's leading mobility platform.",
    },
    "/safety/": {
      title: "Safety",
      desc: "Your safety comes first-- learn more about our industry-leading safety features.",
    },
    "/safety/rider-safety/": {
      title: "Rider Safety",
      desc: "Your safety comes first. Learn more about our industry-leading safety features for riders.",
    },
    "/safety/driver-safety/": {
      title: "Driver Safety",
      desc: "Your safety comes first. Learn more about our industry-leading safety features for drivers.",
    },
    "/help-center/": {
      title: "Help Center",
      desc: "FAQs for DiDi riders and drivers.",
    },
    "/contact/": {
      title: "Contact Our Costumer Support Center",
      desc: "DiDi Customer Support can assist you with any enquiries, issues, or questions you have with DiDi.",
    },
    "/blog/": {
      title: "DiDi Australia Blog",
      desc: "Latest updates and articles from DiDi Austrlia.",
    },
    "/cities/": {
      title: "Cities",
      desc: "Learn about which cities DiDi Australia services are available in.",
    },
    "/legal/": {
      title: "Legal",
      desc: "Review our privacy policy and other terms and conditions.",
    },
    "/career/": {
      title: "Work at DiDi",
      desc: "¿Why work at DiDi Australia? Courageous Goals. Engaging Challenges.Tremendous Impact.",
    },
    "/offers/": {
      title: "Best Offers in DiDi",
      desc: "Select you next discount for your next ride",
    },
  },
  eg: {
    "/": {
      title: "دي دي إيجيبت",
      desc: "تربط منصة دي دي بين ملايين من الركاب وعشرات الألوف من السائقين على مستوى العالم كل يوم.",
    },
    "/rider/": {
      title: "احجز مشوارك مع  دي دي",
      desc: " مشاوير أكثر أمانًا ويعتمد عليها وبأجرة منخفضة.",
    },
    "/driver/": {
      title: "انضم لشركائنا السائقين",
      desc: "ابدأ في تحقيق دخل متميز مع رسوم الخدمة التنافسية والدعم المحلي وميزات السلامة الرائدة.",
    },
    "/driver/driver-help/": {
      title: "مساعدة الشريك السائق",
      desc: "",
    },
    "/driver/driver-starter-manual/": {
      title: "دليل بدء شريك دي دي",
      desc: "",
    },
    "/about-us/": {
      title: "نبذة عنا",
      desc: "إننا شركة دي دي، منصة التنقل الرائدة عالميًا.",
    },
  },
  cr: {
    "/": {
      title: "Registrate como Socio Conductor DiDi",
      desc: "DiDi en Costa Rica, registrate como socio conductor en las categorías express y fleet ganando más y conduciendo menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Descargá la App y Viajá",
      desc: "DiDi Pasajero. Viajá seguro, barato y rápido. DiDi Express está disponible en Costa Rica. Elegí la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Manejá y Generá Dinero",
      desc: "DiDi Conductor. Revisá los requisitos. Registrate como socio conductor en la categoría express ganando más y conduciendo menos.",
    },
    "/food/": {
      title: "Pedí comida a través de DiDi Food",
      desc: "Pedí comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
    },
    "/food/restaurantes/": {
      title: "Inscribí tu Comercio en DiDi Food",
      desc: "Inscribí tu Comercio en DiDi Food y empezá a generar ventas fuera de tu local físico. Expandí tu negocio. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
    },
    "/food/repartidores/": {
      title: "Inscribite como Repartidor y Ganá Dinero en DiDi Food",
      desc: "Como repartidor controlás tus tiempos. Generá ingresos de una manera confiable. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
    },
    "/food/acerca-didi-food/": {
      title: "La App de Comida Más Confiable",
      desc: "Pedí comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
    },
    "/food/contacto/": {
      title: "DiDi Food: Contactá nuestro Servicio al Cliente",
      desc: "Si sos repartidor, restaurante o usuario podés escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Leé y conocé lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tenés Preguntas sobre DiDi? Revisá las Respuestas",
      desc: "Tanto si sos conductor o usuario de DiDi revisá las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conocé más acá",
      desc: "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutés al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutés al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Enterate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que podés ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conocé nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  nz: {
    "/": {
      title: "DiDi New Zealand - Ride Hailing & Delivery",
      desc: "DiDi New Zealand offers a full range of app-based transportation services for riders and drivers .",
    },
    "/rider/": {
      title: "Ride with DiDi",
      desc: "Get safe, fast and affordable rides with DiDi.",
    },
    "/rider/help/": {
      title: "Ride Help & DiDi FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/rider/didi-share-for-driver/": {
      title: "DiDi Share for Riders",
      desc: "DiDi Share for Riders. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },
    "/driver/": {
      title: "DiDi Driver - Drive and earn with DiDi",
      desc: "Start earning today as a driver-partner with industry-leading safety features and low service fees.",
    },
    "/driver/help/": {
      title: "Driver Help & FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/delivery/help/": {
      title: "DiDi Delivery Help & FAQs",
      desc: "DiDi Delivery Help. Need help? Have questions? We're here to assist you!",
    },
    "/didi-advance/": {
      title: "DiDi Advance Driver Program",
      desc: "Learn more about our DiDi Advance earnings program for driver-partners.",
    },
    "/delivery/": {
      title: "DiDi Delivery",
      desc: "Power your business with instant and affordable delivery services.",
    },
    "/delivery/personal/": {
      title: "DiDi Delivery - Personal",
      desc: "DiDi Delivery is an on-demand delivery service allowing Australians to send and receive parcels – all delivered by DiDi drivers.",
    },
    "/delivery/business/": {
      title: "DiDi Delivery - Business",
      desc: "Power your business with instant and affordable delivery services powered by DiDi drivers.",
    },
    "/driver/didi-delivery-australia/": {
      title: "DiDi Delivery for Drivers - Next Steps",
      desc: "Earn money delivering goods for stores and people around your city.",
    },
    "/driver/didi-share-for-driver/": {
      title: "DiDi Share for Drivers",
      desc: "DiDi Share for Drivers. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },
    "/features/didisal/": {
      title: "Stay safe with DiDi Sal, your in-trip pal",
      desc: "DiDi Sal sends helpful safety messages and alerts during your trip to check if everything’s A-OK.",
    },
    "/features/fatigue-prevention-feature/": {
      title: "DiDi Fatigue Feature for Drivers",
      desc: "It is recommended that you have frequent breaks throughout the day. Just remember to tap “Go Offline” when you do. ",
    },

    "/about-us/": {
      title: "About Us",
      desc: "Learn more about DiDi, the world's leading mobility platform.",
    },
    "/safety/": {
      title: "Safety",
      desc: "Your safety comes first-- learn more about our industry-leading safety features.",
    },
    "/help-center/": {
      title: "Help Center",
      desc: "FAQs for DiDi riders and drivers.",
    },
    "/contact/": {
      title: "Contact Our Costumer Support Center",
      desc: "DiDi Customer Support can assist you with any enquiries, issues, or questions you have with DiDi.",
    },
    "/blog/": {
      title: "DiDi Australia Blog",
      desc: "Latest updates and articles from DiDi Austrlia.",
    },
    "/cities/": {
      title: "Cities",
      desc: "Learn about which cities DiDi Australia services are available in.",
    },
    "/legal/": {
      title: "Legal",
      desc: "Review our privacy policy and other terms and conditions.",
    },
    "/career/": {
      title: "Work at DiDi",
      desc: "¿Why work at DiDi Australia? Courageous Goals. Engaging Challenges.Tremendous Impact.",
    },
    "/offers/": {
      title: "Best Offers in DiDi",
      desc: "Select you next discount for your next ride",
    },
  },
};

//@desc func that is used in SEO component for getting the title and desc of a page
// @params country is the country code and path
const getMetaByPath = (
  countryCode: string,
  path: string
): SEOMetaItemInterface => {
  const placeRegex =
    /(\/lugares\/(.+))|(\/articulos\/(.+))|(\/legal\/(.+))|(\/newsroom\/(.+))|(\/centro-de-ayuda\/(.+))|(\/help-center\/(.+))|(\/guias\/(.+))|(\/ciudades\/(.+))|(\/driver\/(.+))|(\/conductor\/(.+))|(\/rider\/(.+))|(\/food\/city\/(.+))|(\/food\/blog\/(.+))/;
  const defaultMetas = {
    title: "DiDi Global: More than a Journey",
    desc: "Didi Chuxing is the world’s leading mobile transportation platform. The company offers a full range of mobile tech-based mobility options for over 450 million users, including Taxi, Premier, Express, Hitch, Luxe, Bus, Designated Driving, Car Rental, Enterprise Solutions and Bike-Sharing",
  };

  //logic for dynamic pages places and directions
  const subfolder = path.match(/([^/]*)\/*$/)![1];
  const placeTitle = subfolder
    .substring(0, subfolder.indexOf("_") && undefined)
    .replace(/-/g, " ")
    .replace(/\b(\w)/g, (s) => s.toUpperCase());

  const metas = placeRegex.test(path)
    ? {
        title: placeTitle,
        desc: `${placeTitle}`,
      }
    : defaultMetas;

  return seoMeta[countryCode][path] || metas;
};

export { getMetaByPath };
