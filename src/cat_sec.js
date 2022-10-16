import React ,{useState} from 'react';
import Slide from './slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './jsondata';
import Pr from './product';
import { log } from 'react-modal/lib/helpers/ariaAppHider';
import Nav from './navbar';
import Hero from './hero_sec';
import CartList from './cartlist';
import { Table } from 'react-bootstrap';

const s=new Set();
const Cat=()=>{

    const[data,setData]=useState(Products);

   var Result=data;


    const filterResult=(cartitem)=>{
         Result=Products.filter((curData)=>{
            return curData.category===cartitem;
        })
       
        setData(Result);
       

    }
   

const searchCat=(val)=>{
Result=Products.filter((item)=>{
 return  item.title.toLowerCase().includes(val.toLowerCase());
   
})
setData(Result);
}



    const[cart,setCart]=useState([]);
    const[showCart,setShowCart]=useState(false);



const addToCart=(data)=>{
    
if(s.has(data.id)){
    alert("Item Already Taken");
    return;
}
else {
    setCart([...cart,{...data,quantity:1}]);
    console.log("data",cart);
    s.add(data.id);
   
    console.log(s);
}







}

const handleShow=(value)=>{
    setShowCart(value);
}



    return(
     
      <>
      <div  className="shop-cart-main">
        
    
  <Nav count={cart.length} handleShow={handleShow} searchCat={searchCat}/>
  <br/>

  <br/>

 {
    showCart?
   <CartList cart={cart}/>:
<div>
<Hero filterResult={filterResult}></Hero>

    <Pr arr={Result}  addToCart={addToCart}></Pr>
</div>

 
 }
      
      </div>
      
      </>
       
    );
    
}

export default Cat;