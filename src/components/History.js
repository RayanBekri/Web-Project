import React, { useState } from 'react';
import '../styles/History.css';

export default function History({ history }) {
  const [searchTerm, setSearchTerm] = useState('');
  const totalAmount = history.reduce((total, event) => total + event.amount, 0);


  // Filter the history based on the search term
  const filteredHistory = history.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="history-container">
      <h2 className="history-header">Donation History</h2>

      {/* Display total amount */}
      <p className="total-amount">Total Amount Spent: ${totalAmount}</p> 
    

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {filteredHistory.map((event) => (
        <div className="history-item" key={event.id}>
          <div className="event-details">
            <img src={event.image} alt={event.name} />
            <div>
              <h3>{event.name}</h3>
              <p>Amount: ${event.amount}</p>
              <p>Date of Donation: {formatDate(event.donationDate)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
