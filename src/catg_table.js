import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { type } from '@testing-library/user-event/dist/type';

const Tab=()=>{
    return(

  <Container className='border border-3 '> 
  <h4 >Categories</h4>   
    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample">Fruits & Vegetables</a>
</Col>
    </Row>
    <Row>
        <Col><div class="collapse" id="collapseExample">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#fruits" className="text-decoration-none">Fruits</a></li>
    <li ><a href="#veg" className="text-decoration-none ">Vegetables</a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample2">Beverages</a>
</Col>
    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample2">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#juice" className="text-decoration-none">Energy and Soft Drinks</a></li>
    <li ><a href="#tea" className="text-decoration-none ">Tea</a></li>
    <li ><a href="#fjuice" className="text-decoration-none ">Fruit juice</a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample3">Staples</a>
</Col>
    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample3">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#atta" className="text-decoration-none">Atta , Flours & Sooji</a></li>
    <li ><a href="#dal" className="text-decoration-none ">Dals and Pulses</a></li>
    <li ><a href="#oil" className="text-decoration-none ">Edible Oils</a></li>
   </ul>
</div></Col>

    </Row>

    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample4">Dairy & Bakery</a>
</Col>

    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample4">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#dairy" className="text-decoration-none">Dairy</a></li>
    <li ><a href="#ghee" className="text-decoration-none ">Ghee</a></li>

   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample5">Personal Care</a>
</Col>

    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample5">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#hair" className="text-decoration-none">Hair Care</a></li>
    <li ><a href="#oral" className="text-decoration-none ">Oral Care</a></li>
    <li ><a href="#skin" className="text-decoration-none ">Skin Care</a></li>

   </ul>
</div></Col>

    </Row>





































    </Container>  

    );
}

export default Tab;