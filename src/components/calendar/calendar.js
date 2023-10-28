import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.sass'; 

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
    return (
      <div className="custom-calendar">
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='calendar-p text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='calendar-p text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
      </div>
    );
}

export default CustomCalendar;