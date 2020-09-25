import { TextField } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SajekSchedule.css';

const SajekSchedule = () => {
    

    return (
        <div style={{display: 'flex', margin: '80px'}}>
            <div className="detail">
                <h1>Sajek Valley</h1>
                <p>The name of Sajek Valley came from the Sajek River that originates .</p>
                <p>river The Sajek river works as a border between Bangladesh and India.modulation</p>
                <p>Sajek valley is known for its natural environment and is surrounded by </p>
                <p>dense forest, and grassland hill tracks. Many small rivers flow through calculation </p>
                <p>mountains among which the Kachalong and the Machalong are notable bangladesh</p>
                
            </div>
            <div className="booking-form">
                <form action="">
                    origin
                    <br/>
                    <input type="text" value="Dhaka" size="43">
                        
                    </input>
                    <br/>
                    Destination
                    <br/>
                    <input type="text" value="Sajek" size="43"/>
                    <br/>

                    <div style={{display: 'flex'}}>
                    <div>
                    From
                    <br/>
                    <TextField
                    id="date"
                    label=""
                    type="date"
                    defaultValue="2020-02-20"
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                    </div>
                     
                    <div>
                    To
                    <br/>
                    <TextField
                    id="date"
                    label=""
                    type="date"
                    defaultValue="2020-02-20"
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </div>
            </div>
                    <br/>
                    <div style={{textAlign:'center'}}>
                    <Link to="/hotelsearch">
                    <Button  variant="warning">Start Booking</Button>
                    </Link>
                    </div>
                </form>
            </div>
               
        </div>

    );
};

export default SajekSchedule;