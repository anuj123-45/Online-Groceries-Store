import React , {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './jsondata';
import CartList from './cartlist';
import Slide from './slider';
import {Link}  from 'react-router-dom';

const Tab=()=>{
    const[data,setData]=useState(Products);

  const filterResult=(cartitem)=>{
    const result=Products.filter((curData)=>{
        return curData.category===cartitem;
    })
   
    setData(result);

    console.log(result);
  }

  


//const addToCart=(cartData)=>{
//   if(s.has(cartData.id)){
//     alert("item taken");

//     return;
//   }
//   else {
//    
 
//   }
//   s.add(cartData.id);
// }

const  [cart,setCart]=useState([]);

function addToCart(cartData){
   setCart([...cart,{...cartData,quantity:1}]);
}







    return(
   <>
  
<CartList cart={cart}/>

<div className="d-flex align-items-center" style={{border:'2px solid black'}} >
<Container className='border border-3  ' style={{width:'300px',background:'#D5D5D5'}}> 

    <Row><Col><h3>Category</h3></Col></Row>
<Row >
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample"><b>Fruits & Vegetables</b></a>
</Col>
    </Row>

    <Row>
        <Col><div className="collapse" id="collapseExample">
 
   <ul  style={{listStyle:'none'}}>
    <li onClick={()=>filterResult("Fruits")}><a href="#f" className="text-decoration-none text-dark" ><b>Fruits</b></a></li>
    <li onClick={()=>filterResult("Vegetables")}><a href="#f" className="text-decoration-none text-dark"><b>Vegetables</b></a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample2"><b>Beverages</b></a>
</Col>
    </Row> 

    <Row>
        <Col><div className="collapse" id="collapseExample2">
 
   <ul  style={{listStyle:'none'}}>
    <li  onClick={()=>filterResult("Energy and Soft Drinks")}><a href="#f" className="text-decoration-none text-dark"><b>Energy and Soft Drinks</b></a></li>
    <li onClick={()=>filterResult("Tea")}><a href="#f" className="text-decoration-none text-dark"><b>Tea</b></a></li>
    <li onClick={()=>filterResult("Fruit juice")}><a href="#f" className="text-decoration-none text-dark"><b>Fruit juice</b></a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample3"><b>Staples</b></a>
</Col>
    </Row>

    <Row>
        <Col><div className="collapse" id="collapseExample3">
 
   <ul  style={{listStyle:'none'}}>
    <li onClick={()=>filterResult("Atta , Flours & Sooji")}><a href="#f" className="text-decoration-none text-dark"><b>Atta , Flours & Sooji</b></a></li>
    <li  onClick={()=>filterResult("Dals and Pulses")}><a href="#f" className="text-decoration-none text-dark"><b>Dals and Pulses</b></a></li>
    <li  onClick={()=>filterResult("Edible Oils")}><a href="#f" className="text-decoration-none text-dark"><b>Edible Oils</b></a></li>
   </ul>
</div></Col>

    </Row>

    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample4"><b>Dairy & Bakery</b></a>
</Col>

    </Row>

    <Row>
        <Col><div className="collapse" id="collapseExample4">
 
   <ul  style={{listStyle:'none'}}>
    <li onClick={()=>filterResult("Dairy")}><a href="#f" className="text-decoration-none text-dark"><b>Dairy</b></a></li>
    <li onClick={()=>filterResult("Ghee")}><a href="#f" className="text-decoration-none text-dark"><b>Ghee</b></a></li>

   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample5"><b>Personal Care</b></a>
</Col>

    </Row>

    <Row>
        <Col><div className="collapse" id="collapseExample5">
 
   <ul  style={{listStyle:'none'}}>
    <li onClick={()=>filterResult("Hair Care")}><a href="#f" className="text-decoration-none text-dark"><b>Hair Care</b></a></li>
    <li onClick={()=>filterResult("Oral Care")}><a href="#f" className="text-decoration-none text-dark"><b>Oral Care</b></a></li>

   </ul>
</div></Col>
    </Row>

</Container>  
<Slide/>
</div>

<Container style={{marginTop:'20px'}} id="f">
<Row style={{justifyContent:'center',border:'2px solid black',textAlign:'center'}}>
        
        {data.map((value)=>{
        return(
           
            
                <div  l={4} className="d-inline-block card col-card" style={{width:'16rem',margin:'10px'}} key={value.id}>
          <div className="card h-200" style={{height:'70vh'}}>
          <img className="card-img-top position-relative" src={value.image} alt="Card image cap" style={{width:'100%'}}/>
          <div className="position-absolute top-0 start-0 " >
         <h2><span className="badge text-bg-danger rounded-circle"  >{value.discount}{value.offer}
         </span></h2>
         </div>
        
          <div className="card-body " style={{height:'160px'}}>
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.description}</p>
            <p className="card-price"><span><b>Rs {value.price}</b></span>&ensp;&ensp;<span>{value.RP}&nbsp;<s>{value.MRP}</s></span></p>
            
          </div> 
          <button type="button" className="btn btn-outline-warning fw-bold"  onClick={() =>addToCart(value)}>Add To Cart</button>
        </div>
        </div> 
        
        ); 
        })}
        
        </Row>


</Container>
    </>
    );
}

export default Tab;