import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = function ({ term, handler, placeholder }) {
  // const getSearchTerm = (event) => {
  //   handler(event.target.value);
  // };
  return (
    <div className="flex items-center">
    <div className="relative w-2/3">
      <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      <input
        className="bg-white focus:border-orange-primary focus:border-2 focus:border-solid focus:ring-3 focus:ring-orange-primary focus:outline-none w-full text-xl text-black placeholder-gray-500 border border-gray-400 rounded-md py-3 pl-10"
        type="text"
        placeholder={`Buscar ${placeholder}`}
        value={term}
        // onChange={getSearchTerm}
      />
      
    </div>
    <button className="bg-orange-primary h-full text-xl w-1/4 py-2 ml-2 rounded-lg"> Buscar </button>
    </div>
  );
};

export default Search;
