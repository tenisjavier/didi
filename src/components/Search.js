import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = function ({ term, handler, placeholder }) {
  // const getSearchTerm = (event) => {
  //   handler(event.target.value);
  // };
  return (
    <div className="relative w-1/3">
      <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      <input
        className="bg-white focus:border-orange-primary focus:ring-3 focus:ring-orange-primary focus:outline-none w-full text-xl text-black placeholder-gray-500 border border-gray-400 rounded-md py-3 pl-10"
        type="text"
        placeholder={`Search for ${placeholder}`}
        value={term}
        // onChange={getSearchTerm}
      />
    </div>
  );
};

export default Search;
