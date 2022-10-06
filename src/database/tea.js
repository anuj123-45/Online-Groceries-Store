import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const tea=[


    {
      "id":21,
      "title": "Brooke Bond",
      "description":"Brooke Bond Red Label Strong Blend Tea 1 kg",
      "price":420,
      "image":"https://www.jiomart.com/images/product/600x600/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202208101817.jpg",
      "MRP":"Rs 570",
      "RP":"MRP",
      "discount":"26 %",
      "offer":"off",
  
    },
  
    {
      "id":22,
      "title": "Red Label",
      "description":"Brooke Bond Red Label Natural Care Tea 500 g",
      "price":269,
      "image":"https://www.jiomart.com/images/product/600x600/490967439/brooke-bond-red-label-natural-care-tea-500-g-product-images-o490967439-p490967439-0-202208121842.jpg",
      "MRP":"Rs 330",
      "RP":"MRP",
      "discount":"18 %",
      "offer":"off",
  
    },
  
    {
      "id":23,
      "title": "Lipton Green Tea",
      "description":"Lipton Honey Lemon Green Tea Bags 1.4 g (25 pcs)",
      "price":140,
      "image":"https://www.jiomart.com/images/product/600x600/491161973/lipton-honey-lemon-green-tea-bags-1-4-g-25-pcs-product-images-o491161973-p491161973-0-202208121842.jpg",
      "MRP":"Rs 165",
      "RP":"MRP",
      "discount":"15 %",
      "offer":"off",
  
    },
  
    {
      "id":24,
      "title": "Girnar",
      "description":"Girnar Desi Kahwa Detox Green Tea Bags 10 pcs",
      "price":93,
      "image":"https://www.jiomart.com/images/product/600x600/491028264/girnar-desi-kahwa-detox-green-tea-bags-10-pcs-carton-product-images-o491028264-p491028264-0-202203170333.jpg",
      "MRP":"Rs 100",
      "RP":"MRP",
      "discount":"7 %",
      "offer":"off",
  
    },
  
  
  ];
  

const Tea=()=>{
    return(
<div>

<h1 style={css_style} id="tea">Tea</h1>
        <Fru x={tea}/>
</div>
    );
}


export default Tea;