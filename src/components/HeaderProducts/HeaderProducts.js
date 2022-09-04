import React from "react";
import "./style.css";
import { IconContext } from "react-icons";
import { BsFillPlusCircleFill } from "react-icons/bs";

function HeaderProducts(props) {
  return (
    <div>
      <div className="header-products">
        <h1 className="main-title">Produtos</h1>
        <IconContext.Provider
          value={{ className: "add-tag", size: 30, color: "#2c3e45" }}
        >
          <BsFillPlusCircleFill
            className="add-product"
            onClick={() => props.setIsModalVisible(true)}
          ></BsFillPlusCircleFill>
        </IconContext.Provider>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="sub-title">
        <div className="sub-title-box1">
          <h4>Lista de Produtos</h4>
        </div>
        <div className="sub-title-box2">
          <h4>Detalhes</h4>
        </div>
      </div>
    </div>
  );
}

export default HeaderProducts;
