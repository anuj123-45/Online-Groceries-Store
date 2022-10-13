import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React  from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';




const Nav = () => {
  return (

   <Container className="mt-2 ">

     <Row> 
     <Col lg={4}  className="d-flex justify-content-start ">
      <div>
     <a href="/home" style={{textDecoration:'none'}}><h3 id="main-head" style={{fontWeight:'bolder'}}>Online Groceries Store</h3></a>
      </div>
      </Col>

 <Col lg={4} className="justify-content-center ">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i> 
          </span>
        </div>
      </Col>

<Col lg={4} className="d-flex justify-content-end">
  <div>
    
  
      <div className="d-flex gap-3">
       <div>
<a href="#"> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></a><sup>{'3'}</sup>
       </div>
      

       <div>
       <button type="button" className="btn btn-danger">
          <a href="#" className="text-decoration-none text-dark">
            Sign Up
          </a>
        </button>
       </div>
   <div>
   <button type="button" className="btn btn-warning">
          <a href="#" className="text-decoration-none text-dark">
            Login
          </a>
        </button>
   </div>
     </div>
     </div>
      </Col>

      </Row>
      </Container>

 
  );
};

export default Nav;
