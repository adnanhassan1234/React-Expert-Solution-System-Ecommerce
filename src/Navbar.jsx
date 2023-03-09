import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "./Context/Cart_context";

const Navbar = () => {
  const { total_item } = useCartContext();

  return (
    // Navbar section
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink to="/" className="logo">
            <img src="img/expert.jfif" width="30%" alt="logo" />
            {/* <h5>EXPERT SOLUTION SYSTEM</h5> */}
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav menus navbar-collapse mx-4">
              <NavLink
                to="/"
                className=" nav-link"
                exact
                activeClassName="active"
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/about"
                className=" nav-link"
                exact
                activeClassName="active"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/products"
                className=" nav-link"
                exact
                activeClassName="active"
              >
                SERVICE
              </NavLink>
              <NavLink
                exact
                to="/contact"
                className=" nav-link"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </div>
            <div className="navbar-navs mx-auto">
              <NavLink to="/cart" className="btn btn-light total_item mx-1">
                <FiShoppingCart className="crimson text-danger" />
                <span className="total-cart-item"> </span>
                <sup>
                  <b>{total_item}</b>
                </sup>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
