import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "../../Image";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface VehicleOptionProps {
  src: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const VehicleOption: React.FC<VehicleOptionProps> = ({ src, label, isActive, onClick }) => {
  const colors = isActive ? 'bg-white border-orange-primary text text-orange-primary' : 'bg-gray-300 border-gray-300 text-gray-500'

  return (
    <div onClick={onClick} className={`${colors}  cursor-pointer font-bold relative flex flex-col justify-center items-center p-4  border-2 border-solid rounded-lg`}>
      <FontAwesomeIcon icon={faCheckCircle} className={`absolute top-4 right-4 text-lg ${isActive ? 'text-orange-primary' : 'text-gray-500'}`} />
      <Image src={src} imageData={{
        title: label,
        description: label,
      }}
        imageStyle={`${isActive ? 'lg:w-48 lg:h-44 md:w-48 md:h-44 w-32 h-28 mb-2' : 'lg:w-40 lg:h-36 md:w-40 md:h-36 w-24 h-[86px] mb-2'}`}
      />
      <span className=''>{label}</span>
    </div>
  )
}

export default VehicleOption;