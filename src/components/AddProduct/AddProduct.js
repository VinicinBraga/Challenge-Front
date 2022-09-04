import React from "react";
import "./style.css";

function AddProduct(props) {
  const fazPost = (url, body) => {
    console.log("body:", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
      console.log(this.responseText);
    };

    return request.responseText;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:3001/produtos";
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    console.log(product);
    console.log(price);
    console.log(description);

    let body = {
      produto: product,
      valor: price,
      descricao: description,
    };

    fazPost(url, body);
    window.location.reload();
  };

  return (
    <div className="modal">
      <div className="container">
        <strong className="title">Novo Produto</strong>
        <form onSubmit={handleSubmit}>
          <h4 className="sub-title">Produto</h4>
          <div className="first-inputs">
            <div className="input-modal">
              <label htmlFor="product"></label>
              <input className="input-up" id="product" />
              <label htmlFor="valor"></label>
              <input className="input-up" id="price" />
            </div>
          </div>
          <h4 className="sub-title">Descrição</h4>
          <div className="input-modal">
            <label htmlFor="description"></label>
            <input className="input-up" id="description"></input>
          </div>

          <div className="btn-container">
            <div>
              <button className="add-btn" type="submit" onClick={handleSubmit}>
                ADD
              </button>
              <button
                className="close-btn"
                onClick={() => props.setIsModalVisible(false)}
              >
                FECHAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
