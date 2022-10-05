import React from 'react'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Slider from './slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryTable from './catg_table';
import Data from './database/data';



function App() {
  return (

  
<div>

  <Navbar/>
  <br/><br/>

<Container>
<Row className="d-flex align-items-center">
  <Col lg={3}>
    <div>
    <CategoryTable/>
    </div>
    </Col>
  <Col lg="9">
    <div>
      
    <Slider/>
    </div>
    </Col>
</Row>
</Container>


<br/><br/>

<Container>
  <Row align="center">
  <Data />
  </Row>
</Container>

  <br/> 
</div>


  );
}

export default App;
