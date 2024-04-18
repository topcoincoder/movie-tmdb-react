import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";
import Header from './Header';
import Footer from './Footer';

const WatchLater = () => {
  const { value3 } = useContext(GlobalState);
  const watchlist= value3[0];

  return (
    <>
    <Header />
    <CFWL props={watchlist} />
    <Footer />
    </>
  )
}

export default WatchLater
