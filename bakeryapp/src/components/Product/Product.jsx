import React, { useEffect, useState } from "react";
import "./Product.scss";

export default function Product({ item }) {
  localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item.price));

  const calculatePrice = () => {
    let priceOfItem = parseInt(localStorage.getItem(item.id), 10);
    let TotalPriceTillNow = parseInt(localStorage.getItem("Tvalue"), 10);
    let TotalPrice = priceOfItem + TotalPriceTillNow;
    localStorage.removeItem("Tvalue");
    localStorage.setItem("Tvalue", JSON.stringify(TotalPrice));

    let numProducts = parseInt(localStorage.getItem("Tproducts"), 10);
    numProducts++;
    localStorage.removeItem("Tproducts");
    localStorage.setItem("Tproducts", JSON.stringify(numProducts));

    setType(true);
  };

  const calculatePrice2 = () => {
    let priceOfItem = parseInt(localStorage.getItem(item.id), 10);
    let TotalPriceTillNow = parseInt(localStorage.getItem("Tvalue"), 10);

    let TotalPrice = TotalPriceTillNow - priceOfItem;
    localStorage.removeItem("Tvalue");
    localStorage.setItem("Tvalue", JSON.stringify(TotalPrice));

    let numProducts = parseInt(localStorage.getItem("Tproducts"), 10);
    numProducts--;
    localStorage.removeItem("Tproducts");
    localStorage.setItem("Tproducts", JSON.stringify(numProducts));

    setType(false);
  };
  const [Type, setType] = useState(false);

  return (
    <div>
      <div className="product">
        <div className="image">
          <img src={item.url} className="image1" />
        </div>
        <div className="wrapper">
          <div className="itemname">{item.description}</div>
          <div className="itemprice">${item.price}</div>
          <div className="addtocart">
            {/* <button onClick={calculatePrice}>
                {Type}
            </button> */}
            {!Type && <button onClick={calculatePrice}>Add to cart</button>}
            {Type && (
              <button onClick={calculatePrice2}>Remove from cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
