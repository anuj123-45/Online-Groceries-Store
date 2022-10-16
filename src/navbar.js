import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {Link}  from 'react-router-dom';
import React, {useState} from 'react';




const Nav = (props) => {



  return (
<>

   <Container className="mt-2 ">

     <Row> 
     <Col lg={4}  className="d-flex justify-content-start ">
      <div>
      
     
 <a href="#" style={{textDecoration:'none'}} id="main-head" onClick={()=>props.handleShow(false)}><h3>Online Groceries Store</h3></a>

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
            onKeyUp={(e)=>props.searchCat(e.target.value)}
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
<button  onClick={()=>props.handleShow(true)}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i><sup>{props.count}</sup>
</button>
       </div>
   
       <div>
   <button type="button" className="btn btn-primary">
   <a href='/' className="text-decoration-none text-dark">
            Home
          </a>
        </button>
   </div>

       <div>
       <button type="button" className="btn btn-danger">
          <Link to='/grocery/signup' className="text-decoration-none text-dark">
            Sign Up
          </Link>
        </button>
       </div>
   <div>
   <button type="button" className="btn btn-warning">
   <Link to="/grocery/login" className="text-decoration-none text-dark">
            Login
          </Link>
        </button>
   </div>


     </div>
     </div>
      </Col>

      </Row>
      </Container>

  </>
 
  );
};

export default Nav;
