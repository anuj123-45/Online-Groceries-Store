import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};

const fruit_juice=[

    {
      "id":25,
      "title": "Maaza",
      "description":"Maaza Mango Drink 600 ml",
      "price":32,
      "image":"https://www.jiomart.com/images/product/600x600/490001797/maaza-mango-drink-600-ml-product-images-o490001797-p490001797-0-202203151523.jpg",
      "MRP":"Rs 40",
      "RP":"MRP",
      "discount":"20 %",
      "offer":"off",
  
    },
  
  
    {
      "id":26,
      "title": "Guava juice",
      "description":"B Natural Guava Gush Juice 1 L",
      "price":65,
      "image":"https://www.jiomart.com/images/product/600x600/490249967/b-natural-guava-gush-juice-1-l-product-images-o490249967-p490249967-0-202203151704.jpg",
      "MRP":"Rs 130",
      "RP":"MRP",
      "discount":"50 %",
      "offer":"off",
  
    },
  
  
    {
      "id":27,
      "title": "Pomegranate Juice",
      "description":"Real Fruit Power Masala Pomegranate Juice 1 L",
      "price":67,
      "image":"https://www.jiomart.com/images/product/600x600/491419456/real-fruit-power-masala-pomegranate-juice-1-l-product-images-o491419456-p491419456-0-202203170317.jpg",
      "MRP":"Rs 135",
      "RP":"MRP",
      "discount":"50 %",
      "offer":"off",
  
    },
  
  
    {
      "id":28,
      "title": "Mango Drink",
      "description":"Paper Boat Aamras Mango Drink 200 ml",
      "price":17,
      "image":"https://www.jiomart.com/images/product/600x600/491055555/paperboat-aamras-mango-drink-200-ml-pouch-product-images-o491055555-p491055555-0-202203170237.jpg",
      "MRP":"Rs 35",
      "RP":"MRP",
      "discount":"51 %",
      "offer":"off",
  
    },
  ];
  

const FruitJuice=()=>{
    return(
<div>

<h1 style={css_style} id="fjuice">Fruit Juice</h1>
        <Fru x={fruit_juice}/>
</div>
    );
}


export default FruitJuice;