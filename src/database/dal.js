import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const dals=[

    {
      "id":33,
      "title": "Chana Dal",
      "description":"Good Life Roasted Chana Dal / Split Bengal Gram 200 g",
      "price":22,
      "image":"https://www.jiomart.com/images/product/600x600/491187295/good-life-roasted-chana-dal-split-bengal-gram-200-g-product-images-o491187295-p491187295-0-202208282349.jpg",
      "MRP":"Rs 35",
      "RP":"MRP",
      "discount":"37 %",
      "offer":"off",
  
    },
  
  
  
    {
      "id":34,
      "title": "Toor Dal",
      "description":"Good Life Unpolished Toor Dal 500 g",
      "price":79,
      "image":"https://www.jiomart.com/images/product/600x600/492851037/good-life-unpolished-toor-dal-500-g-product-images-o492851037-p591219161-0-202204261917.jpg",
      "MRP":"Rs 91",
      "RP":"MRP",
      "discount":"13 %",
      "offer":"off",
  
    },
  
  
    {
      "id":35,
      "title": "Moong Dal",
      "description":"Best Farms Moong Dal 500 g",
      "price":69,
      "image":"https://www.jiomart.com/images/product/600x600/491168384/best-farms-moong-dal-500-g-product-images-o491168384-p491168384-0-202203170745.jpg",
      "MRP":"Rs 85",
      "RP":"MRP",
      "discount":"18 %",
      "offer":"off",
  
    },
  
    {
      "id":36,
      "title": "Urad Dal",
      "description":"Good Life Unpolished Urad Dal 1 kg",
      "price":161,
      "image":"https://www.jiomart.com/images/product/600x600/492851047/good-life-unpolished-urad-dal-1-kg-product-images-o492851047-p591219171-0-202204261917.jpg",
      "MRP":"Rs 170",
      "RP":"MRP",
      "discount":"5 %",
      "offer":"off",
  
    },
  
  
  ];
  

const Dals=()=>{
    return(
<div>

<h1 style={css_style} id="dal">Dals</h1>
        <Fru x={dals}/>
</div>
    );
}


export default Dals;