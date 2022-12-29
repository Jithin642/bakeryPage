import React, { useEffect, useState } from "react";
import "./Product.scss";

export default function Product({ item }) {
  localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item.price));

  const calculatePrice = () => {
    let priceOfItem = parseInt(localStorage.getItem(item.id), 10);
    let TotalPriceTillNow = parseInt(localStorage.getItem("Tvalue"), 10);
    let numProducts = parseInt(localStorage.getItem("Tproducts"), 10);

    localStorage.removeItem("Tvalue");
    localStorage.removeItem("Tproducts");
    let TotalPrice;

    if (Type == false) {
      TotalPrice = priceOfItem + TotalPriceTillNow;
      numProducts++;
      setType(true);
    } else {
      TotalPrice = TotalPriceTillNow - priceOfItem;
      numProducts--;
      setType(false);
    }
    localStorage.setItem("Tvalue", JSON.stringify(TotalPrice));
    localStorage.setItem("Tproducts", JSON.stringify(numProducts));
  };

  const [Type, setType] = useState(false);

  return (
    <div>
      <div className="product">
        <div className="image">
          <img src={item.url} className="mainImg" />
          <img src={item.url2} ait="no image" className="secondImg" />
        </div>
        <div className="wrapper">
          <div className="itemname">{item.description}</div>
          <div className="itemprice">${item.price}</div>
          <div className="addtocart">
            {/* <button onClick={calculatePrice}>
                {Type}
            </button> */}
            {!Type && <button onClick={calculatePrice}>Add to cart</button>}
            {Type && <button onClick={calculatePrice}>Remove from cart</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
