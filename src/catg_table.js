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
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample"><b>Fruits & Vegetables</b></a>
</Col>
    </Row>
    <Row>
        <Col><div class="collapse" id="collapseExample">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#fruits" className="text-decoration-none text-danger"><b>Fruits</b></a></li>
    <li ><a href="#veg" className="text-decoration-none text-danger"><b>Vegetables</b></a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample2"><b>Beverages</b></a>
</Col>
    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample2">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#juice" className="text-decoration-none text-danger"><b>Energy and Soft Drinks</b></a></li>
    <li ><a href="#tea" className="text-decoration-none text-danger"><b>Tea</b></a></li>
    <li ><a href="#fjuice" className="text-decoration-none text-danger"><b>Fruit juice</b></a></li>
   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample3"><b>Staples</b></a>
</Col>
    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample3">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#atta" className="text-decoration-none text-danger"><b>Atta , Flours & Sooji</b></a></li>
    <li ><a href="#dal" className="text-decoration-none text-danger"><b>Dals and Pulses</b></a></li>
    <li ><a href="#oil" className="text-decoration-none text-danger"><b>Edible Oils</b></a></li>
   </ul>
</div></Col>

    </Row>

    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample4"><b>Dairy & Bakery</b></a>
</Col>

    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample4">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#dairy" className="text-decoration-none text-danger"><b>Dairy</b></a></li>
    <li ><a href="#ghee" className="text-decoration-none text-danger"><b>Ghee</b></a></li>

   </ul>
</div></Col>

    </Row>


    <Row>
<Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample5"><b>Personal Care</b></a>
</Col>

    </Row>

    <Row>
        <Col><div class="collapse" id="collapseExample5">
 
   <ul  style={{listStyle:'none'}}>
    <li><a href="#hair" className="text-decoration-none text-danger"><b>Hair Care</b></a></li>
    <li ><a href="#oral" className="text-decoration-none text-danger"><b>Oral Care</b></a></li>

   </ul>
</div></Col>

    </Row>





































    </Container>  

    );
}

export default Tab;