import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import { HomeBenifit } from "../../components/HomeBenifit/HomeBenifit";
import HomeToken from "../../components/HomeToken/HomeToken";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.css";
import React from 'react'

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Navbar />
      <Home />
      <hr />
      <HomeBenifit/>
      <HomeToken/>
      <hr />
      <Footer/>
    </div>
  );
}
