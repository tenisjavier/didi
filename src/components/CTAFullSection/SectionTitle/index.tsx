import React from "react";
import textHighlighter from "../../../util/textHighlighter";

interface SectionTitleProps {
  title: string;
  subTitle?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, textColor, subTitle }) => {
  return (
    <div className='flex justify-center items-center mt-12 flex-col gap-4'>
      <h1 className={`text-center text-5xl p-0 m-0 ${textColor}`}>{textHighlighter(title)}</h1>
      <p className={`text-center text-2xl p-0 m-0 ${textColor}`}>{textHighlighter(subTitle)}</p>
    </div>
  );
}

export default SectionTitle; SectionTitle