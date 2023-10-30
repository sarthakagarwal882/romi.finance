import DashboardStats from "../../components/DashboardStats/DashboardStats";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles["dash-wrapper"]}>
      <DashboardStats/>
      </div>
      <Footer />
    </div>
  );
}
