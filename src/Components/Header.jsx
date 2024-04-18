import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import SortBy from "./SortBy";
import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();
  const welcomeMessage = user ? `Welcome, ${user.nickname}` : "";

  return (
    <div className="bg-purple-600 flex">
      <SideBar />
      <SortBy />  
      <SearchBar />

      <div className="text-white text-xl font-bold mx-12 mt-2">
        {welcomeMessage}
      </div>

      <div className="container w-1/2  text-white flex items-center">
        <div className="header-btn" onClick={() => navigate("/")}>
          🏠 Home
        </div>
        <div className="header-btn" onClick={() => navigate("/Favourites")}>
          ❤️ Favorites
        </div>
        <div className="header-btn" onClick={() => navigate("/WatchLater")}>
          ⌚ Watch Later
        </div>
        <div className="header-btn" onClick={() => navigate("/Completed")}>
          ✔️ Completed
        </div>

        <div className="logout-btn" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
