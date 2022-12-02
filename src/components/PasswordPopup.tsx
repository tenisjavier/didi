import React from "react";
import { useState } from "react";

interface PasswordPopupProps {
  handleShowPassword: (x: boolean) => {};
}

const PasswordPopup = ({ handleShowPassword }: PasswordPopupProps) => {
  const [pass, setPass] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pass === "didi_international") handleShowPassword(false);
  };

  return (
    <section
      className={`w-full h-full p-0 m-0 fixed z-30 bg-gray-light text-white items-center grid justify-center`}
    >
      <div className="bg-gray-primary rounded shadow-md p-10">
        <h2 className="text-xl text-left">Protected Site</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-5 "
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          />
        </form>
      </div>
      <div className="text-right w-full"></div>
    </section>
  );
};

export default PasswordPopup;
