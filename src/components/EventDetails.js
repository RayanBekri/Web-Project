import React, { useState } from "react";
import EventItem from "./EventItem";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EventDetails.css";

export default function EventDetails({ events, addToHistory }) {
  const { id } = useParams();
  const event = events.find((evt) => evt.id === (Number(id) || id));

  const navigate = useNavigate();

  const [price, setPrice] = useState(event?.price || 0);
  const [feedback, setFeedback] = useState("");

  const handleIncrease = () => {
    setPrice(price + 1);
  };

  const handleDecrease = () => {
    if (price > 0) {
      setPrice(price - 1);
    }
  };

  const handleInputChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPrice(newPrice);
    }
  };

  const handleDone = () => {
    console.log("Price set to:", price);
    addToHistory({ ...event, amount: price });
    // Add any additional logic for the "Done" button click
    navigate('/history'); // Redirect to the history page
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSend = () => {
    console.log("Sending feedback:", feedback);
    // Add any additional logic for the "Send" button click
    setFeedback("");
  };

  if (!event) {
    return <p>Event not found!</p>;
  }


  return (
    <section className="event-details-container">
      <EventItem
        image={event.image}
        name={event.name}
        date={event.date}
        description={event.description}
        id={event.id}
        details={true}
      />
      <div className="price-section">
        <div className="price-input">
          <button onClick={handleDecrease}>-</button>
          <input
            type="text"
            value={price}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="done-button" onClick={handleDone}>
          Done
        </button>
      </div>
      <div className="feedback-section">
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback"
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </section>
  );
}
