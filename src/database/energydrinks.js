import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};



const soft_drinks=[

    {
      "id":17,
      "title": "Coca Cola",
      "description":"Coca Cola 1.75 L",
      "price":58,
      "image":"https://www.jiomart.com/images/product/600x600/491121060/coca-cola-1-75-l-product-images-o491121060-p491121060-0-202206022121.jpg",
      "MRP":"Rs 90",
      "RP":"MRP",
      "discount":"35 %",
      "offer":"off",
  
    },
  
  
    {
      "id":18,
      "title": "Sprite",
      "description":"Sprite 600 ml",
      "price":30,
      "image":"https://www.jiomart.com/images/product/600x600/490001800/sprite-600-ml-product-images-o490001800-p490001800-0-202203170616.jpg",
      "MRP":"Rs 38",
      "RP":"MRP",
      "discount":"21 %",
      "offer":"off",
  
    },
  
  
    {
      "id":19,
      "title": "Marinda",
      "description":"Mirinda Orange 750 ml",
      "price":37,
      "image":"https://www.jiomart.com/images/product/600x600/491208776/mirinda-orange-750-ml-product-images-o491208776-p491208776-0-202203150750.jpg",
      "MRP":"Rs 40",
      "RP":"MRP",
      "discount":"3 %",
      "offer":"off",
  
    },
  
  
    {
      "id":20,
      "title": "Sprite",
      "description":"Sprite 300 ml",
      "price":40,
      "image":"https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg",
      "MRP":"Rs 46",
      "RP":"MRP",
      "discount":"13 %",
      "offer":"off",
  
    },
  
  ];
  

const EnergyDrinks=()=>{
    return(
<div>
<h1 style={css_style}><marquee>Beverages</marquee> </h1>
<br/>
<h1 style={css_style} id="juice">Energy Drinks</h1>
        <Fru x={soft_drinks}/>
</div>
    );
}


export default EnergyDrinks;