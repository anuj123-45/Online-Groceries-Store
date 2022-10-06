import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const hair_care=[

    {
      "id":49,
      "title": "Dove Shampoo",
      "description":"Dove Nutritive Solutions Daily Shine Shampoo 650 ml",
      "price":370,
      "image":"https://www.jiomart.com/images/product/600x600/490729027/dove-nutritive-solutions-daily-shine-shampoo-650-ml-product-images-o490729027-p490729027-0-202203150922.jpg",
      "MRP":"Rs 740",
      "RP":"MRP",
      "discount":"50 %",
      "offer":"off",
  
    },
  
  
  
    {
      "id":50,
      "title": "Tresemme Shampoo",
      "description":"Tresemme Hair Fall Defense Shampoo 580 ml",
      "price":370,
      "image":"https://www.jiomart.com/images/product/600x600/490966833/tresemme-hair-fall-defense-shampoo-580-ml-product-images-o490966833-p490966833-0-202203150929.jpg",
      "MRP":"Rs 670",
      "RP":"MRP",
      "discount":"44 %",
      "offer":"off",
  
    },
  
  
  
    {
      "id":51,
      "title": "Sunslik Shampoo",
      "description":"Sunsilk Lusciously Thick & Long Shampoo 650 ml",
      "price":307,
      "image":"https://www.jiomart.com/images/product/600x600/490729029/sunsilk-lusciously-thick-long-shampoo-650-ml-product-images-o490729029-p490729029-0-202203151352.jpg",
      "MRP":"Rs 615",
      "RP":"MRP",
      "discount":"50 %",
      "offer":"off",
  
    },
  
    
  
    {
      "id":52,
      "title": "Coconut Oil",
      "description":"Parachute 100% Pure Coconut Hair Oil 600 ml",
      "price":222,
      "image":"https://www.jiomart.com/images/product/600x600/491294658/parachute-100-pure-coconut-hair-oil-600-ml-product-images-o491294658-p590120586-0-202203170157.jpg",
      "MRP":"Rs 239",
      "RP":"MRP",
      "discount":"7 %",
      "offer":"off",
  
    },
  
  ];
  

const HairCare=()=>{
    return(
<div>
<h1 style={css_style}><marquee>Personal Care</marquee> </h1>
<br/>
<h1 style={css_style} id="hair">Hair Care</h1>
        <Fru x={hair_care}/>
</div>
    );
}


export default HairCare;