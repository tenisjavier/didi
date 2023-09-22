import React from "react";
import { t } from "../../../../context/countryContext";

interface ShortTextProps { }

const ShortText = ({ }: ShortTextProps) => {

  const props = {
    title: t("ShortText.title"),
    color: t("ShortText.textColor"),
  };

  return (
    <div className='w-full justify-center p-6 items-center'>
      <p className='text-2xl p-0 m-0 text-center'>{props.title}</p>
    </div>
  );
};

export default ShortText;
