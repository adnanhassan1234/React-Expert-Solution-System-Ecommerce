import React from "react";
import { NavLink } from "react-router-dom";
// import FormatPrice from '../Helper/FormatPrice';

const Product = (currElm) => {
  //   console.log("🚀 ~ file: Product.js:7 ~ Product ~ currElm:", currElm);
  const { id, img, name, price } = currElm; // destructring
  return (
    <>
      <div className="col-lg-6 col-md-6 col-12">
        <NavLink
          to={`/singleproduct/${id}`}
          className="nav-link"
          activeClassName="active"
          exact
        >
          <div className="full my-2">
            <figure className="feature_products mb-0">
              <img src={img} alt="no-image-display" />
              <figcaption>
                <div className="category">
                  <h3>{name}</h3>
                </div>
              </figcaption>
            </figure>
            <div className="card mb-0">
              <div className="card-head">
                <div className="title p-2">
                  <h5>
                    {name.slice(0, 33)}...
                    <span className="price">
                      <strong>Price: {price}</strong>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Product;
