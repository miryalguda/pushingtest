import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {useNavigate} from "react-router-dom"
import Tooltip from 'react-bootstrap/Tooltip'
import { useParams, Link, Outlet } from 'react-router-dom';
import "./styles.css"
import bank  from "./images/bank.png"
 
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import React from "react"
const UserContext = React.createContext(null);    
    
  
//context start//
/*
const Route             = ReactRouterDOM.Route;
const Link              = ReactRouterDOM.Link;
const BrowserRouter     = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext (null);
*/
function Card (props){
    function classNames(){
        const bg = props.bgcolor ? ' bg- ' + props.bgcolor : ' ';
        const  txt = props.txtcolor ? ' text-' + props.txtcolor: ' text -white ';
            return 'card mb-3 ' + bg + txt;

}

return(

    <div className=  {classNames() } style = {{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className ="card-body">
          {props.title && (<h5 className="card-title"> {props.title} </h5>)}
          {props.text && (<p className="card-text"> {props.text} </p>)}
            {props.body}
            {props.status && (<div id ="createStatus"> {props.status} </div>)} 
        </div>

    </div>
);

}

function Home() {
  const ctx = React.useContext(UserContext);
    return (
      <>
      <div className= "container" style={{padding: 20}}>
  
      <h2>Home view</h2>
      <h3> {`Hello ${ctx.User}, How can I help you?`}</h3>
      {JSON.stringify(ctx.users)}
      <p> Lorem 50</p>
      
    

        <Card 
            txtcolor = "black"
            header="Badbank Landing Page"
            title = "welcome to the Bank"
            text = "you can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive" />)}
        />
    </div>
      </>
    )
}

  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <h2>404: Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
    );
  }

  

  function Accounts (){
    const navigate = useNavigate();

    const [smShow, setSmShow] = useState(false);

    return (

      <>
      <div className = "text-bg-cyan p-1"></div>
      <div className = "text-bg-darkmagenta p-3"></div>
      <div className = "text-bg-info p-1"></div>
      
      

<Navbar bg="primary" data-bs-theme="light" style={{color: "white"}}>
        <Container>
          <Navbar.Brand href="#home"><h1 style={{fontSize: "3vw" }}>BADBANK</h1></Navbar.Brand>
          <Nav className="me-auto " >
            <nav style={{ margin: "30px"}} >



            <Link to="/ " > 
                  <OverlayTrigger 
                            delay={{ hide: 450, show: 300 }} 
                            overlay={(props) => ( 
                              <Tooltip {...props}> 
                               This button will make you to login to your account!!
                              </Tooltip> 
                            )} 
                            placement="top"
                          >
                          <button type="button" className="btn btn-danger  ml-2" style={{ padding: "14px", marginRight: "10px", color: "black" }}> Home</button>  
                  </OverlayTrigger>
                </Link>

            
                
                <Link to="/CreateAccount" >

                  <OverlayTrigger 
                        delay={{ hide: 450, show: 300 }} 
                        overlay={(props) => ( 
                          <Tooltip {...props}> 
                          This button will allow you to register with us!!
                          </Tooltip> 
                        )} 
                        placement="top"
                      >
                        <button type="button" className="btn btn-danger  ml-2"  style={{ padding: "14px",marginRight: "10px", color: "black"}}> CreateAccount</button>
                  </OverlayTrigger>

                </Link>

                <Link to="/Transfers" >

                      <OverlayTrigger 
                            delay={{ hide: 450, show: 300 }} 
                            overlay={(props) => ( 
                              <Tooltip {...props}> 
                               This button will allow you to transfer money between two internal accounts!!
                              </Tooltip> 
                            )} 
                            placement="top"
                          >
                            <button type="button" className="btn btn-danger  ml-2"  style={{ padding: "14px",marginRight: "10px", color: "black"}}> Transfers</button>
                      </OverlayTrigger>

                </Link>

                <Link to="/Deposit" >

                    <OverlayTrigger 
                          delay={{ hide: 450, show: 300 }} 
                          overlay={(props) => ( 
                            <Tooltip {...props}> 
                            This button will allow you to Deposit your money!!
                            </Tooltip> 
                          )} 
                          placement="top"
                        >
                          <button type="button" className="btn btn-danger  ml-2"  style={{ padding: "14px",marginRight: "10px", color: "black"}}> Deposit</button>
                    </OverlayTrigger>

                </Link>

                <Link to="/Withdraw" >

                  <OverlayTrigger 
                        delay={{ hide: 450, show: 300 }} 
                        overlay={(props) => ( 
                          <Tooltip {...props}> 
                          This button will allow you to Withdraw your money!!
                          </Tooltip> 
                        )} 
                        placement="top"
                      >
                        <button type="button" className="btn btn-danger  ml-2"  style={{ padding: "14px",marginRight: "10px", color: "black"}}> Withdraw</button>
                  </OverlayTrigger>

                </Link>


                <Link to="/Usersdata" >
                      <OverlayTrigger 
                        delay={{ hide: 450, show: 300 }} 
                        overlay={(props) => ( 
                          <Tooltip {...props}> 
                          This button will show all Login, code, transfers and registered info!!
                          </Tooltip> 
                        )} 
                        placement="top"
                      >
                        <button type="button" className="btn btn-danger  ml-2"  style={{ padding: "14px",marginRight: "10px", color: "black"}}> Usersdata</button>
                      </OverlayTrigger>
                </Link>

             

                <Link to="/ " > 
                  <OverlayTrigger 
                            delay={{ hide: 450, show: 300 }} 
                            overlay={(props) => ( 
                              <Tooltip {...props}> 
                               This button will make you to logout of your account!!
                              </Tooltip> 
                            )} 
                            placement="top"
                          >
                          <button type="button" className="btn btn-danger  ml-2" style={{ padding: "14px", marginRight: "10px", color: "black" }}> Logout</button>  
                  </OverlayTrigger>
                </Link>


            </nav>
          </Nav>
        </Container>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" style={{background: "red"}}>Submit</Button>
          </Col>
        </Row>
      </Form> 
    </Navbar>
    <div className = "text-bg-info p-1"></div>
    <p></p>
          <div className= "col-md-4 mx-auto" >
            <img  src={bank} alt="Card image cap" style={{width: "500px", height: "400px"}}/>
          </div>
    
{/* footer start*/}
    
            <div>
            <footer className ="bg-dark  mb-5 p-5 text-white text-center footer1">

            <div className="row">
                <div className="col-sm-4">
                  <p><strong>Locations</strong></p>
                 
                </div>
                <div className="col-sm-4">
                  <p><strong>Careers</strong></p>
                 
                </div>
                <div className ="col-sm-4">
                  <p><strong>About</strong></p>
                 
                </div>
            </div>

              <p>&copy; New web site</p>
              <p><a href="mailto: info@badbank.com" className="text-white">Email Us </a></p>
            </footer> 
            </div>
            
        </>
    )
}
export default Accounts
  
