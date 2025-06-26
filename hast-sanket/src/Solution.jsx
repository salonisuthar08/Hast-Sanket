
import React from "react";
import "./App.css";

function Solution() {
    return(
        <section id="solution" className="section">
         <h2>Our Solution</h2>
          <p>
        We built a web-based real-time ISL-to-text-and-speech translator using computer vision and AI, accessible to anyone with a camera.
      </p>
      <ul className="feature-lists">
        <li className="feature"> # Real-time video input</li>
        <li  className="feature"  > # Indian Sign Language gesture detection</li>
        <li  className="feature"> # Output as text and audio</li>
        <li  className="feature"> # Mobile and desktop support</li>
      </ul>
        </section>
    );
    
}
export default Solution;