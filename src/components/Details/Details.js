import React, { useState } from "react";
import "./style.css";
import { IconContext } from "react-icons";
import { HiPencil } from "react-icons/hi";
import { RiDeleteBin7Line } from "react-icons/ri";
import EditProduct from "../EditProduct/EditProduct";

function Details(props) {
  const [editOpened, seteditEditOpened] = useState(false);

  const deleteProduct = () => {
    fetch(`http://localhost:3001/delete/${props.id}`, {
      method: "DELETE",
    }).then(() => console.log("Delete successful"));
    window.location.reload();
  };

  return (
    <div className="datails-container">
      {editOpened ? (
        <EditProduct
          product={props.produto}
          value={props.valor}
          description={props.descricao}
          id={props.id}
          seteditEditOpened={seteditEditOpened}
        />
      ) : (
        <div>
          <div id="product" className="product-name">
            {props.product}
          </div>
          <div className="price-tag">Valor</div>
          <div id="price" className="price">
            {props.value}
          </div>
          <div id="description" className="details-info">
            {props.description}
          </div>
          <hr className="line"></hr>
          <button
            className="toEdit-btn"
            onClick={() => seteditEditOpened(true)}
          >
            <IconContext.Provider
              value={{ className: "edit-pen", size: 20, color: "#fff" }}
            >
              <HiPencil></HiPencil> EDITAR
            </IconContext.Provider>
          </button>
          <button className="toEdit-btn" onClick={deleteProduct}>
            <IconContext.Provider
              value={{
                className: "edit-pen",
                size: 19,
                backgroundColor: "#fff",
              }}
            >
              <RiDeleteBin7Line></RiDeleteBin7Line> DELETE
            </IconContext.Provider>
          </button>
        </div>
      )}
    </div>
  );
}

export default Details;
