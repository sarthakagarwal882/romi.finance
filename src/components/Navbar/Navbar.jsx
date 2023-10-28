import classes from "./Navbar.module.css";
import { LuWallet2 } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import GreenButton from "../GreenButton/GreenButton";
const Navbar = () => {
  const [nftDropdown, setNftDropdown] = useState(0);

  const handleNftDropOver = () => {
    setNftDropdown(1);
  };
  const handleNftDropLeave = () => {
    setNftDropdown(0);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <img src="/assets/logo.png" alt="" />
        <h1>Romi Finance</h1>
      </div>

      <div className={classes.menu}>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Dashboard</p>
          </li>
          <li
            onMouseOver={handleNftDropOver}
            onMouseLeave={handleNftDropLeave}
            className={classes.nft}
          >
            <p>NFT</p>
            <div
              onMouseOver={handleNftDropOver}
              onMouseLeave={handleNftDropLeave}
              style={{ display: nftDropdown ? "initial" : "none" }}
              className={classes["nft-dropdown"]}
            >
              <div>
                <p>Mint</p>
              </div>
              <div>
                <p>Stake NFT</p>
              </div>
            </div>
          </li>
          <li>
            <p>Earn</p>
          </li>
          <li>
            <p>Buy</p>
          </li>
          <li>
            <p>Referrals</p>
          </li>
          <li>
            <p>Ecosystem</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
      </div>

      <div className={classes["nav-functions"]}>
        {/* <div className={classes["fnc-trade"]}>Trade</div> */}
        <GreenButton content='Trade'/>
        <div className={classes["fnc-wallet"]}>
          <LuWallet2 />
          <p>Connect Wallet</p>
        </div>
        <div className={classes["fnc-dots"]}>
          <div>
            <img
              src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg"
              alt=""
            />
            <div className={classes["dots-dropdown-seperator"]}></div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
