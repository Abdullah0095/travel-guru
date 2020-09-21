import React from 'react';
import { Button, Card } from 'react-bootstrap';

import "./Home.css";




const Home = () => {

    

    return (
        <div className="home-background">
            
         
           <div className="topic-details">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and</p>
                <p>district headquarter in southern Bangladesh. It is famous</p>
                <p>mostly for it's long natural sandy beach and it ..</p>
                <Button variant="warning">Booking</Button>
                {/* <a href="https://ibb.co/Hq5z7R1"><img src="https://i.ibb.co/yqHy0KG/Rectangle-1.png" alt="Rectangle-1" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload images</a><br /> */}
                
            </div>
            <div className="topic-details">
                        <Card style={{ width: '15rem', height: '100px' }}>
                            <a href="/sajekschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/02jP3H6/Sajek.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sajek</Card.Title>  
                        </Card.Body>
                        </Card>
            </div>
                        <div className="topic-details">

                        <Card style={{ width: '15rem', height: '100px' }}>
                            <a href="/sreemongolschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/qky9mft/Sreemongol.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sreemongol</Card.Title>  
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="topic-details">

                        <Card style={{ width: '15rem', height: '100px' }}>
                            <a href="/sundorbonschedule">
                            <Card.Img variant="top"  src="https://i.ibb.co/YtcZBjN/sundorbon.png" />
                            </a>
                        <Card.Body>
                        <Card.Title>Sundorbon</Card.Title>  
                        </Card.Body>
                        </Card>
            </div>

           </div>
        
    );
};

export default Home;