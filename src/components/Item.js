import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)

  let inCartClass = inCart ? "":"in-cart"

  function cartClick(e){
    if(e.target.innerText === "Add to Cart"){
      e.target.innerText = "Remove from Cart"
      setInCart(!inCart)
    } else{
      e.target.innerText = "Add to Cart"
      setInCart(!inCart)
    }
  }

  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
