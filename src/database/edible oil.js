import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const oils=[

    {
      "id":37,
      "title": "Fortune Mustard Oil",
      "description":"Fortune Premium Kachi Ghani Pure Mustard Oil 1 L",
      "price":179,
      "image":"https://www.jiomart.com/images/product/600x600/490000525/fortune-premium-kachi-ghani-pure-mustard-oil-1-l-product-images-o490000525-p490000525-0-202203170454.jpg",
      "MRP":"Rs 209",
      "RP":"MRP",
      "discount":"14 %",
      "offer":"off",
  
    },
  
  
    {
      "id":38,
      "title": "Groundnut Oil",
      "description":"Gulab Filtered Groundnut Oil 5 L",
      "price":909,
      "image":"https://www.jiomart.com/images/product/600x600/490022513/gulab-filtered-groundnut-oil-5-l-product-images-o490022513-p490022513-0-202206301905.jpg",
      "MRP":"Rs 1171",
      "RP":"MRP",
      "discount":"22 %",
      "offer":"off",
  
    },
  
  
    {
      "id":39,
      "title": "Sunflower Refined Oil",
      "description":"Gulab Sungold Refined Sunflower Oil 15 L (Tin)",
      "price":2109,
      "image":"https://www.jiomart.com/images/product/600x600/490794273/gulab-sungold-refined-sunflower-oil-15-l-tin-product-images-o490794273-p490794273-0-202209100208.jpg",
      "MRP":"Rs 3082",
      "RP":"MRP",
      "discount":"31 %",
      "offer":"off",
  
    },
  
  
    {
      "id":40,
      "title": "Dhara Refined Oil",
      "description":"Dhara Nourish Vit A E Refined Sunflower Oil 1 L",
      "price":151,
      "image":"https://www.jiomart.com/images/product/600x600/490012729/dhara-nourish-refined-sunflower-oil-1-l-product-images-o490012729-p490012729-0-202204281543.jpg",
      "MRP":"Rs 210",
      "RP":"MRP",
      "discount":"28 %",
      "offer":"off",
  
    },
  ];
  
  

const Oil=()=>{
    return(
<div>

<h1 style={css_style} id="oil">Oils</h1>
        <Fru x={oils}/>
</div>
    );
}


export default Oil;