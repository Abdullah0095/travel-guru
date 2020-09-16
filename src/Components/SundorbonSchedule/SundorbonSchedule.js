import React from 'react';
import { Button } from 'react-bootstrap';
import './SundorbonSchedule.css';

const SundorbonSchedule = () => {

    return (
        <div className="booking-page-style">
            <div className="half-details">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar  is a city, fishing port, tourism centre and district</p>
                 <p>headquarters in southeastern Bangladesh. It is famous mostly </p> 
                 <p>for its long natural sandy beach, and it is infamous for the</p> 
                 <p>largest refugee camp in the world. It is located 150 km (93 mi)</p> 
                 <p>south of the divisional headquarter city of Chittagong.</p> 
                 <p>Cox's Bazar is also known by the name Panowa, which translates</p> 
                 <p> literally as "yellow flower". Another old name was "Palongkee".</p>
            </div>
            
            <div className="half-details">
            <form>
                <label>
                    origin:
                    <br/>
                    <input type="text" name=""/>
                    <br/>
                    Destination
                    <br/>
                    <input type="text" name=""/>
                    <br/>
                    From
                    <br/>
                    <input type="text"/>
                    <br/>
                    To
                    <br/>
                    <input type="text"/>
                    <br/>
                    <Button variant="warning">Booking now</Button>
                </label>    
            </form>
            </div>
            
        </div>
    );
};

export default SundorbonSchedule;