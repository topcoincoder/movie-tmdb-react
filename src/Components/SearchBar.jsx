import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import GlobalState from "../Context/globalState";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { value } = useContext(GlobalState);
  const  setMovies = value[1];

  const [searchTerm, setSearchTerm] = useState("");

  async function searchMovies(searchTerm) {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1&include_adult=false&query=" +
        searchTerm
    );
    setMovies(response.data.results);
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searchMovies(event.target.value);
  };

  return (
    <div className="relative container h-20 pl-4 pt-5">
      <input
        type="text"
        className="h-10 w-64 pl-5 rounded z-0 focus:shadow focus:outline-none"
        placeholder="Search movie..."
        onChange={handleChange}
        value={searchTerm}
      />
      <div className="absolute left-60 top-8">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
