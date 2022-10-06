import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};


const Fruits=[
    {
        "id":1,
        "title": "Apple",
        "description":"Apple Indian 6 pcs (Pack) (Approx 750 g - 950 g)",
        "price":99,
        "image":"https://www.jiomart.com/images/product/600x600/590004487/apple-indian-6-pcs-pack-approx-750-g-950-g-product-images-o590004487-p590004487-0-202203170227.jpg",
    },
  
    {
        "id":2,
        "title": "Kiwi",
        "description":"Kiwi Green Zespri 3 pcs (Pack) (Approx 240 g - 300 g)",
        "price":119,
        "image":"https://www.jiomart.com/images/product/600x600/590001569/kiwi-green-zespri-3-pcs-pack-approx-240-g-300-g-product-images-o590001569-p590034325-0-202203150039.jpg",
    },
  
  
    {
        "id":3,
        "title": "Pineapple",
        "description":"Pineapple Queen 1 pc (Approx 700 g - 1200 g)",
        "price":82,
        "image":"https://www.jiomart.com/images/product/600x600/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg",
    },
  
  
    {
        "id":4,
        "title": "Watermelon",
        "description":"Watermelon Kiran Big 1 pc (Approx. 2800 g - 4000 g)",
        "price":139,
        "image":"https://www.jiomart.com/images/product/600x600/590001265/watermelon-kiran-1-pc-approx-2300-g-3000-g-product-images-o590001265-p590041413-0-202203142036.jpg",
    },
  
  
    {
      "id":5,
      "title": "Pear Packham",
      "description":"Pear Packham Premium Imported 4 Pc (Approx 650 g - 800 g)",
      "price":199,
      "image":"https://www.jiomart.com/images/product/420x420/599991264/pear-packham-premium-imported-4-pc-approx-740-g-860-g-product-images-o599991264-p591057892-0-202207282046.jpg",
      "MRP":"Rs 200",
      "RP":"MRP",
      "discount":"17 %",
      "offer":"off",
  
    },
  
    {
      "id":6,
      "title": "Grapefruit",
      "description":"Grapefruit Pink Premium Imported 1 pc (Approx 250 g - 350 g)",
      "price":89,
      "image":"https://www.jiomart.com/images/product/420x420/599990884/grapefruit-pink-premium-imported-1-pc-approx-300-g-450-g-product-images-o599990884-p590860280-0-202207282046.jpg",
      "MRP":"Rs 99",
      "RP":"MRP",
      "discount":"10 %",
      "offer":"off",
  
    },
  
    {
      "id":7,
      "title": "Dragon Fruit",
      "description":"Dragon Fruit Premium Imported Indian 1 Pc (Approx 400 g - 600 g)",
      "price":45,
      "image":"https://www.jiomart.com/images/product/420x420/599990112/papaya-mini-premium-indian-1-pc-approx-400-g-600-g-product-images-o599990112-p590860305-0-202207282046.jpg",
      "MRP":"Rs 55",
      "RP":"MRP",
      "discount":"18 %",
      "offer":"off",
  
    },
  
  
    {
      "id":8,
      "title": "Coconut",
      "description":"Coconut Madras Jumbo Premium Indian 1 Pc (Approx 700 g - 900 g)",
      "price":48,
      "image":"https://www.jiomart.com/images/product/420x420/599990347/coconut-madras-jumbo-premium-indian-1-pc-approx-700-g-900-g-product-images-o599990347-p590860295-0-202207282046.jpg",
      "MRP":"Rs 80",
      "RP":"MRP",
      "discount":"25 %",
      "offer":"off",
  
    },
  ]
  

const Fruit=()=>{
    return(
<div>
<h1 style={css_style}><marquee>  Fruits and Vegetables</marquee> </h1>
<br/>
<h1 style={css_style} id="fruits">Fruits</h1>
        <Fru x={Fruits}/>
</div>
    );
}


export default Fruit;