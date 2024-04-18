import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";
import Header from './Header';
import Footer from './Footer';

const Favourites = () => {
  const { value2 } = useContext(GlobalState);
  const favourites= value2[0];

  return (
    <>
    <Header />
    <CFWL props={favourites} />
    <Footer />
    </>
  )
}

export default Favourites;
