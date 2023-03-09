import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ContextProduct";
import AddToCart from "./AddToCart";
import { GrDeliver } from 'react-icons/gr';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const SingleProduct = () => {
  const { id } = useParams();
  // console.log("~ SingleProduct ~ id:", id);
  const URL ='https://my-json-server.typicode.com/benirvingplt/products/products';

  const { getSingleProduct, singleProduct, loading } = useProductContext();

  const { name, colour, price, img } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${URL}?id=${id}`);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* ======= single product data  ======= */}
      <div className="single_product_data my-5">
        <div className="container">
          <div className="row">
            {/* ======= col-md-6 col-12 ========= */}

            <div className="col-md-6 col-12">
              <img src={img} width="80%" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <div className="full">
                <div className="product_data">
                  <div className="product_title">
                    <h3>{name}</h3>
                  </div>
                  <div className="product_data_price">
                    <p>Price: {price} </p>
                  </div>
                  <div className="product-color">
                    <b>
                      {" "}
                      <p>Color: {colour} </p>
                    </b>
                  </div>
                  <div className="product_description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Alias pariatur asperiores amet consequuntur suscipit
                      similique eos in fugiat vitae unde aliquam, porro a quod
                      fugit omnis quia enim voluptate odio.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-1 mb-3 text-center">
                          <div className="icon my-2">  <GiReceiveMoney /></div>
                          <div className="title">
                            <h5>Free Delivery</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-2 text-center">
                          <div className="icon my-2">
                            <MdSecurity />
                          </div>
                          <div className="title">
                            <h5>30 Days Replacement</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-2 my-3 text-center">
                          <div className="icon my-2">
                            <GiReceiveMoney />
                          </div>
                          <div className="title">
                            <h5>Hassan Delivered</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-4 mb-3 text-center">
                          <div className="icon my-2">
                            <RiSecurePaymentLine />
                          </div>
                          <div className="title">
                            <h5>1 Year Warranty</h5>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <hr className="hr" />
                  </div>
                  <div className="stock_available mt-3">
                    {/* <p> Available :  <b className="bolds"> {stock > 0 ? "In Stock" : "Not Available"} </b></p> */}
                  </div>
                  <div className="product_id">
                    {/* <p> ID :  <b className="bolds"> {id} </b></p> */}
                  </div>
                  <div className="product_brand">
                    {/* <p> Brand :  <b className="bolds"> {company} </b></p> */}
                  </div>
                  <div className="color_scheme">
                    <AddToCart product={singleProduct} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
