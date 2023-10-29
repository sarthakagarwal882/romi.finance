import styles from "./Footer.module.css";
import { AiOutlineMedium } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { BsTwitter, BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className={styles["Footer-wrapper"]}>
      <div className={styles["Footer-logo"]}>
        <img src="/assets/logo.png" alt="MetaMask" />
        <p>Romi Finance</p>
      </div>
      <div className={styles["Footer-social-link-block"]}>
        <BsTwitter />

        <AiOutlineMedium />

        <BsGithub />

        <FaTelegram />

        <IoLogoDiscord />
      </div>
      <div className={styles["Footer-links"]}>
        <a className={styles["Footer-link"]} href="#/terms-and-conditions">
          Terms and Conditions
        </a>
        <a className={styles["Footer-link"]} href="#/referral-terms">
          Referral Terms
        </a>
        <a
          target="_blank"
          href="https://docs.zomi.finance"
          className={styles["Footer-link"]}
          rel="noopener noreferrer"
        >
          Media Kit
        </a>
      </div>
    </div>
  );
}
