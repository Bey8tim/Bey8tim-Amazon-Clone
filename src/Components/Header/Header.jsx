import React, { useContext } from "react";
import classes from "./Header.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/*logo section*/}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/*delivery*/}
            <div className={classes.delivery}>
              <span>
                {/*location icon*/}
                <IoLocationOutline />
              </span>
              <div>
                <p>Delivered to</p>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
          {/*search bar section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoSearchOutline size={38} />
            {/*icon*/}
          </div>
          {/*other section*/}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/england/england_PNG51.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/*Account*/}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p> Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/*orders*/}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/*cart*/}
            <Link to="/cart" className={classes.cart}>
              {/*icon*/}
              <IoCartOutline size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
