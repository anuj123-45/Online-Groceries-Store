import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const dairy=[
    {
      "id":41,
      "title": "Amul Butter",
      "description":"Amul Butter 500 g (Carton)",
      "price":245,
      "image":"https://www.jiomart.com/images/product/600x600/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg",
      "MRP":"Rs 255",
      "RP":"MRP",
      "discount":"3 %",
      "offer":"off",
  
    },
  
    {
      "id":42,
      "title": "Amul Toned Milk",
      "description":"Amul Taaza Homogenised Toned Milk 1 L (Tetra Pak)",
      "price":67,
      "image":"https://www.jiomart.com/images/product/600x600/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg",
      "MRP":"Rs 70",
      "RP":"MRP",
      "discount":"4 %",
      "offer":"off",
  
    },
  
    {
      "id":43,
      "title": "Chocolate Milk Shake",
      "description":"Britannia Winkin'Cow Chocolate Milkshake 200 ml",
      "price":26,
      "image":"https://www.jiomart.com/images/product/600x600/491491631/britannia-winkin-cow-chocolate-milkshake-200-ml-tetra-pak-product-images-o491491631-p491491631-0-202203170216.jpg",
      "MRP":"Rs 40",
      "RP":"MRP",
      "discount":"35 %",
      "offer":"off",
  
    },
  
  
    {
      "id":44,
      "title": "Cavin Cold Coffee",
      "description":"Cavin's Cold Coffee Flavoured Milk 180 ml (Tetra Pak)",
      "price":26,
      "image":"https://www.jiomart.com/images/product/600x600/492427534/cavin-s-cold-coffee-flavoured-milk-180-ml-tetra-pak-product-images-o492427534-p590841084-0-202203151134.jpg",
      "MRP":"Rs 35",
      "RP":"MRP",
      "discount":"25 %",
      "offer":"off",
  
    },
  ];
  

const DairyP=()=>{
    return(
<div>
<h1 style={css_style}><marquee>Dairy Products</marquee> </h1>
<br/>
<h1 style={css_style} id="dairy">Dairy</h1>
        <Fru x={dairy}/>
</div>
    );
}


export default DairyP;