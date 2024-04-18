import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";
import Header from './Header';
import Footer from './Footer';

const Completed = () => {
  const { value4 } = useContext(GlobalState);
  const completed= value4[0];

  return (
    <>
    <Header />
    <CFWL props={completed} />
    <Footer />
    </>
  )
}

export default Completed
