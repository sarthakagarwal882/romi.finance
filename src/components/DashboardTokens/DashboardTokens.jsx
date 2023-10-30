import PieCharts from "../PieChart/PieChart";
import styles from "./DashboardTokens.module.css";
import { BsChevronDown } from "react-icons/bs";
import React from 'react'
export default function DashboardTokens() {
  return (
    <div className={styles.tokens}>
      <div className={styles["tokens-header"]}>
        <div>
          <h3>Tokens</h3>
          <img src="/assets/ic_avalanche.svg" alt="" />
        </div>
        <div>
          <p>Platform and $ZLP index tokens.</p>
        </div>
      </div>

      <div className={styles["tokens-charts"]}>
        <div className={styles.chart}>
          <div className={styles["chart-data"]}>
            <div className={styles["chart-title"]}>
              <div className={styles["chart-title-icon"]}>
                <img src="/assets/zomi.png" alt="" />
              </div>
              <div className={styles["chart-title-text"]}>
                <p>$ZOMI</p>
                <p>$ZOMI</p>
              </div>
              <div className={styles["chart-title-arrow"]}>
                <BsChevronDown />
              </div>
            </div>
            <div className={styles["chart-content"]}>
              <div>
                <p>Price</p>
                <div>
                  <p>$0.00</p>
                  <div className={styles["tkn-ch-single-line"]}>
                    <div>
                      <p>Price on Ethereum:</p>
                      <p>$...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>Supply</p>
                <p>10,000 $ZOMI</p>
              </div>
              <div>
                <p>Total Staked</p>
                <div>
                  <p>$0</p>
                  <div className={styles["tkn-ch-double-line"]}>
                    <div>
                      <p>{"title"} on Ethereum:</p>
                      <p>...</p>
                    </div>
                    <hr />
                    <div>
                      <p>Total:</p>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>Market Cap</p>
                <p>$10</p>
              </div>
            </div>
          </div>

          <div className={styles["chart-pie"]}>
            <PieCharts partition={true}/>
            <p>Distribution</p>
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles["chart-data"]}>
            <div className={styles["chart-title"]}>
              <div className={styles["chart-title-icon"]}>
                <img src="/assets/zlp.png" alt="" />
              </div>
              <div className={styles["chart-title-text"]}>
                <p>$ZLP</p>
                <p>$ZLP</p>
              </div>
              <div className={styles["chart-title-arrow"]}>
                <BsChevronDown />
              </div>
            </div>
            <div className={styles["chart-content"]}>
              <div>
                <p>Price</p>
                <p>$1.146</p>
              </div>
              <div>
                <p>Supply</p>
                <p>29 $ZLP</p>
              </div>
              <div>
                <p>Total Staked</p>
                <p>$34</p>
              </div>
              <div>
                <p>Market Cap</p>
                <p>$34</p>
              </div>
              <div>
                <p>Stablecoin Percentage</p>
                <p>49.50%</p>
              </div>
            </div>
          </div>

          <div className={styles["chart-pie"]}>
          <PieCharts partition={false}/>
          <p>$ZLP Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
}
