import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderProducts from "./components/HeaderProducts/HeaderProducts";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";

function App() {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [detail, setdetail] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDetails = (e) => {
    setdetail(e.target.id);
  };

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <HeaderProducts setIsModalVisible={setIsModalVisible} />
      {isModalVisible ? (
        <AddProduct setIsModalVisible={setIsModalVisible} />
      ) : null}
      <div className="product-main">
        <Products products={products} handleDetails={handleDetails} />
        {products
          .filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.produto.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product, key) => {
            if (detail === product.produto) {
              return (
                <Details
                  product={product.produto}
                  value={product.valor}
                  description={product.descricao}
                  id={product._id}
                  setIsModalVisible={setIsModalVisible}
                />
              );
            } else {
              return <div></div>;
            }
          })}
      </div>
    </div>
  );
}

export default App;
