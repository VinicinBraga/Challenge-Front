import React from "react";
import "./style.css";

function EditProduct(props) {
  const fazPut = (url, body) => {
    console.log("body:", body);
    let request = new XMLHttpRequest();
    request.open("PUT", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
      console.log(this.responseText);
    };

    return request.responseText;
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let url = `http://localhost:3001/produtos/${props.id}`;
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

    fazPut(url, body);
    props.seteditEditOpened(false);
    window.location.reload();
  };

  const cancelEdit = () => {
    window.location.reload();
  };

  return (
    <div className="datails-container">
      <h4>Alterações</h4>
      <p className="subtitle">Produto</p>
      <input value={props.product} id="product" />
      <p className="subtitle">Valor</p>
      <input id="price" />
      <p className="subtitle">Descrição</p>
      <input id="description"></input>

      <button className="add-btn" type="submit" onClick={handleEdit}>
        SALVAR
      </button>
      <button className="add-btn" type="submit" onClick={cancelEdit}>
        CANCELAR
      </button>
    </div>
  );
}

export default EditProduct;
