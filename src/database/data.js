// fruits and vegetables;

// fruits

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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



const vegetable=[

  {
    "id":9,
    "title": "Cucumber",
    "description":"Cucumber Regular 500 g",
    "price":19.50,
    "image":"https://www.jiomart.com/images/product/600x600/590003661/cucumber-regular-500-g-product-images-o590003661-p590034099-0-202203141953.jpg",
},


{
  "id":10,
  "title": "Green Capsicum",
  "description":"Green Capsicum 500 g",
  "price":66.0,
  "image":"https://www.jiomart.com/images/product/600x600/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg",
},




{
  "id":11,
  "title": "Bhendi",
  "description":"Bhendi (Okra) 250 g",
  "price":11,
  "image":"https://www.jiomart.com/images/product/600x600/590003550/bhendi-okra-500-g-product-images-o590003550-p590003550-0-202203170339.jpg",
},


{
  "id":12,
  "title": "Brinjal",
  "description":"Brinjal Black Big 500 g",
  "price":35,
  "image":"https://www.jiomart.com/images/product/600x600/590003544/brinjal-black-big-500-g-product-images-o590003544-p590003544-0-202203170238.jpg",
},


{
  "id":13,
  "title": "Arbi (Colocasia) Leaves",
  "description":"Arbi (Colocasia) Leaves 1 bunch (Approx 50 g - 150 g)",
  "price":10,
  "image":"https://www.jiomart.com/images/product/600x600/590000721/arbi-colocasia-leaves-1-bunch-approx-50-g-150-g-product-images-o590000721-p590000721-0-202203151517.jpg",
},


{
  "id":14,
  "title": "Cabbage",
  "description":"Cabbage per Pc (Approx 600 g - 1000 g)",
  "price":33,
  "image":"https://www.jiomart.com/images/product/600x600/590003538/cabbage-per-pc-approx-600-g-1000-g-product-images-o590003538-p590003538-0-202203170436.jpg",
},

{
  "id":15,
  "title": "BOYO Sprout Seed",
  "description":"BOYO Sprout Seed Mix for Immunity Builder 400 gms - 100% vegan",
  "price":182,
  "image":"https://www.jiomart.com/images/product/600x600/rvc7kdfmpi/boyo-sprout-seed-mix-for-immunity-builder-400-gms-100-vegan-gluten-free-product-images-orvc7kdfmpi-p591541544-0-202205231707.jpg",
  "MRP":"Rs 320",
  "RP":"MRP",
  "discount":"43 %",
  "offer":"off",

},


{
  "id":16,
  "title": "Mint leaves",
  "description":"Mint Leaves per Bunch (Approx 80 g - 150 g)",
  "price":10,
  "image":"https://www.jiomart.com/images/product/600x600/590004478/mint-leaves-per-bunch-approx-80-g-150-g-product-images-o590004478-p590004478-0-202203150316.jpg",
},





];


const soft_drinks=[

  {
    "id":17,
    "title": "Coca Cola",
    "description":"Coca Cola 1.75 L",
    "price":58,
    "image":"https://www.jiomart.com/images/product/600x600/491121060/coca-cola-1-75-l-product-images-o491121060-p491121060-0-202206022121.jpg",
    "MRP":"Rs 90",
    "RP":"MRP",
    "discount":"35 %",
    "offer":"off",

  },


  {
    "id":18,
    "title": "Sprite",
    "description":"Sprite 600 ml",
    "price":30,
    "image":"https://www.jiomart.com/images/product/600x600/490001800/sprite-600-ml-product-images-o490001800-p490001800-0-202203170616.jpg",
    "MRP":"Rs 38",
    "RP":"MRP",
    "discount":"21 %",
    "offer":"off",

  },


  {
    "id":19,
    "title": "Marinda",
    "description":"Mirinda Orange 750 ml",
    "price":37,
    "image":"https://www.jiomart.com/images/product/600x600/491208776/mirinda-orange-750-ml-product-images-o491208776-p491208776-0-202203150750.jpg",
    "MRP":"Rs 40",
    "RP":"MRP",
    "discount":"3 %",
    "offer":"off",

  },


  {
    "id":20,
    "title": "Sprite",
    "description":"Sprite 300 ml",
    "price":40,
    "image":"https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg",
    "MRP":"Rs 46",
    "RP":"MRP",
    "discount":"13 %",
    "offer":"off",

  },

];

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
































const Fru=({x})=>{

  const items=x.map((value)=>{
    return (

<Col  l={4}  className="d-inline-block card col-card" style={{width:'16rem',margin:'10px'}} id={value.id}>
<div className="card " style={{height:'65vh'}} >
  <img className="card-img-top position-relative" src={value.image} alt="Card image cap" style={{width:'100%',height:'200px'}}/>
  <div className="position-absolute top-0 start-0 " >
 <h2><span class="badge text-bg-danger rounded-circle"  >{value.discount}{value.offer}
 </span></h2>
 </div>

  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <p className="card-price"><span><b>Rs {value.price}</b></span>&ensp;&ensp;<span>{value.RP}&nbsp;<s>{value.MRP}</s></span></p>
    
  </div>
  <button className="btn btn-primary add-to"  >Add to cart</button>
</div>
  </Col>
    );
  })

return(
    <div>
      {items}  
    </div>
);


}

export default function GroceriesData(){
  return(
   <div >
<h1 style={css_style}><marquee>  Fruits and Vegetables</marquee> </h1>
<br/>
<h1 style={css_style} id="fruits">Fruits</h1>

<Fru x={Fruits} />

   
    
     <br/>
     <h1 style={css_style} id="veg">Vegetables</h1>
     <Fru x={vegetable} />

     <br/>
     <h1 style={css_style}><marquee>Beverages</marquee> </h1>
     <br/>
     <h1 id="juice">Juice</h1>
     <Fru x={soft_drinks}/>
<br/>
     <h1 id="tea">Tea</h1>
<Fru x={tea}/>
<br/>
     <h1 id="fjuice">Fruit juice</h1>
<Fru x={fruit_juice}/>

<br/>
<h1 style={css_style}><marquee>Staples</marquee> </h1>
     <br/>
     <h1 id="atta">Atta & Sooji</h1>
     <Fru x={atta}/>
<br/>
      <h1 id="dal">Dals</h1>
<Fru x={dals}/>
<br/>
     <h1 id="oil">Edible oil</h1>
<Fru x={oils}/> 






















   </div>
    
  );
};



