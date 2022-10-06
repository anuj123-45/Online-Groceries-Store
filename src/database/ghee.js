import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const ghee=[
  
    {
      "id":45,
      "title": "Milky Mist Ghee",
      "description":"Milky Mist Cow Ghee 1 L (Jar)",
      "price":609,
      "image":"https://www.jiomart.com/images/product/600x600/491070289/milky-mist-cow-ghee-1-l-jar-product-images-o491070289-p590950364-0-202203170918.jpg",
      "MRP":"Rs 699",
      "RP":"MRP",
      "discount":"12 %",
      "offer":"off",
  
    },
  
    {
      "id":46,
      "title": "Gowardhan Ghee",
      "description":"Gowardhan Pure Cow Ghee 1 L (Pouch)",
      "price":609,
      "image":"https://www.jiomart.com/images/product/600x600/490010244/gowardhan-pure-cow-ghee-1-l-pouch-product-images-o490010244-p490010244-0-202203150918.jpg",
      "MRP":"Rs 655",
      "RP":"MRP",
      "discount":"7 %",
      "offer":"off",
  
    },
  
  
    {
      "id":47,
      "title": "Patanjali Ghee",
      "description":"Patanjali Cow Ghee 500 ml (Carton)",
      "price":310,
      "image":"https://www.jiomart.com/images/product/600x600/491249531/patanjali-cow-ghee-500-ml-carton-product-images-o491249531-p491249531-0-202203152254.jpg",
    },
  
    {
      "id":48,
      "title": "Chitale Ghee",
      "description":"Chitale Pure Cow Ghee 500 ml (Container)",
      "price":309,
      "image":"https://www.jiomart.com/images/product/600x600/491432517/chitale-pure-cow-ghee-500-ml-container-product-images-o491432517-p590113351-0-202203151907.jpg",
      "MRP":"Rs 330",
      "RP":"MRP",
      "discount":"6 %",
      "offer":"off",
  
    },
  ];
  
  

const Ghee=()=>{
    return(
<div>

<h1 style={css_style} id="ghee">Ghee</h1>
        <Fru x={ghee}/>
</div>
    );
}


export default Ghee;