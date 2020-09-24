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
              
              <div className="google-map">
                        <iframe height="700px" width="500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.953730211!2d85.8462125075647!3d23.452185887261443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1600418722974!5m2!1sen!2sbd"></iframe>
                    </div>

              </Col>
          </Row>
        </Container>
    );
};

export default HotelSearch;