import React from "react";
const Cart = ({cart,handleCartRemove}) => {
    return (
        <div className='flex'>
            {
                cart.map((value,index) => <div key={index}>
                    <img className='w-[100px] mx-1.5' src={value.image} alt="" />
                    <button onClick = {() => handleCartRemove(value.id) } className='btn btn-warning btn-sm'>x</button>
                </div> )
            }
        </div>
    );
};

export default Cart;