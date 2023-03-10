import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";
import "./Home.scss";

export default function Home() {
  localStorage.setItem("Tvalue", "0");

  localStorage.setItem("Tproducts", "0");

  const data = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1672192166851-71d218e64544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      url2: "https://media.istockphoto.com/id/93477758/photo/stock-photo-black-forest-cake.jpg?s=612x612&w=0&k=20&c=44Hh7YNKSMxtqUMA7IfZhDo3PGxnnnQ0P3V43px03QE=",
      description: "Strawberry Cake",
      price: 10,
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXdiZXJyeSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      url2: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvaXNzYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "Strawberry cake piece",
      price: 20,
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/1214305490/photo/blackforest-cake.jpg?s=612x612&w=0&k=20&c=yxQZHJ6HSGamPFo5UId6JeC0RICcuZo1DuXfYWIdpyY=",
      url2: "https://www.fnp.com/images/pr/l/v20221205145048/black-forest-cake-half-kg_1.jpg",
      description: "Black forest cake",
      price: 15,
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/538997372/photo/black-forest-cake.jpg?s=612x612&w=0&k=20&c=U8x0Ccz3DD6cFsqBmJUlIvtDDFIkAPzSjHbX_V0jIzU=",
      url2: "https://www.fnp.com/images/pr/l/v20221205145218/black-forest-designer-cake-half-kg_1.jpg",
      description: "Black forest with vanilla cream",
      price: 12,
    },
  ];
  return (
    <div className="Home">
      <div className="slider">
        <Slider />
      </div>
      <div className="newproducts"> New products</div>

      <div className="bottom">
        {data.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div className="link">
        <Link to="/Checkout">Link to checkout page</Link>
      </div>
    </div>
  );
}
