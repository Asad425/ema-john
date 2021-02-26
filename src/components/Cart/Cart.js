import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

   // const totalPrice = cart.reduce((total, prd) => total +prd.price, 0);
   let total = 0;
   for(let i = 0; i< cart.length; i++){
       const product = cart[i];
       total = total + product.price;
   }
   let shipping =0;
   if(total > 35){
       shipping = 5;
   }
   else if(total > 0){
        shipping = 10;
   }
   else if(total> 35){
       shipping = 2;
   }

   const tax = (total/10).toFixed(2);
   const grandTotal =(total + shipping+Number(tax));
    return (
        <div>
            <h4>Order Summary </h4>
            <p>Items ordered: {cart.length} </p>
            <p>Product price: {total}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;