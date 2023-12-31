import { useState } from "react";
import { Link } from "react-router-dom";
import Favorites from "./pages/Favorites";
function Header(props) {
  return (
    <header className="d-flex justify-between p-40">
      <div className="d-flex align-center ">
        <img src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Magazin luchshix kroccovok</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205rub.</span>
        </li>
        <li onClick={props.onClickFavorites} className="mr-30 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
