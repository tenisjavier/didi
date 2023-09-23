import React from "react";

interface SectionTitleProps {
  title: string;
  subTitle?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, textColor, subTitle }) => {
  return (
    <div className='flex justify-center items-center mt-12 flex-col gap-4'>
      <h1 className={`text-center text-5xl p-0 m-0 ${textColor}`}>{title}</h1>
      <p className={`text-center text-2xl p-0 m-0 ${textColor}`}>{subTitle}</p>
    </div>
  );
}

export default SectionTitle; SectionTitle