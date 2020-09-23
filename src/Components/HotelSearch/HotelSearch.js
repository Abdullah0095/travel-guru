import { Map } from 'google-maps-react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const HotelSearch = () => {
     
    return (
        <Container style={{backgroundColor: "white"}}>
          <Row>
              <Col xs={6}>
                
                <div style={{display:'flex', margin: '10px'}}>
                    <div style={{marginRight: '15px'}}><img src="https://i.ibb.co/CzYBHJy/Rectangle-26.png" alt="" height="200px" width="250px"/></div>
                    <div>
                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                        <p>4 guests 2 bedrooms 2 beds 2 baths </p>
                        <p>With Air conditioning Kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p><img src="https://i.ibb.co/MB7p8ry/star-1.png" width="20px"/> 4.9(20)</p>
                    </div>
                </div>

                    <div style={{display:'flex', margin: '10px'}}>
                    <div style={{marginRight: '15px'}}><img src="https://i.ibb.co/zRMj4QJ/Rectangle-27.png" alt="" height="200px" width="250px"/></div>
                    <div>
                        <h5>Apartment in Lost Panorama</h5>
                        <p>4 guests 2 bedrooms 2 beds 2 baths </p>
                        <p>With Air conditioning Kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p><img src="https://i.ibb.co/MB7p8ry/star-1.png" width="20px"/> 4.9(20)</p>

                    </div>
                    </div>

                    <div style={{display:'flex', margin: '10px'}}>
                    <div style={{marginRight: '15px'}}><img src="https://i.ibb.co/5BBP9kR/Rectangle-28.png" alt="" height="200px" width="250px"/></div>
                    <div>
                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                        <p>4 guests 2 bedrooms 2 beds 2 baths </p>
                        <p>With Air conditioning Kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p><img src="https://i.ibb.co/MB7p8ry/star-1.png" width="20px"/> 4.9(20)</p>
                    </div>
                    </div>
                
              </Col>
              <Col xs={6}>
              
              

              </Col>
          </Row>
        </Container>
    );
};

export default HotelSearch;