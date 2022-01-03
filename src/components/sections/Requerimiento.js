import React from 'react';

import Acordian from '../Acordian';
const Requerimientos = () => {
    const contenido = [{
        title: "Express",
        content: "<p>Los requerimientos mínimos que debes cumplir para conectarte como socio conductor a DiDi Express son:</p> \
        <ul> <li>Tener al menos 21 años</li> <li>Tener una ID nacional que o tener un número de RUT válido por 1 o más meses y que Coincida con el nombre y número de ID nacional que se ingresó durante el registro</li> \
         <li>Un permiso de circulación válido que demuestre que el vehículo: Se fabricó en el 2010 o posteriormente </li> <li>Vehículo de 4 puertas, bolsas de aire aire acondicionado</li></ul>"
    },{
        title: "Taxi",
        content: "<p>Los requerimientos mínimos que debes cumplir para conectarte como socio taxista con DiDi Taxi son los siguientes:</p> \
        <ul><li>Ser mayor de edad y tener una licencia de conducción vigente</li><li>El vehículo debe ser Taxi.</li></ul>\
        <p>Los documentos deben cumplir con las siguientes especificaciones:</p>\
        <ul><li>Tener Al menos 21 años</li>\
        <li>Tener una ID nacional que o tener un número de RUT válido por 1 o más meses y que Coincida con el nombre y número de ID nacional que se ingresó durante el registro</li>\
        <li>Un permiso de circulación válido que demuestre que el vehículo: Se fabricó en el 2011 o posteriormente.</li>\
        <li>Vehículo de 4 puertas.Tener sistema ABS, bolsas de aire, aire acondicionado y cinturones de seguridad</li>\
        <li>Licencia de conducir profesional Categoría A1, A2 o A3</li>\
        <li>Cartón de RecorridoDescarga la app, sigue los pasos, sube los documentos y cuando todo esté aprobado estarás listo para conectarte y ser parte de la app de movilidad más grande del mundo.</li></ul>\
        "
    },{
        title: "Fleet",
        content: "<p>Los requerimientos mínimos que debes cumplir para conectarte como socio conductor a DiDi Fleet son:</p> \
        <ul> <li>Ser mayor de edad y tener una licencia de conducción vigente</li> <li>Tener una flota de vehículos</li> </ul> \
        <p>Los documentos para manejar y poder rentar un vehículo deben cumplir con las siguientes especificaciones:</p>\
        <ul> <li>Tener al menos 21 años</li> <li>Tener una ID nacional que o tener un número de RUT válido por 1 o más meses y que Coincida con el nombre y número de ID nacional que se ingresó durante el registro</li> \
         <li>Un permiso de circulación válido que demuestre que el vehículo: Se fabricó en el 2010 o posteriormente </li> <li>Vehículo de 4 puertas, bolsas de aire aire acondicionado</li></ul>"
    }];
    return ( 
        <div className="min-h-[600px] bg-gray-200">
            <div className="container mx-auto px-4 lg:px-20 py-10">
                <h1>Requerimientos</h1>
                <p className="text-lg mt-10">Los requerimientos mínimos que debes cumplir para conectarte como socio conductor.</p>
                {contenido.map((item, index) => <Acordian title={item.title} content={item.content} key={index}/>)}
            </div>
        </div> );
}
 
export default Requerimientos ;