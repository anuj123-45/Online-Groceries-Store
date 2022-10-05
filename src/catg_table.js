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
   </ul>
</div></Col>

    </Row>





    </Container>  

    );
}

export default Tab;