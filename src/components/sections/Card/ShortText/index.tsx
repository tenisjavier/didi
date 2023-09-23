import React from "react";
import { t } from "../../../../context/countryContext";
import textHighlighter from "../../../../util/textHighlighter";

interface ShortTextProps { }

const ShortText = ({ }: ShortTextProps) => {

  const props = {
    title: t("ShortText.title"),
    color: t("ShortText.textColor"),
  };

  return (
    <div
      className='w-full justify-center p-6 items-center'
      style={{
        borderBottom: '1px solid #E2591F',
      }}
    >
      <p className='text-2xl p-0 m-0 text-center'>{textHighlighter(props.title)}</p>
    </div>
  );
};

export default ShortText;
