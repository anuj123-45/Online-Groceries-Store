import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};


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
    "title": "Bhindi",
    "description":"Bhindi (Okra) 250 g",
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
  
  

const Veg=()=>{
    return(
<div>
<h1 style={css_style} id="veg">Vegetables</h1>
        <Fru x={vegetable}/>
</div>
    );
}


export default Veg;