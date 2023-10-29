/* eslint-disable react/prop-types */
import styles from "./HomeCard.module.css";

export default function HomeCard(props) {
  let img = "";
  let title = "";
  let dollar = "";
  const { type } = props;
  if (type === "trading") {
    img = "/assets/ic_trading_up_down.svg";
    title = "Total Trading Volume";
    dollar = "$";
  } else if (type === "stats") {
    img = "/assets/ic_stats.svg";
    title = "Open Interest";
    dollar = "$";
  } else if (type === "users") {
    img = "/assets/ic_totaluser.svg";
    title = "Total Users";
  }
  return (
    <div className={styles["Home-latest-info-block"]}>
      <img
        src={img}
        alt="Total Trading Volume Icon"
        className={styles["Home-latest-info__icon"]}
      />
      <div className={styles["Home-latest-info-content"]}>
        <div className={styles["Home-latest-info__title"]}>{title}</div>
        <div className={styles["Home-latest-info__value"]}>{dollar}0</div>
      </div>
    </div>
  );
}
