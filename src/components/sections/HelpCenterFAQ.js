import React from "react";
import Acordian from "../Acordian";

const HelpCenterFAQ = () => {
  const deliveryFAQ = [
    {
      title: "¿Cómo hacer despachos con DiDi Entrega?",
      content:
        "<p>Debes tener al menos 40 viajes finalizados con DiDi Express, y una calificación hecha por los usuarios igual o superior a 4,8 estrellas.</p> ",
    },
    {
      title:
        "¿Cómo puedo recibir mi Permiso Colectivo para operar con DiDi Entrega?",
      content:
        '<p>Si cumples con los requisitos para conducir con DiDi Entrega y no estás recibiendo periódicamente tu Permiso Colectivo para conducir en zonas en fase 1 o fase 2 (durante el fin de semana), debes llenar este formulario:</p>\
        <a href="https://forms.gle/zWwFmCEWgbqtAp8j7"> ENTRAR A FORMULARIO </a> \
        <p>Una vez registrado, tramitaremos tu permiso automáticamente, sin necesidad de que te contactes con nuestro equipo. </p> ',
    },
  ];

  const drvFAQ = [
    {
      title: "DiDi Clubs - Agenda tu Cita",
      content:
        '<h5> DiDi Clubs - Agenda tu Cita </h5>\
				<h5>Santiago – Agenda tu cita Virtual o Presencial&nbsp;</h5>\
<p>Agenda tu atención Virtual o Presencial para ser atendido por uno de nuestros agentes especialistas.</p>\
<br>\
<p><strong>RM:</strong>&nbsp;<a href="https://calendly.com/didiclubsantiago">https://calendly.com/didiclubsantiago</a></p>\
<br>\
<p><strong>DiDi Club Las Condes</strong></p>\
<p>Horario de atención: Lunes a Viernes de 10 am a 17 pm<br> <p>Dirección: Evaristo Lillo 48, Las Condes (esquina Apoquindo 4615)</span></p>\
<br>\
<p><strong>DiDi Club Taxi Carvajal</strong></p>\
<p>Horario de Atención: Lunes a Viernes de 10 am a 16 pm<br> Dirección: Av. Manuel Antonio Matta 971, Santiago</p>\
<br>\
<h5>Regiones – Agenda tu cita Virtual</h5>\
<p>Nuestros centros de atención presencial se encuentran cerrados por el momento, sin embargo te informaremos en cuanto volvamos a abrir nuestras puertas.</p>\
<p>Agenda tu atención Virtual para ser atendido por uno de nuestros agentes especialistas:</p>\
<p><strong>Regiones al Norte y Quinta:</strong>&nbsp;&nbsp;<a href="https://calendly.com/didiclubcosta"> https://calendly.com/didiclubcosta</a></p>\
<p><strong>Regiones al Sur: </strong><a href="https://calendly.com/didiclubsur">https://calendly.com/didiclubsur</a></p></div>',
    },
    {
      title: "Iniciativas COVID-19",
      content:
        '<p>Si cumples con los requisitos para conducir con DiDi Entrega y no estás recibiendo periódicamente tu Permiso Colectivo para conducir en zonas en fase 1 o fase 2 (durante el fin de semana), debes llenar este formulario:</p>\
        <a href="https://forms.gle/zWwFmCEWgbqtAp8j7"> ENTRAR A FORMULARIO </a> \
        <p>Una vez registrado, tramitaremos tu permiso automáticamente, sin necesidad de que te contactes con nuestro equipo. </p> ',
    },
    {
      title: "Funcionalidades de la app",
      content:
        "<p>Debes tener al menos 40 viajes finalizados con DiDi Express, y una calificación hecha por los usuarios igual o superior a 4,8 estrellas.</p> ",
    },
    {
      title: "Cuenta y Registro",
      content:
        '<p>Si cumples con los requisitos para conducir con DiDi Entrega y no estás recibiendo periódicamente tu Permiso Colectivo para conducir en zonas en fase 1 o fase 2 (durante el fin de semana), debes llenar este formulario:</p>\
        <a href="https://forms.gle/zWwFmCEWgbqtAp8j7"> ENTRAR A FORMULARIO </a> \
        <p>Una vez registrado, tramitaremos tu permiso automáticamente, sin necesidad de que te contactes con nuestro equipo. </p> ',
    },
    {
      title: "Pagos semanales",
      content:
        "<p>Debes tener al menos 40 viajes finalizados con DiDi Express, y una calificación hecha por los usuarios igual o superior a 4,8 estrellas.</p> ",
    },
    {
      title: "Inconvenientes con un viaje",
      content:
        '<p>Si cumples con los requisitos para conducir con DiDi Entrega y no estás recibiendo periódicamente tu Permiso Colectivo para conducir en zonas en fase 1 o fase 2 (durante el fin de semana), debes llenar este formulario:</p>\
        <a href="https://forms.gle/zWwFmCEWgbqtAp8j7"> ENTRAR A FORMULARIO </a> \
        <p>Una vez registrado, tramitaremos tu permiso automáticamente, sin necesidad de que te contactes con nuestro equipo. </p> ',
    },
    {
      title: "Canales de atención",
      content:
        "<p>Para acceder a nuestro centro de ayuda primero debes haberte registrado en la app. En la pantalla principal selecciona tu foto de perfil (esquina superior izquierda) y desde allí dirígete a ‘Ayuda’ e ingresa a la sección que más se relacione con la duda que tienes.</p>\
        <p>Si aún no has descargado la app o estás teniendo problemas con tu registro, comunícate con nosotros:</p>\
        <p>Socio Conductor:<br> 2 3304 0932</p>",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gray-200">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <h2>Cuentas con DiDi 24/7 para escucharte, para ayudarte.</h2>
        <p className="text-lg mt-10">
          Conoce nuestro centro de ayuda para usuarios y Socios Conductores.
        </p>
        {deliveryFAQ.map((item, index) => (
          <Acordian title={item.title} content={item.content} key={index} />
        ))}
        <h2>Preguntas Frecuentes Socio Conductor</h2>
        {drvFAQ.map((item, index) => (
          <Acordian title={item.title} content={item.content} key={index} />
        ))}
        <h2>Pasajero</h2>
        {deliveryFAQ.map((item, index) => (
          <Acordian title={item.title} content={item.content} key={index} />
        ))}
        <h2>Taxista</h2>
        {deliveryFAQ.map((item, index) => (
          <Acordian title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HelpCenterFAQ;
