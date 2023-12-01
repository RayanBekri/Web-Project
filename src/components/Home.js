import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Home.css"
function Home() {
  return (
    <div className="home">
      <div className="headerContainer" >
        <h1> aawen khouk</h1>
        <p>aamel el khyr ou anseh</p>
        <Link to="/events">
        <button> Help </button>
        </Link>
      </div>
    </div>
  )
}
export default Home;