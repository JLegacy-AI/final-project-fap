import React from "react";
import { FiUser } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-white py-4 px-5">
      <div class="container-fluid">
        <a class="navbar-brand fs-3" href="/">
          Grace
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center align-items-center "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                CONTACT US
              </a>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-link">
                <FiUser />
              </button>
              <button type="button" class="btn btn-link position-relative">
                <RiShoppingBag3Line />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0<span class="visually-hidden">unread messages</span>
                </span>
              </button>
              <button type="button" class="btn btn-link">
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
