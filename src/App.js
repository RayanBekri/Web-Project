// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import History from './components/History';
import Contact from './components/Contact';
import EventDetails from './components/EventDetails';
import { EventList } from './components/EventList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEvent from './components/AddEvent';

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (event) => {
    const currentDate = new Date();
    event.donationDate = currentDate.toLocaleDateString('en-US');
    setHistory((prevHistory) => [...prevHistory, event]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <hr></hr>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History history={history} />} />
          <Route
            path="events/:id"
            element={<EventDetails events={EventList} addToHistory={addToHistory} />}
          />
          <Route path="contact" element={<Contact />} />
          {/* Pass the addToHistory function as onAddEvent prop */}
          <Route path="/add-event" element={<AddEvent onAddEvent={addToHistory} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
