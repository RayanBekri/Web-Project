import React from "react";
import MultiplePizzas from "../assests/download (3).jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        {/* Left side with image */}
        <div className="aboutLeft">
          <img src={MultiplePizzas} alt="Multiple Pizzas" />
        </div>

        {/* Right side with text */}
        <div className="aboutRight">
          <h1> ABOUT US</h1>
          <h2>
            CEO: Wassim Trabelsi <br />
            <p>
              He is a student that wants to help people and has been a part of
              different organizations. It was the start of the creation of this
              website.
            </p>
          </h2>

          <p>
            An SDG (Sustainable Development Goals) event is a gathering or
            initiative designed to promote and advance the 17 global goals
            established by the United Nations for a more sustainable, equitable,
            and prosperous world, addressing issues such as poverty, climate
            change, and gender equality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
