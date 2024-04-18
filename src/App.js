// https://www.themoviedb.org/documentation/api
import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalState from "./Context/globalState";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./Components/Movies";
import Favourites from './Components/Favourites';
import WatchLater from './Components/WatchLater';
import Completed from './Components/Completed';
import SideBar from "./Components/SideBar";
import { nanoid } from 'nanoid';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [url, setUrl] = useState("https://api.themoviedb.org/3/trending/movie/week?api_key=df032f0bbf7881c7e18f93539c8a73ba&page=");
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        url + pageCount
      );
      setMovies(res.data.results);
    }
    fetchData();
  }, [pageCount, url]);
  

  return (

    <GlobalState.Provider
      value={{
        value: [movies, setMovies],
        value2: [favourites, setFavourites],
        value3: [watchlist, setWatchlist],
        value4: [completed, setCompleted],
        value5: [pageCount, setPageCount],
        value6: [url, setUrl]
      }} >


      <BrowserRouter>
        <Routes>
          <Route path={nanoid()} element={<SideBar />} />
          <Route path="/*" element={<Movies />} />
          <Route path="/:genre" element={<Movies />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/WatchLater" element={<WatchLater />} />
          <Route path="/Completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>

    </GlobalState.Provider>
  );
}

export default App;
