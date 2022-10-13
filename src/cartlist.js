import React from 'react';

const CartList=({cart})=>{
    return(
<div>
    {
        cart.map((item,index)=>{
            return(
                <div key={index}>
                    <img src={item.image} width={40}/>
                    <span>{item.title}</span>
                    <button >-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                    <span>{item.price}</span>

                </div>
            );
        })
    }
</div>
    );
}

export default CartList;