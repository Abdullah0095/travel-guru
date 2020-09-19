import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import './SajekSchedule.css';

const SajekSchedule = () => {
    const [selectedDate, setSelectedDate] = useState();

    return (
        <div style={{display: 'flex', margin: '60px'}}>
            <div className="sajek-detail">
                <h1>Sajek Valley</h1>
                <p>The name of Sajek Valley came from the Sajek River that originates .</p>
                <p>river The Sajek river works as a border between Bangladesh and India.</p>
                <p>Sajek valley is known for its natural environment and is surrounded by </p>
                <p>dense forest, and grassland hill tracks. Many small rivers flow through </p>
                <p>mountains among which the Kachalong and the Machalong are notable</p>
                
            </div>
            <div className="booking-form">
                <form action="">
                    origin
                    <br/>
                    <input type="text" size="50">
                        
                    </input>
                    <br/>
                    Destination
                    <br/>
                    <input type="text" size="50"/>
                    <br/>

                    <div style={{display: 'flex'}}>
                    <div>
                    From
                    
                    <ReactDatePicker selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} />
                    </div>
                    
                    <div>
                    To
                    
                    <ReactDatePicker selected={selectedDate} 
                    onChange={date => setSelectedDate(date)}  />
                    </div>
                    </div>
                </form>
            </div>
                
            
        </div>
    );
};

export default SajekSchedule;