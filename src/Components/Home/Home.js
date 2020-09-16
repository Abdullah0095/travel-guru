import React from 'react';
import { Button, Card, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import "./Home.css";




const Home = () => {

    

    return (
        <div className="background">
            
    <div className="">
    <Navbar  variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Form inline>
      <FormControl type="text" width="2009px" placeholder="Search your destination" className="mr-sm-2" />
    </Form>
    <Nav className="mr-auto navigation">
      <Nav.Link href="#home">news</Nav.Link>
      <Nav.Link href="#features">Destination</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Button variant="warning">Login</Button>
    </Nav>
    
  </Navbar>
      
    </div>
    
   
           <div className="home-destination">
           <div className="text-align-center">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and</p>
                <p>district headquarter in southern Bangladesh. It is famous</p>
                <p>mostly for it's long natural sandy beach and it ..</p>
                <button>Booking →</button>
                {/* <a href="https://ibb.co/Hq5z7R1"><img src="https://i.ibb.co/yqHy0KG/Rectangle-1.png" alt="Rectangle-1" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload images</a><br /> */}
                
            </div>
            <div>
                        <Card style={{ width: '18rem', height: '200px' }}>
                            <a href="/sajekschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/02jP3H6/Sajek.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sajek</Card.Title>  
                        </Card.Body>
                        </Card>
            </div>
                        <div>

                        <Card style={{ width: '18rem', height: '200px' }}>
                            <a href="/sreemongolschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/qky9mft/Sreemongol.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sreemongol</Card.Title>  
                        </Card.Body>
                        </Card>
                        </div>
                        <div>

                        <Card style={{ width: '18rem', height: '200px' }}>
                            <a href="/sundorbonschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/YtcZBjN/sundorbon.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sundorbon</Card.Title>  
                        </Card.Body>
                        </Card>
            </div>
           </div>
        </div>
    );
};

export default Home;