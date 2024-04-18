import React, { useContext } from "react";
import GlobalState from "../Context/globalState";
import CFWL from "./CFWL";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";


const Movies = () => {
  const { value, value5 } = useContext(GlobalState);
  const movies = value[0];
  const [pageCount, setPageCount] = value5;
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    isAuthenticated ? (
    <>
    <Header />
      <CFWL props={movies} />
      <div className="flex w-screen justify-between">
        <div
          className="btn"
          onClick={() => setPageCount(Math.max(1, pageCount - 1))}
        >
          Previous 
        </div>
        <div
          className="btn"
          onClick={() => setPageCount(Math.min(10, pageCount + 1))}
        >
          Next 
        </div>
      </div>
    <Footer />
    
    </>
    ) : (
      <div className= "flex w-screen py-32">
      <div className="text-5xl mx-16 text-white">You are not logged in.</div>
      <div className="login-btn" onClick={loginWithRedirect}>
        Login
      </div>
    </div>
    )
  );
};

export default Movies;
