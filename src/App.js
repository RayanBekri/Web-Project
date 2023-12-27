import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { EventList } from "./components/EventList";
import EventDetails from "./components/EventDetails";
import History from "./components/History";
import Events from "./components/Events";
import AddEvent from './components/AddEvent';

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (event) => {
    const currentDate = new Date();
    event.donationDate = currentDate.toLocaleDateString('en-US');
    setHistory((prevHistory) => [...prevHistory, event]);
  };

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
            path="events/:id"
            element={<EventDetails events={EventList} addToHistory={addToHistory} />}
          />
        <Route
          path="/customers"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute allowedRoles={["user"]}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute allowedRoles={["user"]}>
              <History />
            </PrivateRoute>
          }
        />
                  <Route path="/add-event" element={<AddEvent onAddEvent={addToHistory} />} />

      </Routes>
    </div>
  );
}

export default App;
