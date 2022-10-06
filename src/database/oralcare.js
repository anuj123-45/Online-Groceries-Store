import React from "react";
import Fru from './data';
const css_style={textAlign:'center'};


const oral_care=[

    {
      "id":53,
      "title": "Colgate Max Fresh",
      "description":"Colgate Max Fresh Anticavity Toothpaste 150 g (Pack of 3)",
      "price":230,
      "image":"https://www.jiomart.com/images/product/600x600/491652548/colgate-max-fresh-spicy-fresh-anticavity-toothpaste-150-g-pack-of-3-product-images-o491652548-p590126552-0-202205172345.jpg",
      "MRP":"Rs 330",
      "RP":"MRP",
      "discount":"30 %",
      "offer":"off",
  
    },
  
    {
      "id":54,
      "title": "Colgate Vedshakti",
      "description":"Colgate Swarna Vedshakti Toothpaste 300 g",
      "price":118,
      "image":"https://www.jiomart.com/images/product/600x600/491438575/colgate-swarna-vedshakti-toothpaste-300-g-product-images-o491438575-p590308497-0-202209070230.jpg",
      "MRP":"Rs 178",
      "RP":"MRP",
      "discount":"33 %",
      "offer":"off",
  
    },
  
  
   
    {
      "id":55,
      "title": "Colgate Aromatic",
      "description":"Colgate Visible White O2 Aromatic Mint Toothpaste 50 g",
      "price":200,
      "image":"https://www.jiomart.com/images/product/600x600/492848090/colgate-visible-white-o2-aromatic-mint-toothpaste-50-g-product-images-o492848090-p591193843-0-202205172253.jpg",
      "MRP":"Rs 250",
      "RP":"MRP",
      "discount":"20 %",
      "offer":"off",
  
    },
  
  
  
    {
      "id":56,
      "title": "Dabur Dant Rakshak",
      "description":"Dabur Dant Rakshak Ayurvedic Paste 175 g (Pack of 2)",
      "price":79,
      "image":"https://www.jiomart.com/images/product/600x600/491961280/dabur-dant-rakshak-ayurvedic-paste-175-g-pack-of-2-product-images-o491961280-p590152287-0-202203170716.jpg",
      "MRP":"Rs 159",
      "RP":"MRP",
      "discount":"50 %",
      "offer":"off",
  
    },
  ];
  
  

const OralCare=()=>{
    return(
<div>

<h1 style={css_style} id="oral">Oral Care</h1>
        <Fru x={oral_care}/>
</div>
    );
}


export default  OralCare;