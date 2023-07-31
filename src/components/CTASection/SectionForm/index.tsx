import React from "react";
import SmsSender from "../../SmsSender";
import { BtnType } from "../../Btn";

interface SectionFormProps {
  qr?: React.ReactNode;
  smsFormTitle?: string;
  btnType?: BtnType;
}

const SectionForm = ({ btnType, qr, smsFormTitle }: SectionFormProps) => {
  return (
    <form>
      <div className="grid font-bold">
        <div className="grid justify-items-center grid-cols-2 xl:pl-0 lg:pl-8">
          <div className="grid w-150 justify-items-center mx-5 items-center xl:pl-0 lg:pl-6">
            {qr}
            <p className="text-center text-xs">
              Escanea el código QR con la cámara de tu celular y descarga la
              app.
            </p>
          </div>
          <div className="grid font-bold mt-2">
            {smsFormTitle}
            {btnType === "RidesSmsCTA" ? (
              <SmsSender smsType={"RidesSmsCTA"} />
            ) : (
              <SmsSender smsType={"FoodSmsCTA"} />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SectionForm;
