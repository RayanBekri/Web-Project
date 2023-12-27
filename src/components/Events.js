import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventList } from './EventList';
import EventItem from './EventItem';
import "../styles/Events.css";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='events'>
      <h1 className='eventsTitle'> EVENTS</h1>
      <div className='searchInput_container'>
        <input
          id='searchInput'
          type='text'
          placeholder='Search here...'
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className='eventlist'>
        {EventList.filter((val) => val.name.toLowerCase().includes(searchTerm.toLowerCase())).map((eventItem) => (
          <EventItem
            key={eventItem.id}
            image={eventItem.image}
            name={eventItem.name}
            date={eventItem.date}
            description={eventItem.description}
            id={eventItem.id}
          />
        ))}
      </div>
      
      <Link to="/add-event" className="add-event-button">
        Add Event
      </Link>
    </div>
  );
}
