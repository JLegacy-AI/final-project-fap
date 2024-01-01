import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import PAYMENT from "../assets/payments.png";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start text-muted mt-3"
      style={{
        backgroundColor: "#FBFBFB",
      }}
    >
      <section class="">
        <div class="container text-center text-md-start pt-4 pb-4">
          <div class="row mt-3">
            <div class="col-6 col-sm-4 col-lg-3">
              <h6 class="text-uppercase text-black fw-bold mb-2">Store</h6>
              <ul class="list-unstyled mb-4 mt-5 ">
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Find store
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Categories
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-sm-4 col-lg-3">
              <h6 class="text-uppercase text-black fw-bold mb-2">
                Information
              </h6>
              <ul class="list-unstyled mb-4 mt-5 ">
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Money refund
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Shipping info
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Refunds
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-sm-4 col-lg-3">
              <h6 class="text-uppercase text-black fw-bold mb-2">Support</h6>
              <ul class="list-unstyled mb-4 mt-5 ">
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Documents
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    Account restore
                  </a>
                </li>
                <li>
                  <a class="text-black text-decoration-none " href="#">
                    My orders
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-sm-12 col-lg-3">
              <h6 class="text-uppercase text-black fw-bold mb-2">
                GET IN THE KNOW
              </h6>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control  bg-transparent rounded-0 "
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon2"
                  style={{
                    border: "1px solid black",
                    borderWidth: "0px 0px 2px 0px",
                  }}
                />
                <button
                  class="btn btn-light border-0 shadow-0 bg-transparent "
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class=" px-5">
        <div class="container ">
          <hr />
          <div className="d-flex w-100 row">
            <div className="col-5">
              <p>
                © 2020 FasTech Systems Private Limited Sukkur,
                <br />
                Privacy Policy Terms & Conditions
              </p>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <img className="" height={30} src={PAYMENT} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
