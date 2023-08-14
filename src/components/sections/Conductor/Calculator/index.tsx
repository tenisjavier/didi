import React from "react";

type CityType = {
  name: string;
  amountPerHour?: number;
}

interface CalculatorProps {
  cities: CityType[];
}

const Calculator = ({ cities }: CalculatorProps) => {
  const steps = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  const data = cities?.map((city: CityType) => {
    return {
      name: city.name,
      amountPerHour: Math.floor(Math.random() * 1000)
    }
  });

  const [amount, setAmount] = React.useState<number>(0);
  const [hoursPerWeek, setHoursPerWeek] = React.useState<number>(steps[0]);

  const handleCalculatorAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: number = Number(e.currentTarget.value);
    setAmount(value * 10);
  }

  //-webkit-slider-thumb

  return (
    <div className="bg-orange-primary my-10 p-10 flex flex-col justify-center">
      <div className="flex items-center gap-10 justify-center">
        <div className="bg-white p-4 h-52 rounded-md">
          <p>Quanto ganha em média um motorista parceiro 99 por semana?</p>
        </div>
        <div className="bg-white p-4 h-52 rounded-md">
          <select name="countrys" onChange={(e) => handleCalculatorAmount(e)}>
            {data?.map((city) => (
              <option value={city.amountPerHour} key={city.name}>{city.name}</option>
            ))}
          </select>
          <p className="">Resultado: {amount !== 0 && amount}</p>
        </div>
      </div>
      <div className="mt-8">
        <input
          className="w-full h-2 outline-none"

          type="range"
          min={0}
          max={steps.length - 1}
          value={steps.indexOf(hoursPerWeek)}
          onChange={(e) => setHoursPerWeek(steps[Number(e.currentTarget.value)])}
        />
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <span key={index} className={step === hoursPerWeek ? "text-orange-600" : ""}>{step}</span>
          ))}
        </div>
        <img src="/car.png" width={20} height={20} />
      </div>
    </div>
  );
}

export default Calculator;
