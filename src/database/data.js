// fruits and vegetables;

// fruits

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const css_style={textAlign:'center'};



const Fruits=[
  {
      "id":1,
      "title": "Apple",
      "description":"Apple Indian 6 pcs (Pack) (Approx 750 g - 950 g)",
      "price":99,
      "image":"https://www.jiomart.com/images/product/600x600/590004487/apple-indian-6-pcs-pack-approx-750-g-950-g-product-images-o590004487-p590004487-0-202203170227.jpg",
  },

  {
      "id":2,
      "title": "Kiwi",
      "description":"Kiwi Green Zespri 3 pcs (Pack) (Approx 240 g - 300 g)",
      "price":119,
      "image":"https://www.jiomart.com/images/product/600x600/590001569/kiwi-green-zespri-3-pcs-pack-approx-240-g-300-g-product-images-o590001569-p590034325-0-202203150039.jpg",
  },


  {
      "id":3,
      "title": "Pineapple",
      "description":"Pineapple Queen 1 pc (Approx 700 g - 1200 g)",
      "price":82,
      "image":"https://www.jiomart.com/images/product/600x600/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg",
  },


  {
      "id":4,
      "title": "Watermelon",
      "description":"Watermelon Kiran Big 1 pc (Approx. 2800 g - 4000 g)",
      "price":139,
      "image":"https://www.jiomart.com/images/product/600x600/590001265/watermelon-kiran-1-pc-approx-2300-g-3000-g-product-images-o590001265-p590041413-0-202203142036.jpg",
  },


  {
    "id":5,
    "title": "Pear Packham",
    "description":"Pear Packham Premium Imported 4 Pc (Approx 650 g - 800 g)",
    "price":199,
    "image":"https://www.jiomart.com/images/product/420x420/599991264/pear-packham-premium-imported-4-pc-approx-740-g-860-g-product-images-o599991264-p591057892-0-202207282046.jpg",
    "MRP":"Rs 200",
    "RP":"MRP",
    "discount":"17 %",
    "offer":"off",

  },

  {
    "id":6,
    "title": "Grapefruit",
    "description":"Grapefruit Pink Premium Imported 1 pc (Approx 250 g - 350 g)",
    "price":89,
    "image":"https://www.jiomart.com/images/product/420x420/599990884/grapefruit-pink-premium-imported-1-pc-approx-300-g-450-g-product-images-o599990884-p590860280-0-202207282046.jpg",
    "MRP":"Rs 99",
    "RP":"MRP",
    "discount":"10 %",
    "offer":"off",

  },

  {
    "id":7,
    "title": "Dragon Fruit",
    "description":"Dragon Fruit Premium Imported Indian 1 Pc (Approx 400 g - 600 g)",
    "price":45,
    "image":"https://www.jiomart.com/images/product/420x420/599990112/papaya-mini-premium-indian-1-pc-approx-400-g-600-g-product-images-o599990112-p590860305-0-202207282046.jpg",
    "MRP":"Rs 55",
    "RP":"MRP",
    "discount":"18 %",
    "offer":"off",

  },


  {
    "id":8,
    "title": "Coconut",
    "description":"Coconut Madras Jumbo Premium Indian 1 Pc (Approx 700 g - 900 g)",
    "price":48,
    "image":"https://www.jiomart.com/images/product/420x420/599990347/coconut-madras-jumbo-premium-indian-1-pc-approx-700-g-900-g-product-images-o599990347-p590860295-0-202207282046.jpg",
    "MRP":"Rs 80",
    "RP":"MRP",
    "discount":"25 %",
    "offer":"off",

  },
]



const vegetable=[

  {
    "id":9,
    "title": "Cucumber",
    "description":"Cucumber Regular 500 g",
    "price":19.50,
    "image":"https://www.jiomart.com/images/product/600x600/590003661/cucumber-regular-500-g-product-images-o590003661-p590034099-0-202203141953.jpg",
},


{
  "id":10,
  "title": "Green Capsicum",
  "description":"Green Capsicum 500 g",
  "price":66.0,
  "image":"https://www.jiomart.com/images/product/600x600/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg",
},




{
  "id":11,
  "title": "Bhendi",
  "description":"Bhendi (Okra) 250 g",
  "price":11,
  "image":"https://www.jiomart.com/images/product/600x600/590003550/bhendi-okra-500-g-product-images-o590003550-p590003550-0-202203170339.jpg",
},


{
  "id":12,
  "title": "Brinjal",
  "description":"Brinjal Black Big 500 g",
  "price":35,
  "image":"https://www.jiomart.com/images/product/600x600/590003544/brinjal-black-big-500-g-product-images-o590003544-p590003544-0-202203170238.jpg",
},


{
  "id":13,
  "title": "Arbi (Colocasia) Leaves",
  "description":"Arbi (Colocasia) Leaves 1 bunch (Approx 50 g - 150 g)",
  "price":10,
  "image":"https://www.jiomart.com/images/product/600x600/590000721/arbi-colocasia-leaves-1-bunch-approx-50-g-150-g-product-images-o590000721-p590000721-0-202203151517.jpg",
},


{
  "id":14,
  "title": "Cabbage",
  "description":"Cabbage per Pc (Approx 600 g - 1000 g)",
  "price":33,
  "image":"https://www.jiomart.com/images/product/600x600/590003538/cabbage-per-pc-approx-600-g-1000-g-product-images-o590003538-p590003538-0-202203170436.jpg",
},

{
  "id":15,
  "title": "BOYO Sprout Seed",
  "description":"BOYO Sprout Seed Mix for Immunity Builder 400 gms - 100% vegan",
  "price":182,
  "image":"https://www.jiomart.com/images/product/600x600/rvc7kdfmpi/boyo-sprout-seed-mix-for-immunity-builder-400-gms-100-vegan-gluten-free-product-images-orvc7kdfmpi-p591541544-0-202205231707.jpg",
  "MRP":"Rs 320",
  "RP":"MRP",
  "discount":"43 %",
  "offer":"off",

},


{
  "id":16,
  "title": "Mint leaves",
  "description":"Mint Leaves per Bunch (Approx 80 g - 150 g)",
  "price":10,
  "image":"https://www.jiomart.com/images/product/600x600/590004478/mint-leaves-per-bunch-approx-80-g-150-g-product-images-o590004478-p590004478-0-202203150316.jpg",
},



];















const Fru=({x})=>{

  const items=x.map((value)=>{
    return (

<Col  l={4}  className="d-inline-block card col-card" style={{width:'16rem',margin:'10px'}} id={value.id}>
 <div >
 <img className="card-img-top position-relative" src={value.image} width="100%" height="200" />
 <div className="position-absolute top-0 start-0 " >
 <h2><span class="badge text-bg-danger rounded-circle"  >{value.discount}{value.offer}
 </span></h2>
 </div>
 </div>
  

 
    <div className="card-body">
   
    <h5 class="card-title">{value.title}</h5>
   
      <p className="card-text">{value.description} </p>
      <p className="card-price"><span><b>Rs {value.price}</b></span>&ensp;&ensp;<span>{value.RP}&nbsp;<s>{value.MRP}</s></span></p>
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

export default function GroceriesData(){
  return(
   <div >
<h1 style={css_style}>Fruits and Vegetables</h1>
<br/>
<h1 style={css_style} id="fruits">Fruits</h1>

<Fru x={Fruits} />

   
    
     <br/>
     <h1 style={css_style} id="veg">Vegetables</h1>
     <Fru x={vegetable} />
     <h1 id="juice">Juice</h1>
     <h1 id="tea">Tea</h1>
   </div>
    
  );
};



