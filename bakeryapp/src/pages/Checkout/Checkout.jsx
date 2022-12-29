import React from 'react'

export default function Checkout() {

    let numProducts=localStorage.getItem("Tproducts");
    let Totalvalue=localStorage.getItem("Tvalue");
  return (
    <div>
        <div className='bill'>Your Bill is:${Totalvalue}</div>
        <div className='quantity'>Total number of products chosen:{numProducts}</div>
    </div>
  )
}
