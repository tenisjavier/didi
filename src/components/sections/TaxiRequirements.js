import React from "react";

import Acordian from "../Acordian";
const Requerimientos = () => {
  const contenido = [
    {
      title: "Taxi",
      content:
        "<p>Los requerimientos mínimos que debes cumplir para conectarte como socio taxista con DiDi Taxi son los siguientes: </p> \
        <p> Ser mayor de 21 años.</p><p>Tener una licencia de conducción profesional vigente.</p><p>El vehículo debe ser Taxi Urbano Básico.</p>\
        <p>Los documentos deben cumplir con las siguientes especificaciones:</p>\
        <ul>\
        <li>Cédula de identidad válido por 1 o más meses y que coincida con la información que se ingresó durante el registro.</li>\
        <li>Un permiso de circulación válido que demuestre que el vehículo es Taxi Urbano/Básico</li>\
        <li>Licencia de conducir profesional Categoría A1, A2 o A3</li>\
        <li>Cartón de Recorrido</li>\
        <p>Descargue la app, sigue los pasos, sube los documentos y cuando todo esté aprobado estará listo para conectarse y ser parte de la app de movilidad más grande del mundo Descargar DiDi Conductor</p>\
        </ul>",
    },
  ];
  return (
    <div className="min-h-[600px] bg-gray-200">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <h1>Requerimientos</h1>
        <p className="text-lg mt-10">
          Los requerimientos mínimos que debes cumplir para conectarte como
          socio conductor.
        </p>
        {contenido.map((item, index) => (
          <Acordian title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Requerimientos;
