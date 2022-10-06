import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const atta=[

    {
      "id":29,
      "title": "Chakki Atta",
      "description":"Chakki Atta 10 kg",
      "price":325,
      "image":"https://www.jiomart.com/images/product/600x600/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg",
      "MRP":"Rs 395",
      "RP":"MRP",
      "discount":"17 %",
      "offer":"off",
  
    },
  
    {
      "id":30,
      "title": "Aashirvaad Select",
      "description":"Aashirvaad Select Sharbati Whole Wheat Atta 5 kg",
      "price":259,
      "image":"https://www.jiomart.com/images/product/600x600/490005641/aashirvaad-select-sharbati-whole-wheat-atta-5-kg-product-images-o490005641-p490005641-0-202206241206.jpg",
      "MRP":"Rs 326",
      "RP":"MRP",
      "discount":"20 %",
      "offer":"off",
  
    },
  
    
    {
      "id":31,
      "title": "Aashirvaad Superior",
      "description":"Aashirvaad Superior MP Whole Wheat Atta 5 kg",
      "price":234,
      "image":"https://www.jiomart.com/images/product/600x600/490750661/aashirvaad-superior-mp-whole-wheat-atta-5-kg-product-images-o490750661-p590150648-0-202203170602.jpg",
      "MRP":"Rs 280",
      "RP":"MRP",
      "discount":"16 %",
      "offer":"off",
  
    },
  
  
    {
      "id":32,
      "title": "Suji",
      "description":"Suji / Rawa 1 kg",
      "price":41,
      "image":"https://www.jiomart.com/images/product/600x600/491349663/suji-rawa-1-kg-product-images-o491349663-p491349663-0-202203170624.jpg",
      "MRP":"Rs 98",
      "RP":"MRP",
      "discount":"58 %",
      "offer":"off",
  
    },
  ];
  

const Atta=()=>{
    return(
<div>
<h1 style={css_style}><marquee>Staples</marquee> </h1>
<br/>
<h1 style={css_style} id="atta">Atta & Suji</h1>
        <Fru x={atta}/>
</div>
    );
}


export default Atta;