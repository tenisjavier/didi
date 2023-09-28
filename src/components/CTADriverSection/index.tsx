import React, { useState } from 'react';
import Btn, { BtnMode, BtnType } from '../Btn';
import VehicleOption from './VehicleOption';
import Bullets from './Bullets';

type VehicleOptionType = '4 ruedas' | '2 ruedas';

type vehicleType = {
  image: string;
  text: string;
}

export interface CTADriverSectionProps {
  title: string;
  subTitle: string;
  vehicles: vehicleType[];
  bulletTitle: string;
  bulletDesc: string;
  bulletFooter: string;
  bulletsCar?: string[];
  bulletsMotorcycle?: string[];
  btnType?: BtnType;
  btnMode?: BtnMode;
}

const CTADriverSection: React.FC<CTADriverSectionProps> = ({
  title,
  subTitle,
  vehicles,
  bulletTitle,
  bulletDesc,
  bulletFooter,
  bulletsCar,
  bulletsMotorcycle,
  btnType,
  btnMode
}) => {

  const [vehicle, setVehicle] = useState<VehicleOptionType>('4 ruedas');

  const handleChangeVehicle = (vehicle: VehicleOptionType) => {
    setVehicle(vehicle);
  };

  return (
    <div className='flex justify-center items-center py-20'>
      <div className="flex justify-center container flex-col">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-lg font-bold text-orange-primary">{subTitle}</p>
        <div className='flex lg:flex-row flex-col justify-between gap-6'>
          <div className="flex gap-4 items-center flex-wrap lg:flex-nowrap">
            {vehicles?.map((item, index) => (
              <VehicleOption
                key={index}
                src={item.image}
                label={item.text}
                isActive={vehicle === item.text}
                onClick={() => handleChangeVehicle(item.text as VehicleOptionType)}
              />
            ))}
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-orange-primary">{bulletTitle}</h3>
            <p>{bulletDesc}</p>
            {vehicle === '4 ruedas' && (
              <Bullets data={bulletsCar} />
            )}
            {vehicle === '2 ruedas' && (
              <Bullets data={bulletsMotorcycle} />
            )}
            <p>{bulletFooter}</p>
            <Btn btnType={btnType} btnMode={btnMode} btnTextCenter></Btn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTADriverSection;
