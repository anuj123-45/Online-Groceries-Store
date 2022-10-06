// fruits and vegetables;

// fruits

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const css_style={textAlign:'center'};















const Fru=({x})=>{

  const items=x.map((value)=>{
    return (

<Col  l={4}  className="d-inline-block card col-card" style={{width:'16rem',margin:'10px'}} id={value.id}>
<div className="card " style={{height:'65vh'}} >
  <img className="card-img-top position-relative" src={value.image} alt="Card image cap" style={{width:'100%',height:'200px'}}/>
  <div className="position-absolute top-0 start-0 " >
 <h2><span class="badge text-bg-danger rounded-circle"  >{value.discount}{value.offer}
 </span></h2>
 </div>

  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <p className="card-price"><span><b>Rs {value.price}</b></span>&ensp;&ensp;<span>{value.RP}&nbsp;<s>{value.MRP}</s></span></p>
    
  </div>
  <button className="btn btn-primary add-to"  >Add to cart</button>
</div>
  </Col>
    );
  })

return(
    <div>
      {items}  
    </div>
);


}

export default Fru;



// export default function GroceriesData(){
//   return(
//    <div >
{/* <h1 style={css_style}><marquee>  Fruits and Vegetables</marquee> </h1>
<br/>
<h1 style={css_style} id="fruits">Fruits</h1> */}

// <Fru x={Fruits} />

   
    
//      <br/>
//      <h1 style={css_style} id="veg">Vegetables</h1>
//      <Fru x={vegetable} />

//      <br/>
//      <h1 style={css_style}><marquee>Beverages</marquee> </h1>
//      <br/>
//      <h1 id="juice">Juice</h1>
//      <Fru x={soft_drinks}/>
// <br/>
//      <h1 id="tea">Tea</h1>
// <Fru x={tea}/>
// <br/>
//      <h1 id="fjuice">Fruit juice</h1>
// <Fru x={fruit_juice}/>

// <br/>
// <h1 style={css_style}><marquee>Staples</marquee> </h1>
//      <br/>
//      <h1 id="atta">Atta & Sooji</h1>
//      <Fru x={atta}/>
// <br/>
//       <h1 id="dal">Dals</h1>
// <Fru x={dals}/>
// <br/>
//      <h1 id="oil">Edible oil</h1>
// <Fru x={oils}/> 


// <br/>
// <h1 style={css_style}><marquee>Dairy Products</marquee> </h1>
//      <br/>
//      <h1 id="dairy">Dairy</h1>
//      <Fru x={dairy}/>
// <br/>
//       <h1 id="ghee">Ghee</h1>
// <Fru x={ghee}/>


// <br/>
// <h1 style={css_style}><marquee>Personal Care</marquee> </h1>
//      <br/>
//      <h1 id="hair">Hair Care</h1>
//      <Fru x={hair_care}/>
// <br/>
// <h1 id="hair">Oral Care</h1>
//      <Fru x={oral_care}/>






















//    </div>
    
//   );
// };



