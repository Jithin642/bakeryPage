import React from 'react'
import Product from '../components/Product/Product'
import  Slider from '../components/Slider/Slider';
import "./Home.scss";

export default function Home() {

    localStorage.setItem("Tvalue","0");
    
    localStorage.setItem("Tproducts","0");

  
   const data=[{
    id:1,
    url:"https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
    description:"im at 1",
    price:10,
   },
   {
    id:2,
    url:"https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg" ,
    description:"im at 2",
    price:20,
   },
   {
    id:3,
    url:"https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs=" ,
    description:"im at 3",
    price:15,
   },
   {
    id:4,
    url:"https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs=" ,
    description:"im at 4",
    price:12,
   },
    ]
  return (
    <div className='Home'>
        <div className='slider'>
        <Slider />
        </div>
        <div className='newproducts'> New products</div>
    
        <div className='bottom'>
            
            {data.map(item=>
                <Product item={item} key={item.id} />
            )}
        </div>
        
    </div>
  )
}
