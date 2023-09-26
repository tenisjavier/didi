import React from "react";
import Image from "../Image";
import FooterColumn from "./FooterColumn";
import { getFooterTarjetaDeCreditoLinks } from "../../config/footer-tarjeta-de-credito-config";
import FooterItem from "./FooterItem";

interface DiDiCreditFooterProps { }

const DiDiCreditFooter: React.FC<DiDiCreditFooterProps> = ({ }) => {
  const countryCode = "mx";
  const { contactanos, regulacion, blog, siguenos } = getFooterTarjetaDeCreditoLinks(countryCode);

  return (
    <footer className='bg-gray-median text-white flex justify-center flex-col items-center'>
      <div className="lg:gap-16 lg:p-24 p-6 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start justify-between">
          <FooterColumn title={contactanos.title} items={contactanos.items} />
          <FooterColumn title={regulacion.title} items={regulacion.items} />
          <div className="flex flex-col gap-3">
            <FooterColumn title={blog.title} items={blog.items} />
            <FooterColumn isColumn={false} title={siguenos.title} items={siguenos.items} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-24 w-full">
          <div>
            <Image src="/mx/tarjeta-de-credito/logo_DiDi_White.png" imageData={{
              title: 'DiDi Credit',
              description: 'DiDi Credit',
            }} imageStyle="w-[168px]" />
            <p>© 2020 Regigold, S.A. DE C.V., SOFOM, E.N.R. (DiDi Card) es una entidad financiera <br /> registrada y supervisada por la Comisión Nacional para la Protección y Defensa de <br /> los Usuarios de Servicios Financieros y por la Comisión Nacional Bancaria de Valores.</p>
          </div>
          <FooterItem link="https://privacy-center.didiglobal.com/MX/privacy-notice/6e82a0c4e8becd1ab7788c1978c2f719/Mexico" text="Consulta Términos y Condiciones generales aquí"></FooterItem>
        </div>
      </div>
      <div className="w-full bg-orange-primary text-center py-6 px-6">
        <p>Regigold, S.A. DE C.V., SOFOM, E.N.R., Av. Paseo de la Reforma No. 509, Piso 33, Col. Cuauhtémoc, CP 06500, Cuauhtémoc, CDMX.</p>
      </div>
    </footer >
  );
}

export default DiDiCreditFooter;