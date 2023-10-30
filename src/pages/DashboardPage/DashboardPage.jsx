/* eslint-disable no-unused-vars */
import DashboardStats from "../../components/DashboardStats/DashboardStats";
import DashboardTokens from "../../components/DashboardTokens/DashboardTokens";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./DashboardPage.module.css";
import React from 'react'

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles["dash-wrapper"]}>
      <DashboardStats/>
      <DashboardTokens/>
      </div>
      <Footer />
    </div>
  );
}
