import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import { LuWallet2 } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import GreenButton from "../GreenButton/GreenButton";
const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  const [nftDropdown, setNftDropdown] = useState(0);

  const handleNftDropOver = () => {
    setNftDropdown(1);
  };
  const handleNftDropLeave = () => {
    setNftDropdown(0);
  };

  useEffect(() => {
    console.log(activeLink);
    console.log(location.pathname);
    if (location.pathname === "/dashboard") setActiveLink("dashboard");
    else if (location.pathname === "/earn") setActiveLink("earn");
  }, []);

  return (
    <nav className={classes.navbar}>
      <Link to={"/"}>
        <div className={classes.header}>
          <img src="/assets/logo.png" alt="" />
          <h1>Romi Finance</h1>
        </div>
      </Link>

      <div className={classes.menu}>
        <ul>
          <li>
            <Link to={"/"} className={(activeLink==="home")&&(classes.active)}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"} className={(activeLink==="dashboard")&&(classes.active)}>
              <p>Dashboard</p>
            </Link>
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
            <Link to={'/earn'} className={(activeLink==="earn")&&(classes.active)}>
            <p>Earn</p>
            </Link>
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
        <GreenButton content="Trade" />
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
