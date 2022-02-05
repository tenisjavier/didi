import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = function ({ term, handler, placeholder }) {
  // const getSearchTerm = (event) => {
  //   handler(event.target.value);
  // };
  return (
    <div className="flex items-center">
      <div className="relative w-2/3">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-xl text-gray-500"
        />
        <input
          className="focus:border-orange-primary focus:ring-3 focus:ring-orange-primary w-full rounded-md border border-gray-400 bg-white py-3 pl-10 text-xl text-black placeholder-gray-500 focus:border-2 focus:border-solid focus:outline-none"
          type="text"
          placeholder={`Buscar ${placeholder}`}
          value={term}
          // onChange={getSearchTerm}
        />
      </div>
      <button className="bg-orange-primary ml-2 h-full w-1/4 rounded-lg py-2 text-xl">
        {" "}
        Buscar{" "}
      </button>
    </div>
  );
};

export default Search;
