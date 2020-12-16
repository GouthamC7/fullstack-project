import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import "./Home.css";
import background from "./background.jpg";
import Products from "./Products";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );

  // return (
  //   <div className="home">
  //     <div className="home-container">
  //       <img src={background} alt="background" className="home-img" />
  //       <div className="home-row">
  //         {products.map((product) => (
  //           <Products
  //             id={1}
  //             price={1.22}
  //             rating={4}
  //             image={product.image}
  //             name="NAME OF PRODUCT #1"
  //           />
  //         ))}

  //         {/* <Products
  //           id={2}
  //           price={99.99}
  //           image={background}
  //           rating={0}
  //           name="NAME OF PRODUCT #2"
  //         /> */}
  //       </div>
  //       <div className="home-row"></div>
  //       <div className="home-row"></div>
  //     </div>
  //   </div>
  // );
};

export default HomeScreen;
