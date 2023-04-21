import React, { useState } from "react";

function Add(props) {
  const [newProducts, setNewProducts] = useState({
    name: "",
    price: "",
    id: 3,
  });
  const changeName = (e) => {
    setNewProducts((prev) => ({ ...prev, name: e.target.value }));
  };
  const changePrice = (e) => {
    setNewProducts((prev) => ({ ...prev, price: e.target.value }));
  };
  const [isProductValid, setIsProductValid] = useState(true);
  const addProducts = () => {
    props.onAddProduct(
      setNewProducts,
      newProducts,
      isProductValid,
      setIsProductValid
    );
  };
  const validName = (name) => {
    if (name.length < 2) {
      setIsProductValid(false);
      alert("enter more than 1 character");
    }
    if (name.split("").includes(" ")) {
      setIsProductValid(false);
      alert("enter without space");
    } else {
      setIsProductValid(true);
    }
  };
  const validPrice = (price) => {
    if (price === "0" || price === "") {
      setIsProductValid(false);
      alert("Wrong number");
    } else {
      setIsProductValid(true);
    }
  };
  return (
    <div className="add">
      <label>Product name</label>
      <input
        onInput={changeName}
        value={newProducts.name}
        onBlur={() => validName(newProducts.name)}
        type="text"
      />
      <label>Product price</label>
      <input
        onInput={changePrice}
        value={newProducts.price}
        onBlur={() => validPrice(newProducts.price)}
        type="number"
      />
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default Add;
