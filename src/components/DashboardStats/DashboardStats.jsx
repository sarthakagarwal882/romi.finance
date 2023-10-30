/* eslint-disable no-unused-vars */
import styles from "./DashboardStats.module.css";
import React from 'react'
export default function DashboardStats() {
  return (
    <div className={styles.stats}>
      <div className={styles["stats-header"]}>
        <div>
          <h3>Stats</h3>
          <img src="/assets/ic_avalanche.svg" alt="" />
        </div>
        <div>
          <p>Ethereum Total Stats start from 06 Jan 2022.</p>
          <p>For detailed stats:</p>
        </div>
      </div>

      <div className={styles["stats-charts"]}>
        <div className={styles.chart}>
          <div className={styles["chart-title"]}>
            <p>Overview</p>
          </div>
          <div className={styles["chart-content"]}>
            <div>
              <p>AUM</p>
              <div>
                <p>$34</p>
                <div className={styles["cht-ct-single-line"]}>
                  <p>
                    Assets Under Management: $ZOMI staked (All chains) + $ZLP
                    pool (Ethereum)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p>$ZLP Pool</p>
              <div>
                <p>$34</p>
                <div className={styles["cht-ct-single-line"]}>
                  <p>Total value of tokens in $ZLP pool (Ethereum)</p>
                </div>
              </div>
            </div>
            <div>
              <p>24h Volume</p>
              <div>
                <p>$0</p>
                <div className={styles["cht-ct-double-line"]}>
                  <div>
                    <p>{"{title}"}on Ethereum:</p>
                    <p>$0</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>$0</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Long Positions</p>
              <div>
                <p>$0</p>
                <div className={styles["cht-ct-double-line"]}>
                  <div>
                    <p>{"{title}"}on Ethereum:</p>
                    <p>$0</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>$0</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Short Positions</p>
              <div>
                <p> $0</p>
                <div className={styles["cht-ct-double-line"]}>
                  <div>
                    <p>{"{title}"}on Ethereum:</p>
                    <p>$0</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>$0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles["chart-title"]}>
            <p>TotalStats</p>
          </div>
          <div className={styles["chart-content"]}>
            <div>
              <p>Total Fees</p>
              <div>
                <p>$0</p>
                <div className={styles["cht-ct-double-line"]}>
                  <div>
                    <p>{"{title}"}on Ethereum:</p>
                    <p>$0</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>$0</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Total Volume</p>
              <div>
                <p>$0</p>
                <div className={styles["cht-ct-double-line"]}>
                  <div>
                    <p>{"{title}"}on Ethereum:</p>
                    <p>$0</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>$0</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Floor Price Fund</p>
              <p>$626,888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
