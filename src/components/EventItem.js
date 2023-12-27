import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReadMore from './ReadMore';

export default function EventItem({ image, name, date, description, id, details }) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='eventItem'>
      <Link to={`/events/${id}`}>
        <div style={{ backgroundImage: `url(${image})`, height: expanded ? '450px' : '300px' }}></div>
      </Link>
      <h1>{name}</h1>
      <p>{formattedDate}</p>
      <ReadMore content={description} maxLength={20} />

      {/* Show "Show More" link if the description is longer */}
      {description.length > 20 && (
        <div className="showMoreLink" onClick={toggleExpanded}>
          {expanded ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
}
