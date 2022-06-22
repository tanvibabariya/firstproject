import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
      <header className="header">
  <div className="header__top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <div className="header__top__left">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="header__top__right">
            <div className="header__top__links">
              <a href="#">FAQs</a>
            </div>
            <div className="header__top__hover">
              <span>Usd <i className="arrow_carrot-down" /></span>
              <ul>
                <li>USD</li>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3">
        <div className="header__logo">
          <a href="./index.html"><img src="img/logo.png" alt /></a>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <nav className="header__menu mobile-menu">
          <ul>
            <li className="active">
              <NavLink exact to={"/"}>Home</NavLink>
              </li>
            <li><NavLink exact to={"/shop"}>Shop</NavLink></li>
            <li><a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <NavLink exact to={"/about"}>About Us</NavLink>
                  </li>
                <li>
                  <NavLink exact to={"/shop_detail"}>Shop Details</NavLink>
                  </li>
                <li>
                  <NavLink  exact to={"/shoping_cart"}>Shopping Cart</NavLink>
                  </li>
                <li><NavLink exact to={"/check_out"}>Check Out</NavLink></li>
               
              </ul>
            </li>
            <li><NavLink exact to={"/blog"}>Blog</NavLink></li>
            <li><NavLink exact to={"/contact"}>Contacts</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="header__nav__option">
          <a href="#" className="search-switch"><img src="img/icon/search.png" alt /></a>
          <NavLink  to={'/login'}><img src="img/icon/user.png" alt width={25} /></NavLink>
          <NavLink  to={'/shoping_cart'}><img src="img/icon/cart.png" alt /></NavLink>
        </div>
      </div>
    </div>
    <div className="canvas__open"><i className="fa fa-bars" /></div>
  </div>
</header>

        </div>
    );
}

export default Header;