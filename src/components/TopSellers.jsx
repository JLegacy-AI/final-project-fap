import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <div className="card m-md-4 col-md-2 col-sm-4 col-12 border-0">
      <div
        className="w-100 object-fit-contain overflow-hidden d-flex justify-content-center align-items-center "
        style={{
          height: "300px",
        }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          height={"auto"}
          style={{
            width: "150px",
          }}
        />
      </div>
      <div className="card-body d-flex justify-content-center flex-column align-items-center ">
        <p className="fs-6 m-0 fw-bold ">
          {title.split(" ").slice(0, 2).join(" ")}
        </p>
        <p
          className="card-text m-0"
          style={{
            color: "#024E82",
          }}
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

const TopSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=8").then((res) => {
      setProducts(res.data.slice(0, 4));
    });
  }, []);

  console.log(products);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column py-5">
        <h1>Top Sellers</h1>
        <p>Browse our top-selling products</p>
      </div>
      <div className="w-100  px-3 d-flex justify-content-center align-items-center flex-wrap ">
        {products.map((product, key) => {
          return <ProductCard key={key} {...product} />;
        })}
      </div>
      <button
        className="btn px-4 border-0 outline-0 text-white rounded-0 "
        style={{
          backgroundColor: "#024E82",
        }}
      >
        SHOP NOW
      </button>
      <div
        className="w-100"
        style={{
          height: "200px",
        }}
      ></div>
    </div>
  );
};

export default TopSellers;
