
import './simpleCal.css';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const SimpleCal = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return <div className='calendar'>
        <Calendar showWeekNumbers={true} onChange={onChange} value={date} />
    </div>
}

export default SimpleCal;