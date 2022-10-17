import React,  {useState,useEffect}from 'react';





const CartList=({cart})=>{


    const [CART,setCART]=useState([]);
    useEffect(()=>{
        setCART(cart);
    },[cart])

    return(

    <div>
        
   
       <h1 style={{textAlign:'center'}}>Cart</h1>
        <table border="5" cellSpacing={2} cellPadding={4} key="x" style={{margin:'auto'}}> 
    <thead key="l">
<tr key="w"><th>Image</th><th>&ensp;Name</th><th>&ensp;Quantity</th><th>&ensp;&ensp;&ensp;</th><th>Price</th><th>&ensp;&ensp;</th></tr>    
    
    </thead>
          <tbody key="g"> 
          
  { CART?.map((item,cartindex)=>{

localStorage.setItem("Prod",JSON.stringify(cart));

            return(
          
  <tr key={cartindex}><th> <img src={item.image} width={50}/></th><th> <b>{item.title}</b></th>
    <th> <button style={{width:'25px'}} onClick={()=>{
        const _CART=CART.map((item,index)=>{
            return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
        })
        setCART(_CART)
    }}>-</button><b>{item.quantity}</b><button style={{width:'25px'}} onClick={()=>{
        const _CART=CART.map((item,index)=>{
            return cartindex === index ? {...item,quantity:item.quantity+1}:item
        })
        setCART(_CART)
    }}>+</button></th><th></th>
   <th> <span>Rs {item.price*item.quantity}</span></th>
    </tr> 

      
            )

})}
  </tbody> 

</table> 
        <p style={{textAlign:'center'}}>
            <b>Total : Rs </b>
        <b onChange={(e)=>  localStorage.setItem('Cost',React.getInnerText)}>{
            CART.map(item=>item.price*item.quantity).reduce((total,value) => total+value,0)
             
                
            }
            </b>
        </p>
    <div style={{textAlign:'center'}}>
       <a href="https://accounts.google.com/v3/signin/identifier?dsh=S671300573%3A1665990437140704&continue=https%3A%2F%2Fpay.google.com%2Fpayments%2Fhome%23&followup=https%3A%2F%2Fpay.google.com%2Fpayments%2Fhome&osid=1&passive=1209600&service=billing&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWrovNN0g3qY_K4l3eBCe30MfOvxlZYczZzihgDpjoGZ5SVhIzWhbEC3CNPVe7UodJBB1Idg"> <button class="btn btn-success">Pay: Rs {
              CART.map(item=>item.price*item.quantity).reduce((total,value) => total+value,0)
        }</button></a>
        
    </div>
</div>

    );
}

export default CartList;