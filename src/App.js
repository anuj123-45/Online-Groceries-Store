import React from 'react'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Slider from './slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryTable from './catg_table';
import Fruit from './database/fruits';
import Vegi from './database/vegetable';
import EnergyDrinks from './database/energydrinks';
import Tea from './database/tea';
import FruitJuice from './database/frjuice';
import Atta from './database/atta';
import Dals from './database/dal';
import Oil from './database/edible oil';
import DairyP from './database/dairy';
import Ghee from './database/ghee';
import HairCare from './database/haircare';
import OralCare from './database/oralcare';



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
  <Fruit/>
  </Row>
</Container>
<br/>
<Container>
  <Row align="center">
  < Vegi/>
  </Row>
</Container>
<br/>
<Container>
  <Row align="center">
  < EnergyDrinks/>
  </Row>
</Container>
<br/>
<Container>
  <Row align="center">
  < Tea/>
  </Row>
</Container>

<br/>
<Container>
  <Row align="center">
  < FruitJuice/>
  </Row>
</Container>


<br/>
<Container>
  <Row align="center">
  < Atta/>
  </Row>
</Container>


<br/>
<Container>
  <Row align="center">
  < Dals/>
  </Row>
</Container>

<br/>
<Container>
  <Row align="center">
  < Oil/>
  </Row>
</Container>
<br/>
<Container>
  <Row align="center">
  < DairyP/>
  </Row>
</Container>
<br/>
<Container>
  <Row align="center">
  < Ghee/>
  </Row>
</Container>

<br/>
<Container>
  <Row align="center">
  < HairCare/>
  </Row>
</Container>

<br/>
<Container>
  <Row align="center">
  < OralCare/>
  </Row>
</Container>















  <br/> 
 
</div>


  );
}

export default App;
