import React from "react";
import Image from "../Image";
import FooterColumn from "../DiDiPrestamosFooter/FooterColumn";
import { getFooterPrestamosLinks } from "../../config/footer-prestamos-config";
import FooterItem from "../DiDiPrestamosFooter/FooterItem";

interface DiDiCreditFooterProps { }

const DiDiCreditFooter: React.FC<DiDiCreditFooterProps> = ({ }) => {
  const countryCode = "mx";
  const { contactanos, regulacion, blog, siguenos } =
    getFooterPrestamosLinks(countryCode);

  return (
    <footer className="bg-gray-median text-white flex justify-center flex-col items-center">
      <div className="lg:gap-16 lg:p-24 p-6 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start justify-between">
          <FooterColumn title={contactanos.title} items={contactanos.items} />
          <FooterColumn title={regulacion.title} items={regulacion.items} />
          <div className="flex flex-col gap-3">
            <FooterColumn title={blog.title} items={blog.items} />
            <FooterColumn
              isColumn={false}
              title={siguenos.title}
              items={siguenos.items}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-24 w-full">
          <div>
            <Image
              src="/mx/tarjeta-de-credito/logo_DiDi_White.png"
              imageData={{
                title: "DiDi Credit",
                description: "DiDi Credit",
              }}
              imageStyle="w-[168px]"
            />
            <p>
              DiDi Pay, S.A. de C.V. es una entidad supervisada por la Procuraduría Federal del Consumidor (PROFECO) y obligada a cumplir
              conforme a lo discpuesto en la Ley de Transparencia y Ordenamiento de los Servicios Financieros.
            </p>
            <p>
              Cuide su capacidad de pago, generalmente sus pagos por créditos no debe de exceder en conjunto del 35% de sus ingresos periódicos, los
              costos por mora son muy elevados.
            </p>
            <p>
              Incumplir con sus obligaciones te puede generar comisiones e intereses moratorios
            </p>
            <p>
              ¹ CAT promedio informativo 315% sin IVA
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-primary text-center py-6 px-6">
        <p>
          Regigold, S.A. DE C.V., SOFOM, E.N.R., Av. Paseo de la Reforma No.
          509, Piso 33, Col. Cuauhtémoc, CP 06500, Cuauhtémoc, CDMX.
        </p>
      </div>
    </footer>
  );
};

export default DiDiCreditFooter;
