/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import GreenButton from "../GreenButton/GreenButton";
import styles from "./HomeToken.module.css";
import React from 'react'
export default function HomeToken() {
  return (
    <div className={styles["Home-token-card-section"]}>
      <div className={styles["Home-token-card-container"]}>
        <div className={styles["Home-token-card-info"]}>
          <div className={styles["Home-token-card-info__title"]}>
            Two tokens create our ecosystem
          </div>
        </div>
        <div className={styles["Home-token-card-options"]}>
          <div className={styles["Home-token-card-option"]}>
            <div className={styles["Home-token-card-option-icon"]}>
              <img src="/assets/zomi.png" alt="mmxBigIcon" width="40px" /> $ZOMI
            </div>
            <div className={styles["Home-token-card-option-info"]}>
              <div className={styles["Home-token-card-option-title"]}>
                $ZOMI is the utility and governance token. Accrues 30% of the
                platform's generated fees.
              </div>
              <div className={styles["Home-token-card-option-apr"]}>
                Ethereum APR: 0.00%
              </div>
              <div className={styles["Home-token-card-option-action"]}>
                <GreenButton content="buy"/>
                <a
                  href="https://docs.zomi.financetokenomics/mmx"
                  className={styles["default-btn"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className={styles["Home-token-card-option"]}>
            <div className={styles["Home-token-card-option-icon"]}>
              <img src="/assets/zlp.png" alt="mlpBigIcon" width="40px" /> $ZLP
            </div>
            <div className={styles["Home-token-card-option-info"]}>
              <div className={styles["Home-token-card-option-title"]}>
                $ZLP is the liquidity provider token. Accrues 70% of the
                platform's generated fees.
              </div>
              <div className={styles["Home-token-card-option-apr"]}>
                Ethereum APR: 1,647,442,662.63%
              </div>
              <div className={styles["Home-token-card-option-action"]}>
                <GreenButton content="buy"/>
                <a
                  href="https://docs.zomi.financetokenomics/mlp"
                  target="_blank"
                  rel="noreferrer"
                  className={styles["default-btn"]}
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
