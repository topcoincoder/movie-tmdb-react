import React, { useState, useContext } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import GlobalState from "../Context/globalState";


function SideBar() {


  const [sidebar, setSidebar] = useState(false);
  const { value5, value6 } = useContext(GlobalState);
  const setUrl = value6[1];
  const setPageCount = value5[1];
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="z-10">
      <div className="navbar">
        <Link to="#">
          <div className="genre-btn" onClick={showSidebar}>
            <FaIcons.FaBars className="mx-4 mt-3" />
            <div> Genres </div>
          </div>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="ml-8">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <Link to={`/${item.title}`} key={index}>
              <li
                key={index}
                className="nav-text"
                onClick={() => {setPageCount(1); setUrl(item.url)}}
              >
                {index + 1}
                <span>{item.title}</span>
              </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
