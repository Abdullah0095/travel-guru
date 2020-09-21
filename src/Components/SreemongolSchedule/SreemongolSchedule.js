
import { TextField } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';

const SreemongolSchedule = () => {
    return (
        <div>
            <div style={{display: 'flex', margin: '60px',}}>
        <div className="detail">
            <h1>Sajek Valley</h1>
            <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; .</p>
            <p> two brothers who settled on the banks of the Hail Haor.[2] A copper plate</p>
            <p>of Raja Marundanath from the 11th century was found in Kalapur. During an excavation </p>
            <p> at Lamua, an ancient statue of Ananta Narayan was dug out  of the box option</p>
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
                <input type="text" value="Sreemongol" size="43"/>
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
                <Button  variant="warning">Start Booking</Button>
                </div>
            </form>
        </div>
           
    </div>
        </div>

);
};

export default SreemongolSchedule;