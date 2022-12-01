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
      className={`w-full h-full p-0 m-0 fixed z-30 bg-orange-primary text-white items-center left-0 bottom-0 flex justify-center`}
    >
      <div className="bg-gray-primary rounded shadow-md p-8 relative left-1/4">
        <h2 className="text-xl text-left">Protected Site</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="text-right w-full"></div>
    </section>
  );
};

export default PasswordPopup;
