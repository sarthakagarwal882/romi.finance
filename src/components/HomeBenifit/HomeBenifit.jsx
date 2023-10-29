import styles from "./HomeBenifit.module.css";

export function HomeBenifit() {
  return (
    <div className={styles["benefit-wrapper"]}>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles["benifit-icon"]}>
            <img
              src="/assets/ic_liquidity.svg"
              alt="Reduce Liquidation Risks Icon"
              className={styles["benifit-icon-symbol"]}
            />
            <div className={styles["benifit-title"]}>
              Reduce Liquidation Risks
            </div>
          </div>
          <div className={styles["benifit-description"]}>
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </div>
        </div>

        <div className={styles.benifit}>
          <div className={styles["benifit-icon"]}>
            <img
              src="/assets/ic_cost.svg"
              alt="Save on Costs Icon"
              className={styles["benifit-icon-symbol"]}
            />
            <div className={styles["benifit-title"]}>Save on Costs</div>
          </div>
          <div className={styles["benifit-description"]}>
            Enter and exit positions with minimal spread and zero price impact.
            Get the optimal price without incurring additional costs.
          </div>
        </div>

        <div className={styles.benifit}>
          <div className={styles["benifit-icon"]}>
            <img
              src="/assets/ic_simpleswaps_up_down.svg"
              alt="Simple Swaps Icon"
              className={styles["benifit-icon-symbol"]}
            />
            <div className={styles["benifit-title"]}>Simple Swaps</div>
          </div>
          <div className={styles["benifit-description"]}>
            Open positions through a simple swap interface. Conveniently swap
            from any supported asset into the position of your choice.
          </div>
        </div>
      </div>
    </div>
  );
}
