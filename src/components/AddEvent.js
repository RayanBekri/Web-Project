import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addEventToList } from './EventList';

export default function AddEvent({ onAddEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState(''); 

  const handleAddEvent = () => {
    const newEvent = {
      id: uuidv4(),
      name: eventName,
      date: eventDate,
      description: eventDescription,
      image: eventImage,
      price: 0,
    };

    addEventToList(newEvent);



    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventImage('');
  };


  return (
    <div className="add-event-container">
      <h2>Add Event</h2>
      <form>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <label htmlFor="eventDescription">Event Description:</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />

        <label htmlFor="eventImage">Event Image URL:</label>
        <input
          type="text"
          id="eventImage"
          value={eventImage}
          onChange={(e) => setEventImage(e.target.value)}
        />

        <button type="button" onClick={handleAddEvent}>
          Add Event
        </button>
      </form>
    </div>
  );
}
