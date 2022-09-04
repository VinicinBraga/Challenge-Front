import React from "react";
import "./style.css";
import { IconContext } from "react-icons";
import { HiTag } from "react-icons/hi";

function Products(props) {
  return (
    <div className="product-container">
      {props.products.map((product, key) => {
        return (
          <div className="product-list">
            <div
              className="product-item"
              onClick={(e) => props.handleDetails(e)}
              id={product.produto}
            >
              <div className="item" key={key}>
                <h4>{product.produto}</h4>
                <p>Eletrônico</p>
                <h4>R$ {product.valor}</h4>
              </div>
              <div>
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 20,
                    color: "#2c3e45",
                  }}
                >
                  <HiTag className="label-btn">Label</HiTag>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
