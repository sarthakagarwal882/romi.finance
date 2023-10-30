import GreenButton from "../GreenButton/GreenButton";
import HomeCard from "../HomeCard/HomeCard";
import styles from "./Home.module.css";
import React from 'react'
export default function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles.home}>
        <h1>
          Decentralized
          <br />
          Perpetual Exchange
        </h1>
        <p>
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
          leverage directly from your wallet
        </p>
        <GreenButton content="Launch Exchange" />
      </div>
      <div className={styles["Home-latest-info-container"]}>
        <HomeCard type="trading" />
        <HomeCard type="stats" />
        <HomeCard type="users" />
      </div>
    </div>
  );
}
